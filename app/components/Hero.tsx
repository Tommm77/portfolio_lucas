"use client";

import { Section } from "@/app/components/Section";
import { CustomIcon } from "@/app/components/icons/Icons";
import AnimatedGradientText from "@/app/components/magicui/animated-gradient-text";
import WordRotate from "@/app/components/magicui/word-rotate";
import { useState } from "react";
import { ContactFormModal } from "@/app/components/ContactFormModal";
import { useTranslations } from 'next-intl';

export const Hero = () => {
    const t = useTranslations('Hero');
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <Section className="relative">
            <div className="flex flex-col items-center justify-center mt-20 px-4 md:px-8">
                <AnimatedGradientText>
                    <WordRotate
                        className="animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center h-20 sm:h-32"
                        words={t.raw('titles')}
                    />
                </AnimatedGradientText>
                <AnimatedGradientText>
                    <span
                        className="animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center -mt-5 sm:-mt-10 pb-8">
                        {t('subtitle')}
                    </span>
                </AnimatedGradientText>

                <p className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 font-semibold text-center text-sm sm:text-base md:text-lg mb-5">
                    {t('description')}
                </p>

                <div className="flex flex-row">
                    <a type="button"
                       className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                       href="https://medium.com/@swzwnc">
                        <CustomIcon name={"medium"} size={24} />
                    </a>
                    <button type="button"
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 uppercase hover:scale-110 transform-gpu transition-transform duration-300 ease-in-out"
                            onClick={() => setModalOpen(true)}>
                        {t('contactMe')}
                    </button>
                    <a type="button"
                       className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                       href="https://www.linkedin.com/in/lucas-o-a34971243/">
                        <CustomIcon name={"linkedin"} size={24} />
                    </a>
                </div>
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(20%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(20%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <ContactFormModal open={modalOpen} onOpenChange={setModalOpen} />
        </Section>
    );
}
