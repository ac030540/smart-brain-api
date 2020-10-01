const clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: process.env.API_KEY
});


const apiHandler = (req, res) => {
	app.models.predict("e466caa0619f444ab97497640cefc4dc", req.body.imageUrl)
	.then (response => res.json(response))
	.catch(err => res.status(400).json("Unable to make an api call"))
}

module.exports = {
	apiHandler : apiHandler
}
