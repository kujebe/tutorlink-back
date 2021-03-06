const Teacher = require("../../../models/Teacher.model");
const colors = require("../../../utils/colors");

//@desc get request to fetch all teachers
//@route /api/v1/teachers
//@access public
exports.getAllTeachers = (req, res, next) => {
  const pagination = req.query.limit ? parseInt(req.query.limit) : 10;
  const pageNumber = req.query.page ? parseInt(req.query.page) : 1;
  const { longitude, latitude } = req.query;
  Teacher.estimatedDocumentCount(function (err, count) {
    Teacher.find({
      location: {
        $nearSphere: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude], //[longitude, latitude]
          },
        },
      },
    })
      .skip((pageNumber - 1) * pagination)
      .limit(pagination)
      .then((teachers) =>
        res.status(201).json({
          status: "ok",
          count,
          data: teachers,
          message: "Search successful",
        })
      )
      .catch((err) => {
        next(err);
      });
  });
};

//@desc get request to fetch a teacher's  data by slug
//@route /api/v1/teachers/fname-lname
//@access public
exports.getTeacherBySlug = (req, res, next) => {
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
      next(err);
    });
};
