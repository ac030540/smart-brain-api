const signinHandler = (req, res, db,bcrypt) => {
	const {email, password} = req.body;
	db.select('*').from('login').where({
		email : email
	})
	.then( loginDetails => {
		const isValid = bcrypt.compareSync(password, loginDetails[0].hash)
		if(isValid) {
			db.select('*').from('users').where({
				email : loginDetails[0].email
			})
			.then( user => res.json(user[0]))
			.catch(err => res.status(400).json("Unable to get the user"))
		}
		else {
			res.status(400).json("Invalid Credentials");
		}
	})
	.catch(err => res.status(400).json("Invalid Credentials"))
}

module.exports = {
	signinHandler : signinHandler
}