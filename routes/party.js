
/*
 * GET party listing.
 */

exports.show = function(req, res) {
  res.render('parties/show', { title: 'party'} )
}