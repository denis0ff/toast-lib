describe('Props work', () => {
  beforeEach(() => {
    cy.visit('/?path=/story/toast-library--with-buttons');
  });
  it('should apply space', () => {
    const space = 20;
    cy.visit(`/iframe.html?viewMode=story&id=toast-library--with-buttons&args=space:${space}`);
    cy.get('[data-test-id=btn-info-toast]').click();
    cy.get('[data-test-id=toast-info]').should('have.css', 'padding', `${space}px`);
  });
  it('should apply color', () => {
    const color = 'rgb(226, 88, 55)';
    cy.visit(`/iframe.html?viewMode=story&id=toast-library--with-buttons&args=color:${color}`);
    cy.get('[data-test-id=btn-error-toast]').click();
    cy.get('[data-test-id=toast-error]').should('have.css', 'background-color', color);
  });
  it('should apply variant', () => {
    const variant = 'warning';
    cy.visit(`/iframe.html?viewMode=story&id=toast-library--with-buttons&args=variant:${variant}`);
    cy.get('[data-test-id=btn-success-toast]').click();
    cy.get('[data-test-id=btn-error-toast]').click();
    cy.get('[data-test-id=btn-info-toast]').click();
    cy.get(`[data-test-id=toast-${variant}]`).its('length').should('eq', 3);
  });
  it('should apply title', () => {
    const title = 'Error title';
    cy.visit(`/iframe.html?viewMode=story&id=toast-library--with-buttons&args=title:${title}`);
    cy.get('[data-test-id=btn-error-toast]').click();
    cy.get('[data-test-id=toast-error]').contains(title);
  });
  it('should apply description', () => {
    const description = 'Error description';
    cy.visit(
      `/iframe.html?viewMode=story&id=toast-library--with-buttons&args=description:${description}`
    );
    cy.get('[data-test-id=btn-error-toast]').click();
    cy.get('[data-test-id=toast-error]').contains(description);
  });
  it('should apply duration', () => {
    const duration = 1000;
    cy.visit(
      `/iframe.html?viewMode=story&id=toast-library--with-buttons&args=duration:${duration}`
    );
    cy.get('[data-test-id=btn-error-toast]').click();
    cy.get('[data-test-id=toast-error]').should('be.exist');
    cy.get('[data-test-id=toast-error]').should('not.be.exist');
  });
  it('should apply position', () => {
    const positions = [
      ['top-left', { top: '10px', left: '10px' }],
      ['top-center', { top: '10px', left: '600px', transform: 'matrix(1, 0, 0, 1, 0, 0)' }],
      ['top-right', { top: '10px', right: '10px' }],
      ['bottom-left', { left: '10px', bottom: '10px' }],
      ['bottom-right', { right: '10px', bottom: '10px' }],
      ['bottom-center', { left: '600px', bottom: '10px', transform: 'matrix(1, 0, 0, 1, 0, 0)' }],
    ];
    for (const [position, styles] of positions) {
      cy.visit(
        `/iframe.html?viewMode=story&id=toast-library--with-buttons&args=position:${position}`
      );
      for (const [style, value] of Object.entries(styles))
        cy.get('[data-test-id=toast-list]').should('have.css', style, value);
    }
  });
});
