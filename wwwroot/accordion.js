function toggleAccordion(action) {
    let accordionItems = document.querySelectorAll('.accordion-collapse');

    accordionItems.forEach(item => {
        if (action === 'collapse') {
            item.classList.remove('show');  // Collapse all
        } else if (action === 'expand') {
            item.classList.add('show');  // Expand all
        }
    });
}
