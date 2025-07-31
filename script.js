
function changeLanguage() {
    const lang = document.getElementById("language").value;
    const translations = {
        "de": {
            "from": "Ladepunkt A:",
            "to": "Entladepunkt B:",
            "floor": "Etage:",
            "helpers": "Brauchen Sie Umzugshelfer?"
        },
        "ru": {
            "from": "Точка загрузки A:",
            "to": "Точка выгрузки B:",
            "floor": "Этажность:",
            "helpers": "Нужны ли грузчики?"
        }
    };

    document.querySelectorAll('[data-lang]').forEach(el => {
        el.textContent = translations[lang][el.getAttribute('data-lang')];
    });
}
