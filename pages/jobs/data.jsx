import React from 'react'
import Layout from '../../components/Layout'
import JobPage from '../../components/JobPage'

export default function data() {
    return (
        <Layout>
            <h1>Data Jobs</h1>
            <JobPage category={'data'}/>
        </Layout>
        
    )
}
