function applyResponsiveDesign() {
        const width = window.innerWidth;
        const h1 = document.querySelector('h1');
        const h3 = document.querySelectorAll('h3');
        const container = document.querySelector('.container');

        // Для мобільних пристроїв
        if (width <= 480) {
            h1.style.fontSize = '1.2rem';
            h3.forEach(el => el.style.fontSize = '0.85rem');
            container.style.padding = '10px';
            container.style.margin = '10px';
        } 
        // Для планшетів
        else if (width <= 768) {
            h1.style.fontSize = '1.5rem';
            h3.forEach(el => el.style.fontSize = '0.95rem');
            container.style.padding = '15px';
            container.style.margin = '20px';
        } 
        // Для ПК
        else {
            h1.style.fontSize = '2rem';
            h3.forEach(el => el.style.fontSize = '1rem');
            container.style.padding = '40px';
            container.style.margin = '80px auto';
        }
    }

    // Запуск при завантаженні та зміні розміру
    window.addEventListener('load', applyResponsiveDesign);
    window.addEventListener('resize', applyResponsiveDesign);