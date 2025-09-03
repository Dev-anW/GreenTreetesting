
import React from 'react';

const ClientLogos = [
    { name: 'Innovate Tech', seed: 'innovate' },
    { name: 'DataSecure', seed: 'datasecure' },
    { name: 'Launchpad Inc.', seed: 'launchpad' },
    { name: 'Quantum Solutions', seed: 'quantum' },
    { name: 'Apex Industries', seed: 'apex' },
    { name: 'Stellar Group', seed: 'stellar' },
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center">
        {ClientLogos.map(client => (
          <div key={client.seed} className="p-8 bg-slate-800 rounded-lg flex justify-center items-center h-32 grayscale hover:grayscale-0 transition-all duration-300 hover:bg-slate-700">
             <img src={`https://picsum.photos/seed/${client.seed}/200/80?grayscale`} alt={`${client.name} Logo`} className="max-h-12 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
