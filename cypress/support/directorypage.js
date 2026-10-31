
class halamanDirectory {
    KunjunganHalamanDirectory() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory');
    }

    masukanNamaKaryawan(nama) {
        cy.contains('label', 'Name')
            .parent()
            .parent()
            .find('input')
            .clear()
            .type(nama);
    }

    klikTombolSearch() {
        cy.contains('button', 'Search').click();
    }

    klikTombolReset() {
        cy.contains('button', 'Reset').click();
    }

    verifikasiHalamanDirectory() {
        cy.url().should('include', '/directory/viewDirectory');
    }

    verifikasiDaftarKaryawan() {
        cy.get('.oxd-grid-4').should('be.visible');
    }

    
    verifikasiHasilPencarian(nama) {
    cy.get('.oxd-grid-4').should('be.visible');

    cy.get('.oxd-grid-4').invoke('text').then((hasil) => {
        cy.log('Nama yang dicari: ' + nama);
        cy.log('Hasil pencarian: ' + hasil);
    });

    }

    verifikasiNamaTidakAdaDiSaran() {
    cy.get('input').last().should('have.value', 'KaryawanTidakDitemukan123');
    }

    verifikasiResetPencarian() {
        cy.contains('label', 'Name')
            .parent()
            .parent()
            .find('input')
            .should('have.value', '');
    }

    verifikasiInputNamaKosong() {
        cy.contains('label', 'Name')
            .parent()
            .parent()
            .find('input')
            .should('have.value', '');
    }

    verifikasiDetailKaryawan() {
        cy.get('.orangehrm-directory-card').first().should('be.visible');
    }
}

export default new halamanDirectory();
