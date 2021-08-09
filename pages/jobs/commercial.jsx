import React from 'react'
import Layout from '../../components/Layout'
import JobPage from '../../components/JobPage'

export default function commercial() {
    return (
        <Layout>
            <h1>Commercial Jobs</h1>
            <JobPage category={'commercial'}/>
        </Layout>
        
    )
}
