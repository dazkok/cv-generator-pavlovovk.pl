import GithubIcon from '@/assets/icons/github.svg?react';
import InstagramIcon from '@/assets/icons/instagram.svg?react';
import LinkedInIcon from '@/assets/icons/linkedin.svg?react';
import MailIcon from '@/assets/icons/mail.svg?react';
import Heading from '@/components/Layouts/Heading';
import Section from '@/components/Layouts/Section';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
    const { ref: headerRef, isVisible: headerVisible } =
        useRevealOnScroll<HTMLDivElement>();
    const { ref: formRef, isVisible: formVisible } =
        useRevealOnScroll<HTMLDivElement>(); // контейнер для форми
    const { ref: socialsRef, isVisible: socialsVisible } =
        useRevealOnScroll<HTMLDivElement>();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <Section id="contact" className="bg-background">
            <div className="mx-auto max-w-2xl text-center">
                {/* Заголовок */}
                <div
                    ref={headerRef}
                    className={`fade-up transition-opacity duration-700 ${
                        headerVisible ? 'is-visible' : ''
                    }`}
                    style={{ transitionDelay: '0s' }}
                >
                    <Heading level="h2">Let’s work together</Heading>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                        I’m open to discussing product work, long-term collaboration, or selective freelance projects.
                    </p>
                </div>

                {/* Форма з stagger */}
                <div
                    ref={formRef}
                    className={`fade-up mt-10 transition-opacity duration-700 ${
                        formVisible ? 'is-visible' : ''
                    }`}
                >
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="rounded-xl border border-border bg-card px-4 py-3 text-sm transition placeholder:text-neutral-400 focus:border-brand-500 focus:ring focus:ring-brand-200/50 focus:outline-none"
                            style={{ transitionDelay: '0.05s' }}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="rounded-xl border border-border bg-card px-4 py-3 text-sm transition placeholder:text-neutral-400 focus:border-brand-500 focus:ring focus:ring-brand-200/50 focus:outline-none"
                            style={{ transitionDelay: '0.1s' }}
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm transition placeholder:text-neutral-400 focus:border-brand-500 focus:ring focus:ring-brand-200/50 focus:outline-none"
                            style={{ transitionDelay: '0.15s' }}
                        />
                        <button
                            type="submit"
                            className="mt-2 rounded-full bg-brand-500 px-8 py-3 text-sm font-medium text-white transition hover:opacity-90 hover:shadow-lg"
                            style={{ transitionDelay: '0.2s' }}
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Соцмережі */}
                <div
                    ref={socialsRef}
                    className={`fade-up mt-8 flex justify-center gap-6 text-neutral-500 transition-opacity duration-700 dark:text-neutral-400 ${
                        socialsVisible ? 'is-visible' : ''
                    }`}
                    style={{ transitionDelay: '0.25s' }}
                >
                    <a
                        href="mailto:pavlo@example.com"
                        aria-label="Email"
                        className="transition hover:text-brand-500"
                    >
                        <MailIcon className="h-5 w-5" />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="transition hover:text-brand-500"
                    >
                        <LinkedInIcon className="h-5 w-5" />
                    </a>
                    <a
                        href="https://github.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="transition hover:text-brand-500"
                    >
                        <GithubIcon className="h-5 w-5" />
                    </a>
                    <a
                        href="https://instagram.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="transition hover:text-brand-500"
                    >
                        <InstagramIcon className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default ContactSection;
