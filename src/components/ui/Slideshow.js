import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, EffectCoverflow, Pagination, Autoplay } from 'swiper'
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

export default function Slideshow ({ images, interval = 3000 }) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      grabCursor={true}
      speed={1000}
      centeredSlides={true}
      slidesPerView="auto"
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            className="rounded-xl"
            src={image}
            alt="Inbox user interface"
          />
        </SwiperSlide>
      ))
    }
    </Swiper>
  )
}