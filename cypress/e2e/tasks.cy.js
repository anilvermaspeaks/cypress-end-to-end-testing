/// <reference types="Cypress" />

describe('task management', () => {
    it('should open and close popup', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').click();
        cy.get('.modal').find('#new-task-form');
        cy.get('.backdrop').click({ force: true });
        cy.get('.modal').should('not.exist')
    })

    it('should create new task', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').click();
        cy.get('#title').type('Hello first task')
        cy.get('#summary').type('Hello first task summary description')
        cy.get('.modal').find('#new-task-form');
        cy.get('.modal').contains('Add Task').click();
        cy.get('.modal').should('not.exist')
        cy.get('.task').should('have.length', 1)
        cy.get('.task').find('h2').contains('Hello first task')
    })

    it('should validate form', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').click();

        cy.get('.modal').contains('Add Task').click();
        cy.get('.error-message').contains('Please provide')
    })

    it('should filter task list', () => {
        cy.visit('http://localhost:5173/')
        cy.get('#filter').select('important');
        cy.get('.no-tasks').contains('No tasks')

    })

})