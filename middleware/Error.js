function notFount(req, res, next) {
  const err = new Error(`not found !!! => ${req.method +" "+ req.protocol+"://"+req.host +req.url }`);
  err.status = 404;
  next(err);
}
function errorHandler(err, req, res, next) {
  console.log(err.stack);
  return res.status(err.status || 500).json({ Error: err.message });
}
module.exports={notFount,errorHandler}