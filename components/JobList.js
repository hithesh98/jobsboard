import React from 'react';
import style from '../pages/styles/jobList.module.css';
import Image from 'next/image'

export default function JobList({ job, remotePressed }) {
    const currentTime = new Date().getDate()

    const jobTime = new Date(job.timeAdded['@ts'])
    const age = currentTime - jobTime.getDate()
    let displayAge;
    if (age < 1){
        displayAge = 'Today'
    } else if (age == 1 ) {
        displayAge = '1 day ago'
    } else {
        displayAge = `${age} days ago`
    }
    if(job.remote){
        return (            
            <div className={job.featured ? style.jobListWrapper + ' ' + style.featured : style.jobListWrapper}>
                <ul className={style.jobDetails}>
                    <li> {job.companyName} </li>
                    <li className={style.role}> {job.jobTitle} </li>
                    <li className={job.featured ? style.featuredTitle : style.notFeatured}> Featured </li>
                </ul>
                <p>{displayAge}</p>
                <p className={style.location}>{job.jobLocation}</p>
            </div>
        )
    }
    return (
        <div className={remotePressed ? style.hideRemote : null} >
            <div className={job.featured ? style.jobListWrapper + ' ' + style.featured : style.jobListWrapper} >
                <ul className={style.jobDetails}>
                    <li> {job.companyName} </li>
                    <li className={style.role}> {job.jobTitle} </li>
                    <li className={job.featured ? style.featuredTitle : style.notFeatured}> Featured </li>
                </ul>
                <p>{displayAge}</p>
                <p className={style.location}>{job.jobLocation}</p>
            </div>
        </div>
    )
}
