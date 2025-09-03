// Get elements
const donateLink = document.getElementById('donateLink'); // the Donate Now button
const qrModal = document.getElementById('qrModal');
const closeBtn = document.getElementById('closeBtn');

// Open modal on Donate button click
donateLink.addEventListener('click', (e) => {
  e.preventDefault(); // stop page jump
  qrModal.style.display = 'flex';
});

// Close modal when clicking X
closeBtn.addEventListener('click', () => {
  qrModal.style.display = 'none';
});

// Close modal when clicking outside content
window.addEventListener('click', (e) => {
  if (e.target === qrModal) {
    qrModal.style.display = 'none';
  }
});
