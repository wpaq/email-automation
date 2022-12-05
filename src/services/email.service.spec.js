const { MissingParamError } = require('../utils/errors')

class EmailService {
  async send(email) {
    if (!email) {
      throw new MissingParamError('email')
    }
  }
}

describe('Email Service', () => {
  test('Should throw if no email is provided', async () => {
    const sut = new EmailService()
    const promise = sut.send()
    expect(promise).rejects.toThrow(new MissingParamError('email'))
  })
})
