import halamanLogin from '../support/loginpage'  
import loginData from '../fixtures/loginData.json'


describe('Tugas 17', () => {
  
  it('TC001 - Login dengan data valid', () => {
    halamanLogin.KunjunganHalamaLogin()
    halamanLogin.masukanusername(loginData.usernameValid)
    halamanLogin.masukanpassword(loginData.passwordValid)
    halamanLogin.kliktombollogin()
    halamanLogin.verifikasilogin()
  });

  it('TC002 - Username kosong', () => {
    halamanLogin.KunjunganHalamaLogin()
    halamanLogin.masukanpassword(loginData.passwordValid)
    halamanLogin.kliktombollogin()
    halamanLogin.verikasidatakosong()
  });

  it('TC003 - Password kosong', () => {
    halamanLogin.KunjunganHalamaLogin()
    halamanLogin.masukanusername(loginData.passwordValid)
    halamanLogin.kliktombollogin()
    halamanLogin.verikasidatakosong()
  });

  it('TC004 - Username dan password kosong', () => {
    halamanLogin.KunjunganHalamaLogin()
    halamanLogin.kliktombollogin()
    halamanLogin.verifikasiloginerror()
  });

  it('TC005 - Username salah', () => {
    halamanLogin.KunjunganHalamaLogin()
    halamanLogin.masukanusername(loginData.usernameInvalid)
    halamanLogin.masukanpassword(loginData.passwordInvalid)
    halamanLogin.kliktombollogin()
    halamanLogin.verifikasilogingagal()
  });

  it('TC006 - Password salah', () => {
    halamanLogin.KunjunganHalamaLogin()
    halamanLogin.masukanusername(loginData.usernameValid)
    halamanLogin.masukanpassword(loginData.passwordInvalid)
    halamanLogin.kliktombollogin()
    halamanLogin.verifikasilogingagal()
  });

  it('TC007 - Username dan password salah', () => {
    halamanLogin.KunjunganHalamaLogin()
    halamanLogin.masukanusername(loginData.usernameInvalid)
    halamanLogin.masukanpassword(loginData.passwordInvalid)
    halamanLogin.kliktombollogin()
    halamanLogin.verifikasilogingagal()
  });

  it('TC008 - Username dengan spasi', () => {
    halamanLogin.KunjunganHalamaLogin()
    halamanLogin.masukanusername(loginData.usernamespasi)
    halamanLogin.masukanpassword(loginData.passwordValid)
    halamanLogin.kliktombollogin()
    halamanLogin.verifikasilogingagal()
  });

  it('TC009 - Password dengan spasi', () => {
    halamanLogin.KunjunganHalamaLogin()
    halamanLogin.masukanusername(loginData.usernameValid)
    halamanLogin.masukanpassword(loginData.passwordspasi)
    halamanLogin.kliktombollogin()
    halamanLogin.verifikasilogingagal()
  });


});
