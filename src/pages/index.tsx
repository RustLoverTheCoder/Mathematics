import * as React from "react"
import { graphql, PageProps } from "gatsby"
import BaseLayout from "../layouts/BaseLayout"

type DataProps = {
  site: {
    buildTime: string
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  return (
    <BaseLayout>123</BaseLayout>
  )
}

export default IndexPage

export const query = graphql`
    {
        site {
            buildTime(formatString: "YYYY-MM-DD hh:mm a z")
        }
    }
`
