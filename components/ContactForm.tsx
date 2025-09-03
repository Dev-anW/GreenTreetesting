import React, { useState } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface ContactFormProps {
    rows?: number;
    showTitle?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ rows = 4, showTitle = false }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Full name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid.';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setStatus('submitting');
        setErrors({});

        // Simulate API call
        await new Promise(res => setTimeout(res, 1500));
        
        // Simulate a random success/failure for demonstration
        if (Math.random() > 0.1) { // 90% success rate
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } else {
            setStatus('error');
        }
    };

    const inputClasses = "block w-full shadow-sm py-3 px-4 placeholder-slate-500 bg-slate-800 border-slate-700 rounded-md focus:ring-brand-lime focus:border-brand-lime";
    const errorClasses = "text-red-400 text-sm mt-1";

    return (
        <div className="w-full">
            {showTitle && <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>}
            <form className="grid grid-cols-1 gap-y-4" onSubmit={handleSubmit} noValidate>
                <div>
                    <label htmlFor="name" className="sr-only">Full name</label>
                    <input type="text" name="name" id="name" autoComplete="name" value={formData.name} onChange={handleChange} className={inputClasses} placeholder="Full name" required aria-invalid={!!errors.name} />
                    {errors.name && <p className={errorClasses} role="alert">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input id="email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} className={inputClasses} placeholder="Email address" required aria-invalid={!!errors.email} />
                    {errors.email && <p className={errorClasses} role="alert">{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea id="message" name="message" rows={rows} value={formData.message} onChange={handleChange} className={inputClasses} placeholder="Your Message" required aria-invalid={!!errors.message}></textarea>
                    {errors.message && <p className={errorClasses} role="alert">{errors.message}</p>}
                </div>
                <div className="h-16 flex items-center justify-center">
                    {status === 'success' && <p className="text-center w-full text-green-400 p-3 bg-green-900/50 rounded-md">Message sent successfully! We'll be in touch.</p>}
                    {status === 'error' && <p className="text-center w-full text-red-400 p-3 bg-red-900/50 rounded-md">Something went wrong. Please try again later.</p>}
                    {status !== 'success' && (
                        <button type="submit" disabled={status === 'submitting'} className="w-full justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-slate-900 bg-brand-lime hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-brand-lime transition-colors duration-300 disabled:bg-slate-500 disabled:cursor-not-allowed">
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
