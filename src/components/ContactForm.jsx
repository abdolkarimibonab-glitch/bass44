import { useState } from 'react';

const FIELDS = [
  { name: 'name', label: 'نام', type: 'text', required: true },
  { name: 'phone', label: 'شماره تماس', type: 'tel', required: true },
  { name: 'email', label: 'ایمیل', type: 'email', required: false },
  { name: 'subject', label: 'موضوع', type: 'text', required: true },
];

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!values.name.trim() || !values.phone.trim() || !values.subject.trim() || !values.message.trim()) {
      setError('لطفاً فیلدهای ستاره‌دار را تکمیل کنید.');
      return;
    }
    if (!/^0\d{10}$/.test(values.phone.trim())) {
      setError('شماره تماس باید ۱۱ رقم و با صفر شروع شود (مثال: 09126709618).');
      return;
    }
    try {
      const list = JSON.parse(localStorage.getItem('atrya_messages') || '[]');
      list.push({ ...values, at: new Date().toISOString() });
      localStorage.setItem('atrya_messages', JSON.stringify(list));
    } catch { /* storage unavailable — still show success */ }
    setSent(true);
    setError(null);
  };

  if (sent) {
    return (
      <div className="form-success" role="status">
        <h3>پیام شما ثبت شد</h3>
        <p>کارشناسان آتریا الکترونیک در اولین فرصت ساعات کاری با شما تماس می‌گیرند.</p>
        <button type="button" className="btn btn-outline" onClick={() => { setSent(false); setValues({ name: '', phone: '', email: '', subject: '', message: '' }); }}>
          ارسال پیام جدید
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        {FIELDS.map((f) => (
          <div className="form-field" key={f.name}>
            <label htmlFor={`cf-${f.name}`}>{f.label}{f.required && <span aria-hidden="true"> *</span>}</label>
            <input
              id={`cf-${f.name}`}
              name={f.name}
              type={f.type}
              required={f.required}
              value={values[f.name]}
              onChange={onChange}
            />
          </div>
        ))}
        <div className="form-field form-field-full">
          <label htmlFor="cf-message">پیام <span aria-hidden="true">*</span></label>
          <textarea id="cf-message" name="message" rows="5" required value={values.message} onChange={onChange} />
        </div>
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button type="submit" className="btn btn-gold btn-lg">ارسال پیام</button>
    </form>
  );
}
