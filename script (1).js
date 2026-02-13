// Data produk
// Data produk dengan nama dan harga dalam 3 bahasa
const products = {
    1: { name: { id: "Tiramisu", en: "Tiramisu", ja: "ティラミス" }, price: { id: "25k", en: "$1.5", ja: "233 ¥" } },
    2: { name: { id: "Chocolate Cream", en: "Chocolate Cream", ja: "チョコレートクリーム" }, price: { id: "25k", en: "$1.5", ja: "233 ¥" } },
    3: { name: { id: "Strawberry", en: "Strawberry", ja: "ストロベリー" }, price: { id: "25k", en: "$1.5", ja: "233 ¥" } },
    4: { name: { id: "Cheesecake", en: "Cheesecake", ja: "チーズケーキ" }, price: { id: "30k", en: "$2.0", ja: "300 ¥" } },
    5: { name: { id: "Cupcake", en: "Cupcake", ja: "カップケーキ" }, price: { id: "20k", en: "$1.0", ja: "200 ¥" } },
    6: { name: { id: "Soft Cookies", en: "Soft Cookies", ja: "ソフトクッキー" }, price: { id: "20k", en: "$1.0", ja: "200 ¥" } }
};

// Data terjemahan untuk semua elemen UI
const translations = {
    id: {
        title: "Cake & Bakery",
        menuTitle: "Menu",
        cartTitle: "Keranjang",
        reviewsTitle: "Ulasan Pembeli",
        formTitle: "Formulir Pemesanan",
        nameLabel: "Nama:",
        emailLabel: "Email:",
        quantityLabel: "Jumlah:",
        submitOrder: "Pesan Sekarang",
        footerText: "© 2026 Sey's Bakery & Cake. Seluruh hak cipta dilindungi.",
        addToCart: "Tambah ke Keranjang"
    },
    en: {
        title: "Cake & Bakery",
        menuTitle: "Menu",
        cartTitle: "Shopping Cart",
        reviewsTitle: "Customer Reviews",
        formTitle: "Order Form",
        nameLabel: "Name:",
        emailLabel: "Email:",
        quantityLabel: "Quantity:",
        submitOrder: "Order Now",
        footerText: "© 2026 Sey's Bakery & Cake. All rights reserved.",
        addToCart: "Add to Cart"
    },
    ja: {
        title: "ケーキ＆ベーカリー",
        menuTitle: "メニュー",
        cartTitle: "ショッピングカート",
        reviewsTitle: "お客様の声",
        formTitle: "注文フォーム",
        nameLabel: "名前:",
        emailLabel: "メールアドレス:",
        quantityLabel: "数量:",
        submitOrder: "注文する",
        footerText: "© 2026 Sey's Bakery & Cake. 全著作権所有.",
        addToCart: "カートに入れる"
    }
};

// State aplikasi
let cart = {};
let currentLanguage = 'id';

// Fungsi perubahan bahasa
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update teks UI
    document.getElementById("title").textContent = translations[lang].title;
    document.getElementById("menu-title").textContent = translations[lang].menuTitle;
    document.getElementById("cart-title").textContent = translations[lang].cartTitle;
    document.getElementById("reviews-title").textContent = translations[lang].reviewsTitle;
    document.getElementById("form-title").textContent = translations[lang].formTitle;
    document.getElementById("name-label").textContent = translations[lang].nameLabel;
    document.getElementById("email-label").textContent = translations[lang].emailLabel;
    document.getElementById("quantity-label").textContent = translations[lang].quantityLabel;
    document.getElementById("submit-order").textContent = translations[lang].submitOrder;
    document.getElementById("footer-text").textContent = translations[lang].footerText;

    // Update tombol "Tambah ke Keranjang"
    document.querySelectorAll(".add-btn").forEach(btn => {
        btn.textContent = translations[lang].addToCart;
    });

    // Update nama dan harga produk
    for (const id in products) {
        document.getElementById(`item-${id}`).textContent = products[id].name[lang];
        document.getElementById(`price-${id}`).textContent = products[id].price[lang];
    }

    // Update tampilan keranjang
    updateCartDisplay();
}

// Fungsi penyesuaian jumlah
function adjustQuantity(productId, change) {
    const quantityElement = document.getElementById(`quantity-${productId}`);
    let quantity = parseInt(quantityElement.textContent) + change;
    quantity = Math.max(0, quantity);
    quantityElement.textContent = quantity;
}

// Fungsi tambah ke keranjang
function addToCart(productId) {
    const quantity = parseInt(document.getElementById(`quantity-${productId}`).textContent);
    if (quantity > 0) {
        cart[productId] = (cart[productId] || 0) + quantity;
        document.getElementById(`quantity-${productId}`).textContent = "0";
        updateCartDisplay();
    }
}

// Fungsi update tampilan keranjang
function updateCartDisplay() {
    const cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = "";
    
    let total = 0;
    
    for (const [productId, quantity] of Object.entries(cart)) {
        const product = products[productId];
        const listItem = document.createElement("li");
        
        listItem.innerHTML = `
            ${product.name[currentLanguage]} (${quantity}x) - 
            ${product.price[currentLanguage]} 
            <button onclick="removeFromCart(${productId})">×</button>
        `;
        
        cartItemsElement.appendChild(listItem);
        total += quantity * parseFloat(product.price[currentLanguage].replace(/[^\d.]/g, ''));
    }
    
    // Tambahkan total
    if (Object.keys(cart).length > 0) {
        const totalElement = document.createElement("li");
        totalElement.innerHTML = `<strong>Total: ${formatTotal(total, currentLanguage)}</strong>`;
        cartItemsElement.appendChild(totalElement);
    }
}

// Fungsi format total
function formatTotal(amount, lang) {
    switch(lang) {
        case 'id': return `Rp ${amount.toFixed(0)}k`;
        case 'en': return `${amount.toFixed(2)}`;
        case 'ja': return `${amount.toFixed(0)} ¥`;
        default: return amount;
    }
}

// Fungsi hapus dari keranjang
function removeFromCart(productId) {
    delete cart[productId];
    updateCartDisplay();
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('id');
    // ... (kode products dan translations tetap sama seperti sebelumnya)

// Fungsi untuk menampilkan detail keranjang
function viewCart() {
    if (Object.keys(cart).length === 0) {
        alert(translations[currentLanguage].emptyCart || "Keranjang kosong");
        return;
    }

    let cartDetails = `${translations[currentLanguage].cartTitle}:

`;
    let total = 0;

    for (const [productId, quantity] of Object.entries(cart)) {
        const product = products[productId];
        const price = parseFloat(product.price[currentLanguage].replace(/[^\d.]/g, ''));
        const subtotal = price * quantity;
        
        cartDetails += `- ${product.name[currentLanguage]} (${quantity}x): ${product.price[currentLanguage]} = ${formatCurrency(subtotal, currentLanguage)}
`;
        total += subtotal;
    }

    cartDetails += `
Total: ${formatCurrency(total, currentLanguage)}`;
    alert(cartDetails);
}

// Fungsi format mata uang
function formatCurrency(amount, lang) {
    switch(lang) {
        case 'id': return `Rp ${amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
        case 'en': return `${amount.toFixed(2)}`;
        case 'ja': return `${amount.toFixed(0)} ¥`;
        default: return amount;
    }
}

// Tambahkan terjemahan untuk keranjang kosong
translations.id.emptyCart = "Keranjang kosong";
translations.en.emptyCart = "Your cart is empty";
translations.ja.emptyCart = "カートは空です";
});