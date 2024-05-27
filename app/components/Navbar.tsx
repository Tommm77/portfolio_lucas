// components/Navbar.tsx
"use client";

import { Section } from "@/app/components/Section";
import { useTheme } from "@/app/components/ThemeContext";
import { Switch } from "@/components/ui/switch";
import { CustomIcon } from "@/app/components/icons/Icons";
import { useState } from "react";
import { ContactFormModal } from "@/app/components/ContactFormModal";

export const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <Section>
            <nav className="flex justify-between items-center py-4 px-4 md:px-8 lg:px-16 xl:px-72 w-full">
                <div className="flex items-center">
                    <a href="/" className="text-xl md:text-2xl font-bold">Lucas</a>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <CustomIcon name="lightIcon" size={24} />
                        <Switch
                            id="theme-mode"
                            checked={theme === 'dark'}
                            onCheckedChange={toggleTheme}
                        />
                        <CustomIcon name="darkIcon" size={24} />
                    </div>
                    <button
                        type="button"
                        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 text-center uppercase hover:scale-110 transform-gpu transition-transform duration-300 ease-in-out"
                        onClick={() => setModalOpen(true)}
                    >
                        Contact Me
                    </button>
                </div>
            </nav>
            <ContactFormModal open={modalOpen} onOpenChange={setModalOpen} />
        </Section>
    );
};
