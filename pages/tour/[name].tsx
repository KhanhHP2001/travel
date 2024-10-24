import MobileNav from '@/components/Navbar/MobileNav';
import Navbar from '@/components/Navbar/Navbar';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Image from 'next/image';

// Define the type for tour data
interface Tour {
    description: string;
    image: string;
    itinerary: string[];
    price: number;
}

const tourData: { [key: string]: Tour } = {
    "Đà lạt": {
        description: "Tour du lịch Đà Lạt là chương trình thiết kế nhằm cung cấp cho du khách các điểm đến hấp dẫn. Như vườn rau sạch công nghệ cao, vườn bí khổng lồ, vườn dâu tây... Đà Lạt là địa điểm du lịch khá quen thuộc với rất nhiều người. ",
        image: '/images/dalat.png', // Example image path
        itinerary: ["Ngày 1: Tham quan Làng Cù Lần - ngôi làng cổ tích với phong cảnh thiên nhiên hữu tình", "Ngày 2: Trang trại rau và hoa Vạn thành - khu nuôi trồng và lưu giữ nhiều loài hoa và rau nổi tiếng của thành phố Đà Lạt", "Ngày 3: Nhà Thờ Domaine De Maria - ngôi nhà thờ hồng với phong cảnh thơ mộng tựa Châu âu"],
        price: 500000,
    },
    "Bảo Lộc": {
        description: "Relaxing tour to Bảo Lộc...",
        image: '/images/baoloc.png', // Example image path
        itinerary: ["Day 1: Tea farms", "Day 2: Waterfalls", "Day 3: Departure"],
        price: 500000,
    },
    "Hà Giang": {
        description: "A scenic tour to Hà Giang...",
        image: '/images/hagiang.png', // Example image path
        itinerary: ["Day 1: Arrival", "Day 2: Mountain hike", "Day 3: Departure"],
        price: 500000,
    },
    "Mã Pí Lèng": {
        description: "A breathtaking tour to Mã Pí Lèng...",
        image: '/images/demileng.png', // Example image path
        itinerary: ["Day 1: Drive through the pass", "Day 2: Explore surroundings", "Day 3: Departure"],
        price: 500000,
    }
};

const TourDetails = () => {
    const router = useRouter();
    const [nav, setNav] = useState(false);
    const { name } = router.query;
    const decodedName = decodeURIComponent(name as string);

    const tour = tourData[decodedName];

    if (!tour) return <div>Không có Tour nào!</div>;

    const openNavHandler = () => setNav(true);
    const closeNavHandler = () => setNav(false);

    return (
        <div className='bg-gray-100'>
            <MobileNav nav={nav} closeNav={closeNavHandler} />
            <Navbar openNav={openNavHandler} />

            <div className='pt-[5rem] bg-gray-100 pb-[4rem] w-[80%] mx-auto'>
                {/* Tour Name */}

                <h1 className='heading text-center'>{decodedName}</h1>

                {/* Tour Image */}
                <div className='flex justify-center mt-[2rem]'>
                    <div className='relative'>
                        <Image
                            src={tour.image}
                            alt={`Image of ${decodedName}`}
                            width={1000}
                            height={600}
                            objectFit='cover'
                            className='rounded-md'
                        />
                    </div>
                </div>

                {/* Tour Description */}
                <div className='flex flex-col justify-center items-center mt-[2rem]'>
                    <h1 className='text-[22px] font-bold'>Giới thiệu</h1>
                    <p className='mt-[1rem] text-[18px] text-center max-w-[700px]'>{tour.description}</p>
                </div>


                {/* Itinerary */}
                <h2 className='mt-[2rem] text-[22px] font-bold'>Lịch trình:</h2>
                <ul className='list-disc pl-[1.5rem]'>
                    {tour.itinerary.map((item, index: number) => (
                        <li key={index} className='mt-[0.5rem]'>{item}</li>
                    ))}
                </ul>

                {/* Tour Price */}
                <h2 className='mt-[2rem] text-[22px] font-bold'>Giá Tour:</h2>
                <p className='text-[20px] text-orange-600 font-semibold'>{(tour.price).toLocaleString('de-DE')}đ/khách</p>
            </div>
        </div>
    );
};

export default TourDetails;
