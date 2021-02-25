// write tests here
describe('Quotes app', () => {
    // Each test needs clean state
    // Test cant rely on previous tests
    // Every test needs to work in isolation
    // before each test navigate to http://localhost:1234
    beforeEach(() => {
        cy.visit('http://localhost:1234')
    })

    it('sanity check to make sure our tests work', () => {
        expect(1 + 1).to.equal(2)
        expect(1 + 1).not.to.equal(3)
        expect(7).to.equal(7)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    it('the proper elements are on showing', () => {
        cy.get('input[name=pizza]')
    })
})
