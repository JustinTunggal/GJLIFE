import React from "react";
import "../index.css";
import Header from "../components/header";
import Footer from "../components/footer";
import gandhi from "../images/gandhi.png";
import workout from "../images/workout.png";
import Card from "../components/card";

function Workout() {
  return (
    <div className="overflow-x-hidden bg-black">
      <div className="bg-black relative">
        <img
          className="h-auto w-[645px] right-0 top-0 absolute z-0"
          src={gandhi}
          alt=""
        />

        <Header className="z-50" />

        <div className="text-white relative z-50 pb-[320px]">
          <h1 className="text-[50px] h-auto w-[1198px] mt-40 ml-10">
            “Strength does not come from physical capacity. It comes from an
            indomitable will.”
          </h1>
          <h2 className="text-[20px] mt-10 ml-10">- Mahatma Gandhi</h2>
        </div>
      </div>

      <div className="bg-white w-screen justify-center flex pb-[100px]">
        <div className="-ml-10 pt-40">
          <h1 className="text-[50px] font-extrabold">
            Kenapa Harus Berolahraga?
          </h1>
          <p className="w-[707px] h-auto font-thin text-[20px] mt-10">
            Sebuah pola makan yang sehat tidak lah cukup jika ingin mencapai
            lifestyle yang sehat, begitupun sebaliknya. Keseimbangan antara pola
            makan yang sehat dan olahraga yang cukup dapat membawa pengaruh yang
            besar dalam kesehatan jasmani. <br />
            <br />
            Kita tidak perlu pergi ke gym untuk berolahraga, kami akan
            memberikan beberapa saran olahraga yang simple yang bisa dilakukan
            dirumah.
          </p>
        </div>
        <img
          className="h-auto w-[300px] mix-blend-luminosity mt-40 ml-10"
          src={workout}
          alt=""
        />
      </div>

      <section className="m-10">
        <h1 className="text-[75px] mb-10 font-semibold text-white mx-auto text-center">
          Workout Recommendations
        </h1>
        <h1 className="text-[50px] text-white my-10 font-semibold">Easy</h1>
        <div className="flex gap-5 noScroll overflow-x-scroll scroll-smooth">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <h1 className="text-[50px] text-white my-10 font-semibold">
          Intermediate
        </h1>
        <div className="flex gap-5 noScroll overflow-x-scroll scroll-smooth">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <h1 className="text-[50px] text-white my-10 font-semibold">Advanced</h1>
        <div className="flex gap-5 noScroll overflow-x-scroll scroll-smooth">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      <section className="w-screen h-auto pt-5 bg-white">
        <Footer />
      </section>
    </div>
  );
}
export default Workout;
