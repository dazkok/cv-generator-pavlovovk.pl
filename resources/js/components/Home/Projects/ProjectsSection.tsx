import ProjectRow from '@/components/Home/Projects/ProjectRow';
import Heading from '@/components/Layouts/Heading';
import Section from '@/components/Layouts/Section';
import { useI18n } from '@/hooks/useI18n';
import React from 'react';

const PROJECT_KEYS = ['suzuki_pl', 'suzuki_apps', 'chow_platform', 'onecatering'];

const ProjectsSection: React.FC = () => {
    const { t } = useI18n();

    return (
        <Section id="portfolio">
            <Heading level="h2">{t('portfolio.title')}</Heading>
            <Heading level="subtitle">{t('portfolio.text')}</Heading>

            <div className="lg:mt-16">
                {PROJECT_KEYS.map((key, i) => (
                    <ProjectRow
                        key={key}
                        index={(i + 1).toString().padStart(2, '0')}
                        title={t(`portfolio.projects.${key}.title`)}
                        meta={t(`portfolio.projects.${key}.subtitle`)}
                        description={t(`portfolio.projects.${key}.description`)}
                        details={t(`portfolio.projects.${key}.details`)}
                        role={t(`portfolio.projects.${key}.stack`)}
                        previewImage={t(`portfolio.projects.${key}.image`)}
                        delay={i * 0.08}
                    />
                ))}
            </div>
        </Section>
    );
};

export default ProjectsSection;
