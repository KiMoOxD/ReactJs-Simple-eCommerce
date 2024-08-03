import React from 'react'

export default function Banner() {
  return (
    <div className='my-5 px-4 h-fit flex flex-col-reverse md:flex-row items-center justify-evenly text-white bg-black bg-gradient-to-r from-[#ffffff11]'>
      <div className='md:pl-10 text-center md:text-start my-6 md:my-0'>
        <h1 className='text-3xl md:text-5xl lg:text-6xl'>Apple Watch Series 8</h1>
        <p className='mt-5'>Don't miss the last opportuinty</p>
        <button className='border rounded-full px-4 py-2 mt-5'>Shop Now</button>
      </div>
      <div>
        <img className='w-[600px] mix-blend-lighten mt-5 md:mt-0' src="https://newsimg.giznext.com/mobile/production/news/wp-content/uploads/2022/09/07233440/Apple-Watch-8-1024x576.png" alt="Apple Watch" />
      </div>
    </div>
  )
}
