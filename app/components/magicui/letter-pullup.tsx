"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

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
    const lines = words.split("\n");
    const controls = useAnimation();
    const ref = useRef(null);

    const pullupVariant = {
        initial: { y: 100, opacity: 0 },
        animate: (i: any) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * (delay ? delay : 0.05),
            },
        }),
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start("animate");
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls]);

    return (
        <div className={cn("flex flex-col items-center w-full", className)} ref={ref}>
            {lines.map((line, lineIndex) => (
                <div className="flex justify-center w-full" key={lineIndex}>
                    {line.split("").map((letter, i) => (
                        <motion.span
                            key={i}
                            variants={pullupVariant}
                            initial="initial"
                            animate={controls}
                            custom={i + lineIndex * line.length}
                            className={cn(
                                "font-display text-center text-lg md:text-5xl font-bold tracking-[-0.02em] drop-shadow-sm",
                                className
                            )}
                            style={{ display: "inline-block", whiteSpace: "pre" }}
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </div>
            ))}
        </div>
    );
}
