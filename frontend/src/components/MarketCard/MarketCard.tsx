import React, {useState, useEffect} from "react";
import styles from "./MarketCard.module.scss";
import axios from "axios";
import down from "./img/downArrow.svg";
import up from "./img/upArrow.svg";

interface MarketCardProps {
  id: string;
  currency: string;
  name:string;
}

const MarketTrend: React.FC<MarketCardProps> = ({ id, currency, name }) => {
  const [data, setData] = useState();
  const [price, setPrice]= useState('No Data');
  const [change, setChange]=useState('No Data');
  const [volume, setVolume]=useState('No Data');
  const [cap, setCap]=useState('No Data');
  const [color, setColor]=useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${currency}&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=false&precision=5&x_cg_demo_api_key=CG-e6vw6E6g9EVAj35TfPxypySg`);
      setData(response.data);
      setPrice('$'+String(Object.values(response.data[id])[0]));
      if(String(Number(Object.values(response.data[id])[3]).toFixed(3))[0]==='-'){
        setColor(false);
        const ch:string=String(Number(Object.values(response.data[id])[3]).toFixed(3))+"%";
        setChange(ch.substring(1));
      }

      setVolume('$'+String(Number(Object.values(response.data[id])[2]).toFixed(3)));
      setCap('$'+String(Number(Object.values(response.data[id])[1]).toFixed(3)));
      console.log(response.data);
    };

    setTimeout(() => {fetchData();}, 3000);
    fetchData();
  }, [data]);

  return (
    <div className={styles.card}>
      <div className={styles.coin_name}>
        {name} / {currency.toUpperCase()}
      </div>
      <div className={styles.price}>{price}</div>
      <div className={color ? styles.change: styles.change_down}>
        {color?
        <img src={up} alt="" />
        :
        <img src={down} alt="" />
        }
        {change}
      </div>
      <div className={styles.volume}>{volume}</div>
      <div className={styles.high}>$ 28,482,37.18</div>
      <div className={styles.market_cap}>{cap}</div>
      <div className={styles.action}>Trade</div>
    </div>
  );
};

export default MarketTrend;