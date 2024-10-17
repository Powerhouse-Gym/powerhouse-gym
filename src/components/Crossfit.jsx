import React from 'react';
import crossfit from "../assets/crossfit-white.jpg"
import bannerImg from "../assets/new-crossfit-banner.png"
import crossfitJournal from "../assets/crossfit-journal.webp"
import CrossfitCoaches from './CrossfitCoaches';
import NewsLetter from './NewsLetter';
import chainlink from "../assets/chainlink.png"
import WhyCrossfit from './WhyCrossfit';

function Crossfit() {
    return (
        <div className='crossfit-page'>
            <div className = "crossfit-header-div"><div className = "crossfit-header">
                <h1 className = "header-one">Together We Are</h1>
                <h2>Stronger !</h2>
                </div></div>
            <NewsLetter />
            <div className = "skull-div" style = {{backgroundImage: `url(${chainlink})`}}></div>
<WhyCrossfit />
<div className = "skull-div" style = {{backgroundImage: `url(${chainlink})`}}></div>

            
            {/* <img src={bannerImg} alt='Crossfit Banner' className='crossfit-banner' /> */}
            <div className='crossfit-container'>
                <div className='crossfit-info'>
                    <h1>Powerhouse CrossFit</h1>
                    <p>At Powerhouse CrossFit our mission is to promote healthier lifestyles within our community and for all walks of life.  We focus on bringing like-minded people into our family based atmosphere and assist them in adopting positive changes through physical fitness, nutrition and daily interactions with one another.  This environment is a social unit, in which we all work together to achieve common goals and in doing so create the strongest of bonds and friendships.  Through physical fitness we forge strong minds and bodies in order to develop our athletic abilities.  With nutritional awareness we fuel our bodies with what it needs to heal, recover and meet our daily demands.  Together we will become stronger than doing it alone! </p>
                    <p>#athletesofallages</p>
                    <a href="http://crossfit.com" target="_blank" rel="noopener noreferrer">
                        <button>Learn More</button>
                    </a>
                </div>
                <div className='crossfit-img-div'>
                    <img src={crossfit} alt='Crossfit Logo' />
                </div>
            </div>
            <div className='crossfit-journal'>
                <div className='crossfit-journal-text'>
                    <h1>The Crossfit Journal</h1>
                    <a href="https://journal.crossfit.com/" target="_blank" rel="noopener noreferrer">
                        <button>Find out more</button>
                    </a>
                </div>
                <div className='crossfit-journal-img'>
                    <img src={crossfitJournal} alt='Crossfit Journal' />
                </div>
            </div>
            <CrossfitCoaches />
        </div>
    );
}

export default Crossfit;