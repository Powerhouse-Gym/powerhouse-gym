import { useEffect, useState } from 'react';
import '../home.css';
import powerhouse from "../assets/powerhouse-grafiti.png"
import SecondaryBanner from './SecondaryBanner';
import NewsLetter from './NewsLetter';
import NewServiceBanner from './NewServiceBanner';
import EfaBanner from './EfaBanner';
import SummerBanner from './SummerBanner';

// https://app.upperhand.io/accounts/new_user?customer_id=1047



function Home() {
  const [showConstructionBanner, setShowConstructionBanner] = useState(() => {
    return !sessionStorage.getItem('constructionBannerShown');
  });

  useEffect(() => {
    if (!showConstructionBanner) return;
    sessionStorage.setItem('constructionBannerShown', 'true');
    const timer = setTimeout(() => setShowConstructionBanner(false), 8000);
    return () => clearTimeout(timer);
  }, [showConstructionBanner]);

  useEffect(() => {
    const testDiv = document.getElementById('test');
    if (!testDiv) return;

    const script = document.createElement('script');
    script.src = 'https://widget.trustmary.com/fpDyQf-wk';
    script.async = true;

    script.onload = () => {
      setTimeout(() => {
        const widget = document.body.querySelector(':scope > :not(#root):not(script)');
        if (widget) {
          testDiv.appendChild(widget);
        }
      }, 300);
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="home" style={{ flex: 1 }}> {/* Allows #home to grow and push footer down */}
      {showConstructionBanner && (
        <div className='construction-banner'>
          <span className='construction-banner-text'>Site is getting a fresh coat of paint — images and content are being updated. Everything remains fully functional.</span>
          <button
            type='button'
            className='construction-banner-close'
            aria-label='Close banner'
            onClick={() => setShowConstructionBanner(false)}
          >
            ×
          </button>
          <div className='construction-banner-progress' />
        </div>
      )}
      <div className='banner'>
        <img src={powerhouse} alt="powerhouse" />
        <h2 className="banner-subtitle">Training Complex</h2>
      </div>
      <SecondaryBanner />
      <EfaBanner />
      <SummerBanner />
      <NewServiceBanner />
      <NewsLetter />
        {/* <h1 id="review-header">A local favorite, trusted and loved across the community!</h1>
      <div id='test'></div> */}
      </div>

  );
}

export default Home;
