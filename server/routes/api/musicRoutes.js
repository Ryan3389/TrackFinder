const router = require('express').Router()

const { searchByGenre, searchMusic } = require('../../controllers/musicControllers.js')

router.route('/genre').get(searchByGenre)
router.route('/search').post(searchMusic)


module.exports = router
