const qdb = require('qdb-api')
const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
	res.send('Unofficial qdb.us REST API')
})

router.get('/random', (req, res) => {
	qdb
		.random()
		.then(quote => {
			res.send(quote)
		})
		.catch(reason => {
			res.status(500).send({ error: reason })
		})
})

router.get('/latest', (req, res) => {
	qdb
		.latest()
		.then(quote => {
			res.send(quote)
		})
		.catch(reason => {
			res.status(500).send({ error: reason })
		})
})

router.get('/search', (req, res) => {
	const query = req.query.query
	let order = req.query.order || 'score'
	let sort = req.query.sort || 'desc'
	let count = req.query.count || 10
	let approved = req.query.approved || 1

	if (!query) {
		res.status(400).send({ error: 'Missing query parameter' })
	} else {
		qdb
			.search(query, order, sort, count, approved)
			.then(quotes => {
				res.send(quotes)
			})
			.catch(reason => {
				res.status(500).send({ error: reason })
			})
	}
})

router.get('/:id', (req, res) => {
	const id = req.params['id']

	if (!id) {
		res.status(400).send({ error: 'Missing quote id' })
	} else {
		qdb
			.get(id)
			.then(quote => {
				res.send(quote)
			})
			.catch(reason => {
				res.status(500).send({ error: reason })
			})
	}
})

module.exports = router
