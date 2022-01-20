const express = require('express');
const { clearCookie } = require('express/lib/response');

const path = require('path');
const { off } = require('process');

//db connection
require(path.join(__dirname, 'db/conn.js'));
const Employee = require(path.join(__dirname, '/models/Employee'));

var app = express();
const port = 3000;

app.use(express.json());
//Read studen function
const getStudents = async (req, res) => {
  try {
    const data = await Employee.find();
    res.status(201).send(data);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};
const getStudentsbyId = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Employee.findById({ _id: id });
    res.status(201).send(data);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};
const createStudent = (req, res) => {
  const data = new Employee(req.body);

  data
    .save()
    .then(() => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
      console.log(err);
    });
};
const deleteStudent = async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(_id);
    const deleteStudent = await Employee.findByIdAndDelete(_id);
    res.status(200).send(deleteStudent);
  } catch (err) {
    res.status(400).send(err);
  }
};
/*
app.get("/student",getStudents)
app.post("/student",createStudent)

app.get('/student/:id', getStudentsbyId);
app.delete('/student/:id', deleteStudent);
*/
app.route('/student').get(getStudents).post(createStudent);
app.route('/student/:id').get(getStudentsbyId).delete(deleteStudent);

app.listen(port, () => {
  console.log(`working on ${port}`);
});
