import React from 'react'
import MainLayout from '../layout/MainLayout'
import LiveHero from './LiveHero'
import LiveCards from './LiveCards'
import UpcomingLive from './UpcomingLive'
import OngoingLive from './OngoingLive'
import Banner from '../Banner/Banner'
import Footer from '../footer/Footer'
import Zodiac from '../zodiac/Zodiac'
import FaqComponent from '../faqsSec/FaqComponent'
import LiveDescriptions from './LiveDescriptions'
import Faq from '../Faq/Faq'

const Live = () => {
  return (
    <>
        <MainLayout/>
        <LiveHero/>
        <LiveCards/>
     <OngoingLive />
     <UpcomingLive/>
    <Banner/>
    <LiveDescriptions/>
    {/* <FaqComponent/> */}
    <Faq/>
    <Zodiac/>
    <Footer/>
    </>
  )
}

export default Live