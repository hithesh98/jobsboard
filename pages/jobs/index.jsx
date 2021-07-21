import React, {useState, useEffect} from 'react'
import Layout from '../../components/Layout'
import useSWR, { useSWRInfinite } from 'swr'
import JobList from '../../components/JobList';



const getKey = (pageIndex, previousPageData) => {
// reached the end
if (previousPageData && !previousPageData.data) return null

// first page, we don't have `previousPageData`
if (pageIndex === 0) return `/api/getJobs`
// add the cursor to the API endpoint
return `/api/${previousPageData.after[0]["@ref"].id}`
}

export default function Jobs() {
    const {data, size, setSize} = useSWRInfinite(getKey);
    if (!data) return "Loading..."
    console.log(data)
    return (
        <Layout>
            <div>
                <h1>Remote Health Tech Jobs</h1>
                {data.map((pages)=>{
                    return pages.data.map((job)=>(
                        <JobList key={job.id} job={job} />))
                })}
                
                <button onClick={() => setSize(size + 1)}>Load More...</button>
            </div>
        </Layout>
    )
}

