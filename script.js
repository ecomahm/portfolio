/* =========================================================
   YOUR WINNING ADS
   Add one entry per ad. Two ways to add the video:
   - drive:  the file ID from a Google Drive share link (the part between
             /d/ and /view). The file must be shared as "Anyone with the link".
             The thumbnail is pulled from Drive automatically.
   - video + poster: an mp4 and a jpg still you put in assets/ads/
   - metric (optional): a headline number shown on the card
   ========================================================= */
const ADS = [
  { brand: "Dirty Desires", type: "Couples card game · Top spender in the account", metric: "Ad breakdown", drive: "1XDPopyr7_qbTSw7vGWKoG8qHIcpX-khT" },
  { brand: "Birra Montecassino", type: "Premium beer · “This beer costs 2x more”", metric: "Ad breakdown", drive: "16qAXQw-ilEzx8SUVjk6MaISTK_i61-Vl" },
  { brand: "Cat water fountain", type: "AI animation · “Your senior cat is trying to tell you something”", drive: "1lNhGykg3P4K_HscV1eYJ9AUpObPVbi0f" },
  { brand: "Oral care", type: "Plaque scrape hook", drive: "14yCh7cJ436U7jw-nXFjMIgOXnWCHrcYS" },
  { brand: "Cologne · Singing ad", type: "Crochet AI animation · “Your cologne's fire…”", drive: "17dPVTgD32W77x03T8q0tNjKbTguJ-ES9" },
];

/* AI UGC library: same format as ADS, shown in its own group below */
const UGC = [
  { brand: "Talking head",          type: "AI UGC", drive: "1QaXaRWJdnlYGZBEeoOMvDkAazztc7qmV" },
  { brand: "Podcast split-screen",  type: "AI UGC", drive: "1j_Xv326h2m3vF3vRqiLLEQnup-j6uTQd" },
  { brand: "Talking head",          type: "AI UGC", drive: "14QrC0_VuCzxdNMRYYjgkytChipgFILS5" },
  { brand: "AI podcast",            type: "AI UGC", drive: "1n21B4YNo7GagY5hombdiNQF9FNKPlvfC" },
  { brand: "Split-screen reaction", type: "AI UGC", drive: "1df8_mFJ-uY7K_mnbuJXB3tS1nyo_ntjm" },
  { brand: "Skeleton ad",           type: "AI animation", drive: "1_pndWJx3caeXa9Km0T00jZS3X17gMOnU" },
  { brand: "Product close-up",      type: "AI UGC", drive: "1Us8zm1TzIXdyPnnnW8ga5TEK4gv2P0Ex" },
  { brand: "Problem close-up",      type: "AI UGC", drive: "1p0M9RjzotzNnbYHQqwZhGajhAwTQVsqN" },
  { brand: "Side effects of SSRIs", type: "AI UGC · Talking head", drive: "1-f7vd3VgQL0bA48oRiSzgCH0yky-GmlT" },
  { brand: "Crochet character",     type: "AI animation", drive: "1Oz2nbrhaV4GiL4VWn0DfmxyeBF19f3Nn" },
  { brand: "Spartan character",     type: "AI animation", drive: "1pVI4Y9sG5QRzC-8wlYX4Wq78PgZQYkoA" },
  { brand: "Visual comparison",     type: "AI animation", drive: "1A-gufMDBEa3gDNHPIjfKJrLp-Pl4VVBk" },
  { brand: "Gym scene",             type: "AI UGC", drive: "17ESusD5FkJzUAfXJfR0O9C6sH8loY14s" },
  { brand: "Top-down build",        type: "AI animation", drive: "1ttm440H8huevjgXsAsxOyJjwLQ4r_oI_" },
  { brand: "Couch POV",             type: "AI UGC", drive: "1BukvJioSjEQgLnv_zVJz6fBJmd7WItRG" },
  { brand: "Street interview",      type: "AI UGC", drive: "1F8PDOk-EIDMbHF7YKhynlCTBbi2LsyEb" },
  { brand: "Courtroom drama",       type: "AI UGC", drive: "1YsU-XMwsZeXfJAOosmeYM3hOKvIx6gNo" },
  { brand: "Notepad explainer",     type: "“Why do doctors only care about TSH?”", drive: "1DRJFAZwpZ4y1LedMsDVZ7mIlX7SvNpeH" },
  { brand: "Doctor talking head",   type: "AI UGC", drive: "1im_q3C1dLhq8H-hfKDJ6pih99dxCC0xL" },
  { brand: "Skeleton story",        type: "AI animation", drive: "1Kk2TjgHcDxT4eH2kahRWtJ1-xvNmCVk0" },
  { brand: "Cologne tier list",     type: "AI UGC", drive: "1TAG-Sa6RX1ZQwwj7pyokrEQyoEyCqbEJ" },
];

