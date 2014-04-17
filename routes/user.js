
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.show = function(req, res) {
  // find the user from the db using req.params
  res.render('users/show', { title: 'users' } )
}