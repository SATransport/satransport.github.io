
function changeLanguage() {
    const lang = document.getElementById("language").value;
    const translations = {
        "de": {
            "from": "Ladepunkt A:",
            "to": "Entladepunkt B:",
            "floor": "Etage (0–10):",
            "helpers": "Benötigen Sie Umzugshelfer?"
        },
        "ru": {
            "from": "Точка загрузки A:",
            "to": "Точка выгрузки B:",
            "floor": "Этаж (0–10):",
            "helpers": "Нужны ли грузчики?"
        }
    };

    document.querySelectorAll('[data-lang]').forEach(el => {
        el.textContent = translations[lang][el.getAttribute('data-lang')];
    });
}
