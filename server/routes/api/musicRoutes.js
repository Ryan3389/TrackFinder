const router = require('express').Router()
const { searchByGenre } = require('../../controllers/musicControllers')

router.route('/type').get(searchByGenre)
module.exports = router