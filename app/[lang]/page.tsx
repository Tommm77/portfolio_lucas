import { notFound } from 'next/navigation';
import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { Projects } from "@/app/components/Projects";
import { About } from "@/app/components/About";
import { Stack } from "@/app/components/Stack";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { useTranslations } from 'next-intl';

export default function Home({ params }: { params: { lang: string } }) {
    const t = useTranslations('Home');

    if (!params.lang) {
        notFound();
    }

    return (
        <main>
            <Navbar />
            <Hero />
            <Projects />
            <About />
            <Stack />
            <Contact />
            <Footer />
        </main>
    );
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'fr' }];
}

export async function getMessages(locale: string) {
    const messages = (await import(`../../messages/${locale}.json`)).default;
    return messages;
}
