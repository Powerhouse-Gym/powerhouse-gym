import { useEffect } from 'react';
import Carousel from './CarouselCard';
import '../home.css';
import powerhouse from "../assets/powerhouse-grafiti.png"
import SecondaryBanner from './SecondaryBanner';
import NewsLetter from './NewsLetter';
import NewServiceBanner from './NewServiceBanner';

// https://app.upperhand.io/accounts/new_user?customer_id=1047



function Home() {
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
      <div className='banner'>
        <img src={powerhouse} alt="powerhouse" />

      </div>
   
        <SecondaryBanner />
      <NewsLetter />
      <Carousel />
      <NewServiceBanner />
        <h1 id="review-header">A local favorite, trusted and loved across the community!</h1>
      <div id='test'></div>
      </div>

  );
}

export default Home;
