import {Section} from "@/app/components/Section";
import {CustomIcon} from "@/app/components/icons/Icons";
import {Button} from "@/components/ui/button";

export const Hero = () => {
    return (
        <Section>
            <div className="flex flex-col items-center justify-center mt-20">
                <h1 className="text-4xl font-bold mb-5">Hello, I'm Lucas</h1>
                <p className="text-lg">I'm a cybersecurity Admin</p>
                <p className="text-lg">
                    <CustomIcon className="inline mr-2" name={"eiffelTower"} size={24} /> Paris, France
                </p>
                <p className="text-lg">
                    <CustomIcon className="inline mr-2" name={"birthdayCake"} size={24} />
                    I'm 22 years old
                </p>
                <p className="text-lg">
                    <CustomIcon className="inline mr-2" name={"work"} size={24} />
                    I actually work at Google
                </p>
                <div className="flex flex-row space-x-2 mt-5">
                    <Button><CustomIcon name={"github"} size={24} /> </Button>
                    <Button className="uppercase">Contact me</Button>
                    <Button><CustomIcon name={"linkedin"} size={24} /> </Button>
                </div>
            </div>
        </Section>
    )
}