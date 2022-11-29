const HttpResponse = require('../helpers/http-response')
const EmailRouter = require('./email-router')
const MissingParamError = require('../helpers/missing-param-error')

describe('Email Router', () => {
  test('Should return 400 if no email is provided', () => {
    const sut = new EmailRouter()
    const httpRequest = {
      body: {
        name: 'any_name'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 if no name is provided', () => {
    const sut = new EmailRouter()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('Should return 500 if no httpRequest is provided', () => {
    const sut = new EmailRouter()
    const httpResponse = sut.route()
    expect(httpResponse.statusCode).toBe(500)
  })

  test('Should return 500 if httpRequest has no body', () => {
    const sut = new EmailRouter()
    const httpResponse = sut.route({})
    expect(httpResponse.statusCode).toBe(500)
  })
})