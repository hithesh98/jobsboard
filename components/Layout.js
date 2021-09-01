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
                <div >                    
                    <Link href="/search">              
                        <a className="search">
                            Search
                        </a>
                    </Link>

                    <Link href="/post">              
                        <a className="postAJob">
                            Post a Job
                        </a>
                    </Link>
                </div>
            </nav>
            <div className="content">
                {children}
            </div>
            <footer className='footer'>
                <nav className="navbarFooter">
                    <div className='nameFooter'>
                        <h3>JobsinHealthTech.com </h3>
                        <p>Dublin, Ireland</p>
                        <p>Contact us at alerts@jobsinhealthtech.com</p>
                    </div>    
                    <Link href="/post">              
                        <a className="postAJobFooter">
                            Post a Job
                        </a>
                    </Link>
                </nav>
            </footer>
        </div>
    )
}
