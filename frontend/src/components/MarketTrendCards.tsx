import {useEffect, useState }from 'react';
import axios from 'axios';
import up_arrow from '../img/upArrow.svg'
import down_arrow from '../img/downArrow.svg'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ScriptableContext,
  } from 'chart.js';
  import type { ChartData, ChartOptions } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import gradient from 'chartjs-plugin-gradient';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    gradient,
  );

  const MarketTrendCard: React.FC<{valute: string, currency: string, name:string}> = (props) => {

    const icon = require(`../img/${props.valute+'.svg' || 'default.svg'}`);
    const [percent, setPercent] = useState<string>();
    const [arrow, setArrow] = useState(true);
    const [value, setValue] = useState<string>();
    const [data, setData] = useState<ChartData<'line'>>();
    const [options, setOptions]=useState<ChartOptions<'line'>>(
        {
            responsive: true,
            elements: {
                point:{
                    radius:0,
                },
                line:{
                    tension: 0
                }
            },
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            },
            plugins: {
              legend: {
                display: false,
                position: 'top' as const,
              },
              title: {
                display: false,
                text: 'Chart.js Line Chart',
              },
            },
          }
    );

    useEffect(() => {
        axios
          .get(`https://api.coingecko.com/api/v3/coins/${props.valute}/market_chart?vs_currency=${props.currency}&days=30&interval=daily&precision=5&x_cg_demo_api_key=CG-e6vw6E6g9EVAj35TfPxypySg`)
          .then((response) => {
            const percentChange = Math.abs(((response.data.prices[response.data.prices.length - 1][1] - response.data.prices[0][1]) / response.data.prices[0][1]) * 100);
            setPercent(`${percentChange.toFixed(2)}%`);
            setValue(`$${response.data.prices[response.data.prices.length - 1][1].toFixed(3)}`);
            if (((response.data.prices[response.data.prices.length - 1][1] - response.data.prices[0][1]) / response.data.prices[0][1]) * 100 > 0 ){
                setArrow(true);
                setData( {
                    labels:response.data.prices.map((price:number[])=>{return price[0];}),
                    datasets: [
                      {
                        data: response.data.prices.map((price:number[])=>{return price[1];}),
                        borderColor: 'rgb(6, 180, 112)',
                        fill: "start",
                        backgroundColor: (context: ScriptableContext<"line">) => {
                            const ctx = context.chart.ctx;
                            const gradient = ctx.createLinearGradient(0, 0, 0, 100);
                            gradient.addColorStop(0, "rgba(6,180,112,0.3)");
                            gradient.addColorStop(0.9, "rgba(6,180,112,0)");
                            return gradient;
                        },
                      }
                    ],
                  }); 
            }
            else{
                setArrow(false);
                setData( {
                    labels:response.data.prices.map((price:number[])=>{return price[0];}),
                    datasets: [
                      {
                        data: response.data.prices.map((price:number[])=>{return price[1];}),
                        borderColor: 'rgb(247, 78, 44)',
                        fill: "start",
                        backgroundColor: (context: ScriptableContext<"line">) => {
                            const ctx = context.chart.ctx;
                            const gradient = ctx.createLinearGradient(0, 0, 0, 100);
                            gradient.addColorStop(0, "rgba(247,78,44,0.3)");
                            gradient.addColorStop(0.9, "rgba(247,78,44,0)");
                            return gradient;
                        },
                      }
                    ],
                  }); 
            }
             
        })
          .catch((error) => console.error(error));
      }, []);
    
    

  return (
    <div className='market-trend-card'>
        <img src={icon} alt={props.valute} className='market-trend-card-icon'/>
        <div className="card-crypto-title">
            {props.name} / USD
        </div>
        <div className='card-grow-direction'>
                {arrow ?
                <div className='card-grow-procents'>
                    <img src={up_arrow} alt="first_arrow" />
                    {percent}
                </div>
                :
                <div className='card-down-procents'>
                    <img src={down_arrow} alt="first_arrow" />
                    {percent}
                </div>
                }
            <p>{value}</p>
        </div>
        {data ? (<div className='market-trend-card-graphyc'><Line options={options} data={data}/></div>) : null}
    </div>
  );
};

export default MarketTrendCard;
