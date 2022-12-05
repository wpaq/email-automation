class EmailService {
  async send(email) {
    if (!email) {
      throw new Error()
    }
  }
}

describe('Email Service', () => {
  test('Should throw if no email is provided', async () => {
    const sut = new EmailService()
    const promise = sut.send()
    expect(promise).rejects.toThrow()
  })
})
