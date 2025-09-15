<template>
    <div class="container-fluid">
        <div class="page-header">
            <div class="row">
            <div class="col-sm-6">
                <h3>MÜŞTERİ EKLEME</h3>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Ana Sayfa</a></li>
                <li class="breadcrumb-item">Musteri</li>
                <li class="breadcrumb-item active">Musteri Detay</li>
                </ol>
            </div>
            <div class="col-sm-6">
                <!-- Bookmark Start-->
                <div class="bookmark">
                <ul>
                    <li><a href="javascript:void(0)" data-container="body" data-bs-toggle="popover" data-placement="top" title="" data-original-title="Tables"><i data-feather="inbox"></i></a></li>
                    <li><a href="javascript:void(0)" data-container="body" data-bs-toggle="popover" data-placement="top" title="" data-original-title="Chat"><i data-feather="message-square"></i></a></li>
                    <li><a href="javascript:void(0)" data-container="body" data-bs-toggle="popover" data-placement="top" title="" data-original-title="Icons"><i data-feather="command"></i></a></li>
                    <li><a href="javascript:void(0)" data-container="body" data-bs-toggle="popover" data-placement="top" title="" data-original-title="Learning"><i data-feather="layers"></i></a></li>
                    <li><a href="javascript:void(0)"><i class="bookmark-search" data-feather="star"></i></a>
                    <form class="form-inline search-form">
                        <div class="form-group form-control-search">
                        <input type="text" placeholder="Search..">
                        </div>
                    </form>
                    </li>
                </ul>
                </div>
                <!-- Bookmark Ends-->
            </div>
            </div>
        </div>
    </div>
        <!-- Container-fluid starts-->
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12 col-xl-12">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header pb-0">
                        <h5>MÜŞTERİ BİLGİLERİ</h5><span>Yeni <a href="#">musteri</a> ekleme ve update etme sayfasi</span>
                        </div>
                        <div class="card-body">
                            <form class="theme-form d-flex">
                                <!--Musteri Bilgileri start-->
                                <div class="col-4 p-2 border-end">
                                    <h5 class="mb-4">MÜŞTERİ BİLGİLERİ</h5>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="musteriKod">Müşteri Kodu:</label>
                                        <input class="form-control" id="musteriKod" type="text" aria-describedby="musteriKod" placeholder="Müşteri kodu gir">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="musteriAd">Müşteri Adı:</label>
                                        <input class="form-control" id="musteriAd" type="text" aria-describedby="musteriAd" placeholder="Müşteri adı gir">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="unvan">Ünvan:</label>
                                        <input class="form-control" id="unvan" type="text" aria-describedby="unvan" placeholder="Ünvan gir">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="kontak">Kontak / Yetkili:</label>
                                        <input class="form-control" id="kontak" type="text" aria-describedby="kontak" placeholder="Kontak gir">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="musteriTip">Müşteri Tipi</label>
                                        <select class="form-select digits" id="musteriTip">
                                            <option selected disabled value="">Lütfen müşteri tipi seçiniz</option>
                                            <option value="Potansiyel Müşteri">Potansiyel Müşteri</option>
                                            <option value="Gerçek Müşteri">Gerçek Müşteri</option>
                                            <option value="Danışman Müşteri">Danışman Müşteri</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="musteriAd">Müşteri Kategorisi:</label>
                                        <input class="form-control" id="musteriKategori" type="text" aria-describedby="musteriKategori" placeholder="Müşteri kategori gir">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="sektor">Sektör:</label>
                                        <select class="form-select digits" id="sektor">
                                            <option selected disabled value="">Lütfen sektör seçiniz</option>
                                            <option value="Ağaç Sanayi">Ağaç Sanayi</option>
                                            <option value="Atık Sanayi">Atık Sanayi</option>
                                            <option value="Cam Sanayi">Cam Sanayi</option>
                                            <option value="Deri Sanayi">Deri Sanayi</option>
                                            <option value="Gıda Sanayi">Gıda Sanayi</option>
                                            <option value="İçki Sanayi">İçki Sanayi</option>
                                            <option value="Kimya Sanayi">Kimya Sanayi</option>
                                            <option value="Kömür Sanayi">Kömür Sanayi</option>
                                            <option value="Maden Sanayi">Maden Sanayi</option>
                                            <option value="Metal Sanayi">Metal Sanayi</option>
                                            <option value="Petrol Sanayi">Petrol Sanayi</option>
                                            <option value="Selüloz Kağıt Sanayi">Selüloz Kağıt Sanayi</option>
                                            <option value="Seri Makina Sanayi">Seri Makina Sanayi</option>
                                            <option value="Taşıt Fabrikaları">Taşıt Fabrikaları</option>
                                            <option value="Tekstil Sanayi">Tekstil Sanayi</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="kaynak">Kaynak</label>
                                        <select class="form-select digits" id="kaynak">
                                            <option selected disabled value="">Lütfen kaynak seçiniz</option>
                                            <option value="Firma Potansiyeli">Firma Potansiyeli</option>
                                            <option value="Kişisel İlişki">Kişisel İlişki</option>
                                            <option value="Referans Yönlendirmesi">Referans Yönlendirmesi</option>
                                            <option value="Referans Yönlendirmesi">Reklamdan Dönüş</option>
                                            <option value="Referans Yönlendirmesi">Telefon Aktivitesi</option>
                                            <option value="Referans Yönlendirmesi">Toplu Mailing Dönüşü</option>
                                            <option value="Web Aracılığıyla">Web Aracılığıyla</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="status">Aktif / Pasif</label>
                                        <select class="form-select digits" id="status">
                                            <option selected value="Aktif">Aktif</option>
                                            <option value="Pasif">Pasif</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="musteriEkibi">Müşteri Ekibi</label>
                                        <select class="form-select digits" id="musteriEkibi">
                                            <option selected disabled value="">Lütfen müşteri ekibi seçiniz</option>
                                            <option value="Engin Katirag">Engin Katirag</option>
                                            <option value="Burhan Ardic">Burhan Ardic</option>
                                            <option value="Ezgi Bozoglu">Ezgi Bozoglu</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="aciklama">Açıklama</label>
                                        <textarea class="form-control btn-square" id="aciklama" rows="3"></textarea>
                                    </div>
                                    <div class="checkbox p-0">
                                        <input id="takipDurumu" type="checkbox">
                                        <label class="mb-0" for="takipDurumu">Takip Durumu</label>
                                    </div>
                                </div>
                                <!--Musteri Bilgileri end-->
                                <!--Iletisim Bilgileri start-->
                                <div class="col-4 p-2">
                                    <h5 class="mb-4">İLETİŞİM BİLGİLERİ</h5>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="adresTip">Adres Tipi</label>
                                        <select class="form-select digits" id="adresTip">
                                            <option selected disabled value="fatura">Fatura</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="adresSatiri1">Adres Satırı 1</label>
                                        <input class="form-control" id="adresSatiri1" type="text" placeholder="">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="adresSatiri2">Adres Satırı 2</label>
                                        <input class="form-control" id="adresSatiri2" type="text" placeholder="">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="ulke">Ülke</label>
                                        <select class="form-select digits" id="ulke">
                                            <option selected disabled value="Türkiye">Türkiye</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="sehir">Şehir</label>
                                        <select class="form-select digits" id="sehir">
                                            <option selected disabled value="Kocaeli">Kocaeli</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="ilce">İlçe</label>
                                        <input class="form-control" id="ilce" type="text" placeholder="">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="postaKodu">Posta Kodu</label>
                                        <input class="form-control" id="postaKodu" type="number" placeholder="">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="bolgeKodu">Bölge Kodu</label>
                                        <input class="form-control" id="bolgeKodu" type="number" placeholder="">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="telefon">Telefon</label>
                                        <input class="form-control" id="telefon" type="tel" placeholder="">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="telefon2">Telefon2</label>
                                        <input class="form-control" id="telefon2" type="tel" placeholder="">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="faks">Faks</label>
                                        <input class="form-control" id="faks" type="text" placeholder="">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="cepTelefon">Cep Telefonu</label>
                                        <input class="form-control" id="cepTelefon" type="tel" placeholder="">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="email">Email</label>
                                        <input class="form-control" id="email" type="email" placeholder="">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="email2">Email2</label>
                                        <input class="form-control" id="email2" type="email" placeholder="">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="webAdresi">Web Adresi</label>
                                        <input class="form-control" id="webAdresi" type="text" placeholder="">
                                    </div>
                                </div>
                                <!--Iletisim Bilgileri end-->
                                <!--Finans Bilgileri & Sosyal Medya start-->
                                <div class="col-4 p-2 border-start">
                                    <h5 class="mb-4">FINANS BİLGİLERİ</h5>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="vergiDairesi">Vergi Dairesi</label>
                                        <input class="form-control" id="vergiDairesi" type="text" placeholder="">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="vergiNumarasi">Vergi Numarası</label>
                                        <input class="form-control" id="vergiNumarasi" type="text" placeholder="">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="paraBirimi">Para Birimi</label>
                                        <select class="form-select digits" id="paraBirimi">
                                            <option selected value="TL">TL</option>
                                            <option value="USD">USD</option>
                                            <option value="EUR">EUR</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="riskDurumu">Risk Durumu</label>
                                        <select class="form-select digits" id="riskDurumu">
                                            <option hidden selected value=""></option>
                                            <option value="riskli">Riskli</option>
                                            <option value="risksiz">Risksiz</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="iskonto">İskonto (%)</label>
                                        <input value="0" class="form-control" id="iskonto" type="number" placeholder="">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="bakiye">Bakiye</label>
                                        <input value="0.00" class="form-control" id="bakiye" type="number" placeholder="">
                                    </div>
                                    <h5 class="mb-4">SOSYAL MEDYA</h5>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="skype"><i class="fa fa-skype me-2" style="color: #00aff0; spadding: 2px;"></i>Skype</label>
                                        <input class="form-control" id="skype" type="text" placeholder="">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="linkedin"><i class="fa fa-linkedin me-2" style="background-color: #0A66C2; color: white; padding: 2px;"></i>LinkedIn</label>
                                        <input class="form-control" id="linkedin" type="text" placeholder="">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="facebook"><i class="fa fa-facebook me-2" style="background-color: #3b5999; color: white; padding: 2px;"></i>Facebook</label>
                                        <input class="form-control" id="facebook" type="text" placeholder="">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="instagram"><i class="fa fa-instagram me-2" style="color: #ee2a7b ; padding: 2px;"></i>Instagram</label>
                                        <input class="form-control" id="instagram" type="text" placeholder="">
                                    </div>
                                    <div class="mb-3">
                                        <label class="col-form-label pt-0" for="twitter"><i class="fa fa-twitter me-2" style="color: 1DA1F2 ; padding: 2px;"></i>Twitter</label>
                                        <input class="form-control" id="twitter" type="text" placeholder="">
                                    </div>
                                </div>
                                <!--Finans Bilgileri & Sosyal Medya end-->
                            </form>
                        </div>
                        <div class="card-footer d-flex justify-content-end">
                            <button class="btn btn-primary me-2">Kaydet</button>
                            <button class="btn btn-secondary">Yeni Kayıt</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    form span {
        font-weight: 400;
    }
</style>