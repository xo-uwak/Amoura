/*code for navigation link toggle open and close*/
let navLinks = document.getElementById('navLinks');

function showMenu(){
  navLinks.style.right = '0';
}
function hideMenu(){
  navLinks.style.right ='-200px';
}




// Load saved reviews

window.onload = function() {
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    savedReviews.forEach(r => displayReview(r, false));
};

function addReview() {
    const name = document.getElementById("reviewName").value.trim();
    const rating = document.getElementById("reviewRating").value;
    const text = document.getElementById("reviewInput").value.trim();

    if (!name || !rating || !text) return;

    const reviewObj = {
        id: Date.now(),
        name,
        rating,
        text,
        date: new Date().toLocaleString()
    };

    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push(reviewObj);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    displayReview(reviewObj, true);

    document.getElementById("reviewName").value = "";
    document.getElementById("reviewRating").value = "";
    document.getElementById("reviewInput").value = "";
}


function displayReview(review, animate) {
    const container = document.getElementById("reviewsContainer");

    const div = document.createElement("div");
    div.className = "review";
    div.setAttribute("data-id", review.id);

    div.innerHTML = `
      <div class="reviewTxt">
        <p>${review.text}</p>
      </div>

      <div class="customerId">
        <div class="Photo">
          <img src="images/kimia-kazemi-WZQWc5iGVCg-unsplash.jpg" alt="" class="displayImg">
        </div>
        <div class=customerDetails>
          <div class="stars">${"⭐".repeat(review.rating)}</div>
          <div class="customerName">
           <h3>${review.name}</h3>
           <p>${review.date}</p>
          </div>
        </div>
      </div>
      
      <div class="actions">
        <button onclick="editReview(${review.id})" class="editReviewBtn">Edit</button>
        <button onclick="deleteReview(${review.id})" class="editReviewBtn">Delete</button>
      </div>
    `;

    container.appendChild(div);

    if (animate) setTimeout(() => div.classList.add("show"), 10);
    else div.classList.add("show");
}

function deleteReview(id) {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews = reviews.filter(r => r.id !== id);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    const div = document.querySelector(`[data-id='${id}']`);
    if (div) div.remove();
}

function editReview(id) {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const review = reviews.find(r => r.id === id);

    const newText = prompt("Edit your review:", review.text);
    if (!newText) return;

    review.text = newText;
    localStorage.setItem("reviews", JSON.stringify(reviews));

    const div = document.querySelector(`[data-id='${id}'] p`);
    if (div) div.textContent = newText;
}










