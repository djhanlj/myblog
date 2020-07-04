import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"





const IndexPage = () => {

  const { allMarkdownRemark } = useStaticQuery(graphql`
  query PostList {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {      edges {
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
          fields {
            slug
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
          fields: { slug }
        }, 
      }) => (
        <PostItem
          slug={ slug }
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
