const HttpResponse = require('../helpers/http-response')
const EmailRouter = require('./email-router')
const MissingParamError = require('../helpers/missing-param-error')

const makeSut = () => {
  class EmailUseCaseSpy {
    send(email, name) {
      this.email = email
      this.name = name
    }
  }
  const emailUseCaseSpy = new EmailUseCaseSpy()
  const sut = new EmailRouter(emailUseCaseSpy)
  return {
    sut,
    emailUseCaseSpy
  }
}

describe('Email Router', () => {
  test('Should return 400 if no email is provided', () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 if no name is provided', () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('Should return 500 if no httpRequest is provided', () => {
    const { sut } = makeSut()
    const httpResponse = sut.route()
    expect(httpResponse.statusCode).toBe(500)
  })

  test('Should return 500 if httpRequest has no body', () => {
    const { sut } = makeSut()
    const httpResponse = sut.route({})
    expect(httpResponse.statusCode).toBe(500)
  })

  test('Should call EmailUseCase with correct params', () => {
    const { sut, emailUseCaseSpy } = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        name: 'any_name'
      }
    }
    sut.route(httpRequest)
    expect(emailUseCaseSpy.email).toBe(httpRequest.body.email)
    expect(emailUseCaseSpy.name).toBe(httpRequest.body.name)
  })
})