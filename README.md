<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cake & Bakery</title>
    <!-- Menggunakan Font Google untuk tampilan lebih modern -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        /* --- General Styling --- */
        :root {
            --primary-color: #8b5e34;
            --secondary-color: #a67b5b;
            --accent-color: #e6b88a;
            --bg-color: #fdfbf7;
            --text-color: #333;
            --white: #ffffff;
            --success: #4CAF50;
            --danger: #ff4d4d;
            --shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
        }

        /* --- Header --- */
        header {
            background-color: var(--primary-color);
            color: var(--white);
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: var(--shadow);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        h1 { margin: 0; font-size: 1.5rem; }
        
        nav button {
            background-color: rgba(255, 255, 255, 0.2);
            color: var(--white);
            border: 1px solid rgba(255, 255, 255, 0.4);
            padding: 8px 15px;
            margin-left: 5px;
            cursor: pointer;
            border-radius: 20px;
            transition: all 0.3s ease;
            font-size: 0.9rem;
        }

        nav button:hover, nav button.active {
            background-color: var(--white);
            color: var(--primary-color);
        }

        /* --- Main Layout --- */
        main {
            padding: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        section { margin-bottom: 3rem; }

        h2 {
            border-bottom: 3px solid var(--secondary-color);
            display: inline-block;
            margin-bottom: 1.5rem;
            color: var(--primary-color);
        }

        /* --- Menu Grid --- */
        .menu-items {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 25px;
        }

        .menu-item {
            background-color: var(--white);
            border-radius: 15px;
            padding: 15px;
            text-align: center;
            box-shadow: var(--shadow);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .menu-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 15px rgba(0,0,0,0.15);
        }

        .menu-item img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 15px;
        }

        .menu-item h3 { margin: 10px 0; font-size: 1.2rem; }
        
        .price-tag {
            font-weight: bold;
            color: var(--secondary-color);
            font-size: 1.1rem;
            margin-bottom: 10px;
        }

        /* --- Controls --- */
        .quantity-control {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin: 10px 0;
        }

        .qty-btn {
            background-color: var(--accent-color);
            border: none;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            font-weight: bold;
            cursor: pointer;
            color: var(--primary-color);
            transition: background 0.2s;
        }

        .qty-btn:hover { background-color: var(--secondary-color); color: white; }

        .add-btn {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 10px;
            width: 100%;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            margin-top: 10px;
            transition: background 0.3s;
        }

        .add-btn:hover { background-color: var(--secondary-color); }

        /* --- Cart Section --- */
        #cart {
            background: var(--white);
            padding: 20px;
            border-radius: 15px;
            box-shadow: var(--shadow);
        }

        #cart-items {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        .cart-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid #eee;
        }

        .cart-item button {
            background-color: var(--danger);
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.8rem;
        }

        .cart-total {
            margin-top: 20px;
            text-align: right;
            font-size: 1.2rem;
            font-weight: bold;
            color: var(--primary-color);
        }

        .cart-actions {
            margin-top: 20px;
            text-align: right;
        }

        .checkout-btn {
            background-color: var(--success);
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 8px;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.3s;
        }

        .checkout-btn:hover { background-color: #45a049; }

        /* --- Reviews --- */
        #review-list {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }
        
        .review-card {
            background: white;
            padding: 15px;
            border-radius: 10px;
            box-shadow: var(--shadow);
            flex: 1 1 300px;
            border-left: 5px solid var(--secondary-color);
        }

        /* --- Modal (Form) --- */
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.5);
            justify-content: center;
            align-items: center;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .modal-overlay.open {
            display: flex;
            opacity: 1;
        }

        .modal-content {
            background: white;
            padding: 30px;
            border-radius: 15px;
            width: 90%;
            max-width: 500px;
            position: relative;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        }

        .modal-overlay.open .modal-content {
            transform: scale(1);
        }

        .close-modal {
            position: absolute;
            top: 15px;
            right: 20px;
            font-size: 1.5rem;
            cursor: pointer;
            color: #888;
        }

        form label { display: block; margin-top: 15px; font-weight: 600; }
        form input {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-sizing: border-box; /* Fix padding issue */
        }

        /* --- Footer --- */
        footer {
            background-color: var(--primary-color);
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 40px;
        }

        /* --- Toast Notification --- */
        #toast-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 2000;
        }

        .toast {
            background-color: #333;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            margin-top: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            animation: slideIn 0.3s ease-out forwards;
            display: flex;
            align-items: center;
        }

        .toast.success { background-color: var(--success); }
        .toast.error { background-color: var(--danger); }

        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        /* Responsive */
        @media (max-width: 600px) {
            header { flex-direction: column; gap: 10px; }
            .menu-item { width: 100%; }
        }
    </style>
