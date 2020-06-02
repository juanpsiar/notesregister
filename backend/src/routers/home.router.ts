import * as express from 'express'

const router = express.Router()

router.get('/', (req: any, res:any) => {

	res.json({msg:'Connection to notes DB'})

})
export default router