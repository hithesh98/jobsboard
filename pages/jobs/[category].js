import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout'
import JobPage from '../../components/JobPage'
import { useEffect } from 'react'
import { castArray } from 'lodash'

export default function Category() {
    const router = useRouter()
    const { category } = router.query
    const categoryList = ["clinical", "commercial", "data", "engineering", "marketing", "other", "product"]

    // checkes if url is valid for categories
    useEffect(() => {
        if(category && !categoryList.includes(category)){
            router.push("/404")
        }
    }, [category])

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
