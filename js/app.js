// ==========================================
// js/app.js
// Entry Point Module for Friends Restaurant
// ==========================================

import { renderNewsModule } from './models/newsModel.js';

// Global Application State
const state = {
  cart: [],
  activeCategory: null,
  activeModule: 'home'
};

// DOM Content Loaded Initializer
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

/**
 * Initializes app modules, global event listeners, and navigation
 */
function initApp() {
  console.log('[App] Initializing Friends Restaurant Web Application...');

  // Navigation & Drawer Setup
  setupNavigation();

  // Dynamic Event Delegations
  setupGlobalEvents();

  // Initialize Mouse Follower Light Effect
  initMouseFollower();
}

/**
 * Navigation and Drawer Menu Event Listeners
 */
function setupNavigation() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const closeDrawerBtn = document.getElementById('close-drawer');
  const navDrawer = document.getElementById('nav-drawer');
  const exploreOrderBtn = document.getElementById('explore-order-btn');

  // Hamburger Toggle
  if (hamburgerBtn && navDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      navDrawer.classList.add('open');
    });
  }

  // Close Drawer Button
  if (closeDrawerBtn && navDrawer) {
    closeDrawerBtn.addEventListener('click', () => {
      navDrawer.classList.remove('open');
    });
  }

  // Explore Order CTA Button on Hero
  if (exploreOrderBtn) {
    exploreOrderBtn.addEventListener('click', () => {
      openDynamicPage('order');
    });
  }

  // Drawer Links Navigation Delegation
  const navButtons = document.querySelectorAll('.nav-item-btn');
  navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const targetModule = e.currentTarget.getAttribute('data-target');
      if (targetModule) {
        if (navDrawer) navDrawer.classList.remove('open');
        openDynamicPage(targetModule);
      }
    });
  });
}

/**
 * Handles Module Page Switching & Dynamic Content Rendering
 * @param {string} moduleName - Target module ('home', 'order', 'about', 'news', 'weather')
 */
export async function openDynamicPage(moduleName) {
  state.activeModule = moduleName;
  const heroSection = document.getElementById('hero-section');
  const appContainer = document.getElementById('app-module-container');

  if (!appContainer) return;

  console.log(`[App] Opening module page: ${moduleName}`);

  if (moduleName === 'home') {
    // Show Hero Section, Hide App Container
    if (heroSection) heroSection.classList.remove('hidden');
    appContainer.classList.add('hidden');
    appContainer.innerHTML = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // Hide Hero Section, Show Module Container
  if (heroSection) heroSection.classList.add('hidden');
  appContainer.classList.remove('hidden');
  appContainer.innerHTML = '';

  // Route Module Loading
  switch (moduleName) {
    case 'news':
      await renderNewsModule(appContainer);
      break;

    case 'order':
      renderOrderMenuModule(appContainer);
      break;

    case 'about':
      if (typeof renderAboutModule === 'function') {
        renderAboutModule(appContainer);
      } else {
        renderFallbackAbout(appContainer);
      }
      break;

    case 'weather':
      if (typeof renderWeatherModule === 'function') {
        renderWeatherModule(appContainer);
      } else {
        renderFallbackWeather(appContainer);
      }
      break;

    default:
      appContainer.innerHTML = `<div class="module-error"><h2>Module not found</h2></div>`;
      break;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Render Order Menu Module UI using orderModel data
 * @param {HTMLElement} container 
 */
function renderOrderMenuModule(container) {
  const categories = window.menuCategories;

  if (!categories || !Array.isArray(categories)) {
    container.innerHTML = `
      <div class="order-module-error">
        <h2>Menu items currently unavailable.</h2>
        <p>Please reload the page or contact kitchen staff directly.</p>
      </div>
    `;
    return;
  }

  let categoriesHtml = categories.map((cat, index) => `
    <button class="category-chip ${index === 0 ? 'active' : ''}" data-category-id="${cat.id}">
      <span>${cat.icon}</span> ${cat.name}
    </button>
  `).join('');

  container.innerHTML = `
    <div class="page-order-wrapper">
      <div class="order-header">
        <h2><i class="fa-solid fa-utensils"></i> Our Seafood Menu</h2>
        <p>Select your favorite ocean fresh dishes and order directly to kitchen</p>
      </div>
      <div class="category-bar-scroll">${categoriesHtml}</div>
      <div id="menu-items-grid" class="menu-items-grid"></div>
    </div>
  `;

  // Bind Chip Clicks
  const chips = container.querySelectorAll('.category-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      chips.forEach(c => c.classList.remove('active'));
      const targetChip = e.currentTarget;
      targetChip.classList.add('active');
      const catId = targetChip.getAttribute('data-category-id');
      renderCategoryItems(catId);
    });
  });

  // Render First Category by default
  if (categories.length > 0) {
    renderCategoryItems(categories[0].id);
  }
}

/**
 * Renders items for selected category into the grid
 * @param {string} categoryId 
 */
