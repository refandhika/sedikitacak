package controllers

import (
	"github.com/astaxie/beego"
)

type ExpController struct {
	beego.Controller
}

func (c *ExpController) Get() {

	c.Data["SiteTitle"] = "Sedikit Acak"
	c.Data["Email"] = "refandika@gmail.com"
	c.Data["Page"] = "exp"
	c.Data["Time"] = &Temp{Year: tick.Year(), Month: int(tick.Month()), Day: tick.Day()}

	c.Layout = "layout_index.tpl"
	c.TplName = "exp.tpl"
	c.LayoutSections = make(map[string]string)
}
