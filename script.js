// ==========================================
// 1. LOGIKA MENU MOBILE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Jalankan pemuat konten & warna CMS dari localStorage
    loadSiteContent();
});

// ==========================================
// 2. DATA DEFAULT & PEMUAT KONTEN DINAMIS
// ==========================================
function getSiteData() {
    const saved = localStorage.getItem('akiyama_cms_data');
    return saved ? JSON.parse(saved) : {};
}

function loadSiteContent() {
    const data = getSiteData();

    // --- HALAMAN HOME ---
    const homeTitle = document.getElementById('cms-home-title');
    if (homeTitle) {
        if (data.home_title) homeTitle.innerHTML = data.home_title;
        if (data.home_title_color) homeTitle.style.color = data.home_title_color;
    }

    const homeDesc = document.getElementById('cms-home-desc');
    if (homeDesc) {
        if (data.home_desc) homeDesc.innerText = data.home_desc;
        if (data.home_desc_color) homeDesc.style.color = data.home_desc_color;
    }

    // --- HALAMAN ABOUT US ---
    const aboutSubtitle = document.getElementById('cms-about-subtitle');
    if (aboutSubtitle) {
        if (data.about_subtitle) aboutSubtitle.innerText = data.about_subtitle;
        if (data.about_subtitle_color) aboutSubtitle.style.color = data.about_subtitle_color;
    }

    const aboutHeading = document.getElementById('cms-about-heading');
    if (aboutHeading) {
        if (data.about_heading) aboutHeading.innerText = data.about_heading;
        if (data.about_heading_color) aboutHeading.style.color = data.about_heading_color;
    }

    const aboutP1 = document.getElementById('cms-about-p1');
    if (aboutP1) {
        if (data.about_p1) aboutP1.innerHTML = data.about_p1;
        if (data.about_text_color) aboutP1.style.color = data.about_text_color;
    }

    const aboutP2 = document.getElementById('cms-about-p2');
    if (aboutP2) {
        if (data.about_p2) aboutP2.innerText = data.about_p2;
        if (data.about_text_color) aboutP2.style.color = data.about_text_color;
    }

    const aboutCeoName = document.getElementById('cms-about-ceo-name');
    if (aboutCeoName) {
        if (data.about_ceo_name) aboutCeoName.innerText = data.about_ceo_name;
        if (data.about_ceo_color) aboutCeoName.style.color = data.about_ceo_color;
    }

    if (data.about_ceo_role && document.getElementById('cms-about-ceo-role')) {
        document.getElementById('cms-about-ceo-role').innerText = data.about_ceo_role;
    }

    // --- HALAMAN DIVISION ---
    if (data.div_subtitle && document.getElementById('cms-div-subtitle')) {
        document.getElementById('cms-div-subtitle').innerText = data.div_subtitle;
    }
    for (let i = 1; i <= 4; i++) {
        const divTitle = document.getElementById(`cms-div${i}-title`);
        if (divTitle) {
            if (data[`div${i}_title`]) divTitle.innerText = data[`div${i}_title`];
            if (data.div_title_color) divTitle.style.color = data.div_title_color;
        }

        const divDesc = document.getElementById(`cms-div${i}-desc`);
        if (divDesc) {
            if (data[`div${i}_desc`]) divDesc.innerText = data[`div${i}_desc`];
            if (data.div_desc_color) divDesc.style.color = data.div_desc_color;
        }

        if (data[`div${i}_status`] && document.getElementById(`cms-div${i}-status`)) {
            document.getElementById(`cms-div${i}-status`).innerText = data[`div${i}_status`];
        }
    }

    // --- HALAMAN STRUCTURE ---
    const roles = [
        'commissioner', 'ceo', 'vice_ceo', 'director',
        'finance', 'operational', 'hr',
        'head_marketing', 'staff_marketing',
        'head_automotive', 'staff_automotive',
        'head_builder', 'staff_builder'
    ];
    roles.forEach(role => {
        const card = document.getElementById(`role-${role}`);
        if (card && data[`struct_${role}`]) {
            const membersArray = data[`struct_${role}`].split(',').map(s => s.trim()).filter(Boolean);
            if (membersArray.length > 0) {
                card.setAttribute('data-members', JSON.stringify(membersArray));
            }
        }
    });

    // --- HALAMAN LOCATION ---
    if (data.loc_img && document.getElementById('cms-loc-img')) {
        document.getElementById('cms-loc-img').src = data.loc_img;
    }
    const locAddress = document.getElementById('cms-loc-address');
    if (locAddress) {
        if (data.loc_address) locAddress.innerText = data.loc_address;
        if (data.loc_address_color) locAddress.style.color = data.loc_address_color;
    }

    // --- HALAMAN CONTACT ---
    const btn1Text = document.getElementById('cms-contact-btn1-text');
    if (btn1Text) {
        if (data.contact_btn1_text) btn1Text.innerText = data.contact_btn1_text;
        if (data.contact_btn1_color) btn1Text.style.color = data.contact_btn1_color;
    }
    if (data.contact_btn1_link && document.getElementById('cms-contact-btn1-link')) {
        document.getElementById('cms-contact-btn1-link').href = data.contact_btn1_link;
    }

    const btn2Text = document.getElementById('cms-contact-btn2-text');
    if (btn2Text) {
        if (data.contact_btn2_text) btn2Text.innerText = data.contact_btn2_text;
        if (data.contact_btn2_color) btn2Text.style.color = data.contact_btn2_color;
    }
    if (data.contact_btn2_link && document.getElementById('cms-contact-btn2-link')) {
        document.getElementById('cms-contact-btn2-link').href = data.contact_btn2_link;
    }
}