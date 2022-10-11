import React from 'react'
import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import SEO from '../components/SEO'

import styled from 'styled-components'

const query = graphql`
  query {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
       name
       childImageSharp {
        gatsbyImageData(
          layout: FIXED
          placeholder: BLURRED
          width: 200
          height: 200
        )
       }
      }
    }
  }
`

const Gallery = () => {
    const data = useStaticQuery(query);
    const nodes = data.allFile.nodes
  return (
    <Layout>
    <SEO title='Gallery page' />
    <Wrapper>
      {nodes.map((image, index) => {
        const {name} = image
        const pathToImage = getImage(image)
        return <article key = {index} className='item' >
        <GatsbyImage image = {pathToImage} alt={name} className='gallery-img' />
          <p>{name}</p>
        </article>
      } )}
    </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
display: flex;
flex-wrap: wrap;
.item {
  margin-right: 1rem;
}
.gallery-img {
  border-radius: 1rem;
}
`

export default Gallery
