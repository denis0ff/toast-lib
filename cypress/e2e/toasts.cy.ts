describe('Toast work', () => {
  beforeEach(() => {
    cy.visit('/?path=/story/toast-library--with-buttons');
    cy.visit('/iframe.html?viewMode=story&id=toast-library--with-buttons');
  });
  it('should create info toast', () => {
    cy.get('[data-test-id=toast-info]').should('not.exist');
    cy.get('[data-test-id=btn-info-toast]').click();
    cy.get('[data-test-id=toast-info]').should('be.exist');
    cy.get('[data-test-id=toast-info] > [data-test-id=remove-toast]').click();
    cy.get('[data-test-id=toast-info]').should('not.exist');
  });
  it('should create warning toast', () => {
    cy.get('[data-test-id=toast-warning]').should('not.exist');
    cy.get('[data-test-id=btn-warning-toast]').click();
    cy.get('[data-test-id=toast-warning]').should('be.exist');
    cy.get('[data-test-id=toast-warning] > [data-test-id=remove-toast]').click();
    cy.get('[data-test-id=toast-warning]').should('not.exist');
  });
  it('should create error toast', () => {
    cy.get('[data-test-id=toast-error]').should('not.exist');
    cy.get('[data-test-id=btn-error-toast]').click();
    cy.get('[data-test-id=toast-error]').should('be.exist');
    cy.get('[data-test-id=toast-error] > [data-test-id=remove-toast]').click();
    cy.get('[data-test-id=toast-error]').should('not.exist');
  });
  it('should create success toast', () => {
    cy.get('[data-test-id=toast-success]').should('not.exist');
    cy.get('[data-test-id=btn-success-toast]').click();
    cy.get('[data-test-id=toast-success]').should('be.exist');
    cy.get('[data-test-id=toast-success] > [data-test-id=remove-toast]').click();
    cy.get('[data-test-id=toast-success]').should('not.exist');
  });
  it('should show 3 toasts at all', () => {
    for (let i = 0; i < 4; i++) cy.get('[data-test-id=btn-info-toast]').click();
    cy.get('[data-test-id=toast-info]').its('length').should('eq', 3);
  });
});
