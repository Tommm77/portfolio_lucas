import { Section } from "@/app/components/Section";
import React from "react";
import dynamic from 'next/dynamic';

const DynamicIconCloud = dynamic(() => import('@/app/components/magicui/icon-cloud'), { ssr: false });

const slugs = [
    "android",
    "html5",
    "css3",
    "amazonaws",
    "postgresql",
    "nginx",
    "docker",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "burpsuite",
    "wireshark",
    "metasploit",
    "metasploit",
    "ansible",
    "terraform",
    "jenkins",
    "macos",
    "windows",
    "linux",
    "ubuntu",
    "python",
    "gnubash",
    "mysql",
    "mariadb",
    "microsoft",
    "googlecloud"
];

export const Stack = () => {
    return (
        <Section className="mt-20 relative">
            <div className="flex flex-col items-center">
                <h1 className="font-bold uppercase mb-5">Stack</h1>
                <DynamicIconCloud iconSlugs={slugs} />
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(130%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(100%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(60%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </Section>
    )
}
