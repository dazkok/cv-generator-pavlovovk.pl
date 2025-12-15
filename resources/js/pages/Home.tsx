import HeroSection from '@/components/Home/Hero/HeroSection';
import AppLayout from '@/layouts/AppLayout';
import { Head } from '@inertiajs/react';

// sections
// import Hero from "@/sections/hero";
// import Clients from "@/sections/clients";
// import Skills from "@/sections/skills";
// import Projects from "@/sections/projects";
// import Resume from "@/sections/resume";
// import Testimonial from "@/sections/testimonial";
// import PopularClients from "@/sections/popular-clients";
// import ContactForm from "@/sections/contact-form";

export default function Home() {
    return (
        <>
            <Head title="Portfolio" />

            <HeroSection />

            {/*<Clients />*/}
            {/*<Skills />*/}
            {/*<Projects />*/}
            {/*<Resume />*/}
            {/*<Testimonial />*/}
            {/*<PopularClients />*/}
            {/*<ContactForm />*/}
        </>
    );
}

Home.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
