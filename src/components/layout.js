import * as React from 'react'
import {
    Link, 
    useStaticQuery, 
    graphql
} from "gatsby"
import {Dino} from "./hero"
import {
    container, 
    navLinks, 
    navLinkItem, 
    navLinkText,
    siteTitle
} from './layout.module.css'

const Layout = ({pageTitle, pageHeading, children}) => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            site(siteMetadata: {}) {
                siteMetadata {
                    title
                }
            }
        }
    `)
    console.log('data', data);
    return (
        <div className={container}>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog" className={navLinkText}>Blog</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>About</Link>
                    </li>
                </ul>
            </nav>
            <Dino/>
            <main>
                <title>{pageTitle} | {data.site.siteMetadata.title}</title>
                <h1 className={siteTitle}>{pageHeading}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout