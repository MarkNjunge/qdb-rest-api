const qdb = require('qdb-api')
const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
	res.send('Unofficial Quote Database REST API')
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
	let sort = req.query.sort
	let count = req.query.count

	if (!query) {
		res.status(400).send({ error: 'Missing query parameter' })
	} else {
		if (!sort) {
			sort = 0
		}

		if (!count) {
			count = 10
		}

		qdb
			.search(query, sort, count)
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
