import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/app/components/ThemeContext";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import React from "react";
import {NextIntlClientProvider} from "next-intl";
import {getLocale, getMessages} from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio Lucas",
    description: "Here is my portfolio to show my skills and projects.",
};

export default  async function RootLayout({
                                              children,
                                          }: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();
    const messages = await getMessages();
    return (
        <html lang="en" suppressHydrationWarning className="h-full">
        <head>
            <link rel="icon" href="/favicon.ico" />
            <title>Portfolio Lucas</title>
        </head>
        <body className={cn(inter.className, 'h-full')}>
        <ThemeProvider>
            <NextIntlClientProvider messages={messages}>
                {children}
            </NextIntlClientProvider>
            <Analytics />
            <SpeedInsights />
        </ThemeProvider>
        </body>
        </html>
    );
}