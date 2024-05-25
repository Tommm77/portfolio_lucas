"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LetterPullupProps {
    className?: string;
    words: string;
    delay?: number;
}

export default function LetterPullup({
                                         className,
                                         words,
                                         delay,
                                     }: LetterPullupProps) {
    // Split the text into lines, then into letters
    const lines = words.split("\n");

    const pullupVariant = {
        initial: { y: 100, opacity: 0 },
        animate: (i: any) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * (delay ? delay : 0.05), // By default, delay each letter's animation by 0.05 seconds
            },
        }),
    };

    return (
        <div className="flex flex-col items-center">
            {lines.map((line, lineIndex) => (
                <div className="flex justify-center" key={lineIndex}>
                    {line.split("").map((letter, i) => (
                        <motion.h1
                            key={i}
                            variants={pullupVariant}
                            initial="initial"
                            animate="animate"
                            custom={i + lineIndex * line.length} // Ensure unique delay for each letter
                            className={cn(
                                "font-display text-center text-xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]",
                                className,
                            )}
                        >
                            {letter === " " ? <span>&nbsp;</span> : letter}
                        </motion.h1>
                    ))}
                </div>
            ))}
        </div>
    );
}
