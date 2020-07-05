import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './styled'

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "eu.jpeg" }){
                    childImageSharp {
                        fluid(maxWidth:60){
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        `
    )
    return <S.AvatarHelper fluid={avatarImage.childImageSharp.fluid} />
}

export default Avatar;