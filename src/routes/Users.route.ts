import { Router } from 'express'
import UsersController from '../controller/Users.controller';
const router = Router()

const users = new UsersController()

router.get('/hello-world', users.helloWorld)

export default router;