import Head from 'next/head'
import React from 'react'
import Layout from '../../components/Layout'
import JobPage from '../../components/JobPage'

export default function legalhrfin() {
    return (
        <>
            <Head>
                <title>Legal/HR/Finance Jobs</title>
            </Head>  
            <Layout>
                <h1>Legal/HR/Finance Jobs</h1>
                <JobPage category={'legalhrfin'}/>
            </Layout>
        </>
    )
}
