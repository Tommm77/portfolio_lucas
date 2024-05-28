"use client";

import { Section } from "@/app/components/Section";
import { useTheme } from "@/app/components/ThemeContext";
import { Switch } from "@/components/ui/switch";
import { CustomIcon } from "@/app/components/icons/Icons";
import { useState } from "react";
import { ContactFormModal } from "@/app/components/ContactFormModal";
import { useTranslations } from 'next-intl';
import LanguageSwitcherDropdown from "@/app/components/LanguageSwitcherDropdown";

export const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [modalOpen, setModalOpen] = useState(false);
    const t = useTranslations('Navbar');

    return (
        <Section>
            <nav className="flex justify-between items-center py-4 px-4 md:px-8 lg:px-16 xl:px-72 w-full">
                <div className="flex items-center space-x-4">
                    <CustomIcon name="logo" size={36} />
                    <a href="/" className="text-xl md:text-2xl font-bold">lcs-pf</a>
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
                    <LanguageSwitcherDropdown />
                </div>
            </nav>
            <ContactFormModal open={modalOpen} onOpenChange={setModalOpen} />
        </Section>
    );
};
