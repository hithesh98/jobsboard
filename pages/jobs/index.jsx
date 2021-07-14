import React from 'react'
import Layout from '../components/Layout'
import useSWR from 'swr'
import JobList from '../components/jobList';

export default function jobs() {
    const { data: jobs, mutate } = useSWR('/api/getJobs'); 
    console.log(jobs)
    return (
        <Layout>
            <div>
                <h1>Jobs Page</h1>
                <JobList></JobList>
            </div>
        </Layout>
    )
}
