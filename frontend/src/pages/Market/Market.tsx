import React, {useEffect, useState} from "react";
import styles from "./Market.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MarketTrendCard from "../../components/MarketTrendCards";
import search from "./img/search_icon.svg";
import MarketCard from "../../components/MarketCard";
import axios from "axios";


const Market: React.FC = () => {

  const [data, setData] = useState<{ id: string; name: string }[]>();
  const [numDisplayed, setNumDisplayed] = useState(16);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.coingecko.com/api/v3/coins/list?include_platform=false&x_cg_demo_api_key=CG-e6vw6E6g9EVAj35TfPxypySg");
      setData(response.data.map((item: { id: string , name:string}) => item));
    };

    fetchData();
  }, []);
  
  const handleClick = () => {
    if (!data) {
      return;
    }
    if(numDisplayed + 10 <= data.length)
      setNumDisplayed(numDisplayed + 10);
    else {
      return;
    }
  };

  return (
    <>
      <Header></Header>
      <main className={styles.market}>
        <div className={styles.market_container}>
          <h1>Featured Coins</h1>
          <div className={styles.featured_coins}>
            <MarketTrendCard valute="bitcoin" currency="usd" name="Bitcoin"></MarketTrendCard>
            <MarketTrendCard valute="bitshares" currency="usd" name="BTS"></MarketTrendCard>
            <MarketTrendCard valute="komodo" currency="usd" name="KMD"></MarketTrendCard>
            <MarketTrendCard valute="ethos-2" currency="usd" name="Ethos"></MarketTrendCard>
            <MarketTrendCard valute="metaverse-etp" currency="usd" name="ETP"></MarketTrendCard>
          </div>
        <div className={styles.footer_line}></div>
        <div className={styles.market_trend}>
          <div className={styles.market_trend_header}>
            <div className={styles.market_trend_filters}>
              <div className={styles.filter}>Watchlist</div>
              <div className={styles.filter}>USDT</div>
              <div className={styles.filter}>BTC</div>
              <div className={styles.filter}>TRX</div>
              <div className={styles.filter}>DAI</div>
              <div className={styles.filter}>BUST</div>
              <div className={styles.filter}>Defi</div>
              <div className={styles.filter}>BNB</div>
              <div className={styles.filter}>XRP</div>
            </div>
            <div className={styles.search_bar}>
              <img src={search} alt="search"></img>  
              <input type="text" className={styles.search} placeholder="Search Here"/>
            </div>
          </div>
          <div className={styles.market}>
            <div className={styles.market_heading}>
              <div className={styles.heading}>Coin Name</div>
              <div className={styles.heading}>Price</div>
              <div className={styles.heading}>24h Change</div>
              <div className={styles.heading}>24h Volume</div>
              <div className={styles.heading}>24h High</div>
              <div className={styles.heading}>Market Cap</div>
              <div className={styles.heading}>Action</div>
            </div>
            <div className={styles.cards}>
            {data && data.slice(0, numDisplayed).map((elem) => <MarketCard key={elem.id} id={elem.id} currency="usd" name={elem.name}/>)}
            <button onClick={handleClick} className={styles.show_more}>Load More</button>
            </div>
          </div>
          
        </div>
        </div>
      </main>
      <Footer></Footer>
    </>
)
};

export default Market;