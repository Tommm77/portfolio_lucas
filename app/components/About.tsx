import { Section } from "@/app/components/Section";
import LetterPullup from "@/app/components/magicui/letter-pullup";

export const About = () => {
    return (
        <Section className="mt-20 relative">
            <div className="flex flex-col items-center">
                <h1 className="font-bold uppercase mb-5">About Me</h1>
                <LetterPullup
                    words={"I'm a cybersecurity engineer with a Master's \n in cybersecurity and cloud, based in Paris.\nI excel in protecting data, mitigating risks,\n and ensuring robust security, working effectively \nwith international teams remotely."
                    }
                    delay={0.03}
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
