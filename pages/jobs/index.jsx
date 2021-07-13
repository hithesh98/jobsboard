import React from 'react'
import Layout from '../components/Layout'
import useSWR from 'swr'

export default function jobs() {
    const { data: jobs, mutate } = useSWR('/api/getJobs'); 
    console.log(jobs)
    return (
        <Layout>
            <div>
                <h1>Jobs Page</h1>
                {jobs && jobs.map((job) => (
                    <div>
                        <h2>{job.location}</h2>
                        <h4>{job.link}</h4>
                    </div>
                ))}
            </div>
        </Layout>
    )
}
