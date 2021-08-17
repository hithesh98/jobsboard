import React from 'react';
import Image from 'next/image';
import logo from '../public/Logo.png';
import Link from 'next/link'

export default function Layout({children}) {
    return (
        <div className="layout">
            <nav className="navbar">                
                <Link href="/">
                    <a>
                        <div className="logoWrapper">
                            <Image src={logo} alt="Jobsinhealthtech logo"/>
                            <div className="logoName">JobsinHealthTech.com</div>
                        </div>
                    </a>            
                </Link>
                <a className="postAJob" href="https://zhpyopst2jr.typeform.com/to/Kbk7VlPw" target="_blank">
                    Post a Job
                </a>
            </nav>
            <div className="content">
                {children}
            </div>
        </div>
    )
}
