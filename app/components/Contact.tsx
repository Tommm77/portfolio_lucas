import {Section} from "@/app/components/Section";

export const Contact = () => {
    return (
        <Section className="mt-20 relative w-1/2">
            <div className="flex flex-col items-center">
                <h1 className="font-bold uppercase mb-5">Contact Me</h1>
                <h3 className="text-center text-5xl font-bold">You need a Cyber Security Engineer ?</h3>
                <div className="flex flex-row justify-between mt-20 w-full px-44">
                    <div className="flex flex-col items-center space-y-4">
                        <h3 className="text-center text-5xl font-bold">Medium</h3>
                        <p className="text-center text-lg">LCS</p>
                        <button type="button"
                                className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 uppercase">
                            See Posts
                        </button>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        <h3 className="text-center text-5xl font-bold">Linkedin</h3>
                        <p className="text-center text-lg">Lucas Offredi</p>
                        <button type="button"
                                className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 uppercase">
                            Visit Profile
                        </button>
                    </div>
                </div>
            </div>
        </Section>
    )
}