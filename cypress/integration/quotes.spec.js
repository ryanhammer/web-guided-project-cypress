// write tests here
describe('Quotes app', () => {
  beforeEach(() => {
    // arbitrary code you want running before your tests start
    cy.visit('http://localhost:1234/');
  });

  const textInput = () => cy.get('input[name="text"]');
  const authorInput = () => cy.get('input[name="author"]');
  const cancelBtn = () => cy.get('#cancelBtn');
  const submitBtn = () => cy.get('#submitBtn');

  // 'it' is describing and initiating a test
  it('is a sanity test to make sure that tests work', () => {
    // false positive to start out our tests
    // 'expect' is an assertion; there can be many assertions per test
    // though inside the it statement, usually the assertions are logically grouped together
    expect(1+2).to.equal(3);
    expect(2+2).not.to.equal(5);
  });

  it("is playing around selecting items from the DOM", () => {
    textInput().should('exist');
    // cy.get('input[name="foobar"]').should('not.exist');
    authorInput().should('exist');
    cancelBtn().should('exist');
    submitBtn().should('exist');
    cy.contains(/submit quote/i);
    expect({}).not.to.equal({}); // not strict (===)
    expect({}).to.eql({}); // strict
  });

  it("can type in the inputs", () => {
    // grab the inputs, assert they are empty, type in them, and assert that what we typed is there
    textInput()
      .should('have.value', '')
      .type('have fun learning React')
      .should('have.value', 'have fun learning React');

    authorInput()
      .should('have.value', '')
      .type('author name')
      .should('have.value', 'author name');  
  });

  it('submit button is disabled until both inputs are filled out', () => {
    // set up --> act --> assert
    textInput()
      .should('have.value', '');

    authorInput()
      .should('have.value', '');

    submitBtn()
      .should('be.disabled');

    textInput()
      .type('have fun learning React')
      .should('have.value', 'have fun learning React');

    authorInput()
      .type('author name')
      .should('have.value', 'author name');

    submitBtn()
      .should('not.be.disabled');

  });

  it('can cancel a new quote', () => {
    // set up
    textInput().should('have.value', '');
    authorInput().should('have.value', '');

    // act
    textInput()
      .type('have fun learning React')
      .should('have.value', 'have fun learning React');

    authorInput()
      .type('author name')
      .should('have.value', 'author name');

    cancelBtn().click();

    // assert
    textInput().should('have.value', '');
    authorInput().should('have.value', '');

  });

  // it('can submit a new quote', () => {
  //   // setup: that a quote is not currently in the DOM
  //   cy.get('.container');
  //   cy.contains(/have fun (Rhiannon)/i)
  // })
});