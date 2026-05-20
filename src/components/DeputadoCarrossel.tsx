import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Swiper as SwiperType } from 'swiper'

import "swiper/css";
import 'swiper/css/pagination'
import { useRef } from 'react';
import { DeputadoCard } from './DeputadoCard';
import { dadosMock } from '../dadosMocks';

export const DeputadoCarrossel = () => {
  const swiperRef = useRef<SwiperType | null>(null)
  return (


    <div className="relative" >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">TESTE</h3>
        <div className="flex gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-9 h-9 rounded-full bg-white/85 dark:bg-black/60 backdrop-blur-sm shadow-md flex items-center justify-center transition-all duration-200 hover:bg-white dark:hover:bg-black/80 hover:scale-110"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-9 h-9 rounded-full bg-white/85 dark:bg-black/60 backdrop-blur-sm shadow-md flex items-center justify-center transition-all duration-200 hover:bg-white dark:hover:bg-black/80 hover:scale-110"
          >
            <ChevronRight className="w-4 h-4 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => { swiperRef.current = swiper }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="!pb-12"
      >
        {dadosMock.map((dep, index) => (
          <SwiperSlide key={dep.id}>
            <DeputadoCard deputado={dep} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div >
  )
}