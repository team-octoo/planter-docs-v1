"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    const codeSwitchers = document.querySelectorAll('.codeSwitcher');

    codeSwitchers.forEach((codeSwitcher) => {
        const codeSwitcherTitles = codeSwitcher.querySelectorAll('.codeSwitcherTitle');
        const codeSwitcherPres = codeSwitcher.querySelectorAll('.codeSwitcherPre');

        // Show the first 'codeSwitcherPre' and add 'active' class to the first 'codeSwitcherTitle' on page load
        if (codeSwitcherTitles.length > 0 && codeSwitcherPres.length > 0) {
            let firstCodeSwitcherTitle = codeSwitcherTitles[0];
            let firstCodeSwitcherPre = codeSwitcherPres[0];

            // Display the first 'codeSwitcherPre'
            firstCodeSwitcherPre.classList.remove('hidden');
            
            // Add 'active' class to the first 'codeSwitcherTitle'
            firstCodeSwitcherTitle.classList.add('active');
        }

        // Attach click event listeners to all 'codeSwitcherTitle' elements
        codeSwitcherTitles.forEach((title, index) => {
            title.addEventListener('click', () => {
                hideAllCodeSwitcherPres(codeSwitcherPres);
                // Remove 'active' class from all 'codeSwitcherTitles'
                codeSwitcherTitles.forEach(t => {
                    t.classList.remove('active');
                });
                // Show the selected 'codeSwitcherPre' and add 'active' class to the clicked 'codeSwitcherTitle'
                let codeSwitcherPre = codeSwitcherPres[index];
                if (codeSwitcherPre) {
                    codeSwitcherPre.classList.remove('hidden');
                    title.classList.add('active');
                    // Store selected index in local storage
                    localStorage.setItem(`${codeSwitcher.id}-selectedCodeSwitcherIndex`, index);
                }
            });
        });

        // Check if current title is the last selected one from local storage
        const selectedIndex = localStorage.getItem(`${codeSwitcher.id}-selectedCodeSwitcherIndex`);
        if (selectedIndex !== null && selectedIndex >= 0 && selectedIndex < codeSwitcherTitles.length) {
            const lastSelectedTitle = codeSwitcherTitles[selectedIndex];
            if (lastSelectedTitle) {
                lastSelectedTitle.click(); // Trigger click event on the last selected title to display its corresponding pre
            }
        }
    });
}

function hideAllCodeSwitcherPres(pres) {
    // Hide all 'codeSwitcherPre' elements within the specified array
    pres.forEach(pre => {
        pre.classList.add('hidden');
    });
}
