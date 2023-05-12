import React from "react";
import "../index.css";
import Header from "../components/header3";
import Footer from "../components/footer";
import Intermiten from "../images/intermiten judul.png";
import AInter from "../images/apa itu intermiten.png";
import SayurBuah from "../images/sayur buah.png";
import Karbo from "../images/karbo.png";
import Protein from "../images/protein.png";
import Benefit from "../images/benefits 1.png";
import InterMakanan from "../images/inter makanan.png";
import TdkInter from "../images/makanan tdk inter.png";
import Lampu from "../images/lightbulb 1.png";
import SakitInter from "../images/sakit inter.png";

function dietintermiten() {
  return (
    <div className="overflow-x-hidden w-screen h-screen bg-white2">
      <section className="h-[530px] relative">
        <img
          className="absolute w-screen h-max opacity-90"
          src={Intermiten}
          alt=""
        />
        <Header />
        <div className="relative">
          <h1 class="text-[105px] text-grey drop-shadow-lg font-bold mt-[100px] mx-[80px]">
            DIET INTERMITEN
          </h1>
        </div>
      </section>

      <section class=" text-white relative min-w-full overflow-x-hidden">
        <div class="absolute w-max top-0 right-0">
          <img class="bg-cover w-screen h-[1070px]" src={AInter} alt="" />
        </div>
        <div class="bg-pink w-[500px] h-[90px] text-center mt-10 rounded-r-[20px] text-[30px] font-serif drop-shadow-lg">
          <h1 class="py-[25px] drop-shadow-lg">Apa itu Diet Intermiten?</h1>
        </div>
        <div class="py-[50px] pb-[50px] ml-10 text-justify w-[770px] ">
          <p class="text-[28px] text-justify font-Poppins drop-shadow-lg text-black">
            Diet Intermiten adalah pola makan yang melibatkan siklus antara
            periode puasa atau pengurangan asupan kalori dengan periode makan
            normal. Dalam diet ini, Anda mengonsumsi makanan selama jangka waktu
            tertentu (periode makan) dan kemudian menghindari makanan atau
            membatasi asupan kalori selama periode waktu tertentu yang dijuluki
            sebagai periode puasa. Jangka waktu puasa yang umumnya diterapkan
            dalam program intermittent fasting adalah 12 sampai dengan 40 jam.
            Tapi pada umumnya dilakukan dalam waktu 16 jam berpuasa, dan 8 jam
            untuk mengkonsumsi makanan.
            <br /> <br />
            Diet Intermiten berbeda dengan metode diet lainnya yang perlu
            membatasi atau mengurangi konsumsi makanan tertentu. Metode diet ini
            membolehkan Anda untuk mengonsumsi makanan sehat dengan porsi normal
            setelah berpuasa selama kurun waktu tertentu. Anda juga dipersilakan
            untuk mengonsumsi air putih atau minuman bebas kalori lainnya saat
            sedang berpuasa pada metode intermittent fasting.
          </p>
        </div>
      </section>

      <section class="bg-white relative py-12">
        <div class="bg-pink w-[600px] h-[90px] text-center rounded-r-[20px] font-Poppins drop-shadow-lg font-medium">
          <h1 class="py-[25px] drop-shadow-lg text-[30px] text-white">
            Apa saja asupan yang harus dikendalikan?
          </h1>
        </div>

        <div class="mt-[80px] ml-[200px] flex">
          <div class=" mr-14">
            <img class="drop-shadow-lg" src={SayurBuah} alt="" />
            <div class="my-5 text-center">
              <h1 class="text-[28px] font-Poppins font-bold drop-shadow-lg">
                Fruits
              </h1>
            </div>
          </div>

          <div class="mx-[60px] flex">
            <div>
              <img class="drop-shadow-lg" src={Karbo} alt="" />
              <div class="my-5 text-center">
                <h1 class="text-[28px] font-Poppins font-semibold drop-shadow-lg">
                  Karbohidrat
                </h1>
              </div>
            </div>

            <div class="mx-32">
              <img class="drop-shadow-lg" src={Protein} alt="" />
              <div class="my-5 text-center">
                <h1 class="text-[28px] font-Poppins font-semibold drop-shadow-lg">
                  Lean Protein
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-[80px] bg-grey relative">
        <div class="bg-pink w-[400px] h-[90px] text-center rounded-r-[20px] font-Poppins drop-shadow-lg font-medium">
          <h1 class="py-[25px] drop-shadow-lg text-[28px] text-white">
            Tujuan & Manfaat
          </h1>
        </div>

        <div class="py-16 mx-12 font-medium">
          <p class="text-[28px] text-justify drop-shadow-lg">
            Tujuan dari diet intermiten adalah membantu menurunkan berat badan,
            meningkatkan kesehatan jantung, meningkatkan sensitivitas insulin,
            dan meningkatkan metabolisme tubuh.
          </p>

          <p class="text-[28px] mt-10 text-justify drop-shadow-lg">
            Berikut adalah beberapa manfaat dari diet intermiten yang telah
            didukung oleh penelitian:
            <br /> <br />
            1. Menurunkan berat badan: Dalam beberapa studi, diet intermiten
            telah terbukti efektif dalam menurunkan berat badan dan lemak tubuh
            tanpa kehilangan massa otot.
            <br /> <br />
            2. Meningkatkan kesehatan jantung: Diet intermiten telah terbukti
            meningkatkan kadar kolesterol dan tekanan darah, yang merupakan
            faktor risiko utama untuk penyakit jantung.
            <br /> <br />
            3. Meningkatkan sensitivitas insulin: Diet intermiten telah terbukti
            meningkatkan sensitivitas insulin dan mengurangi risiko diabetes
            tipe 2.
            <br /> <br />
            4. Meningkatkan metabolisme: Diet intermiten dapat meningkatkan laju
            metabolisme tubuh dan membantu membakar lebih banyak kalori.
            <br /> <br />
            Namun, sebelum mencoba diet intermiten, penting untuk berkonsultasi
            dengan dokter atau ahli gizi untuk memastikan bahwa diet ini aman
            dan sesuai dengan kebutuhan Anda. Efek samping seperti sakit kepala,
            lelah, atau iritasi lambung juga mungkin terjadi pada beberapa orang
            yang menjalankan diet intermiten.
          </p>
          <div class="absolute right-0 top-[320px] overflow-x-hidden">
            <img
              class="grayscale bg-cover w-max h-max brightness-125 opacity-40"
              src={Benefit}
              alt=""
            />
          </div>
        </div>
      </section>

      <section class="relative pt-10 ">
        <div class="absolute top-0">
          <img class="bg-cover w-screen" src={InterMakanan} alt="" />
        </div>
        <div class="bg-pink w-[420px] h-[90px] text-center rounded-r-[20px] font-Poppins drop-shadow-lg font-medium">
          <h1 class="py-[25px] drop-shadow-lg text-[28px] text-white">
            Makanan yang disarankan
          </h1>
        </div>

        <div class="py-[70px] pb-28 left-14 w-[820px] text-justify  relative">
          <p class="text-[28px] text-justify drop-shadow-lg font-medium font-Poppins">
            1. Sayuran dan buah-buahan: Sayuran dan buah-buahan adalah sumber
            serat, vitamin, dan mineral yang penting untuk kesehatan tubuh.
            <br /> <br />
            2. Protein: Protein membantu membangun dan memperbaiki jaringan
            tubuh dan mempercepat proses pemulihan setelah latihan fisik. Pilih
            sumber protein yang sehat, seperti daging tanpa lemak, ikan, telur,
            dan tahu.
            <br /> <br />
            3. Karbohidrat kompleks: Karbohidrat kompleks, seperti nasi merah,
            kentang, dan biji-bijian utuh, memberikan energi tahan lama dan
            membantu menjaga kenyang lebih lama.
            <br /> <br />
            4. Lemak sehat: Lemak sehat, seperti minyak zaitun, alpukat, dan
            kacang-kacangan, membantu menjaga kesehatan jantung dan membantu
            penyerapan nutrisi.
          </p>
        </div>
      </section>

      <section class="relative w-screen bg-pink h-screen">
        <img class="bg-cover absolute top-0 h-[1500px]" src={TdkInter} alt="" />

        <div class="bg-mermud absolute my-5 top-10 right-0 w-[850px] h-[90px]  text-center rounded-l-2xl font-Poppins drop-shadow-lg font-medium">
          <h1 class="py-[25px] drop-shadow-lg text-[28px] text-white">
            Makanan yang tidak disarankan
          </h1>
        </div>
        <div class="text-start relative justify-start ml-[700px] w-[800px] pt-[200px] pb-24">
          <p class="text-[30px] text-justify">
            1. Makanan tinggi gula dan karbohidrat: Makanan yang mengandung
            banyak gula dan karbohidrat dapat memicu lonjakan kadar gula darah
            dan menyebabkan Anda merasa lapar lebih cepat. Oleh karena itu,
            sebaiknya hindari makanan seperti permen, kue, roti putih, pasta,
            dan nasi putih.
            <br /> <br />
            2. Makanan olahan: Makanan yang diolah dan mengandung banyak bahan
            kimia, pengawet, dan bahan tambahan lainnya dapat mempengaruhi
            kesehatan dan kinerja sistem pencernaan Anda. Sebaiknya pilih
            makanan segar dan minim olahan.
            <br /> <br />
            3. Minuman bersoda dan minuman beralkohol: Minuman yang mengandung
            banyak gula dan karbohidrat seperti minuman bersoda, sirup, dan
            minuman beralkohol sebaiknya dihindari dalam diet intermiten.
            <br /> <br />
            4. Makanan cepat saji: Makanan cepat saji umumnya tinggi lemak,
            gula, dan kalori, serta rendah nutrisi. Sebaiknya hindari makanan
            cepat saji dalam diet intermiten.
            <br /> <br />
            5. Camilan yang tidak sehat: Camilan yang mengandung banyak gula,
            garam, dan bahan pengawet tidak baik untuk kesehatan dan dapat
            memicu kenaikan berat badan. Sebaiknya pilih camilan sehat seperti
            buah-buahan, kacang-kacangan, atau yoghurt rendah lemak.
          </p>
        </div>
      </section>

      <section class="py-[80px] bg-grey relative">
        <div class="bg-pink w-[600px] h-[90px] text-center rounded-r-[20px] font-Poppins drop-shadow-lg font-medium">
          <h1 class="py-[25px] drop-shadow-lg text-[28px] text-white">
            Tips dalam menjalani Diet Intermiten
          </h1>
        </div>

        <div class="absolute right-0 top-[350px] overflow-x-hidden">
          <img
            class=" bg-cover w-max h-max filter opacity-20"
            src={Lampu}
            alt=""
          />
        </div>

        <div class="py-12 font-medium mx-10">
          <p class="text-[35px] mt-10 font-Poppins text-justify drop-shadow-lg text-black">
            Berikut adalah beberapa tips atau metode yang dapat membantu dalam
            menjalankan diet intermiten:
            <br /> <br />
            1. Pilih jenis diet intermiten yang sesuai dengan kebutuhan Anda:
            Ada berbagai jenis diet intermiten, seperti puasa intermiten, metode
            5:2, dan metode 16/8. Pilih jenis diet intermiten yang sesuai dengan
            kebutuhan Anda dan kemampuan untuk memenuhi kebutuhan nutrisi Anda.
            <br /> <br />
            2. Tetap terhidrasi: Meskipun Anda mungkin puasa untuk beberapa
            waktu, penting untuk tetap terhidrasi dengan minum air yang cukup
            sepanjang hari.
            <br /> <br />
            3. Konsumsi makanan yang sehat dan bergizi: Meskipun Anda mungkin
            makan dalam jumlah yang lebih sedikit, pastikan makanan yang Anda
            konsumsi sehat dan bergizi untuk memenuhi kebutuhan nutrisi tubuh
            Anda.
            <br /> <br />
            4. Atur jadwal makan Anda: Jadwalkan waktu makan Anda dan pastikan
            Anda makan pada jam yang sama setiap hari. Ini dapat membantu
            mengontrol nafsu makan Anda dan membuat Anda tetap merasa kenyang.
            <br /> <br />
            5. Tambahkan latihan fisik: Kombinasikan diet intermiten dengan
            latihan fisik yang teratur untuk memaksimalkan hasilnya dan membantu
            menjaga kesehatan jantung dan metabolisme tubuh.
            <br /> <br />
            Namun, penting untuk diingat bahwa diet intermiten tidak sesuai
            untuk semua orang dan dapat berisiko bagi beberapa orang, seperti
            mereka yang memiliki masalah kesehatan tertentu atau wanita hamil
            atau menyusui. Selalu konsultasikan dengan dokter atau ahli gizi
            sebelum mencoba diet intermiten.
          </p>
        </div>
      </section>

      <section class="relative">
        <img class="grayscale h-[1450px]" src={SakitInter} alt="" />

        <div class="bg-merah absolute top-8 rounded-[25px] right-9 w-[850px] text-center h-[100px] drop-shadow-lg">
          <h1 class="text-white text-[30px] py-7">
            Potensi Risiko yang perlu diperhatikan
          </h1>
        </div>

        <div class="my-10 absolute right-12 ml-[670px] text-justify top-[120px] ">
          <p class="text-[29px] font-Poppins font-medium text-merah drop-shadow-lg">
            Diet intermiten dapat memiliki beberapa risiko potensial, tergantung
            pada jenis diet dan cara pelaksanaannya. Beberapa risiko yang dapat
            terjadi meliputi:
            <br /> <br />
            1. Kekurangan nutrisi: Jika tidak dilakukan dengan benar, diet
            intermiten dapat menyebabkan kekurangan nutrisi, terutama jika
            seseorang membatasi asupan makanan secara signifikan.
            <br /> <br />
            2. Penurunan berat badan yang berlebihan: Jika tidak dilakukan
            dengan benar, diet intermiten dapat menyebabkan penurunan berat
            badan yang berlebihan dan tidak sehat.
            <br /> <br />
            3. Masalah pencernaan: Diet intermiten yang melibatkan puasa dapat
            menyebabkan masalah pencernaan, seperti sembelit atau diare.
            <br /> <br />
            4. Masalah kesehatan mental: Beberapa orang dapat mengalami masalah
            kesehatan mental, seperti kecemasan atau depresi, ketika mengikuti
            diet intermiten.
            <br /> <br />
            5. Efek samping dari puasa: Puasa dapat menyebabkan dehidrasi, sakit
            kepala, lelah, dan ketidaknyamanan lainnya.
            <br /> <br />
            Sebelum memulai diet intermiten, sangat penting untuk berkonsultasi
            dengan dokter atau ahli gizi terlebih dahulu untuk memastikan aman
            dan cocok bagi kesehatan individu.
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

export default dietintermiten;
