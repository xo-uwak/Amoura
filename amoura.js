/*code for navigation link toggle open and close*/
let navLinks = document.getElementById('navLinks');

function showMenu(){
  navLinks.style.right = '0';
}
function hideMenu(){
  navLinks.style.right ='-200px';
}

/* to send order to mail*/
document.querySelector('.order-form form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const product = document.getElementById('product').value;
  const message = document.getElementById('message').value;
  const mailtoLink = `mailto:uwakreadsgmail.com?subject=New Order from ${name}&body=Name: ${name}%0AEmail: ${email}%0AProduct: ${product}%0AOrder Details: ${message}`;
  window.location.href = mailtoLink;
  alert('Your order request has been processed.');
});