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
                    <ToursCard name="Đà lạt" city="Tp. Đà lạt" price="500.000đ" reviewNum='12' image="/images/dalat.png" />
                </div>
                <div data-aos="zoom-in" data-aos-delay="300">
                    <ToursCard name="Bảo Lộc" city="Tp. Bảo Lộc" price="500.000đ" reviewNum='20' image="/images/baoloc.png" />
                </div>
                <div data-aos="fade-right" data-aos-delay="600">
                    <ToursCard name="Hà Giang" city="Tp. Hà Giang" price="500.000đ" reviewNum='15' image="/images/hagiang.png" />
                </div>
                <div data-aos="fade-left" data-aos-delay="900">
                    <ToursCard name="Mã Pí Lèng" city="Hà Giang" price="500.000đ" reviewNum='30' image="/images/demileng.png" />
                </div>
            </div>
        </div>
    )
}

export default Tours