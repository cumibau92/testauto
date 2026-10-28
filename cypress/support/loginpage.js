class halamanLogin{
    KunjunganHalamaLogin(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    masukanusername(username){
        cy.get('input[name="username"]').type(username);
    }
    masukanpassword(password){
        cy.get('input[name="password"]').type(password);
    }
    kliktombollogin(){
        cy.get('button[type="submit"]').click();
    }
    verifikasilogin(){
       cy.url().should('include', '/dashboard/index'); 
    }
    verikasidatakosong(){
        cy.get('.oxd-input-field-error-message').should('be.visible').and('contain', 'Required');
    }
    verifikasilogingagal(){
          cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    }
    verifikasiloginerror(){
        cy.get('.oxd-input-field-error-message').should('have.length', 2);
    }
}


export default new halamanLogin()