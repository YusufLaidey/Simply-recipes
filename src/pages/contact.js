import React from 'react'

import RecipesList from '../components/RecipesList'

import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const Contact = ({data}) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
   <main className='page'>
    <section className='contact-page'>
    <article className='contact-info'>
      <h3>Want To Get In Touch?</h3>
      <p>
      Four dollar toast biodiesel plaid salvia actually pickled banjo
      bespoke mlkshk intelligentsia edison bulb synth.
      </p>
      <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
      <p>
      Hashtag swag health goth air plant, raclette listicle fingerstache
      cold-pressed fanny pack bicycle rights cardigan poke.
      </p>
      </article>
      <article>
        <form className='form contact-form' action="https://formspree.io/f/xvoyqqba"
             method="POST">
          <div className='form-row'>
            <label htmlFor='name'>Your Name</label>
            <input type='text' name='name' id='name' placeholder='Enter your Name'/>
          </div>
          <div className='form-row'>
            <label htmlFor='email'>Your Email</label>
            <input type='text' name='email' id='email' placeholder='Enter your Email Address'/>
          </div>
          <div className='form-row'>
            <label htmlFor='message'>Message</label>
            <textarea name='message' id='message' placeholder='Leave us a Message'></textarea>
          </div>
          <button type='submit' className='btn block'>Submit</button>
        </form>
      </article>
    </section>
    <section className='featured-recipes'>
      <h5>Look at this Awesomesause!</h5>
      <RecipesList recipes={recipes} />
    </section>
   </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Contact
