import {Section} from "@/app/components/Section";
import {Button} from "@/components/ui/button";

export const Navbar = () => {
    return (
        <Section>
            <nav className="flex justify-between items-center py-4 px-32">
                <div className="flex items-center">
                    <a href="/" className="text-2xl font-bold">Lucas</a>
                </div>
                <div className="flex items-center">
                    <button type="button"
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 uppercase">
                        Contact Me
                    </button>
                </div>
            </nav>
        </Section>
    )
}