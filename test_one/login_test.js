Feature('login');

Scenario('Test Egitim @testcase1', ({ I }) => {
    I.amOnePage('https://www.linkedin.com/in/bkabatas/');//SİTEYİ AÇMAMIZA YARAR.
    I.waitForElement('');// İlgili elementin yüklenmesini bekliyoruz.
    I.click('BUTON');// TIKLAMA İŞLEVİ.
    I.waitForElement('');
    I.fillField('İNPUT YERİ', 'DATAMIZ'); // İLGİLİ YERE DATA GÖNDERİMİ.
    I.seeElement('Text Yeri', 'aradığımız cannot find vb. cümleler'); // Gittiğimizde o elementi görüyor muyuz. Kontrol.
});

Scenario('Test Egitim2 @testcase2', ({ I }) => {
    I.amOnePage('https://www.linkedin.com/in/bkabatas/');//SİTEYİ AÇMAMIZA YARAR.
    I.waitForElement('');// İlgili elementin yüklenmesini bekliyoruz.
    I.click('BUTON');// TIKLAMA İŞLEVİ.
    I.waitForElement('');
    I.fillField('İNPUT YERİ', 'DATAMIZ'); // İLGİLİ YERE DATA GÖNDERİMİ.
    I.seeElement('Text Yeri', 'aradığımız cannot find vb. cümleler'); // Gittiğimizde o elementi görüyor muyuz. Kontrol.
});
