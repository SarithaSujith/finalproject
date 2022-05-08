import mongoose from 'mongoose';
const { Schema } = mongoose;

const recipesSchema = new Schema({
	title: String,
	body: String,
	description: String,
});

//using the model method to declare model
//const Article=mongoose.model("Article", ArticleSchema)
const Recipe = mongoose.model('Recipe', recipesSchema);
// export default model('Recipe', recipesSchema);
export default Recipe;
