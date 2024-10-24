import Image from 'next/image'
import React from 'react'

const Contract = () => {
    return (
        <div className='pt-[8rem] pb-[3rem]'>
            <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem]'>
                <div data-aos="fade-right" data-aos-delay="600">
                    <Image src="/images/c1.png" alt='fly' width={600} height={400} className='object-contain mx-auto p-[1rem]' />
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-delay="800"
                    className='flex items-center justify-center flex-col'>
                    <h1 className='text-center w-[90%] xl:w-[70%] tracking-[0.1rem] mx-auto font-bold text-[20px] md:text-[30px] text-black'>
                        Nhận ưu đãi đặc biệt và nhiều hơn nữa từ khách du lịch
                    </h1>
                    <p className=''>Liên hệ để xem giá ưu đãi!</p>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Contract