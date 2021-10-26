import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import errorGif from '../public/404.gif'
import styles from './styles/404.module.css'

export default function custom404() {
    return (
        <Layout>
            <div className={styles.wrapper}>
                <Image src={errorGif} width='500' height='500' alt='Doctors looking at an x-ray'/>
                <div className={styles.copy}>
                    <h1 className={styles.title}>404</h1>
                    <h1>Oh no, we got some bad news...</h1>
                    <p>This page does not exist.</p>
                </div>
            </div>
        </Layout>
            
    )
}
