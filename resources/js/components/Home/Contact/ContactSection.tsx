import GithubIcon from '@/assets/icons/github.svg?react';
import InstagramIcon from '@/assets/icons/instagram.svg?react';
import LinkedInIcon from '@/assets/icons/linkedin.svg?react';
import MailIcon from '@/assets/icons/mail.svg?react';
import { AxiosError } from 'axios';

import ContactCard from '@/components/Home/Contact/ContactCard';
import Heading from '@/components/Layouts/Heading';
import Section from '@/components/Layouts/Section';
import Button from '@/components/UI/Buttons/Button';

import Input from '@/components/UI/Input/Input';
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

    const initialFormData = {
        name: '',
        email: '',
        message: '',
        website: '',
        nickname: '',
        fax_number: '',
        agreements: '',
        text_message: '',
    };

    const [formData, setFormData] = useState(initialFormData);

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
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => {
            if (!prev[name as keyof FormErrors]) return prev;

            const next = { ...prev };
            delete next[name as keyof FormErrors];
            return next;
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const hasHoneypotValue =
            formData.website ||
            formData.nickname ||
            formData.fax_number ||
            formData.agreements ||
            formData.text_message;

        if (hasHoneypotValue) {
            axios.post('/contact', formData).catch(() => {});
            return;
        }

        setErrors({});
        setIsSuccess(false);

        if (!validate()) return;

        try {
            setIsSubmitting(true);

            await axios.post('/contact', formData);

            setIsSuccess(true);
            setFormData(initialFormData);
        } catch (error: unknown) {
            const axiosError = error as AxiosError;
            if (axiosError.response?.status === 422) {
                setErrors(
                    (axiosError.response.data as { errors: FormErrors }).errors,
                );
            } else {
                setErrors({
                    general: t('contact.form.feedback.error'),
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
                            <div className="sr-only" aria-hidden="true">
                                <input
                                    type="text"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                                <input
                                    type="text"
                                    name="nickname"
                                    value={formData.nickname}
                                    onChange={handleChange}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                                <input
                                    type="text"
                                    name="fax_number"
                                    value={formData.fax_number}
                                    onChange={handleChange}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                                <input
                                    type="text"
                                    name="agreements"
                                    value={formData.agreements}
                                    onChange={handleChange}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                                <textarea
                                    name="text_message"
                                    value={formData.text_message}
                                    onChange={handleChange}
                                    tabIndex={-1}
                                />
                            </div>

                            <Input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={t(
                                    'contact.form.fields.name.label',
                                )}
                                label={t('contact.form.fields.name.label')}
                                error={errors.name}
                                // required
                            />

                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={t(
                                    'contact.form.fields.email.label',
                                )}
                                label={t('contact.form.fields.email.label')}
                                error={errors.email}
                                // required
                            />

                            <Input
                                id="message"
                                name="message"
                                type="textarea"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={t(
                                    'contact.form.fields.message.label',
                                )}
                                label={t('contact.form.fields.message.label')}
                                error={errors.message}
                                // required
                            />

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
                                {t('contact.form.feedback.success')}
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
