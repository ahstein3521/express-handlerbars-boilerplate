module.exports=function(app){
	app.get("/",function(req,res){
		res.render("home", {title:"HOME",message:"Boilerplate Express Code"});
	})
}