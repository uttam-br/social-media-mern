exports.createPostValidator = (req, res, next) => {
  // if title is empty
  req.check("title", "Write a title").notEmpty();
  req.check("title", "Title must be of between 4 and 150 characters").isLength({
    min: 4,
    max: 150,
  });
  req.check("body", "Write a body").notEmpty();
  req.check("body", "Body must be between 4 to 2000 characters").isLength({
    min: 4,
    max: 2000,
  });
  // check for errors
  const errors = req.validationErrors();
  // if error occured, show the first one.
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  // if no error, continue to next middleware.
  next();
};
