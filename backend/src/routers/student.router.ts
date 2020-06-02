import * as express from 'express'
import Students from '../controllers/student.controller';

const router = express.Router()

router.get('/', (req: any, res:any) => {
	
	return Students.getStudents()
		.then(response => res.json(response)).catch(err => console.log(res, err));
})

router.put('/id/:id', async (req: any, res: any) => {
	return Students.updateNoteById(req.params.id, req.body)
		.then(response => res.json(response)).catch(err => console.log(res, err));
})

export default router