import { Section } from "@/app/components/Section";
import Meteors from "@/app/components/magicui/meteors";

export const Contact = () => {
    return (
        <Section className="mt-20 relative">
            <div className="flex flex-col items-center px-4 md:px-8">
                <h1 className="font-bold uppercase mb-5 text-xl sm:text-2xl md:text-3xl">Contact Me</h1>
                <h3 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold w-2/3">
                    If you need a skilled cybersecurity professional to enhance your team, please contact me. I am eager to contribute to your projects success.
                </h3>
                <div
                    className="flex flex-col md:flex-row justify-center mt-20 w-full space-y-10 md:space-y-0 md:space-x-10">
                    <div className="flex flex-col items-center space-y-4 w-full md:w-1/6">
                        <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Medium</h3>
                        <p className="text-center text-lg">LCS</p>
                        <button
                            type="button"
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 uppercase hover:scale-110 transform-gpu transition-transform duration-300 ease-in-out"
                        >
                            See Posts
                        </button>
                    </div>
                    <div className="flex flex-col items-center space-y-4 w-full md:w-1/6">
                        <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">RootMe</h3>
                        <p className="text-center text-lg">Lcs</p>
                        <button
                            type="button"
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 uppercase hover:scale-110 transform-gpu transition-transform duration-300 ease-in-out"
                        >
                            Visit Profile
                        </button>
                    </div>
                    <div className="flex flex-col items-center space-y-4 w-full md:w-1/6">
                        <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">HackTheBox</h3>
                        <p className="text-center text-lg">Lucas Offredi</p>
                        <button
                            type="button"
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 uppercase hover:scale-110 transform-gpu transition-transform duration-300 ease-in-out"
                        >
                            Visit Profile
                        </button>
                    </div>
                    <div className="flex flex-col items-center space-y-4 w-full md:w-1/6">
                        <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Linkedin</h3>
                        <p className="text-center text-lg">Lucas Offredi</p>
                        <button
                            type="button"
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 uppercase hover:scale-110 transform-gpu transition-transform duration-300 ease-in-out"
                        >
                            Visit Profile
                        </button>
                        <Meteors number={20} />
                    </div>
                </div>
            </div>
        </Section>
    );
};
