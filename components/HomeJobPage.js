import React from 'react'
import { useSWRInfinite } from 'swr'
import JobList from './JobList';
import styles from '../pages/styles/homeJobPage.module.css'
import Link from 'next/link';



export default function HomeJobPage({category}) {
    const getKey = (pageIndex, previousPageData) => {
        // reached the end
        if (previousPageData && !previousPageData.data) return null
        // first page, we don't have `previousPageData`
        if (pageIndex === 0) return `/api/home/${category}`
        // add the cursor to the API endpoint
        return `/api/home/${category}/${previousPageData.after[0]["@ref"].id}`
    }
    const { data, size, setSize } = useSWRInfinite(getKey);
    const capCategory = category[0].toUpperCase() + category.slice(1);
    
    if (!data) return "Loading..."
    if(category === 'customersupportops'){
        return (
            <div>
                {data.map((pages) => {
                    return pages.data.map((job) => (
                        <JobList key={job.applyUrl} job={job} />))
                })}
                <Link href={`/jobs/${category}`}>
                    <a className={styles.loadMore} >{`View all Customer Success/Ops jobs`}</a>
                </Link>
            </div>
        )
    }
    if(category === 'legalhrfin'){
        return (
            <div>
                {data.map((pages) => {
                    return pages.data.map((job) => (
                        <JobList key={job.applyUrl} job={job} />))
                })}
                <Link href={`/jobs/${category}`}>
                    <a className={styles.loadMore} >{`View all Legal/HR/Finance jobs`}</a>
                </Link>
            </div>
        )
    }
    return (
        <div>
            {data.map((pages) => {
                return pages.data.map((job) => (
                    <JobList key={job.applyUrl} job={job} />))
            })}
            <Link href={`/jobs/${category}`}>
                <a className={styles.loadMore} >{`View all ${capCategory} jobs`}</a>
            </Link>
        </div>
    )
}

