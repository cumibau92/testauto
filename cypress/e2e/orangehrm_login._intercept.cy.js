describe('Tugas 16', () => {
  
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

   it('TC001 - Login dengan data valid', () => {
    cy.intercept(
      'GET',
      '**/api/v2/dashboard/employees/action-summary'
    ).as('dashboardSummary');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.wait('@dashboardSummary')
      .its('response.statusCode')
      .should('eq', 200);

    cy.url().should('include', '/dashboard/index');
    cy.contains('Dashboard').should('be.visible');
  });

  it('TC002 - Username kosong', () => {
    cy.intercept('POST', '**/auth/validate').as('loginRequest');

    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-input-field-error-message')
      .should('be.visible')
      .and('contain', 'Required');

    cy.get('@loginRequest.all').should('have.length', 0);
  });

  
  it('TC003 - Password kosong', () => {
    cy.intercept('POST', '**/auth/validate').as('loginRequest');

    cy.get('input[name="username"]').type('Admin');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-input-field-error-message')
      .should('be.visible')
      .and('contain', 'Required');

    cy.get('@loginRequest.all').should('have.length', 0);
  });
  it('TC004 - Username dan password kosong', () => {
    cy.intercept('POST', '**/auth/validate').as('loginRequest');

    cy.get('button[type="submit"]').click();

    cy.get('.oxd-input-field-error-message')
      .should('have.length', 2);

    cy.get('@loginRequest.all').should('have.length', 0);
  });

  it('TC005 - Username salah', () => {
    cy.intercept('POST', '**/auth/validate').as('loginRequest');

    cy.get('input[name="username"]').type('zaheed');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.wait('@loginRequest').then(({ response }) => {
      expect(response).to.exist;
    });

    cy.get('.oxd-alert-content-text')
      .should('be.visible')
      .and('contain', 'Invalid credentials');
  });

  it('TC006 - Password salah', () => {
    cy.intercept('POST', '**/auth/validate').as('loginRequest');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('abdoel');
    cy.get('button[type="submit"]').click();

    cy.wait('@loginRequest').then(({ response }) => {
      expect(response).to.exist;
    });

    cy.get('.oxd-alert-content-text')
      .should('be.visible')
      .and('contain', 'Invalid credentials');
  });

    it('TC007 - Username dan password salah', () => {
    cy.intercept('POST', '**/auth/validate').as('loginRequest');

    cy.get('input[name="username"]').type('zaheeed');
    cy.get('input[name="password"]').type('abdoel');
    cy.get('button[type="submit"]').click();

    cy.wait('@loginRequest').then(({ response }) => {
      expect(response).to.exist;
    });

    cy.get('.oxd-alert-content-text')
      .should('be.visible')
      .and('contain', 'Invalid credentials');
  });

  it('TC008 - Username dengan spasi', () => {
    cy.intercept('POST', '**/auth/validate').as('loginRequest');

    cy.get('input[name="username"]').type('Adm in');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.wait('@loginRequest').then(({ response }) => {
      expect(response).to.exist;
    });

    cy.get('.oxd-alert-content-text')
      .should('be.visible')
      .and('contain', 'Invalid credentials');
  });

  it('TC009 - Password dengan spasi', () => {
    cy.intercept('POST', '**/auth/validate').as('loginRequest');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin 123');
    cy.get('button[type="submit"]').click();

    cy.wait('@loginRequest').then(({ response }) => {
      expect(response).to.exist;
    });
  });
});
