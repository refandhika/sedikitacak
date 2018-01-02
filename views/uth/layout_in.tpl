<!DOCTYPE html>
<html>
	<head>
		<title>{{.SiteTitle}}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" type="text/css" href="/static/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="/static/css/admin.css">
	</head>
	<body>
		<header class="page-header">
			<div class="page-header-cont">
				<div class="page-nav">
					{{if eq .Page "home"}}
					<div class="page-nav-item active-page"><a href="/">Home</a></div>
					{{else}}
					<div class="page-nav-item"><a href="/">Home</a></div>
					{{end}}

					{{if eq .Page "exp"}}
					<div class="page-nav-item active-page"><a href="/exp">Experience</a></div>
					{{else}}
					<div class="page-nav-item"><a href="/exp"exp>Experience</a></div>
					{{end}}

					{{if eq .Page "skill"}}
					<div class="page-nav-item active-page"><a href="/skill">Skill</a></div>
					{{else}}
					<div class="page-nav-item"><a href="/skill">Skill</a></div>
					{{end}}

					{{if eq .Page "about"}}
					<div class="page-nav-item active-page"><a href="/about">About</a></div>
					{{else}}
					<div class="page-nav-item"><a href="/about">About</a></div>
					{{end}}
				</div>
				<div class="page-title"><a href="/">Sedikit Acak</a></div>
			</div>
		</header>
		{{.LayoutContent}}
		<footer class="page-footer">
			<div class="current-date">{{.Time.Day}}/{{.Time.Month}}/{{.Time.Year}}</div>
			<div class="copyright">refandhika &copy; {{.Time.Year}}</div>
		</footer>
		<script type="text/javascript" src="/static/js/script.js"></script>
	</body>
</html>