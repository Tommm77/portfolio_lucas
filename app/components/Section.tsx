import React from "react";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export type SectionProps = PropsWithChildren<{
    className?: string;
}>;

export const Section = ({ children, className }: SectionProps) => {
    return (
        <section className={cn("py-8 m-auto lg:px-4 px-2", className)}>
            {children}
        </section>
    );
};
