
describe('Quiz 3', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('TC001 - Login dengan data valid', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard/index');
    cy.contains('Dashboard').should('be.visible');
  });

  it('TC002 - Username kosong', () => {
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-input-field-error-message')
      .should('be.visible')
      .and('contain', 'Required');
  });

  it('TC003 - Password kosong', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-input-field-error-message')
      .should('be.visible')
      .and('contain', 'Required');
  });

  it('TC004 - Username dan password kosong', () => {
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-input-field-error-message')
      .should('have.length', 2);
  });

  it('TC005 - Username salah', () => {
    cy.get('input[name="username"]').type('zaheed');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content-text')
      .should('contain', 'Invalid credentials');
  });

  it('TC006 - Password salah', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('abdoel');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content-text')
      .should('contain', 'Invalid credentials');
  });

  it('TC007 - Username dan password salah', () => {
    cy.get('input[name="username"]').type('zaheeed');
    cy.get('input[name="password"]').type('abdoel');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content-text')
      .should('contain', 'Invalid credentials');
  });

  it('TC008 - Username dengan spasi', () => {
    cy.get('input[name="username"]').type('Adm in');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content-text')
      .should('contain', 'Invalid credentials');
  });

  it('TC009 - Password dengan spasi', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin 123');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content-text')
      .should('contain', 'Invalid credentials');
  });

  it('TC010 - Password disamarkan', () => {
    cy.get('input[name="password"]')
      .should('have.attr', 'type', 'password');
  });

  it('TC011 - Membuka halaman lupa password', () => {
    cy.contains('Forgot your password?').click();

    cy.url().should('include', '/requestPasswordResetCode');
    cy.contains('Reset Password').should('be.visible');
  });

  it('TC012 - Dashboard tanpa login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    cy.url().should('include', '/auth/login');
    cy.get('input[name="username"]').should('be.visible');
  });

});
