const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const courses_name = require("./data/course-details-access.json");
const coursesCard = require("./data/courses-details.json");
const premiumCourses = require("./data/Premium-details.json");

app.get("/topic-list", (req, res) => {
  res.send(courses_name);
});

app.get("/premium-detail/:id", (req, res) => {
  const id = req.params.id;
  const eachPremium = premiumCourses.find((c) => c.pr_id === id);
  res.send(eachPremium);
});

app.get("/course-detail/:id", (req, res) => {
  const id = req.params.id;
  const eachCourse = coursesCard.find((c) => c.course_id === id);
  res.send(eachCourse);
});

app.get("/courses-card", (req, res) => {
  res.send(coursesCard);
});

app.get("/", (req, res) => {
  res.send("Education API Running");
});

app.listen(port, () => {
  console.log("Education Server is running on port", port);
});
