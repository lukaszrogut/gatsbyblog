import * as React from "react"
import Layout from '../components/layout'
import { graphql, Link } from "gatsby"

const Blog = ({data}) => {
    return (
        <Layout
            pageTitle="Blog"
            pageHeading="Blog"
        >
            <p>Tutaj mozesz zapoznac sie z moimi przemysleniami na bardzo rozne tematy</p>
            <ul>
                {data.allFile.nodes.map(post => {
                    return (
                        <li key={post.name}><Link to={post.name}>{post.name}</Link></li>
                    )
                })}
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`

export default Blog