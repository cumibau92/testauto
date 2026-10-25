describe ( 'Scenario Verifikasi fungsi login',()=> {
    it('TC001- Login dengan username valid & password valid', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('.btn_action').click()
    })
})