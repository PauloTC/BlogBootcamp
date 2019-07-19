import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

import  Head  from '../components/head'

const IndexPage = () => {

    return(
        <Layout>
            <Head  title="Home" />
            <h1>Hello</h1>
            <h3> Soy Paulo y vivo en Peru  </h3>
            <p>Need a Developer ? <Link  to="/contact" > Contact Me </Link> </p>
        </Layout>

    )
}

export default IndexPage