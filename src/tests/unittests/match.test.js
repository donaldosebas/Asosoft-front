import sinon from 'sinon'
import { fetchMatch } from '../../services/match.service'
import inputMock from '../mockdata/match-input-mock.json'
import expectedMock from '../mockdata/match-expected-mock.json'

class MatchTestClass {
  // eslint-disable-next-line class-methods-use-this
  async getMatch(id, type) {
    return fetchMatch(id, type)
  }
}

describe('Get match test', () => {
  let matchStub

  afterEach(sinon.restore)

  beforeEach(() => {
    matchStub = sinon.stub(MatchTestClass.prototype, 'getMatch')
  })

  const tests = [
    {
      desc: 'Get a past match',
      input: {
        type: inputMock.input1.type,
        id: inputMock.input1.id,
      },
      expected: {
        id: expectedMock.expected1.id,
        match_date: expectedMock.expected1.match_date,
        journey: expectedMock.expected1.journey,
        local_team: expectedMock.expected1.local_team,
        visiting_team: expectedMock.expected1.visiting_team,
        tournament: expectedMock.expected1.tournament,
        start_time: expectedMock.expected1.start_time,
        end_time: expectedMock.expected1.end_time,
        match_place: expectedMock.expected1.match_place,
        facebook_link: expectedMock.expected1.facebook_link,
        youtube_link: expectedMock.expected1.youtube_link,
        local_score: expectedMock.expected1.local_score,
        visiting_score: expectedMock.expected1.visiting_score,
        match_type: expectedMock.expected1.match_type,
        access_ticket: expectedMock.expected1.access_ticket,
        match_parking: expectedMock.expected1.match_parking,
      },
    },
    {
      desc: 'Get a upcoming match',
      input: {
        type: inputMock.input2.type,
        id: inputMock.input2.id,
      },
      expected: {
        id: expectedMock.expected1.id,
        match_date: expectedMock.expected1.match_date,
        journey: expectedMock.expected1.journey,
        local_team: expectedMock.expected1.local_team,
        visiting_team: expectedMock.expected1.visiting_team,
        tournament: expectedMock.expected1.tournament,
        start_time: expectedMock.expected1.start_time,
        end_time: expectedMock.expected1.end_time,
        match_place: expectedMock.expected1.match_place,
        facebook_link: expectedMock.expected1.facebook_link,
        youtube_link: expectedMock.expected1.youtube_link,
        local_score: expectedMock.expected1.local_score,
        visiting_score: expectedMock.expected1.visiting_score,
        match_type: expectedMock.expected1.match_type,
        access_ticket: expectedMock.expected1.access_ticket,
        match_parking: expectedMock.expected1.match_parking,
      },
    },
  ]

  tests.forEach((test) => {
    it(test.desc, async () => {
      const { input, expected } = test
      matchStub.withArgs(input.id, input.type).resolves(expected)

      const matchTestClass = new MatchTestClass()
      const match = await matchTestClass.getMatch(input.id, input.type)

      expect(match).toEqual(expected)
    })
  })
})
