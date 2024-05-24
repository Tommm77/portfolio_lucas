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
        <Section className="w-2/3 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} {...project} />
                ))}
            </div>
        </Section>
    );
};