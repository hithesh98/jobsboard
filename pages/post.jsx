import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import { Widget } from '@typeform/embed-react';
import styles from './styles/post.module.css'

export default function post() {
    return (
        <>
            <Head>
                <title>Post a Job</title>
            </Head>
            <Layout>
                <div className={styles.contentWrapper}>
                    <div className={styles.topCopy}>
                        <h1>Thanks for your interest in posting a job!</h1>
                        <p>The cost is €80 to publish a job listing for 30 days. This includes the following:</p>
                        <ul>
                            <li>
                            Featured post on our jobs board with unique page so that you can share the posting
                            </li>
                            <li>
                            Shared post on socials
                            </li>
                            <li>
                            Customer support from Jobs in Health Tech Team
                            </li>
                            <li>
                            Metrics from the job posting if requested
                            </li>
                        </ul>
                        <p>Fill out the Typeform below and then pay with secure stripe checkout. Your post will then be live within 24 hours.</p>
                        <p>Any questions? Reach out at Brian@jobsinhealthtech.com</p>
                    </div>
                <Widget id="Kbk7VlPw" className= {styles.typeform} />
                <div className={styles.bottomCopy}>
                    <p>If you are interested in speaking to us about subscription packages or discounts on multiple job postings, please contact us at Brian@jobsinhealthtech.com</p>
                </div>
            </div>
            </Layout>
        </>
    )
}
