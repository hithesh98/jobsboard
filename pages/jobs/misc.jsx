import React from 'react'
import Layout from '../../components/Layout'
import JobPage from '../../components/JobPage'

export default function misc() {
    return (
        <Layout>
            <h1>Misc Jobs</h1>
            <JobPage category={'misc'}/>
        </Layout>
        
    )
}
