import React from 'react'
import { useSWRInfinite } from 'swr'
import JobList from './JobList';
import styles from '../pages/styles/jobPage.module.css'
import { useState } from 'react'
import RemoteSwitch from './RemoteSwitch';





export default function JobPage({category}) {
    const [remoteOnly, setRemote] = useState(false)
    const getKey = (pageIndex, previousPageData) => {
        // reached the end
        if (previousPageData && !previousPageData.data) return null
        // first page, we don't have `previousPageData`
        if (pageIndex === 0) return `/api/${category}`
        // add the cursor to the API endpoint
        return `/api/${category}/${previousPageData.after[1]["@ref"].id}/${previousPageData.after[0]}`
    }
    const { data, size, setSize } = useSWRInfinite(getKey);
    if (!data) return "Loading..."

    // checks the length of data array to know if its empy
    const isEmpty = data?.[0]?.data.length === 0;
    let pageSize;
    // gets the number of jobs per page
    if(!isEmpty){
        pageSize = data?.[0]?.data.length  
    }
    const reachedEnd = isEmpty || data?.[data.length-1]?.data.length < pageSize
   
    return (
        <div>
            <RemoteSwitch remoteOnly={remoteOnly} onToggle={()=> setRemote(!remoteOnly)} /> 
            {data.map((pages) => {                
                return pages.data.map((job) => (
                    <JobList key={job.applyUrl} job={job} remotePressed={remoteOnly}/>
                    ))
            })}
            {reachedEnd
                ? <p>No More Jobs</p>
                : <button className={styles.loadMore} onClick={() => setSize(size + 1)}>Load More...</button>
            }
            
        </div>
    )
}

