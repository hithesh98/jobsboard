import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout'
import JobPage from '../../components/JobPage'

export default function Commercial() {
    
    const router = useRouter()
    const { category } = router.query
    let capCategory;
    if(category){
        capCategory = category[0].toUpperCase()  + category.slice(1) + " Jobs"
    }

    return (
        <>
            <Head>
                <title> {capCategory}</title>
            </Head>
            <Layout>
                <h1>{capCategory}</h1>
                <JobPage category={category}/>
            </Layout>
        </>   
    )
}
