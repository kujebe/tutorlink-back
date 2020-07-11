const Teacher = require("../../../models/Teacher.model");
const colors = require("../../../utils/colors");

//@desc get request to fetch teachers data
//@route /api/v1/teachers
//@access public
exports.getTeacher = (req, res) => {
  Teacher.findById(req.params.teacher_id)
    .then((teacher) => {
      res.status(200).json({
        teacher,
        subjectSkills: teacher.skills.map((skill, idx) => {
          console.log(idx);
          return {
            title: skill.subject,
            value: parseInt(skill.experience),
            color: colors[idx],
          };
        }),
        techSkills: teacher.teck_skills.map((techSkill, idx) => {
          console.log(idx);
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
