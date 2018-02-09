const express = require('express')

const PORT = process.argv[2] || 3000

const app = express()

app.use('/', require('./routes'))

app.listen(PORT, error => {
	if (error) {
		console.log(error.message)
	} else {
		console.log(`API running on port ${PORT}`)
	}
})
