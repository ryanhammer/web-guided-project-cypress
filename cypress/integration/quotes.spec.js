// write tests here
describe('Quotes app', () => {
    // Each test needs clean state
    // Test cant rely on previous tests
    // Every test needs to work in isolation
    // before each test navigate to http://localhost:1234
    beforeEach(() => {
        cy.visit('http://localhost:1234')
    })

    // Helps to centeralize our CSS selectors and clean up the tests a bit and keep the DRY
    const textInput = () => cy.get('input[name=text]')

    it('sanity check to make sure our tests work', () => {
        expect(1 + 1).to.equal(2)
        expect(1 + 1).not.to.equal(3)
        expect(7).to.equal(7)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    it('the proper elements are on showing', () => {
        textInput().should('exist')
        cy.get('input[name=author]').should('exist')
        cy.get('input[name=pizza]').should('not.exist')
        cy.get("button[id=submitBtn]").should("exist");
        cy.get('#cancelBtn').should("exist");
    })
})
