import { BoxesCore } from '@/components/aceternity/BoxesCore'
import { cn } from '@/utils/cn'
import clsx from 'clsx'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Home() {
  const meteors = new Array(50 || 20).fill(true)
  const image = [
    {
      img: '/images/hero/main/1.jpg',
    },
    {
      img: '/images/hero/main/2.jpg',
    },
    {
      img: '/images/hero/main/3.jpg',
    },
    {
      img: '/images/hero/main/4.jpg',
    },
    {
      img: '/images/hero/main/5.jpg',
    },
  ]
  return (
    <>
      <div
        className="h-[1000px] bg-center bg-cover mt -16 py -28 bg-slate-900 "
        style={{ backgroundImage: `url('/images/hero/bg/hero.jpg')` }}
      >
        {/* {meteors.map((el, idx) => (
        <span
          key={'meteor' + idx}
          className={cn(
            'animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]',
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + 'px',
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + 's',
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + 's',
          }}
        ></span>
      ))} */}
        {/* <div className="relative flex items-center flex-row justify-between  h-full max-w-[1200px] py-5 mx-auto">
        <div>
          <p className="text-white  text-4xl font-semibold">Welcome To </p>
          <p className="text-white  text-5xl font-semibold">
            <span className="text-red-500"># </span>
            FANTASIES 2024
          </p>
          <p className="text-white">Scroll down to see all the events</p>
        </div>
        <div className="  ">
         
          <img src="/images/hero/hero2.png" className="w-[350px]" alt="" />
        </div>
      </div> */}
        {/* <div className="max-w-[1200px] mx-auto flex items-center gap-20">
        <div className="flex flex-col gap-6">
          <p className="text-white text-2xl font-semibold">
            Explore the City Your Way
          </p>
          <p className="text-white text-4xl font-semibold">
            Rent Cars and Bikes by Hour
          </p>
          <p className="text-white text-xl">
            Discover the freedom of flexible transportation with our hourly car
            and bike rental service. Whether you're navigating the urban jungle
            or exploring scenic routes, we offer convenient options tailored to
            your schedule and preferences.
          </p>
          <div className="text-center flex items-c enter justify-ce nter flex-row gap-5">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
              href="/sign-up"
            >
              Register Now
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
              href="/category"
            >
              Explore Cars
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
        <div className="min-w-[500px]">
          <img src="/images/hero/new.png" className="w-full h-auto" alt="" />
        </div>
      </div> */}
        <div className="max-w-[1200px] flex flex-col gap-5 items-center justify-center text-white mx-auto">
          <img src="/images/logo/logo.png" alt="" />
          <p className="flex items-center text-5xl font-semibold ">25th YEAR</p>

          <div className="max-w-[800px] flex flex-col items-center h-[500px]">
            {/* <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {image.map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="h-[500px] w-full bg-white text-black"
                >
                  <img
                    src={item.img}
                    alt=""
                    className="object-cover h-full w-full "
                  />
                </SwiperSlide>
              )
            })}
          </Swiper> */}
            <img src="/images/logo/sitara.png" className="" alt="" />
            <p className="text-4xl font-semibold mt-8">
              SITARA LEGACY UNFOLDED
            </p>
            <p></p>
          </div>
        </div>
      </div>
      <div className="!bg-slate-900 text-white py-20 mt -10">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-3xl font-bold">FAQ </p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is "Fantasies" and what makes it unique among college
                fests?
              </AccordionTrigger>
              <AccordionContent>
                "Fantasies" is an annual college fest at SIES College that
                celebrates creativity, talent, and collaboration. What makes it
                unique is its vibrant atmosphere, diverse range of events, and
                the opportunity for students to showcase their skills in various
                fields. How can students participate in "Fantasies" and showcase
                their talents? Students can participate in "Fantasies" by
                registering for events and competitions related to their
                interests and talents. Whether it's performing arts, sports,
                academic quizzes, or cultural showcases, there's something for
                everyone to get involved in. What are the main attractions and
                events planned for "Fantasies" this year? This year's
                "Fantasies" will feature a dynamic lineup of events including
                musical performances, dance competitions, theater productions,
                sports tournaments, art exhibitions, and much more. Stay tuned
                for the official event schedule!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Are there any special guest appearances or performances
                scheduled for "Fantasies"?
              </AccordionTrigger>
              <AccordionContent>
                Yes, "Fantasies" will host special guest appearances and
                performances by renowned artists, celebrities, and industry
                professionals. Keep an eye out for announcements regarding the
                exciting lineup! How can students get involved in organizing and
                volunteering for "Fantasies"? Students interested in organizing
                and volunteering for "Fantasies" can join the organizing
                committee or sign up for volunteer opportunities through the
                college's official channels. Your support and enthusiasm are
                greatly appreciated!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Are there any competitions or contests students can participate
                in during "Fantasies"?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! "Fantasies" offers a wide range of competitions and
                contests spanning various categories such as music, dance,
                drama, literature, sports, and more. Check out the event catalog
                for details on how to register.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can you provide more information about the theme of this year's
                "Fantasies"?
              </AccordionTrigger>
              <AccordionContent>
                This year's theme for "Fantasies" is Sitara. It's an exciting
                concept that will inspire creativity and imagination among
                participants and attendees. Stay tuned for theme-related events
                and decorations! What are the dates and timings for "Fantasies"
                and how can students attend? "Fantasies" will take place from .
                Students can attend by purchasing tickets or passes through the
                college's official ticketing platform or at designated counters
                on campus.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  )
}
