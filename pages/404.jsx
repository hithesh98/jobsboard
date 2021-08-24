import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import medicalPic from '../public/404image.png'

export default function custom404() {
    return (
        <Layout>
            <h1>404</h1>
            <h1>We got some bad news...</h1>
            <Image src={medicalPic} width='632' height='474' alt='Doctors looking at an x-ray'/>
            <h3>This page does not exist.</h3>
        </Layout>
            
    )
}
