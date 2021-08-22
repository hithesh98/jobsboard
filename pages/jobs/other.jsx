import React from 'react'
import Layout from '../../components/Layout'
import JobPage from '../../components/JobPage'

export default function other() {
    return (
        <Layout>
            <h1>Other Jobs</h1>
            <JobPage category={'other'}/>
        </Layout>
        
    )
}
