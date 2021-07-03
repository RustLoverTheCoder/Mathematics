import * as React from 'react'
import { graphql, useStaticQuery } from "gatsby"


const BaseLayout = (props) =>{
  const data = useStaticQuery(graphql`
      query MyQuery {
          site {
              id
              siteMetadata {
                  author
                  description
                  siteUrl
                  title
              }
          }
      }

  `)
  const {children} = props
  return (
    <div>
      <div>{data.site.siteMetadata?.title || `Title`}</div>
      {children}
    </div>
  )
}
export default BaseLayout
