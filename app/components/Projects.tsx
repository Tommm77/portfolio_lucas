import { Section } from "@/app/components/Section";
import { useTranslations } from 'next-intl';
import { Card } from './Card';
import { CustomIconProps } from "@/app/components/icons/Icons";

export const Projects = () => {
    const t = useTranslations('Projects');
    const projects = [
        {
            title: t('projectOne.title'),
            subtitle: t('projectOne.description'),
            imageUrl: '/assets/DALL·E May 29 Write up Bash.jpeg',
            icons: [
                { name: 'bash', size: 24 },
                { name: 'linux', size: 24 },
            ] as CustomIconProps[],
        },
        {
            title: t('projectTwo.title'),
            subtitle: t('projectTwo.description'),
            imageUrl: '/assets/DALL·E May 29 Terminal.jpeg',
            icons: [
                { name: 'burp', size: 24 },
                { name: 'bash', size: 24 },
                { name: 'linux', size: 24 },
            ] as CustomIconProps[],
        },
        {
            title: t('projectThree.title'),
            subtitle: t('projectThree.description'),
            imageUrl: '/assets/DALL·E May 29 Image.jpeg',
            icons: [
                { name: 'docker', size: 24 },
                { name: 'linux', size: 24 },
            ] as CustomIconProps[],
        },
        {
            title: t('projectFour.title'),
            subtitle: t('projectFour.description'),
            imageUrl: '/assets/DALL·E May 29 Pentest Mr Robot.jpeg',
            icons: [
                { name: 'nmap', size: 24 },
                { name: 'linux', size: 24 },
            ] as CustomIconProps[],
        },
    ];

    return (
        <Section className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full sm:w-11/12 lg:w-10/12 mx-auto px-4">
                {projects.map((project, index) => (
                    <Card key={index} {...project} />
                ))}
            </div>
            <div
                className="absolute inset-x-0 top-[calc(50%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(50%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(100%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </Section>
    );
};
