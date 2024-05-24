import {Section} from "@/app/components/Section";
import {CustomIcon} from "@/app/components/icons/Icons";
import {Button} from "@/components/ui/button";
import AnimatedGradientText from "@/app/components/magicui/animated-gradient-text";
import {cn} from "@/lib/utils";
import WordRotate from "@/app/components/magicui/word-rotate";

export const Hero = () => {
    return (
        <Section>
            <div className="flex flex-col items-center justify-center mt-20">
                <AnimatedGradientText>
                         <WordRotate
                             className="animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-8xl text-center h-32"
                             words={[
                                 "Security Expert.",
                                 "Brilliant Assessor.",
                                 "Exceptional Responder.",
                                 "Innovative Manager.",
                                 "Skilled Defender.",
                                 "Dedicated Cryptographer.",
                                 "Proficient Analyst.",
                                 "Outstanding Tester.",
                                 "Talented Detector.",
                                 "Resilient Protector.",
                                 "Experienced Policy Maker.",
                                 "Remarkable Defender.",
                             ]}
                         />
                </AnimatedGradientText>
                <AnimatedGradientText>
                    <span className="animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-8xl text-center h-32 -mt-10">CyberSecurity Engineer</span>
                </AnimatedGradientText>

                <div className="flex flex-row space-x-2">
                    <button type="button"
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        <CustomIcon name={"github"} size={24}/>
                    </button>
                    <button type="button"
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 uppercase">
                        Contact Me
                    </button>
                    <button type="button"
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        <CustomIcon name={"linkedin"} size={24}/>
                    </button>
                </div>
            </div>
        </Section>
    )
}