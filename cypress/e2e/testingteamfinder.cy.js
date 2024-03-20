///<reference types="cypress"/>

describe('TeamfindeTesting',()=>{

    beforeEach(function(){

        cy.visit('https://atc-2024-webwarriors-fe-linux-web-app.azurewebsites.net')
        cy.viewport(1270,720)
    })
    it('to sign up ',()=>{

       cy.log('To sign up')
       cy.get('[href="/auth/login"] > .chakra-button').click()
       
       cy.get("#email").type('ivan@example.com')
       cy.get('#password').type('qweqwe')
       cy.get('.chakra-button').click()
    })
    it('Tge page',()=>{
        
        cy.get('[href="/auth/login"] > .chakra-button').click()
        
        cy.get("#email").type('ivan@example.com')
        cy.get('#password').type('qweqwe')
        cy.get('.chakra-button').click()
        

        cy.get('.css-1vnkbql > :nth-child(1) > a').should('be.exist').click()
        cy.get(':nth-child(4) > a').should('be.visible').click()
        cy.get('.css-1vnkbql > :nth-child(2) > a').should('be.visible').click()
        cy.get(':nth-child(5) > a').should('be.exist').click()
        cy.get(':nth-child(3) > a').should('be.exist').click()
        cy.get(':nth-child(6) > a').should('be.exist').click()
    })
    it('Skils',()=>{
        
        cy.get('[href="/auth/login"] > .chakra-button').click()
        
        cy.get("#email").type('ivan@example.com')
        cy.get('#password').type('qweqwe')
        cy.get('.chakra-button').click()
        
        cy.get(':nth-child(4) > a').should('be.visible').click()
      
        cy.get(':nth-child(1) > .sc-gHWSBU > .chakra-select__wrapper > .chakra-select').should('be.exist').select(1)
        cy.get(':nth-child(1) > .sc-gHWSBU > .chakra-select__wrapper > .chakra-select').should('be.exist').select(2)
        cy.get(':nth-child(1) > .sc-gHWSBU > .chakra-select__wrapper > .chakra-select').should('be.exist').select(0)

        cy.log('to log out')
        cy.get('.sc-guDLey > .chakra-button').click()
    })
})