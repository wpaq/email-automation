const { MissingParamError } = require('../utils/errors')

class EmailService {
  async send(receiverName, receiverEmail) {
    if (!receiverName) {
      throw new MissingParamError('receiverName')
    }
    if (!receiverEmail) {
      throw new MissingParamError('receiverEmail')
    }
  }
}

describe('Email Service', () => {
  test('Should throw if no receiverName is provided', async () => {
    const sut = new EmailService()
    const promise = sut.send()
    expect(promise).rejects.toThrow(new MissingParamError('receiverName'))
  })

  test('Should throw if no receiverEmail is provided', async () => {
    const sut = new EmailService()
    const promise = sut.send('any_receiverName')
    expect(promise).rejects.toThrow(new MissingParamError('receiverEmail'))
  })
})
