import * as React from "react"
import Layout from '../../components/layout'
import { graphql } from "gatsby"

const Blog = ({data}) => {
    return (
        <Layout
            pageTitle="Blog"
            pageHeading="Blog"
        >
            <p>Tutaj mozesz zapoznac sie z moimi przemysleniami na bardzo rozne tematy</p>
            <ul>
            {data.allMdx.nodes.map(post => {
                return (
                    <li key={post.id}>
                        <a href={`blog/${post.slug}`}>{post.frontmatter.title}</a>
                    </li>
                )
            })}
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx {
            nodes {
            body
            slug
            id
            frontmatter {
                date
                title
            }
            }
        }
    }

`

export default Blog