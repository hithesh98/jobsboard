import React from 'react';
import Image from 'next/image';
import logo from '../../public/Logo.png';
import Link from 'next/link'

export default function Layout({children}) {
    return (
        <div className="layout">
            <Link href="/">
                <a>
                    <div className="logoWrapper">
                        <Image src={logo} alt="Jobsinhealthtech logo"/>
                        <div className="logoName">JobsinHealthTech.com</div>
                    </div>
                </a>            
            </Link>
            <Link href="jobs">
                <a>
                    <div>
                        Remote Jobs
                    </div>
                </a>
            </Link>
            <div className="content">
                {children}
            </div>
        </div>
    )
}
