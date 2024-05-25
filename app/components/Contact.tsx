import { Section } from "@/app/components/Section";

export const Contact = () => {
    return (
        <Section className="mt-20 relative">
            <div className="flex flex-col items-center px-4 md:px-8">
                <h1 className="font-bold uppercase mb-5 text-xl sm:text-2xl md:text-3xl">Contact Me</h1>
                <h3 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                    You need a Cyber Security Engineer?
                </h3>
                <div className="flex flex-col md:flex-row justify-between mt-20 w-full space-y-10 md:space-y-0 md:space-x-10">
                    <div className="flex flex-col items-center space-y-4 w-full md:w-1/2">
                        <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Medium</h3>
                        <p className="text-center text-lg">LCS</p>
                        <button
                            type="button"
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 uppercase hover:scale-110 transform-gpu transition-transform duration-300 ease-in-out"
                        >
                            See Posts
                        </button>
                    </div>
                    <div className="flex flex-col items-center space-y-4 w-full md:w-1/2">
                        <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Linkedin</h3>
                        <p className="text-center text-lg">Lucas Offredi</p>
                        <button
                            type="button"
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 uppercase hover:scale-110 transform-gpu transition-transform duration-300 ease-in-out"
                        >
                            Visit Profile
                        </button>
                    </div>
                </div>
            </div>
        </Section>
    );
};
