import React from 'react'
import HotelsCard from '../Helper/HotelsCard'

const Hotels = () => {
    return (
        <div className='pt-[5rem] bg-gray-200 pb-[4rem]'>
            <h1 className='heading'>
                Best Hotels
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center w-[80%] mx-auto mt-[4rem]'>
                <div>
                    <HotelsCard name="holtel Nexus" city="Rajs" price="120.000đ" reviewNum='21' image="/images/h1.png" />
                </div>
                <div>
                    <HotelsCard name="holtel Nexus" city="Rajs" price="120.000đ" reviewNum='21' image="/images/h2.png" />
                </div>
                <div>
                    <HotelsCard name="holtel Nexus" city="Rajs" price="120.000đ" reviewNum='21' image="/images/h3.png" />
                </div>
                <div>
                    <HotelsCard name="holtel Nexus" city="Rajs" price="120.000đ" reviewNum='21' image="/images/h4.png" />
                </div>
                <div>
                    <HotelsCard name="holtel Nexus" city="Rajs" price="120.000đ" reviewNum='21' image="/images/h5.png" />
                </div>
                <div>
                    <HotelsCard name="holtel Nexus" city="Rajs" price="120.000đ" reviewNum='21' image="/images/h6.png" />
                </div>
                <div>
                    <HotelsCard name="holtel Nexus" city="Rajs" price="120.000đ" reviewNum='21' image="/images/h1.png" />
                </div>
            </div>
        </div>
    )
}

export default Hotels