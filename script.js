//themechooser
var choosenTheme = 1;
function changeTheme(theme) {
    if (theme === 1) {
        document.documentElement.style.setProperty('--color', '#FF7601');//accent color
        document.documentElement.style.setProperty('--color2', '#00809D');//background color
        document.documentElement.style.setProperty('--color3', '#FCECDD');//text color
        document.documentElement.style.setProperty('--color4', '#F3A26D');//details color
        choosenTheme = 1;
    } else if (theme === 2) {
        document.documentElement.style.setProperty('--color', '#FF6F3C');//accent color
        document.documentElement.style.setProperty('--color2', '#347433');//background color
        document.documentElement.style.setProperty('--color3', '#FFC107');//text color
        document.documentElement.style.setProperty('--color4', '#B22222');//details color
        choosenTheme = 2;
    } else if (theme === 3) {
        document.documentElement.style.setProperty('--color', '#AEEA94');
        document.documentElement.style.setProperty('--color2', '#4635B1');
        document.documentElement.style.setProperty('--color3', '#B771E5');
        document.documentElement.style.setProperty('--color4', '#FFFBCA');
        choosenTheme = 3;
    }
}
changeTheme(choosenTheme);

function toggleSettings() {
    var settings = document.getElementById("settingMenu");
    var overlay = document.getElementById("settingsOverlay");
    if (settings.style.display === "none" || settings.style.display === "") {
        settings.style.display = "block";
        overlay.style.display = "block";
    } else {
        settings.style.display = "none";
        overlay.style.display = "none";
    }
}

window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("settingsOverlay").onclick = toggleSettings;

    document.getElementById("search-form").addEventListener("submit", function(e) {
        e.preventDefault();
        const query = document.getElementById("search-input").value.trim();
        const engine = document.getElementById("search-engine-select").value;
        let url = "";
        if (engine === "google") {
            url = "https://www.google.com/search?q=" + encodeURIComponent(query);
        } else if (engine === "bing") {
            url = "https://www.bing.com/search?q=" + encodeURIComponent(query);
        } else if (engine === "duckduckgo") {
            url = "https://duckduckgo.com/?q=" + encodeURIComponent(query);
        }
        if (url) {
            window.location.href = url;
        }
    });
});