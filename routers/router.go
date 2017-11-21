package routers

import (
	"github.com/astaxie/beego"
	"github.com/refandhika/sedikitacak/controllers"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("/exp", &controllers.ExpController{})
	beego.Router("/skill", &controllers.SkillController{})
	beego.Router("/about", &controllers.AboutController{})
}
