document.addEventListener("DOMContentLoaded", function() {
    var currentLanguage = localStorage.getItem("language") || "en";
    switchLanguage(currentLanguage);
});

function switchLanguage(language) {
    fetch(`/nav/${language}.md`)
        .then(response => response.text())
        .then(data => {
            document.querySelector('#navbar').innerHTML = data;
            localStorage.setItem("language", language);
        });
}

document.addEventListener("DOMContentLoaded", function() {
    // 获取语言切换链接
    var englishLink = document.querySelector('#english-link');
    var chineseLink = document.querySelector('#chinese-link');

    // 监听语言切换链接点击事件
    englishLink.addEventListener("click", function() {
        // 切换到英文导航
        fetch('/en/nav.md')
            .then(response => response.text())
            .then(data => {
                document.querySelector('#navbar').innerHTML = data;
            });
    });

    chineseLink.addEventListener("click", function() {
        // 切换到中文导航
        fetch('/zh/nav.md')
            .then(response => response.text())
            .then(data => {
                document.querySelector('#navbar').innerHTML = data;
            });
    });
});
