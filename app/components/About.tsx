import { Section } from "@/app/components/Section";
import LetterPullup from "@/app/components/magicui/letter-pullup";
import { useTranslations } from 'next-intl';

export const About = () => {
    const t = useTranslations('About');

    return (
        <Section className="mt-20 relative w-2/3">
            <div className="flex flex-col items-center">
                <h1 className="font-bold uppercase mb-5">{t('title')}</h1>
                <LetterPullup
                    words={t('description')}
                    delay={0.04}
                />
            </div>
            <div
                className="absolute inset-x-0 top-[calc(80%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(80%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(20%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(20%+1rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </Section>
    );
};
