
///<reference types="cypress"/>
 


describe('Test cases _Authentification FE',function(){

  beforeEach(function(){
    cy.visit('http://localhost:5173/auth/signup')
  
   })
it('front-end autentificare_admin',function(){

    
  cy.get('.chakra-select').select(0)
  cy.get('#name').type('Adrian Marinesucu')
  cy.get('#email').type('adrian.marinescu@myfinderteam.com')
  cy.get('#password').type('Pf516bnvdMB')
  cy.get('#organization_name').type('AsssitHardware')
  cy.get('#headquarter_address').type('Str.Tipografie nr.10')
  cy.get('.chakra-button').click()

})

   
it('front-end autentificare_user',function(){

  cy.visit('http://localhost:5173/auth/signup')
  cy.get('.chakra-select').select(1)
  cy.get('#name').type('Adrian Marinesucu')
  cy.get('#email').type('adrian.marinescu@myfinderteam.com')
  cy.get('#password').type('Pf516bnvdMB')
  cy.get('.chakra-button').click()
  
  
})
it('to verify admin user if the dates are correct to sign up',() =>{
   
  cy.get('select[name="role"]').select('admin')
  cy.get('input[name="name"]').type('Hossu Marian Tivilic')
  cy.get('input[name="email"]').type('hossu.mariantivilic20@myteamfinder.com')
  cy.get('input[name="password"]').type('Istina124302')
  cy.get('input[name="organization_name"]').type('UA Frame IT')
  cy.get('input[name="headquarter_address"]').type('Suceava,Strada Tipografiei nr.2025')

  cy.get('form').submit()
  cy.window().then ((win) =>{
    
    cy.spy(win.console,'log').as('consoleLog')
  })
  cy.get('button[type="submit"]').click()
  cy.get('@consoleLog').should('be.calledWith',{
    role:'admin',
    name:'Hossu Marian Tivilic',
    email:'hossu.mariantivilic20@myteamfinder.com',
    password:'Istina124302',
    organization_name:'UA Frame IT',
    headquarter_address:'Suceava,Strada Tipografiei nr.2025'


  })


})
it('to verify basic user account if dates was introduced correctly in this form',() =>{

      cy.get('select[name="role"]').select('employee')
      cy.get('input[name="name"]').type("Alin Tipatescu")
      cy.get('input[name="email"]').type('alin.tipatescu@myfinderteam.com')
      cy.get('input[name="password"]').type('P4ot&13?fd')

      cy.get('form').submit()

      cy.window().then((win)=>{
           cy.spy(win.console,'log').as('consoleLog')
      })
      cy.get('button[type="submit"]').click()
      cy.get('@consoleLog').should('be.calledWith',{
          role:'employee',
          name:'Alin Tipatescu',
          email:'alin.tipatescu@myfinderteam.com',
          password:'P4ot&13?fd'
      })
     
})
it('verify if basic user have a  created account',() =>{
  cy.get('select[name="role"]').select('employee')
  cy.get('input[name="name"]').type("Alin Tipatescu")
  cy.get('input[name="email"]').type('alin.tipatescu@myfinderteam.com')
  cy.get('input[name="password"]').type('P4ot&13?fd')

  cy.get('form').submit()
 
cy.get('a > .chakra-text').click()
cy.get('input[name="email"]').type('alin.tipatescu@myfinderteam.com')
cy.get('input[name="password"]').type('P4ot&13?fd')

cy.get('.chakra-button').click()
 
  
})

it('verify if admin user have a  created account',() =>{
  cy.get('select[name="role"]').select('admin')
  cy.get('input[name="name"]').type('Hossu Marian Tivilic')
  cy.get('input[name="email"]').type('hossu.mariantivilic20@myteamfinder.com')
  cy.get('input[name="password"]').type('Istina124302')
  cy.get('input[name="organization_name"]').type('UA Frame IT')
  cy.get('input[name="headquarter_address"]').type('Suceava,Strada Tipografiei nr.2025')

  cy.get('form').submit()
 
cy.get('a > .chakra-text').click()
cy.get('input[name="email"]').type('hossu.mariantivilic20@myteamfinder.com')
cy.get('input[name="password"]').type('Istina124302')

cy.get('.chakra-button').click()
 
  
})


})
   
