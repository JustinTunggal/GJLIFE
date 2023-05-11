import React from "react";
import "./index.css";
import Header from "./components/header2";
import Footer from "./components/footer";
import Gambar1 from "../src/images/gambar1.png";
import Fern from "../src/images/fern 1.png";
import Daily from "../src/images/daily-tasks 1.png";
import Satu from "../src/images/1.png";
import Dua from "../src/images/2.png";
import Tiga from "../src/images/3.png";
import Empat from "../src/images/4.png";
import Lima from "../src/images/5.png";
import Enam from "../src/images/6.png";
import Tujuh from "../src/images/7.png";
import Delapan from "../src/images/8.png";
import Sembilan from "../src/images/9.png";
import Sepuluh from "../src/images/10.png";
import Pot from "../src/images/flower-pot 1.png";
import Lari from "../src/images/slide 1.png";
import Makanan from "../src/images/slide 2.png";
import Balance from "../src/images/slide 3.png";
import Sprint from "../src/images/slide 4.png";
import Meditasi from "../src/images/slide 5.png";
import Kepala from "../src/images/slide 7.png";
import Robot from "../src/images/slide 8.png";
import Semangat from "../src/images/slide 10.png";
import Panah from "../src/images/panah.png";

function homePage() {
  return (
    <div className="scroll-smooth font-poppins snap-y snap-mandatory h-screen w-screen mx-auto overflow-scroll overflow-x-hidden relative">
      <section className="snap-start snap-always h-screen w-screen bg-white">
        <Header />
        <div className="flex justify-between items-center" id="body">
          <img className="w-[750px] h-auto" src={Gambar1} alt="" />

          <div className="font-semibold text-[150px] m-10">
            <h1 className="-ml-[300px]">Improve</h1>
            <h1 className="-ml-[50px] -my-5 text-[75px]">Your Life</h1>
            <h1 className="-ml-[100px]">NOW!</h1>
          </div>
        </div>
      </section>

      <section className="snap-start snap-always h-screen w-screen bg-beige2">
        <div className="mt-10 w-full mx-0 justify-center">
          <img className="absolute h-auto w-[300px] left-0" src={Fern} alt="" />

          <img
            className="mx-auto mix-blend-luminosity pt-20"
            src={Daily}
            alt=""
          />

          <img
            className="h-auto w-[300px] absolute right-0 -mt-[45px]"
            src={Pot}
            alt=""
          />

          <div
            id="life"
            className="w-[772px] mx-auto text-center items-center mt-[35px]"
          >
            <p className="text-cactus text-2xl">
              Lifestyle atau gaya hidup memainkan peran besar dalam hidup kita
              manusia. Lifestyle pada dasarnya adalah serangkaian kejadian,
              tindakan, atau keputusan yang kita pilih dalam menjalani
              keseharian. Selain itu karakter seseorang juga dapat dilihat dari
              gaya hidupnya, biasanya mereka yang hidup serba mewah memiliki ego
              yang tinggi, sebaliknya yang hidup sederhana biasanya dianggap
              lebih rendah hati. Ada banyak sekali hal yang ditentukan oleh gaya
              hidup yang kita pilih, baik itu kesehatan, finance, pertemanan,
              bahkan umur sekalipun dipengaruhi oleh gaya hidup.
            </p>
          </div>

          <button className="bg-darkbiege w-[205px] mt-[100px] mb-[65px] mx-[670px] h-[65px] rounded-[50px] text-2xl font-bold text-beige2 ease-in-out transition duration-300 hover:brightness-75">
            <a href="#start">Start Now</a>
          </button>
        </div>
      </section>

      <section
        className="snap-start snap-always h-screen w-screen bg-green"
        id="start"
      >
        <div>
          <h1 className="text-[150px] font-bold drop-shadow-3xl ml-5 mix-blend-hard-light">
            Mulai
            <br />
            Beraktivitas
          </h1>

          <img
            className="absolute right-0 top-[1670px] h-[750px] mix-blend-overlay"
            src={Satu}
            alt=""
          />

          <p className="font-light text-softgreen w-[480px] h-auto ml-5 text-3xl">
            Hal pertama yang dapat kita lakukan yaitu mulai beraktivitas, stop
            mager mageran dan mulai lah beraktivitas. Dengan begini tubuh kita
            akan terhindar dari banyak penyakit dan produktivitas kita juga jadi
            meningkat.
          </p>

          <img
            className="absolute top-[2100px] mix-blend-overlay right-[200px]"
            src={Lari}
            alt=""
          />

          <div className="font-extralight flex-col justify-center text-center text-black">
            <p className="">
              “It's not always that we need to do more but rather that we need
              to focus on less.”
            </p>
            <hr className="w-32 mx-auto bg-black dark:bg-black h-[0.5px] border-0" />
            <p className="">Franz Kafka</p>
          </div>
        </div>
      </section>

      <section className="snap-start snap-always h-screen w-screen bg-pink">
        <img className="absolute left-0 h-[790px]" src={Dua} alt="" />
        <div className="flex justify-between mx-10 py-[90px] align-middle">
          <img className="relative" src={Makanan} alt="" />
          <div className="text-pink2">
            <h1 className="font-bold opacity-90 drop-shadow-3xl mr-20 text-[100px]">
              Healthy Diet
            </h1>
            <p className="mix-blend-luminosity text-right text-[30px] w-[480px] h-auto ml-32">
              Makanan yang sehat dapat mencerminkan kesehatan yang baik, dengan
              mengonsumsi makanan dengan proporsi yang tepat kita dapat
              memperpanjang umur kita dan menyelamatkan diri dari penyakit
              seperti diabetes ataupun kolesterol.
            </p>
          </div>
        </div>

        <div className="font-extralight flex-col justify-center text-center text-black">
          <p className="">
            “It is health that is real wealth and not pieces of gold and
            silver.”
          </p>
          <hr className="w-32 mx-auto bg-black dark:bg-black h-[0.5px] border-0" />
          <p className="">Mahatma Gandhi</p>
        </div>
      </section>

      <section className="snap-start snap-always h-screen w-screen bg-blue">
        <img
          className="right-0 absolute h-[790px] mix-blend-hard-light"
          src={Tiga}
          alt=""
        />
        <div className="flex justify-between">
          <img className="mx-20 my-20 absolute" src={Balance} alt="" />
          <div className="flex-col my-20 relative">
            <h1 className="font-semibold italic text-[100px] relative ml-[500px] drop-shadow-3xl">
              Work Life Balance
            </h1>
            <p className="text-[30px] w-[450px] h-[100px] text-right ml-[900px]">
              Keseimbangan antara pekerjaan dan kehidupan harus dijaga dengan
              baik. Tidak baik bagi tubuh kita baik secara fisik maupun mental
              apa bila kita bekerja berlebihan, ada baiknya kita meluangkan
              waktu untuk istirahat.
            </p>
          </div>
        </div>

        <div className="font-extralight flex-col justify-center text-center mt-[320px] text-black">
          <p className="">
            “The key is not to prioritize what's on your schedule, but to
            schedule your priorities.”
          </p>
          <hr className="w-32 mx-auto bg-black dark:bg-black h-[0.5px] border-0" />
          <p className="">Stepehen Covey</p>
        </div>
      </section>

      <section className="snap-start snap-always h-screen w-screen bg-brown">
        <img
          className="left-0 absolute h-[790px] mix-blend-hard-light"
          src={Empat}
          alt=""
        />

        <img
          className="right-0 absolute mt-[200px] mix-blend-soft-light opacity-50"
          src={Sprint}
          alt=""
        />

        <div className="mx-auto text-center text-brown2">
          <h1 className="font-bold text-8xl pt-[200px] drop-shadow-3xl">
            Mulai Berolahraga
          </h1>

          <p className="font-extralight text-3xl mx-auto my-[50px] w-[762px] h-auto">
            Olahraga tidak harus angkat barbel atau ke gym, sekedar olahraga
            lari saja sudah membawa dampak baik bagi tubuh. Dengan berolahraga
            setiap hari kita membangun tubuh yang kuat dan kebal terhadap
            penyakit. Tubuh yang baguspun dapat meningkatkan daya tarik
            seseorang.
          </p>
        </div>

        <div className="font-extralight flex-col justify-center text-center mt-[175px] text-black">
          <p className="">
            "Motivation is what gets you started. Habit is what keeps you
            going."
          </p>
          <hr className="w-32 mx-auto bg-black dark:bg-black h-[0.5px] border-0" />
          <p className="">Jim Ryun</p>
        </div>
      </section>

      <section className="snap-start snap-always h-screen w-screen bg-green2">
        <img
          className="absolute right-0 mix-blend-luminosity transform rotate-180 -scale-y-100 h-auto w-[400px]"
          src={Fern}
          alt=""
        />

        <img className="absolute right-0 h-[790px]" src={Lima} alt="" />

        <h1 className="font-extrabold text-[200px] pt-14 ml-20 text-green3 drop-shadow-3xl relative mix-blend-luminosity">
          Meditasi
        </h1>

        <p className="font-thin text-3xl ml-[700px] mt-[20px] h-auto w-[583px] text-left">
          Meditasi menjadi salah satu cara untuk menenangkan pikiran kita.
          Meditasi bisa dilakukan pagi hari sebelum beraktivitas ataupun di
          malam hari saat menutup aktivitas. Dengan bermeditasi 15 - 30 menit
          setiap harinya kita dapat meningkatkan ketenangan dan menjadi lebih
          bersyukur terhadap banyak hal.
        </p>

        <img
          className="absolute left-0 -mt-[450px] overflow-hidden h-[620px] opacity-75"
          src={Meditasi}
          alt=""
        />

        <div className="font-extralight flex-col justify-center text-center mt-[30px] text-black">
          <p className="">"Meditation is the soul's chewing."</p>
          <hr className="w-32 mx-auto bg-black dark:bg-black h-[0.5px] border-0" />
          <p className="">William Grimshaw</p>
        </div>
      </section>

      <section className="snap-start snap-always relative h-screen w-screen bg-cream">
        <img
          className="absolute left-0 h-[790px] mix-blend-hard-light opacity-60"
          src={Enam}
          alt=""
        />

        <h1 className="text-[200px] text-pink2 opacity-90 mix-blend-luminosity font-extrabold ml-[600px] pt-[60px] drop-shadow-2xl">
          Hygeine
        </h1>

        <p className="font-extralight mix-blend-darken h-auto w-[1000px] ml-[450px] mt-5 text-5xl text-right">
          Kebersihan adalah sebagian dari iman. Pasti banyak dari kalian yang
          pernah mendengar kalimat tersebut, benar adanya kebersihan sangat
          mencerminkan kesehatan. Lingkungan hidup yang kotor dapat membuat kita
          rentan terhadap penyakit.
        </p>

        <div className="font-extralight flex-col justify-center text-center mt-[15px] text-black">
          <p className="">“Hygiene is two third of health”</p>
          <hr className="w-32 mx-auto bg-black dark:bg-black h-[0.5px] border-0" />
          <p className="">Proverbs</p>
        </div>
      </section>

      <section className="snap-start snap-always h-screen w-screen bg-brown3">
        <img className="absolute right-0 h-[790px]" src={Tujuh} alt="" />

        <img
          className="absolute mix-blend-overlay ml-[900px] mt-[150px] h-auto w-[500px]"
          src={Kepala}
          alt=""
        />

        <h1 className="font-bold mix-blend-luminosity text-gray text-[150px] ml-[80px] pt-[100px] drop-shadow-3xl">
          Mindset
        </h1>
        <p className="font-bold text-4xl h-auto w-[642px] ml-[80px] mt-[30px] text-gray">
          Pola pikir yang baik dapat membawa kita ke jalan yang lebih baik.
          Dengan pola pikir yang benar kita dapat melihat dunia dari berbagi
          sudut pandang dan dapat meningkatkan rasionalitas kita serta
          meningkatkan critical thinking kita.
        </p>

        <div className="font-extralight flex-col justify-center text-center mt-[60px] text-black">
          <p className="">
            “Nothing is impossible. The word itself says im possible!”
          </p>
          <hr className="w-32 mx-auto bg-black dark:bg-black h-[0.5px] border-0" />
          <p className="">Audrey Hepburn</p>
        </div>
      </section>

      <section className="snap-start snap-always h-screen w-screen bg-babyred">
        <img className="absolute left-0 h-[790px]" src={Delapan} alt="" />

        <img
          className="absolute mt-[200px] ml-[50px] h-auto w-[500px]"
          src={Robot}
          alt=""
        />
        <h1 className="font-bold text-darkblue text-8xl mix-blend-darken drop-shadow-3xl pt-[100px] ml-[600px]">
          Meningkatkan
          <br />
          Soft Skill
        </h1>

        <p className="font-bold text-darkblue text-[38px] h-auto w-[603px] ml-[800px] mt-[50px] text-right">
          Soft Skill merupakan hal yang patut dipelajari semua orang selain
          dapat meningkatkan karir yang kita jalani saat ini, soft skill juga
          kadang mampu menghasilkan uang sampingan untuk kita.
        </p>

        <div className="font-extralight flex-col justify-center text-center text-black">
          <p className="">
            “Soft skills have more to do with who we are than what we know.”
          </p>
          <hr className="w-32 mx-auto bg-black dark:bg-black h-[0.5px] border-0" />
          <p className="">Marcel M. Robles</p>
        </div>
      </section>

      <section class="snap-start snap-always h-screen w-screen bg-ungu">
        <img class="h-[790px] right-0 absolute" src={Sembilan} alt="" />

        <h1 class="font-bold text-pinkwhite text-[150px] pt-[100px] ml-[50px]">
          SELF <span class="font-bold text-red text-[150px]">LOVE</span>
        </h1>

        <p class="text-5xl font-bold text-red2 h-auto w-[1000px] mt-[25px] ml-[50px]">
          Mencintai diri sendiri, terkesan mudah tapi nyatanya tidak semua orang
          bisa. Kita harus bisa menerima diri kita dengan keadaan yang kita
          miliki, bukan berarti kita harus pasrah tapi ada baiknya apabila kita
          berhenti mengeluh dan menyesal dan mulai berusaha untuk masa
          mendatang.
        </p>

        <div class="font-extralight flex-col justify-center ml-[800px] text-center text-white">
          <p class="">
            “If you have the ability to love, love yourself first.”
          </p>
          <hr class="w-32 mx-auto bg-white dark:bg-white h-[0.5px] border-0" />
          <p class="">Charles Bukowski</p>
        </div>
      </section>

      <section class="snap-start snap-always h-screen w-screen bg-darkred">
        <img class="absolute left-0 -mt-[100px]" src={Sepuluh} alt="" />
        <h1 class="font-bold text-[150px] text-redwhite pt-[75px] ml-[600px]">
          Optimism
        </h1>

        <p class="text-white w-[650px] h-auto text-[42px] ml-[100px] mt-[20px]">
          Optimis adalah hasil dari self love, dengan meningkatnya rasa nyaman
          terhadap diri sendiri, kita biasanya akan lebih percaya diri dan
          optimis dalam hidup.
        </p>

        <img
          class="absolute w-[450px] h-auto ml-[800px] mix-blend-luminosity -mt-[398px]"
          src={Semangat}
          alt=""
        />

        <div class="font-extralight flex-col justify-center text-center text-white mr-[700px] mt-[45px]">
          <p class="">“The secret of getting ahead is getting started.”</p>
          <hr class="w-32 mx-auto bg-white dark:bg-white h-[0.5px] border-0" />
          <p class="">Mark Twain</p>
        </div>
      </section>

      <section class="snap-start snap-always h-screen w-screen">
        <h1 class="text-[100px] font-extralight ml-20 pt-20">
          Start Your Journey
          <br />
          Now!
        </h1>

        <div class="flex w-[750px] h-auto font-extralight ml-20 mt-10">
          <a class="decoration-0 flex" href="#start">
            <h1 class="text-[45px]">Learn More About Life</h1>
            <img
              class="w-[69px] h-[40px] ml-10 mb-20 mt-4"
              src={Panah}
              alt=""
            />
          </a>
        </div>

        <hr class="w-screen mx-auto bg-black dark:bg-black h-[1px] border-0" />

        <Footer />
      </section>
    </div>
  );
}

export default homePage;
