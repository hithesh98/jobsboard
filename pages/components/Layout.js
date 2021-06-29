import React from 'react';
import Image from 'next/image';
import logo from '../../public/Logo.png';


export default function Layout({children}) {
    return (
        <div className="layout">
            <Image src={logo} alt="Jobsinhealthtech logo"/>
            <div className="logo-name">JobsinHealthTech.com</div>
            <div className="content">
                {children}
            </div>
        </div>
    )
}
