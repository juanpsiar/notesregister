import * as express from 'express'
import Home from './home.router'
import Student from './student.router'


const router = express.Router()

router.use('/', Home)
router.use('/student', Student)

export default router