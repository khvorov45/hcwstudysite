function switch_theme() {
    var theme_css = document.getElementById("theme-css")
    var dark_theme = "dark.css"
    var light_theme = "light.css"
    if (document.getElementById("dark").checked) {
        theme_css.href = dark_theme
    }
    else {
        theme_css.href = light_theme
    }
}

$("[name='my-checkbox']").bootstrapSwitch();
