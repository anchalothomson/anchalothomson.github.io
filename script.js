/* =========================================
           NAVIGATION APPEARS AFTER HERO
        ========================================= */

        const nav = document.getElementById("nav");

        window.addEventListener("scroll", () => {

            if (window.scrollY > window.innerHeight * 0.65) {

                nav.classList.add("visible");

            } else {

                nav.classList.remove("visible");

            }

        });



        /* =========================================
           LIGHT / DARK MODE
        ========================================= */

        const themeButton =
            document.getElementById("themeButton");

        themeButton.addEventListener("click", () => {

            document.body.classList.toggle("light");

        });