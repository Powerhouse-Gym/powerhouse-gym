import React, { useEffect } from 'react';

const Reviews = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widget.trustmary.com/fpDyQf-wk";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on component unmount
    };
  }, []);

  return (
    <div>
      {/* Optionally, add any content or placeholder for the widget */}
    </div>
  );
};

export default Reviews;
