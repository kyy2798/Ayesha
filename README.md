<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cake & Bakery</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1 id="title">Cake & Bakery</h1>
        <nav>
            <button onclick="changeLanguage('id')">Bahasa Indonesia</button>
            <button onclick="changeLanguage('en')">English</button>
            <button onclick="changeLanguage('ja')">日本語</button>
        </nav>
    </header>

    <main>
        <section id="menu">
            <h2 id="menu-title">Menu</h2>
            <div class="menu-items">
                <!-- Item 1 -->
                <div class="menu-item">
                    <img src="https://anitalianinmykitchen.com/wp-content/uploads/2023/02/tiramisu-cake-sq-1-of-1.jpg" alt="Tiramisu">
                    <h3 id="item-1">Tiramisu</h3>
                    <p id="price-1">25k</p>
                    <div class="quantity-control">
                        <button onclick="adjustQuantity(1, -1)">-</button>
                        <span id="quantity-1">0</span>
                        <button onclick="adjustQuantity(1, 1)">+</button>
                    </div>
                </div>
                
                <!-- Item 2 -->
                <div class="menu-item">
                    <img src="https://sugargeekshow.com/wp-content/uploads/2023/10/easy_chocolate_cake_slice.jpg" alt="Chocolate Cream">
                    <h3 id="item-2">Chocolate Cream</h3>
                    <p id="price-2">25k</p>
                    <div class="quantity-control">
                        <button onclick="adjustQuantity(2, -1)">-</button>
                        <span id="quantity-2">0</span>
                        <button onclick="adjustQuantity(2, 1)">+</button>
                    </div>
                </div>
                
                <!-- Item 3 -->
                <div class="menu-item">
                    <img src="https://zhangcatherine.com/wp-content/uploads/2020/06/12001200.jpg" alt="Strawberry">
                    <h3 id="item-3">Strawberry</h3>
                    <p id="price-3">25k</p>
                    <div class="quantity-control">
                        <button onclick="adjustQuantity(3, -1)">-</button>
                        <span id="quantity-3">0</span>
                        <button onclick="adjustQuantity(3, 1)">+</button>
                    </div>
                </div>
                
                <!-- Item 4 -->
                <div class="menu-item">
                    <img src="https://joyfoodsunshine.com/wp-content/uploads/2022/03/best-cheesecake-recipe-6.jpg" alt="Cheesecake">
                    <h3 id="item-4">Cheesecake</h3>
                    <p id="price-4">30k</p>
                    <div class="quantity-control">
                        <button onclick="adjustQuantity(4, -1)">-</button>
                        <span id="quantity-4">0</span>
                        <button onclick="adjustQuantity(4, 1)">+</button>
                    </div>
                </div>
                
                <!-- Item 5 -->
                <div class="menu-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLnwrVeG6YVjeLXywdHuu8mWp3x1ut44wnGA&s" alt="Cupcake">
                    <h3 id="item-5">Cupcake</h3>
                    <p id="price-5">20k</p>
                    <div class="quantity-control">
                        <button onclick="adjustQuantity(5, -1)">-</button>
                        <span id="quantity-5">0</span>
                        <button onclick="adjustQuantity(5, 1)">+</button>
                    </div>
                </div>
                
                <!-- Item 6 -->
                <div class="menu-item">
                    <img src="https://img-global.cpcdn.com/recipes/017800be4c50ee0f/400x400cq80/photo.jpg" alt="Soft Cookies">
                    <h3 id="item-6">Soft Cookies</h3>
                    <p id="price-6">20k</p>
                    <div class="quantity-control">
                        <button onclick="adjustQuantity(6, -1)">-</button>
                        <span id="quantity-6">0</span>
                        <button onclick="adjustQuantity(6, 1)">+</button>
                    </div>
                </div>
            </div>
        </section>

        <section id="cart">
            <h2 id="cart-title">Keranjang</h2>
            <ul id="cart-items"></ul>
            <h2 id="cart-title">Keranjang</h2>
            <button onclick="viewCart()" class="view-cart-btn">Lihat Keranjang</button>
            <ul id="cart-items"></ul>
        </section>

        <section id="reviews">
            <h2 id="reviews-title">Ulasan Pembeli</h2>
            <div id="review-list">
                <p><strong>Andi:</strong> Kuenya enak banget!</p>
                <p><strong>John:</strong> The cake is delicious!</p>
                <p><strong>山田:</strong> ケーキがとてもおいしいです！</p>
            </div>
        </section>

        <section id="order-form">
            <h2 id="form-title">Formulir Pemesanan</h2>
            <form id="orderForm">
                <label for="name" id="name-label">Nama:</label>
                <input type="text" id="name" name="name" required>

                <label for="email" id="email-label">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="quantity" id="quantity-label">Jumlah:</label>
                <input type="number" id="quantity" name="quantity" min="1" required>

                <button type="submit" id="submit-order">Pesan Sekarang</button>
            </form>
        </section>
    </main>

    <footer>
        <p id="footer-text">© 2026 Sey's Bakery & Cake.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
/* General Styling */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
    color: #333;
}

header {
    background-color: #a67b5b;
    color: white;
    padding: 20px;
    text-align: center;
}

nav button {
    background-color: #8b5e34;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
    border-radius: 5px;
}

nav button:hover {
    background-color: #6d4c2f;
}

main {
    padding: 20px;
}

.menu-items {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.menu-item {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 15px;
    width: 200px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.menu-item img {
    width: 100%;
    border-radius: 10px;
}

.menu-item h3 {
    margin: 10px 0;
    font-size: 18px;
}

.menu-item p {
    margin: 5px 0;
    font-size: 16px;
    color: #a67b5b;
}

.quantity-control {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
}

.quantity-control button {
    background-color: #a67b5b;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
}

.quantity-control button:hover {
    background-color: #8b5e34;
}

.add-btn {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
}

.add-btn:hover {
    background-color: #45a049;
}

#cart {
    margin-top: 30px;
}

#cart-items {
    list-style-type: none;
    padding: 0;
}

#cart-items li {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#cart-items li button {
    background-color: #ff4d4d;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
}

#cart-items li button:hover {
    background-color: #cc0000;
}

footer {
    background-color: #a67b5b;
    color: white;
    text-align: center;
    padding: 10px;
    margin-top: 30px;
    .view-cart-btn {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 15px;
    margin-bottom: 15px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;
}

.view-cart-btn:hover {
    background-color: #45a049;
}
}s
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
