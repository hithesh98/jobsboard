import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import graphic from '../public/graphic.gif'
import styles from '../pages/styles/aboutus.module.css'

export default function aboutus() {
    return (
        <Layout>
            <div className={styles.contentWrapper}>
                <Image src={graphic} width={500} height={500} alt="two characters"/>
                <div className={styles.copyWrapper}>
                <p>
                Jobsinhealthtech.com was created by <a href="https://twitter.com/Brian_CHT"> Brian </a> and <a href="https://twitter.com/HitheshPT"> Hithesh</a>. We are both healthcare professionals and technologists. We are passionate about the potential for technology to improve healthcare. Our idea for this site was grown from watching the incredible innovation happening in health-tech and life-sciences. We were inspired by developments such as <a href="https://www.graphwear.co/">needle-free glucose monitors </a> and <a href="https://www.ochre-bio.com/">rejuvenating donor livers</a>, and decided to create this site to help people get involved. 
                </p>
                <p>
                Our mission is to help as many people as possible to have great careers in health technology. We believe that by developing and nurturing talent in the industry, healthcare can be greatly improved. In addition to our jobs board, we are building a community of people who would like to develop their careers in health tech and life sciences. You can sign-up <a href="http://jobsinhealthtech.com/community">here</a>.
                </p>
                </div>
            </div>
        </Layout>
    )
}
