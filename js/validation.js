const form = document.querySelector('#application-form');
const positionTitle = document.querySelector('#position-title');
const positionInput = document.querySelector('#position');

const validPositions = ['Frontend Developer', 'Data Scientist', 'UX/UI Designer'];
const requestedPosition = new URLSearchParams(window.location.search).get('position');
const selectedPosition = validPositions.includes(requestedPosition) ? requestedPosition : 'งานกับ NovaTech';

if (positionTitle) positionTitle.textContent = selectedPosition;
if (positionInput) positionInput.value = selectedPosition;
document.title = `สมัคร ${selectedPosition} | NovaTech Careers`;

const messages = {
  'first-name': 'กรุณากรอกชื่อ',
  'last-name': 'กรุณากรอกนามสกุล',
  email: 'กรุณากรอกอีเมลให้ถูกต้อง',
  phone: 'กรุณากรอกเบอร์โทรศัพท์ 9–10 หลัก',
  education: 'กรุณาเลือกระดับการศึกษา',
  portfolio: 'กรุณากรอกลิงก์ที่ขึ้นต้นด้วย http:// หรือ https://'
};

function showError(element, message) {
  const field = element.closest('.field');
  if (!field) return;
  field.classList.add('invalid');
  field.querySelector('.error').textContent = message;
}

function clearError(element) {
  const field = element.closest('.field');
  if (!field) return;
  field.classList.remove('invalid');
  field.querySelector('.error').textContent = '';
}

function validateField(element) {
  clearError(element);
  const value = element.value.trim();
  let valid = Boolean(value);
  if (element.id === 'email') valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  if (element.id === 'phone') valid = /^0\d{8,9}$/.test(value.replace(/[-\s]/g, ''));
  if (element.id === 'portfolio') {
    try { const url = new URL(value); valid = ['http:', 'https:'].includes(url.protocol); } catch { valid = false; }
  }
  if (!valid) showError(element, messages[element.id]);
  return valid;
}

if (form) {
  const requiredFields = [...form.querySelectorAll('.field [required]')];
  requiredFields.forEach((field) => field.addEventListener('blur', () => validateField(field)));
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fieldsValid = requiredFields.map(validateField).every(Boolean);
    const consent = document.querySelector('#consent');
    const consentError = document.querySelector('.consent-error');
    consentError.textContent = consent.checked ? '' : 'กรุณายอมรับเงื่อนไขก่อนส่งใบสมัคร';
    if (!fieldsValid || !consent.checked) {
      const firstError = form.querySelector('.invalid input, .invalid select, #consent:not(:checked)');
      firstError?.focus();
      return;
    }
    form.reset();
    window.location.href = 'jobs.html';
  });
}
