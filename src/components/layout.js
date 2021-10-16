import * as React from 'react'
import {Link} from "gatsby"
import {Dino} from "./hero"
import {
    container, 
    heading, 
    navLinks, 
    navLinkItem, 
    navLinkText
} from './layout.module.css'

const Layout = ({pageTitle, pageHeading, children}) => {
    return (
        <div className={container}>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>About</Link>
                    </li>
                </ul>
            </nav>
            <Dino/>
            <main>
                <title>{pageTitle}</title>
                <h1 className={heading}>{pageHeading}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout