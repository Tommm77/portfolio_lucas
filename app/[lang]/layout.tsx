import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/app/components/ThemeContext";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import React from "react";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio Lucas",
    description: "Here is my portfolio to show my skills and projects.",
};

export default async function RootLayout({
                                             children,
                                             params
                                         }: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    const locale = params.lang || 'en';
    const messages = await getMessages(locale);

    return (
        <html lang={locale} suppressHydrationWarning className="h-full">
        <head>
            <link rel="icon" href="../favicon.ico" />
            <title>Portfolio Lucas</title>
        </head>
        <body className={cn(inter.className, 'h-full')}>
        <ThemeProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
                {children}
            </NextIntlClientProvider>
            <Analytics />
            <SpeedInsights />
        </ThemeProvider>
        </body>
        </html>
    );
}

async function getMessages(locale: string) {
    const messages = (await import(`../../messages/${locale}.json`)).default;
    return messages;
}
