import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata{
                    author
                }
            }
        }
    `)
    return (
        <footer  className={footerStyles.footer} >
            <span> Created by { data.site.siteMetadata.author }, 2019</span >
        </footer>
    )
}

export default Footer