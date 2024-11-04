describe('To-Do List E2E Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add a new task', () => {
    cy.get('#todo-input').type('E2E Task');
    cy.get('#add-btn').click();
    cy.get('#todo-list li').should('have.length', 1).and('contain', 'E2E Task');
  });

  it('should remove a task when clicked', () => {
    cy.get('#todo-input').type('Task to Remove');
    cy.get('#add-btn').click();
    cy.get('#todo-list li').click();
    cy.get('#todo-list li').should('have.length', 0);
  });
});
