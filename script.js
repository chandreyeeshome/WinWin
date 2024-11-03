const scrollDownBtn = document.getElementById("scrollDownBtn");
scrollDownBtn.classList.add("hidden");
scrollDownBtn.classList.remove("hidden");
// Function to scroll to the next section
scrollDownBtn.addEventListener("click", () => {
    // Adjust the scroll distance as needed (e.g., to the height of the first section)
    window.scrollBy({
        top: window.innerHeight, // Scrolls down by one viewport height
        left: 0,
        behavior: "smooth"
    });
});
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
        // Hide the button when scrolling down
        scrollDownBtn.classList.add("hidden");
    } else {
        // Show the button when scrolling up
        scrollDownBtn.classList.remove("hidden");
    }
    lastScrollTop = currentScroll;
});
// Select the custom cursor element
const customCursor = document.querySelector('.custom-cursor');

// Update cursor position based on mouse movement
document.addEventListener('mousemove', (event) => {
    customCursor.style.left = `${event.clientX}px`;
    customCursor.style.top = `${event.clientY}px`;
});


const QA = document.querySelector('.QorA');
QA.classList.add("hide");
const topics = document.querySelectorAll('.topic'); // Select all topic elements
const questionBoxes = document.querySelectorAll(".topicsScreenBg, .topicImg"); // Select both elements to hide

// Loop through each topic element and add the event listener
topics.forEach(topic => {
    topic.addEventListener("click", () => {
        questionBoxes.forEach(box => {
            // document.querySelector(".topicImg").classList.add("hide");
            box.classList.add("hide"); // Hide both types of question boxes
        });
        QA.classList.remove("hide"); // Show the QA element
    });
});


// const QA = document.querySelector('.QorA');
// const topic = document.querySelectorAll('.topic');
// const questionBoxes = document.querySelectorAll('.topicsScreenBg, .topicImg');

// topic.forEach((item) => {
//     item.addEventListener("click", () => {
//         // Hide the current question boxes
//         questionBoxes.forEach(box => {
//             box.classList.add("hidden");
//             // Ensure to wait until the transition ends before changing the display
//             box.addEventListener('transitionend', () => {
//                 box.style.display = "none"; // Remove it from the layout
//             }, { once: true }); // Remove listener after first execution
//         });

//         // Show QA with transition
//         QA.style.display = "block"; // Ensure it's displayed
//         setTimeout(() => {
//             QA.classList.remove("hidden"); // Start fade in
//             QA.classList.add("show"); // Fade in the new content
//         }, 50); // Delay slightly to ensure the display changes before the fade-in starts
//     });
// });


