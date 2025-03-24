import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Closy was created with a passion for fashion and a vision to transform the way people shop for clothing online. Our journey started with a simple goal: to build a platform where customers can effortlessly find, explore, and purchase stylish apparel that fits their unique preferences and needs..</p>
              <p>Since our beginning, we’ve been committed to curating a wide selection of high-quality fashion items, ranging from casual wear and party outfits to workwear and seasonal trends. Each piece is sourced from trusted suppliers, ensuring that our customers always receive the best in quality and design.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>At Closy, our mission is to make fashion accessible, enjoyable, and stress-free. We’re dedicated to delivering a seamless shopping experience that goes beyond expectations, from discovering the latest trends to quick and reliable delivery, all while keeping customer satisfaction at the heart of everything we do.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>At Closy, we handpick every piece of clothing to meet the highest standards of quality, ensuring you always receive stylish and durable products.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>Our intuitive and user-friendly website makes shopping a breeze, with a seamless browsing and ordering experience that saves you time and effort.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Closy’s dedicated support team is always ready to assist you, making sure your shopping journey is smooth and your satisfaction remains our top priority.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
