const routes = {
  "/": () => `
    <h2>Home</h2>
    <p>Builder Web</p>
    <p>Membantu membuat aplikasi yang cepat dan interaktif</p>
    
    <h3>Form Pemesanan Web</h3>
    <form>
      <div>
        <label>Nama Lengkap:</label>
        <input type="text" placeholder="Masukkan nama lengkap" required>
      </div>
      
      <div>
        <label>Email:</label>
        <input type="email" placeholder="Masukkan email" required>
      </div>
      
      <div>
        <label>Nomor Telepon:</label>
        <input type="tel" placeholder="Masukkan nomor telepon" required>
      </div>
      
      <div>
        <label>Jenis Website:</label>
        <select required>
          <option value="">-- Pilih Jenis Website --</option>
          <option value="landing">Landing Page</option>
          <option value="ecommerce">E-Commerce</option>
          <option value="blog">Blog/Website Berita</option>
          <option value="portfolio">Portfolio</option>
          <option value="company">Company Profile</option>
          <option value="lainnya">Lainnya</option>
        </select>
      </div>
      
      <div>
        <label>Deskripsi Singkat:</label>
        <textarea placeholder="Jelaskan kebutuhan website Anda" rows="5" required></textarea>
      </div>
      
      <button type="submit">Pesan Sekarang</button>
      <button type="reset">Reset</button>
    </form>
  `,
  "/about": () => `
    <h2>About</h2>
    <p>Ini adalah halaman tentang website BEST.</p>
    
    <h3>Data Diri</h3>
    <table border="1" cellpadding="10" cellspacing="0">
      <tr>
        <td><strong>Nama</strong></td>
        <td>Yohanes Zai</td>
      </tr>
      <tr>
        <td><strong>Tempat Lahir</strong></td>
        <td>Merauke</td>
      </tr>
      <tr>
        <td><strong>Minat</strong></td>
        <td>AI, Robotika, mikrokontroler, Backend dan sains</td>
      </tr>
      <tr>
        <td><strong>Kontak Person</strong></td>
        <td>
          <ul>
            <li>WhatsApp: +62 821-9999-8888</li>
            <li>Email: yohanes@example.com</li>
          </ul>
        </td>
      </tr>
    </table>
  `,
  "/map": () => `
    <h2>Lokasi Kami</h2>
    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.278214720292!2d98.70265677378096!3d3.6055232963686006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131760bd40af7%3A0x8a5cc4088dc960ab!2sKost%20Graha%20Jaya!5e1!3m2!1sid!2sid!4v1774820318432!5m2!1sid!2sid"
    width="600" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  `,
};

function router() {
  const path = window.location.pathname;
  const view = routes[path] || (() => `<h2>404</h2><p>Page not found</p>`);
  document.getElementById("app").innerHTML = view();
}

// Navigasi tanpa reload
function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

// Event klik navbar
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigateTo(e.target.href);
  }
});

// Handle back/forward browser
window.addEventListener("popstate", router);

// Initial load
router();
