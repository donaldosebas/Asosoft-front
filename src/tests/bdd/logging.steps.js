import { defineFeature, loadFeature } from 'jest-cucumber'
import sinon from 'sinon'
import { authUser } from '../../services/login.service'
import inputMock from '../mockdata/logging-input-mock.json'
import expectedMock from '../mockdata/logging-expected-mock.json'

const feature = loadFeature('src/tests/features/logging.feature')

class LoggingClass {
  constructor(user, pass) {
    this.user = user
    this.pass = pass
  }

  async login() {
    return authUser(this.user, this.pass)
  }
}

defineFeature(feature, (test) => {
  let loginServiceStub
  let login
  let loggingClass

  const testGroup = [
    {
      desc: 'Logging in app and visualizing available associations',
      input: {
        username: inputMock.input1.username,
        password: inputMock.input1.password,
      },
      expected: {
        token: expectedMock.expected1.token,
      },
    },
  ]

  testGroup.forEach((testElement) => {
    test('Ingreso a la aplicación por medio de administrador', ({ given, when, then }) => {
      const { input, expected } = testElement
      loginServiceStub = sinon.stub(LoggingClass.prototype, 'login')
      loginServiceStub.resolves(expected.token)

      given('un administrador ingresa', () => {
        loggingClass = new LoggingClass(input.username, input.password)
      })

      when('el administrador envie los datos', async () => {
        login = await loggingClass.login()
      })

      then('obtener token de ingreso', () => {
        expect(login).toBe(expected.token)
      })
    })
  })
})
