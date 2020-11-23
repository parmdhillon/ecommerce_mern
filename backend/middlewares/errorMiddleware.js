const notFound = (req, res, next) => {
  res.status(404);
  res.json({ message: '404 Error' });
};

const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({ message: error.message });
};

export { notFound, errorHandler };
