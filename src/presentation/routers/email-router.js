const HttpResponse = require('../helpers/http-response')

module.exports = class EmailRouter {
  constructor(emailUseCaseSpy) {
    this.emailUseCaseSpy = emailUseCaseSpy
  }

  route(httpRequest) {
    if (!httpRequest || !httpRequest.body) {
      return HttpResponse.serverError()
    }

    const { email, name } = httpRequest.body
    if (!email) {
      return HttpResponse.badRequest('email')
    }
    if (!name) {
      return HttpResponse.badRequest('name')
    }

    this.emailUseCaseSpy.send(email, name)
  }
}