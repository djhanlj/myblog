import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'
import Img from "gatsby-image"

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "eu.jpeg" }){
                    childImageSharp {
                        fixed(width:240, height: 240){
                            ...GatsbyImageSharpFixed_withWebp_tracedSVG
                        }
                    }
                }
            }
        `
    )
    return <Img fixed={ avatarImage.childImageSharp.fixed } />
}

export default Avatar;