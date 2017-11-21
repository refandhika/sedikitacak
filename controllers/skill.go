package controllers

import (
	"github.com/astaxie/beego"
)

type SkillController struct {
	beego.Controller
}

func (c *SkillController) Get() {

	c.Data["SiteTitle"] = "Sedikit Acak"
	c.Data["Email"] = "refandika@gmail.com"
	c.Data["Page"] = "skill"
	c.Data["Time"] = &Temp{Year: tick.Year(), Month: int(tick.Month()), Day: tick.Day()}

	c.Layout = "layout_index.tpl"
	c.TplName = "skill.tpl"
	c.LayoutSections = make(map[string]string)
}
