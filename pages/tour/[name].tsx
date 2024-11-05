import MobileNav from '@/components/Navbar/MobileNav';
import Navbar from '@/components/Navbar/Navbar';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import Image from 'next/image';

// Define the type for tour data
interface Tour {
    description: string;
    image: string;
    itinerary: { day: string; details: string[] }[];
    price: string;
    duration: string;
}

const tourData: { [key: string]: Tour } = {
    "Đà lạt": {
        description: "Tour du lịch Đà Lạt là chương trình thiết kế nhằm cung cấp cho du khách các điểm đến hấp dẫn. Như vườn rau sạch công nghệ cao, vườn bí khổng lồ, vườn dâu tây... Đà Lạt là địa điểm du lịch khá quen thuộc với rất nhiều người.",
        image: '/images/dalat.png',
        itinerary: [
            {
                day: "Ngày 1",
                details: [
                    "Khởi hành từ trung tâm thành phố Đà Lạt, bắt đầu hành trình trekking qua rừng thông và các đồi núi để đến đỉnh Langbiang hoặc khu vực Hòn Bồ - các điểm trekking nổi tiếng của Đà Lạt.",
                    "Dừng chân nghỉ trưa giữa rừng, tận hưởng khung cảnh thiên nhiên.",
                    "Tiếp tục trekking đến khu vực cắm trại bên hồ hoặc đồi, nơi bạn sẽ dựng trại để nghỉ qua đêm.",
                    "Buổi tối: Tham gia tiệc nướng BBQ, đốt lửa trại, và giao lưu, thư giãn trong không khí se lạnh của Đà Lạt."
                ]
            },
            {
                day: "Ngày 2",
                details: [
                    "Sáng sớm ngắm bình minh, thưởng thức bữa sáng nhẹ tại khu cắm trại.",
                    "Tiếp tục hành trình trekking khám phá thêm các khu vực núi đồi khác, có thể bao gồm thác Pongour hoặc Thác Voi.",
                    "Kết thúc hành trình, quay trở về trung tâm Đà Lạt vào chiều muộn."
                ]
            }
        ],
        price: "1.500.000 - 2.500.000 VND/người",
        duration: "2 ngày 1 đêm"
    },
    "Hà Giang": {
        description: "Tour Mạo Hiểm Hà Giang - Khám Phá Đèo Mã Pí Lèng và Sông Nho Quế",
        image: '/images/dalat.png',
        itinerary: [
            {
                day: "Ngày 1",
                details: [
                    "Khởi hành từ thành phố Hà Giang, bạn sẽ di chuyển qua những cung đường đèo ngoạn mục, bao gồm đèo Mã Pí Lèng - một trong những đèo đẹp nhất Việt Nam.",
                    "Dừng chân tại hẻm vực Tu Sản, nơi bạn sẽ bắt đầu hành trình trekking ngắn xuống thung lũng.",
                    "Trải nghiệm chèo thuyền trên sông Nho Quế, ngắm cảnh sông núi hùng vĩ từ lòng sông.",
                    "Buổi tối: Nghỉ tại homestay của người dân tộc Mông hoặc Lô Lô, tận hưởng bữa tối truyền thống và giao lưu văn hóa."
                ]
            },
            {
                day: "Ngày 2",
                details: [
                    "Sáng sớm dậy ngắm bình minh và ăn sáng tại homestay.",
                    "Khám phá cột cờ Lũng Cú - điểm cực Bắc của Việt Nam và chụp ảnh kỷ niệm.",
                    "Trên đường trở về, ghé thăm các bản làng của người dân tộc thiểu số và chiêm ngưỡng ruộng bậc thang.",
                    "Chiều muộn trở về thành phố Hà Giang, kết thúc hành trình."
                ]
            }
        ],
        price: "1.500.000 - 2.500.000 VND/người",
        duration: "2 ngày 1 đêm"
    },
    "Lào Cai": {
        description: "",
        image: '/images/dalat.png',
        itinerary: [
            {
                day: "Ngày 1",
                details: [
                    "Bắt đầu từ trung tâm thành phố Lào Cai hoặc Sapa, bạn sẽ đi xe đến bản Tả Van - một bản làng nổi tiếng của người dân tộc Giáy.",
                    "Bắt đầu hành trình trekking qua các thung lũng và ruộng bậc thang tuyệt đẹp, dừng chân tại các bản làng Lao Chải và Tả Van, nơi bạn có thể gặp gỡ và tìm hiểu về văn hóa, cuộc sống của người H'Mông và Giáy.",
                    "Buổi tối: Nghỉ tại homestay, ăn tối với các món ăn truyền thống, giao lưu văn hóa với người dân địa phương.",
                ]
            },
            {
                day: "Ngày 2",
                details: [
                    "Sáng sớm dậy ngắm cảnh núi non và ăn sáng tại homestay.",
                    "Tiếp tục trekking đến bản Giàng Tả Chải, nơi có cảnh quan thiên nhiên hùng vĩ và cây cầu Mây nổi tiếng.",
                    "Buổi trưa: Trở về thị trấn Sapa, có thể dừng chân mua sắm tại chợ Sapa hoặc thưởng thức các đặc sản địa phương.",
                    "Chiều muộn: Kết thúc tour, quay về trung tâm thành phố Lào Cai hoặc ga tàu Sapa."
                ]
            }
        ],
        price: "1.200.000 - 1.800.000 VND/người",
        duration: "2 ngày 1 đêm"
    },
    "Quảng Bình": {
        description: "",
        image: '/images/dalat.png',
        itinerary: [
            {
                day: "Ngày 1",
                details: [
                    "Khởi hành từ trung tâm thành phố Đồng Hới đến Vườn quốc gia Phong Nha - Kẻ Bàng.",
                    "Tham gia tour khám phá Hang Tối với các hoạt động như chèo thuyền kayak, zipline vào cửa hang, và tắm bùn trong hang - một trải nghiệm đặc biệt khi được hòa mình vào môi trường hang động thiên nhiên.",
                    "Buổi chiều: Di chuyển đến Suối Nước Moọc để thư giãn và ngâm mình trong làn nước mát lạnh, nơi bạn cũng có thể trải nghiệm các hoạt động như bơi lội, chèo thuyền kayak.",
                    "Buổi tối: Nghỉ tại khu homestay gần khu vực Phong Nha, thưởng thức bữa tối với các món ăn đặc sản Quảng Bình.",
                ]
            },
            {
                day: "Ngày 2",
                details: [
                    "Buổi sáng: Tham quan Động Phong Nha hoặc Động Thiên Đường - hai trong số các hang động nổi tiếng nhất tại Quảng Bình với hệ thống thạch nhũ độc đáo.",
                    "Sau khi khám phá hang động, ăn trưa tại nhà hàng địa phương.",
                    "Chiều: Kết thúc tour và trở về trung tâm Đồng Hới.",
                ]
            }
        ],
        price: "1.800.000 - 2.500.000 VND/người, bao gồm chi phí ăn uống, chỗ ở, vé tham quan và thiết bị an toàn.",
        duration: "2 ngày 1 đêm"
    },
};

