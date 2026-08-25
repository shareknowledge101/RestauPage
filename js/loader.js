/* loader.js initialized */
function showLoader() {
  document.getElementById('loader-overlay').classList.remove('hidden');
}

function hideLoader() {
  setTimeout(() => {
    document.getElementById('loader-overlay').classList.add('hidden');
  }, 400);
}

// Initial hide on page load
window.addEventListener('load', hideLoader);