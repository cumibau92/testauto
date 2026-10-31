class halamanRecruitment {
    KunjunganHalamanRecruitment(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates')
    }
    
    klikTombolAdd() {
    cy.get('.orangehrm-header-container')
      .contains('button', 'Add')
      .click();
    }

    masukanfirstname(firstname) {
        cy.get('input[name="firstName"]').type(firstname);
    }

    masukanmiddlename(middlename) {
        cy.get('input[name="middleName"]').type(middlename);
    }

    masukanlastname(lastname) {
        cy.get('input[name="lastName"]').type(lastname);
    }

    masukanemail(email) {
    cy.contains('label', 'Email')
      .parent()
      .parent()
      .find('input')
      .type(email);

    }

    masukannomorkontak(nomor) {
    cy.contains('label', 'Contact Number')
      .parent()
      .parent()
      .find('input')
      .type(nomor);
    }

    masukankeywords(keywords) {
        cy.get('input[placeholder="Enter comma seperated words..."]').type(keywords);
    }

    masukannotes(notes) {
        cy.get('textarea').type(notes);
    }

    klikTombolSave() {
        cy.contains('button', 'Save').click();
    }

    klikTombolSearch() {
        cy.contains('button', 'Search').click();
    }

    klikTombolReset() {
        cy.contains('button', 'Reset').click();
    }

    kliktombolcancel(){
        cy.contains('button', 'Cancel').click();
    }

    masukanNamacandidate(nama) {
        cy.get('input[placeholder="Type for hints..."]').first().type(nama);
    }

    verifikasiHalamanRecruitment() {
        cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates');
    }

    verifikasiHalamanAddCandidate() {
        cy.url().should('include', '/recruitment/addCandidate');
    }

    verifikasiDaftarCandidate() {
        cy.get('.oxd-table').should('be.visible');
    }

    verifikasiDataKosong() {
        cy.get('.oxd-input-field-error-message')
            .should('be.visible')
            .and('contain', 'Required');
    }

    verifikasikandidattidakditemukan() {
    cy.get('.oxd-table-body').should('be.visible');

    cy.get('.oxd-table-body').invoke('text').then((text) => {
        cy.log('Hasil pencarian: ' + text);
    });
}

    verifikasiCandidateBerhasilDitambahkan() {
        cy.contains('Successfully Saved').should('be.visible');
    }
}

export default new halamanRecruitment();
