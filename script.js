document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', ()=> {
  mainNav.style.display = mainNav.style.display === 'flex' ? 'none' : 'flex';
  // simple toggle for small screens
});

function submitForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  // Simple client-side behavior: open mailto with prefilled content
  const subject = encodeURIComponent('طلب تواصل من موقع GCS - ' + name);
  const body = encodeURIComponent('الاسم: ' + name + '\nالهاتف: ' + phone + '\nالبريد: ' + email + '\n\nالرسالة:\n' + message);
  window.location.href = 'mailto:info@example.com?subject=' + subject + '&body=' + body;
}
