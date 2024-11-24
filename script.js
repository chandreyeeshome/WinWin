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


const topicImg = document.querySelector('.topicImg');
const topicsScreenBg = document.querySelector('.topicsScreenBg');
const QorA = document.querySelector('.QorA');

function showQorA() {
  // Add hidden class to fade out topicImg and topicScreenBg
//   topicImg.classList.add('hidden');
//   topicsScreenBg.classList.add('hidden');

  // After the fade-out transition is complete, hide them and show QorA
    topicsScreenBg.style.width = '2000px';
    // topicsScreenBg.style.marginLeft = '10px';
    document.querySelector(".topicWords").classList.add('hidden');
    document.querySelector(".topics").classList.add('hidden');
    setTimeout(() => {
    // topicImg.style.display = 'none';
    // topicsScreenBg.style.display = 'none';
    
        QorA.style.display = 'block';
        QorA.classList.add('show'); // Trigger fade-in
        document.querySelector(".backTopic").classList.add('show');


    // QorA.classList.add('show'); // Trigger fade-in
    // QorA.style.display = 'block'; // Make QorA block to take space

    // QorA.classList.add('show'); // Trigger fade-in
    }, 500); // Match this with the CSS transition duration
}

// Add click event listener to your topic elements
document.querySelectorAll('.topic').forEach(topic => {
  topic.addEventListener('click', showQorA);
});

function hideQorA(){
    topicImg.style.width = '850px';
}
document.querySelector('.backTopic').addEventListener('click', hideQorA);


const balanceButton = document.getElementById('Balance');
const walletButton = document.getElementById('Wallet');
const customcursor = document.querySelector('.custom-cursor');

// Function to hide the custom cursor
function hideCustomCursor() {
    customcursor.style.opacity = '0';
}

// Function to show the custom cursor
function showCustomCursor() {
    customcursor.style.opacity = '1';
}

// Attach event listeners
balanceButton.addEventListener('mouseenter', hideCustomCursor);
balanceButton.addEventListener('mouseleave', showCustomCursor);
walletButton.addEventListener('mouseenter', hideCustomCursor);
walletButton.addEventListener('mouseleave', showCustomCursor);




// const QA = document.querySelector('.QorA');
// QA.classList.add("hide");
// const topics = document.querySelectorAll('.topic'); // Select all topic elements
// const questionBoxes = document.querySelectorAll(".topicsScreenBg, .topicImg"); // Select both elements to hide

// // Loop through each topic element and add the event listener
// topics.forEach(topic => {
//     topic.addEventListener("click", () => {
//         questionBoxes.forEach(box => {
//             // document.querySelector(".topicImg").classList.add("hide");
//             box.classList.add("hide"); // Hide both types of question boxes
//         });
//         // document.querySelector(".topicImg").classList.add("hide");
//         // questionBoxes.classList.add("hide");
//         QA.classList.remove("hide"); // Show the QA element
//     });
// });


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
