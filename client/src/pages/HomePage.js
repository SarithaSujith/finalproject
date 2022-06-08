import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;
const api = '/recipes';

function HomePage() {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		axios.get(`${url}${api}`).then((response) => setRecipes(response.data));
	}, []);

	return (
		<main className='uk-flex-auto uk-section'>
			<article className='uk-container uk-container-small'>
				<ul className='uk-child-width-1-2@m uk-grid-match' data-uk-grid>
					{recipes.map((recipe) => (
						<li key={recipe._id}>
							<Link
								to={`/recipe/${recipe._id}`}
								className='uk-link-reset uk-card uk-card-default uk-card-hover uk-card-body'
							>
								<div>
									<figure>
										<img src={recipe.cover} alt='' />
									</figure>
									<h3>{recipe.title}</h3>
								</div>
								<div>
									<p>{recipe.description.substring(0, 250)} ...</p>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</article>
		</main>
	);
}

export default HomePage;
