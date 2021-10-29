import sinon from 'sinon'
import { createUser } from '../../services/signup.service'
import inputMock from '../mockdata/signup-input-mock.json'
import expectedMock from '../mockdata/signup-expected-mock.json'

class SignupClass {
  // eslint-disable-next-line class-methods-use-this
  async signup(user, name, emailr, pass) {
    return createUser(user, name, emailr, pass)
  }
}

describe('Signup Test', () => {
  let signupStub

  afterEach(sinon.restore)

  beforeEach(() => {
    signupStub = sinon.stub(SignupClass.prototype, 'signup')
  })

  const tests = [
    {
      desc: 'Sign up an already created user',
      input: {
        username: inputMock.input1.username,
        name: inputMock.input1.name,
        email: inputMock.input1.email,
        password: inputMock.input1.password,
      },
      expected: {
        token: expectedMock.expected1.token,
      },
    },
    {
      desc: 'Sign up a new user',
      input: {
        username: inputMock.input2.username,
        name: inputMock.input2.name,
        email: inputMock.input2.email,
        password: inputMock.input2.password,
      },
      expected: {
        token: expectedMock.expected2.token,
      },
    },
  ]

  tests.forEach((test) => {
    it(test.desc, async () => {
      const { input, expected } = test
      signupStub.withArgs(input.username, input.name, input.email, input.password)
        .resolves(expected.token)

      const signupClass = new SignupClass()

      const signup = await signupClass.signup(input.username,
        input.name, input.email, input.password)
      expect(signup).toBe(expected.token)
    })
  })
})
