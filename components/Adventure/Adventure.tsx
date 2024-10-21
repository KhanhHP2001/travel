import React from 'react'

const Adventure = () => {
    return (
        <div className='mt-[6rem] bg-[#ebe2c7] p-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {/* Column 1 */}
                <div className='flex flex-col space-y-6 space-x-10 '>
                    <div>
                        <h1 className='heading font-bold text-[#f46036]'>
                            KÝ DANH NHÀ CHINH PHỤC CÙNG
                        </h1>
                        <h1 className='heading font-bold' >ADVENTURE</h1>
                    </div>

                    <div className='mt-8'>
                        Không chỉ đi theo tiếng gọi từ thiên nhiên hoang dã,
                        Tổ Ong đưa bạn đến với những hành trình chinh phục bản thân,
                        chứng minh được sức mạnh và sự bền bỉ của tinh thần, thể lực cùng những chuyên gia leo núi thực thụ.
                    </div>

                    <button className='mt-6 px-4 py-2 bg-black w-[30%] rounded-md text-white border border-gray-300 flex items-center hover:bg-gray-800'>
                        <span>Tìm tuor ngay</span>
                        <span className='ml-4'>&rarr;</span>
                    </button>
                </div>

                {/* Column 2 */}
                <div className='flex flex-col space-y-6'>
                    <div>
                        <span className='font-bold'>
                            AN TOÀN
                        </span>
                        <div className='mt-2'>
                            Yếu tố an toàn được ưu tiên hàng đầu đảm bảo chuyến đi được diễn ra suôn sẻ và khách hàng được trải nghiệm trọn vẹn hành trình.
                        </div>
                    </div>

                    <div>
                        <span className='font-bold'>
                            BỀN VỮNG
                        </span>
                        <div className='mt-2'>
                            Là một trong những đơn vị đầu tiên khai thác bài bản về du lịch trekking ở Miền Nam và định hướng trở thành công ty du lịch mạo hiểm hàng đầu, chúng tôi nỗ lực trau dồi kiến thức, kỹ năng chuyên môn và nâng cao nghiệp vụ mỗi ngày.
                        </div>
                    </div>
                </div>

                {/* Column 3 */}
                <div className='flex flex-col space-y-6'>
                    <div>
                        <span className='font-bold'>
                            CHUYÊN NGHIỆP
                        </span>
                        <div className='mt-2'>
                            Tất cả những hoạt động hướng về tự nhiên của Tổ Ong Adventure đều gắn liền với tiêu chí bền vững. Chúng tôi duy trì các quá trình sinh thái và giúp bảo tồn đa dạng và di sản thiên nhiên. Bên cạnh đó, chúng tôi góp phần vào quá trình phát triển bền vững bằng cách giải quyết vấn đề việc làm, tạo thu nhập ổn định, nâng cao chất lượng cuộc sống của người dân bản địa.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adventure
