import * as React from "react"
import Layout from '../components/layout'
import { useStaticQuery, graphql } from "gatsby"

const Blog = () => {
    const data = useStaticQuery(graphql`
        query {
            allFile {
                nodes {
                    name
                }
            }
        }

    `)
    return (
        <Layout
            pageTitle="Blog"
            pageHeading="Blog"
        >
            <p>Tutaj mozesz zapoznac sie z moimi przemysleniami na bardzo rozne tematy</p>
            {data.allFile.nodes.map(post => {
                return <h3>{post.name}</h3>
            })}
        </Layout>
    )
}

export default Blog