document.addEventListener('DOMContentLoaded', function () {
    
    const navMenu = document.getElementById('nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function () {
            const dropdownContent = this.querySelector('.dropdown-content');
            dropdownContent.style.display = 'block';
            setTimeout(() => {
                dropdownContent.style.opacity = '1';
            }, 10);
        });

        dropdown.addEventListener('mouseleave', function () {
            const dropdownContent = this.querySelector('.dropdown-content');
            dropdownContent.style.opacity = '0';
            setTimeout(() => {
                dropdownContent.style.display = 'none';
            }, 50000); //tiempo que tarda en desaparecer el menu despleegado
        });
    });
});
