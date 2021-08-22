import sinon from 'sinon'
import { authUser } from '../../services/login.service'
import inputMock from '../mockdata/logging-input-mock.json'
import expectedMock from '../mockdata/logging-expected-mock.json'

class LoggingClass {
  // eslint-disable-next-line class-methods-use-this
  async login(user, pass) {
    return authUser(user, pass)
  }
}

describe('Logging Test', () => {
  let loggingStub

  afterEach(sinon.restore)

  beforeEach(() => {
    loggingStub = sinon.stub(LoggingClass.prototype, 'login')
  })

  const tests = [
    {
      desc: 'Logging with valid credentials',
      input: {
        username: inputMock.input1.username,
        password: inputMock.input1.password,
      },
      expected: {
        token: expectedMock.expected1.token,
      },
    },
    {
      desc: 'Logging with invalid credentials',
      input: {
        username: inputMock.input2.username,
        password: inputMock.input2.password,
      },
      expected: {
        token: undefined,
      },
    },
  ]

  tests.forEach((test) => {
    it(test.desc, async () => {
      const { input, expected } = test
      loggingStub.withArgs(input.username, input.password).resolves(expected.token)

      const loggingClass = new LoggingClass()

      const login = await loggingClass.login(input.username, input.password)

      expect(login).toBe(expected.token)
    })
  })
})
