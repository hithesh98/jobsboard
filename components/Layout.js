import React, {useState} from 'react';
import Image from 'next/image';
import logo from '../public/Logo.png';
import Link from 'next/link'

export default function Layout({children}) {
    const [mobile, setMobile] = useState(false)
    const onMenuClick = () =>{
        setMobile(!mobile)
    }
    
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
                <button className='hamburger' onClick={onMenuClick}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.75 17.25C3.75 17.0511 3.82902 16.8603 3.96967 16.7197C4.11032 16.579 4.30109 16.5 4.5 16.5H19.5C19.6989 16.5 19.8897 16.579 20.0303 16.7197C20.171 16.8603 20.25 17.0511 20.25 17.25C20.25 17.4489 20.171 17.6397 20.0303 17.7803C19.8897 17.921 19.6989 18 19.5 18H4.5C4.30109 18 4.11032 17.921 3.96967 17.7803C3.82902 17.6397 3.75 17.4489 3.75 17.25ZM3.75 11.25C3.75 11.0511 3.82902 10.8603 3.96967 10.7197C4.11032 10.579 4.30109 10.5 4.5 10.5H19.5C19.6989 10.5 19.8897 10.579 20.0303 10.7197C20.171 10.8603 20.25 11.0511 20.25 11.25C20.25 11.4489 20.171 11.6397 20.0303 11.7803C19.8897 11.921 19.6989 12 19.5 12H4.5C4.30109 12 4.11032 11.921 3.96967 11.7803C3.82902 11.6397 3.75 11.4489 3.75 11.25ZM3.75 5.25C3.75 5.05109 3.82902 4.86032 3.96967 4.71967C4.11032 4.57902 4.30109 4.5 4.5 4.5H19.5C19.6989 4.5 19.8897 4.57902 20.0303 4.71967C20.171 4.86032 20.25 5.05109 20.25 5.25C20.25 5.44891 20.171 5.63968 20.0303 5.78033C19.8897 5.92098 19.6989 6 19.5 6H4.5C4.30109 6 4.11032 5.92098 3.96967 5.78033C3.82902 5.63968 3.75 5.44891 3.75 5.25Z" fill="black"/>
                    </svg>
                </button>

                <div className={mobile ? 'mobileMenu' : 'navMenu'} >                    
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
