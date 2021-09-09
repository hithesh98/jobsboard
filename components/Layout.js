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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 18 18"
                                >
                                <g
                                    fill="none"
                                    fillRule="evenodd"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.67"
                                    transform="translate(1 1)"
                                >
                                    <circle cx="7.11" cy="7.11" r="7.11" />
                                    <path d="M16 16l-3.87-3.87" />
                                </g>
                                </svg>
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
