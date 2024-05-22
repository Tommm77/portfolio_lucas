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
                    <Button>Contact me</Button>
                </div>
            </nav>
        </Section>
    )
}