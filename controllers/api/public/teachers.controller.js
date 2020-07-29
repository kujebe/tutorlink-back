const Teacher = require("../../../models/Teacher.model");
const colors = require("../../../utils/colors");

//@desc get request to fetch all teachers
//@route /api/v1/teachers
//@access public
exports.getAllTeachers = (req, res) => {
  Teacher.find()
    .then((teachers) => res.status(200).json(teachers))
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

//@desc get request to fetch a teacher's  data by slug
//@route /api/v1/teachers/fname-lname
//@access public
exports.getTeacherBySlug = (req, res) => {
  Teacher.findOne({ slug: req.params.slug })
    .orFail({ notFound: "Not Found" })
    .then((teacher) => {
      res.status(200).json({
        teacher,
        subjectSkills: teacher.skills.map((skill, idx) => {
          return {
            title: skill.subject,
            value: parseInt(skill.experience),
            color: colors[idx],
          };
        }),
        techSkills: teacher.teck_skills.map((techSkill, idx) => {
          return {
            title: techSkill.resource,
            value: parseInt(techSkill.experience),
            color: colors[idx],
          };
        }),
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
