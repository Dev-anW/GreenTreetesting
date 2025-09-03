
import React from 'react';
import { OFFERING_SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-lime">Our Services</h1>
        <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
          We offer a comprehensive range of services designed to address your most critical business challenges and unlock new opportunities for growth.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {OFFERING_SERVICES.map((service, index) => (
            <div key={index} className="bg-slate-800 p-8 rounded-lg shadow-lg flex flex-col">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-lime text-slate-900 mb-4 self-start">
                   {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-2 text-slate-400 flex-grow">{service.description}</p>
                <a href="#" className="mt-4 text-brand-lime font-semibold hover:underline">Learn More &rarr;</a>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
