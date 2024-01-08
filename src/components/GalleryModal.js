import { AppContext } from "context/AppContext";
import React, { useContext, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Modal from "react-overlays/Modal";
import HeroModalImage from "../images/sample/sample-hero-modal.jpg";
import Image1 from "../images/sample/img-1.jpg";
import Image2 from "../images/sample/img-2.jpg";
import Image3 from "../images/sample/img-3.jpg";
import Image4 from "../images/sample/img-4.jpg";

export default function GalleryModal() {
  const { galleryModalIsOpen, setGalleryModalIsOpen } = useContext(AppContext);
  const renderBackdrop = (props) => (
    <div className="backdrop fixed inset-0 bg-black bg-opacity-80" {...props} />
  );

  const images = [Image1, Image2, Image3, Image4];

  const closeModal = () => {
    window.fullpage_api.setAllowScrolling(true);
    setGalleryModalIsOpen(false);
  };

  useEffect(() => {
    console.log(galleryModalIsOpen);
  }, [galleryModalIsOpen]);

  return (
    <div>
      {/* <Fade> */}
      <Modal
        onShow={() => window.fullpage_api.setAllowScrolling(false)}
        show={galleryModalIsOpen}
        onExit={() => {
          window.fullpage_api.setAllowScrolling(true);
        }}
        onBackdropClick={() => setGalleryModalIsOpen(false)}
        renderBackdrop={renderBackdrop}
        className="modal fixed inset-0 overflow-y-scroll"
      >
        <div>
          <div
            className="absolute inset-0"
            onClick={() => {
              closeModal();
            }}
          ></div>
          <div className="relative top-0 z-50 mx-auto mb-20 mt-24 max-w-screen-lg bg-white">
            <button
              onClick={() => {
                closeModal();
              }}
              className="absolute -top-12 right-0 bg-main p-2 transition-colors hover:bg-main-dark"
            >
              <svg
                viewBox="0 0 22.43 22.43"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <g
                  fill="#fff"
                  stroke="#fff"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                >
                  <path d="m.71 21.72 21.01-21.01" />
                  <path d="m21.72 21.72-21.01-21.01" />
                </g>
              </svg>
            </button>
            {/* content */}
            <div className="bg-white">
              <div className=" relative z-10 mx-auto h-full min-h-screen w-full">
                <div className="flex  w-full content-between items-end py-16">
                  <div className="px-10 text-left">
                    <h2 className="h whitespace-nowrap">Safe and Fair</h2>
                  </div>
                  <div className="ml-auto flex items-center">
                    <div className="mr-2 whitespace-nowrap text-right  uppercase italic tracking-widest">
                      Digital Storybook
                    </div>
                    <div className="relative flex h-[1px] w-20 max-w-md bg-gray-500 "></div>
                  </div>
                </div>
                <div className="relative">
                  <img src={HeroModalImage} alt="" />

                  <div className="absolute bottom-0 left-0 mx-auto w-full bg-opacity-50 bg-gradient-to-b from-transparent to-black/50 py-10">
                    <div className="mx-auto flex max-w-[700px] text-white">
                      <div className="whitespace-nowrap text-3xl">
                        <h3 className=" border-r border-white pr-6">
                          Ahmad Haryono
                        </h3>
                      </div>
                      <div className="pl-6 text-xs">
                        This is the space for photo captions. Lorem ipsum dolor
                        sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam
                        erat volutpat.
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-10 left-full right-2 -translate-x-4  whitespace-nowrap text-xs text-xs  text-white">
                    <div className="-rotate-90">
                      Photo: UN Women/M R Hasan, Illustration: PORTRAY
                    </div>
                  </div>
                </div>
                <div className="px-10 py-16">
                  <div className="mx-auto max-w-[700px]">
                    <h3 className="mb-10 text-4xl font-semibold">
                      Membedah Budaya Bisu PMI Purna di Pekon Ambarawa
                    </h3>
                    <div>
                      <p>
                        6 September 2023 yang lalu, Sofyan hadir ke desa atau
                        kami menyebutnya Pekon Ambarawa Pringsewu. Ia merupakan
                        pendamping komunitas Pekerja Migran Indonesia program
                        Safe and Fair pada lembaga Perkumpulan DAMAR Lampung.
                        Aktif wara wiri ke Pekon ini sejak setahun lalu.
                        Ditemani motor Beat hitam kesayangannya, Sofyan harus
                        tancap gas sekitar satu setengah jam dari rumahnya di
                        Kecamatan Natar Lampung Selatan.
                      </p>
                      <p>
                        Agenda Sofyan ke Pekon Ambarawa, tentu tak lepas dari
                        tugas dan tanggung jawabnya sebagai pendamping
                        komunitas. Terutama bertemu dan ngobrol dari hati ke
                        hati dengan para PMI purna. Tujuannya menggali
                        sebanyak-banyaknya masalah yang ada seputar isu PMI,
                        yang nantinya digunakan sebagai bahan melakukan
                        advokasi. Sofyan menyadari, tak mudah untuk membuka
                        pembicaraan seputar pekerjaan di luar negeri yang
                        dialami para PMI purna. Umumnya mereka menghindar bahkan
                        cenderung membisu ketika diajak bicara hal tersebut.
                        Seperti ada trauma, dan penyesalan. Mereka merasa gagal,
                        karena pasca pulang ke kampung, keluarganya berantakan,
                        suaminya kawin lagi, dan anak-anaknya tidak terurus. Bu
                        Yatni misalnya, PMI purna yang kini membuka usaha warung
                        makan “Pecel Lele ECHO” di depan Balai Pekon Ambarawa
                        yang sulit diajak bicara. “..Oalah pak pak, ngapain
                        diceritakan lagi, toh saya sudah pulang. Sudah gak
                        kesana lagi. Saya malas cerita-cerita kayak gini.” Yatni
                        adalah mantan PMI yang bekerja di Malaysia selama 6
                        tahun. Mulai bekerja pada tahun 2015, ia dibawa oleh
                        agen (baca; calo), orang dari desa yang sama dengannya.
                        Karena alasan ekonomi, Yatni rela meninggalkan suami dan
                        2 orang anaknya. Setiap bulan Yatni mengirimkan uang ke
                        Pekon untuk kebutuhan makan suami dan anak-anaknya.
                        Selain itu, Yatni juga menyisihkan sedikit gajinya untuk
                        bisa ditabungkan di sana. Akan tetapi nasib kebahagiaan
                        belum berpihak padanya. Badai menghampiri Yatni,
                        suaminya kawin lagi. Sepulang dari Malaysia dia minta
                        bercerai, dan kedua anaknya ikut bersama Yatni.
                      </p>
                      <blockquote>
                        Kisah pilu seperti yang dialami Yatni ini juga banyak
                        dialami perempuan-perempuan lain di Pekon Ambarawa. Dan
                        mereka cenderung bungkam, enggan bercerita.
                      </blockquote>
                      <p>
                        Tapi Sofyan tidak pantang menyerah. Baginya,
                        cerita-cerita seperti ini tidak harus secara langsung
                        didapat dari sumber aslinya, PMI nya sendiri. Namun
                        cerita bisa didapatkan dari anggota keluarganya, dari
                        ibu atau saudara PMI. Sofyan berusaha menggali informasi
                        dari berbagai sumber terpercaya agar memperoleh data
                        yang benar. Tanpa sepengetahuan Yatni, Sofyan mendatangi
                        rumah saudara Yatni. Setidaknya dengan cara ini Sofyan
                        bisa mendapatkan informasi, sebagai bahan merumuskan
                        kegiatan yang harus dilakukan bersama tim program Safe
                        and Fair Perkumpulan DAMAR.
                      </p>
                      <p>
                        Sore hari yang sama, Sofyan beruntung bisa bertemu
                        dengan Indah di rumahnya. Indah yang merupakan PMI purna
                        itu, kini bekerja sebagai salah satu staf pelayan dan
                        kebersihan di kantor Pekon Ambarawa. Sofyan tahu dan
                        kenal nama Indah dari Muji, kakak Yatni yang pernah
                        ngobrol dengannya. Dengan sikap sopan Sofyan bertanya
                        dengan Indah, “..Mbak Indah mengapa ya teman-teman PMI
                        di sini sulit diajak bicara pengalamannya bekerja di
                        luar negeri? Indah bercerita, “Iya malu mungkin Pak.
                        Karena kerja ke luar itu (sebagai PMI) ada yang berhasil
                        ada yang tidak. Yang berhasil ya mau cerita-cerita,
                        bahkan ada yang sudah balik lagi bekerja ke luar negeri.
                        Kalo yang tidak berhasil, malu lah Pak. Saya ini
                        termasuk yang pernah bekerja di Malaysia dan gagal.
                        Sebab saya direkrut oleh saudara saya yang ternyata
                        calo. Tahun 2010, saya berangkat lewat darat, lewat
                        Batam waktu itu. Saya terkatung-katung di sana, Pak.
                        Lama tidak dapat pekerjaan. Singkat cerita saya dapat
                        pekerjaan nyuci piring di rumah makan. Sudah satu bulan
                        kok gak dapat gaji. Terus aja begitu sampai 2 bulan
                        lebih. Lalu ada razia polisi Malaysia, saya ditahan dan
                        akhirnya dipulangkan.”
                      </p>
                      <p>
                        Sofyan melanjutkan pertanyaan, setahu mbak Indah, apakah
                        di pekon Ambarawa ini banyak calo-calo yang menawarkan
                        kerja sebagai PMI dengan iming-iming tertentu, misal
                        gajinya besar, kerjanya enak, gitu mbak. Menurut Indah
                        tidak terfokus di desa Ambarawa saja, tetapi banyak dari
                        desa-desa di sekitar sini. Sofyan lama merenung di ruang
                        tamu Indah, saat ditinggal ke belakang untuk mengambil
                        air minum. Terbayang di benak Sofyan betapa pentingnya
                        memberi pemahaman Migrasi Aman bagi calon Pekerja Migran
                        Indonesia (PMI) di Pekon Ambarawa dan sekitarnya agar
                        terhindar dari jangkauan calo-calo kotor yang ingin
                        memanfaatkan situasi. Sekaligus ajang silaturahmi dan
                        berbagi informasi di antara para PMI purna agar
                        pengalaman pahit yang mereka rasakan tidak terulang pada
                        generasi berikutnya. Sofyan tersadarkan dari lamunannya
                        saat Indah kembali ke ruang tamu sambil membawa
                        secangkir kopi panas, yang tentu bisa menghangatkan
                        suasana.
                      </p>
                      <p>
                        Sofyan lalu bercerita kepada Indah, bahwa ia dan timnya
                        akan menyelenggarakan kegiatan pertemuan Sosialisasi
                        Migrasi Aman kepada para Calon PMI di Balai Pekon
                        Ambarawa dan akan mengundang para pemangku kepentingan
                        mulai dari aparat Pekon, camat, hingga Dinas Tenaga
                        Kerja Kabupaten Pringsewu, untuk bahu membahu memberi
                        pemahaman tata cara bekerja keluar negeri secara aman,
                        memudahkan urusan administrasi secara terbuka, dan
                        melindungi para pekerja migran di luar negeri dengan
                        terus memantau melalui nomor-nomor telepon yang bisa
                        dihubungi.
                      </p>
                      <p>
                        Indah menyambut gembira rencana kegiatan itu. Ia
                        berjanji akan hadir dan mengajak teman-teman PMI purna
                        lainnya agar juga bisa berbagai pengalaman suka duka PMI
                        kepada para calon PMI dari Pekon Ambarawa dan
                        sekitarnya.*
                      </p>
                    </div>
                  </div>
                </div>
                {/* bottom gallery */}
                <div className="grid grid-cols-4 pb-28">
                  {images.map((image) => {
                    return (
                      <div className="group relative flex-1 cursor-pointer">
                        <div className="pt-[100%]">
                          <div
                            className="absolute inset-0 bg-neutral-100 bg-cover bg-center"
                            style={{ backgroundImage: `url(${image})` }}
                          ></div>
                        </div>
                        <div className="group:hover: absolute inset-0 bg-main bg-opacity-70 opacity-0 transition-all duration-300 group-hover:opacity-100">
                          <div className="flex h-full w-full">
                            <svg
                              viewBox="0 0 45.52 45.71"
                              xmlns="http://www.w3.org/2000/svg"
                              className="mx-auto my-auto h-10 w-10"
                            >
                              <path
                                d="m40.76 45.71-11.34-11.34c-.65-.65-.65-1.7 0-2.35 0 0 .02-.02.03-.02l-3.82-3.82c-2.79 2.22-6.22 3.43-9.83 3.43-4.17 0-8.1-1.61-11.07-4.53-6.22-6.1-6.31-16.13-.21-22.35 2.96-3.01 6.91-4.69 11.13-4.73s8.2 1.57 11.22 4.52c3.01 2.96 4.69 6.91 4.73 11.13.03 3.75-1.23 7.32-3.6 10.18l3.8 3.8s.02-.02.02-.03c.65-.65 1.7-.65 2.35 0l11.34 11.34-4.76 4.76zm-24.96-42.38c-3.23 0-6.46 1.25-8.9 3.73-4.82 4.91-4.75 12.82.16 17.64 2.35 2.3 5.45 3.57 8.74 3.57s6.39-1.27 8.74-3.57l.12-.12s.03-.03.04-.04c2.33-2.38 3.6-5.52 3.57-8.85s-1.36-6.45-3.74-8.79c-2.42-2.38-5.58-3.57-8.74-3.57z"
                                fill="#fff"
                              />
                            </svg>
                          </div>
                          <div className="h-8 bg-main-dark"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* footer */}

                <div className="w-full border-t border-neutral-700 py-16">
                  <div className="mx-auto flex max-w-screen-md items-end gap-20  ">
                    <div className="flex-1">
                      <div
                        className="cursor-pointer text-right font-semibold uppercase"
                        onClick={() => window.fullpage_api.moveTo("gallery")}
                      >
                        <div className="color-neutral-700 mb-1 whitespace-nowrap pl-6 leading-5 tracking-widest">
                          Previous <br />
                          Story
                        </div>
                        <div className="flex items-center">
                          <div className="border-y-8 border-l-0 border-r-8 border-solid border-y-transparent border-r-neutral-700"></div>
                          <div className="h-0.5 w-full flex-grow-0 bg-neutral-600"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div
                        className="cursor-pointer text-center font-semibold uppercase"
                        onClick={() => {
                          closeModal();
                          window.fullpage_api.moveTo("gallery");
                        }}
                      >
                        <div className="color-neutral-700 mb-1 whitespace-nowrap px-3 leading-5 tracking-widest">
                          Gallery
                        </div>
                        <div className="mb-2 mt-2 flex flex-col items-center">
                          <div class="border-x-8 border-b-8 border-t-0 border-solid border-x-transparent border-b-neutral-700"></div>
                          <div className="h-0.5 w-full flex-grow-0 bg-neutral-700"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="cursor-pointer text-left font-semibold uppercase">
                        <div className="color-neutral-700 mb-1 whitespace-nowrap pr-6 leading-5 tracking-widest">
                          Next <br />
                          Story
                        </div>
                        <div className="flex items-center">
                          <div className="h-0.5 w-full flex-grow-0 bg-neutral-700"></div>
                          <div className="border-y-8 border-l-8 border-r-0 border-solid border-y-transparent border-l-neutral-700"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {/* </Fade> */}
    </div>
  );
}
