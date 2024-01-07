import { useParams } from "react-router-dom";
import Header from "../nav/Navbar";
import { useEffect, useState } from "react";
import './Page.scss'
export default function RecipePage() {
	let { id } = useParams();

	const [recipe, setRecipe] = useState([]);

	useEffect(() => {
		async function fetchAPI() {
			let response = await fetch(
				"https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
			);
			response = await response.json();
			setRecipe(response.meals[0]);
		}

		fetchAPI();
	}, [id]);



	function getInstructions() {
		const instructions = [];

		for (let i = 1; i < 21; i++) {
			if (recipe[`strIngredient${i}`] === "") {
				return instructions;
			}

			instructions.push(
				<li key={i}>
					{recipe[`strMeasure${i}`]} {recipe[`strIngredient${i}`]}
				</li>
			);
		}

		return instructions;
	}

	return (
		<>
			<Header />
			<div className="container">
				<div className="row mb-3">
					<div className="col-12 col-lg-6 position-relative">
						<img src={recipe.strMealThumb} className="img-fluid" alt="receptas" />
					</div>
					<div className="col-12 col-lg-6">
						<h1 className="name">Name of recipe:</h1>
						<h2 className="mb-4">{recipe.strMeal}</h2>
						<h5 className="text">Ingredients:</h5>
						<ul>{getInstructions()}</ul>
						<div>
							<strong className="text">Origin:</strong> {recipe.strArea} <br /> 
							<strong className="text">Category:</strong> {recipe.strCategory}
						</div>
						<h5 className="text">Instructions:</h5>
				<p>
					{recipe.strInstructions}{" "}
					<em>
						[Source: {recipe.strSource ? <a href={recipe.strSource}>{recipe.strSource}</a> : 'not available'}]
					</em>
				</p>
					</div>
				</div>
			</div>
		</>
	);

}