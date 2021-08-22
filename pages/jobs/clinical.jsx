import React from 'react'
import Layout from '../../components/Layout'
import JobPage from '../../components/JobPage'

export default function clinical() {
    return (
        <Layout>
            <h1>Clinical Jobs</h1>
            <JobPage category={'clinical'}/>
        </Layout>
        
    )
}
