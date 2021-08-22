import React from 'react'
import Layout from '../../components/Layout'
import JobPage from '../../components/JobPage'

export default function engineering() {
    return (
        <Layout>
            <h1>Engineering Jobs</h1>
            <JobPage category={'engineering'}/>
        </Layout>
        
    )
}
