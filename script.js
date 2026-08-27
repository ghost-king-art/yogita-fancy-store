// ==========================================
// YOGITA FANCY STORE - SCRIPT.JS (ROOT PATHS)
// ==========================================

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

const locationBtn = document.getElementById("locationBtn");
if (locationBtn) {
  locationBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const address = "Near Ganesh Ji Temple, Purana Bazaar, Bhanpur Kalan, Jaipur, Rajasthan, 302028, India";
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, "_blank");
  });
}

// DIRECT FILE NAMES (MATCHING GITHUB ROOT)
const rakhiProducts = [
  { name: "Designer Festive Rakhi", category: "Rakhi Special", image: "rakhi-01.jpg" },
  { name: "Peacock Rakhi", category: "Rakhi Special", image: "11.png" },
  { name: "Revolving Rakhi", category: "Rakhi Special", image: "12.png" },
  { name: "Veera Rakhi", category: "Rakhi Special", image: "13.png" },
  { name: "Traditional Thread Rakhi", category: "Rakhi Special", image: "rakhi-02.jpg" }
];

const cosmeticsProducts = [
  { name: "Chanel N°5 Eau De Parfum", category: "Cosmetics & Beauty", image: "chanel-no5.jpg" },
  { name: "Miss Dior Eau De Parfum", category: "Cosmetics & Beauty", image: "miss-dior.jpg" },
  { name: "Prada Milano Fragrance", category: "Cosmetics & Beauty", image: "prada-milano.jpg" },
  { name: "Fratelli Diamanti Milano", category: "Cosmetics & Beauty", image: "fratelli.jpg" },
  { name: "Dior Lip Glow Reviver Balm", category: "Cosmetics & Beauty", image: "dior-lip-glow.jpg" },
  { name: "e.l.f. Power Grip Primer", category: "Cosmetics & Beauty", image: "elf-primer.jpg" },
  { name: "Kylie Jenner Sculpt Face Palette", category: "Cosmetics & Beauty", image: "kylie-palette.jpg" },
  { name: "Sarah's Beauty Eyeshadow Palette", category: "Cosmetics & Beauty", image: "eyeshadow-palette.jpg" },
  { name: "Colorama Nail Enamel", category: "Cosmetics & Beauty", image: "colorama-nail.jpg" }
];

const choodaProducts = [
  { name: "Traditional Rajasthani Chura Set", category: "Bangles / Chooda", image: "chooda-01.jpg" },
  { name: "Bridal Red & Gold Bangle Pair", category: "Bangles / Chooda", image: "chooda-02.jpg" },
  { name: "Green Kundan Bangles Set With Pearl Border", category: "Bangles / Chooda", image: "01.png" },
  { name: "Traditional Bridal Chooda", category: "Bangles / Chooda", image: "02.png" },
  { name: "Multicolor Stone Bridal Bangle Set", category: "Bangles / Chooda", image: "03.png" },
  { name: "Silver Oxidised Mirror Jhumka Bangles Set", category: "Bangles / Chooda", image: "04.png" },
  { name: "Meenakari Lac Bangles Set", category: "Bangles / Chooda", image: "05.png" },
  { name: "Kundan Bangle Set with Gold Plating", category: "Bangles / Chooda", image: "06.png" },
  { name: "Traditional Bangle For Wedding", category: "Bangles / Chooda", image: "07.png" },
  { name: "Kundan Polki Bangle Set", category: "Bangles / Chooda", image: "08.png" },
  { name: "Kundan Bangle Set with Polki Stones", category: "Bangles / Chooda", image: "09.png" },
  { name: "Heavy Kundan Rajwadi Bangle Set", category: "Bangles / Chooda", image: "10.png" },
  { name: "Rajasthani Bridal Chura Set", category: "Bangles / Chooda", image: "14.png" }
];

const giftsProducts = [
  { name: "Metallic Ribbon Hair Bow Clip", category: "Fancy Items & Jewellery", image: "bow-clip.jpg" },
  { name: "Shipon Traders Fashion Jewellery", category: "Fancy Items & Jewellery", image: "fashion-jewelry.jpg" },
  { name: "Peacock Polki Fushion Earcuff Earrings", category: "Fancy Items & Jewellery", image: "15.png" },
  { name: "Ornate Golden Gemstone Earrings", category: "Fancy Items & Jewellery", image: "16.png" },
  { name: "Nickel-Free Statement Ring Collection", category: "Fancy Items & Jewellery", image: "statement-rings.jpg" }
];

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

setupCollection("rakhiGrid", "loadMoreRakhi", rakhiProducts);
setupCollection("cosmeticsGrid", "loadMoreCosmetics", cosmeticsProducts);
setupCollection("choodaGrid", "loadMoreChooda", choodaProducts);
setupCollection("giftsGrid", "loadMoreGifts", giftsProducts);
