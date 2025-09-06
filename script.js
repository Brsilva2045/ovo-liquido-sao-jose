// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Redirecionamento absoluto para obrigado.html após envio (Apps Script usa este campo "next")
const redir = document.getElementById('redirect-next');
if (redir) redir.value = new URL('obrigado.html', window.location.href).href;

// Captura UTM e repassa
const params = new URLSearchParams(window.location.search);
['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(k => {
  const el = document.getElementById(k);
  if (el && params.get(k)) el.value = params.get(k);
});
