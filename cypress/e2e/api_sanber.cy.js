
describe('Tugas 18', () => {
  it('TC001 - Menampilkan daftar users', () => {
    cy.request({
      method: 'GET',
      url: `https://reqres.in/api/users?page=2`,
      headers: {'x-api-key':'reqres_4901552d6b354ff3b102a09711b4eee2'}
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.page).to.eq(2);
      expect(response.body.data).to.be.an('array');
      expect(response.body.data[0].email).to.eq('michael.lawson@reqres.in');
    });
  });

  // TC002 - GET Single User
  it('TC002 - Menampilkan detail user berdasarkan ID', () => {
    cy.request({
      method: 'GET',
      url: `https://reqres.in/api/users/2`,
      headers : {'x-api-key':'reqres_4901552d6b354ff3b102a09711b4eee2'}
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.id).to.eq(2);
      expect(response.body.data.email).to.eq('janet.weaver@reqres.in');
      expect(response.body.data.first_name).to.eq('Janet');
    });
  });

  // TC003 - GET User Not Found
  it('TC003 - Menampilkan user yang tidak ditemukan', () => {
    cy.request({
      method: 'GET',
      url: `https://reqres.in/api/users/23`,
      headers : {'x-api-key':'reqres_4901552d6b354ff3b102a09711b4eee2'},
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.deep.equal({});
    });
  });

  // TC004 - GET List Resources
  it('TC004 - Menampilkan daftar resources', () => {
    cy.request({
      method: 'GET',
      url: `https://reqres.in/api/unknown`,
      headers : {'x-api-key':'reqres_4901552d6b354ff3b102a09711b4eee2'}
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.be.an('array');
    });
  });

  // TC005 - GET Single Resource
  it('TC005 - Menampilkan detail resource berdasarkan ID', () => {
    cy.request({
      method: 'GET',
      url: `https://reqres.in/api/unknown/2`,
      headers: {'x-api-key':'reqres_4901552d6b354ff3b102a09711b4eee2'}
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.id).to.eq(2);
    });
  });

  // TC006 - GET Resource Not Found
  it('TC006 - Menampilkan resource yang tidak ditemukan', () => {
    cy.request({
      method: 'GET',
      url: `https://reqres.in/api/unknown/23`,
      headers : {'x-api-key':'reqres_4901552d6b354ff3b102a09711b4eee2'},
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.deep.equal({});
    });
  });

  // TC007 - POST Create User
  it('TC007 - Membuat user baru', () => {
    cy.request({
      method: 'POST',
      url: `https://reqres.in/api/users`,
      headers : {'x-api-key':'reqres_4901552d6b354ff3b102a09711b4eee2'},
      body: {
        name: 'Zaheed Abdoel',
        job: 'QA Engineer'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq('Zaheed Abdoel');
      expect(response.body.job).to.eq('QA Engineer');
      expect(response.body.id).to.exist;
      expect(response.body.createdAt).to.exist;
    });
  });

  // TC008 - PUT Update User
  it('TC008 - Mengubah seluruh data user menggunakan PUT', () => {
    cy.request({
      method: 'PUT',
      url: `https://reqres.in/api/users/2`,
      headers : {'x-api-key':'reqres_4901552d6b354ff3b102a09711b4eee2'},
      body: {
        name: 'Zaheed Abdoel',
        job: 'Manual QA Tester'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('Zaheed Abdoel');
      expect(response.body.job).to.eq('Manual QA Tester');
      expect(response.body.updatedAt).to.exist;
    });
  });

  // TC009 - PATCH Update User
  it('TC009 - Mengubah sebagian data user menggunakan PATCH', () => {
    cy.request({
      method: 'PATCH',
      url: `https://reqres.in/api/users/2`,
      headers : {'x-api-key':'reqres_4901552d6b354ff3b102a09711b4eee2'},
      body: {
        job: 'Automation QA Tester'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.job).to.eq('Automation QA Tester');
      expect(response.body.updatedAt).to.exist;
    });
  });

  // TC010 - DELETE User
  it('TC010 - Menghapus user berdasarkan ID', () => {
    cy.request({
      method: 'DELETE',
      url: `https://reqres.in/api/users/2`,
      headers : {'x-api-key':'reqres_4901552d6b354ff3b102a09711b4eee2'}
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });

  // TC011 - POST Register Success
  it('TC011 - Registrasi user berhasil', () => {
    cy.request({
      method: 'POST',
      url: `https://reqres.in/api/register`,
      headers : {'x-api-key':'reqres_4901552d6b354ff3b102a09711b4eee2'},
      body: {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(4);
      expect(response.body.token).to.exist;
    });
  });

  // TC012 - POST Login Success
  it('TC012 - Login berhasil', () => {
    cy.request({
      method: 'POST',
      url: `https://reqres.in/api/login`,
      headers : {'x-api-key':'reqres_4901552d6b354ff3b102a09711b4eee2'},
      body: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.token).to.exist;
      expect(response.body.token).to.be.a('string');
    });
  });
});
