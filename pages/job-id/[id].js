import React from 'react';
import Layout from '../../components/Layout';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import DOMPurify from 'isomorphic-dompurify';
import styles from '../styles/job-id.module.css';
import CompanyCard from '../../components/CompanyCard';
import Head from 'next/head';




export default function Job() {
    const router = useRouter()
    const {id} = router.query
    let idNum;
    if(id){
        idNum = id.slice(0, id.indexOf('-'))
    }
    const { data, error } = useSWR(`/api/job-id/${idNum}`)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <>
            <Head>
                <title>{data.companyName}: {data.jobTitle}</title>
                <meta itemProp="description" content= {`${data.companyName} : ${data.jobTitle}`} />
            </Head>
            <Layout>
                <div className={styles.jobPageWrapper}>
                    <div className={styles.description} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize((data.description).replace(/h2>/g, "h1>"))}}></div>
                    <CompanyCard companyName={data.companyName} />
                </div>
            </Layout>
        </>
    )
}
