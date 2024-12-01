import React from 'react'

const OurServices = () => {
  return (
    <div className='m-[11px] mt-14'>
        <h3 className='font-poppins text-xl text-center'>Our Services you will appreciate !</h3>
        <h6 className='font-poppins text-xs text-[#383737BF] text-center py-1'>Effortless Sponsorship and Collaboration Solutions</h6>
        <div className='my-[30px] flex justify-center gap-3 flex-wrap'>
            <div className='w-[160px] h-[143px] rounded-[20px] bg-[#B7D8FF] p-4'>
                <div className='bg-white rounded-full w-[50px] h-[50px]'>
                    <img src="/assets/logo-large.png" alt="" />
                </div>
                <div className='font-poppins text-base w-36 my-2'>Efficient Platform</div>
            </div>
            <div className='w-[160px] h-[143px] rounded-[20px] bg-[#FFF1CC] p-4'>
                <div className='bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center'>
                    <img className='w-[45px]' src="/assets/rocket.png" alt="" />
                </div>
                <div className='font-poppins text-base w-36 my-2'>Bridging Opportunities</div>
            </div>
            <div className='w-[160px] h-[143px] rounded-[20px] bg-[#FCE8E8] p-4 mt-2'>
                <div className='bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center'>
                    <img className='w-[35px]' src="/assets/computer.png" alt="" />
                </div>
                <div className='font-poppins text-base w-36 my-2'>Personalized Matches</div>
            </div>
            <div className='w-[160px] h-[143px] rounded-[20px] bg-[#F5F4FE] p-4 mt-2'>
                <div className='bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center'>
                    <img className='w-[40px]' src="/assets/communication.png" alt="" />
                </div>
                <div className='font-poppins text-base w-36 my-2'>Secure Communication</div>
            </div>
        </div>
    </div>
  )
}

export default OurServices