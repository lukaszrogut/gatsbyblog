import * as React from "react"
import {Link} from "gatsby"
import IndexPage from "."

const AboutPage = () => {
    return(
        <main>
            <title>About Page</title>
            <Link to="/">go back</Link>
            <h1>About me</h1>
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
        </main>
    )
}

export default AboutPage

