import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/Logo.png'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>HealthTech Jobs</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet"/>
        <meta name="description" content="Find health tech jobs at innovative startup companies."/>
      </Head>
      <main>
        <section className="logo-wrapper">
          <Image src={logo} alt="Jobsinhealthtech logo"/>
          <div className="logo-name">JobsinHealthTech.com</div>
        </section>
        <section className="hero-wrapper">
          <article className="copy-wrapper"> 
            <h1 className="header">The worlds leading community for healthcare and lifesciences startup jobs</h1>
            <h3 className="subtitle">Find a job doing important work. Sign-up below to get notifications for jobs at the most innovative companies in the healthcare and life sciences industry.</h3>
          </article> 
          <article className="wireframe-browser">
            <div className="browser">
              <svg id="wireframe" width="100%" height="auto" viewBox="0 0 813 576" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Graphic">
                <g id="browser">
                <g id="Browser">
                <g id="web browser">
                <g id="Browser outline">
                <g id="Background" filter="url(#filter0_bdi)">
                <path d="M55 97H758V521H55V97Z" fill="url(#paint0_linear)"/>
                <path d="M55.5 97.5H757.5V520.5H55.5V97.5Z" stroke="url(#paint1_linear)"/>
                </g>
                </g>
                <g id="skeleton" opacity="0.6">
                <rect id="Rectangle 5" x="83.5657" y="125.994" width="650" height="111" rx="24.5" fill="#F4F4F4" stroke="white"/>
                <g id="Group 5">
                <g id="Group 3">
                <rect id="Rectangle 5_2" x="83.5002" y="251.974" width="128.765" height="132.605" rx="24.5" fill="#F4F4F4" stroke="white"/>
                <rect id="Rectangle 6" x="83.5002" y="432.214" width="94.4993" height="12.8647" rx="6.43233" fill="#F4F4F4" stroke="white"/>
                <rect id="Rectangle 7" x="83.5002" y="454.272" width="63.0892" height="12.8647" rx="6.43233" fill="#F4F4F4" stroke="white"/>
                <rect id="Rectangle 8" x="83.5002" y="401.334" width="63.0892" height="17.2761" rx="8.63807" fill="#F4F4F4" stroke="white"/>
                </g>
                </g>
                </g>
                </g>
                <g id="Top Bar">
                <g id="Top bar">
                <g id="Rectangle 2" filter="url(#filter1_bdi)">
                <path d="M55.04 85C55.04 68.4315 68.4715 55 85.04 55H728C744.569 55 758 68.4315 758 85V97H55.04V85Z" fill="url(#paint2_linear)"/>
                <path d="M55.54 85C55.54 68.7076 68.7476 55.5 85.04 55.5H728C744.293 55.5 757.5 68.7076 757.5 85V96.5H55.54V85Z" stroke="white" strokeOpacity="0.6"/>
                </g>
                <g id="Group 13">
                <g id="Rectangle 3" filter="url(#filter2_di)">
                <path d="M163.665 76.1694C163.665 70.7817 168.032 66.4141 173.42 66.4141H709.505C714.892 66.4141 719.26 70.7817 719.26 76.1694C719.26 81.5572 714.892 85.9248 709.505 85.9248H173.42C168.032 85.9248 163.665 81.5572 163.665 76.1694Z" fill="url(#paint3_linear)"/>
                <path d="M164.165 76.1694C164.165 71.0578 168.309 66.9141 173.42 66.9141H709.505C714.616 66.9141 718.76 71.0578 718.76 76.1694C718.76 81.281 714.616 85.4248 709.505 85.4248H173.42C168.309 85.4248 164.165 81.281 164.165 76.1694Z" stroke="white" strokeOpacity="0.6"/>
                </g>
                </g>
                </g>
                <g id="Top left-btns">
                <g id="Group 9">
                <ellipse id="Ellipse 5" cx="76.4652" cy="75.9999" rx="2.98324" ry="3.08" fill="#47B8E9"/>
                <ellipse id="Ellipse 6" cx="84.6014" cy="75.9999" rx="2.98324" ry="3.08" fill="#48BA7F"/>
                <ellipse id="Ellipse 7" cx="92.7374" cy="75.9999" rx="2.98324" ry="3.08" fill="#8162AA"/>
                </g>
                </g>
                </g>
                </g>
                </g>
                <g id="list1">
                <g id="Component 1">
                <rect id="Rectangle 5_3" x="242" y="249.494" width="399.688" height="60.4729" rx="25" fill="#F4F4F4" fillOpacity="0.6"/>
                <rect id="Rectangle 9" x="257.119" y="260.832" width="39.6854" height="39.6854" rx="19.8427" fill="#F4F4F4"/>
                <rect id="Rectangle 6_2" x="311.922" y="290.124" width="152.127" height="6.61423" rx="3.30711" fill="#F4F4F4"/>
                <g id="Rectangle 7_2">
                <path d="M311.922 276.266C311.922 274.526 313.333 273.116 315.073 273.116H365.986C367.726 273.116 369.137 274.526 369.137 276.266V276.266C369.137 278.006 367.726 279.417 365.986 279.417H315.073C313.333 279.417 311.922 278.006 311.922 276.266V276.266Z" fill="#F4F4F4"/>
                <path d="M520.319 279.417C520.319 277.677 521.73 276.266 523.47 276.266H548.927H574.384C576.124 276.266 577.534 277.677 577.534 279.417V279.417C577.534 281.157 576.124 282.568 574.384 282.568H523.47C521.73 282.568 520.319 281.157 520.319 279.417V279.417Z" fill="#F4F4F4"/>
                </g>
                <rect id="Rectangle 8_2" x="311.922" y="257.053" width="92.5992" height="8.50401" rx="4.252" fill="#F4F4F4"/>
                </g>
                </g>
                <g id="list2">
                <g id="list2_2">
                <rect id="Rectangle 5_4" x="242" y="340.494" width="399.688" height="60.4729" rx="25" fill="#F4F4F4" fillOpacity="0.6"/>
                <rect id="Rectangle 9_2" x="257.119" y="351.832" width="39.6854" height="39.6854" rx="19.8427" fill="#F4F4F4"/>
                <rect id="Rectangle 6_3" x="311.922" y="381.124" width="152.127" height="6.61423" rx="3.30711" fill="#F4F4F4"/>
                <g id="Rectangle 7_3">
                <path d="M311.922 367.266C311.922 365.526 313.333 364.116 315.073 364.116H365.986C367.726 364.116 369.137 365.526 369.137 367.266V367.266C369.137 369.006 367.726 370.417 365.986 370.417H315.073C313.333 370.417 311.922 369.006 311.922 367.266V367.266Z" fill="#F4F4F4"/>
                <path d="M520.319 370.417C520.319 368.677 521.73 367.266 523.47 367.266H548.927H574.384C576.124 367.266 577.534 368.677 577.534 370.417V370.417C577.534 372.157 576.124 373.568 574.384 373.568H523.47C521.73 373.568 520.319 372.157 520.319 370.417V370.417Z" fill="#F4F4F4"/>
                </g>
                <rect id="Rectangle 8_3" x="311.922" y="348.053" width="92.5992" height="8.50401" rx="4.252" fill="#F4F4F4"/>
                </g>
                </g>
                <g id="list3">
                <g id="Component 3">
                <rect id="Rectangle 5_5" x="242" y="431.494" width="399.688" height="60.4729" rx="25" fill="#F4F4F4" fillOpacity="0.6"/>
                <rect id="Rectangle 9_3" x="257.119" y="442.832" width="39.6854" height="39.6854" rx="19.8427" fill="#F4F4F4"/>
                <rect id="Rectangle 6_4" x="311.922" y="472.124" width="152.127" height="6.61423" rx="3.30711" fill="#F4F4F4"/>
                <g id="Rectangle 7_4">
                <path d="M311.922 458.267C311.922 456.526 313.333 455.116 315.073 455.116H365.986C367.726 455.116 369.137 456.526 369.137 458.267V458.267C369.137 460.007 367.726 461.417 365.986 461.417H315.073C313.333 461.417 311.922 460.007 311.922 458.267V458.267Z" fill="#F4F4F4"/>
                <path d="M520.319 461.417C520.319 459.677 521.73 458.267 523.47 458.267H548.927H574.384C576.124 458.267 577.534 459.677 577.534 461.417V461.417C577.534 463.157 576.124 464.568 574.384 464.568H523.47C521.73 464.568 520.319 463.157 520.319 461.417V461.417Z" fill="#F4F4F4"/>
                </g>
                <rect id="Rectangle 8_4" x="311.922" y="439.053" width="92.5992" height="8.50401" rx="4.252" fill="#F4F4F4"/>
                </g>
                </g>
                </g>
                <defs>
                <filter id="filter0_bdi" x="0" y="42" width="813" height="534" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImage" stdDeviation="25"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="27.5"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.16526 0 0 0 0 0.176819 0 0 0 0 0.2375 0 0 0 0.08 0"/>
                <feBlend mode="normal" in2="effect1_backgroundBlur" result="effect2_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="45"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
                <feBlend mode="normal" in2="shape" result="effect3_innerShadow"/>
                </filter>
                <filter id="filter1_bdi" x="-402.96" y="-403" width="1618.96" height="958" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImage" stdDeviation="229"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="27.5"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.16526 0 0 0 0 0.176819 0 0 0 0 0.2375 0 0 0 0.08 0"/>
                <feBlend mode="normal" in2="effect1_backgroundBlur" result="effect2_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="45"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
                <feBlend mode="normal" in2="shape" result="effect3_innerShadow"/>
                </filter>
                <filter id="filter2_di" x="108.665" y="11.4141" width="665.595" height="129.511" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="27.5"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.16526 0 0 0 0 0.176819 0 0 0 0 0.2375 0 0 0 0.08 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="45"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                </filter>
                <linearGradient id="paint0_linear" x1="751" y1="516.022" x2="108.816" y2="51.024" gradientUnits="userSpaceOnUse">
                <stop stopColor="#EFEFEF" stopOpacity="0.1"/>
                <stop offset="1" stopColor="#474747" stopOpacity="0.6"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="64.9608" y1="108.356" x2="717.994" y2="568.685" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.6"/>
                <stop offset="1" stopColor="white" stopOpacity="0.1"/>
                </linearGradient>
                <linearGradient id="paint2_linear" x1="751" y1="96.5069" x2="733.016" y2="-34.9456" gradientUnits="userSpaceOnUse">
                <stop stopColor="#EFEFEF" stopOpacity="0.1"/>
                <stop offset="1" stopColor="#474747" stopOpacity="0.6"/>
                </linearGradient>
                <linearGradient id="paint3_linear" x1="713.727" y1="85.6957" x2="708.757" y2="23.8873" gradientUnits="userSpaceOnUse">
                <stop stopColor="#EFEFEF" stopOpacity="0.1"/>
                <stop offset="1" stopColor="#474747" stopOpacity="0.6"/>
                </linearGradient>
                </defs>
            </svg>
            </div>
          </article> 
        </section>
        <section className="email-wrapper">
          <div id="mc_embed_signup">
            <form action="https://jobsinhealthtech.us6.list-manage.com/subscribe/post?u=30087181452091fa46daaef74&amp;id=13a887731e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                  <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Email Address" required/>
                  <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
                </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
