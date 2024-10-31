import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { StarIcon } from '@heroicons/react/16/solid';

interface Props {
    image: string;
    name: string;
    city: string;
    description: string;
}

const ToursCard = ({ image, name, city, description }: Props) => {
    return (
        <Link href={`/tour/${encodeURIComponent(name)}`}>
            <div className='cursor-pointer bg-white rounded-md overflow-hidden shadow-md transition-transform hover:scale-105'>
                <div className='relative overflow-hidden w-full h-[20rem]'>
                    <Image
                        src={image}
                        alt={name}
                        className='transform object-cover transition-all duration-700 scale-100 hover:scale-125'
                        layout='fill'
                    />
                </div>
                <div className='p-[1.4rem]'>
                    <div className='flex items-center mb-[0.5rem]'>
                        <StarIcon className='text-orange-600 w-[1rem] h-[1rem]' />
                        <StarIcon className='text-orange-600 w-[1rem] h-[1rem]' />
                        <StarIcon className='text-orange-600 w-[1rem] h-[1rem]' />
                        <StarIcon className='text-orange-600 w-[1rem] h-[1rem]' />
                        <StarIcon className='text-orange-600 w-[1rem] h-[1rem]' />
                    </div>
                    <h1 className='text-[20px] text-black capitalize font-bold'>{name}</h1>
                    <p className='text-[17px] text-black opacity-70 mt-[0.4rem]'>{city}</p>
                    <div className='w-full opacity-60 h-[1px] mt-[1rem] bg-gray-800'></div>
                    <p className='text-[15px] font-semibold text-black opacity-80 mt-[1rem] line-clamp-2'>{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default ToursCard;
