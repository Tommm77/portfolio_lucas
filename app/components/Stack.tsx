import {Section} from "@/app/components/Section";
import IconCloud from "@/app/components/magicui/icon-cloud";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];


export const Stack = () => {
    return (
        <Section className="mt-20 relative">
            <div className="flex flex-col items-center">
                <h1 className="font-bold uppercase mb-5">Stack</h1>
                <IconCloud iconSlugs={slugs}/>
            </div>
        </Section>
    )
}