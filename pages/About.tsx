
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-brand-lime">About Synergy Solutions</h1>
      <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
        This is the About page. Here we would detail our company's mission, vision, values, and the expert team that drives our success. We believe in building lasting partnerships through transparency, dedication, and a relentless pursuit of excellence.
      </p>
       <div className="mt-12">
          <img src="https://picsum.photos/seed/about-page/1200/600" alt="Our Team" className="rounded-lg shadow-xl mx-auto" />
      </div>
    </div>
  );
};

export default About;
