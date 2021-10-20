import * as React from "react"
import Layout from '../components/layout'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import { graphql, Link } from "gatsby"

const Blog = ({data}) => {
    return (
        <Layout
            pageTitle="Blog"
            pageHeading="Blog"
        >
            <p>Tutaj mozesz zapoznac sie z moimi przemysleniami na bardzo rozne tematy</p>
            
            {data.allMdx.nodes.map(post => {
                return (
                    <article key={post.id}>
                        <h3>{post.frontmatter.title}</h3>
                        <span>published on: {post.frontmatter.date}</span>
                        <MDXRenderer>
                            {post.body}
                        </MDXRenderer>
                    </article>
                )
            })}
        
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