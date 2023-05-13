import React from "react";
import "../index.css";
import Header from "../components/header3";
import Footer from "../components/footer";
import Zone from "../images/Judul zone.png";
import ZoneOrg from "../images/zone org.png";
import Karbo from "../images/karbo.png";
import Protein from "../images/protein.png";
import Lemak from "../images/Lemak.png";
import Benefit from "../images/benefits 1.png";
import MakananZone from "../images/mknn zone.png";
import TdkZone from "../images/makanan tdk zone.png";
import Lampu from "../images/lightbulb 1.png";
import Sakit from "../images/sakit zone.png";

function dietzone() {
  return (
    <div className="overflow-x-hidden w-screen h-screen bg-white2">
      <section className="h-[530px] relative">
        <img className="absolute" src={Zone} alt="" />
        <Header />
        <div className="relative">
          <h1 className="text-atkins text-[100px] font-bold mt-[125px] mx-[80px]">
            DIET ZONE
          </h1>
        </div>
      </section>

      <section className="bg-pink text-white relative min-w-full overflow-x-hidden">
        <div className="bg-blue w-[300px] h-[90px] text-center mt-10 rounded-r-[20px] text-[30px] font-serif drop-shadow-lg">
          <h1 className="py-[25px] drop-shadow-lg">Apa itu Diet Zone?</h1>
        </div>
        <div className="pt-[30px] pb-[50px] ml-10 text-justify w-[860px] ">
          <p className="text-[28px] text-justify font-Poppins drop-shadow-lg ">
            Diet Zone adalah program diet yang diperkenalkan oleh Dr. Barry
            Sears, seorang ahli biokimia Amerika pada tahun 1995. Diet ini
            didasarkan pada prinsip diet yang seimbang antara karbohidrat,
            protein, dan lemak, dengan proporsi yang tepat. Dalam diet Zone,
            makanan dibagi menjadi tiga kategori, yaitu karbohidrat, protein,
            dan lemak. Rasio ideal antara ketiga kategori makanan ini adalah
            40:30:30. Hal ini berarti bahwa 40% dari kalori yang dikonsumsi
            berasal dari karbohidrat, 30% dari protein, dan 30% dari lemak. Dr.
            Sears percaya bahwa rasio ini akan membantu mempertahankan
            keseimbangan hormon dan mengurangi peradangan dalam tubuh.
          </p>

          <div className="absolute w-max top-0 right-0">
            <img className="bg-cover h-[630px]" src={ZoneOrg} alt="" />
          </div>
        </div>
      </section>

      <section className="bg-white relative py-12">
        <div className="bg-blue w-[600px] h-[90px] text-center rounded-r-[20px] font-Poppins drop-shadow-lg font-medium">
          <h1 className="py-[25px] drop-shadow-lg text-[30px] text-white">
            Apa saja asupan yang harus dikendalikan?
          </h1>
        </div>

        <div className="mt-[80px] ml-[110px] flex">
          <div>
            <img className="drop-shadow-lg" src={Karbo} alt="" />
            <div className="my-5 text-center">
              <h1 className="text-[28px] font-Poppins font-bold drop-shadow-lg">
                40% <br />
                Karbohidrat
              </h1>
            </div>
          </div>

          <div className="mx-[150px]">
            <img className="drop-shadow-lg" src={Protein} alt="" />
            <div className="my-5 text-center">
              <h1 className="text-[28px] font-Poppins font-bold drop-shadow-lg">
                30% <br />
                Protein
              </h1>
            </div>
          </div>

          <div className="">
            <img className="drop-shadow-lg" src={Lemak} alt="" />
            <div className="my-5 text-center">
              <h1 className="text-[28px] font-Poppins font-bold drop-shadow-lg">
                30% <br />
                Lemak
              </h1>
            </div>
          </div>
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
            Tujuan dari diet Zone adalah untuk membantu menurunkan berat badan,
            meningkatkan kesehatan jantung, meningkatkan fungsi otak, dan
            mengurangi peradangan dalam tubuh. Dr. Sears percaya bahwa dengan
            menjaga rasio karbohidrat, protein, dan lemak yang tepat, tubuh
            dapat menghasilkan hormon yang seimbang dan mengurangi risiko
            terkena penyakit seperti diabetes, penyakit jantung, dan kanker.
          </p>

          <p className="text-[28px] mt-10 text-justify drop-shadow-lg">
            Manfaat Diet Zone: <br />
            1. Mengurangi peradangan dalam tubuh: Diet Zone menekankan pada
            makanan anti-inflamasi, seperti buah-buahan dan sayuran, yang dapat
            membantu mengurangi peradangan dalam tubuh.
            <br /> <br />
            2. Menurunkan berat badan: Diet Zone mengurangi konsumsi karbohidrat
            dan meningkatkan asupan protein dan lemak, sehingga dapat membantu
            menurunkan berat badan.
            <br /> <br />
            3. Meningkatkan kesehatan jantung: Diet Zone dapat membantu
            meningkatkan kesehatan jantung dengan mengurangi konsumsi lemak
            jenuh dan menekankan pada makanan yang kaya akan asam lemak omega-3.
            <br /> <br />
            4. Meningkatkan tingkat energi: Diet Zone menekankan pada konsumsi
            protein, lemak, dan karbohidrat dalam proporsi yang tepat, sehingga
            dapat membantu meningkatkan tingkat energi.
            <br /> <br />
            5. Kurangi stres: Stres dapat menyebabkan produksi hormon yang tidak
            seimbang dalam tubuh. Cobalah untuk mengurangi stres dengan
            melakukan yoga, meditasi, atau relaksasi lainnya.
            <br /> <br />
            6. Pertahankan konsistensi: Penting untuk menjaga konsistensi dalam
            menjalani diet Zone agar berhasil. Jangan terlalu keras pada diri
            sendiri dan berikan diri Anda waktu yang cukup untuk beradaptasi
            dengan program diet ini.
            <br /> <br />
            7. Konsultasikan dengan dokter: Jika Anda memiliki kondisi kesehatan
            tertentu, seperti diabetes atau penyakit jantung, konsultasikan
            dengan dokter Anda sebelum memulai diet ini.
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
          <img
            className="bg-cover w-screen h-[765px]"
            src={MakananZone}
            alt=""
          />
        </div>
        <div className="bg-blue w-[420px] h-[90px] text-center rounded-r-[20px] font-Poppins drop-shadow-lg font-medium">
          <h1 className="py-[25px] drop-shadow-lg text-[28px] text-white">
            Makanan yang disarankan
          </h1>
        </div>

        <div className="py-14 left-14 w-[780px] font-Poppins relative">
          <p className="text-[29px] text-justify drop-shadow-lg font-medium">
            1. Protein rendah lemak : <br />
            Daging tanpa lemak, ikan, ayam, telur, kacang-kacangan, dan kedelai.
            <br /> <br />
            2. Karbohidrat kompleks : <br />
            Sayuran non-starch seperti brokoli, bayam, kale, dan kembang kol.
            Buah-buahan rendah gula seperti anggur, apel, blueberry, dan
            raspberry.
            <br /> <br />
            3. Lemak sehat : <br />
            Minyak zaitun, minyak kelapa, minyak ikan, dan kacang-kacangan
            seperti almond, kacang Brazil, dan kenari.
          </p>
        </div>
      </section>

      <section className="relative w-screen bg-pink h-screen">
        <img className="bg-cover absolute top-0 " src={TdkZone} alt="" />

        <div className="bg-mermud absolute top-10 right-0 w-[700px] h-[90px]  text-center rounded-l-2xl font-Poppins drop-shadow-lg font-medium">
          <h1 className="py-[25px] drop-shadow-lg text-[28px] text-white">
            Makanan yang tidak disarankan
          </h1>
        </div>
        <div className="text-start relative justify-start ml-[860px] pt-[180px] pr-[20px]">
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
            1. Hitung asupan zonemu: Perhitungkan zonamu dengan menghitung rasio
            karbohidrat, protein, dan lemak yang dikonsumsi. Zonamu didasarkan
            pada tinggi dan berat badanmu serta tingkat aktivitasmu.
            <br /> <br />
            2. Perencanaan menu: Buatlah menu yang seimbang dan mengandung rasio
            karbohidrat, protein, dan lemak yang tepat untuk setiap waktu makan.
            Anda dapat mencari resep dan menu yang sesuai dengan Diet Zone.
            <br /> <br />
            3. Pilih sumber karbohidrat yang baik: Pilih sumber karbohidrat
            kompleks seperti sayuran hijau, kacang-kacangan, dan biji-bijian.
            Hindari makanan yang mengandung karbohidrat sederhana seperti gula
            dan tepung.
            <br /> <br />
            4. Konsumsi protein yang cukup: Konsumsi protein dalam jumlah yang
            cukup seperti daging tanpa lemak, ikan, ayam, dan telur.
            <br /> <br />
            5. Pilih lemak sehat: Pilih lemak sehat seperti minyak zaitun,
            alpukat, dan kacang-kacangan. Hindari makanan yang mengandung lemak
            jenuh dan trans.
            <br /> <br />
            6. Jangan lupa makanan ringan sehat: Pilih camilan yang sehat
            seperti buah-buahan, sayuran, atau yoghurt rendah lemak.
            <br /> <br />
            7. Makan secara teratur: Pastikan untuk makan secara teratur dan
            tidak melewatkan waktu makan. Makanan yang teratur dapat membantu
            menjaga kadar gula darahmu stabil.
            <br /> <br />
            8. Kurangi konsumsi gula: Kurangi konsumsi gula dan makanan yang
            mengandung gula tinggi. Gula dapat menyebabkan peningkatan kadar
            insulin yang dapat menghambat penurunan berat badan.
            <br /> <br />
            9. Minum cukup air: Pastikan untuk minum cukup air untuk menjaga
            hidrasi dan membantu mengurangi rasa lapar.
            <br /> <br />
            10. Konsultasikan dengan dokter atau ahli gizi: Jika kamu memiliki
            kondisi kesehatan tertentu atau memiliki riwayat medis,
            konsultasikan dengan dokter atau ahli gizi sebelum memulai Diet
            Zone.
          </p>
        </div>
      </section>

      <section className="relative">
        <img className="grayscale h-[1750px]" src={Sakit} alt=""></img>

        <div className="bg-merah absolute top-14 rounded-[25px] right-16 w-[800px] text-center h-[100px] drop-shadow-lg">
          <h1 className="text-white text-[30px] py-7">
            Potensi Risiko yang perlu diperhatikan
          </h1>
        </div>

        <div className="my-10 absolute right-16 ml-[670px] text-justify top-[200px]">
          <p className="text-[30px] font-Poppins font-medium text-merah drop-shadow-lg">
            1. Efek samping yang mungkin timbul: Beberapa efek samping yang
            dapat timbul selama menjalankan diet Zone antara lain lelah, sakit
            kepala, rasa lapar, dan sembelit.
            <br /> <br />
            2. Kebutuhan untuk memperhatikan proporsi makanan: Diet Zone
            membutuhkan perhatian yang cukup besar untuk memperhatikan proporsi
            makanan, karena makanan yang tidak seimbang dapat mempengaruhi
            efektivitas diet.
            <br /> <br />
            3. Kemungkinan kekurangan nutrisi: Menjalankan diet Zone yang sangat
            rendah karbohidrat dapat menyebabkan kekurangan nutrisi tertentu,
            seperti serat, vitamin B, dan zat besi.
            <br /> <br />
            4. Tidak cocok untuk semua orang: Diet Zone mungkin tidak cocok
            untuk semua orang, terutama mereka yang memiliki kondisi kesehatan
            tertentu, seperti diabetes atau masalah ginjal.
            <br /> <br />
            5. Ketergantungan pada suplemen: Beberapa pendukung diet Zone
            merekomendasikan konsumsi suplemen vitamin dan mineral untuk
            membantu mencukupi kebutuhan nutrisi, namun hal ini dapat
            memperbesar biaya dan terkadang tidak selalu diperlukan.
            <br /> <br />
            Penting untuk selalu berkonsultasi dengan dokter atau ahli gizi
            sebelum memulai diet apa pun, termasuk diet Zone, terutama jika Anda
            memiliki kondisi kesehatan tertentu atau sedang mengonsumsi
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

export default dietzone;
