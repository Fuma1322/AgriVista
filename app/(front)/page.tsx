'use client'

import Benefit from '@/components/FrontEnd/Benefit'
import Farming from '@/components/FrontEnd/Farming'
import Featured from '@/components/FrontEnd/Featured'
import Hero from '@/components/FrontEnd/Hero'
import Blog from '@/components/FrontEnd/OurBlog'
import Service from '@/components/FrontEnd/OurService'
import Story from '@/components/FrontEnd/OurStory'
import Testimonials from '@/components/FrontEnd/Testimonials'
import React from 'react'

export default function page() {
  return (
    <div>
      <Hero />
      <Story />
      <Service />
      <Featured />
      <Farming />
      <Benefit />
      <Testimonials />
      <Blog />
      {/* <Footer /> */}
    </div>
  )
}