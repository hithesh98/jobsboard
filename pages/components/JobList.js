import React from 'react';
import style from '../styles/jobList.module.css';
import Image from 'next/image';

export default function JobList() {
    return (
        <div className={style.jobListWrapper}>
            <div className={style.logoWrapper}>
                <p>Image</p>
            </div>
            <ul className={style.jobDetails}>
                <li> Company </li>
                <li> Position </li>
                <li> Job Type</li>
            </ul>
            <p className={style.location}>United Kingdom</p>
            <p className={style.remote}>- Remote</p>
            <button className={style.apply}> Apply </button>
        </div>
    )
}
