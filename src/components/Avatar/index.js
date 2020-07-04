import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'
import Img from "gatsby-image"

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "eu.jpeg" }){
                    childImageSharp {
                        fluid(maxWidth:60, maxHeight:50){
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
            }
        `
    )
    return <Img fluid={ avatarImage.childImageSharp.fluid } style={{width:"250px"}} />
}

export default Avatar;