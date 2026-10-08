import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{backgroundColor: 'var(--paper)', minHeight: '80vh', padding: '60px 0'}}>
      <div className="wrap">
        <h1 style={{fontFamily: '"Baloo 2", cursive', fontSize: '40px', color: 'var(--ink)', marginBottom: '30px'}}>Your Bag</h1>
        
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-start'}}>
          <div style={{flex: '1 1 500px', background: '#fff', padding: '60px 40px', borderRadius: '24px', boxShadow: '0 10px 40px #173a6f0d', textAlign: 'center'}}>
            <div style={{fontSize: '60px', marginBottom: '20px'}}>🛍</div>
            <h3 style={{fontFamily: '"Baloo 2", cursive', fontSize: '24px', color: 'var(--ink)', margin: '0 0 10px'}}>Your bag is empty</h3>
            <p style={{color: '#607a9e', marginBottom: '25px', fontWeight: '600'}}>Looks like you haven't added any series to your bag yet.</p>
            <Link to="/#series" className="button primary" style={{boxShadow: '0 5px 0 #ce4a19'}}>Explore Our Series</Link>
          </div>

          <div style={{flex: '1 1 300px', background: '#fff', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 40px #173a6f0d'}}>
            <h3 style={{fontFamily: '"Baloo 2", cursive', fontSize: '22px', color: 'var(--ink)', margin: '0 0 20px'}}>Order Summary</h3>
            
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#607a9e', fontWeight: 'bold'}}>
              <span>Subtotal</span>
              <span>₹0.00</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#607a9e', fontWeight: 'bold'}}>
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            
            <hr style={{border: '0', borderTop: '2px dashed #eef3f4', margin: '20px 0'}} />
            
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '25px', color: 'var(--ink)', fontWeight: '900', fontSize: '20px'}}>
              <span>Total</span>
              <span>₹0.00</span>
            </div>
            
            <button className="button primary submit-btn" disabled style={{opacity: 0.5, cursor: 'not-allowed'}}>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </main>
  );
}
