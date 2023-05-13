import React from "react";
import "../index.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Medi from "../images/judul medi.png";
import ApaMedi from "../images/medi.png";
import Benefit from "../images/benefits 1.png";
import MakananMedi from "../images/apa itu Medi.png";
import TdkMedi from "../images/TidakMedi.png";
import Lampu from "../images/lightbulb 1.png";
import SakitMedi from "../images/sakit medi.png";

function dietmediterania() {
  return (
    <div className="overflow-x-hidden w-screen h-screen bg-white2">
      <section className="h-[530px] relative">
        <img className="absolute w-screen h-max" src={Medi} alt="" />
        <Header />
        <div className="relative">
          <h1 className="text-[100px] text-white text-center drop-shadow-lg font-bold mt-[100px]">
            ULTRA MEDITERANIA
          </h1>
        </div>
      </section>

      <section className=" text-white relative min-w-full overflow-x-hidden">
        <div className="absolute w-max top-0 right-0">
          <img className="bg-cover w-screen h-[588px]" src={ApaMedi} alt="" />
        </div>
        <div className="bg-medi w-[500px] h-[90px] text-center mt-10 rounded-r-[20px] text-[30px] font-serif drop-shadow-lg">
          <h1 className="py-[25px] drop-shadow-lg">
            Apa itu Diet Mediterania?
          </h1>
        </div>
        <div className="py-[30px] pb-[50px] ml-14 text-justify w-[770px] ">
          <p className="text-[28px] text-justify font-Poppins drop-shadow-lg text-white">
            Diet Mediterania adalah pola makan yang didasarkan pada makanan
            tradisional dari negara-negara di sekitar Laut Tengah seperti
            Italia, Spanyol, Yunani, dan Maroko. Pola makan ini mengedepankan
            bahan makanan dari sumber tumbuhan yang kaya akan vitamin, mineral,
            antioksidan, dan karbohidrat kompleks. Oleh karena itu diet ini
            melibatkan konsumsi makanan yang kaya akan buah-buahan, sayuran,
            biji-bijian, kacang-kacangan, ikan, dan minyak zaitun, sementara
            mengurangi konsumsi daging merah, gula, dan lemak jenuh.
          </p>
        </div>
      </section>

      <section className="py-[80px] bg-grey relative">
        <div className="bg-medi w-[400px] h-[90px] text-center rounded-r-[20px] font-Poppins drop-shadow-lg font-medium">
          <h1 className="py-[25px] drop-shadow-lg text-[28px] text-white">
            Tujuan & Manfaat
          </h1>
        </div>

        <div className="py-16 mx-12 font-medium">
          <p className="text-[28px] text-justify drop-shadow-lg">
            Tujuan dari Diet Mediterania adalah untuk meningkatkan kesehatan dan
            mencegah penyakit kronis seperti penyakit jantung, diabetes, dan
            kanker dengan mengadopsi pola makan yang kaya akan buah-buahan,
            sayuran, biji-bijian, kacang-kacangan, ikan, dan minyak zaitun,
            serta mengurangi konsumsi daging merah dan produk olahan yang tinggi
            lemak jenuh. Pola makan ini dipercaya dapat memperbaiki profil lipid
            dan gula darah, menurunkan tekanan darah, dan meningkatkan fungsi
            kognitif.
          </p>

          <p className="text-[28px] mt-10 text-justify drop-shadow-lg">
            Diet Mediterania telah terbukti memiliki banyak manfaat kesehatan,
            antara lain:
            <br /> <br />
            1. Menurunkan risiko penyakit jantung: Karena diet ini kaya akan
            lemak tak jenuh tunggal dan polifenol, yang dapat meningkatkan
            kesehatan jantung dan menurunkan risiko penyakit jantung.
            <br /> <br />
            2. Menurunkan risiko diabetes tipe 2: Karena pola makan ini kaya
            akan serat, biji-bijian, dan sayuran, sehingga dapat meningkatkan
            sensitivitas insulin dan menurunkan risiko diabetes tipe 2.
            <br /> <br />
            3. Menurunkan risiko kanker: Karena diet Mediterania kaya akan
            antioksidan dan nutrisi penting seperti vitamin C dan E, selenium,
            dan karotenoid, sehingga dapat melindungi tubuh dari kerusakan sel
            dan DNA yang dapat menyebabkan kanker.
            <br /> <br />
            4. Meningkatkan kesehatan otak: Karena diet ini kaya akan asam lemak
            omega-3, nutrisi penting yang berperan dalam perkembangan dan
            kesehatan otak, sehingga dapat meningkatkan fungsi kognitif.
            <br /> <br />
            5. Menurunkan risiko obesitas: Karena pola makan ini rendah kalori
            dan lemak jenuh, sehingga dapat membantu menurunkan berat badan dan
            menurunkan risiko obesitas.
            <br /> <br />
            Namun, penting juga untuk diingat bahwa dalam Diet Mediterania,
            porsi makan yang seimbang dan moderasi tetap diperlukan untuk
            mencapai manfaat kesehatan yang optimal.
          </p>
          <div className="absolute right-0 top-[320px] overflow-x-hidden">
            <img
              className="grayscale bg-cover w-max h-max brightness-125 opacity-40"
              src={Benefit}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="relative pt-10 ">
        <div className="absolute top-0">
          <img className="bg-cover w-screen" src={MakananMedi} alt="" />
        </div>
        <div className="bg-medi w-[420px] h-[90px] text-center rounded-r-[20px] font-Poppins drop-shadow-lg font-medium">
          <h1 className="py-[25px] drop-shadow-lg text-[28px] text-white">
            Makanan yang disarankan
          </h1>
        </div>

        <div className="pt-[100px] pb-28 left-12 w-[850px] text-justify  relative">
          <p className="text-[28px] text-justify drop-shadow-lg font-semibold font-Poppins text-white">
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

      <section className="relative w-screen bg-pink h-screen">
        <img
          className="bg-cover absolute top-0 w-screen h-[870px]"
          src={TdkMedi}
          alt=""
        />

        <div className="bg-medi absolute my-5 top-10 right-0 w-[800px] h-[90px] text-center rounded-l-2xl font-Poppins drop-shadow-lg font-medium">
          <h1 className="py-[25px] drop-shadow-lg text-[28px] text-white">
            Makanan yang tidak disarankan
          </h1>
        </div>
        <div className="text-start relative justify-start ml-[740px] py-[200px]">
          <p className="text-[30px] text-justify text-white w-[755px]">
            1. Daging merah dan olahan daging seperti sosis, burger, dan ham
            <br /> <br />
            2. Gorengan dan makanan cepat saji yang tinggi lemak dan kalori
            <br /> <br />
            3. Gula dan makanan yang mengandung gula tambahan seperti soda,
            permen, dan kue manis
            <br /> <br />
            4. Makanan olahan yang tinggi natrium seperti sereal instan, mie
            instan, dan makanan kaleng
            <br /> <br />
            5. Minuman beralkohol yang berlebihan
          </p>
        </div>
      </section>

      <section className="mt-[72px] pt-[85px] bg-grey relative">
        <div className="bg-medi w-[600px] h-[90px] text-center rounded-r-[20px] font-Poppins drop-shadow-lg font-medium">
          <h1 className="py-[25px] drop-shadow-lg text-[28px] text-white">
            Tips dalam menjalani Diet Mediterania
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
            Berikut adalah beberapa tips atau metode dari diet Mediterania:
            <br /> <br />
            1. Konsumsi makanan yang kaya akan serat: Serat dapat membantu
            menjaga kesehatan pencernaan dan meningkatkan rasa kenyang. Pilih
            makanan yang kaya serat seperti buah-buahan, sayuran, biji-bijian,
            kacang-kacangan, dan biji-bijian.
            <br /> <br />
            2. Konsumsi ikan: Diet Mediterania mengandalkan konsumsi ikan yang
            tinggi sebagai sumber protein, omega-3, dan asam lemak sehat. Ikan
            seperti salmon, tuna, sarden, dan makarel adalah pilihan yang baik.
            <br /> <br />
            3. Batasi konsumsi daging merah: Diet Mediterania mengandalkan
            konsumsi daging merah yang rendah, dengan fokus pada konsumsi daging
            unggas atau ikan sebagai sumber protein.
            <br /> <br />
            4. Minum anggur merah dengan bijak: Diet Mediterania memperbolehkan
            konsumsi anggur merah dalam jumlah sedang, karena anggur merah
            mengandung senyawa polifenol yang memiliki efek antioksidan dan
            anti-inflamasi. Namun, konsumsi alkohol harus dibatasi sesuai dengan
            batasan yang ditentukan.
            <br /> <br />
            5. Konsumsi minyak zaitun dan alpukat: Diet Mediterania sangat
            mengandalkan konsumsi minyak zaitun dan alpukat sebagai sumber lemak
            sehat yang dapat membantu menjaga kesehatan jantung dan meningkatkan
            kesehatan umum.
            <br /> <br />
            6. Hindari makanan olahan dan makanan cepat saji: Makanan olahan dan
            makanan cepat saji sering kali mengandung banyak garam, gula, dan
            lemak yang tidak sehat, sehingga sebaiknya dihindari pada diet
            Mediterania.
            <br /> <br />
            7. Konsumsi buah-buahan dan sayuran segar: Diet Mediterania sangat
            mempromosikan konsumsi buah-buahan dan sayuran segar, karena mereka
            mengandung banyak nutrisi penting yang dibutuhkan tubuh.
            <br /> <br />
            8. Olahraga secara teratur: Olahraga merupakan bagian penting dari
            diet Mediterania. Cobalah untuk berolahraga secara teratur, seperti
            berjalan kaki, bersepeda, atau berenang untuk meningkatkan kesehatan
            fisik dan mental.
          </p>
        </div>
      </section>

      <section className="relative">
        <img className="grayscale h-[1700px]" src={SakitMedi} alt="" />

        <div className="bg-merah absolute top-8 rounded-[25px] right-9 w-[830px] text-center h-[100px] drop-shadow-lg">
          <h1 className="text-white text-[30px] py-7">
            Potensi Risiko yang perlu diperhatikan
          </h1>
        </div>

        <div className="my-10 absolute right-12 ml-[670px] text-justify top-[120px] ">
          <p className="text-[29px] font-Poppins font-medium text-merah drop-shadow-lg">
            Diet Mediterania cenderung aman dan sehat untuk dilakukan, karena
            didasarkan pada pola makan yang sehat dan alami seperti konsumsi
            banyak buah-buahan, sayuran, biji-bijian, kacang-kacangan, dan ikan.
            <br /> <br />
            Namun, seperti dengan semua jenis diet, ada beberapa potensi risiko
            dan perlu diperhatikan. Beberapa risiko yang mungkin terkait dengan
            Diet Mediterania antara lain:
            <br /> <br />
            1. Kekurangan nutrisi tertentu: Diet Mediterania mengandung sedikit
            protein dan lemak jenuh, sehingga mungkin sulit untuk memenuhi
            kebutuhan protein dan lemak jenuh yang dibutuhkan oleh beberapa
            orang. Jadi, pastikan untuk memperhatikan asupan nutrisi yang
            seimbang.
            <br /> <br />
            2. Berat badan: Meskipun Diet Mediterania dirancang untuk membantu
            menurunkan berat badan, tetapi jika tidak diimbangi dengan aktivitas
            fisik yang cukup dan sehat, dapat menyebabkan peningkatan berat
            badan.
            <br /> <br />
            3. Konsumsi garam: Diet Mediterania dapat melibatkan konsumsi garam
            yang tinggi melalui penggunaan bumbu rempah-rempah. Ini mungkin
            menjadi masalah bagi orang yang memiliki tekanan darah tinggi atau
            kondisi medis lainnya yang memerlukan pembatasan garam.
            <br /> <br />
            4. Konsumsi alkohol: Diet Mediterania menyertakan konsumsi moderat
            alkohol seperti anggur merah. Namun, terlalu banyak konsumsi alkohol
            dapat menyebabkan masalah kesehatan yang serius. Jika Anda memiliki
            kondisi kesehatan tertentu atau sedang minum obat-obatan, selalu
            disarankan untuk berkonsultasi dengan dokter Anda sebelum memulai
            Diet Mediterania atau jenis diet lainnya.
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

export default dietmediterania;
