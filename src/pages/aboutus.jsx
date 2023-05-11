import React from "react";
import "../index.css";
import Header from "../components/header2";
import Footer from "../components/footer";
import Justin from "../images/justin.png";
import Gerald from "../images/gerald.png";
import Meme1 from "../images/meme (1).png";
import Meme2 from "../images/meme (2).png";
import Meme3 from "../images/meme (3).png";
import St1 from "../images/st (1).png";
import St2 from "../images/st (2).png";
import St3 from "../images/st (3).png";

function AboutUs() {
  return (
    <div className="bg-white overflow-x-hidden w-screen h-screen mx-auto content-center">
      <Header />

      <div className="flex justify-between m-20">
        <div>
          <div className="flex bg-white">
            <div className="text-center justify-center flex group">
              <img
                className="w-[376px] h-[376px] mix-blend-luminosity relative group-hover:blur-sm transition-all duration-300 ease-in-out"
                src={Justin}
                alt=""
              />
              <h1 className="absolute w-[100px] h-[100px] -ml-[150px] text-white mt-[140px] text-8xl font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                Justin
              </h1>
            </div>

            <div className="text-center justify-center flex group">
              <img
                className="w-[330px] h-[317px] ml-8 mt-10 mix-blend-luminosity relative group-hover:blur-sm transition-all duration-300 ease-in-out"
                src={Gerald}
                alt=""
              />

              <h1 className="absolute w-[100px] h-[100px] -ml-[90px] text-white mt-[160px] text-7xl font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                Gerald
              </h1>
            </div>
          </div>
          <a href="homepage.html">
            <h1 className="w-[550px] h-[65px] mt-10 ml-20 px-9 pt-3 text-4xl border-solid border-black outline rounded-md hover:bg-black hover:text-white hover:scale-110 transition ease-in-out duration-200">
              A Simple Way To A Better Life
            </h1>
          </a>
        </div>
        <div className="font-light">
          <h1 className="text-8xl mb-14 mt-10 ml-[150px]">ABOUT US</h1>
          <p className="w-[600px] text-2xl pr-[10px] h-auto text-right">
            First of all, kami dari tim GJLIFE mengucapkan banyak terima kasih
            sudah mengecek mini project kami. Website ini kami buat dengan
            tujuan untuk membawa pengetahuan tentang lifestyle sehat bagi
            masyarakat awam. Kami berharap dengan kehadiran website ini akan
            lebih banyak orang yang terinspirasi untuk hidup lebih sehat. We're
            Justin & Gerald care the best for you, and wish you a healthy life.
          </p>
        </div>
      </div>

      <section className="w-screen h-auto bg-black">
        <h1 className="text-[100px] font-light mx-auto pt-10 mb-20 text-center text-white">
          It's Never Too Late For A Change!
        </h1>

        <div className="flex justify-between my-10 mx-20 pb-32">
          <div className="text-white font-thin">
            <h1 className="text-8xl mt-20 mb-10">Support Us</h1>
            <p className="w-[550px] h-[87px] text-2xl">
              This mini project is a self-funded initiative brought to you by a
              us, and we need your help to keep it going. it will keeps us
              motivated to raise the bar and bring you more tips on healty
              lifestyle
            </p>
          </div>

          <div className="flex relative">
            <div>
              <div className="mr-10 hover:scale-105 hover:brightness-75 transition-all duration-300 ease-in-out mix-blend-luminosity">
                <img
                  className="w-[306px] h-[237px] mix-blend-luminosity relative mb-10"
                  src={Meme1}
                  alt=""
                />
                <h1 className="text-white absolute pl-[220px] mt-[215px] top-0 bg-black w-[306px] bg-opacity-70">
                  Follow Us
                </h1>
              </div>

              <div className="mr-10 hover:scale-105 hover:brightness-75 transition duration-300 ease-in-out mix-blend-luminosity">
                <img
                  className="w-[306px] h-[216px] mix-blend-luminosity relative"
                  src={Meme2}
                  alt=""
                />
                <h1 className="text-white absolute pl-[180px] -mt-[23px] bg-black w-[306px] bg-opacity-70">
                  Join Our Discord
                </h1>
              </div>
            </div>

            <div className="hover:scale-105 hover:brightness-75 transition duration-300 ease-in-out mix-blend-luminosity">
              <img
                className="w-[356px] h-[493px] mix-blend-luminosity relative"
                src={Meme3}
                alt=""
              />

              <h1 className="text-white absolute pl-[270px] -mt-[23px] bg-black w-[356px] bg-opacity-70">
                Help Us
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-between m-14">
        <div className="flex gap-8 bg-white">
          <img
            className="w-[200px] h-[200px] mix-blend-luminosity"
            src={St1}
            alt=""
          />
          <img
            className="w-[200px] h-[200px] mix-blend-luminosity"
            src={St2}
            alt=""
          />
          <img
            className="w-[200px] h-[200px] mix-blend-luminosity"
            src={St3}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-8xl ml-[120px] font-light">Special Thanks</h1>
          <p className="text-2xl mt-20 mr-5 font-light w-[700px] text-right">
            Special thanks to our friends and family who has been amazing
            supporting us along the way.
          </p>
        </div>
      </div>

      <hr className="w-screen mx-auto bg-black dark:bg-black h-[1px] border-0 mb-10" />

      <Footer />
    </div>
  );
}

export default AboutUs;
