import ProjectRow from '@/components/Home/Projects/ProjectRow';
import Heading from '@/components/Layouts/Heading';
import Section from '@/components/Layouts/Section';
import React from 'react';

const ProjectsSection: React.FC = () => {
    return (
        <Section id={'portfolio'}>
            <Heading level="h2">Selected Projects</Heading>
            <Heading level="subtitle">
                Large-scale digital products I’ve worked on.
            </Heading>

            <div className="mt-16 space-y-12">
                {[
                    {
                        index: '01',
                        title: 'Suzuki Global Platform',
                        meta: 'Automotive · Enterprise',
                        description:
                            'Global web platform used across multiple markets, focused on performance, accessibility, and scalability.',
                        role: 'Frontend architecture · UI systems · Performance',
                    },
                    {
                        index: '02',
                        title: 'Moje Suzuki',
                        meta: 'Customer platform',
                        description:
                            'Customer-facing application enabling vehicle management, services, and communication with dealerships.',
                        role: 'Frontend development · Design systems',
                    },
                    {
                        index: '03',
                        title: 'BP Internal Tools',
                        meta: 'Energy · Enterprise',
                        description:
                            'Internal tools supporting operational workflows and data visualization for enterprise users.',
                        role: 'Frontend development · UX collaboration',
                    },
                    {
                        index: '04',
                        title: 'Various Commercial Projects',
                        meta: '15+ smaller companies',
                        description:
                            'Web applications and marketing websites for smaller brands across different industries.',
                        role: 'Frontend · UI · Performance',
                    },
                ].map((project, i) => (
                    <ProjectRow
                        key={project.index}
                        {...project}
                        delay={i * 0.08}
                    />
                ))}
            </div>
        </Section>
    );
};

export default ProjectsSection;
