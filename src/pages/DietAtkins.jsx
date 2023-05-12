import React from "react";
import "../index.css";
import Header from "../components/header3";
import Footer from "../components/footer";
import Rectangle from "../images/Rectangle 14.png";
import Karbo from "../images/karbo.png";
import Protein from "../images/protein.png";
import Sayur from "../images/high fiber vegetables..png";
import HFats from "../images/Healthy Fats.png";
import Benefits from "../images/benefits 1.png";
import MakananAtkins from "../images/makanan Atkins.png";
import TdkAtkins from "../images/atkins X.png";
import Lampu from "../images/lightbulb 1.png";
import SakitAtkins from "../images/sakit atkins.png";
import Judul from "../images/atkins.png";

function dietatkins() {
  return (
    <div className="overflow-x-hidden w-screen h-screen bg-white2">
      <section className="h-[530px] relative">
        <img className="absolute" src={Judul} alt="" />
        <Header />
        <div className="relative">
          <h1 class="text-atkins text-[100px] font-bold mt-[125px] mx-[80px]">
            DIET ATKINS
          </h1>
        </div>
      </section>

      <section className="bg-grey text-white relative min-w-full overflow-x-hidden">
        <div className="bg-blue w-[300px] h-[90px] text-center mt-10 rounded-r-[20px] text-[30px] font-serif drop-shadow-lg">
          <h1 className="py-[25px] drop-shadow-lg">Apa itu Diet Atkins?</h1>
        </div>
        <div className="py-[60px] ml-10 pr-[10px] flex">
          <p className="text-[28px] text-justify drop-shadow-lg">
            Diet Atkins merupakan salah satu jenis diet yang diyakini mampu
            menurunkan berat <br />
            badan dengan mengendalikan asupan zat-zat tertentu yang bisa
            mempengaruhi berat <br />
            badan. Diet Atkins ini diciptakan oleh ahli jantung Robert Atkins
            pada tahun 1960-an.
          </p>

          <div className="absolute top-0 right-0">
            <img
              className="h-[376px] w-[400px] bg-cover grayscale"
              src={Rectangle}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="bg-white relative py-12">
        <div className="bg-blue w-[600px] h-[90px] text-center rounded-r-[20px] font-Poppins drop-shadow-lg font-medium">
          <h1 className="py-[25px] drop-shadow-lg text-[30px] text-white">
            Apa saja asupan yang harus dikendalikan?
          </h1>
        </div>

        <div className="mt-[80px] ml-[50px] flex">
          <div>
            <img className="drop-shadow-lg" src={Karbo} alt="" />
            <div className="my-5 text-center">
              <h1 className="text-[28px] font-Poppins font-semibold drop-shadow-lg">
                Karbohidrat
              </h1>
            </div>
          </div>

          <div className="mx-14">
            <img className="drop-shadow-lg" src={Protein} alt="" />
            <div className="my-5 text-center">
              <h1 className="text-[28px] font-Poppins font-semibold drop-shadow-lg">
                Lean Protein
              </h1>
            </div>
          </div>

          <div className="">
            <img className="drop-shadow-lg" src={Sayur} alt="" />
            <div className="my-5 text-center">
              <h1 className="text-[28px] font-Poppins font-semibold drop-shadow-lg">
                High Fiber Vegetables
              </h1>
            </div>
          </div>

          <div className="mx-14">
            <img className="drop-shadow-lg" src={HFats} alt="" />
            <div className="my-5 text-center">
              <h1 className="text-[28px] font-Poppins font-semibold drop-shadow-lg">
                Healthy Fat
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[260px] relative">
        <div className="bg-blue w-[500px] h-[90px] text-center rounded-r-[20px] font-Poppins drop-shadow-lg font-medium">
          <h1 className="py-[25px] drop-shadow-lg text-[28px] text-white">
            Fase - Fase pada Diet Atkins
          </h1>
        </div>

        <div className="absolute right-12 top-12 ml-[600px]">
          <p className="text-[30px] font-medium font-Poppins text-justify drop-shadow-lg">
            1. Fase pertama, yang disebut fase Induksi, adalah fase paling ketat
            di mana karbohidrat sangat dibatasi dan hanya boleh mengonsumsi 20
            gram karbohidrat per hari. <br />
            <br />
            2. Fase berikutnya, fase Pelangsingan, menambahkan sedikit lebih
            banyak karbohidrat setiap minggu dan bertujuan untuk mencapai berat
            badan yang diinginkan. <br />
            <br />
            3. Fase Pre-Pemeliharaan dan Pemeliharaan memperkenalkan lebih
            banyak karbohidrat ke dalam diet, tetapi tetap menghindari
            karbohidrat sederhana seperti gula dan tepung.
          </p>
        </div>
      </section>

      <section className="py-[80px] bg-grey relative">
        <div className="bg-blue w-[400px] h-[90px] text-center rounded-r-[20px] font-Poppins drop-shadow-lg font-medium">
          <h1 className="py-[25px] drop-shadow-lg text-[28px] text-white">
            Tujuan & Manfaat
          </h1>
        </div>

        <div className="py-16 mx-12 font-medium">
          <p className="text-[28px] text-justify drop-shadow-lg">
            Tujuan dari Diet Atkins ini adalah mengubah metabolisme tubuh anda
            saat membakar lemak tubuh yang tersimpan, bukan untuk karbohidrat
            melainkan untuk energi. Namun Tujuan yang sebenarnya tentunya untuk
            membantu seseorang menurunkan berat badannya dengan cepat dan
            efektif. Dengan membatasi karbohidrat, tubuh dipaksa untuk membakar
            lemak sebagai sumber energi, yang dapat membantu mengurangi lemak
            tubuh.
          </p>

          <p className="text-[28px] mt-10 text-justify drop-shadow-lg">
            Manfaat Diet Atkins: <br />
            1. Menurunkan berat badan: Diet Atkins mengurangi asupan karbohidrat
            dan meningkatkan asupan protein dan lemak, sehingga dapat membantu
            menurunkan berat badan. <br />
            <br />
            2. Meningkatkan kesehatan jantung: Diet Atkins dapat membantu
            meningkatkan kesehatan jantung dengan mengurangi konsumsi
            karbohidrat sederhana dan menekankan pada makanan yang kaya akan
            lemak sehat, seperti lemak tak jenuh. <br />
            <br />
            3. Meningkatkan kontrol gula darah: Diet Atkins dapat membantu
            meningkatkan kontrol gula darah dengan mengurangi konsumsi
            karbohidrat sederhana yang cepat dicerna dan menekankan pada
            konsumsi serat, protein, dan lemak. <br />
            <br />
            4. Meningkatkan tingkat energi: Diet Atkins menekankan pada konsumsi
            protein dan lemak dalam jumlah yang cukup, sehingga dapat membantu
            meningkatkan tingkat energi. <br />
            <br />
            Selain itu, beberapa penelitian telah menunjukkan bahwa diet rendah
            karbohidrat seperti Atkins dapat membantu meningkatkan kadar
            kolesterol dan mengurangi risiko diabetes. Namun, seperti dengan
            setiap program diet, penting untuk berkonsultasi dengan dokter atau
            ahli gizi sebelum memulai program ini dan memastikan bahwa diet ini
            cocok dengan kebutuhan individu.
          </p>
          <div className="absolute right-0 top-[320px] overflow-x-hidden">
            <img
              className="grayscale bg-cover w-max h-max brightness-125 opacity-40"
              src={Benefits}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="relative pt-10 ">
        <div className="absolute top-0">
          <img className="bg-cover w-screen" src={MakananAtkins} alt="" />
        </div>
        <div className="bg-blue w-[420px] h-[90px] text-center rounded-r-[20px] font-Poppins drop-shadow-lg font-medium">
          <h1 className="py-[25px] drop-shadow-lg text-[28px] text-white">
            Makanan yang disarankan
          </h1>
        </div>

        <div className="py-14 mx-10 w-[580px] font-Poppins relative">
          <p className="text-[29px] text-justify drop-shadow-lg font-medium">
            1. Daging tanpa lemak seperti daging sapi, ayam, kalkun, dan ikan
            <br /> <br />
            2. Telur
            <br /> <br />
            3. Sayuran hijau seperti bayam, brokoli, selada, dan kubis
            <br /> <br />
            4. Buah-buahan rendah gula seperti alpukat, berry, dan jeruk nipis
            <br /> <br />
            5. Kacang-kacangan seperti kacang almond, kacang kenari, dan kacang
            pistachio
          </p>
        </div>
      </section>

      <section className="relative pt-16 bg-pink h-[900px]">
        <img
          className="bg-cover absolute top-0 h-[900px]"
          src={TdkAtkins}
          alt=""
        />

        <div className="bg-mermud w-[420px] h-[90px] ml-[815px] text-center rounded-r-[20px] font-Poppins drop-shadow-lg font-medium">
          <h1 className="py-[25px] drop-shadow-lg text-[28px] text-white">
            Makanan yang tidak disarankan
          </h1>
        </div>
        <div className="text-start justify-start ml-[820px] pt-[60px] ">
          <p className="text-[30px]">
            1. Roti, pasta, dan nasi
            <br /> <br />
            2. Gula, permen, dan coklat
            <br /> <br />
            3. Minuman manis seperti soda dan minuman olahraga
            <br /> <br />
            4. Buah-buahan yang kaya gula seperti pisang dan anggur
            <br /> <br />
            5. Produk tepung seperti keripik, kue, dan roti goreng
          </p>
        </div>
      </section>

      <section className="py-[80px] bg-grey relative">
        <div className="bg-blue w-[450px] h-[90px] text-center rounded-r-[20px] font-Poppins drop-shadow-lg font-medium">
          <h1 className="py-[25px] drop-shadow-lg text-[28px] text-white">
            Tips dalam menjalani Diet Atkins
          </h1>
        </div>
        <div className="absolute right-0 top-[350px] overflow-x-hidden">
          <img
            className=" bg-cover w-max h-max filter opacity-20"
            src={Lampu}
            alt=""
          />
        </div>

        <div className="py-12 font-medium mx-10">
          <p className="text-[35px] mt-10 font-Poppins text-justify drop-shadow-lg text-black">
            1. Persiapkan diri Anda: Sebelum memulai program diet Atkins,
            pastikan Anda mempersiapkan diri dengan mempelajari aturan diet ini,
            membuat rencana makan, dan mempersiapkan makanan yang sesuai dengan
            aturan diet.
            <br /> <br />
            2. Perhatikan jumlah karbohidrat: Penting untuk memperhatikan jumlah
            karbohidrat yang Anda konsumsi setiap hari. Fase Induksi dari diet
            Atkins hanya mengizinkan 20 gram karbohidrat per hari, jadi pastikan
            untuk membaca label nutrisi pada makanan dan menghitung jumlah
            karbohidrat yang Anda konsumsi.
            <br /> <br />
            3. Pilih makanan yang tepat: Pilih makanan yang tepat dan sesuai
            dengan aturan diet Atkins seperti daging tanpa lemak, ikan, sayuran
            hijau, dan kacang-kacangan.
            <br /> <br />
            4. Jangan takut lemak: Meskipun diet Atkins mendorong Anda untuk
            membatasi asupan karbohidrat, Anda harus mengonsumsi lemak sehat
            seperti minyak zaitun, kacang-kacangan, dan ikan berlemak.
            <br /> <br />
            5. Perhatikan asupan air: Pastikan untuk mengonsumsi cukup air
            setiap hari untuk membantu tubuh menghilangkan racun dan menjaga
            keseimbangan elektrolit.
            <br /> <br />
            6. Lakukan olahraga secara teratur: Olahraga dapat membantu
            meningkatkan metabolisme dan membantu pembakaran lemak, sehingga
            dapat membantu Anda mencapai hasil yang lebih baik dalam diet
            Atkins.
            <br /> <br />
            7. Jangan terlalu keras pada diri sendiri: Ingatlah bahwa setiap
            orang berbeda dan hasil yang dicapai dalam diet ini mungkin
            berbeda-beda. Jangan terlalu keras pada diri sendiri dan beri diri
            Anda waktu yang cukup untuk beradaptasi dengan program diet ini.
          </p>
        </div>
      </section>

      <section className="relative">
        <img className="grayscale h-[1700px]" src={SakitAtkins} alt="" />

        <div className="bg-merah absolute top-14 rounded-[25px] right-16 w-[800px] text-center h-[100px] drop-shadow-lg">
          <h1 className="text-white text-[30px] py-7">
            Potensi Risiko yang perlu diperhatikan
          </h1>
        </div>

        <div className="my-10 absolute right-16 ml-[670px] text-justify top-[150px]">
          <p className="text-[30px] font-Poppins font-medium text-merah drop-shadow-lg">
            1. Efek samping yang mungkin timbul: Beberapa efek samping yang
            dapat timbul selama menjalankan diet Atkins antara lain sembelit,
            sakit kepala, rasa lelah, kembung, dan sulit tidur.
            <br /> <br />
            2. Potensi meningkatkan risiko penyakit jantung: Diet Atkins yang
            tinggi lemak dan protein dapat meningkatkan risiko penyakit jantung
            pada beberapa orang, terutama jika diet tidak dilakukan dengan
            benar.
            <br /> <br />
            3. Kemungkinan kekurangan nutrisi: Menjalankan diet Atkins yang
            sangat rendah karbohidrat dapat menyebabkan kekurangan nutrisi
            tertentu, seperti serat, vitamin B, dan mineral tertentu.
            <br /> <br />
            4. Ketergantungan pada suplemen: Beberapa pendukung diet Atkins
            merekomendasikan konsumsi suplemen vitamin dan mineral untuk
            membantu mencukupi kebutuhan nutrisi, namun hal ini dapat
            memperbesar biaya dan terkadang tidak selalu diperlukan.
            <br /> <br />
            5. Tidak cocok untuk semua orang: Diet Atkins mungkin tidak cocok
            untuk semua orang, terutama mereka yang memiliki kondisi kesehatan
            tertentu, seperti diabetes atau masalah ginjal.
            <br /> <br />
            Penting untuk selalu berkonsultasi dengan dokter atau ahli gizi
            sebelum memulai diet apa pun, termasuk diet Atkins, terutama jika
            Anda memiliki kondisi kesehatan tertentu atau sedang mengonsumsi
            obat-obatan tertentu.
          </p>
        </div>
        <hr className="w-screen mx-auto bg-black dark:bg-black h-[1px] border-0" />
        <div className="mt-[100px]">
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default dietatkins;
