// 1. إعداد الاتصال بـ Supabase
const supabaseUrl = 'https://vmrffieodjochyorkgve.supabase.co/rest/v1/cards';
const supabaseKey = 'sb_publishable_HZNkREzI_2VytqnpA0GvXg_2fGkqjny';
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

// دالة عرض المنتجات من البيانات
async function displayProducts() {
  // جلب البيانات من جدول products في Supabase
  const { data: products, error } = await supabase.from('products').select('*');

  if (error) {
    console.error("خطأ في جلب البيانات:", error);
    return;
  }

  const container = document.getElementById('product-container');
  
  // عرض البيانات بناءً على هيكل الـ CSV الذي رفعته
  container.innerHTML = products.map(product => `
    <div class="card">
      <img class="card-image" src="${product.img_url}" alt="${product.title}">
      
      <div class="content-section">
        <div class="button-group">
          <button class="btn">طلب عبر الواتساب</button>
          <button class="btn">المزيد</button>
        </div>
        <div class="text-area">
          <div class="title">${product.title}</div>
          <div class="text">${parseInt(product.price).toLocaleString('ar-SD')} جنيه</div>
        </div>
      </div>
    </div>
  `).join('');
}
