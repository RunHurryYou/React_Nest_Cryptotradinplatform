import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Home.css';
import styles from '../styles/App.module.css'
import arrow from '../img/button-home-arrow.svg';
import note from '../img/note.png';
import chooseimg from '../img/choose-us-img.png';
import appstore from '../img/appstore.svg';
import playstore from '../img/playstore.svg';
import qr from '../img/qr.svg';
import downloadimg from '../img/download-app.png';
import MarketTrendCard from '../components/MarketTrendCards';
import SimpleStep from '../components/SimpleStep'
import SimpleSlider from '../components/SimpleSlider';
import QuestionHome from '../components/QuestionHome';

const Home: React.FC = () => {
  return (
    <>
    <Header></Header>
    <main>
      <div className='home-main'>
      <div className="home-header">
      <div className="home-header-text">
        <div className='home-header-title'>
          <div className="home-header-title-line"></div>
          <p>Crypto Brains</p> 
        </div>
        <h1>Buy & Sell Crypto Easy With Crypto Brains</h1>
        <div className="home-header-line"></div>
        <h2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h2>
        <div className="home-header-buttons">
          <a href="" className='home-header-firstbutton'>
            Start Now
            <img src={arrow} alt="icon_bitton" />
          </a>
          <a href="" className="home-header-secondbutton">
          Beginner’s Guide
          </a>
        </div>
      </div>
      <img src={note} alt="note" className="note" />
      </div>
      <div className='market-trends'>
        <div className="market-trends-container">
          <div className="market-trends-header">
          <h2 className='market-trends-title'>Market Trends</h2>
          <div className='market-trends-filters'>
            <div className="market-trends-filter">All</div>
            <div className="market-trends-filter">Top Gainers</div>
            <div className="market-trends-filter">Top Losers</div>
            <div className="market-trends-filter">New Listing</div>
            <div className="market-trends-filter">Defi</div>
            <div className="market-trends-filter">Metaverse</div>
          </div>
          </div>
          <div className={styles.footer_line}></div>
          <div className="market-trends-cards">
            <MarketTrendCard valute="bitcoin" currency="usd" name="Bitcoin"></MarketTrendCard>
            <MarketTrendCard valute="bitshares" currency="usd" name="BTS"></MarketTrendCard>
            <MarketTrendCard valute="komodo" currency="usd" name="KMD"></MarketTrendCard>
            <MarketTrendCard valute="ethos-2" currency="usd" name="Ethos"></MarketTrendCard>
            <MarketTrendCard valute="metaverse-etp" currency="usd" name="ETP"></MarketTrendCard>
          </div>
        </div> 
        <a href='' className='all-market-button'>
            See All Market
            <img src={arrow} alt="all-market-button" />
          </a>
      </div>
      <div className="simple-step">
        <div className="simple-step-container">
          <h1 className='simple-steps-title'>
            Start Trading In Simple Process
          </h1>
          <h2 className="simple-steps-describe">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </h2>
          <div className={styles.footer_line}></div>
          <div className='simple-step-cards'>
            <SimpleStep title='Create Account' describe='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' btn='Sign Up Now'></SimpleStep> 
            <SimpleStep title='Verify Bank Account' describe='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' btn='Verify Now'></SimpleStep> 
            <SimpleStep title='Add Fund in Wallet' describe='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' btn='Add Now'></SimpleStep> 
            <SimpleStep title='Start Trading' describe='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' btn='Start Now'></SimpleStep> 
          </div>
        </div>
      </div>
      <div className='choose-us'>
        <div className="choose-us-container">
          <div className="choose-us-title">
              Why Choose Crypto Brains!
          </div>
          <div className="choose-us-describe">
          When an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </div>
          <div className={styles.footer_line}></div>
          <div className="choose-us-content">
            <div className="choose-us-cards">
                <div className="choose-us-card">
                  <p className="choose-us-card-number">
                    01
                  </p>
                  <div className="choose-us-card-info">
                    <div className="choose-us-card-title">
                      Easy Trading
                    </div>
                    <div className="choose-us-card-describe">
                      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                    </div>
                  </div>
                  <a href="" className="choose-us-card-btn">
                    Start Now
                    <img src={arrow} alt="" />
                  </a>
                </div>
                <div className={styles.footer_line}></div>
                <div className="choose-us-card">
                  <p className="choose-us-card-number">
                    02
                  </p>
                  <div className="choose-us-card-info">
                    <div className="choose-us-card-title">
                      24/7 Help Service
                    </div>
                    <div className="choose-us-card-describe">
                      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                    </div>
                  </div>
                  <a href="" className="choose-us-card-btn">
                    Start Now
                    <img src={arrow} alt="" />
                  </a>
                </div>
                <div className="footerline"></div>
                <div className="choose-us-card">
                  <p className="choose-us-card-number">
                    03
                  </p>
                  <div className="choose-us-card-info">
                    <div className="choose-us-card-title">
                      Fast Service
                    </div>
                    <div className="choose-us-card-describe">
                      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                    </div>
                  </div>
                  <a href="" className="choose-us-card-btn">
                    Start Now
                    <img src={arrow} alt="" />
                  </a>
                </div>
                <div className={styles.footer_line}></div>
                <div className="choose-us-card">
                  <p className="choose-us-card-number">
                    04
                  </p>
                  <div className="choose-us-card-info">
                    <div className="choose-us-card-title">
                      Low Charges
                    </div>
                    <div className="choose-us-card-describe">
                      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                    </div>
                  </div>
                  <a href="" className="choose-us-card-btn">
                    Start Now
                    <img src={arrow} alt="" />
                  </a>
                </div>
            </div>
            <img src={chooseimg} alt="choose" className='choose-us-img'/>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <div className="testimonials-title">
              What Traders Saying About Us!
            </div>
            <div className="testimonials-describe">
              Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled type specimen book.
            </div>
          </div>
          <div className={styles.footer_line}></div>
          <div className='tesimonials-slider'>
            <SimpleSlider></SimpleSlider>
          </div>
        </div>
      </div>
      <div className="app-download">
            <div className="app-download-container">
              <div className="app-download-info">
                <div className='app-download-text'>
                <h1 className='app-download-title'>Never Miss Trading, Download Our Application</h1>
                <p className='app-download-describe'>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                </div>
                <div className="app-download-btns">
                  <a href="" className='app-download-btn'>
                    <img src={appstore} alt="appstore" />
                    App Store
                    </a>
                  <a href="" className='app-download-btn'>
                    <img src={playstore} alt="playstore" />
                    Play Store
                    </a>
                  <a href="" className='app-download-btn'><img src={qr} alt="qr" /></a>
                </div>
              </div>
            </div>
            <img src={downloadimg} alt="downloadimg"  className='downloadimg'/>
      </div>
      <div className='asked-questions'>
        <div className="asked-questions-container">
          <div className="asked-questions-title">
            Frequently Asked Questions
          </div>
          <div className="asked-questions-describe">
            When an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </div>
          <div className={styles.footer_line}></div>
          <div className="questions">
            <div className='first-question-container'>
              <QuestionHome 
            title='What is the difference between Defi and Metaverse ?' 
            describe='When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            ></QuestionHome>
            <QuestionHome 
            title='What should I do if Google verification fails to bind ?' 
            describe='When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            ></QuestionHome>
            <QuestionHome 
            title='How to complete your KYC Verification ?' 
            describe='When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            ></QuestionHome>
            <QuestionHome 
            title='What should I do if I enter the Google verification code incorrectly ?' 
            describe='When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            ></QuestionHome>
            </div>
            <div className='second-question-container'>
              <QuestionHome 
            title='Can We Enter in Website Without Login or Sign Up ?' 
            describe='When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            ></QuestionHome>
            <QuestionHome 
            title='What should I do if I lost the binded phone number ?' 
            describe='When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            ></QuestionHome>
            <QuestionHome 
            title='How to register an account on the web ?' 
            describe='When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            ></QuestionHome>
            <QuestionHome 
            title='How we Change mobile number ?' 
            describe='When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            ></QuestionHome>
            </div>
            
          </div>
        </div>
      </div>
      </div>
    </main>
    <Footer></Footer>
    </>
  );
};

export default Home;
