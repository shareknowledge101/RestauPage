/**
 * Restaurant Friends - Application Controller
 */

// Cart & Navigation State
let shoppingCart = [];
let activeCategoryIndex = null;

// DOM Elements
const heroSection = document.getElementById('hero-section');
const moduleContainer = document.getElementById('app-module-container');
const floatingCartBar = document.getElementById('floating-cart-bar');
const cartCountBadge = document.getElementById('cart-count-badge');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartCheckoutBtn = document.getElementById('cart-checkout-btn');
const loaderOverlay = document.getElementById('loader-overlay');
const successModal = document.getElementById('order-success-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');

// Drawer elements
const hamburgerBtn = document.getElementById('hamburger-btn');
const navDrawer = document.getElementById('nav-drawer');
const closeDrawerBtn = document.getElementById('close-drawer');

// Mouse follower
const cursorFollower = document.getElementById('cursor-follower');
if (cursorFollower) {
  document.addEventListener('mousemove', (e) => {
    cursorFollower.style.left = `${e.clientX}px`;
    cursorFollower.style.top = `${e.clientY}px`;
  });
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupCartEvents();
  syncStoredTheme();
});

function syncStoredTheme() {
  const savedTheme = localStorage.getItem('app-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

function setupNavigation() {
  document.addEventListener('click', (e) => {
    const navBtn = e.target.closest('.nav-item-btn, #explore-order-btn');
    if (!navBtn) return;

    closeDrawer();

    const target = navBtn.dataset.target || (navBtn.id === 'drawer-home-btn' ? 'home' : 'order');

    if (target === 'home') {
      openHomePage();
    } else if (target === 'order') {
      openOrderPage();
    } else {
      openDynamicPage(target);
    }
  });

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', () => navDrawer.classList.add('open'));
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
}

function closeDrawer() {
  if (navDrawer) navDrawer.classList.remove('open');
}

function openHomePage() {
  moduleContainer.classList.add('hidden');
  heroSection.classList.remove('hidden');
  floatingCartBar.classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openOrderPage() {
  heroSection.classList.add('hidden');
  moduleContainer.classList.remove('hidden');
  renderOrderMenuModule();
  updateCartUI();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function openDynamicPage(moduleName) {
  heroSection.classList.add('hidden');
  moduleContainer.classList.remove('hidden');
  floatingCartBar.classList.add('hidden');

  moduleContainer.innerHTML = '';

  try {
    if (moduleName === 'weather') {
      if (typeof renderWeatherModule === 'function') {
        moduleContainer.innerHTML = await renderWeatherModule();
      } else {
        moduleContainer.innerHTML = `<div class="order-header-banner"><h2>🌤️ Martil Sea Weather</h2><p>Live coastal conditions and fishing forecasts.</p></div>`;
      }
    } else if (moduleName === 'news') {
      if (typeof renderNewsModule === 'function') {
        moduleContainer.innerHTML = await renderNewsModule();
      } else if (typeof getNewsHTML === 'function') {
        moduleContainer.innerHTML = getNewsHTML();
      } else {
        moduleContainer.innerHTML = `<div class="order-header-banner"><h2>🌊 Fresh Sea News</h2><p>Daily catches and ocean updates.</p></div>`;
      }
    } else if (moduleName === 'about') {
      if (typeof renderAboutModule === 'function') {
        moduleContainer.innerHTML = await renderAboutModule();
      } else {
        moduleContainer.innerHTML = `<div class="order-header-banner"><h2>⚓ About Friends Restaurant</h2><p>Located along the vibrant coast of Martil...</p></div>`;
      }
    }
  } catch (err) {
    console.error('Error loading dynamic page module:', err);
    moduleContainer.innerHTML = `<div class="order-header-banner" style="color: #ff5555;"><h2>Error</h2><p>Failed to load module content.</p></div>`;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderOrderMenuModule() {
  activeCategoryIndex = null;
  moduleContainer.innerHTML = `
    <div class="order-header-banner">
      <h2>Our Fresh Seafood & Dining Menu</h2>
      <p>Select a category to view dishes</p>
    </div>

    <div class="categories-vertical-grid" id="categories-grid-container">
      ${menuData.map((cat, idx) => `
        <div class="category-square-card" onclick="selectCategory(${idx})">
          <img src="${cat.iconImg}" alt="${cat.category}" />
          <span>${cat.category}</span>
        </div>
      `).join('')}
    </div>

    <div id="selected-category-view" class="hidden"></div>
  `;
}

window.selectCategory = function(index) {
  activeCategoryIndex = index;
  const categoryData = menuData[index];
  const gridContainer = document.getElementById('categories-grid-container');
  const selectedView = document.getElementById('selected-category-view');

  gridContainer.classList.add('hidden');
  selectedView.classList.remove('hidden');

  selectedView.innerHTML = `
    <div class="selected-category-header">
      <button class="back-to-categories-btn" onclick="resetCategorySelection()">← Back to Categories</button>
      <h3>${categoryData.category}</h3>
    </div>
    <div class="menu-items-grid" id="items-grid-container"></div>
  `;

  renderCategoryItems(index);
  selectedView.scrollIntoView({ behavior: 'smooth' });
};

window.resetCategorySelection = function() {
  activeCategoryIndex = null;
  document.getElementById('categories-grid-container').classList.remove('hidden');
  document.getElementById('selected-category-view').classList.add('hidden');
};

function renderCategoryItems(index) {
  const gridContainer = document.getElementById('items-grid-container');
  if (!gridContainer || !menuData[index]) return;

  const categoryData = menuData[index];

  gridContainer.innerHTML = categoryData.items.map(item => {
    const cartItem = shoppingCart.find(c => c.id === item.id);
    const qty = cartItem ? cartItem.quantity : 0;
    const hasVariants = Array.isArray(item.variants);
    const defaultPrice = hasVariants ? item.variants[0].price : item.price;

    return `
      <div class="menu-card menu-item-interactive-card" data-id="${item.id}" onclick="handleItemCardClick('${item.id}', event)" style="cursor: pointer;">
        <div class="item-card-image-container" style="width: 100%; height: 160px; border-radius: 12px; overflow: hidden; background: #0c1017; border: 1px solid rgba(0, 229, 255, 0.25); margin-bottom: 12px; position: relative;">
          <img src="${item.image || ''}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <div>
          <div class="menu-card-title">${item.name}</div>
          <div class="menu-card-desc">${item.desc}</div>
        </div>
        ${hasVariants ? `
          <select class="variant-select" id="variant-${item.id}" onclick="event.stopPropagation()" onchange="updateVariantPrice('${item.id}')">
            ${item.variants.map(v => `<option value="${v.price}">${v.name} - ${v.price} DH</option>`).join('')}
          </select>
        ` : ''}
        <div class="menu-card-footer">
          <div class="menu-card-price" id="price-display-${item.id}">${defaultPrice} DH</div>
          <div class="action-btn-container" id="action-container-${item.id}">
            ${qty > 0 ? renderQtyControls(item.id, qty) : `<button class="add-item-btn" onclick="event.stopPropagation(); addToCart('${item.id}', ${index})">+ Add</button>`}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.handleItemCardClick = function(itemId, event) {
  if (event.target.closest('select') || event.target.closest('button')) return;
  const cardElement = event.currentTarget;
  cardElement.style.borderColor = '#00e5ff';
  setTimeout(() => { cardElement.style.borderColor = ''; }, 600);
};

function renderQtyControls(id, qty) {
  return `
    <div class="qty-control-group" onclick="event.stopPropagation()">
      <button class="qty-btn" onclick="modifyQuantity('${id}', -1)">-</button>
      <span class="qty-value">${qty}</span>
      <button class="qty-btn" onclick="modifyQuantity('${id}', 1)">+</button>
    </div>
  `;
}

window.updateVariantPrice = function(id) {
  const select = document.getElementById(`variant-${id}`);
  const priceDisplay = document.getElementById(`price-display-${id}`);
  if (select && priceDisplay) priceDisplay.innerText = `${select.value} DH`;
};

window.addToCart = function(itemId, categoryIdx) {
  const itemData = menuData[categoryIdx].items.find(i => i.id === itemId);
  let selectedPrice = itemData.price;
  let variantName = '';

  if (Array.isArray(itemData.variants)) {
    const select = document.getElementById(`variant-${itemId}`);
    if (select) {
      selectedPrice = parseFloat(select.value);
      variantName = select.options[select.selectedIndex].text.split('-')[0].trim();
    }
  }

  const existing = shoppingCart.find(c => c.id === itemId);
  if (!existing) {
    shoppingCart.push({
      id: itemData.id,
      name: itemData.name + (variantName ? ` (${variantName})` : ''),
      price: selectedPrice,
      quantity: 1
    });
  }

  updateItemCardUI(itemId);
  updateCartUI();
};

window.modifyQuantity = function(itemId, delta) {
  const itemIndex = shoppingCart.findIndex(c => c.id === itemId);
  if (itemIndex > -1) {
    shoppingCart[itemIndex].quantity += delta;
    if (shoppingCart[itemIndex].quantity <= 0) shoppingCart.splice(itemIndex, 1);
  }
  updateItemCardUI(itemId);
  updateCartUI();
};

function updateItemCardUI(itemId) {
  const container = document.getElementById(`action-container-${itemId}`);
  if (!container) return;
  const cartItem = shoppingCart.find(c => c.id === itemId);
  const qty = cartItem ? cartItem.quantity : 0;
  container.innerHTML = qty > 0 ? renderQtyControls(itemId, qty) : `<button class="add-item-btn" onclick="event.stopPropagation(); addToCart('${itemId}', ${activeCategoryIndex})">+ Add</button>`;
}

function updateCartUI() {
  const totalItems = shoppingCart.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalPrice = shoppingCart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  if (totalItems > 0) {
    floatingCartBar.classList.remove('hidden');
    cartCountBadge.innerText = `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;
    cartTotalPrice.innerText = `${totalPrice} DH`;
  } else {
    floatingCartBar.classList.add('hidden');
  }
}

function setupCartEvents() {
  if (cartCheckoutBtn) {
    cartCheckoutBtn.addEventListener('click', () => {
      if (shoppingCart.length === 0) return;

      
      const whatsappNumber = "212657414005"; 

    
      let message = "🌊 *New Order - Friends Restaurant du Poisson* 🌊\n\n";
      message += "Hello, I would like to place the following order:\n";
      
      shoppingCart.forEach((item, index) => {
        message += `${index + 1}. *${item.name}* x${item.quantity} — *${item.price * item.quantity} DH*\n`;
      });

      const totalPrice = shoppingCart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
      message += `\n📦 *Total Amount: ${totalPrice} DH*\n\n`;
      message += "Please confirm my order. Thank you!";

      // 3. Encode the message for a URL URL-safe query string
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // 4. Trigger the preloader animation briefly for a smooth user experience
      floatingCartBar.classList.add('hidden');
      loaderOverlay.classList.remove('hidden');

      setTimeout(() => {
        loaderOverlay.classList.add('hidden');
        
        // 5. Open WhatsApp in a new tab/app window with the text pre-filled and copied
        window.open(whatsappURL, '_blank');

        // 6. Show the success modal confirmation
        const modalText = successModal.querySelector('p');
        if (modalText) modalText.innerText = "Your order has been formatted and opened in WhatsApp!";
        successModal.classList.add('hidden'); // Reset first
        successModal.classList.remove('hidden');
        successModal.classList.add('visible');

        // 7. Clear the cart and reset views
        shoppingCart = [];
        updateCartUI();
        if (activeCategoryIndex !== null) renderCategoryItems(activeCategoryIndex);
      }, 1200);
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      successModal.classList.remove('visible');
      successModal.classList.add('hidden');
    });
  }
}

// Phone Dropdown Toggle Handler & Outside Click Listener
window.togglePhoneDropdown = function(e) {
  e.stopPropagation();
  const menu = document.getElementById('phone-dropdown-menu');
  if (menu) {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
};

document.addEventListener('click', () => {
  const menu = document.getElementById('phone-dropdown-menu');
  if (menu) {
    menu.style.display = 'none';
  }
});