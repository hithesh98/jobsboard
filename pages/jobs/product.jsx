import React from 'react'
import Layout from '../../components/Layout'
import JobPage from '../../components/JobPage'

export default function product() {
    return (
        <Layout>
            <h1>Product Jobs</h1>
            <JobPage category={'product'}/>
        </Layout>
        
    )
}
