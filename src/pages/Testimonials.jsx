// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination } from 'swiper/modules';
// import required modules
import { Navigation } from 'swiper/modules';
import { reviews } from '../utils/reviews';
import { FaStar } from 'react-icons/fa';


const Testimonials = () => {
  return (
    <section>
        <div className='container mx-auto max-w-screen-2xl py-20 px-4 '>
          {/* heading */}
          <div className="text-center space-y-3 ">
          <h1 className="text-black text-2xl font-semibold"><span className="text-[#F9AD1B] text-3xl">-</span>Clients Testimonials</h1>
          <h1 className="heading  text-5xl font-semibold">The Impact of My Work:</h1>
          <h1 className="heading text-[#F9AD1B]  text-3xl font-medium">Client Testimonials:</h1>
          </div>
          {/* testimonial cards */}
          <Swiper 
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {
            reviews.map((review,index)=> (
                <SwiperSlide key={index} className='bg-no-repeat bg-cover rounded-lg' >
                    <div className='md:h-[547px] flex justify-center items-center mb-4'>
                      <div className='mt-16 mb-5 bg-white border rounded-xl md:w-4/5 w-full p-4 relative'>
                        <img src={review.image} alt="" className="size-20 absolute left-1/2 -translate-x-1/2 -top-10 ring-2 rounded-full ring-primary object-cover"/>
                        <div className='mt-16 text-center'>
                        <h3 className='text-lg font-semibold dark:text-black'>{review.name}</h3>
                        <p className='mb-3 dark:text-black'>Verified Customers</p>
                        <p className='text-gray-500 dark:text-black mb-4'>{review.review}</p>
                        <p className='flex justify-center'> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                        <div className="w-full mx-auto mb-2 flex justify-center items-center text-center">
                            {/* <Rating rating={review.rating}/> */}
                        </div>
                      </div>
                      </div>
                    </div>
                </SwiperSlide>
            ))
        }
      </Swiper>
        </div>
    </section>
  )
}

export default Testimonials