import Head from 'next/head'
import React from 'react'
import Layout from '../../components/Layout'
import JobPage from '../../components/JobPage'

export default function customersupportops() {
    return (
        <>
            <Head>
                <title>Customer Success / Operation Jobs</title>
            </Head>
            <Layout>
                <h1>Customer Success / Operation Jobs</h1>
                <JobPage category={'customersupportops'}/>
            </Layout>
        </>
    )
}