</head>
<body>

    <header>
        <h1 id="title">Cake & Bakery</h1>
        <nav>
            <button onclick="changeLanguage('id')" id="btn-id">Bahasa Indonesia</button>
            <button onclick="changeLanguage('en')" id="btn-en">English</button>
            <button onclick="changeLanguage('ja')" id="btn-ja">日本語</button>
        </nav>
    </header>

    <main>
        <!-- Menu Section -->
        <section id="menu">
            <h2 id="menu-title">Menu</h2>
            <div class="menu-items" id="menu-container">
                <!-- Items will be rendered by JS -->
            </div>
        </section>

        <!-- Cart Section -->
        <section id="cart">
            <h2 id="cart-title">Keranjang</h2>
            <div id="cart-content">
                <p id="empty-cart-msg">Keranjang Anda masih kosong.</p>
                <ul id="cart-items"></ul>
                <div class="cart-total" id="cart-total" style="display:none;">Total: 0</div>
                <div class="cart-actions" id="cart-actions" style="display:none;">
                    <button class="checkout-btn" onclick="openOrderModal()" id="checkout-btn">Checkout</button>
                </div>
            </div>
        </section>

        <!-- Reviews Section -->
        <section id="reviews">
            <h2 id="reviews-title">Ulasan Pembeli</h2>
            <div id="review-list">
                <div class="review-card">
                    <p><strong>Andi:</strong> Kuenya enak banget! Lembut dan manisnya pas.</p>
                </div>
                <div class="review-card">
                    <p><strong>John:</strong> The cake is delicious! Best in town.</p>
                </div>
                <div class="review-card">
                    <p><strong>山田:</strong> ケーキがとてもおいしいです！また買います。</p>
                </div>
            </div>
        </section>
    </main>

    <!-- Order Modal -->
    <div class="modal-overlay" id="orderModal">
        <div class="modal-content">
            <span class="close-modal" onclick="closeOrderModal()">&times;</span>
            <h2 id="form-title">Formulir Pemesanan</h2>
            <p id="modal-summary" style="font-size: 0.9rem; color: #666; margin-bottom: 15px;"></p>
            <form id="orderForm" onsubmit="handleOrderSubmit(event)">
                <label for="name" id="name-label">Nama:</label>
                <input type="text" id="name" name="name" required>

                <label for="email" id="email-label">Email:</label>
                <input type="email" id="email" name="email" required>

                <button type="submit" class="add-btn" id="submit-order">Pesan Sekarang</button>
            </form>
        </div>
    </div>

    <!-- Toast Container -->
    <div id="toast-container"></div>

    <footer>
        <p id="footer-text">© 2026 Sey's Bakery & Cake. Seluruh hak cipta dilindungi.</p>
    </footer>

    <script>
        // --- Data Produk (Harga dasar dalam IDR) ---
        const products = {
            1: { 
                id: 1,
                img: "https://anitalianinmykitchen.com/wp-content/uploads/2023/02/tiramisu-cake-sq-1-of-1.jpg",
                name: { id: "Tiramisu", en: "Tiramisu", ja: "ティラミス" }, 
                priceIDR: 25000 
            },
            2: { 
                id: 2,
                img: "https://sugargeekshow.com/wp-content/uploads/2023/10/easy_chocolate_cake_slice.jpg",
                name: { id: "Chocolate Cream", en: "Chocolate Cream", ja: "チョコレートクリーム" }, 
                priceIDR: 25000 
            },
            3: { 
                id: 3,
                img: "https://zhangcatherine.com/wp-content/uploads/2020/06/12001200.jpg",
                name: { id: "Strawberry", en: "Strawberry", ja: "ストロベリー" }, 
                priceIDR: 25000 
            },
            4: { 
                id: 4,
                img: "https://joyfoodsunshine.com/wp-content/uploads/2022/03/best-cheesecake-recipe-6.jpg",
                name: { id: "Cheesecake", en: "Cheesecake", ja: "チーズケーキ" }, 
                priceIDR: 30000 
            },
            5: { 
                id: 5,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLnwrVeG6YVjeLXywdHuu8mWp3x1ut44wnGA&s",
                name: { id: "Cupcake", en: "Cupcake", ja: "カップケーキ" }, 
                priceIDR: 20000 
            },
            6: { 
                id: 6,
                img: "https://img-global.cpcdn.com/recipes/017800be4c50ee0f/400x400cq80/photo.jpg",
                name: { id: "Soft Cookies", en: "Soft Cookies", ja: "ソフトクッキー" }, 
                priceIDR: 20000 
            }
        };

        // --- Terjemahan UI ---
        const translations = {
            id: {
                title: "Cake & Bakery",
                menuTitle: "Menu",
                cartTitle: "Keranjang Belanja",
                reviewsTitle: "Ulasan Pembeli",
                formTitle: "Formulir Pemesanan",
                nameLabel: "Nama Lengkap:",
                emailLabel: "Alamat Email:",
                submitOrder: "Kirim Pesanan",
                checkoutBtn: "Lanjut ke Pembayaran",
                footerText: "© 2026 Sey's Bakery & Cake. Seluruh hak cipta dilindungi.",
                addToCart: "Tambah",
                emptyCart: "Keranjang Anda masih kosong.",
                successMsg: "Pesanan berhasil dikirim!",
                modalSummary: "Total yang harus dibayar:"
            },
            en: {
                title: "Cake & Bakery",
                menuTitle: "Menu",
                cartTitle: "Shopping Cart",
                reviewsTitle: "Customer Reviews",
                formTitle: "Order Form",
                nameLabel: "Full Name:",
                emailLabel: "Email Address:",
                submitOrder: "Place Order",
                checkoutBtn: "Proceed to Checkout",
                footerText: "© 2026 Sey's Bakery & Cake. All rights reserved.",
                addToCart: "Add",
                emptyCart: "Your cart is empty.",
                successMsg: "Order placed successfully!",
                modalSummary: "Total amount to pay:"
            },
            ja: {
                title: "ケーキ＆ベーカリー",
                menuTitle: "メニュー",
                cartTitle: "ショッピングカート",
                reviewsTitle: "お客様の声",
                formTitle: "注文フォーム",
                nameLabel: "氏名:",
                emailLabel: "メールアドレス:",
                submitOrder: "注文を送信",
                checkoutBtn: "レジに進む",
                footerText: "© 2026 Sey's Bakery & Cake. 全著作権所有.",
                addToCart: "追加",
                emptyCart: "カートは空です。",
                successMsg: "注文が正常に送信されました！",
                modalSummary: "お支払い合計:"
            }
        };

        // --- State Aplikasi ---
        let cart = {}; // Format: { productId: quantity }
        let tempQuantities = {}; // Menyimpan input jumlah sementara di menu
        let currentLanguage = 'id';

        // --- Inisialisasi ---
        document.addEventListener('DOMContentLoaded', () => {
            // Inisialisasi jumlah temporer ke 0
            for (let id in products) {
                tempQuantities[id] = 0;
            }
            renderMenu();
            changeLanguage('id');
        });

        // --- Fungsi Format Mata Uang ---
        function formatCurrency(amountInIDR, lang) {
            if (lang === 'id') {
                return `Rp ${amountInIDR.toLocaleString('id-ID')}`;
            } else if (lang === 'en') {
                // Asumsi kurs: 1 USD = 16.000 IDR
                const usd = amountInIDR / 16000;
                return `$ ${usd.toFixed(2)}`;
            } else if (lang === 'ja') {
                // Asumsi kurs: 1 JPY = 105 IDR
                const jpy = Math.floor(amountInIDR / 105);
                return `¥ ${jpy.toLocaleString('ja-JP')}`;
            }
            return amountInIDR;
        }

        // --- Render Menu ---
        function renderMenu() {
            const container = document.getElementById('menu-container');
            container.innerHTML = '';

            for (const id in products) {
                const p = products[id];
                const price = formatCurrency(p.priceIDR, currentLanguage);
                const name = p.name[currentLanguage];

                const html = `
                    <div class="menu-item">
                        <div>
                            <img src="${p.img}" alt="${name}">
                            <h3>${name}</h3>
                            <p class="price-tag">${price}</p>
                        </div>
                        <div>
                            <div class="quantity-control">
                                <button class="qty-btn" onclick="adjustTempQty(${id}, -1)">-</button>
                                <span id="temp-qty-${id}">${tempQuantities[id]}</span>
                                <button class="qty-btn" onclick="adjustTempQty(${id}, 1)">+</button>
                            </div>
                            <button class="add-btn" onclick="addToCart(${id})">${translations[currentLanguage].addToCart}</button>
                        </div>
                    </div>
                `;
                container.innerHTML += html;
            }
        }

        // --- Logika Bahasa ---
        function changeLanguage(lang) {
            currentLanguage = lang;
            
            // Update Text UI
            const t = translations[lang];
            document.getElementById("title").textContent = t.title;
            document.getElementById("menu-title").textContent = t.menuTitle;
            document.getElementById("cart-title").textContent = t.cartTitle;
            document.getElementById("reviews-title").textContent = t.reviewsTitle;
            document.getElementById("form-title").textContent = t.formTitle;
            document.getElementById("name-label").textContent = t.nameLabel;
            document.getElementById("email-label").textContent = t.emailLabel;
            document.getElementById("submit-order").textContent = t.submitOrder;
            document.getElementById("footer-text").textContent = t.footerText;
            document.getElementById("checkout-btn").textContent = t.checkoutBtn;

            // Update Nav Button States
            document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
            document.getElementById(`btn-${lang}`).classList.add('active');

            // Re-render Menu & Cart untuk update harga/nama
            renderMenu();
            updateCartDisplay();
        }

        // --- Logika Kuantitas Menu ---
        function adjustTempQty(id, change) {
            const newQty = tempQuantities[id] + change;
            if (newQty >= 0) {
                tempQuantities[id] = newQty;
                document.getElementById(`temp-qty-${id}`).textContent = newQty;
            }
        }

        // --- Logika Keranjang ---
        function addToCart(id) {
            const qtyToAdd = tempQuantities[id];
            if (qtyToAdd > 0) {
                cart[id] = (cart[id] || 0) + qtyToAdd;
                // Reset temp qty
                tempQuantities[id] = 0;
                document.getElementById(`temp-qty-${id}`).textContent = 0;
                
                updateCartDisplay();
                showToast(`Menambahkan ${qtyToAdd}x ${products[id].name[currentLanguage]}`, 'success');
            } else {
                showToast("Pilih jumlah terlebih dahulu!", 'error');
            }
        }

        function removeFromCart(id) {
            delete cart[id];
            updateCartDisplay();
        }

        function updateCartDisplay() {
            const list = document.getElementById('cart-items');
            const totalEl = document.getElementById('cart-total');
            const emptyMsg = document.getElementById('empty-cart-msg');
            const actions = document.getElementById('cart-actions');
            
            list.innerHTML = '';
            let totalIDR = 0;
            let hasItems = false;

            for (const [id, qty] of Object.entries(cart)) {
                hasItems = true;
                const p = products[id];
                const subtotal = p.priceIDR * qty;
                totalIDR += subtotal;

                const li = document.createElement('li');
                li.className = 'cart-item';
                li.innerHTML = `
                    <span>${p.name[currentLanguage]} (x${qty}) - ${formatCurrency(subtotal, currentLanguage)}</span>
                    <button onclick="removeFromCart(${id})">Hapus</button>
                `;
                list.appendChild(li);
            }

            if (hasItems) {
                emptyMsg.style.display = 'none';
                totalEl.style.display = 'block';
                actions.style.display = 'block';
                totalEl.textContent = `Total: ${formatCurrency(totalIDR, currentLanguage)}`;
                // Simpan total global untuk modal
                window.currentTotal = formatCurrency(totalIDR, currentLanguage);
            } else {
                emptyMsg.style.display = 'block';
                emptyMsg.textContent = translations[currentLanguage].emptyCart;
                totalEl.style.display = 'none';
                actions.style.display = 'none';
                window.currentTotal = 0;
            }
        }

        // --- Toast Notification ---
        function showToast(message, type = 'success') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            toast.textContent = message;
            
            container.appendChild(toast);

            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        // --- Modal & Form Handling ---
        const modal = document.getElementById('orderModal');

        function openOrderModal() {
            if (Object.keys(cart).length === 0) return;
            document.getElementById('modal-summary').textContent = `${translations[currentLanguage].modalSummary} ${window.currentTotal}`;
            modal.classList.add('open');
        }

        function closeOrderModal() {
            modal.classList.remove('open');
        }

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeOrderModal();
        });

        function handleOrderSubmit(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            if (name && email) {
                // Simulasi pengiriman data
                console.log("Order submitted:", { name, email, cart, total: window.currentTotal });
                
                closeOrderModal();
                showToast(`${translations[currentLanguage].successMsg} Terima kasih, ${name}.`, 'success');
                
                // Reset Cart
                cart = {};
                updateCartDisplay();
                document.getElementById('orderForm').reset();
            }
        }
    </script>
</body>
</html>
