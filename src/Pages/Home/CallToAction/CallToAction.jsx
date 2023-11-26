import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/slide1.jpg'
import slide2 from '../../../assets/slide2.jpg'
import slide3 from '../../../assets/slide3.jpg'
import slide4 from '../../../assets/slide4.jpg'
import slide5 from '../../../assets/slide5.jpg';
import slide6 from '../../../assets/slide6.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const CallToAction = () => {
  return (
    <div className='my-16 bg-[#f8f7f3] rounded-lg shadow-lg rounded-tl-[80px] rounded-br-[80px] p-5'>
    <SectionTitle
    subHeading={"---Adopt Pets And Give Them a Better Life---"}
    heading={"Take A Look"}>
    </SectionTitle>
    <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
            <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide6} alt="" />
        </SwiperSlide>
    </Swiper>
    <p className='mt-4 p-10 text-center font-medium'>
    Pets can bring joy, companionship, and a sense of purpose to their owners, improving mental and emotional well-being. Providing a loving home to a rescued pet not only saves a life but also creates a stronger bond between humans and animals. Through adoption, people have the opportunity to make a positive impact on the lives of these creatures, offering them a safe haven and the chance to thrive in a nurturing environment.
    </p>
</div>
  )
}

export default CallToAction