const router = require('express').Router()

const { searchByGenre } = require('../../controllers/musicControllers.js')

router.route('/genre').get(searchByGenre)


module.exports = router
// const router = require('express').Router()
// const { searchByGenre } = require('../../controllers/musicControllers')

// router.route('/genre').get(searchByGenre)
// module.exports = router