exports.errorHandler = (error, req, res, next) => {
  let name = "Internal Server Error";
  let code = 500;
  let msg = "";
  if (error.name === "Error login user not found") {
    code = 401;
    name = error.name;
    msg = "invalid email or password";
  } else if (
    error.name === "Error user already exists" ||
    error.name === "Already Exists"
  ) {
    code = 400;
    msg = error.name;
    name = "Bad Request";
  } else if (error.name === "Not Found") {
    code = 404;
    name = error.name;
    msg = "data not found!";
  } else if (error.name === "SequelizeValidationError") {
    name = "Error Validation";
    code = 400;
    msg = error.errors;
  } else if (error.name === " Not Acceptable") {
    code = 406;
    name = error.name;
    msg = error.message;
  } else if (error.name === "Forbidden") {
    code = 403;
    name = error.name;
    msg = error.message;
  }

  res.status(code).json({ name, msg });
};
