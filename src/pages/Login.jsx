import { useEffect, useState } from 'react';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!isLogin && !formData.name.trim()) newErrors.name = 'Full Name is required.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required.';
    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert(isLogin ? 'Successfully logged in!' : 'Account successfully created!');
    }
  };

  return (
    <main style={{backgroundColor: 'var(--paper)', minHeight: '80vh', padding: '60px 0'}}>
      <div className="wrap">
        <div style={{background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 40px #173a6f0d', maxWidth: '500px', margin: '0 auto'}}>
          <h2 style={{fontFamily: '"Baloo 2", cursive', fontSize: '32px', color: 'var(--ink)', textAlign: 'center', margin: '0 0 10px'}}>
            {isLogin ? 'Welcome Back!' : 'Create an Account'}
          </h2>
          <p style={{textAlign: 'center', color: '#607a9e', fontWeight: '600', marginBottom: '30px'}}>
            {isLogin ? 'Sign in to access your HolyKids account.' : 'Join HolyKids for a joyful learning journey.'}
          </p>

          <div style={{display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px'}}>
            <button onClick={() => setFormData({name: '', email: 'test1@holykids.in', password: 'password123'})} className="button ghost" style={{fontSize: '12px', padding: '8px 12px', borderColor: 'var(--ink)'}}>Test Login 1</button>
            <button onClick={() => setFormData({name: '', email: 'test2@holykids.in', password: 'password123'})} className="button ghost" style={{fontSize: '12px', padding: '8px 12px', borderColor: 'var(--ink)'}}>Test Login 2</button>
          </div>
          <form onSubmit={handleSubmit} className="form-grid" style={{gridTemplateColumns: '1fr'}} noValidate>
            {!isLogin && (
              <div className="form-group full" style={{marginBottom: errors.name ? '10px' : '20px'}}>
                <label>Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" style={{borderColor: errors.name ? 'var(--pink)' : ''}} />
                {errors.name && <span style={{color: 'var(--pink)', fontSize: '13px', marginTop: '5px', display: 'block'}}>{errors.name}</span>}
              </div>
            )}
            <div className="form-group full" style={{marginBottom: errors.email ? '10px' : '20px'}}>
              <label>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" style={{borderColor: errors.email ? 'var(--pink)' : ''}} />
              {errors.email && <span style={{color: 'var(--pink)', fontSize: '13px', marginTop: '5px', display: 'block'}}>{errors.email}</span>}
            </div>
            <div className="form-group full" style={{marginBottom: errors.password ? '10px' : '20px'}}>
              <label>Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" style={{borderColor: errors.password ? 'var(--pink)' : ''}} />
              {errors.password && <span style={{color: 'var(--pink)', fontSize: '13px', marginTop: '5px', display: 'block'}}>{errors.password}</span>}
            </div>
            <div className="form-group full" style={{marginTop: '10px'}}>
              <button type="submit" className="button primary submit-btn">
                {isLogin ? 'Sign In' : 'Sign Up'}
              </button>
            </div>
          </form>

          <div style={{textAlign: 'center', marginTop: '20px', fontSize: '14px', fontWeight: 'bold', color: '#42628b'}}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span style={{color: 'var(--orange)', cursor: 'pointer', textDecoration: 'underline'}} onClick={() => { setIsLogin(!isLogin); setErrors({}); }}>
              {isLogin ? 'Sign Up' : 'Sign In'}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
