import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const url = process.env.REACT_APP_API_URL;

function SingleView() {
	const { id } = useParams();
	const api = `/recipes/${id}`;
	const [recipe, setRecipe] = useState({});

	useEffect(() => {
		axios.get(`${url}${api}`).then((response) => setRecipe(response.data));
	}, []);

	return (
		<main className='uk-flex-auto uk-section'>
			<article className='uk-container uk-container-xsmall uk-background-default uk-box-shadow-small'>
				<header>
					<h1 className='uk-article-title'> {recipe.title}</h1>
					<figure>
						<img src={recipe.cover} alt='' />
					</figure>
				</header>
				<div>
					<ReactMarkdown>{recipe.body}</ReactMarkdown>
				</div>
			</article>
		</main>
	);
}

export default SingleView;
