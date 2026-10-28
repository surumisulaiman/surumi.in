const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
  menu.querySelector('span').textContent = open ? '−' : '＋';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.querySelector('span').textContent = '＋';
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.querySelector('span').textContent = '＋';
    menu.focus();
  }
});
const runButton = document.querySelector('#run-demo');
const steps = [...document.querySelectorAll('.demo-steps li')];
runButton.addEventListener('click', async () => {
  runButton.disabled = true;
  runButton.innerHTML = 'A little magic… <span>✳</span>';
  document.querySelector('#demo-message').textContent = 'Demo running — no data is being sent.';
  steps.forEach(step => { step.classList.remove('active', 'done'); step.querySelector('.step-check').textContent = '○'; });
  for (const [index, step] of steps.entries()) {
    step.classList.add('active');
    document.querySelector('#demo-status').textContent = `Step ${index + 1} of 4`;
    await new Promise(resolve => setTimeout(resolve, 850));
    step.classList.remove('active');
    step.classList.add('done');
    step.querySelector('.step-check').textContent = '✓';
  }
  document.querySelector('#demo-status').textContent = 'All connected ✓';
  document.querySelector('#demo-message').textContent = 'And just like that, your team is ready for the next conversation.';
  runButton.innerHTML = 'Try it again <span>↻</span>';
  runButton.disabled = false;
});
document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('surumisulaiman47@gmail.com');
    status.textContent = 'Email copied. Looking forward to your hello!';
  } catch {
    status.textContent = 'You can reach me at surumisulaiman47@gmail.com';
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
