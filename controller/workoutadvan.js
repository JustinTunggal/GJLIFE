import WorkoutAdvan from "../model/modelWorkoutAdvan.js";
import path from "path";
import fs from "fs";

export const getWorkoutAdvan = async (req, res) => {
  try {
    const response = await WorkoutAdvan.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getWorkoutAdvanById = async (req, res) => {
  try {
    const response = await WorkoutAdvan.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createWorkoutAdvan = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const name = req.body.title;
  const file = req.files.file;
  const desc = req.body.desc;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg", ".gif"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await WorkoutAdvan.create({
        name: name,
        image: fileName,
        url: url,
        desc: desc,
      });
      res.status(201).json({ msg: "workoutadvan Created Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateWorkoutAdvan = async (req, res) => {
  const workoutadvan = await WorkoutAdvan.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!workoutadvan) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (req.files === null) {
    fileName = workoutadvan.image;
  } else {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg", ".gif"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB" });

    const filepath = `./public/images/${workoutadvan.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const name = req.body.title;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await WorkoutAdvan.update(
      { name: name, image: fileName, url: url, desc: desc },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "workoutadvan Updated Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteWorkoutAdvan = async (req, res) => {
  const workoutadvan = await WorkoutAdvan.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!workoutadvan) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/images/${workoutadvan.image}`;
    fs.unlinkSync(filepath);
    await WorkoutAdvan.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "workoutadvan Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
