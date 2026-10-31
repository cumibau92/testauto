import halamanLogin from '../support/loginpage'  
import halamanRecruitment from '../support/recruitmentpage'
import halamanDirectory from '../support/directorypage'
import finalData from '../fixtures/finalData.json'
 
describe('Final Project', () => {
  
  it('TC001 - Login dengan data valid', () => {
    halamanLogin.KunjunganHalamaLogin()
    halamanLogin.masukanusername(finalData.usernameValid)
    halamanLogin.masukanpassword(finalData.passwordValid)
    halamanLogin.kliktombollogin()
    halamanLogin.verifikasilogin()
  });

  it('TC002 - Username kosong', () => {
    halamanLogin.KunjunganHalamaLogin()
    halamanLogin.masukanpassword(finalData.passwordValid)
    halamanLogin.kliktombollogin()
    halamanLogin.verikasidatakosong()
  });

  it('TC003 - Password kosong', () => {
    halamanLogin.KunjunganHalamaLogin()
    halamanLogin.masukanusername(finalData.passwordValid)
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
    halamanLogin.masukanusername(finalData.usernameInvalid)
    halamanLogin.masukanpassword(finalData.passwordInvalid)
    halamanLogin.kliktombollogin()
    halamanLogin.verifikasilogingagal()
  });

  it('TC006 - Password salah', () => {
    halamanLogin.KunjunganHalamaLogin()
    halamanLogin.masukanusername(finalData.usernameValid)
    halamanLogin.masukanpassword(finalData.passwordInvalid)
    halamanLogin.kliktombollogin()
    halamanLogin.verifikasilogingagal()
  });

  it('TC007 - Username dan password salah', () => {
    halamanLogin.KunjunganHalamaLogin()
    halamanLogin.masukanusername(finalData.usernameInvalid)
    halamanLogin.masukanpassword(finalData.passwordInvalid)
    halamanLogin.kliktombollogin()
    halamanLogin.verifikasilogingagal()
  });

  it('TC008 - Username dengan spasi', () => {
    halamanLogin.KunjunganHalamaLogin()
    halamanLogin.masukanusername(finalData.usernamespasi)
    halamanLogin.masukanpassword(finalData.passwordValid)
    halamanLogin.kliktombollogin()
    halamanLogin.verifikasilogingagal()
  });

  it('TC009 - Password dengan spasi', () => {
    halamanLogin.KunjunganHalamaLogin()
    halamanLogin.masukanusername(finalData.usernameValid)
    halamanLogin.masukanpassword(finalData.passwordspasi)
    halamanLogin.kliktombollogin()
    halamanLogin.verifikasilogingagal()
  });

  it('TC010 - Membuka halaman Recruitment', () => {
    halamanLogin.KunjunganHalamaLogin()
    halamanLogin.masukanusername(finalData.usernameValid)
    halamanLogin.masukanpassword(finalData.passwordValid)
    halamanLogin.kliktombollogin()

    halamanRecruitment.KunjunganHalamanRecruitment()
    halamanRecruitment.verifikasiHalamanRecruitment()
  });

  it('TC011 - Membuka form Add Candidate', () => {
    halamanLogin.KunjunganHalamaLogin()
    halamanLogin.masukanusername(finalData.usernameValid)
    halamanLogin.masukanpassword(finalData.passwordValid)
    halamanLogin.kliktombollogin()

    halamanRecruitment.KunjunganHalamanRecruitment();
    halamanRecruitment.klikTombolAdd();
    halamanRecruitment.verifikasiHalamanAddCandidate();
   });

   it('TC012 - Mengisi form kandidat baru', () => {
    halamanLogin.KunjunganHalamaLogin()
    halamanLogin.masukanusername(finalData.usernameValid)
    halamanLogin.masukanpassword(finalData.passwordValid)
    halamanLogin.kliktombollogin()

    halamanRecruitment.KunjunganHalamanRecruitment();
    halamanRecruitment.klikTombolAdd();
    halamanRecruitment.masukanfirstname(finalData.masukanfirstname);
    halamanRecruitment.masukanmiddlename(finalData.masukanmiddlename);
    halamanRecruitment.masukanlastname(finalData.masukanlastname);
    halamanRecruitment.masukanemail(finalData.masukanemail);
    halamanRecruitment.masukannomorkontak(finalData.masukannomorkontak);
    halamanRecruitment.masukankeywords(finalData.masukankeywords);
    halamanRecruitment.masukannotes(finalData.masukannotes);
    halamanRecruitment.klikTombolSave();
    halamanRecruitment.verifikasiCandidateBerhasilDitambahkan();
  });

   it('TC013 - Mencari kandidat berdasarkan nama', () => {
    halamanLogin.KunjunganHalamaLogin();
    halamanLogin.masukanusername(finalData.usernameValid);
    halamanLogin.masukanpassword(finalData.passwordValid);
    halamanLogin.kliktombollogin();

    halamanRecruitment.KunjunganHalamanRecruitment();
    halamanRecruitment.masukanNamacandidate(finalData.masukanfirstname);
    halamanRecruitment.klikTombolSearch();
    halamanRecruitment.verifikasiDaftarCandidate();
  });

   it('TC014 - Mencari kandidat yang tidak tersedia', () => {
    halamanLogin.KunjunganHalamaLogin();
    halamanLogin.masukanusername(finalData.usernameValid);
    halamanLogin.masukanpassword(finalData.passwordValid);
    halamanLogin.kliktombollogin();

    halamanRecruitment.KunjunganHalamanRecruitment();
    halamanRecruitment.masukanNamacandidate(finalData.kandidattidakditemukan);
    halamanRecruitment.klikTombolSearch();
    halamanRecruitment.verifikasikandidattidakditemukan();
  });

   it('TC015 - Mereset filter pencarian kandidat', () => {
    halamanLogin.KunjunganHalamaLogin();
    halamanLogin.masukanusername(finalData.usernameValid);
    halamanLogin.masukanpassword(finalData.passwordValid);        
    halamanLogin.kliktombollogin();

    halamanRecruitment.KunjunganHalamanRecruitment();
    halamanRecruitment.masukanNamacandidate(finalData.masukanfirstname);
    halamanRecruitment.klikTombolReset();
    halamanRecruitment.verifikasiDaftarCandidate();
  });

   it('TC016 - Validasi form kandidat kosong', () => {
    halamanLogin.KunjunganHalamaLogin();
    halamanLogin.masukanusername(finalData.usernameValid);
    halamanLogin.masukanpassword(finalData.passwordValid);
    halamanLogin.kliktombollogin();

    halamanRecruitment.KunjunganHalamanRecruitment();
    halamanRecruitment.klikTombolAdd();
    halamanRecruitment.klikTombolSave();
    halamanRecruitment.verifikasiDataKosong();
  });

    it('TC017 - Membatalkan pengisian form kandidat', () => {
     halamanLogin.KunjunganHalamaLogin();
     halamanLogin.masukanusername(finalData.usernameValid);
     halamanLogin.masukanpassword(finalData.passwordValid);
     halamanLogin.kliktombollogin();

     halamanRecruitment.KunjunganHalamanRecruitment();
     halamanRecruitment.klikTombolAdd();

     halamanRecruitment.masukanfirstname(finalData.masukanfirstname);
     halamanRecruitment.masukanlastname(finalData.masukanlastname);
     halamanRecruitment.kliktombolcancel()
     halamanRecruitment.verifikasiHalamanRecruitment();
    });
    it('TC018 - Membuka halaman Directory', () => {
     halamanLogin.KunjunganHalamaLogin();
     halamanLogin.masukanusername(finalData.usernameValid);
     halamanLogin.masukanpassword(finalData.passwordValid);
     halamanLogin.kliktombollogin();

     halamanDirectory.KunjunganHalamanDirectory();
     halamanDirectory.verifikasiHalamanDirectory();
    });

    it('TC019 - Menampilkan daftar karyawan', () => {
     halamanLogin.KunjunganHalamaLogin();
     halamanLogin.masukanusername(finalData.usernameValid);
     halamanLogin.masukanpassword(finalData.passwordValid);
     halamanLogin.kliktombollogin();

     halamanDirectory.KunjunganHalamanDirectory();
     halamanDirectory.verifikasiDaftarKaryawan();
    });

    it('TC020 - Mencari karyawan berdasarkan nama', () => {
     halamanLogin.KunjunganHalamaLogin();
     halamanLogin.masukanusername(finalData.usernameValid);
     halamanLogin.masukanpassword(finalData.passwordValid);
     halamanLogin.kliktombollogin();
      
     halamanDirectory.KunjunganHalamanDirectory();
     halamanDirectory.masukanNamaKaryawan(finalData.masukannamakaryawan);
     halamanDirectory.klikTombolSearch();
     halamanDirectory.verifikasiHasilPencarian(finalData.masukannamakaryawan);
    });

    it('TC021 - Mencari nama karyawan yang tidak tersedia', () => {
     halamanLogin.KunjunganHalamaLogin();
     halamanLogin.masukanusername(finalData.usernameValid);
     halamanLogin.masukanpassword(finalData.passwordValid);
     halamanLogin.kliktombollogin();
     
     halamanDirectory.KunjunganHalamanDirectory();
     halamanDirectory.masukanNamaKaryawan('KaryawanTidakDitemukan123');
     halamanDirectory.klikTombolSearch();
     halamanDirectory.verifikasiNamaTidakAdaDiSaran();
    });

    it('TC022 - Melakukan pencarian dengan input nama kosong', () => {
     halamanLogin.KunjunganHalamaLogin();
     halamanLogin.masukanusername(finalData.usernameValid);
     halamanLogin.masukanpassword(finalData.passwordValid);
     halamanLogin.kliktombollogin();
     
     halamanDirectory.KunjunganHalamanDirectory();

     halamanDirectory.verifikasiInputNamaKosong();
     halamanDirectory.klikTombolSearch();
     halamanDirectory.verifikasiDaftarKaryawan();
    });

    it('TC023 - Mereset hasil pencarian karyawan', () => {
     halamanLogin.KunjunganHalamaLogin();
     halamanLogin.masukanusername(finalData.usernameValid);
     halamanLogin.masukanpassword(finalData.passwordValid);
     halamanLogin.kliktombollogin();
     
     halamanDirectory.KunjunganHalamanDirectory();
     halamanDirectory.masukanNamaKaryawan(finalData.masukannamakaryawan);
     halamanDirectory.klikTombolSearch();
     halamanDirectory.klikTombolReset();
     halamanDirectory.verifikasiResetPencarian();
     halamanDirectory.verifikasiDaftarKaryawan();
    });

    it('TC024 - Mencari karyawan menggunakan nama yang tidak lengkap', () => {
     halamanLogin.KunjunganHalamaLogin();
     halamanLogin.masukanusername(finalData.usernameValid);
     halamanLogin.masukanpassword(finalData.passwordValid);
     halamanLogin.kliktombollogin();
     
     halamanDirectory.KunjunganHalamanDirectory();
     halamanDirectory.masukanNamaKaryawan(finalData.masukannamatidaklengkap);
     halamanDirectory.klikTombolSearch();
     halamanDirectory.verifikasiDaftarKaryawan();
    });

    it('TC025 - Memastikan kartu karyawan ditampilkan', () => {
     halamanLogin.KunjunganHalamaLogin();
     halamanLogin.masukanusername(finalData.usernameValid);
     halamanLogin.masukanpassword(finalData.passwordValid);
     halamanLogin.kliktombollogin();
     
     halamanDirectory.KunjunganHalamanDirectory();
     halamanDirectory.verifikasiDetailKaryawan();
    });

});    
