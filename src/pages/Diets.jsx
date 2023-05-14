import React from "react";
import "../index.css";
import Calculator from "../components/calculator";
import Header from "../components/header";
import Footer from "../components/footer";
import Salmon from "../images/Greek Marinated Salmon with Asparagus _ PrimalGourmet 1.png";
import Salmon2 from "../images/Salmon Avocado Salad 1.png";
import Banana from "../images/Bananenbrot Granola Rezept _ gesund & einfach - Healthy Dreams 1.png";
import Kebab from "../images/Premium Photo _ Doner kebab is lying on the cutting board_ shawarma with meat, onions, salad lies on a white old wooden table_ 1.png";
import Bowls from "../images/Chicken and Cauliflower “Rice” Bowls are Quick and Perfect for___ 1.png";
import Fruits from "../images/Berry Watermelon Fruit Salad 1.png";
import Chicken from "../images/24 Easy Chicken Dinners That Are Tasty AF 1.png";
import Snack from "../images/Healthy Summer Snack Ideas 1.png";
import Lemons from "../images/Bibimbap - Love and Lemons 1.png";
import Vector from "../images/Vector.png";
import DietAtkins from "../images/Diet atkins.png";
import DietZone from "../images/Diet Zone.png";
import DietVegan from "../images/Vegan.png";
import DietIntermiten from "../images/intermiten.png";
import DietMediterania from "../images/Diet Mediterania.png";
import { Link } from "react-router-dom";

