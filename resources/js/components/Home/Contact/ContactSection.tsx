import GithubIcon from '@/assets/icons/github.svg?react';
import InstagramIcon from '@/assets/icons/instagram.svg?react';
import LinkedInIcon from '@/assets/icons/linkedin.svg?react';
import MailIcon from '@/assets/icons/mail.svg?react';

import ContactCard from '@/components/Home/Contact/ContactCard';
import Button from '@/components/Layouts/Buttons/Button';
import Heading from '@/components/Layouts/Heading';
import Section from '@/components/Layouts/Section';

import { useI18n } from '@/hooks/useI18n';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import axios from '@/lib/axios';
import React, { useState } from 'react';

type FormErrors = {
    name?: string;
    email?: string;
    message?: string;
    general?: string;
};

const ContactSection: React.FC = () => {
    const { ref: headerRef, isVisible: headerVisible } =
        useRevealOnScroll<HTMLDivElement>();
    const { ref: formRef, isVisible: formVisible } =
        useRevealOnScroll<HTMLDivElement>();
    const { ref: socialsRef, isVisible: socialsVisible } =
        useRevealOnScroll<HTMLDivElement>();

    const { t } = useI18n();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = (): boolean => {
        const e: FormErrors = {};

        if (formData.name.trim().length < 2) {
            e.name = t('contact.form.fields.name.error');
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            e.email = t('contact.form.fields.email.error');
        }

        if (formData.message.trim().length < 10) {
            e.message = t('contact.form.fields.message.error');
        }

        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        setIsSuccess(false);

        if (!validate()) return;

        try {
            setIsSubmitting(true);

            await axios.post('/contact', formData);

            setIsSuccess(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (error: any) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors);
            } else {
                setErrors({
                    general: t('contact.feedback.error'),
                });
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section id="contact" className="bg-background">
            <div className="mx-auto max-w-2xl text-center">
                {/* Title */}
                <div
                    ref={headerRef}
                    className={`fade-up transition-opacity duration-700 ${
                        headerVisible ? 'is-visible' : ''
                    }`}
                >
                    <Heading level="h2">{t('contact.title')}</Heading>
                    <div className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                        {t('contact.subtitle')}
                    </div>
                </div>

                {/* Form */}
                <div
                    ref={formRef}
                    className={`fade-up mt-12 transition-opacity duration-700 ${
                        formVisible ? 'is-visible' : ''
                    }`}
                >
                    <div className="rounded-3xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur sm:p-8">
                        {/* Header */}
                        <div className="mb-6 text-left">
                            <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                                {t('contact.form.title')}
                            </h3>
                            <p className="mt-1 text-sm text-neutral-500">
                                {t('contact.form.description')}
                            </p>
                        </div>

                        <div className="my-6 flex items-center gap-3">
                            <div className="h-px flex-1 bg-border" />
                            <span className="text-xs tracking-wide text-neutral-400 uppercase">
                                {t('contact.form.divider')}
                            </span>
                            <div className="h-px flex-1 bg-border" />
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4"
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder={t(
                                    'contact.form.fields.name.label',
                                )}
                                value={formData.name}
                                onChange={handleChange}
                                className="rounded-xl border border-border bg-card px-4 py-3 text-sm focus:border-brand-500 focus:ring focus:ring-brand-200/50 focus:outline-none"
                            />
                            {errors.name && (
                                <span className="text-xs text-red-500">
                                    {errors.name}
                                </span>
                            )}

                            <input
                                type="email"
                                name="email"
                                placeholder={t(
                                    'contact.form.fields.email.label',
                                )}
                                value={formData.email}
                                onChange={handleChange}
                                className="rounded-xl border border-border bg-card px-4 py-3 text-sm focus:border-brand-500 focus:ring focus:ring-brand-200/50 focus:outline-none"
                            />
                            {errors.email && (
                                <span className="text-xs text-red-500">
                                    {errors.email}
                                </span>
                            )}

                            <textarea
                                name="message"
                                placeholder={t(
                                    'contact.form.fields.message.label',
                                )}
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm focus:border-brand-500 focus:ring focus:ring-brand-200/50 focus:outline-none"
                            />
                            {errors.message && (
                                <span className="text-xs text-red-500">
                                    {errors.message}
                                </span>
                            )}

                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting
                                    ? t('contact.form.actions.submitting')
                                    : t('contact.form.actions.submit')}
                            </Button>
                        </form>

                        {errors.general && (
                            <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400">
                                {errors.general}
                            </div>
                        )}

                        {isSuccess && (
                            <div className="mt-4 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-600 dark:text-green-400">
                                {t('contact.feedback.success')}
                            </div>
                        )}
                    </div>
                </div>

                <p className="my-10 text-sm text-neutral-500">
                    {t('contact.footer')}
                </p>

                {/* Socials */}
                <div
                    ref={socialsRef}
                    className={`fade-up mt-10 grid gap-4 sm:grid-cols-2 ${
                        socialsVisible ? 'is-visible' : ''
                    }`}
                >
                    <ContactCard
                        icon={<MailIcon className="h-5 w-5" />}
                        label="Email"
                        value="dazkok@gmail.com"
                        href="mailto:dazkok@gmail.com"
                    />

                    <ContactCard
                        icon={<LinkedInIcon className="h-5 w-5" />}
                        label="LinkedIn"
                        value="pavlo-vovk"
                        href="https://www.linkedin.com/in/pavlo-vovk-37437824b/"
                    />

                    <ContactCard
                        icon={<GithubIcon className="h-5 w-5" />}
                        label="GitHub"
                        value="github.com/dazkok"
                        href="https://github.com/dazkok"
                    />

                    <ContactCard
                        icon={<InstagramIcon className="h-5 w-5" />}
                        label="Instagram"
                        value="@x_xxost"
                        href="https://instagram.com/x_xxost"
                    />
                </div>
            </div>
        </Section>
    );
};

export default ContactSection;
