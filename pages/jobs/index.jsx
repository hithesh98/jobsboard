import React from 'react'
import Layout from '../components/Layout'
import useSWR from 'swr'
import JobList from '../components/JobList';

export default function Jobs() {
    const { data: jobs, mutate } = useSWR('/api/getJobs'); 
    return (
        <Layout>
            <div>
                <h1>Remote Health Tech Jobs</h1>
                {jobs && jobs.map((job)=>(
                    <JobList key={job.id} job={job} />
                ))}
            </div>
        </Layout>
    )
}
