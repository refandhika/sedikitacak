package main

import (
	_ "github.com/go-sql-driver/mysql"

	//"encoding/json"
	"fmt"
	"html/template"
	"log"
	"net/http"
	//"strings"
	"time"
	//"github.com/refandhika/sedikitacak/database"
)

var tick = time.Now()

type data struct {
	SiteTitle string
	Year      int
	Month     int
	Day       int
	Page      string
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	d := &data{"Sedikit Acak", tick.Year(), int(tick.Month()), tick.Day(), "home"}
	t, _ := template.ParseFiles("home.html", "header.html", "footer.html")
	t.Execute(w, d)
}
func aboutHandler(w http.ResponseWriter, r *http.Request) {
	d := &data{"Sedikit Acak", tick.Year(), int(tick.Month()), tick.Day(), "about"}
	t, _ := template.ParseFiles("about.html", "header.html", "footer.html")
	t.Execute(w, d)
}
func experienceHandler(w http.ResponseWriter, r *http.Request) {
	d := &data{"Sedikit Acak", tick.Year(), int(tick.Month()), tick.Day(), "exp"}
	t, _ := template.ParseFiles("exp.html", "header.html", "footer.html")
	t.Execute(w, d)
}
func skillHandler(w http.ResponseWriter, r *http.Request) {
	d := &data{"Sedikit Acak", tick.Year(), int(tick.Month()), tick.Day(), "skill"}
	t, _ := template.ParseFiles("skill.html", "header.html", "footer.html")
	t.Execute(w, d)
}

func main() {
	fmt.Println("Listening to HTTP request on Port 80")
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("assets"))))
	http.HandleFunc("/", homeHandler)
	http.HandleFunc("/about", aboutHandler)
	http.HandleFunc("/exp", experienceHandler)
	http.HandleFunc("/skill", skillHandler)
	fmt.Println(tick.Day(), tick.Month(), tick.Year())
	err := http.ListenAndServe(":80", nil)

	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
