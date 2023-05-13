import WorkoutEasy from "../model/modelWorkoutEasy.js";
import path from "path";
import fs from "fs";

export const getWorkoutEasy = async (req, res) => {
  try {
    const response = await WorkoutEasy.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getWorkoutEasyById = async (req, res) => {
  try {
    const response = await WorkoutEasy.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createWorkoutEasy = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const name = req.body.title;
  const desc = req.body.desc;
  const file = req.files.file;
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
      await WorkoutEasy.create({
        name: name,
        image: fileName,
        desc: desc,
        url: url,
      });
      res.status(201).json({ msg: "workouteasy Created Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateWorkoutEasy = async (req, res) => {
  const workouteasy = await WorkoutEasy.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!workouteasy) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (req.files === null) {
    fileName = workouteasy.image;
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

    const filepath = `./public/images/${workouteasy.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const name = req.body.title;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await WorkoutEasy.update(
      { name: name, image: fileName, url: url, desc: desc },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "workouteasy Updated Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteWorkoutEasy = async (req, res) => {
  const workouteasy = await WorkoutEasy.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!workouteasy) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/images/${workouteasy.image}`;
    fs.unlinkSync(filepath);
    await WorkoutEasy.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "workouteasy Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