const TourDetails = () => {
    const router = useRouter();
    const [nav, setNav] = useState(false);
    const [selectedDay, setSelectedDay] = useState(0);
    const { name } = router.query;
    const decodedName = decodeURIComponent(name as string);

    const tour = tourData[decodedName];

    // Refs for scrolling
    const descriptionRef = useRef<HTMLDivElement>(null);
    const durationRef = useRef<HTMLDivElement>(null);
    const itineraryRef = useRef<HTMLDivElement>(null);
    const priceRef = useRef<HTMLDivElement>(null);

    if (!tour) return <div>Không có Tour nào!</div>;

    const openNavHandler = () => setNav(true);
    const closeNavHandler = () => setNav(false);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <div className='bg-[#fcf7f3]'>
            <MobileNav nav={nav} closeNav={closeNavHandler} />
            <Navbar openNav={openNavHandler} />

            <div className='flex w-full max-w-[1200px] mx-auto pt-[5rem] pb-[4rem]'>
                {/* Main Content */}
                <div className='w-[75%] p-4'>
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
                    <div ref={descriptionRef} className='flex flex-col justify-center items-center mt-[2rem]'>
                        <h1 className='text-[22px] font-bold'>Giới thiệu</h1>
                        <p className='mt-[1rem] text-[18px] text-center max-w-[700px]'>{tour.description}</p>
                    </div>

                    {/* Tour Duration */}
                    <div ref={durationRef} className='flex justify-center items-center mt-[2rem]'>
                        <h2 className='text-[22px] font-bold'>Thời gian:</h2>
                        <p className='ml-2 text-[20px]'>{tour.duration}</p>
                    </div>

                    {/* Itinerary Tabs */}
                    <div ref={itineraryRef}>
                        <h2 className='mt-[2rem] text-[22px] font-bold'>Lịch trình chi tiết:</h2>
                        <div className='flex gap-4 mt-4 border-b'>
                            {tour.itinerary.map((day, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedDay(index)}
                                    className={`py-2 px-4 border-b-2 ${selectedDay === index ? 'border-blue-500 font-bold' : 'border-transparent'
                                        }`}
                                >
                                    {day.day}
                                </button>
                            ))}
                        </div>
                        <div className='mt-4'>
                            <h3 className='text-[20px] font-semibold'>{tour.itinerary[selectedDay].day}</h3>
                            <ul className='list-disc pl-[1.5rem] mt-[0.5rem]'>
                                {tour.itinerary[selectedDay].details.map((item, index) => (
                                    <li key={index} className='mt-[0.5rem]'>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Tour Price */}
                    <div ref={priceRef}>
                        <h2 className='mt-[2rem] text-[22px] font-bold'>Giá Tour:</h2>
                        <p className='text-[20px] text-orange-600 font-semibold'>{tour.price}</p>
                    </div>
                </div>

                {/* Sidebar */}
                <div className='w-[25%] p-4 bg-white rounded-md shadow-md ml-6 sticky top-[5rem] h-fit'>
                    <h2 className='text-[20px] font-bold text-center'>Thông tin tour</h2>
                    <p className='text-[16px] text-gray-400 text-center'>Độ tuổi tham gia: 18-70 tuổi</p>
                    <p className='mt-2 text-center text-orange-600 font-semibold'>{tour.price}</p>
                    <button className='mt-4 w-full bg-blue-500 hover:bg-orange-400 duration-300 text-white py-2 rounded-md font-semibold'>
                        Đặt chỗ
                    </button>

                    {/* Table of Contents */}
                    <div className='mt-6'>
                        <h3 className='text-[18px] font-bold'>Mục lục</h3>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <button
                                    onClick={() => scrollToSection(descriptionRef)}
                                    className='text-blue-500 hover:underline'
                                >
                                    Giới thiệu
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection(durationRef)}
                                    className='text-blue-500 hover:underline'
                                >
                                    Thời gian
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection(itineraryRef)}
                                    className='text-blue-500 hover:underline'
                                >
                                    Lịch trình
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection(priceRef)}
                                    className='text-blue-500 hover:underline'
                                >
                                    Giá Tour
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourDetails;