import React from 'react'
import { ShowcaseWrapper, ShowcaseContainer } from './Styles/Showcase.js'

const Showcase = () => {
  return (
    <ShowcaseWrapper>
		<ShowcaseContainer>
			<h2>Escutar muda tudo.</h2>
			<p>
				Seus artistas preferidos a qualquer hora e lugar
			</p>
			<button class="btn-primary">baixe o Spotify free</button>
		</ShowcaseContainer>
	</ShowcaseWrapper>
  )
}

export default Showcase