import React from 'react'
import { useSWRInfinite } from 'swr'
import JobList from './JobList';
import styles from '../pages/styles/jobPage.module.css'




export default function JobPage({category}) {
    const getKey = (pageIndex, previousPageData) => {
        // reached the end
        if (previousPageData && !previousPageData.data) return null
        // first page, we don't have `previousPageData`
        if (pageIndex === 0) return `/api/${category}`
        // add the cursor to the API endpoint
        return `/api/${category}/${previousPageData.after[0]["@ref"].id}`
    }
    const { data, size, setSize } = useSWRInfinite(getKey);

    if (!data) return "Loading..."
    console.log(data)
    return (
        <div>
            {data.map((pages) => {
                return pages.data.map((job) => (
                    <JobList key={job.applyUrl} job={job} />))
            })}
            <button className={styles.loadMore} onClick={() => setSize(size + 1)}>Load More...</button>
        </div>
    )
}

