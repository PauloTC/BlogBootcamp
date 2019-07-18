import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql, Link } from 'gatsby';

import blogStyles from './blog.module.scss'



const BlogPage = () => {
    const data = useStaticQuery(graphql`
       query {
           allContentfulBlogPost {
               edges {
                   node {
                        title
                        slug
                        publishedDate
                   }
               }
           }
       }
    `)
     // query {
        //     allMarkdownRemark {
        //         edges {
        //             node {
        //                 frontmatter {
        //                     title
        //                     date
        //                 }
        //                 fields {
        //                     slug
        //                 }
        //             }
        //         }
        //     }
        // }
    return(
        <Layout>
            <h1>Blog</h1>
            <ol className={ blogStyles.posts } >
                    {data.allContentfulBlogPost.edges.map( (edge) => {
                        return (
                            <li  className={blogStyles.post} >
                                   <Link  to={`/blog/${edge.node.slug}`} >
                                        <h2>{ edge.node.title }</h2>
                                        <p>{ edge.node.publishedDate }</p>
                                        <span>{ edge.node.slug }</span>
                                   </Link> 
                            </li>
                        )
                    })}
            </ol>
        </Layout>
    )
}

export default BlogPage