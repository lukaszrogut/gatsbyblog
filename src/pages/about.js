import * as React from "react"
import Layout from '../components/layout'

const AboutPage = () => {
    return(
        <Layout 
            pageTitle="about page" 
            pageHeading="About Me"
        >
            <p>Hi, my name is Lukasz Rogut</p>
            <p>Currently I'm into:</p>
            <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>Books</li>
                <li>Sim Racing</li>
                <li>Meditation</li>
                <li>Cycling</li>
            </ul>
        </Layout>
    )
}

export default AboutPage

