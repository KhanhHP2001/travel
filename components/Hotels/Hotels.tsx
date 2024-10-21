import React from 'react'
import HotelsCard from '../Helper/HotelsCard'

const Hotels = () => {
    return (
        <div className='pt-[5rem] bg-gray-200 pb-[4rem]'>
            <h1 className='heading'>
                Tour du lịch
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center w-[80%] mx-auto mt-[4rem]'>
                <div>
                    <HotelsCard name="Đà lạt" city="Tp. Đà lạt" price="120.000đ" reviewNum='21' image="/images/dalat.png" />
                </div>
                <div>
                    <HotelsCard name="Bảo Lộc" city="Tp. Bảo Lộc" price="120.000đ" reviewNum='21' image="/images/baoloc.png" />
                </div>
                <div>
                    <HotelsCard name="Hà Giang" city="Tp. Hà Giang" price="120.000đ" reviewNum='21' image="/images/hagiang.png" />
                </div>
                <div>
                    <HotelsCard name="Mã Pí Lèng" city="Hà Giang" price="120.000đ" reviewNum='21' image="/images/demileng.png" />
                </div>
            </div>
        </div>
    )
}

export default Hotels