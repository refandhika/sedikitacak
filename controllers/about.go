package controllers

import (
	"github.com/astaxie/beego"
)

type AboutController struct {
	beego.Controller
}

func (c *AboutController) Get() {

	c.Data["SiteTitle"] = "Sedikit Acak"
	c.Data["Email"] = "refandika@gmail.com"
	c.Data["Page"] = "about"
	c.Data["Time"] = &Temp{Year: tick.Year(), Month: int(tick.Month()), Day: tick.Day()}

	c.Layout = "layout_index.tpl"
	c.TplName = "about.tpl"
	c.LayoutSections = make(map[string]string)
}
