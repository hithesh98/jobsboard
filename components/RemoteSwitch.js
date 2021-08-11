import React from 'react'
import styles from '../pages/styles/remoteSwitch.module.css'

export default function RemoteSwitch({remoteOnly, onToggle}) {
    return (
        <div className={styles.wrapper}>
            <p>All Jobs</p>
            <label className={styles.switch}>
                <input type='checkbox' checked={remoteOnly} onChange={onToggle}/>
                <span className={styles.slider}/>
            </label>
            <p>Remote</p>
        </div>
    )
}
