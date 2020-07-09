const Teacher = require("../../../models/Teacher.model");

//@desc get request to fetch teachers data
//@route /api/v1/teachers
//@access public
exports.getTeacher = (req, res) => {
  Teacher.findById(req.params.teacher_id)
    .then((teacher) => {
      res.status(200).json({
        teacher,
        subjectSkills: teacher.skills.map(
          (skill) => ({
            title: skill.subject,
            value: parseInt(skill.experience),
            color: "#E38627",
          })
          // { title: "One", value: 10, color: "#E38627" },
          //   { title: "Two", value: 15, color: "#C13C37" },
          //   { title: "Three", value: 20, color: "#6A2135" },
        ),
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
