
import React from 'react';
import type { NavLink, Service, Testimonial } from './types';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(50,50) rotate(45)">
            <path d="M0,-40 A40,40 0 0,1 40,0 L0,0 Z" fill="currentColor"/>
            <path d="M40,0 A40,40 0 0,1 0,40 L0,0 Z" fill="currentColor" opacity="0.75"/>
            <path d="M0,40 A40,40 0 0,1 -40,0 L0,0 Z" fill="currentColor" opacity="0.5"/>
            <path d="M-40,0 A40,40 0 0,1 0,-40 L0,0 Z" fill="currentColor" opacity="0.25"/>
        </g>
    </svg>
);

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Clients', path: '/clients' },
  { label: 'Contact', path: '/contact' },
];

export const FOOTER_SERVICES: string[] = [
  'Cybersecurity',
  'Business Development',
  'Project Management',
  'Business Analysis',
  'Business Process Analysis',
  'Business Rescue',
];

export const OFFERING_SERVICES: Service[] = [
    {
        icon: <ShieldCheckIcon />,
        title: 'Cybersecurity',
        description: 'Protect your digital assets with our state-of-the-art cybersecurity solutions and strategic consulting.'
    },
    {
        icon: <ChartBarIcon />,
        title: 'Business Development',
        description: 'Identify growth opportunities and expand your market reach with data-driven development strategies.'
    },
    {
        icon: <ClipboardDocumentListIcon />,
        title: 'Project Management',
        description: 'Ensure your projects are delivered on time and within budget with our expert PMO services.'
    },
    {
        icon: <MagnifyingGlassIcon />,
        title: 'Business Analysis',
        description: 'Bridge the gap between business needs and technology solutions with our comprehensive analysis.'
    },
    {
        icon: <ArrowsRightLeftIcon />,
        title: 'Process Analysis',
        description: 'Optimize your operations by analyzing and re-engineering your core business processes for efficiency.'
    },
    {
        icon: <LifebuoyIcon />,
        title: 'Business Rescue',
        description: 'Navigate financial distress with our proven strategies for business turnaround and recovery.'
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        text: "Synergy Solutions transformed our entire business process. Their insights were invaluable, leading to a 40% increase in efficiency. We couldn't have done it without them.",
        author: 'Sarah Johnson',
        company: 'CEO, Innovate Tech',
        image: 'https://picsum.photos/seed/person1/100/100'
    },
    {
        text: "The cybersecurity audit they performed was incredibly thorough. We now have peace of mind knowing our data is secure. Truly top-tier professionals.",
        author: 'Michael Chen',
        company: 'CTO, DataSecure',
        image: 'https://picsum.photos/seed/person2/100/100'
    },
    {
        text: "Their project management team integrated seamlessly with ours, helping us launch a critical product ahead of schedule. A fantastic partner to work with.",
        author: 'Emily Rodriguez',
        company: 'Head of Product, Launchpad Inc.',
        image: 'https://picsum.photos/seed/person3/100/100'
    }
];

// Icon Components (Heroicons)
function ShieldCheckIcon() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.008h-.008v-.008Z" /></svg>; }
function ChartBarIcon() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>; }
function ClipboardDocumentListIcon() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" /></svg>; }
function MagnifyingGlassIcon() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>; }
function ArrowsRightLeftIcon() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>; }
function LifebuoyIcon() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836A8.965 8.965 0 0 1 12 3c.315 0 .622.031.928.09L12 3.985V3.5A8.965 8.965 0 0 1 12 3c-2.464 0-4.693 1.002-6.314 2.643A8.952 8.952 0 0 0 3 12c0 .315.031.622.09.928L3.985 12H3.5A8.965 8.965 0 0 0 3 12c0 2.464 1.002 4.693 2.643 6.314A8.952 8.952 0 0 0 12 21c.315 0 .622-.031.928-.09L12 20.015V20.5a8.965 8.965 0 0 0 0-1.5c2.464 0 4.693-1.002 6.314-2.643A8.952 8.952 0 0 0 21 12c0-.315-.031-.622-.09-.928L20.015 12H20.5a8.965 8.965 0 0 0 0 1.5c-2.464 0-4.693 1.002-6.314 2.643A8.952 8.952 0 0 1 12 3.515v-.579Z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /></svg>; }
