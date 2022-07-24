Feature('login');

Scenario('Test Egitim @testcase1', ({ I }) => {
    I.amOnPage('https://www.amazon.com');//SİTEYİ AÇMAMIZA YARAR.
    I.waitForElement('');// İlgili elementin yüklenmesini bekliyoruz.
    I.click('BUTON');// TIKLAMA İŞLEVİ.
    I.waitForElement('');
    I.fillField('İNPUT YERİ', 'DATAMIZ'); // İLGİLİ YERE DATA GÖNDERİMİ.
    I.seeElement('Text Yeri', 'aradığımız cannot find vb. cümleler'); // Gittiğimizde o elementi görüyor muyuz. Kontrol.
});

Scenario('Test Egitim2 @testcase2', ({ I }) => {
    I.amOnPage('https://www.linkedin.com/in/bkabatas/');//SİTEYİ AÇMAMIZA YARAR.
    I.waitForElement('');// İlgili elementin yüklenmesini bekliyoruz.
    I.click('BUTON');// TIKLAMA İŞLEVİ.
    I.waitForElement('');
    I.fillField('İNPUT YERİ', 'DATAMIZ'); // İLGİLİ YERE DATA GÖNDERİMİ.
    I.seeElement('Text Yeri', 'aradığımız cannot find vb. cümleler'); // Gittiğimizde o elementi görüyor muyuz. Kontrol.
    I.switchTo(); //iframe ulaşma html'de link alma
    I.wait(10); //bekle
    I.pressKey('Enter') // entera bas
});
