package controllers

import (
	"github.com/astaxie/beego"
)

type UthController struct {
	beego.Controller
	isLogin bool
}

func (c *UthController) Prepare() {
	c.Data["SiteTitle"] = "Under The Hood"
	c.Data["Email"] = "refandika@gmail.com"
	c.Data["Page"] = "home"
	c.Data["Time"] = &Temp{Year: tick.Year(), Month: int(tick.Month()), Day: tick.Day()}
}

func (c *UthController) Get() {
	sess := c.GetSession("uth")
	if sess == nil {
		c.SetSession("uth", "Logged In")
		c.Data["Test"] = "Logged Out"

		c.Layout = "uth/layout_out.tpl"
		c.TplName = "uth/index.tpl"
		c.LayoutSections = make(map[string]string)
	} else {
		c.SetSession("uth", "Logged Out")
		c.Data["Test"] = sess

		c.Layout = "uth/layout_in.tpl"
		c.TplName = "uth/index.tpl"
		c.LayoutSections = make(map[string]string)
	}
}
