import React, {useState} from 'react';
import Image from 'next/image';
import logo from '../public/Logo.png';
import Link from 'next/link'

export default function Layout({children}) {
    const [mobileMenuActive, setMobileMenu] = useState(false)
    const onMenuClick = () =>{
        setMobileMenu(!mobileMenuActive)
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
                <button className={mobileMenuActive ? 'hamburger active' : 'hamburger'} onClick={onMenuClick}>
                    {mobileMenuActive ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.781 6.21897C17.8508 6.28864 17.9062 6.3714 17.944 6.46252C17.9818 6.55363 18.0013 6.65132 18.0013 6.74997C18.0013 6.84862 17.9818 6.9463 17.944 7.03742C17.9062 7.12854 17.8508 7.2113 17.781 7.28097L7.28097 17.781C7.14014 17.9218 6.94913 18.0009 6.74997 18.0009C6.55081 18.0009 6.3598 17.9218 6.21897 17.781C6.07814 17.6401 5.99902 17.4491 5.99902 17.25C5.99902 17.0508 6.07814 16.8598 6.21897 16.719L16.719 6.21897C16.7886 6.14912 16.8714 6.09371 16.9625 6.0559C17.0536 6.01809 17.1513 5.99863 17.25 5.99863C17.3486 5.99863 17.4463 6.01809 17.5374 6.0559C17.6285 6.09371 17.7113 6.14912 17.781 6.21897Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.21912 6.21897C6.14928 6.28864 6.09386 6.3714 6.05605 6.46252C6.01824 6.55363 5.99878 6.65132 5.99878 6.74997C5.99878 6.84862 6.01824 6.9463 6.05605 7.03742C6.09386 7.12854 6.14928 7.2113 6.21912 7.28097L16.7191 17.781C16.8599 17.9218 17.051 18.0009 17.2501 18.0009C17.4493 18.0009 17.6403 17.9218 17.7811 17.781C17.9219 17.6401 18.0011 17.4491 18.0011 17.25C18.0011 17.0508 17.9219 16.8598 17.7811 16.719L7.28112 6.21897C7.21145 6.14912 7.12869 6.09371 7.03757 6.0559C6.94645 6.01809 6.84877 5.99863 6.75012 5.99863C6.65147 5.99863 6.55379 6.01809 6.46267 6.0559C6.37155 6.09371 6.28879 6.14912 6.21912 6.21897Z" fill="black"/>
                    </svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.75 17.25C3.75 17.0511 3.82902 16.8603 3.96967 16.7197C4.11032 16.579 4.30109 16.5 4.5 16.5H19.5C19.6989 16.5 19.8897 16.579 20.0303 16.7197C20.171 16.8603 20.25 17.0511 20.25 17.25C20.25 17.4489 20.171 17.6397 20.0303 17.7803C19.8897 17.921 19.6989 18 19.5 18H4.5C4.30109 18 4.11032 17.921 3.96967 17.7803C3.82902 17.6397 3.75 17.4489 3.75 17.25ZM3.75 11.25C3.75 11.0511 3.82902 10.8603 3.96967 10.7197C4.11032 10.579 4.30109 10.5 4.5 10.5H19.5C19.6989 10.5 19.8897 10.579 20.0303 10.7197C20.171 10.8603 20.25 11.0511 20.25 11.25C20.25 11.4489 20.171 11.6397 20.0303 11.7803C19.8897 11.921 19.6989 12 19.5 12H4.5C4.30109 12 4.11032 11.921 3.96967 11.7803C3.82902 11.6397 3.75 11.4489 3.75 11.25ZM3.75 5.25C3.75 5.05109 3.82902 4.86032 3.96967 4.71967C4.11032 4.57902 4.30109 4.5 4.5 4.5H19.5C19.6989 4.5 19.8897 4.57902 20.0303 4.71967C20.171 4.86032 20.25 5.05109 20.25 5.25C20.25 5.44891 20.171 5.63968 20.0303 5.78033C19.8897 5.92098 19.6989 6 19.5 6H4.5C4.30109 6 4.11032 5.92098 3.96967 5.78033C3.82902 5.63968 3.75 5.44891 3.75 5.25Z" fill="black"/>
                    </svg>
                    }
                </button>

                <div className={mobileMenuActive ? 'mobileMenu active' : 'mobileMenu'} >  
                    <Link href="/resources/blog/page/1">
                        <a className="search">
                            Blog
                        </a>
                    </Link>                  
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
