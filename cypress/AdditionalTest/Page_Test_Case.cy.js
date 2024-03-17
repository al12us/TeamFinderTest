

///<reference types="cypress"/>
describe('Home_page_teamfinder',()=>{
    
    beforeEach(function(){
        cy.visit('http://localhost:5173')
    })
    it('Click TeamFinder Logo',() =>{
        
        cy.get('[src="/src/common/assets/team-finder-logo.svg"]').click()
    })
    it('Click profile',()=>{

        cy.get('.chakra-button').click({force:true})
        
    })
    it('Click the image on the profile from menu bar',()=>{

        cy.get(':nth-child(4) > .chakra-avatar > .chakra-avatar__initials').click()
        
    })
    it('Click profile from arrow',()=>{

        cy.get('.css-1vnkbql > :nth-child(1) > a').click({force:true})
        
    })
    it('Search in teamfinder',()=>{

        cy.get('.chakra-input').type('Popescu Ionut {enter}')
      // .should('have.class','chakra-input__right-addon css-1w27x5')
                               
    })
    it('Click-organization',()=>{

        cy.get('.css-1vnkbql > :nth-child(1) > a').click({force:true})
        
                               
    })
    it('Click to department',()=>{
        cy.get('.css-1vnkbql > :nth-child(2) > a').click({force:true})
    })
    it('Return the page to home',() =>{
        cy.get('.css-16wajk8 > :nth-child(1) > a').click()
    })
})
