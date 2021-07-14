import React from 'react';
import style from '../pages/styles/jobList.module.css';

export default function JobList({ job }) {
    return (
        <div className={style.jobListWrapper}>
            <ul className={style.jobDetails}>
                <li> {job.companyName} </li>
                <li className={style.role}> {job.jobTitle} </li>
                <li> {job.jobType}</li>
            </ul>
            <p className={style.location}>{job.jobLocation}</p>
            <p className={style.remote}>- Remote</p>
            <a className={style.apply} href={job.link} target="_blank" rel="noreferrer"> Apply </a>
        </div>
    )
}
