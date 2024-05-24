import React from 'react';
import {CustomIcon, CustomIconProps} from "@/app/components/icons/Icons";
import {BorderBeam} from "@/app/components/magicui/border-beam";

type CardProps = {
    title: string;
    subtitle: string;
    imageUrl: string;
    icons: CustomIconProps[];
};

export const Card: React.FC<CardProps> = ({ title, subtitle, imageUrl, icons }) => {
    return (
        <div className="relative border rounded-lg overflow-hidden shadow-lg p-5" style={{
            background: 'linear-gradient(to right, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2), rgba(239, 68, 68, 0.2))'
        }}>
            <BorderBeam size={250} duration={12} delay={9} />
            <img src={imageUrl} alt={title} className="w-full h-96 object-cover object-center bg-accent" />
            <div className="mt-4">
                <p className="text-gray-600">{subtitle}</p>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
            <hr className="my-4" />
            <div className="flex space-x-4">
                {icons.map((icon, index) => (
                    <CustomIcon key={index} {...icon} />
                ))}
            </div>
        </div>
    );
};

