// ==========================================
// YOGITA FANCY STORE - SCRIPT.JS
// ==========================================

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// WHATSAPP (PRIMARY NUMBER: 8442021448)
const whatsappNumber = "918442021448";

function openWhatsApp(message) {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

const floatingWhatsapp = document.getElementById("floatingWhatsapp");
if (floatingWhatsapp) {
  floatingWhatsapp.addEventListener("click", (event) => {
    event.preventDefault();
    openWhatsApp("Namaste! Mujhe Yogita Fancy Store ke products aur festive offers ke baare mein enquiry karni hai.");
  });
}

const contactWhatsapp = document.getElementById("contactWhatsapp");
if (contactWhatsapp) {
  contactWhatsapp.addEventListener("click", (event) => {
    event.preventDefault();
    openWhatsApp("Namaste! Mujhe Yogita Fancy Store se product enquiry karni hai.");
  });
}

// GOOGLE MAPS
const locationBtn = document.getElementById("locationBtn");
if (locationBtn) {
  locationBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const address = "Near Ganesh Ji Temple, Purana Bazaar, Bhanpur Kalan, Jaipur, Rajasthan, 302028, India";
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, "_blank");
  });
}

// ==========================================
// CATEGORY-WISE PRODUCT LIST
// ==========================================

const rakhiProducts = [
  {
    name: "Designer Festive Rakhi",
    category: "Rakhi Special",
    image: "images/products/rakhi-01.jpg"
  },
  {
    name: "Peacock Rakhi",
    category: "Rakhi Special",
    image: "images/products/11.png"
  },
  {
    name: "Revolving Rakhi",
    category: "Rakhi Special",
    image: "images/products/12.png"
  },
  {
    name: "Veera Rakhi",
    category: "Rakhi Special",
    image: "images/products/13.png"
  },
  {
    name: "Traditional Thread Rakhi",
    category: "Rakhi Special",
    image: "images/products/rakhi-02.jpg"
  }
];

const cosmeticsProducts = [
  {
    name: "Chanel N°5 Eau De Parfum",
    category: "Cosmetics & Beauty",
    image: "images/products/chanel-no5.jpg"
  },
  {
    name: "Miss Dior Eau De Parfum",
    category: "Cosmetics & Beauty",
    image: "images/products/miss-dior.jpg"
  },
  {
    name: "Prada Milano Fragrance",
    category: "Cosmetics & Beauty",
    image: "images/products/prada-milano.jpg"
  },
  {
    name: "Fratelli Diamanti Milano",
    category: "Cosmetics & Beauty",
    image: "images/products/fratelli.jpg"
  },
  {
    name: "Dior Lip Glow Reviver Balm",
    category: "Cosmetics & Beauty",
    image: "images/products/dior-lip-glow.jpg"
  },
  {
    name: "e.l.f. Power Grip Primer",
    category: "Cosmetics & Beauty",
    image: "images/products/elf-primer.jpg"
  },
  {
    name: "Kylie Jenner Sculpt Face Palette",
    category: "Cosmetics & Beauty",
    image: "images/products/kylie-palette.jpg"
  },
  {
    name: "Sarah's Beauty Eyeshadow Palette",
    category: "Cosmetics & Beauty",
    image: "images/products/eyeshadow-palette.jpg"
  },
  {
    name: "Colorama Nail Enamel",
    category: "Cosmetics & Beauty",
    image: "images/products/colorama-nail.jpg"
  }
];

const choodaProducts = [
  {
    name: "Traditional Rajasthani Chura Set",
    category: "Bangles / Chooda",
    image: "images/products/chooda-01.jpg"
  },
  {
    name: "Bridal Red & Gold Bangle Pair",
    category: "Bangles / Chooda",
    image: "images/products/chooda-02.jpg"
  },
  {
    name: "Green Kundan Bangles Set With Pearl Border And Jhumka Latkans",
    category: "Bangles / Chooda",
    image: "images/products/01.png"
  },
  {
    name: "Traditional Bridal Chooda",
    category: "Bangles / Chooda",
    image: "images/products/02.png"
  },
  {
    name: "Multicolor Stone Bridal Bangle Set",
    category: "Bangles / Chooda",
    image: "images/products/03.png"
  },
  {
    name: "Silver Oxidised Mirror Jhumka Bangles Set",
    category: "Bangles / Chooda",
    image: "images/products/04.png"
  },
  {
    name: "Meenakari Lac Bangles Set with Kundan Work",
    category: "Bangles / Chooda",
    image: "images/products/05.png"
  },
  {
    name: "Kundan Bangle Set with Gold Plating",
    category: "Bangles / Chooda",
    image: "images/products/06.png"
  },
  {
    name: "Traditional Bangle For Wedding",
    category: "Bangles / Chooda",
    image: "images/products/07.png"
  },
  {
    name: "Kundan Polki Bangle Set",
    category: "Bangles / Chooda",
    image: "images/products/08.png"
  },
  {
    name: "Kundan Bangle Set with Polki Stones",
    category: "Bangles / Chooda",
    image: "images/products/09.png"
  },
  {
    name: "Heavy Kundan Rajwadi Bangle Set",
    category: "Bangles / Chooda",
    image: "images/products/10.png"
  },
  {
    name: "Rajasthani Bridal Chura Set for Wedding & Festival Wear",
    category: "Bangles / Chooda",
    image: "images/products/14.png"
  }
];

const giftsProducts = [
  {
    name: "Metallic Ribbon Hair Bow Clip",
    category: "Fancy Items & Jewellery",
    image: "images/products/bow-clip.jpg"
  },
  {
    name: "Shipon Traders Fashion Jewellery",
    category: "Fancy Items & Jewellery",
    image: "images/products/fashion-jewelry.jpg"
  },
  {
    name: "Peacock Polki Fushion Earcuff Earrings",
    category: "Fancy Items & Jewellery",
    image: "images/products/15.png"
  },
  {
    name: "Ornate Golden Gemstone Earrings",
    category: "Fancy Items & Jewellery",
    image: "images/products/16.png"
  },
  {
    name: "Nickel-Free Statement Ring Collection",
    category: "Fancy Items & Jewellery",
    image: "images/products/statement-rings.jpg"
  }
];

// ==========================================
// CLEAN PRODUCT CARD CREATION
// ==========================================

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <div class="product-image">
      <img
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
        onerror="this.parentElement.classList.add('image-error')"
      >
    </div>
    <div class="product-info">
      <span>${product.category}</span>
      <h3>${product.name}</h3>
    </div>
  `;

  return card;
}

// ==========================================
// LOAD MORE COLLECTION SYSTEM
// ==========================================

function setupCollection(gridId, buttonId, products) {
  const grid = document.getElementById(gridId);
  const button = document.getElementById(buttonId);

  if (!grid) return;

  let visible = 0;
  const perLoad = 8;

  function renderProducts() {
    const nextProducts = products.slice(visible, visible + perLoad);

    nextProducts.forEach((product) => {
      grid.appendChild(createProductCard(product));
    });

    visible += nextProducts.length;

    if (button && visible >= products.length) {
      button.style.display = "none";
    }
  }

  renderProducts();

  if (button) {
    button.addEventListener("click", renderProducts);
  }
}

// START ALL COLLECTIONS
setupCollection("rakhiGrid", "loadMoreRakhi", rakhiProducts);
setupCollection("cosmeticsGrid", "loadMoreCosmetics", cosmeticsProducts);
setupCollection("choodaGrid", "loadMoreChooda", choodaProducts);
setupCollection("giftsGrid", "loadMoreGifts", giftsProducts);

console.log("Yogita Fancy Store loaded successfully!");