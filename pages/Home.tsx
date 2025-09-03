import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { OFFERING_SERVICES, TESTIMONIALS } from '../constants';
import { useElementOnScreen } from '../hooks/useElementOnScreen';
import ContactForm from '../components/ContactForm';

const AnimatedSection: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className = '' }) => {
  const [ref, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};



const Hero: React.FC = () => (
    <div className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
            <img src="https://picsum.photos/seed/hero/1920/1080" alt="Abstract background" className="w-full h-full object-cover opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white leading-tight">
    <span className="text-brand-lime">IT</span> and <span className="text-brand-lime">Business</span> Consulting Services For <span className="text-brand-lime">Your</span> <span className="text-brand-lime">Business</span>
</h1>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                <button className="bg-brand-lime text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-lime-200 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                    Contact Us
                </button>
                <button className="bg-transparent border-2 border-slate-600 text-slate-200 font-semibold px-8 py-3 rounded-lg hover:bg-slate-800 hover:border-slate-500 transition-colors duration-300 w-full sm:w-auto">
                    Learn More
                </button>
            </div>
        </div>
    </div>
);

const InfoPanel: React.FC = () => (
    <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                <div className="text-white">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
                        20+ Years in <span className="text-brand-lime">IT and Business Consulting</span> have taught me this
                    </h2>
                    <ul className="space-y-4 text-slate-300 text-lg">
                        <li className="ml-0">Work SMARTER, not HARDER.</li>
                        <li className="ml-4">10% of a successful business is worth more than 100% of a failing one.</li>
                        <li className="ml-8">If you fail to plan, you plan to fail.</li>
                        <li className="ml-12">Team work has far more benefits than risks.</li>
                        <li className="ml-16">Why bump your head yourself when you can learn from others who have already done so?</li>
                        <li className="ml-20">Keep your balance, don't spend your health to gain your wealth, only to spend your wealth to regain your health.</li>
                        <li className="ml-24">Don't work for money, make money work for you.</li>
                    </ul>
                   <button className="mt-10 ml-24 bg-brand-lime text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-brand-lime/80 transition-colors duration-300">
                        Our Services
                    </button>
                </div>

                
                <div className="flex justify-center items-center">
                    <div className="w-full h-96 bg-slate-700 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
                       
                        <img src="https://via.placeholder.com/600x400" alt="Consulting Services" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    </section>
);


const ImageBreaker: React.FC = () => (
    <div 
        className="h-96 bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: "url('https://picsum.photos/seed/breaker/1920/1080')" }}
        aria-hidden="true"
    >
        <div className="h-full w-full bg-slate-900/50"></div>
    </div>
);

const AboutSection: React.FC = () => (
    <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <img src="https://greentreetech.co.za/sitepad-data/uploads/2023/07/3.jpg" alt="Team collaborating" className="rounded-lg shadow-2xl"/>
                </div>
                <div>
                    <h2 className="text-base font-semibold tracking-wider text-brand-lime uppercase">About GreenTree Technologies</h2>
                    
                    <p className="mt-4 text-lg text-slate-400">
                       Kenny Steyn established GreenTree Technologies in 2007 due to the need for IT solutions to business problems, however it did not take long to establish that many businesses were looking for IT solutions to address a business problem. Kenny began to address business problems first, thus eliminating vast amounts of unnecessary expenses on a solution that would not really address the issue at hand. This then allowed for additional budget to be used for IT to improve business thus making a significant impact on the bottom line.

Kenny is an ordinary kind of guy with a very extraordinary way of thinking and analyzing problems. After a coffee with him, you will come away excited, energized, enthusiastic and encouraged. He has the ability to make complex situations clearer and impossible situations, POSSIBLE.
                    </p>
                </div>
            </AnimatedSection>
        </div>
    </section>
);

const OfferingSection: React.FC = () => (
    <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center">
                <h2 className="text-base font-semibold tracking-wider text-brand-lime uppercase">What We Offer</h2>
            </AnimatedSection>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {OFFERING_SERVICES.map((service, index) => (
                    <AnimatedSection key={index}>
                        <div className="bg-slate-800 p-8 rounded-lg shadow-lg hover:shadow-brand-lime/20 transition-shadow duration-300 transform hover:-translate-y-1 h-full">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-lime text-slate-900 mb-4">
                               {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white">{service.title}</h3>
                            <p className="mt-2 text-slate-400">{service.description}</p>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    </section>
);

const CtaBanner: React.FC = () => (
    <div className="bg-brand-lime">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">
                IT and Business Consulting Services For Your  Business Today
            </h2>
            <div className="mt-8">
                <button className="bg-slate-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors duration-300 transform hover:scale-105">
                    Let's Talk
                </button>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    return (
        <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center">
                    <h2 className="text-base font-semibold tracking-wider text-brand-lime uppercase">Client Testimonials</h2>
                    <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Trusted by Industry Leaders</p>
                </AnimatedSection>

                <AnimatedSection className="mt-12 relative max-w-3xl mx-auto">
                    <div className="overflow-hidden relative h-64">
                        {TESTIMONIALS.map((testimonial, index) => (
                            <div key={index}
                                 className="absolute w-full h-full transition-opacity duration-700 ease-in-out"
                                 style={{ opacity: index === currentIndex ? 1 : 0, zIndex: index === currentIndex ? 10 : 1 }}>
                                <blockquote className="text-center flex flex-col justify-center h-full">
                                    <p className="text-xl italic text-slate-300">"{testimonial.text}"</p>
                                    <footer className="mt-4">
                                        <div className="flex items-center justify-center space-x-3">
                                            <img className="h-12 w-12 rounded-full" src={testimonial.image} alt={testimonial.author} />
                                            <div>
                                                <p className="font-bold text-white">{testimonial.author}</p>
                                                <p className="text-sm text-slate-400">{testimonial.company}</p>
                                            </div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        ))}
                    </div>

                    <button onClick={prevTestimonial} aria-label="Previous testimonial" className="absolute top-1/2 -left-4 md:-left-16 transform -translate-y-1/2 bg-slate-800 p-2 rounded-full hover:bg-brand-lime text-white hover:text-slate-900 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={nextTestimonial} aria-label="Next testimonial" className="absolute top-1/2 -right-4 md:-right-16 transform -translate-y-1/2 bg-slate-800 p-2 rounded-full hover:bg-brand-lime text-white hover:text-slate-900 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </AnimatedSection>

                <div className="mt-12 text-center">
                    <Link to="/clients" className="text-brand-lime font-semibold hover:underline">
                        View All Our Valued Clients
                    </Link>
                </div>
            </div>
        </section>
    );
};


const ContactFormSection: React.FC = () => {
    return (
        <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-12">
                     <h2 className="text-base font-semibold tracking-wider text-brand-lime uppercase">Get In Touch</h2>
                     <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">What if your greatest opportunity lies just other side of this moment? Would you take the chance?</p>
                </AnimatedSection>
                <AnimatedSection className="max-w-xl mx-auto">
                    <ContactForm />
                </AnimatedSection>
            </div>
        </section>
    );
};

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <InfoPanel />
      <ImageBreaker />
      <AboutSection />
      <OfferingSection />
      <CtaBanner />
      <Testimonials />
      <ContactFormSection />
    </>
  );
};

export default Home;
