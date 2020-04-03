function switch_theme() {
    var theme_css = document.getElementById("theme-css")
    var swtich_btn_lab = document.getElementById("current-theme")
    var dark_theme = "dark.css"
    var light_theme = "light.css"
    if (document.getElementById("light").checked) {
        swtich_btn_lab.innerHTML = " dark"
        theme_css.href = light_theme
    }
    else {
        swtich_btn_lab.innerHTML = " light"
        theme_css.href = dark_theme
    }
}
