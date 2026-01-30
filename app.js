// DINA COSMETIC - App Logic
const SUPABASE_URL = 'YOUR_SUPABASE_URL'; // Replace with your project URL
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your anon key

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function fetchProducts() {
    const container = document.getElementById('product-container');

    try {
        const { data: products, error } = await supabase
            .from('products')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        if (products && products.length > 0) {
            container.innerHTML = products.map(product => `
                <div class="product-card">
                    <div class="product-image">
                        <img src="${product.images[0] || 'https://via.placeholder.com/300x400'}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="product-price">$${product.price}</p>
                        ${product.is_new_arrival ? '<span class="badge-new">New Arrival</span>' : ''}
                    </div>
                </div>
            `).join('');
        } else {
            container.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">No products found in the collection.</p>';
        }
    } catch (err) {
        console.error('Error fetching products:', err);
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: red;">Failed to load collection. Please verify Supabase connection.</p>';
    }
}

// Simple Cart Mockup
let cartCount = 0;
function updateCart(count) {
    cartCount += count;
    document.getElementById('cart-btn').innerText = `Cart (${cartCount})`;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Only attempt fetch if keys are replaced
    if (SUPABASE_URL !== 'YOUR_SUPABASE_URL') {
        fetchProducts();
    } else {
        console.warn('DINA COSMETIC: Please set your Supabase URL and Key in src/js/app.js');
    }
});
