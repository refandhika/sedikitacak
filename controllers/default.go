package controllers

import (
	"github.com/astaxie/beego"
	"time"
)

type MainController struct {
	beego.Controller
}

var tick = time.Now()

type Temp struct {
	Year  int
	Month int
	Day   int
}

func (c *MainController) Get() {

	c.Data["SiteTitle"] = "Sedikit Acak"
	c.Data["Email"] = "refandika@gmail.com"
	c.Data["Page"] = "home"
	c.Data["Time"] = &Temp{Year: tick.Year(), Month: int(tick.Month()), Day: tick.Day()}

	c.Layout = "layout_index.tpl"
	c.TplName = "index.tpl"
	c.LayoutSections = make(map[string]string)
}
