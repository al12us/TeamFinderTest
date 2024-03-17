///<reference types="cypress"/>




describe("Organization of TeamFinder Testing FE",()=>{


    beforeEach (function(){
      
        cy.visit('http://localhost:5173/organization')
    })
   it('Save and select Option',()=>{
       
    cy.get('.chakra-select').select(0)
    cy.get('.css-6gxz74 > .chakra-button').click({force:true}).debug()
    cy.get('.chakra-select').select(1)
    cy.get('.css-6gxz74 > .chakra-button').click().debug()
    cy.get('.chakra-select').select(2)
    cy.get('.css-6gxz74 > .chakra-button').click().debug()
    cy.get('.chakra-select').select(3)
    cy.get('.css-6gxz74 > .chakra-button').click().debug()
           
   })
    it('The table of the admin role assignments-check the status of the row',()=>{
         
        cy.get('tbody tr').each(($tr, index) => {
            const textEnvelope = $tr.find('td:nth-child(1)').text();
            if (textEnvelope.includes('Your GUID is  here')) {
              // Check the status of row
              cy.wrap($tr).find('td:nth-child(2)').should('have.text', 'succeeded');
            }
          });
         

    })
    it('Generate URL-testing FE',()=>{

        cy.get('.css-1c45vye > .chakra-button').click()
        cy.get(':nth-child(1) > .chakra-input').type('https://youtube.com {enter}')
        cy.get(':nth-child(1) > .chakra-input__right-addon').click()
        cy.get('.css-8nyxky > :nth-child(2) > .chakra-input').type('https://youtube.com {enter}')
        cy.get('.css-8nyxky > :nth-child(2) > .chakra-input__right-addon').click()
        cy.log('Obsevation: I can not to copy the link (URL)')
    })

    it('To Delete from list Admin role assignments',()=>{
        //First Admin user
        cy.get('#menu-button-\\:r1\\:').click()
        cy.wait(2000)
        cy.get('#menu-list-\\:r1\\:-menuitem-\\:r2\\:').click()
        //Second Admin
        cy.get('#menu-button-\\:r5\\:').click()
        cy.wait(2000)
        cy.get('#menu-list-\\:r5\\:-menuitem-\\:r6\\:').click()
    })
    it('To Edit from Admin role assignments',()=>{
         
        //First Admin user
        cy.get('#menu-button-\\:r1\\:').click()
        cy.wait(2000)
        cy.get('#menu-list-\\:r1\\:-menuitem-\\:r3\\:').click()
        //Secound Admin user
        cy.get('#menu-button-\\:r5\\:').click()
        cy.get('#menu-list-\\:r5\\:-menuitem-\\:r7\\:').click({force:true})


    })
    it('Intercept',()=>{
        cy.intercept('http://localhost:5173/organization')
    
    })
})


