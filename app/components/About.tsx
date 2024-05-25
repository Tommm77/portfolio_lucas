import { Section } from "@/app/components/Section";
import LetterPullup from "@/app/components/magicui/letter-pullup";

export const About = () => {
    return (
        <Section className="mt-20">
            <div className="flex flex-col items-center">
                <h1 className="font-bold uppercase mb-5">About Me</h1>
                <LetterPullup
                    words={"I'm a cybersecurity engineer \n with a strong focus on \n protecting data, mitigating risks, \n and ensuring robust security measures."}
                    delay={0.03}
                />
            </div>
        </Section>
    );
};
