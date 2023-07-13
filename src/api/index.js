import { Router } from 'express'
import signup from './signup/index.js'

const router = new Router();
const mainRouter = new Router()


router.use('/signup', signup);

mainRouter.use('/api/v1', router)

export default mainRouter;

