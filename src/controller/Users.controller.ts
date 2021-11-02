import { Request, Response } from 'express'

export default class UsersController {
    public helloWorld(req: Request, res: Response) {

        res.status(200).json({ message: 'Hello World!' })

    }
}