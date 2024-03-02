import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import concave from "images/concave.webp";
import introImg from "images/intro.webp";
import ScrollArrow from "components/ScrollArrow";
import { Fade } from "react-awesome-reveal";
import SafTitle from "components/SafTitle";
import { AppContext } from "context/AppContext";
import ReactMarkdown from "react-markdown";

// import sample from "locales/test.md";

export default function Intro() {
  const { t, i18n, ready } = useTranslation();
  const { windowSize } = useContext(AppContext);
  // const [sampleText, setSampleText] = useState("");
  // useEffect(() => {
  //   fetch(sample)
  //     .then((res) => res.text())
  //     .then((text) => setSampleText(text));
  // }, []);
  return (
    <div className="section">
      <div className="relative flex  min-h-screen flex-col overflow-x-hidden  md:flex-row">
        <div
          className="absolute right-0 top-0 -z-10 hidden h-36 w-36 bg-contain md:block lg:h-64 lg:w-64"
          style={{
            backgroundImage: `url(${require("images/closing-concave.webp")}`,
          }}
        ></div>
        <div className="absolute right-0 top-0 z-10 h-full w-4 bg-main md:w-6 lg:w-10"></div>
        <div className="absolute bottom-28 right-0 z-10 h-2/5 w-6 bg-main-dark md:w-8 lg:w-[60px]"></div>

        <div className="flex-grow pb-12">
          <div className="py-16 pl-4 text-left lg:pl-16">
            <SafTitle color="dark" maxWidth={340} className={`mr-4 md:mr-36 lg:mr-64`} />
            <Fade cascade delay={900} triggerOnce={true}>
              <div className="max-w-prosex mr-8 mt-14 max-w-3xl md:mr-12 lg:mr-14">
                {i18n.language === "en" && (
                  <div>
                    <h3 className="mb-8 text-center text-3xl font-bold">PENGANTAR</h3>
                    <p>Ada pepatah yang mengatakan bahwa ketika seluruh dunia diam, satu suara pun bisa menjadi sangat kuat.</p>
                    <p>Ada 19 kisah yang didokumentasikan di sini. Kisah-kisah tersebut bersifat pribadi namun berbicara banyak. Mereka lebih dari sekedar cerita; mereka berbicara tentang perubahan yang dihasilkan oleh Program Safe and Fair (SAF): Realizing Women Migrant Workers’ Rights and Opportunities in the ASEAN Region yang telah membawa perubahan dalam kehidupan para penulis.</p>
                    <p>Para penulis cerita adalah bagian dari komunitas yang terdampak oleh program ini, yang berjalan mengikuti narasi dan kisah-kisah non-linear yang penuh dengan tantangan dan perubahan yang tak terduga. Komunitas-komunitas ini berasal dari lima wilayah di Indonesia, yaitu Yayasan Sapa di Bandung, WCC Mawar Balqis di Cirebon, Koalisi Perempuan Indonesia di Jawa Timur, Perkumpulan Damar di Lampung, dan Yayasan Embun Pelangi di Batam.</p>
                    <p>Ketika program ini dimulai, dunia dilanda pandemi COVID-19. UN Women segera menyesuaikan dan menyelaraskan kembali programnya untuk mendukung para mitra dalam mengarahkan respons yang memenuhi kebutuhan mendesak perempuan dan anak perempuan. Selama masa-masa ini, kami juga terus mendukung pekerja migran perempuan Indonesia dan memastikan perlindungan hak asasi mereka. Inisiatif-inisiatif tersebut juga akan tercermin dalam kompilasi cerita ini.</p>
                    <p>UN Women meyakini bahwa rancangan Program SAF memenuhi kebutuhan perempuan pekerja migran. Kami memberikan dukungan kepada lima (5) organisasi yang dipimpin perempuan dan Women Crisis Center untuk bekerja sama mengatasi kerentanan perempuan pekerja migran terhadap kekerasan dan perdagangan manusia dengan memperkuat layanan berkualitas yang responsif dan terkoordinasi. Kami juga percaya bahwa perubahan harus terjadi di tingkat komunitas. Itulah sebabnya inisiatif yang kami lakukan termasuk membangun pusat informasi dan layanan berbasis desa yang dijalankan dan dioperasikan oleh Pusat Krisis Perempuan dan organisasi perempuan. Tidak hanya itu, kami mendukung organisasi dan pemerintah desa untuk mengembangkan prosedur operasional standar untuk respons dan pencegahan kekerasan berbasis gender terhadap perempuan pekerja migran. Selain itu, kami juga membangun kapasitas dan meningkatkan perhatian dan advokasi pemerintah, penyedia layanan, dan komunitas tentang migrasi yang aman.</p>
                    <p>Perubahan dan hasil program ini tidak mungkin terjadi tanpa komitmen dan dukungan yang kuat dari pemerintah, baik di tingkat nasional maupun daerah. Kami menyaksikan komitmen dan dukungan yang tak pernah surut dari pemerintah untuk mewujudkan migrasi yang aman bagi perempuan. Selama pelaksanaan program, kami menyaksikan tantangan besar yang dialami oleh para perempuan pekerja migran dan mitra organisasi komunitas mereka. UN Women ingin memberikan ruang bagi suara mereka untuk didengar, bukan dalam bentuk dokumentasi proyek, namun dalam bentuk cerita. </p>
                    <p>Pada bulan September 2023, UN Women menyelenggarakan Lokakarya Penulisan Cerita Perubahan untuk mitra pelaksana dan masyarakat terdampak Program SAF. Kegiatan ini bertujuan untuk membangun dan memperkuat kapasitas peserta dengan keterampilan dan pengetahuan untuk menulis dan menceritakan kisah perubahan mereka sendiri.</p>
                    <p>Lokakarya ini mengumpulkan 19 cerita perubahan yang ditulis oleh para perempuan pekerja migran, komunitas sekitar yang mendapat manfaat dari Program SAF, dan mitra pelaksana. Mereka menggambarkan dampak Program SAF sebagaimana tercermin dan dituliskan dengan gaya bercerita dan penulisan masing-masing melalui sudut pandang dan pengalaman mereka. Dalam kumpulan cerita perubahan ini, Anda akan menemukan kisah-kisah tentang ketekunan, ketangguhan, dan transformasi; masing-masing merupakan bukti kekuatan dalam diri penulis. Kita juga dapat melihat bagaimana perubahan di tingkat komunitas dan individu melampaui apa yang direncanakan dan memengaruhi kehidupan mereka yang terlibat dan terkena dampak yang tidak terduga.</p>
                    <p>Kisah-kisah perubahan ini bukan akhir dari upaya yang dilakukan melalui Program SAF, namun sebuah undangan untuk menjaga dan melanjutkan perubahan-perubahan yang sudah dimulai. Mari terus mendukung inisiatif dan kerja-kerja di tingkat komunitas yang dilakukan oleh organisasi perempuan dan lembaga layanan berbasis komunitas untuk mencegah dan merespons kekerasan terhadap perempuan pekerja migran dan perdagangan orang. Semoga kisah-kisah perubahan ini menjadi inspirasi bagi perjalanan kita untuk terus membangun empati, pemberdayaan, dan perubahan transformatif untuk mengakhiri kekerasan terhadap perempuan pekerja migran.</p>
                    <p>
                      Jamshed M. Kazi
                      <br />
                      Representative and Liaison to ASEAN
                      <br />
                      UN Women Indonesia
                    </p>
                  </div>
                )}

                {i18n.language === "id" && (
                  <div>
                    <h3 className="mb-8 text-center text-3xl font-bold">FOREWORD</h3>
                    <p>There is a saying that even one voice becomes powerful when the whole world is silent. </p>
                    <p>The 19 stories documented here are powerful voices. They are personal but speak volumes. They are more than stories; they speak about changes that the Safe and Fair (SAF) Programme: Realizing the Rights and Opportunities of Women Migrant Workers in the ASEAN Region has brought into the storytellers' lives. </p>
                    <p>The storytellers are the members of communities impacted by the Programme. Even the Programme follows nonlinear narratives and stories, full of challenges and unexpected turns. These communities come from five regions in Indonesia: the Sapa Foundation in Bandung, WCC Mawar Balqis in Cirebon, the Indonesian Women's Coalition in East Java, the Damar Association in Lampung, and the Embun Pelangi Foundation in Batam.</p>
                    <p>When the Programme began, the world was hit by the COVID-19 pandemic. UN Women immediately adjusted and realigned its Programme to support partners in driving a response that meets the immediate needs of women and girls. During these times, we also continued to support Indonesian women migrant workers and safeguarded their human rights. Those initiatives are reflected in this compilation of stories. </p>
                    <p>UN Women believes the SAF Programme design caters to the needs of women migrant workers. We provide support to five (5) women-led organizations and the Women Crisis Centre to work together to address the vulnerability of women migrant workers to violence and trafficking by strengthening quality services that are responsive and coordinated. We also believe that changes should happen at the community level. That is why the initiatives include establishing village-based information and service centres run and operated by Women Crisis Centre and women's organizations. Not only that, we support the organizations and village government to develop standard operating procedures for response and prevention of gender-based violence against women migrant workers. Also, to build the capacity, awareness, and advocacy of government officials, service providers, and communities on safe migration.</p>
                    <p>The changes and the programme results could not be possible without strong commitment and buy-in from the government, both at the national and sub-national levels. We witness the steadfast support from the government and its continuous commitment to making safe migration for women a reality. During the course of the project implementation, we witnessed the immense challenges that the women migrant workers and their community partner organizations are experiencing. UN Women would like to provide space for their voices to be heard. Not in some project documentation, but in stories.</p>
                    <p>In September 2023, UN Women conducted a Story of Change Writing Workshop for implementing partners and affected communities of the SAF Programme. This activity aimed to build and strengthen the capacity of participants with the skills and knowledge to write and tell their own stories of change.</p>
                    <p>The workshop collected 19 stories of change written by women migrant workers, the surrounding communities affected by the SAF Programme, and implementing partners. They describe the Programme's impact as reflected and written by them in their personal storytelling and writing style through their lenses and experiences. In this collection of stories of change, you will find stories of perseverance, resilience, and transformation; each is a testament to the strength within the writer. We can also see how changes at the community and individual levels go beyond what was planned and affect the lives of those involved and affected unexpectedly. </p>
                    <p>These stories of change are certainly not the conclusion of the SAF programme but rather an invitation to maintain and continue the changes that have been started. Let’s extend our support to community-level initiatives and women-led organization works as well as community-based services to prevent and respond to violence against women migrant workers and trafficking.</p>
                    <p>May these stories of change catalyze our journey towards empathy, empowerment, and transformative change to end violence against women migrant workers.</p>
                    <p>
                      Jamshed M. Kazi
                      <br />
                      Representative and Liaison to ASEAN
                      <br />
                      UN Women Indonesia
                    </p>
                  </div>
                )}
              </div>
            </Fade>
          </div>
        </div>
        {/* <div className="flex flex-col bg-main text-white md:max-w-xs lg:max-w-md">
          <div className="overlay relative h-64 overflow-hidden bg-contain bg-center bg-no-repeat px-20 py-16 text-center">
            <img src={concave} alt="" className="absolute bottom-8 left-1/2 aspect-square h-[150%] w-auto max-w-[200%]" />
          </div>
          <div className="bg-main-dark">
            <div className="mx-4 flex gap-6  py-12 text-left lg:mx-16 lg:gap-8">
              <Fade cascade delay={windowSize?.width >= 768 ? 1300 : 0} damping={0.2} triggerOnce={true}>
                <div className="h-60 border-l border-white"></div>
                {i18n.language === "en" && (
                  <div>
                    <p>Maecenas sit amet mi ut mi vestibulum finibus.Proin tempor est consectetur, aliquet ipsum scelerisque, tempor quam.Nunc ipsum nulla, commodo tempor laoreet ut, scelerisque eu quam.Curabitur gravida, libero eget elementum sollicitudin, eros mauris aliquam nunc, vitae fermentum felis neque at velit.Mauris vestibulum rutrum nibh, vitae volutpat odio feugiat eget.Vestibulum iaculis lobortis egestas.Curabitur tincidunt viverra odio.In tempus molestie lorem, at efficitur tortor tincidunt vitae.In ultrices lobortis scelerisque.Integer a mollis dolor, vel pellentesque diam.</p>
                  </div>
                )}

                {i18n.language === "id" && (
                  <div>
                    <p>Maecenas sit amet mi ut mi vestibulum finibus.Proin tempor est consectetur, aliquet ipsum scelerisque, tempor quam.Nunc ipsum nulla, commodo tempor laoreet ut, scelerisque eu quam.Curabitur gravida, libero eget elementum sollicitudin, eros mauris aliquam nunc, vitae fermentum felis neque at velit.Mauris vestibulum rutrum nibh, vitae volutpat odio feugiat eget.Vestibulum iaculis lobortis egestas.Curabitur tincidunt viverra odio.In tempus molestie lorem, at efficitur tortor tincidunt vitae.In ultrices lobortis scelerisque.Integer a mollis dolor, vel pellentesque diam.</p>
                  </div>
                )}
              </Fade>
            </div>
          </div>
          <div className="mt-auto h-16 bg-main"></div>
        </div> */}
        <ScrollArrow />
      </div>
    </div>
  );
}
