import sinon from 'sinon'
import inputMock from '../mockdata/event-input-mock.json'
import expectedMock from '../mockdata/event-expected-mock.json'
import { fetchEventInfoAndTeams } from '../../services/event.service'

class EventTestClass {
  // eslint-disable-next-line class-methods-use-this
  async getEvent(id) {
    return fetchEventInfoAndTeams(id)
  }
}

describe('Get Event test', () => {
  let eventStub

  afterEach(sinon.restore)

  beforeEach(() => {
    eventStub = sinon.stub(EventTestClass.prototype, 'getEvent')
  })

  const tests = [
    {
      desc: 'Get event info',
      input: {
        id: inputMock.input1.id,
      },
      expected: {
        id: expectedMock.expected1.id,
        tournament_name: expectedMock.expected1.tournament_name,
        tournament_category: expectedMock.expected1.tournament_category,
        tournament_country: expectedMock.expected1.tournament_country,
        tournament_winner: expectedMock.expected1.tournament_winner,
        current_date: expectedMock.expected1.current_date,
        total_dates: expectedMock.expected1.total_dates,
        start_date: expectedMock.expected1.start_date,
        end_date: expectedMock.expected1.end_date,
        teams: expectedMock.expected1.teams,
        association: expectedMock.expected1.association,
      },
    },
  ]

  tests.forEach((test) => {
    it(test.desc, async () => {
      const { input, expected } = test
      eventStub.withArgs(input.id).resolves(expected)

      const eventTestClass = new EventTestClass()
      const event = await eventTestClass.getEvent(input.id)

      expect(event).toEqual(expected)
    })
  })
})
