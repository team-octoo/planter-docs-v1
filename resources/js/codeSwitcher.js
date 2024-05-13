"use strict";

// Ensure the DOM content is fully loaded before initializing
document.addEventListener("DOMContentLoaded", initializeCodeSwitchers);

function initializeCodeSwitchers() {
    const codeSwitchers = document.querySelectorAll('.codeSwitcher');

    // Iterate over each code switcher element
    codeSwitchers.forEach((codeSwitcher) => {
        const codeSwitcherTitles = codeSwitcher.querySelectorAll('.codeSwitcherTitle');
        const codeSwitcherPres = codeSwitcher.querySelectorAll('.codeSwitcherPre');

        // Show the first 'codeSwitcherPre' and activate the first 'codeSwitcherTitle' initially
        if (codeSwitcherTitles.length > 0 && codeSwitcherPres.length > 0) {
            let firstCodeSwitcherTitle = codeSwitcherTitles[0];
            let firstCodeSwitcherPre = codeSwitcherPres[0];

            // Display the first 'codeSwitcherPre'
            showCodeSwitcherPre(firstCodeSwitcherPre);
            // Activate the first 'codeSwitcherTitle'
            activateCodeSwitcherTitle(firstCodeSwitcherTitle);
        }

        // Attach click event listeners to all 'codeSwitcherTitle' elements
        codeSwitcherTitles.forEach((title, index) => {
            title.addEventListener('click', () => {
                // Hide all 'codeSwitcherPre' elements
                hideAllCodeSwitcherPres(codeSwitcherPres);
                // Deactivate all 'codeSwitcherTitles'
                deactivateAllCodeSwitcherTitles(codeSwitcherTitles);

                // Show the selected 'codeSwitcherPre' and activate the clicked 'codeSwitcherTitle'
                let selectedCodeSwitcherPre = codeSwitcherPres[index];
                if (selectedCodeSwitcherPre) {
                    showCodeSwitcherPre(selectedCodeSwitcherPre);
                    activateCodeSwitcherTitle(title);

                    // Store the selected index in local storage
                    storeSelectedIndexInLocalStorage(codeSwitcher.id, index);
                }
            });
        });

        // Check if there's a previously selected title stored in local storage
        let selectedIndex = localStorage.getItem(`${codeSwitcher.id}-selectedCodeSwitcherIndex`);
        if (isValidIndex(selectedIndex, codeSwitcherTitles.length)) {
            const lastSelectedTitle = codeSwitcherTitles[selectedIndex];
            if (lastSelectedTitle) {
                // Trigger click event on the last selected title to display its corresponding pre
                lastSelectedTitle.click();
            }
        }
    });
}

function hideAllCodeSwitcherPres(pres) {
    // Hide all 'codeSwitcherPre' elements
    pres.forEach(pre => {
        hideCodeSwitcherPre(pre);
    });
}

function showCodeSwitcherPre(pre) {
    // Display the specified 'codeSwitcherPre'
    pre.classList.remove('hidden');
}

function hideCodeSwitcherPre(pre) {
    // Hide the specified 'codeSwitcherPre'
    pre.classList.add('hidden');
}

function activateCodeSwitcherTitle(title) {
    // Add 'active' class to the specified 'codeSwitcherTitle'
    title.classList.add('active');
}

function deactivateAllCodeSwitcherTitles(titles) {
    // Remove 'active' class from all 'codeSwitcherTitles'
    titles.forEach(title => {
        title.classList.remove('active');
    });
}

function storeSelectedIndexInLocalStorage(codeSwitcherId, index) {
    // Store the selected index in local storage
    localStorage.setItem(`${codeSwitcherId}-selectedCodeSwitcherIndex`, index);
}

function isValidIndex(index, length) {
    // Check if the index is valid within the range of titles
    return index !== null && index >= 0 && index < length;
}
