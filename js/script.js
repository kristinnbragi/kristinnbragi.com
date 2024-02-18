// function adjustWoodGrainLines() {
//     const shelfSvg = document.getElementById('shelfSvg');
//     const width = shelfSvg.clientWidth; // Get the current width of the SVG
//     // Determine the number of wood grain lines to show based on the width
//     // Add or remove lines by manipulating the SVG's DOM
// }

// // Listen for resize events
// window.addEventListener('resize', adjustWoodGrainLines);

// Initial adjustment
// adjustWoodGrainLines();


function adjustRect() {
    const container = document.getElementById('shelf-container');
    const rects = document.querySelectorAll('#shelf-svg .shelf-rect');
    const containerWidth = container.offsetWidth;
    let totalHeight = 0;
    let spacingBetweenRects = 0; // Adjust this value if there is space between rects
    const strokeWidthOffset = parseFloat(getComputedStyle(rects[0]).getPropertyValue('stroke-width')) / 2;

    rects.forEach((rect, index) => {
        rect.setAttribute('width', containerWidth - 2 * strokeWidthOffset);
        rect.setAttribute('x', strokeWidthOffset);
        rect.setAttribute('y', strokeWidthOffset + rect.getBBox().height * index);
        totalHeight += rect.getBBox().height + spacingBetweenRects;
    });

    container.style.height = `${totalHeight + 2 * strokeWidthOffset}px`;

    const rightWoodGrains = document.getElementById('shelf-wood-grain-line-group-right');
    rightWoodGrains.setAttribute('transform', `translate(${containerWidth - 2 * strokeWidthOffset}, 0)`);
}

// Adjust on load and window resize
window.addEventListener('load', adjustRect);
window.addEventListener('resize', adjustRect);

// function adjustShelfContainerHeight() {
//     // const container = document.getElementById('shelf-container');
//     // const rects = document.querySelectorAll('#shelf-svg .shelf-rect');
//     // let totalHeight = 0;
//     // let spacingBetweenRects = 0; // Adjust this value if there is space between rects

//     // rects.forEach(rect => {
//     //     // Add the height of each rect to the total height
//     //     totalHeight += rect.getBBox().height + spacingBetweenRects;
//     // });

//     // // Set the total height to the container
//     // container.style.height = `${totalHeight}px`;

//     // // If you want the outer container div to adjust as well, uncomment the following line
//     // // document.getElementById('shelf-container').style.height = `${totalHeight}px`;
// }

// // Call this function to initially set the container height and whenever rects are added or removed
// adjustShelfContainerHeight();
// window.addEventListener('load', adjustShelfContainerHeight);
// window.addEventListener('resize', adjustShelfContainerHeight);
