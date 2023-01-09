exports.errorHandler = (error, req, res, next) => {
  let name = "Internal Server Error";
  let code = 500;

  if (error.msg == "invalid email" || error.msg == "invalid pasword") {
    name = "bad request";
    code = 400;
  } else if (
    error.msg === "already exists profile" ||
    error.msg === "already axists"
  ) {
    name = "forbidden";
    code = 403;
  } else if (
    error.msg === "invalide access_token" ||
    error.msg === "login first" ||
    error.msg === "user cant add hotel"
  ) {
    code = 401;
    name = "Unauthorized";
  }

  res.status(code).json({ name, msg: error.msg });
};
