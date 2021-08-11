import React from 'react';
import style from '../pages/styles/jobList.module.css';
import teleworking from '../public/teleworking.png'
import Image from 'next/image'

export default function JobList({ job, remotePressed }) {
    if(job.remote){
        return (            
            <div className={style.jobListWrapper}>
                <ul className={style.jobDetails}>
                    <li> {job.companyName} </li>
                    <li className={style.role}> {job.jobTitle} </li>
                </ul>
                <p className={style.location}>{job.jobLocation}</p>
                <p className={style.remote}><Image src={teleworking} alt='remote icon'/></p>
                <a className={style.apply} href={job.applyUrl} target="_blank" rel="noreferrer"> Apply </a>
            </div>
        )
    }
    return (
        <div className={remotePressed ? style.hideRemote : null} >
            <div className={style.jobListWrapper}>
                <ul className={style.jobDetails}>
                    <li> {job.companyName} </li>
                    <li className={style.role}> {job.jobTitle} </li>
                </ul>
                <p className={style.location}>{job.jobLocation}</p>
                <p className={style.remote}></p> 
                <a className={style.apply} href={job.applyUrl} target="_blank" rel="noreferrer"> Apply </a>
            </div>
        </div>
    )
}
