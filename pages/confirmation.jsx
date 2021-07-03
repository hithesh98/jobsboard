import React from 'react'
import Layout from './components/Layout'
import Image from 'next/image'
import confetti from '../public/confetti.gif'
import style from './styles/confirmation.module.css'



export default function confirmation() {
    return (
        <Layout>
            <div>
                <h2 className={style.heading}>Thanks for subscribing to Jobs in Health Tech.</h2>
                <Image src={confetti} alt="confetti" width="218px" height="218px"/>
                <h3 className={style.description}>We are currently building our site. Our aim is to build the worlds largest community of health tech professionals and jobs for you to engage with. In the meantime, you will receive alerts with our curated job opportunities. If you have any feedback, please email us!</h3>
            </div>
        </Layout>
    )
}
