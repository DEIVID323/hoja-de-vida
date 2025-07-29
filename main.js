 // Animar barras de progreso al cargar la página
        window.addEventListener('load', function () {
            const progressBars = document.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
        bar.style.width = '0%';
                setTimeout(() => {
            bar.style.width = width;
                }, 500);
            });
        });
