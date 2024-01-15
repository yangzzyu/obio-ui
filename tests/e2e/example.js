describe('My First Test', function () {
  before((browser) => {
    browser.init()
  })

  it('visits the app root url', function () {
    browser.assert.textContains('.green', 'OBiO')
  })

  after((browser) => browser.end())
})
