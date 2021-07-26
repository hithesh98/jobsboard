import React from 'react'
import { PopupButton } from '@typeform/embed-react'
import styles from '../pages/styles/subscribe.module.css'

export default function Subscribe() {
    
    const handleSubmit = () => {
        window.open('https://jobsinhealthtech.com/thankyou', '_blank')
    }

    return (
            <PopupButton id='TF3JyQFK' className={styles.button} onSubmit={handleSubmit} size={60}> Subscribe </PopupButton>
    )
}
