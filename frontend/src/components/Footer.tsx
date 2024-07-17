import React from 'react';
import logo from '../img/logo.svg';
import discord from '../img/discord.svg'
import tg from '../img/tg.svg'
import inst from '../img/inst.svg'
import linked from '../img/linked.svg'
import youtube from '../img/youtube.svg'
import dot from '../img/dot.svg'
import styles from '../styles/App.module.css'
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {

  return (
    <footer className={styles.footer}>
        <div className={styles.app_footer}>
        <div className={styles.footer_community}>
            <div className={styles.logofooter}>
                <img src={logo} alt="логотип" className={styles.headimg} />
            </div>
                <div className={styles.community}>
                <div>Community:</div>
                <img src={discord} alt="discord" />
                <img src={tg} alt="tg" />
                <img src={inst} alt="inst" />
                <img src={linked} alt="linked" />
                <img src={youtube} alt="youtube" />
            </div>
        </div>
        <div className={styles.footer_line}></div>
        <div className={styles.footer_cards_links}>
            <div className={styles.footer_card}>
                <div className={styles.footer_card_title}>Crypto Brains</div>
                <div className={styles.footer_link}>About Us</div>
                <div className={styles.footer_link}>Our Team</div>
                <div className={styles.footer_link}>Road Map</div>
                <div className={styles.footer_link}>Risk Disclosure</div>
            </div>
            <div className={styles.footer_card}>
                <div className={styles.footer_card_title}>Knowledge</div>
                <div className={styles.footer_link}>F.A.Q.</div>
                <div className={styles.footer_link}>Articals</div>
                <div className={styles.footer_link}>Video Tutorial</div>
                <div className={styles.footer_link}>Beginner’s Guide</div>
            </div>
            <div className={styles.footer_card}>
                <div className={styles.footer_card_title}>Services</div>
                <div className={styles.footer_link}>API Service</div>
                <div className={styles.footer_link}>Token Listing</div>
                <div className={styles.footer_link}>API Document</div>
                <div className={styles.footer_link}>Ticket Services</div>
            </div>
            <div className={styles.footer_card}>
                <div className={styles.footer_card_title}>Exchange</div>
                <div className={styles.footer_link}>P2P</div>
                <div className={styles.footer_link}>Referral</div>
                <div className={styles.footer_link}>Markets</div>
                <div className={styles.footer_link}>Affiliate Program</div>
            </div>
            <div className={styles.footer_card}>
                <div className={styles.footer_card_title}>Support Sevice</div>
                <div className={styles.footer_link}>Career</div>
                <div className={styles.footer_link}>Comunity</div>
                <div className={styles.footer_link}>Customer Chat</div>
                <div className={styles.footer_link}>Technical Support</div>
            </div>
            <div className={styles.footer_card}>
                <div className={styles.footer_card_title}>Press</div>
                <Link to="/blog" className={styles.footer_link}>Blog</Link>
                <div className={styles.footer_link}>News</div>
                <div className={styles.footer_link}>Events</div>
            </div>
        </div>
        <div className={styles.footer_line}></div>
        <div className={styles.footer_bott}>
            <div className={styles.bottom_text}>
                <div>©Copyright 2022 All Rights Are Reserved.</div>  
                <img src={dot} alt="firstdot" />
                <div>Privacy Policy</div>
                <img src={dot} alt="seconddot" />
                <div>Terms of Use</div>
            </div>
            <div className={styles.bottom_switch}>
                {/* <select name="language" className="language-select">
                    <option value="en">English</option>
                    <option value="ru">Russian</option>
                </select> */}
            </div>
        </div>
    </div>
    </footer>
  );
};

export default Footer;