/* ---------- Build cards ---------- */
function renderCards(list, el) { list.forEach(ad => {
  const b = document.createElement("button");
  b.className = "card glass reveal";
  if (ad.drive) b.dataset.drive = ad.drive; else b.dataset.video = ad.video;
  const poster = ad.drive ? `https://lh3.googleusercontent.com/d/${ad.drive}=w720` : ad.poster;
  b.innerHTML = `
    <div class="thumb">
      <img src="${poster}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">
      ${ad.metric ? `<span class="metric">${ad.metric}</span>` : ""}
      <span class="play"><i class="ph-light ph-play"></i></span>
    </div>
    <div class="card-meta"><h4>${ad.brand}</h4><p>${ad.type}</p></div>`;
  el.appendChild(b);
}); }
renderCards(ADS, document.getElementById("cards"));
renderCards(UGC, document.getElementById("cards-ugc"));

/* ---------- Nav: scrolled state + playhead ---------- */
const nav = document.getElementById("nav");
const playhead = document.getElementById("playhead");
function onScroll() {
  const y = scrollY;
  nav.classList.toggle("scrolled", y > 10);
  const max = document.documentElement.scrollHeight - innerHeight;
  playhead.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Mobile tray ---------- */
const burger = document.getElementById("burger");
function setMenu(open) {
  document.body.classList.toggle("menu-open", open);
  document.body.classList.toggle("locked", open);
  burger.setAttribute("aria-expanded", open);
}
burger.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
document.getElementById("scrim").addEventListener("click", () => setMenu(false));
document.querySelectorAll(".tray a").forEach(a => a.addEventListener("click", () => setMenu(false)));

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { rootMargin: "0px 0px -8% 0px" });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));


/* ---------- Video lightbox ---------- */
const modal = document.getElementById("modal");
const mv = document.getElementById("modalVideo");
const frame = modal.querySelector(".modal-frame");
function openModal() {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
}
function openVideo(src) {
  mv.hidden = false;
  mv.src = src;
  openModal();
  mv.play().catch(() => {});
}
function openDrive(id) {
  mv.hidden = true;
  const f = document.createElement("iframe");
  f.className = "drive-frame";
  f.src = `https://drive.google.com/file/d/${id}/preview`;
  f.allow = "autoplay; fullscreen";
  f.allowFullscreen = true;
  frame.appendChild(f);
  openModal();
}
function closeVideo() {
  frame.querySelector(".drive-frame")?.remove();
  mv.pause(); mv.removeAttribute("src"); mv.load();
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
}
document.addEventListener("click", e => {
  const d = e.target.closest("[data-drive]");
  if (d) return openDrive(d.dataset.drive);
  const t = e.target.closest("[data-video]");
  if (t) openVideo(t.dataset.video);
});
document.getElementById("modalClose").addEventListener("click", closeVideo);
modal.addEventListener("click", e => { if (e.target === modal) closeVideo(); });
addEventListener("keydown", e => { if (e.key === "Escape") { closeVideo(); setMenu(false); } });

/* ---------- Copy buttons ---------- */
const toast = document.getElementById("toast");
document.querySelectorAll("[data-copy]").forEach(b => b.addEventListener("click", e => {
  e.preventDefault(); e.stopPropagation();
  navigator.clipboard?.writeText(b.dataset.copy);
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1400);
}));
