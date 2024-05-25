import React from 'react';
import { Section } from '@/app/components/Section';
import { Card } from './Card';
import {CustomIconProps} from "@/app/components/icons/Icons";

export const Projects = () => {
    const projects = [
        {
            title: 'Project One',
            subtitle: 'A brief description of Project One',
            imageUrl: '/assets/Rafiki Privacy Policy.png',
            icons: [
                { name: 'eiffelTower', size: 24 },
                { name: 'github', size: 24 },
                { name: 'linkedin', size: 24 },
            ] as CustomIconProps[],
        },
        {
            title: 'Project Two',
            subtitle: 'A brief description of Project Two',
            imageUrl: '/assets/Hidden mining amico.png',
            icons: [
                { name: 'birthdayCake', size: 24 },
                { name: 'work', size: 24 },
                { name: 'linkedin', size: 24 },
            ] as CustomIconProps[],
        },
        {
            title: 'Project Two',
            subtitle: 'A brief description of Project Two',
            imageUrl: '/assets/All the data bro.png',
            icons: [
                { name: 'birthdayCake', size: 24 },
                { name: 'work', size: 24 },
                { name: 'linkedin', size: 24 },
            ] as CustomIconProps[],
        },
        {
            title: 'Project Two',
            subtitle: 'A brief description of Project Two',
            imageUrl: '/assets/Hacker Cuate Illustration.png',
            icons: [
                { name: 'birthdayCake', size: 24 },
                { name: 'work', size: 24 },
                { name: 'linkedin', size: 24 },
            ] as CustomIconProps[],
        },
    ];

    return (
        <Section className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-2/3 mx-auto">
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
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </Section>
    );
};