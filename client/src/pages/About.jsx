import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div
      className="mt-1 6 bg-slate-900 h-[100vh] text-white bg-cover bg-center"
      style={{ backgroundImage: `url('/images/hero/bg/hero.jpg')` }}
    >
      <div className="max-w-[1200px] py-10  mx-auto">
        <p className="text-3xl mb-20 w-full text-center">About Us</p>
        <div className="">
          <p className="text-3xl">
            Welcome to Fantasies, the vibrant hub of creativity and innovation
            at SIES College. Fantasies is not just an events page; it's a
            journey into the realm of imagination, where students come together
            to bring their wildest dreams to life.
          </p>
          <p className="text-xl mt-5 w-[7 0%]">
            At Fantasies, our mission is to ignite passion, foster creativity,
            and build a sense of community through a diverse range of events and
            activities. We believe in the power of imagination to inspire,
            educate, and connect individuals, and we strive to provide a
            platform where students can unleash their creativity and showcase
            their talents. From exhilarating talent shows to thought-provoking
            panel discussions, from adrenaline-pumping sports tournaments to
            captivating art exhibitions, Fantasies offers something for
            everyone. Our calendar is packed with exciting events designed to
            entertain, inspire, and engage students from all walks of life.
            Fantasies isn't just about attending events; it's about being part
            of something bigger than yourself. It's about stepping out of your
            comfort zone, exploring new interests, and connecting with
            like-minded individuals who share your passions and aspirations.
            Whether you're an artist, an athlete, a performer, or simply someone
            who loves to have fun, Fantasies welcomes you with open arms.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
