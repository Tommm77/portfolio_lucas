import { Section } from "@/app/components/Section";
import { useTranslations } from 'next-intl';

export const Contact = () => {
    const t = useTranslations('Contact');

    return (
        <Section className="mt-20 relative">
            <div className="flex flex-col items-center px-4 md:px-8">
                <h1 className="font-bold uppercase mb-5 text-xl sm:text-2xl md:text-3xl">{t('title')}</h1>
                <h3 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold w-2/3">
                    {t('description')}
                </h3>
                <div className="flex flex-col md:flex-row justify-center mt-20 w-full space-y-10 md:space-y-0 md:space-x-10">
                    {['medium', 'rootMe', 'hackTheBox', 'linkedin'].map((platform) => (
                        <div key={platform} className="flex flex-col items-center space-y-4 w-full md:w-1/6">
                            <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{t(`${platform}.title`)}</h3>
                            <p className="text-center text-lg">{t(`${platform}.username`)}</p>
                            <a
                                type="button"
                                className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 uppercase hover:scale-110 transform-gpu transition-transform duration-300 ease-in-out"
                                href={platform === 'medium' ? "https://medium.com/@swzwnc" : platform === 'rootMe' ? "https://www.root-me.org/LCS?lang=fr#60d6cfa6b6845f8f28c1f44001816270" : platform === 'hackTheBox' ? "https://app.hackthebox.com/users/911438" : "https://www.linkedin.com/in/lucas-o-a34971243/"}
                            >
                                {t(`${platform}.profile`)}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
