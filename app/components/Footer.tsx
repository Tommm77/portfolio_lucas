import { Section } from "@/app/components/Section";

export const Footer = () => {
    return (
        <Section className="mt-20">
            <hr className="mb-10 border-gray-100 opacity-30" />
            <div className="flex justify-center px-4">
                <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 items-center">
                    <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0">
                        <div className="flex flex-col space-y-2 text-center md:text-left">
                            <p className="font-bold text-white">lucas.cyber</p>
                            <p className="">lucas.offredi@gmail.com</p>
                            <p className="">© Lucas 2024. All rights reserved</p>
                        </div>
                        <button
                            type="button"
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center uppercase hover:scale-110 transform-gpu transition-transform duration-300 ease-in-out"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </Section>
    );
};
