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
                    Discover Our Services
                </button>
                <button className="bg-transparent border-2 border-slate-600 text-slate-200 font-semibold px-8 py-3 rounded-lg hover:bg-slate-800 hover:border-slate-500 transition-colors duration-300 w-full sm:w-auto">
                    Contact Us
                </button>
            </div>
        </div>
    </div>
);

const InfoPanel: React.FC = () => (
    <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <div className="flex items-center justify-center mb-4">
                        <svg className="w-12 h-12 text-brand-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Strategic Insight</h3>
                    <p className="mt-2 text-slate-400">Leverage our deep industry knowledge to make informed, strategic decisions that drive long-term success.</p>
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-center mb-4">
                        <svg className="w-12 h-12 text-brand-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Operational Excellence</h3>
                    <p className="mt-2 text-slate-400">Optimize your processes and workflows for maximum efficiency, productivity, and cost savings.</p>
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-center mb-4">
                        <svg className="w-12 h-12 text-brand-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Guaranteed Results</h3>
                    <p className="mt-2 text-slate-400">Our partnership is built on trust and a commitment to delivering measurable, impactful results for your business.</p>
                </div>
            </AnimatedSection>
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
                    <img src="https://picsum.photos/seed/about/600/400" alt="Team collaborating" className="rounded-lg shadow-2xl"/>
                </div>
                <div>
                    <h2 className="text-base font-semibold tracking-wider text-brand-lime uppercase">Who We Are</h2>
                    <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Your Partner in Business Transformation</p>
                    <p className="mt-4 text-lg text-slate-400">
                        Synergy Solutions was founded on the principle that every business has the potential for greatness. We are a team of seasoned consultants, analysts, and project managers dedicated to helping you navigate complexities, overcome challenges, and seize opportunities. Our collaborative approach ensures we become a true extension of your team.
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
                <h2 className="text-base font-semibold tracking-wider text-brand-lime uppercase">Our Offerings</h2>
                <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">A Full Suite of Business Solutions</p>
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
                Ready to elevate your business to the next level?
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
                     <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Let's Start a Conversation</p>
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
