import React from 'react'
import Header from '../components/Header'
import SpecialityList from '../components/SpecialityList'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

export const Home = () => {
    return (
        <>
        <Header/>
        <SpecialityList/>
        <TopDoctors/>
        <Banner/>
        </>
    )
}
