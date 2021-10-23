import React from 'react';
import Layout from "../../components/layout";
import {MDXRenderer} from 'gatsby-plugin-mdx'
import { graphql } from "gatsby"

const BlogPost = ({data}) => {
    return (
        <Layout pageTitle='blog page title'>
            <MDXRenderer>
            {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}

export const query =  graphql`
    query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date
      }
      body
    }
  }
`

export default BlogPost
