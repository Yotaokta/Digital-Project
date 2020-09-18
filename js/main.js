// stick-navbar
$(document).ready(function () {
  $(window).scroll(function () {
    let wScroll = $(this).scrollTop();

    if (wScroll > 100) {
      $('#sticky-nav').addClass('bg-white');
      $('#sticky-nav').css({
        "boxShadow": "5px 10px 15px rgba(0,0,0,0.3)"
      });
    }
    else if (wScroll == 0) {
      $('#sticky-nav').removeClass('bg-white');
      $('#sticky-nav').css({
        "boxShadow": "0 0 0 rgba(0,0,0,0.5)"
      });
    }
  })

  $('input, select').on('focus', function () {
    $(this).parent().find('.input-group-text').css('border-color', '#80bdff');
  });
  $('input, select').on('blur', function () {
    $(this).parent().find('.input-group-text').css('border-color', '#ced4da');
  });
})
// end stick navbar

// object layanan
let layanan = {
  design_basic: {
    Produk: 'Web Mobile Design',
    subProduk: 'Web Mobile Design',
    paket: 'Basic',
    Harga: 1.599,
    Waktu_pengerjaan: 4,
    Revisi: 4,
    Description: `3 Initial Concepts includes,Source File,Cormercial use,Responsive Design, 1 page (web) 4 page (mobile)`
  },
  design_normal: {
    Produk: 'Web Mobile Design',
    subProduk: 'Web Mobile Design',
    paket: 'Normal',
    Harga: 2.399,
    Waktu_pengerjaan: 6,
    Revisi: 6,
    Description: `3 Initial Concepts includes,Source File,Commercial Use,Convert to HTML/CSS or XML(mobile),Standard Design,5 page (Web), 7 Page (Mobile)`
  },
  design_premium: {
    Produk: 'Web Mobile Design',
    subProduk: 'Web Mobile Design',
    paket: 'Premium',
    Harga: 4.799,
    Waktu_pengerjaan: 10,
    Revisi: 7,
    Description: `3 Initial Concepts includes,Source File,Commercial Use,Convert to HTML/CSS or XML(mobile),FHD Asset,Responsive Profesional Design,8 page(web) 10 Page (Mobile)`
  },
  mobile_basic: {
    Produk: 'Mobile App Developer',
    subProduk: 'Mobile App Developer',
    paket: 'Basic',
    Harga: 2.299,
    Waktu_pengerjaan: 3,
    Revisi: 3,
    Description: `1 Operation System (android),Splash Screen,Responsive Standard Design,Include Source Code,Less Functionalty and Fix Bug`
  },
  mobile_normal: {
    Produk: 'Mobile App Developer',
    subProduk: 'Mobile App Developer',
    paket: 'Normal',
    Harga: 4.599,
    Waktu_pengerjaan: 6,
    Revisi: 5,
    Description: `1 Operation System (android),Splash Screen,Add Network Imigration,Responsive Profesional Design,Include Source Code,App Icon and App Suvbmission,Standard Functionality`
  },
  mobile_premium: {
    Produk: 'Mobile App Developer',
    subProduk: 'Mobile App Developer',
    paket: 'Premium',
    Harga: 10.599,
    Waktu_pengerjaan: 14,
    Revisi: 3,
    Description: `1 Operation System (android),Splash Screen,Add Network Imigration,Responsive Profesional Design,FHD Asset,Include Source Code,App Icon and App Submission,More Functionality Mininum Bug`
  },
  website_basic: {
    Produk: 'Website App Developer',
    subProduk: 'Website App Developer',
    paket: 'Basic',
    Harga: 2.799,
    Waktu_pengerjaan: 5,
    Revisi: 3,
    Description: `3 Page,Design Customization,Responsive Design,Include Source Code`
  },
  website_normal: {
    Produk: 'Website App Developer',
    subProduk: 'Website App Developer',
    paket: 'Normal',
    Harga: 5.899,
    Waktu_pengerjaan: 8,
    Revisi: 3,
    Description: `7 Page,Design Customization,Responsive Design,UI/UX Standard Features,Include Source Code,Awereness Website On Domain Free`
  },
  website_premium: {
    Produk: 'Website App Developer',
    subProduk: 'Website App Developer',
    paket: 'Premium',
    Harga: 15.599,
    Waktu_pengerjaan: 14,
    Revisi: 3,
    Description: `10 Page,Design Customization,Responsive Design,UI/UX Premium Features,Include Source Code,Awereness Website On Good Performance Domain, SEO Optimization`
  }
}

// end object layanan

// dashboard
var code = Math.round(Math.random() * 500 + 100);
function serviceDetails(m) {
  return `<div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
      <h2 class="text-center" style="font-family: viga">${m.Produk}</h2>
      </div>
      <div class="col-md">
        <ul class="list-group">
          <li class="list-group-item">
            <h4 class="produk text-dark">${m.subProduk} ${m.paket}</h4>
          </li>
          <li class="list-group-item text-dark">Price : Rp ${m.Harga}.${code}</li>
          <li class="list-group-item text-dark">Proccesing Time : ${m.Waktu_pengerjaan} day</li>
          <li class="list-group-item text-dark">Revision : ${m.Revisi}</li>
          <li class="list-group-item text-dark">Feature : ${m.Description}</li>
        </ul>
      </div>
    </div>
  </div>`
}

