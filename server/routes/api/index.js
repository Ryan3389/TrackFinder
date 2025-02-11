const router = require('express').Router()
const musicRoutes = require('./musicRoutes')

router.use('/music', musicRoutes)

module.exports = router
// const router = require('express').Router()
// const musicRoutes = require("./musicRoutes")

// router.use('/music', musicRoutes)

// module.exports = router