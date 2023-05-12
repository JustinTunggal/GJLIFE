import React, { Component } from "react";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      gender: "",
      weight: "",
      age: "",
      heightCm: "",
      activity: "",
      bmr: "",
      error: "",
      dailyneeded: "",
    };
  }
  handlegenderChange = (event) => {
    this.setState({ gender: event.target.value });
  };
  handleAgeChange = (event) => {
    this.setState({ age: event.target.value });
  };
  handleWeightChange = (event) => {
    this.setState({ weight: event.target.value });
  };
  handleheightCmChange = (event) => {
    this.setState({ heightCm: event.target.value });
  };
  handleactivityChange = (event) => {
    this.setState({ activity: event.target.value });
  };
  calculateBMR() {
    let age = this.state.age;
    let weight = this.state.weight;
    let gender = this.state.gender;
    let heightCm = this.state.heightCm;

    if (age == "" || gender == "" || weight == "") {
      this.setState({ error: "All Field Are Required!" });
      return;
    }

    let bmrCalc = "";
    let height = heightCm * 4.799;
    if (gender == 2) {
      bmrCalc = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    } else if (gender == 1) {
      bmrCalc = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    }

    this.setState({ bmr: bmrCalc });

    this.setState({ error: "" });

    console.log(gender);
  }
  calculatecalorie() {
    let dailyCarloriesneeded;
    let selected = this.state.activity;
    let bmr1 = this.state.bmr;
    if (selected == 1.2) {
      dailyCarloriesneeded = bmr1 * selected;
    } else if (selected == 1.375) {
      dailyCarloriesneeded = bmr1 * selected;
    } else if (selected == 1.55) {
      dailyCarloriesneeded = bmr1 * selected;
    } else if (selected == 1.725) {
      dailyCarloriesneeded = bmr1 * selected;
    } else if (selected == 1.9) {
      dailyCarloriesneeded = bmr1 * selected;
    }
    this.setState({ dailyneeded: dailyCarloriesneeded });
    console.log(this.state.dailyneeded);
  }

  render() {
    let error;
    if (this.state.error) {
      error = <div className="error">{this.state.error}</div>;
    }
    let resultBMR;
    if (this.state.bmr) {
      resultBMR = (
        <div className="mt-[67px] font-poppins text-2xl font-light">
          <h1 className="font-semibold">BMI Result</h1>
          {this.state.bmr}
        </div>
      );
    }

    let Calcalorie;

    if (this.state.bmr) {
      Calcalorie = (
        <div className="font-poppins -mt-5">
          <div className="">
            <label className="text-2xl font-semibold">Workout in a Week</label>
            <select
              className="border-solid border-2 w-[200px] m-10"
              value={this.state.activity}
              onChange={this.handleactivityChange}
              name="activity"
            >
              <option value="">Select your Activity</option>
              <option value="1.2">
                Sedentary (Very little or no exercise, and desk job)
              </option>
              <option value="1.375">Lightly Active</option>
              <option value="1.55">Moderately Active</option>
              <option value="1.725">Very Active</option>
              <option value="1.9">Extremely Active</option>
            </select>
          </div>
          <button
            className="-mt-10 w-[405px] py-2 h-auto border-solid border-2 rounded-md font-semibold hover:text-white hover:bg-black hover:scale-105 ease-in-out transition-all duration-150"
            type="button"
            onClick={() => this.calculatecalorie()}
          >
            Calculate Calorie
          </button>
        </div>
      );
    }
    let neededcalorie;
    if (this.state.dailyneeded) {
      neededcalorie = (
        <div className="mt-[67px] font-poppins text-2xl font-light">
          <h1 className="font-semibold">Daily Calorie Needed</h1>
          {this.state.dailyneeded}
        </div>
      );
    }

    return (
      <div className="bmrcalc">
        <div className="ml-10 mt-10 flex gap-10">
          <div>
            <h2 className="font-bold text-[40px] ">
              BMR & Daily Calorie Calculator
            </h2>
            {error}
            <div className="h-auto w-[300px] gap-2 flex font-poppins">
              <label className="text-2xl pt-1 mr-[157px] font-semibold">
                Gender
              </label>
              <label className="flex pt-[10px] gap-2 font-light">
                <input
                  type="radio"
                  className="genderF"
                  checked={this.state.gender === "1"}
                  onChange={this.handlegenderChange}
                  name="gender"
                  value="1"
                />
                Female
              </label>
              <label className="flex pt-[10px] gap-2 font-light">
                <input
                  type="radio"
                  className="genderM"
                  checked={this.state.gender === "2"}
                  onChange={this.handlegenderChange}
                  name="gender"
                  value="2"
                />
                Male
              </label>
            </div>
            <div className="font-poppins">
              <label className="text-2xl font-semibold mr-[100px]">
                Weight in Kg
              </label>
              <input
                type="number"
                value={this.state.weight}
                onChange={this.handleWeightChange}
                name="weight"
                className="border-solid border-2 rounded-md w-[150px]"
                min="0"
                max="999"
              />
            </div>
            <div className="font-poppins">
              <label className="text-2xl font-semibold mr-[95px]">
                Height in Cm
              </label>
              <input
                type="number"
                value={this.state.heightCm}
                onChange={this.handleheightCmChange}
                name="heightinFeet"
                className="border-solid border-2 rounded-md w-[151px]"
                min="0"
                max="8"
              />
            </div>
            <div className="font-poppins">
              <label className="text-2xl font-semibold mr-[102px]">
                Age in years
              </label>
              <input
                type="number"
                value={this.state.age}
                onChange={this.handleAgeChange}
                name="age"
                className="border-solid border-2 rounded-md w-[151px]"
                min="0"
                max="120"
              />
            </div>
            <button
              className="mt-5 w-[405px] py-2 h-auto border-solid border-2 rounded-md font-semibold hover:text-white hover:bg-black hover:scale-105 ease-in-out transition-all duration-150"
              type="button"
              onClick={() => this.calculateBMR()}
            >
              Calculate BMR
            </button>
          </div>

          <div>
            <div className="flex gap-[60px]">
              {resultBMR}
              {neededcalorie}
            </div>

            {Calcalorie}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
