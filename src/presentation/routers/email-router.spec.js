class EmailRouter {
  route(httpRequest) {
    const { email, name } = httpRequest.body
    if (!email || !name) {
      return {
        statusCode: 400
      }
    }
  }
}

describe('Email Router', () => {
  test('Should return 400 if no email is provided', () => {
    const sut = new EmailRouter()
    const httpRequest = {
      body: {
        name: 'any_name'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  test('Should return 400 if no name is provided', () => {
    const sut = new EmailRouter()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})