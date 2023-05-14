import React from "react";
import "../index.css";
import Header from "../components/header3";
import Footer from "../components/footer";
import Vegan from "../images/veganJudul.png";
import AVegan from "../images/apa itu vegan.png";
import Buah from "../images/buah.png";
import Sayur from "../images/sayur.png";
import Biji from "../images/biji.png";
import Benefits from "../images/benefits 1.png";
import MakananVegan from "../images/makanan vegan.png";
import TdkVegan from "../images/makanan tdk vegan.png";
import Lampu from "../images/lightbulb 1.png";
import SakitVegan from "../images/sakit vegan.png";

function dietvegan() {
  return (
    <div className="overflow-x-hidden w-screen h-screen bg-white2">
      <section className="h-[530px] relative">
        <img className="absolute" src={Vegan} alt="" />
        <Header />
        <div className="relative">
          <h1 className=" text-veganJudul text-[100px] font-bold mt-[125px] mx-[80px]">
            DIET VEGAN
          </h1>
        </div>
      </section>

      <section className=" text-white relative min-w-full overflow-x-hidden">
        <div className="absolute w-max top-0 right-0">
          <img className="bg-cover w-screen h-[585px]" src={AVegan} alt="" />
        </div>
        <div className="bg-veganGreen w-[500px] h-[90px] text-center mt-10 rounded-r-[20px] text-[30px] font-serif drop-shadow-lg">
          <h1 className="py-[25px] drop-shadow-lg">Apa itu Diet Vegan?</h1>
        </div>
        <div className="py-[30px] pb-[50px] ml-10 text-justify w-[1000px] ">
          <p className="text-[28px] text-justify font-Poppins drop-shadow-lg text-black">
            Diet vegan adalah sebuah gaya makan yang sepenuhnya berbasis
            tumbuhan, di mana seseorang tidak mengonsumsi produk hewani atau
            produk turunannya, termasuk daging, ikan, telur, susu, keju, dan
            madu. Dalam diet vegan, seseorang hanya mengonsumsi makanan yang
            berasal dari tanaman, seperti buah-buahan, sayuran, biji-bijian,
            kacang-kacangan, dan produk olahan nabati seperti tempe dan tahu.
          </p>
        </div>
      </section>

      <section className="bg-white relative py-12">
        <div className="bg-veganGreen w-[600px] h-[90px] text-center rounded-r-[20px] font-Poppins drop-shadow-lg font-medium">
          <h1 className="py-[25px] drop-shadow-lg text-[30px] text-white">
            Apa saja asupan yang harus dikendalikan?
          </h1>
        </div>

        <div className="mt-[80px] ml-[110px] flex">
          <div>
            <img className="drop-shadow-lg" src={Buah} alt="" />
            <div className="my-5 text-center">
              <h1 className="text-[28px] font-Poppins font-bold drop-shadow-lg">
                Buah-buahan
              </h1>
            </div>
          </div>

          <div className="mx-[150px]">
            <img className="drop-shadow-lg" src={Sayur} alt="" />
            <div className="my-5 text-center">
              <h1 className="text-[28px] font-Poppins font-bold drop-shadow-lg">
                Sayuran
              </h1>
            </div>
          </div>

          <div className="">
            <img className="drop-shadow-lg" src={Biji} alt="" />
            <div className="my-5 text-center">
              <h1 className="text-[28px] font-Poppins font-bold drop-shadow-lg">
                Biji-bijian & <br /> Kacang-kacangan
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[80px] bg-grey relative">
        <div className="bg-veganGreen w-[400px] h-[90px] text-center rounded-r-[20px] font-Poppins drop-shadow-lg font-medium">
          <h1 className="py-[25px] drop-shadow-lg text-[28px] text-white">
            Tujuan & Manfaat
          </h1>
        </div>

        <div className="py-16 mx-12 font-medium">
          <p className="text-[28px] text-justify drop-shadow-lg">
            Tujuan dari diet vegan dapat beragam, termasuk alasan kesehatan,
            lingkungan, etika, atau keagamaan. Beberapa orang memilih diet vegan
            karena percaya bahwa mengonsumsi makanan yang hanya berasal dari
            tumbuhan dapat membantu meningkatkan kesehatan mereka dan mencegah
            penyakit kronis seperti obesitas, diabetes, dan penyakit jantung.
            Selain itu, diet vegan juga dianggap ramah lingkungan dan dapat
            membantu mengurangi dampak perubahan iklim.
          </p>

          <p className="text-[28px] mt-10 text-justify drop-shadow-lg">
            Diet vegan yang seimbang dan direncanakan dengan baik dapat
            memberikan sejumlah manfaat kesehatan, di antaranya:
            <br /> <br />
            1. Menurunkan risiko penyakit kronis: Diet vegan yang kaya akan
            serat, vitamin, dan antioksidan dapat membantu menurunkan risiko
            penyakit kronis seperti obesitas, diabetes tipe 2, penyakit jantung,
            dan kanker.
            <br /> <br />
            2. Meningkatkan kesehatan jantung: Diet vegan yang rendah lemak
            jenuh dan tinggi serat dapat membantu menurunkan kolesterol LDL
            ("jahat") dan tekanan darah, yang berkontribusi pada kesehatan
            jantung yang lebih baik.
            <br /> <br />
            3. Meningkatkan kesehatan saluran pencernaan: Serat yang tinggi
            dalam diet vegan dapat membantu mencegah sembelit dan menjaga
            kesehatan saluran pencernaan.
            <br /> <br />
            4. Menurunkan berat badan: Diet vegan yang seimbang dan rendah
            kalori dapat membantu menurunkan berat badan dan mempertahankan
            berat badan yang sehat.
            <br /> <br />
            5. Menjaga kesehatan tulang: Diet vegan yang kaya akan kalsium dari
            sumber tumbuhan seperti sayuran hijau, kacang-kacangan, dan
            biji-bijian, dapat membantu menjaga kesehatan tulang.
            <br /> <br />
            6. Meningkatkan kesehatan mental: Beberapa studi menunjukkan bahwa
            diet vegan dapat membantu meningkatkan kesehatan mental, termasuk
            mengurangi risiko depresi dan kecemasan.
            <br /> <br />
            Namun, penting untuk diingat bahwa diet vegan juga dapat menyebabkan
            kekurangan nutrisi tertentu seperti protein, vitamin B12, zat besi,
            dan kalsium jika tidak direncanakan dengan baik. Oleh karena itu,
            penting untuk berkonsultasi dengan dokter atau ahli gizi sebelum
            memulai diet vegan dan memastikan bahwa asupan nutrisi Anda
            mencukupi kebutuhan tubuh.
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
          <img
            className="bg-cover w-screen h-[765px]"
            src={MakananVegan}
            alt=""
          />
        </div>
        <div className="bg-veganGreen w-[420px] h-[90px] text-center rounded-r-[20px] font-Poppins drop-shadow-lg font-medium">
          <h1 className="py-[25px] drop-shadow-lg text-[28px] text-white">
            Makanan yang disarankan
          </h1>
        </div>

        <div className="pt-7 pb-28 left-14 w-[880px] text-justify  relative">
          <p className="text-[28px] text-justify drop-shadow-lg font-medium font-Poppins">
            1. Buah-buahan: Semua jenis buah-buahan baik segar maupun beku
            <br />
            2. Sayuran: Semua jenis sayuran termasuk bayam, brokoli, wortel,
            lobak, kubis, dan lain-lain.
            <br />
            3. Biji-bijian: Quinoa, beras merah, gandum, dan oatmeal.
            <br />
            4. Kacang-kacangan dan biji-bijian: Almond, kacang tanah, kacang
            mete, kacang merah, lentil, kacang hitam, kedelai, dan lain-lain.
            <br />
            5. Tahu dan tempe: Kedua produk ini adalah sumber protein nabati
            yang baik.
            <br />
            6. Minyak nabati: Minyak zaitun, minyak kelapa, dan minyak canola.
            <br />
            7. Susu nabati: Susu kedelai, susu almond, susu oat, dan lain-lain.
            <br />
            8. Produk nabati: Sosis nabati, keju nabati, dan lain-lain.
          </p>
        </div>
      </section>

      <section className="relative w-screen bg-pink h-screen">
        <img className="bg-cover absolute top-0 " src={TdkVegan} alt="" />

        <div className="bg-mermud absolute top-10 right-0 w-[660px] h-[90px]  text-center rounded-l-2xl font-Poppins drop-shadow-lg font-medium">
          <h1 className="py-[25px] drop-shadow-lg text-[28px] text-white">
            Makanan yang tidak disarankan
          </h1>
        </div>
        <div className="text-justify relative ml-[890px] pt-[200px] pb-24 pr-10">
          <p className="text-[30px] text-white font-medium">
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
        <div className="bg-veganGreen w-[450px] h-[90px] text-center rounded-r-[20px] font-Poppins drop-shadow-lg font-medium">
          <h1 className="py-[25px] drop-shadow-lg text-[28px] text-white">
            Tips dalam menjalani Diet Zone
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
            Berikut adalah beberapa tips dan metode yang dapat membantu Anda
            menjalankan diet vegan dengan sehat dan berhasil:
            <br /> <br />
            1. Pelajari tentang nutrisi: Sebelum memulai diet vegan, pelajari
            tentang nutrisi yang penting untuk kesehatan Anda, seperti protein,
            zat besi, kalsium, dan vitamin B12. Pastikan untuk merencanakan
            asupan nutrisi yang seimbang dan memadai.
            <br /> <br />
            2. Konsumsi variasi makanan: Konsumsi beragam makanan nabati seperti
            buah-buahan, sayuran, biji-bijian, kacang-kacangan, dan produk
            olahan nabati seperti tempe dan tahu dapat membantu memastikan Anda
            mendapatkan semua nutrisi yang Anda butuhkan.
            <br /> <br />
            3. Perhatikan sumber protein: Pastikan untuk mendapatkan cukup
            protein dari sumber nabati seperti kacang-kacangan, biji-bijian,
            kedelai, dan produk kedelai seperti tempe dan tahu.
            <br /> <br />
            4. Perhatikan sumber zat besi: Sumber zat besi nabati termasuk
            kacang-kacangan, biji-bijian, sayuran hijau, dan kismis. Untuk
            meningkatkan penyerapan zat besi, konsumsi bersama dengan sumber
            vitamin C seperti jeruk atau tomat.
            <br /> <br />
            5. Perhatikan sumber kalsium: Sumber kalsium nabati termasuk sayuran
            hijau, biji-bijian, dan kacang-kacangan. Jika perlu, pertimbangkan
            untuk mengonsumsi suplemen kalsium.
            <br /> <br />
            6. Perhatikan sumber vitamin B12: Vitamin B12 biasanya ditemukan
            dalam produk hewani, oleh karena itu, penting untuk memperolehnya
            dari suplemen atau makanan yang diperkaya seperti sereal sarapan,
            susu kedelai, dan daging nabati.
            <br /> <br />
            7. Pertimbangkan suplemen: Jika Anda tidak yakin mendapatkan semua
            nutrisi yang Anda butuhkan, pertimbangkan untuk mengonsumsi suplemen
            multivitamin atau suplemen nutrisi lain yang disarankan oleh dokter
            atau ahli gizi.
            <br /> <br />
            8. Cari resep dan ide makanan vegan: Cari resep dan ide makanan
            vegan untuk membantu Anda memvariasikan makanan dan menjaga agar
            tetap menyenangkan dan lezat.
            <br /> <br />
            9. Berbelanja dengan cerdas: Banyak produk olahan nabati seperti
            sosis nabati, keju nabati, dan susu nabati yang dapat membantu Anda
            merasa kenyang dan puas dengan makanan vegan. Namun, pastikan untuk
            membaca label dengan cermat dan memilih produk yang rendah gula,
            rendah garam, dan rendah lemak jenuh.
            <br /> <br />
            10. Jangan terlalu keras pada diri sendiri: Jangan berusaha untuk
            menjadi sempurna dalam menjalankan diet vegan. Jika Anda memiliki
            kesalahan atau kadang-kadang mengonsumsi produk hewani, jangan
            khawatir terlalu banyak dan fokus pada pola makan seimbang jangka
            panjang.
          </p>
        </div>
      </section>

      <section className="relative">
        <img className="grayscale h-[1900px]" src={SakitVegan} alt="" />

        <div className="bg-merah absolute top-8 rounded-[25px] right-9 w-[850px] text-center h-[100px] drop-shadow-lg">
          <h1 className="text-white text-[30px] py-7">
            Potensi Risiko yang perlu diperhatikan
          </h1>
        </div>

        <div className="my-10 absolute right-12 ml-[670px] text-justify top-[120px] ">
          <p className="text-[29px] font-Poppins font-medium text-merah drop-shadow-lg">
            Meskipun diet vegan memiliki banyak manfaat, namun ada beberapa
            risiko yang dapat timbul jika tidak dilakukan dengan benar. Beberapa
            resiko tersebut adalah:
            <br /> <br />
            1. Kekurangan nutrisi penting: Veganisme menghilangkan sumber
            protein, zat besi, kalsium, vitamin B12 dan D dari diet. Jika tidak
            diatasi dengan makanan pengganti yang tepat, ini dapat menyebabkan
            kekurangan nutrisi penting yang dapat menyebabkan anemia,
            osteoporosis, dan masalah kesehatan lainnya.
            <br /> <br />
            2. Risiko kekurangan protein: Protein sangat penting bagi tubuh dan
            diperlukan untuk membangun dan memperbaiki jaringan. Tanpa asupan
            protein yang cukup, dapat menyebabkan kekurangan protein, yang dapat
            menyebabkan kerusakan pada jaringan tubuh.
            <br /> <br />
            3. Risiko kekurangan vitamin B12: Vitamin B12 hanya ditemukan dalam
            produk hewani, dan kekurangan vitamin ini dapat menyebabkan anemia,
            kerusakan saraf, dan masalah kesehatan lainnya.
            <br /> <br />
            4. Risiko kekurangan kalsium: Kalsium penting untuk menjaga kekuatan
            tulang, dan veganisme dapat menyebabkan kekurangan kalsium, yang
            dapat meningkatkan risiko osteoporosis.
            <br /> <br />
            5. Risiko konsumsi terlalu banyak karbohidrat: Diet vegan cenderung
            tinggi karbohidrat karena banyaknya konsumsi biji-bijian,
            kacang-kacangan, dan buah-buahan. Jika konsumsi karbohidrat terlalu
            tinggi, ini dapat meningkatkan risiko obesitas, diabetes, dan
            masalah kesehatan lainnya.
            <br /> <br />
            Namun, risiko-risiko ini dapat diatasi dengan mengonsumsi makanan
            yang tepat dan dengan mempertimbangkan asupan nutrisi yang seimbang.
            Jika ragu, sebaiknya berkonsultasi dengan ahli gizi atau dokter
            terlebih dahulu sebelum mencoba diet vegan.
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

export default dietvegan;
