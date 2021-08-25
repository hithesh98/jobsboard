import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import medicalPic from '../public/404image.png'
import styles from './styles/404.module.css'

export default function custom404() {
    return (
        <Layout>
            <div className={styles.wrapper}>
                <Image src={medicalPic} width='632' height='474' alt='Doctors looking at an x-ray'/>
                <div className={styles.copy}>
                    <h1 className={styles.title}>404</h1>
                    <h1>Oh no, we got some bad news...</h1>
                    <p>This page does not exist.</p>
                </div>
            </div>
        </Layout>
            
    )
}
