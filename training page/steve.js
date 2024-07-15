document.addEventListener('DOMContentLoaded', () => {
    const calendarDates = document.querySelector('.calendar-dates');
    const calendarHeader = document.querySelector('.calendar-header span');
    const prevButton = document.querySelector('.calendar-nav button:first-child');
    const nextButton = document.querySelector('.calendar-nav button:last-child');

    let currentDate = new Date();

    function renderCalendar(date) {
        const month = date.getMonth();
        const year = date.getFullYear();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        calendarHeader.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;
        calendarDates.innerHTML = '';

        for (let i = 0; i < firstDay; i++) {
            calendarDates.innerHTML += `<div></div>`;
        }

        for (let i = 1; i <= lastDate; i++) {
            calendarDates.innerHTML += `<div>${i}</div>`;
        }
    }

    prevButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});
// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Example: Toggle menu for mobile devices
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    });
});