let modalBody = document.querySelector('.modal-body');

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('design')) {
    let id = e.target.dataset.id;
    let desc = layanan[id];
    let modalKonten = serviceDetails(desc);
    modalBody.innerHTML = modalKonten;
  }
  else if (e.target.classList.contains('mobile')) {
    let id = e.target.dataset.id;
    let desc = layanan[id];
    let modalKonten = serviceDetails(desc);
    modalBody.innerHTML = modalKonten;
  }
  else if (e.target.classList.contains('website')) {
    let id = e.target.dataset.id;
    let desc = layanan[id];
    let modalKonten = serviceDetails(desc);
    modalBody.innerHTML = modalKonten;
  }
})

if (document.body.classList.contains('dashboard')) {
  let pCode = document.querySelector('.pCode');
  pCode.innerHTML = code;
  let serviceEl = document.querySelector('select#inputService');
  let packageEl = document.querySelector('select#inputPackage');

  let tanggalMulai = document.querySelector('input#inputTanggalMulai');
  let durasiEl = document.querySelector('input#inputDurasi');
  let pService = document.querySelector('.pService');
  let pPackage = document.querySelector('.pPackage');
  let pDay = document.querySelector('.pDay ');
  let pPrice = document.querySelector('.pPrice ');
  let pilihanService;
  let pilihanPackage;

  function aksesObject(desc) {
    let waktu = desc.Waktu_pengerjaan;
    pService.innerHTML = desc.Produk;
    pPackage.innerHTML = desc.paket;
    pDay.innerHTML = waktu;
    pPrice.innerHTML = `${desc.Harga}.${code}`;
    durasiEl.value = waktu;
  }

  function utilityService() {
    if (pilihanPackage == 'basic') {
      if (pilihanService == 'Web/Mobile Design') {
        let id = 'design_basic';
        let desc = layanan[id];
        aksesObject(desc)
      }
      if (pilihanService == 'Mobile App Developer') {
        let id = 'mobile_basic';
        let desc = layanan[id];
        aksesObject(desc)
      }
      if (pilihanService == 'Website App Developer') {
        let id = 'website_basic';
        let desc = layanan[id];
        aksesObject(desc)
      }
    }
    if (pilihanPackage == 'normal') {
      if (pilihanService == 'Web/Mobile Design') {
        let id = 'design_normal';
        let desc = layanan[id];
        aksesObject(desc)
      }
      if (pilihanService == 'Mobile App Developer') {
        let id = 'mobile_normal';
        let desc = layanan[id];
        aksesObject(desc)
      }
      if (pilihanService == 'Website App Developer') {
        let id = 'website_normal';
        let desc = layanan[id];
        aksesObject(desc)
      }
    }
    if (pilihanPackage == 'premium') {
      if (pilihanService == 'Web/Mobile Design') {
        let id = 'design_premium';
        let desc = layanan[id];
        aksesObject(desc)
      }
      if (pilihanService == 'Mobile App Developer') {
        let id = 'mobile_premium';
        let desc = layanan[id];
        aksesObject(desc)
      }
      if (pilihanService == 'Website App Developer') {
        let id = 'website_premium';
        let desc = layanan[id];
        aksesObject(desc)
      }
    }
  }

  serviceEl.addEventListener('input', function () {
    pilihanService = serviceEl.value;
    utilityService();
  })

  packageEl.addEventListener('input', function () {
    pilihanPackage = packageEl.value;
    utilityService();
  })



  const d = ["Jan", "Feb", "Marc", "Apr", "Mei", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Des"];
  let tanggal = new Date();
  let bulan = d[tanggal.getMonth()];
  let day = tanggal.getDate();
  let year = tanggal.getFullYear();
  let tanggalNormal = `${day} ${bulan} ${year}`;
  let tanggalUtuh = `${bulan} ${day}, ${year}`;
  document.querySelector('.transaction .panel1 .title1 p.tanggal').innerHTML = tanggalUtuh;
  tanggalMulai.setAttribute('value', tanggalNormal);

}

// end dashboard

// register
if (document.body.classList.contains('regis')) {
  let Source = ['undraw_mobile_development_8gyo', 'undraw_Working_oh83', 'undraw_web_developer_p3e5', 'undraw_designer_life_w96d'];
  let index = 0;
  let vectorRegis = document.getElementById('vectorRegis');

  function gantiGambar() {
    index++;
    if (index >= Source.length) {
      index = 0;
    }
    vectorRegis.classList.add('flash');
    vectorRegis.setAttribute('src', `img/${Source[index]}.svg`)
    setTimeout(() => {
      vectorRegis.classList.remove('flash');
    }, 500);
  }

  setInterval(() => {
    gantiGambar()
  }, 8000);

}

function idRandom() {
  let id = Math.round(Math.random() * 700 + 100);
  let idElement = document.getElementById('id');
  idElement.setAttribute('value', id);
}

// end register