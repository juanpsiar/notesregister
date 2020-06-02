import * as express from 'express'
import Students from '../controllers/student.controller';

const router = express.Router()

router.get('/', (req: any, res:any) => {

	//res.json({msg:'hello data'})
	return Students.getStudents()
		.then(response => res.json(response)).catch(err => console.log(res, err))

})
export default router