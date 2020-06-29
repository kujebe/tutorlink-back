const Teacher = require("../../../models/Teachers.model");

const teachersData = require("../../../data.json");

//@desc get request to index route
//@route /api/v1/home
//@access public
exports.getHomePageData = async (req, res) => {
  try {
    const getNearTeachers = await Teacher.find({
      location: {
        $near: {
          $maxDistance: 5000,
          $geometry: {
            type: "Point",
            coordinates: [3.38521, 6.53449],
          },
        },
      },
    });
    return res.status(200).json({ nearbyTeachers: getNearTeachers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// @desc post to teacher
// @route /api/v1/teacher
// @access public
exports.addTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.create(req.body);

    return res.status(200).json({
      success: true,
      data: teacher,
    });
  } catch (error) {
    console.error(error);

    if (error.code === 11000) {
      return res.status(400).json({ error: "This teacher already exist" });
    }
    res.status(500).json({ error: "Server error" });
  }
};
// @desc post to seed teachers table
// @route /api/v1/teacher
// @access public
exports.seedTeachersData = (req, res, next) => {
  const teachersData = require("../../../data.json");
  teachersData.map(async (data) => {
    try {
      await Teacher.create(data);
      return res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error) {
      console.error(error);
      if (error.code === 11000) {
        return res.status(400).json({ error: "This teacher already exist" });
      }
      res.status(500).json({ error: "Server error" });
    }
  });
};
