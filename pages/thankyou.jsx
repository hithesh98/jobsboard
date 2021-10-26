import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import style from './styles/confirmation.module.css'
import blink from '../public/blinkbg.gif'



export default function thankyou() {
    return (
        <Layout>
            <div >
                <h2 className={style.heading}>Just one more thing and then you&apos;re in.</h2>
                <Image src={blink} alt="blink" width="218px" height="218px"/>
                <h3 className={style.description}>We need to confirm your email address. To complete the subscription process, please click the link in the email we just sent you. If you don&apos;t see the email, check your spam folder!</h3>
            </div>
        </Layout>
    )
}
