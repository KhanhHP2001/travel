import React from 'react'
import ToursCard from '../Helper/ToursCard'

const Tours = () => {
    return (
        <div className='pt-[5rem] bg-gray-200 pb-[4rem]'>
            <h1 className='heading'>
                Tour du lịch
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center w-[80%] mx-auto mt-[4rem]'>
                <div data-aos="fade-left">
                    <ToursCard name="Đà lạt" city="Tp. Đà lạt" description='Tour du lịch Đà Lạt là chương trình thiết kế nhằm cung cấp cho du khách các điểm đến hấp dẫn. Như vườn rau sạch công nghệ cao, vườn bí khổng lồ, vườn dâu tây... Đà Lạt là địa điểm du lịch khá quen thuộc với rất nhiều người.' image="/images/dalat.png" />
                </div>
                <div data-aos="zoom-in" data-aos-delay="300">
                    <ToursCard name="Hà Giang" city="Tp. Hà Giang" description='Tour Mạo Hiểm Hà Giang - Khám Phá Đèo Mã Pí Lèng và Sông Nho Quế' image="/images/baoloc.png" />
                </div>
                <div data-aos="fade-right" data-aos-delay="600">
                    <ToursCard name="Lào Cai" city="Tp. Lào Cai" description='15' image="/images/hagiang.png" />
                </div>
                <div data-aos="fade-left" data-aos-delay="900">
                    <ToursCard name="Quảng Bình" city="Đồng Hới" description='30' image="/images/demileng.png" />
                </div>
            </div>
        </div>
    )
}

export default Tours