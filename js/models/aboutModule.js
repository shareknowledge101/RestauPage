/**
 * Friends Restaurant - About Us "Treasure Box" Module (Fully Responsive)
 */

window.toggleTreasureChest = function() {
  const paper = document.getElementById('treasure-paper');
  const btn = document.querySelector('.chest-lid-trigger');
  if (!paper) return;

  paper.classList.toggle('revealed');
  if (paper.classList.contains('revealed')) {
    btn.innerHTML = '<span>🔒</span> Close Treasure Box';
    btn.style.background = 'linear-gradient(135deg, #00e5ff 0%, #0088ff 100%)';
    btn.style.color = '#fff';
    paper.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else {
    btn.innerHTML = '<span>🗝️</span> Open Treasure Box';
    btn.style.background = 'linear-gradient(135deg, #00e5ff 0%, #0088ff 100%)';
    btn.style.color = '#0b0f19';
  }
};

async function renderAboutModule() {
  return `
    <style>
      .treasure-container {
        width: 100%;
        max-width: 750px;
        margin: 30px auto;
        padding: 0 15px;
        box-sizing: border-box;
      }

      .treasure-chest-box {
        background: rgba(64, 67, 73, 0.15);
        border: 2px solid rgba(30, 33, 33, 0.3);
        border-radius: 20px;
        padding: 25px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.19);
        transition: all 0.4s ease;
      }

      @media (min-width: 768px) {
        .treasure-chest-box {
          padding: 40px;
        }
      }

      .treasure-chest-box:hover {
        border-color: #4044445f;
        box-shadow: 0 15px 40px rgba(0, 229, 255, 0.2);
      }

      .chest-lid-trigger {
        background: linear-gradient(135deg, #65e1ef 0%, #48a3f2 100%);
        color: #0b0f19;
        font-weight: 800;
        font-size: 1rem;
        border: none;
        padding: 12px 24px;
        border-radius: 14px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        transition: transform 0.2s ease, filter 0.2s ease;
        box-shadow: 0 5px 15px rgba(0, 229, 255, 0.3);
        width: 100%;
      }

      @media (min-width: 576px) {
        .chest-lid-trigger {
          width: auto;
          font-size: 1.1rem;
          padding: 14px 28px;
        }
      }

      .chest-lid-trigger:hover {
        transform: scale(1.02);
        filter: brightness(1.1);
      }

      /* Old paper scroll effect */
      .old-paper-scroll {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease;
        opacity: 0;
        margin-top: 0;
      }

      .old-paper-scroll.revealed {
        max-height: 1200px;
        opacity: 1;
        margin-top: 25px;
      }

      .paper-sheet {
        background: linear-gradient(135deg, #f4ebd0 0%, #e3d2ad 100%);
        color: #2c221e;
        padding: 20px 18px;
        border-radius: 12px;
        border: 3px solid #b89753;
        box-shadow: inset 0 0 30px rgba(139, 94, 41, 0.25), 0 8px 25px rgba(0,0,0,0.5);
        text-align: left;
        position: relative;
        font-family: 'Georgia', serif;
      }

      @media (min-width: 768px) {
        .paper-sheet {
          padding: 35px 30px;
        }
      }

      .paper-sheet::before {
        content: "";
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: radial-gradient(circle, transparent 60%, rgba(139, 94, 41, 0.15) 100%);
        pointer-events: none;
        border-radius: 9px;
      }

      .paper-title {
        font-size: 1.2rem;
        font-weight: bold;
        color: #4a2e18;
        margin-bottom: 12px;
        border-bottom: 2px dashed #b89753;
        padding-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      @media (min-width: 768px) {
        .paper-title {
          font-size: 1.4rem;
          margin-bottom: 15px;
          padding-bottom: 10px;
        }
      }

      .paper-body {
        font-size: 0.95rem;
        line-height: 1.6;
        color: #3b2b20;
        white-space: pre-line;
      }

      @media (min-width: 768px) {
        .paper-body {
          font-size: 1.02rem;
          line-height: 1.7;
        }
      }
    </style>

    <div class="order-header-banner">
      <h2>⚓ About Friends Restaurant</h2>
      <p>Discover our heritage along the Martil coast</p>
    </div>

    <div class="treasure-container">
      <div class="treasure-chest-box">
        <p style="color: #a5b4fc; margin-bottom: 20px; font-size: 0.95rem; text-align: center;">
          🔒 A hidden maritime story lies locked inside. Unlock the treasure box to reveal our history.
        </p>
        
        <div style="text-align: center;">
          <button class="chest-lid-trigger" onclick="toggleTreasureChest()">
            <span>🗝️</span> Open Treasure Box
          </button>
        </div>

        <div id="treasure-paper" class="old-paper-scroll">
          <div class="paper-sheet">
            <div class="paper-title">
              <span>📜</span> Captain's Journal & Heritage
            </div>
            <div class="paper-body">
Welcome to Friends Restaurant du Poisson, Martil’s premier destination for authentic, Mediterranean-inspired seafood and timeless coastal dining. Situated right in the heart of Martil, our restaurant was founded on a simple passion: bringing the absolute freshest catch of the day straight from the local sea to your table.  Our kitchen celebrates the rich culinary heritage of the Moroccan coast, blending time honored traditional recipes with vibrant flavors. Every dish tells a story of quality and craftsmanship from our sizzling Tajine Pil Pil and classic Spanish Paella to rich seafood bisques, golden crispy mixed fritures, and premium fish grilled over open embers. Beyond our ocean specialties, our expansive menu offers something for everyone, including authentic Moroccan tajines, freshly prepared salads, hearty pasta, and refreshing fruit blends.  At Friends Restaurant du Poisson, we believe that great food is best enjoyed in good company.

We pride ourselves on creating a warm, modern, and welcoming atmosphere where families, friends, and visitors can gather to share memorable meals. Whether you are stopping in for a casual lunch after a day by the sea or celebrating a special evening, our team is dedicated to serving you with unmatched coastal hospitality and the finest flavors Martil has to offer.  
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}