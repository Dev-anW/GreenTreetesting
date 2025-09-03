import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
       <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-lime">Contact Us</h1>
        <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
          Have a question or want to discuss a project? We're here to help. Reach out and let's start a conversation about your business goals.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-slate-800 p-8 rounded-lg">
          <ContactForm showTitle={true} rows={6} />
           <div className="text-slate-300">
             <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
             <p className="mb-2">123 Synergy Lane, Suite 100</p>
             <p className="mb-4">Innovation City, ST 12345</p>
             
             <p className="mb-2"><strong className="text-white">Email:</strong> contact@synergysolutions.io</p>
             <p className="mb-4"><strong className="text-white">Phone:</strong> (555) 123-4567</p>

             <div className="mt-8">
                <img src="https://picsum.photos/seed/map/400/200" alt="Map of office location" className="rounded-lg w-full h-auto object-cover"/>
             </div>
           </div>
      </div>
    </div>
  );
};

export default Contact;
