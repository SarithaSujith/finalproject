import express from 'express';
//import controllers

import {
	createRecipe,
	getAllRecipes,
	getSingleRecipe,
} from '../controllers/recipesController.js';

const router = express.Router();

//create route for CRUD operations at endpoint "recipies"
router.route('/').get(getAllRecipes).post(createRecipe);
router.route('/:id').get(getSingleRecipe);

//export routes
export default router;
