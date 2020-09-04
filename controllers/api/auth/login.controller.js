const redis = require("redis");
const User = require("../../../models/User.model");
//Connet to Redis server
const redisClient = redis.createClient("6379", "localhost");

// client.on("connect", () => {
//   console.log("Redis conneted successfully");
// });

const {
  Unauthorized,
  UnprocessableEntity,
} = require("../../../helpers/errors");

// const createSession = (token, id) =>
//   Promise.resolve(redisClient.set(token, id));

const createSession = (token, id) =>
  Promise.resolve(redisClient.set(token, id));

const handleLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new UnprocessableEntity("Email or password cannot be empty");
  }

  User.findOne({ email: email })
    .exec()
    .then((user) => {
      if (!user) {
        throw new Unauthorized("Incorrect email or password");
      }
      user.loginUser(password, function (err, same, token, user) {
        try {
          if (err) {
            throw new Error(err.message);
          } else if (!same) {
            throw new Unauthorized("Incorrect email or password");
          } else {
            //create session for user
            createSession(token, user._id.toString()).then(() => {
              res.status(200).json({
                status: "ok",
                data: {
                  id: user._id,
                  role: user.role,
                  email: user.email,
                  token,
                },
                message: "User authenticated successfully",
              });
            });
          }
        } catch (error) {
          next(error);
        }
      });
    })
    .catch((err) => {
      next(err);
    });
};

const getUserIdFromSession = (req) => {
  const { authorization } = req.headers;
  return new Promise((resolve, reject) => {
    redisClient.get(authorization, (error, reply) => {
      if (error || !reply) {
        return reject(new Unauthorized("Unauthorized"));
      }
      return resolve(reply);
    });
  });
};

exports.loginController = (req, res, next) => {
  const { authorization } = req.headers;
  authorization
    ? getUserIdFromSession(req)
        .then((userId) => {
          res.json({
            status: "ok",
            data: { userId },
            message: "User valid session",
          });
        })
        .catch((err) => next(err))
    : handleLogin(req, res, next);
};
