import { defineFeature, loadFeature } from 'jest-cucumber'
import sinon from 'sinon'
import { fetchNews } from '../../services/news.service'
import inputMock from '../mockdata/news-input-mock.json'
import expectedMock from '../mockdata/news-expected-mock.json'

const feature = loadFeature('src/tests/features/news.feature')

class NewsClass {
  constructor(id) {
    this.id = id
  }

  async search() {
    return fetchNews(this.id)
  }
}

defineFeature(feature, (test) => {
  let newsServiceStub
  let news
  let newsClass

  const testGroup = [
    {
      desc: 'Looking for news in associations',
      input: {
        id: inputMock.input1.id,
      },
      expected: {
        id: expectedMock.expected1.id,
        news_title: expectedMock.expected1.news_title,
        news_preview: expectedMock.expected1.news_preview,
        news_image: expectedMock.expected1.news_image,
      },
    },
  ]

  testGroup.forEach((testElement) => {
    test('Observar noticias de una asociacion', ({ given, when, then }) => {
      const { input, expected } = testElement
      newsServiceStub = sinon.stub(NewsClass.prototype, 'search')
      newsServiceStub.resolves(expected)

      given('un ingreso a una asociacion', () => {
        newsClass = new NewsClass(input.id)
      })

      when('el fanático ingrese a la pantalla', async () => {
        news = await newsClass.search()
      })

      then('mostrar las ultimas noticias de la asociacion', () => {
        expect(news.id).toBe(expected.id)
      })
    })
  })
})