function diets() {
  return (
    <div>
      <div className="scroll-smooth font-poppins snap-y snap-mandatory h-screen w-screen mx-auto overflow-scroll overflow-x-hidden">
        <section className="bg-ijo bg-cover snap-start snap-always h-screen w-screen scroll-smooth">
          <Header />
          <div className="mt-[135px] Poppins">
            <h1 className="text-[55px] font-semibold text-white text-center">
              Get your next
            </h1>
            <h1 className="text-[50px] font-medium text-kuning text-center">
              Healthful Diet
            </h1>

            <div className="relative">
              <div className="my-[20px]">
                <img src={Salmon} alt="" />

                <div className="absolute left-0 mt-[20px]">
                  <img src={Salmon2} alt="" />
                </div>

                <div className="ml-[230px] top-0 absolute">
                  <img className="h-[382px]" src={Banana} alt="" />
                </div>

                <div className="absolute top-0 mx-[525px] my-4">
                  <img src={Kebab} alt="" />
                  <div className="my-5">
                    <img className="h-[141px]" src={Bowls} alt="" srcset="" />
                  </div>
                </div>

                <div className="ml-[750px] top-0 absolute">
                  <img className="h-[383px] w-[300px]" src={Fruits} alt="" />
                </div>

                <div className="right-0 top-0 mr-[212px] absolute">
                  <img className="w-[250px] h-[165px]" src={Chicken} alt="" />
                </div>

                <div className="right-0 top-[180px] mr-[212px] absolute">
                  <img className="h-[203px] w-[250px]" src={Snack} alt="" />
                </div>

                <div className="right-0 top-0 absolute">
                  <img className="h-[385px] w-[205px]" src={Lemons} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="snap-start snap-always h-screen w-screen">
          <div className="relative">
            <div className="bg-cover h-auto w-auto justify-center">
              <img className="h-[800px] w-[2000px]" src={DietAtkins} alt="" />
              <div className="absolute right-[50px] top-[100px]">
                <h1 className="text-orange ml-[500px] font-bold Poppins text-[80px] drop-shadow-lg">
                  Diet Atkins
                </h1>
                <div className="mt-[100px] w-[800px] ml-[180px]">
                  <p className="text-right drop-shadow-sm Poppins font-bold text-orange text-[35px]">
                    Diet Atkins adalah diet yang berfokus pada pengendalian
                    kadar insulin dalam tubuh melalui
                  </p>
                  <div className="absolute right-0 text-white mt-[60px]">
                    <Link to="/dietAtkins">
                      <button className="bg-orange text-[18px] font-semibold w-[200px] h-[50px] rounded-[30px] text-center pl-4 pb-0.5 drop-shadow-lg">
                        See More {">>"}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="snap-start snap-always h-screen w-screen">
          <div className="relative">
            <div className="bg-cover h-auto w-auto justify-center">
              <img className="h-[800px] w-[2000px]" src={DietZone} alt="" />
              <div className="absolute top-[100px] brightness-90">
                <h1 className="text-red ml-[80px] font-bold text-[80px] drop-shadow-lg">
                  Zone Diet
                </h1>
                <div className="mt-[50px] ml-[80px] w-[820px]">
                  <p className="text-left drop-shadow-sm font-bold text-red text-[35px]">
                    Zone Diet bertujuan untuk keseimbangan nutrisi 40%
                    karbohitdrat, 30% lemak, 30% protein di setiap makanan yang
                    berfokus pada pengendalian insulin yang dapat menghasilkan
                    penurunan dan pengendalian berat badan.
                  </p>
                  <div className="absolute text-white mt-[70px]">
                    <Link to="/dietZone">
                      <button className="bg-red text-[18px] font-semibold w-[200px] h-[50px] rounded-[30px] text-center pl-4 pb-0.5 drop-shadow-lg">
                        See More {">>"}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="snap-start snap-always h-screen w-screen">
          <div className="relative">
            <div className="bg-cover h-auto w-auto justify-center">
              <img className="h-[800px] w-[2000px]" src={DietVegan} alt="" />
              <div className="absolute top-[150px] drop-shadow-2xl">
                <h1 className="text-green3 ml-[80px] font-bold text-[80px] drop-shadow-2xl">
                  Diet Vegan
                </h1>
                <div className="mt-[50px] ml-[80px]">
                  <p className="text-justify drop-shadow-sm font-bold text-green2 text-[35px]">
                    Diet Vegan ini seperti namanya yaitu tidak <br />
                    memakan atau mengosumsi hal-hal berbau <br />
                    hewani, termasuk telur, susu dan madu. <br />
                    Jadi, apa yang mereka makan?
                  </p>
                  <div className="absolute text-white mt-[70px]">
                    <Link to="/dietVegan">
                      <button className="bg-green3 text-[18px] font-semibold w-[200px] h-[50px] rounded-[30px] text-center pl-4 pb-0.5 drop-shadow-lg">
                        See More {">>"}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="snap-start snap-always h-screen w-screen">
          <div className="relative">
            <div className="bg-cover h-auto w-auto justify-center">
              <img
                className="h-[800px] w-[2000px]"
                src={DietIntermiten}
                alt=""
              />
              <div className="absolute right-[50px] top-[100px] drop-shadow-xl">
                <h1 className="text-intermiten ml-[500px] font-bold Poppins text-[80px] drop-shadow-lg">
                  Diet Intermiten
                </h1>
                <div className="mt-[70px]">
                  <p className="text-right drop-shadow-sm Poppins font-bold text-intermiten text-[35px]">
                    Diet ini bisa juga disebut dengan <br />
                    puasa dengan interval waktu tertentu. <br />
                    Diet ini tidak melarang kamu untuk makan <br />
                    asalkan tidak pada saat waktu puasa. <br />
                    Bagaimana caranya?
                  </p>
                  <div className="absolute right-0 text-white mt-[60px]">
                    <Link to="/dietIntermiten">
                      <button className="bg-intermiten text-[18px] font-semibold w-[200px] h-[50px] rounded-[30px] text-center pl-4 pb-0.5 drop-shadow-lg">
                        See More {">>"}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="snap-start snap-always h-screen w-screen">
          <div className="relative">
            <div className="bg-cover h-auto w-auto justify-center">
              <img
                className="h-[800px] w-[2000px]"
                src={DietMediterania}
                alt=""
              />
              <div className="absolute right-[50px] top-[130px] drop-shadow-xl">
                <h1 className="text-mediterania ml-[500px] font-bold Poppins text-[80px] drop-shadow-lg">
                  Diet Mediterania
                </h1>
                <div className="mt-[70px]">
                  <p className="text-right drop-shadow-sm Poppins font-bold text-mediterania text-[35px]">
                    Diet ini sangat membantu karena <br />
                    dapat mendukung penggunanya <br />
                    meningkatkan kualitas hidup dan <br />
                    menurunkan resiko penyakit.
                  </p>
                  <div className="absolute right-0 text-white mt-[60px]">
                    <Link to="/dietMediterania">
                      <button className="bg-mediterania text-[18px] font-semibold w-[200px] h-[50px] rounded-[30px] text-center pl-4 pb-0.5 drop-shadow-lg">
                        See More {">>"}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="snap-start snap-always h-screen w-screen">
          <div className="pt-[110px]">
            <Calculator />
          </div>

          <hr class="w-screen mx-auto bg-black dark:bg-black h-[1px] border-0 mt-[140px]" />

          <div className="pt-[20px]">
            <Footer />
          </div>
        </section>
      </div>
    </div>
  );
}

export default diets;
