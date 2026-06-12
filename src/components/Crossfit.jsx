import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import grouppic from "../assets/grouppic.jpg"
import crossfit from "../assets/crossfit-white.jpg"
import bannerImg from "../assets/new-crossfit-banner.png"
import crossfitJournal from "../assets/crossfit-journal.webp"
import CrossfitCoaches from './CrossfitCoaches';
import NewsLetter from './NewsLetter';
import chainlink from "../assets/chainlink.png"
import WhyCrossfit from './WhyCrossfit';
import crossfitlogo from "../assets/crossfit-white-remove-background.com.png"
import Schedule from './Schedule';
import DropIn from './DropIn';
import CarouselCardCrossfit from "../components/CarouselCardCrossfit"
import JoinButton from './JoinButton';
import instagram from "../assets/darkmode-instagram.svg"
import facebook from "../assets/darkmode-facebook.svg"
import AfterSchoolBanner from './AfterSchoolBanner'
import HyroxBanner from './HyroxBanner'
import ImageLightbox from './ImageLightbox'
import '../crossfit-journal-banner.css'


function Crossfit() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const tryScroll = () => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            };
            const t = setTimeout(tryScroll, 100);
            return () => clearTimeout(t);
        }
    }, [location]);

    return (
        <div className='crossfit-page'>
            <div className="crossfit-header-div">
                <div className="crossfit-header">
                    <img src={crossfitlogo} alt="Powerhouse Crossfit" className="crossfit-header-brand" />
                    <h1 className="header-one">Together We Are</h1>
                    <h2>Stronger!</h2>
                    <div className="crossfit-header-socials">
                        <a href="https://www.facebook.com/powerhousecombine" target="_blank" rel="noopener noreferrer" aria-label="Crossfit/Hyrox Facebook">
                            <img src={facebook} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com/powerhousecombine" target="_blank" rel="noopener noreferrer" aria-label="Crossfit/Hyrox Instagram">
                            <img src={instagram} alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
            {/* <img src={bannerImg} alt='Crossfit Banner' className='crossfit-banner' /> */}
            <CarouselCardCrossfit />
            <Schedule />
            <HyroxBanner />
            {/* <div className='group-pic-container'>
                <img className='crossfit-img-logo-group' src= {crossfitlogo} alt="logo" />
                <img className='crossfit-group-pic' src= {grouppic} alt="group pic" />
            </div> */}
            {/* <div className="skull-div" style={{ backgroundImage: `url(${chainlink})` }}></div> */}
            {/* <div className="skull-div" style={{ backgroundImage: `url(${chainlink})` }}></div> */}


            {/* <div className='crossfit-container'>
                <div className='crossfit-info'>
                    <h1>Powerhouse Crossfit/Hyrox</h1>
                    <p>At Powerhouse Crossfit/Hyrox our mission is to promote healthier lifestyles within our community and for all walks of life.  We focus on bringing like-minded people into our family based atmosphere and assist them in adopting positive changes through physical fitness, nutrition and daily interactions with one another.  This environment is a social unit, in which we all work together to achieve common goals and in doing so create the strongest of bonds and friendships.  Through physical fitness we forge strong minds and bodies in order to develop our athletic abilities.  With nutritional awareness we fuel our bodies with what it needs to heal, recover and meet our daily demands.  Together we will become stronger than doing it alone! </p>
                    <p>#athletesofallages</p>
                    <a href="http://crossfit.com" target="_blank" rel="noopener noreferrer">
                        <button>Learn More</button>
                    </a>
                </div>
                <div className='crossfit-img-div'>
                    <img src={crossfit} alt='Crossfit Logo' />
                </div>
            </div>*/}
            {/* <div className = "skull-div" style = {{backgroundImage: `url(${chainlink})`}}></div> */}
            <CrossfitCoaches />
            <AfterSchoolBanner />
            <WhyCrossfit />
            {/* <div className = "skull-div" style = {{backgroundImage: `url(${chainlink})`}}></div> */}

            <section className='crossfit-journal-banner'>
                <div className='crossfit-journal-banner-inner'>
                    <ImageLightbox
                        src={crossfitJournal}
                        alt='Crossfit Journal'
                        className='crossfit-journal-banner-img'
                    />
                    <div className='crossfit-journal-banner-content'>
                        <h2 className='crossfit-journal-banner-title'>The Crossfit Journal</h2>
                        <a
                            href="https://journal.crossfit.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='crossfit-journal-banner-btn'
                        >
                            Find out more
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Crossfit;