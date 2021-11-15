import { defineFeature, loadFeature } from 'jest-cucumber'
import sinon from 'sinon'
import { getUsers } from '../../services/signup.service'
import inputMock from '../mockdata/logging-expected-mock.json'

const feature = loadFeature('src/tests/features/security.feature')

class TokenClass {
  constructor(token) {
    this.token = token
  }

  async get() {
    return getUsers(this.token)
  }
}
defineFeature(feature, (test) => {
  let tokenServiceStub
  let call
  let tokenClass
  const testGroup = [
    {
      desc: 'Calling api with token',
      input: {
        tokenInput: inputMock.expected1.token,
      },
      expected: {
        response: 'Invalid Token',
      },
    },
  ]

  testGroup.forEach((testElement) => {
    test('Rechazo de token', ({ given, when, then }) => {
      const { input, expected } = testElement
      tokenServiceStub = sinon.stub(TokenClass.prototype, 'get')
      tokenServiceStub.resolves(expected.response)
      given('el usuario realiza llamadas al servidor desde una herramienta externa', () => {
        tokenClass = new TokenClass(input.tokenInput)
      })

      when('la llamada se realiza usando cualquier tipo de token de acceso', async () => {
        call = await tokenClass.get()
      })

      then('el servidor debe rechazar la solicitud', () => {
        expect(call).toBe(expected.response)
      })
    })
  })
})
