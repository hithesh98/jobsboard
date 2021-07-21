import React from 'react'
import Layout from '../../components/Layout'
import { useSWRInfinite } from 'swr'
import JobList from '../../components/JobList';
import styles from '../styles/jobPage.module.css'



const getKey = (pageIndex, previousPageData) => {
// reached the end
if (previousPageData && !previousPageData.data) return null
// first page, we don't have `previousPageData`
if (pageIndex === 0) return `/api/jobs`
// add the cursor to the API endpoint
return `/api/jobs/${previousPageData.after[0]["@ref"].id}`
}

export default function Jobs() {
    const {data, size, setSize} = useSWRInfinite(getKey);
    if (!data) return "Loading..."
    return (
        <Layout>
            <div>
                <h1>Remote Health Tech Jobs</h1>
                {data.map((pages)=>{
                    return pages.data.map((job)=>(
                        <JobList key={job.id} job={job} />))
                })}
                <button className={styles.loadMore} onClick={() => setSize(size + 1)}>Load More...</button>
            </div>
        </Layout>
    )
}

