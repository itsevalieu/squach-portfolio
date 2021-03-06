var express = require("express");
var router = express.Router();

// //Get Homepage
// router.get("/", ensureAuthenticated, function(req, res){
// 	res.render("index", {layout:"portfolio.handlebars"});
// });
// router.get("/portfolio", ensureAuthenticated, function(req, res){
// 	res.render("portfolio", {layout:"portfolio.handlebars"});
// });
// router.get("/contact", ensureAuthenticated, function(req, res){
// 	res.render("contact", {layout:"contact.handlebars"});
// });
// router.get("/resume", ensureAuthenticated, function(req, res){
// 	res.redirect("index");
// });

// function ensureAuthenticated(req, res, next) {
// 	if(req.isAuthenticated()) {
// 		return next();
// 	} else {
// 		req.flash("error_msg", "You are not logged in."); //can remove if want
// 		res.redirect("/users/login");
// 		// res.redirect("/");
// 	}
// }
// function pushProject() {
// 	var projectArray = [];
// 	for(var i=0; i<10; i++) {
// 		projectArray[i];
// 		console.log(projectArray[i]);
// 	}
// 	return project;
// }

router.get("/", function(req, res){
 	res.render("index-body", {layout:"main.handlebars"});
});
router.get("/portfolio", function(req, res){
	//enter object for portfolio art
	var project = {
		title: req.body.title,
		description: req.body.description,
		category: req.body.catergory,
		tags: [],
		image: req.body.image,
	}

 	res.render("portfolio-body", {layout:"portfolio.handlebars"});
});
router.get("/contact", function(req, res){
	//enter object for contact info
	var contact = {
		name: req.body.name,
		email: req.body.email,
		subject: req.body.subject,
		body: req.body.body
	}

 	res.render("contact", {layout:"main.handlebars"}, contact);
});
router.get("/resume", function(req, res){
	//redirect to resume pdf
 	res.render("index", {layout:"main.handlebars"});
});
module.exports = router;

//index is home
//main should be layout for website
