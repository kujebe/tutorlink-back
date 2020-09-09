const Teacher = require("../../../models/Teacher.model");
const User = require("../../../models/User.model");

/** Util function for teching nearest teachers */
async function findNearestTeachers(distance, longitude, latitude) {
  const nearestTeachers = await Teacher.find({
    location: {
      $near: {
        $maxDistance: distance,
        $geometry: {
          type: "Point",
          coordinates: [longitude, latitude],
        },
      },
    },
  });
  if (nearestTeachers.length <= 2 && distance < 40000) {
    return findNearestTeachers(distance + 200, longitude, latitude);
  }
  return { nearestTeachers, distance };
}

//@desc get request to index route
//@route /api/v1/home
//@access public
exports.getMapPopupData = (req, res) => {
  findNearestTeachers(100, req.query.longitude, req.query.latitude)
    // .select("location _id")
    // .exec()
    .then(({ nearestTeachers, distance }) => {
      res.status(200).json({
        // nearbyTeachers: nearestTeachers,
        count: nearestTeachers.length,
        distance: distance / 1000, //in Kilometers
        mapPopupData: nearestTeachers
          .filter((teacher, idx) => idx < 2)
          .map((teacher) => {
            return {
              _id: teacher._id,
              name: teacher.firstname + " " + teacher.lastname,
              rating: teacher.rating,
              experience: teacher.experience,
              classes: teacher.classes,
              profile: teacher.profile,
              slug: teacher.slug,
              // request: {
              //   type: "GET",
              //   url: "http://localhost:3000/orders/" + doc._id,
              // },
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

// @desc post to teacher
// @route /api/v1/teacher
// @access public
exports.addTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.create(req.body);
    // console.log(teacher);
    res.json(teacher);
    return res.status(200).json({
      success: true,
      data: teacher,
    });
  } catch (error) {
    console.error(error);

    if (error.code === 11000) {
      return res.status(400).json({ error: "This teacher already exist" });
    }
    res.status(500).json({ error: error });
  }
};
// @desc post to seed teachers table
// @route /api/v1/teacher
// @access public
exports.seedTeachersData = async (req, res, next) => {
  const teachersData = require("../../../data.json");
  teachersData.map(async (data) => {
    try {
      await Teacher.create(data);
      res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error) {
      console.error(error);
      if (error.code === 11000) {
        res.status(400).json({ error: "This teacher already exist" });
      }
      res.status(500).json({ error: "Server error", error });
    }
  });
};
