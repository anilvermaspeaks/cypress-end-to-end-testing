/// <reference types="Cypress" />

describe('contact form', () => {

    it('should validate contact form', () => {

        cy.visit('http://localhost:5173/about');
        cy.get('[data-cy="contact-btn-submit"]').click();

        cy.get('[data-cy="contact-btn-submit"]').then((el) => {
            expect(el).to.not.have.attr('disabled')
            expect(el.text()).is.not.eq('sending...')
        })

        cy.get('[data-cy="contact-btn-submit"]').contains('Send Message')
        cy.get('[data-cy="contact-input-message"]').blur()

        cy.get('[data-cy="contact-input-message"]').parent()
            .should('have.attr', 'class').and('match', /invalid/)
        cy.get('[data-cy="contact-input-name"]').focus()
        cy.get('[data-cy="contact-input-name"]').blur()
        cy.get('[data-cy="contact-input-message"]').parent().should((el) => {
            expect(el.attr('class')).to.contains('invalid')
        })
        // alias explle
        cy.get('[data-cy="contact-input-email"]').as('emailInput')
        cy.get('@emailInput').focus()
        cy.get('@emailInput').blur()
        cy.get('@emailInput').parent().should((el) => {
            expect(el.attr('class')).to.contains('invalid')
        })


    })


});