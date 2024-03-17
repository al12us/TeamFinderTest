///<reference types="cypress"/>

describe('Departments of TeamFinder testing',() =>{
    beforeEach(function(){
        cy.visit('http://localhost:5173/departments')
    })
    it('To add the same departments and the different departments manager(First case)',()=>{

        //Test case1
        cy.get(':nth-child(1) > .chakra-select').select(1)
        cy.get(':nth-child(2) > .chakra-select').select(1)
        cy.get('.css-kl5uk3 > .chakra-button').click()

        cy.get(':nth-child(1) > .chakra-select').select(1)
        cy.get(':nth-child(2) > .chakra-select').select(2)
        cy.get('.css-kl5uk3 > .chakra-button').click()

        cy.get(':nth-child(1) > .chakra-select').select(1)
        cy.get(':nth-child(2) > .chakra-select').select(3)
        cy.get('.css-kl5uk3 > .chakra-button').click() 

        

    })


    it('To add the same departments and the different departments manager(Second case)',()=>{

        //Test case no.2
        

        cy.get(':nth-child(1) > .chakra-select').select(2)
        cy.get(':nth-child(2) > .chakra-select').select(1)
        cy.get('.css-kl5uk3 > .chakra-button').click() 

        cy.get(':nth-child(1) > .chakra-select').select(2)
        cy.get(':nth-child(2) > .chakra-select').select(2)
        cy.get('.css-kl5uk3 > .chakra-button').click() 

        cy.get(':nth-child(1) > .chakra-select').select(2)
        cy.get(':nth-child(2) > .chakra-select').select(3)
        cy.get('.css-kl5uk3 > .chakra-button').click() 


       


    })
    it('To add the same departments  and the different departments manage  (Third case)',()=>{

        //Test case no.3
       
        cy.get(':nth-child(1) > .chakra-select').select(3)
        cy.get(':nth-child(2) > .chakra-select').select(1)
        cy.get('.css-kl5uk3 > .chakra-button').click() 


        cy.get(':nth-child(1) > .chakra-select').select(3)
        cy.get(':nth-child(2) > .chakra-select').select(2)
        cy.get('.css-kl5uk3 > .chakra-button').click() 

        cy.get(':nth-child(1) > .chakra-select').select(3)
        cy.get(':nth-child(2) > .chakra-select').select(3)
        cy.get('.css-kl5uk3 > .chakra-button').click() 

  

    })

    it('To add the departments (First case)',()=>{

        //Test case no.1
       //To be different
        cy.get(':nth-child(1) > .chakra-select').select(1)
        cy.get(':nth-child(2) > .chakra-select').select(1)
        cy.get('.css-kl5uk3 > .chakra-button').click() 


        cy.get(':nth-child(1) > .chakra-select').select(2)
        cy.get(':nth-child(2) > .chakra-select').select(2)
        cy.get('.css-kl5uk3 > .chakra-button').click() 

        cy.get(':nth-child(1) > .chakra-select').select(3)
        cy.get(':nth-child(2) > .chakra-select').select(3)
        cy.get('.css-kl5uk3 > .chakra-button').click() 

  

    })
   

    it('To add the departments (Second case)',()=>{

        //Test case no.2
       
        cy.get(':nth-child(1) > .chakra-select').select(1)
        cy.get(':nth-child(2) > .chakra-select').select(2)
        cy.get('.css-kl5uk3 > .chakra-button').click() 


        cy.get(':nth-child(1) > .chakra-select').select(2)
        cy.get(':nth-child(2) > .chakra-select').select(1)
        cy.get('.css-kl5uk3 > .chakra-button').click() 

        cy.get(':nth-child(1) > .chakra-select').select(1)
        cy.get(':nth-child(2) > .chakra-select').select(3)
        cy.get('.css-kl5uk3 > .chakra-button').click() 

  

    })

    it('To add the departments (Third case)',()=>{

        //Test case no.3
       
        cy.get(':nth-child(1) > .chakra-select').select(3)
        cy.get(':nth-child(2) > .chakra-select').select(1)
        cy.get('.css-kl5uk3 > .chakra-button').click() 


        cy.get(':nth-child(1) > .chakra-select').select(2)
        cy.get(':nth-child(2) > .chakra-select').select(3)
        cy.get('.css-kl5uk3 > .chakra-button').click() 

        cy.get(':nth-child(1) > .chakra-select').select(3)
        cy.get(':nth-child(2) > .chakra-select').select(2)
        cy.get('.css-kl5uk3 > .chakra-button').click() 

  

    })
    it('The table of the departments-check the status of the row',()=>{
         
        cy.get('tbody tr').each(($tr, index) => {
            const textEnvelope = $tr.find('td:nth-child(1)').text();
            if (textEnvelope.includes('Your GUID is  here')) {
              // Check the status of row
              cy.wrap($tr).find('td:nth-child(7)').should('have.text', 'succeeded');
            }
          });
         

    })
    
    //Observation:I can't click on the profile of the member
    
    it('Delete the member from  the department table',()=>{
       
        cy.get('#menu-button-\\:r1\\:').click()
        cy.get('#menu-list-\\:r1\\:-menuitem-\\:r2\\:').click()
        
    })
    it('Edit the member from  the depatrment table',()=>{
           
        cy.get('#menu-button-\\:r1\\:').click()
        cy.get('#menu-list-\\:r1\\:-menuitem-\\:r3\\:').click()

    })

    it('To add the member in the list of the department',()=>{

        cy.get('.css-1mppxig > :nth-child(5)').click()
        cy.log('Observation:Is impossible to add a new member in the deparment table')
    })
   
})