function renderCategoryItems(categoryId) {
  const grid = document.getElementById('menu-items-grid');
  const categories = window.menuCategories;
  if (!grid || !categories) return;

  const category = categories.find(c => c.id === categoryId);
  if (!category || !category.items) {
    grid.innerHTML = `<p>No items found in this section.</p>`;
    return;
  }

  grid.innerHTML = category.items.map(item => `
    <div class="menu-item-card ocean-border-glow">
      <div class="item-image-wrapper">
        <img src="${item.image || 'assets/images/logo.jpeg'}" alt="${item.name}" loading="lazy">
      </div>
      <div class="item-card-details">
        <h3>${item.name}</h3>
        <p class="item-desc">${item.description || ''}</p>
        <div class="item-card-bottom">
          <span class="item-price">${item.price} MAD</span>
          <button class="add-to-cart-btn" data-item-id="${item.id}" data-category-id="${categoryId}">
            + Add to Cart
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Bind Add to Cart Buttons
  const addBtns = grid.querySelectorAll('.add-to-cart-btn');
  addBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const itemId = e.currentTarget.getAttribute('data-item-id');
      const catId = e.currentTarget.getAttribute('data-category-id');
      addToCart(catId, itemId);
    });
  });
}

/**
 * Cart Management System
 */
function addToCart(categoryId, itemId) {
  const categories = window.menuCategories;
  if (!categories) return;

  const category = categories.find(c => c.id === categoryId);
  if (!category) return;

  const item = category.items.find(i => i.id === itemId);
  if (!item) return;

  const existingIndex = state.cart.findIndex(ci => ci.id === item.id);
  if (existingIndex > -1) {
    state.cart[existingIndex].qty += 1;
  } else {
    state.cart.push({
      id: item.id,
      name: item.name,
      price: parseFloat(item.price),
      qty: 1
    });
  }

  updateCartBar();
}

/**
 * Updates floating sticky cart bar UI
 */
function updateCartBar() {
  const cartBar = document.getElementById('floating-cart-bar');
  const countBadge = document.getElementById('cart-count-badge');
  const totalPrice = document.getElementById('cart-total-price');

  if (!cartBar || !countBadge || !totalPrice) return;

  const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (totalItems > 0) {
    cartBar.classList.remove('hidden');
    countBadge.textContent = `${totalItems} item${totalItems > 1 ? 's' : ''}`;
    totalPrice.textContent = `${totalAmount.toFixed(2)} MAD`;
  } else {
    cartBar.classList.add('hidden');
  }
}

/**
 * Global Event Listeners & Modals
 */
function setupGlobalEvents() {
  const checkoutBtn = document.getElementById('cart-checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', handleWhatsAppCheckout);
  }

  const modalCloseBtn = document.getElementById('modal-close-btn');
  const orderSuccessModal = document.getElementById('order-success-modal');
  if (modalCloseBtn && orderSuccessModal) {
    modalCloseBtn.addEventListener('click', () => {
      orderSuccessModal.classList.add('hidden');
    });
  }
}

/**
 * WhatsApp Order Forwarding Function
 */
function handleWhatsAppCheckout() {
  if (state.cart.length === 0) return;

  let message = `Bonjour Friends Restaurant du Poisson 🌊\nJe souhaite passer la commande suivante depuis le site web:\n\n`;
  let total = 0;

  state.cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    message += `• ${item.name} x${item.qty} - ${itemTotal} MAD\n`;
  });

  message += `\n*Total Estimé: ${total} MAD*`;
  message += `\n\nMerci de me confirmer la prise en charge!`;

  const phone = '212657414005';
  const encodedMessage = encodeURIComponent(message);
  const waUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  state.cart = [];
  updateCartBar();

  const successModal = document.getElementById('order-success-modal');
  if (successModal) successModal.classList.remove('hidden');

  window.open(waUrl, '_blank');
}

/**
 * Mouse Follower Spotlight Shadow Tracker
 */
function initMouseFollower() {
  const follower = document.getElementById('cursor-follower');
  if (!follower) return;

  document.addEventListener('mousemove', (e) => {
    follower.style.transform = `translate3d(${e.clientX - 150}px, ${e.clientY - 150}px, 0)`;
  });
}

function renderFallbackAbout(container) {
  container.innerHTML = `
    <div class="page-about-wrapper">
      <h2>⚓ About Friends Restaurant du Poisson</h2>
      <p>Located on the sunny beachfront of Martil, Morocco. We offer fresh catch fish prepared daily with authentic coastal Moroccan seasoning.</p>
    </div>
  `;
}

function renderFallbackWeather(container) {
  container.innerHTML = `
    <div class="page-weather-wrapper">
      <h2>🌤️ Local Sea Weather - Martil</h2>
      <p>Sunny conditions with gentle coastal breeze. Perfect temperature for outdoor seafood dining on the beach.</p>
    </div>
  `;
}

window.togglePhoneDropdown = function(event) {
  if (event) event.stopPropagation();
  const dropdownMenu = document.getElementById('phone-dropdown-menu');
  if (dropdownMenu) {
    const isVisible = dropdownMenu.style.display === 'block';
    dropdownMenu.style.display = isVisible ? 'none' : 'block';
  }
};

document.addEventListener('click', () => {
  const dropdownMenu = document.getElementById('phone-dropdown-menu');
  if (dropdownMenu) {
    dropdownMenu.style.display = 'none';
  }
});