document.addEventListener("DOMContentLoaded", function () { //this function execute when dom is loading
    const themeSelect = document.getElementById("theme-select");

    function changeTheme(theme) {
        if (theme === "1") {
            document.documentElement.style.setProperty('--color', '#FF7601');
            document.documentElement.style.setProperty('--color2', '#00809D');
            document.documentElement.style.setProperty('--color3', '#FCECDD');
            document.documentElement.style.setProperty('--color4', '#F3A26D');
        } else if (theme === "2") {
            document.documentElement.style.setProperty('--color', '#FF6F3C');
            document.documentElement.style.setProperty('--color2', '#347433');
            document.documentElement.style.setProperty('--color3', '#FFC107');
            document.documentElement.style.setProperty('--color4', '#B22222');
        } else if (theme === "3") {
            document.documentElement.style.setProperty('--color', '#AEEA94');
            document.documentElement.style.setProperty('--color2', '#4635B1');
            document.documentElement.style.setProperty('--color3', '#B771E5');
            document.documentElement.style.setProperty('--color4', '#FFFBCA');
        }
    }

    changeTheme(themeSelect.value);

    // "hear" the changes
    themeSelect.addEventListener("change", function () {
        changeTheme(this.value);
    });


    document.getElementById("settingsOverlay").onclick = toggleSettings;

    document.getElementById("search-form").addEventListener("submit", function (e) {
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
