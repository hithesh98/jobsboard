import React from 'react'
import Layout from '../../components/Layout'
import JobPage from '../../components/JobPage'

export default function marketing() {
    return (
        <Layout>
            <h1>Marketing Jobs</h1>
            <JobPage category={'marketing'}/>
        </Layout>
        
    )
}
