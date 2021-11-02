import request from 'supertest'
import app from '../config/express'

describe('Test route USERS', () => {
    it('Hello World! Two', async () => {

        const res = await request(app).get('/users/hello-world')
        expect(res.statusCode).toBe(200)

    })
})