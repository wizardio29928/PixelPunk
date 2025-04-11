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


    document.addEventListener("DOMContentLoaded", function () {
        const tabs = [
          { id: 1, name: "the last of us 2", link: "index.html" },
          { id: 2, name: "red dead redemption 2", link: "/rdr2/rdr2.html" },
          { id: 3, name: "the witcher 3", link: "/witcher/witcher.html" },
          // Додавай нові вкладки тут
        ];
      
        const tabList = document.getElementById("tabList");
      
        if (tabList) {
          tabs.forEach(tab => {
            const a = document.createElement("a");
            a.className = "tab-item";
            a.innerText = tab.name;
            a.href = tab.link;
            tabList.appendChild(a);
          });
        }
      });
      
      function toggleMenu() {
        document.getElementById("menuModal").classList.toggle("open");
      }