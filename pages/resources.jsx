import React from 'react';
import Layout from '../components/Layout'
import Head from 'next/head' 
import styles from './styles/resources.module.css'

export default function resources() {
  return <>
    <Head>
        <title>Resources: JobsinHealthTech</title>
    </Head>
    <Layout>
        <div className={styles.resourcesWrap}>
            <h1>Resources to check out</h1>
            <h2>Newsletters/blogs📩</h2>
            <ul>
                <li><a href="https://www.outofpocket.health/">Out-of-pocket</a></li>
                <li><a href="https://www.healthtechnerds.com/">Health Tech Nerds</a></li>
                <li><a href="https://thehealthymuse.com/">The Healthy Muse</a></li>
                <li><a href="https://workweek.com/brand/healthcare-huddle/">Healthcare huddle</a></li>
                <li><a href="https://www.whatthehealth.io/">What the health</a></li>
                <li><a href="https://rockhealth.com/rock-weekly/">Rock Health</a></li>
                <li><a href="https://exitsandoutcomes.com/">Exits and outcomes</a></li>
                <li><a href="https://healthcarepizza.substack.com/p/firstpost?showWelcome=true">Healthcare Pizza</a></li>
                <li><a href="https://www.healthtechstack.io/">Health Tech Stack</a></li>
            </ul>

            <h2>Podcasts🎧</h2>
            <ul>
                <li><a href="https://podcasts.apple.com/gb/podcast/the-healthtech-podcast/id1438968893">The HealthTech podcast</a></li>
                <li><a href="https://podcasts.apple.com/us/podcast/from-lab-to-launch-by-qualio/id1541780308">Qualio - From Lab to Launch- podcast</a></li>
                <li><a href="https://podcasts.apple.com/us/podcast/health-tech-spotlight/id1511708525">Health tech spotlight</a></li>
                <li><a href="https://podcasts.apple.com/us/podcast/the-healthxl-digital-health-podcast/id1462296830">HealthXL podcast</a></li>
                <li><a href="https://podcasts.apple.com/us/podcast/startup-health-now-podcast/id924016917">Startup Health NOW podcast</a></li>
                </ul>

            <h2>Communities🎎</h2>
            <ul>
                <li><a href="https://www.healthxl.com/">HealthXL</a></li>
                <li><a href="https://www.healthtechnerds.com/slack">Health Tech Nerds Slack</a></li>
                <li><a href="https://bitsinbio.substack.com/p/introducing-bits-in-bio">Bits in Bio slack group</a></li>
                <li><a href="https://beondeck.com/health">On deck healthcare</a></li>
            </ul>
                
            <h2>News📰</h2>
            <ul>
                <li><a href="https://www.mobihealthnews.com/">MobiHealth news</a></li>
                <li><a href="https://htn.co.uk/">Health Tech News</a></li>
                <li><a href="https://www.fiercehealthcare.com/">Fierce Healthcare</a></li>
                <li><a href="https://www.healthtechdigital.com/">Health tech digital</a></li>
            </ul>
                    
            <h2>Accelerators/Incubators/Early-stage Funding💡</h2>
            <ul>
                <li><a href="https://csaccelerator.com/">Cedar Sinai Techstars</a></li>
                <li><a href="https://www.launchpdh.com/">Launchpad Digital Health</a></li>
                <li><a href="https://beondeck.com/x">On deck</a></li><li><a href="https://www.ycombinator.com/">Y combinator</a></li>
                <li><a href="https://indiebio.co/">Indie bio</a></li>
                <li><a href="https://www.joinef.com/">Entrepreneur First</a></li>
            </ul>
                
        </div>
    </Layout>
  </>;
}
