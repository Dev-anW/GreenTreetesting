
import React from 'react';

// === ACTION REQUIRED ===
// Replace the placeholder URLs below with the actual URLs to your client logos.
const ClientLogos = [
    { name: 'Client 1', logoUrl: 'https://greentreetech.co.za/sitepad-data/uploads/2023/04/engen.png' },
    { name: 'Client 2', logoUrl: 'https://greentreetech.co.za/sitepad-data/uploads/2023/04/sanlam.png' },
    { name: 'Client 3', logoUrl: 'https://greentreetech.co.za/sitepad-data/uploads/2023/04/old-mutual.png' },
    { name: 'Client 4', logoUrl: 'https://greentreetech.co.za/sitepad-data/uploads/2023/04/woolworths.png' },
    { name: 'Client 5', logoUrl: 'https://greentreetech.co.za/sitepad-data/uploads/2023/04/media-24.png' },
    { name: 'Client 6', logoUrl: 'https://greentreetech.co.za/sitepad-data/uploads/2023/07/met-life-logo.png' },
    { name: 'Client 7', logoUrl: 'https://greentreetech.co.za/sitepad-data/uploads/2023/07/glacier-sanlam-logo.png' },
    { name: 'Client 8', logoUrl: 'https://greentreetech.co.za/sitepad-data/uploads/2023/07/woolworths-financial-logo.png' },
    { name: 'Client 9', logoUrl: 'https://greentreetech.co.za/sitepad-data/uploads/2023/07/naspers-logo.png' },
    { name: 'Client 10', logoUrl: 'https://greentreetech.co.za/sitepad-data/uploads/2023/07/western-cape-transport-logo.png' },
    { name: 'Client 11', logoUrl: 'https://greentreetech.co.za/sitepad-data/uploads/2023/07/rethink-logo.png' },
    { name: 'Client 12', logoUrl: 'https://greentreetech.co.za/sitepad-data/uploads/2023/07/intercape-logo.png' },
    { name: 'Client 13', logoUrl: 'https://greentreetech.co.za/sitepad-data/uploads/2023/07/southern-life-logo.png' },
    { name: 'Client 14', logoUrl: 'https://greentreetech.co.za/sitepad-data/uploads/2023/07/banking-association-logo.png' },
    { name: 'Client 15', logoUrl: 'https://greentreetech.co.za/sitepad-data/uploads/2023/07/verhoef-training-logo.png' },
    { name: 'Client 16', logoUrl: 'https://greentreetech.co.za/sitepad-data/uploads/2023/07/sizanani-logo.png' },
    { name: 'Client 17', logoUrl: 'https://greentreetech.co.za/sitepad-data/uploads/2023/07/khula-logo.png' },
    { name: 'Client 18', logoUrl: 'https://greentreetech.co.za/sitepad-data/uploads/2023/07/stock-market-college-logo.png' },
];

const Clients: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
       <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-lime">Our Valued Clients</h1>
        <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
          We are proud to have partnered with a diverse range of companies, from innovative startups to established industry leaders.
        </p>
      </div>

      {/* Updated grid for better responsiveness with more logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        {ClientLogos.map(client => (
          <div key={client.name} className="p-6 bg-slate-800 rounded-lg flex justify-center items-center h-32 grayscale hover:grayscale-0 transition-all duration-300 hover:bg-slate-700 aspect-video">
             {/* The image source now uses the logoUrl from your data */}
             <img 
                src={client.logoUrl} 
                alt={`${client.name} Logo`} 
                className="max-h-16 w-auto" // Increased max-height slightly for better visibility
             />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
