const request = require('supertest');
const auth = require('./auth-router')
const server = require('../api/server.js')
const db = require('../database/dbConfig');
const userDb = require('../jokes/user-model')

beforeEach(async () => {
    await db('users').truncate();
  });

describe('auth-router', ()=>{
    describe('GET /', () => {
        it('returns 404', () =>{
            return request(server)
            .get('/api/register')
            .then(res =>{
                expect(res.status).toBe(404);
            })
        })
        it('returns JSON', done =>{
            request(server)
            .get('/api/register')
            .then(res =>{
                expect(res.type).toMatch(/text/i);
                done()
            })
        })
  
        it('returns 404', () =>{
            return request(server)
            .get('/api/login')
            .then(res =>{
                expect(res.status).toBe(404);
            })
        })
        it('returns JSON', done =>{
            request(server)
            .get('/api/login')
            .then(res =>{
                expect(res.type).toMatch(/text/i);
                done()
            })
        })
    })
    
})