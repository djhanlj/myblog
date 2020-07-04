import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"





const IndexPage = () => {

  const { allMarkdownRemark } = useStaticQuery(graphql`
  query PostList {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            background
            category
            date(formatString: "DD [de] MMM [de] YYYY", locale: "pt-br")
            description
            title
          }
          timeToRead
          wordCount {
            words
          }
        }
      }
    }
  }
  `);

  const postList = allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Home</h1>
      {postList.map(({ 
        node: { 
          frontmatter: { background, category, date, title, description },
          timeToRead,
        }, 
      }) => (
        <PostItem
          slug="/about/"
          background={background}
          category={category}
          date={date}
          timeToRead={timeToRead}
          title={title}
          description={description}
        />
      ))}

    </Layout >
  )

}

export default IndexPage
