var should = require('chai').should()
  , request = require('supertest')
  , app = require('../app')


describe("get '/'", function() {
  it('should exist', function(done) {
    request(app)
      .get('/')
      .expect(200, done)
  })
})

describe("get '/users/:id'", function() {
  it('should exist', function(done) {
    request(app)
      .get('/users/1')
      .expect(200, done)
  })
})

describe("get '/parties/:id'", function() {
  it('should exist', function(done) {
    request(app)
      .get('/parties/1')
      .expect(200, done)
  })
})