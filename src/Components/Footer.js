

export default function Footer() {
  return (
    <footer className="footer">
      <div className="brand-details">
        <p className="mb-0"><span>Travel</span> With Us</p>
        <p className="mt-0">Spreading smiles across the globe</p>
          <span className="social-title">You can find us here</span>
          <div className="brand-icons mt-3">
          <i class="fa-brands fa-instagram me-3"></i>
          <i class="fa-brands fa-facebook me-3"></i>
          <i class="fa-brands fa-twitter me-3"></i>
          </div>
      </div>
      <div className="contact-us">
          <h4>Contact Us</h4>
        <div>
          <input type="email" placeholder="Enter Email" />
        </div>
        <div>
          <input type="text" placeholder="Enter Message" />
        </div>
        <div>
        <button className="button">Submit</button>
        </div>
          

      </div>
    </footer>
  )
}
