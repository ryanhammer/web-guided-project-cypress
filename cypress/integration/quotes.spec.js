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
    const authorInput = () => cy.get('input[name=author]')
    const pizzaInput = () => cy.get('input[name=pizza]')
    const submitButton = () => cy.get("button[id=submitBtn]")
    const cancelButton = () => cy.get('#cancelBtn')

    it('sanity check to make sure our tests work', () => {
        expect(1 + 1).to.equal(2)
        expect(1 + 1).not.to.equal(3)
        expect(7).to.equal(7)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    it('the proper elements are on showing', () => {
        textInput().should('exist')
        authorInput().should('exist')
        pizzaInput().should('not.exist')
        submitButton().should("exist");
        cancelButton().should("exist");
    })

    describe('Filling out the inputs', () => {
        it('submit button is disabled', () => {
            submitButton().should('be.disabled')
        })

        it('can type in inputs and submit button is enabled', () => {
            textInput()
                .should('have.value', '')
                .type('Not import weird things in vs code')
                .should('have.value', 'Not import weird things in vs code')
                
            authorInput()
                .should('have.value', '')
                .type('Tony Stark')
                .should('have.value', 'Tony Stark')
            
            submitButton().should('not.be.disabled')
        })

        it('the cancel button can reset the inputs and disable the submit button', () => {
            // type text
            // type author
            // hit cancel button
            // check text
            // check author
            // check submit
            textInput()
                .type('typing in text input')
            authorInput()
                .type('typing in author input')
            cancelButton()
                .click()
            textInput()
                .should('have.value', '')
            authorInput()
                .should('have.value', '')
            submitButton().should('be.disabled')
        })
        
        it('can submit and delete a new quote', () => {
            cy.contains('Pizza is the best!!').should('exist')

        })



    })
})
