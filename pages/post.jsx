import React from 'react'
import Layout from '../components/Layout'
import { Widget } from '@typeform/embed-react';
import styles from './styles/post.module.css'

export default function post() {
    return (
        <Layout>
            <h1>Reach the top talent in health tech</h1>
            <p>Contact us at alert@jobsinhealthtech.com to speak about subscription packages.</p>
            <p><strong>€80</strong> to publish job listing for <strong>30 days</strong>.</p>
            <Widget id="Kbk7VlPw" className= {styles.typeform} />
        </Layout>
    )
}
