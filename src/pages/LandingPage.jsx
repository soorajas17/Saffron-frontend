import React from 'react'
import HeroCarousel from '../components/HeroCarousel'

function LandingPage() {
  return (
    <>
      <HeroCarousel/>
      <div className="bg-white">
      
      {/* Menu Navigation */}
      <div className="bg-light py-3 border-bottom">
        <div className="container">
          <ul className="nav nav-pills justify-content-center flex-wrap gap-2">
            <li className="nav-item"><a href="#" className="nav-link active bg-dark text-white">STARTERS</a></li>
            <li className="nav-item"><a href="#" className="nav-link">FROM THE TANDOOR</a></li>
            <li className="nav-item"><a href="#" className="nav-link">CURRIES & RICE</a></li>
            <li className="nav-item"><a href="#" className="nav-link">ACCOMPANIMENTS</a></li>
            <li className="nav-item"><a href="#" className="nav-link">DESSERTS</a></li>
          </ul>
        </div>
      </div>

      <div className="container py-5">

        {/* Small Plates & Starters */}
        <h3 className="mb-4">Small Plates & Starters</h3>
        <div className="row g-4 mb-5">
          {[
            { name: "Saffron Onion Bhaji", price: 10, desc: "Crispy onion fritters infused with saffron and ground chickpeas. Served with tamarind glaze." },
            { name: "Cardamom Masala Broccoli", price: 14, desc: "Chargrilled broccoli florets in a green cardamom, cashew cheese, and toasted almond crust." },
            { name: "Gunpowder Calamari", price: 16, desc: "Crispy fried calamari tossed in our signature gunpowder spice mix and curry leaf tempering." }
          ].map((item, i) => (
            <div className="col-md-4" key={i}>
              <div className="card h-100 border-0 shadow-sm">
                <img src={`https://picsum.photos/id/${300+i}/600/400`} className="card-img-top" alt={item.name} style={{height: '220px', objectFit: 'cover'}} />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5>{item.name}</h5>
                    <span className="fw-bold text-warning">${item.price}</span>
                  </div>
                  <p className="text-muted small">{item.desc}</p>
                  <button className="btn btn-outline-dark w-100 mt-2">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Curries */}
        <h3 className="mb-4">The Curries</h3>
        <div className="row g-4 mb-5">
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm overflow-hidden">
              <img src="https://picsum.photos/id/431/800/500" className="img-fluid" alt="Butter Chicken" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h4>Old Delhi Butter Chicken</h4>
                    <p className="text-muted">$28</p>
                  </div>
                  <button className="btn btn-warning">Add to Cart</button>
                </div>
                <p className="mt-2">Our signature recipe. Tandoor-smoked chicken thighs simmered in a velvety tomato and butter gravy, finished with hand-crushed dried fenugreek leaves.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h5>Goan Prawn Balchão</h5>
                <p className="text-muted">$22</p>
                <p className="small text-muted">A fiery, tangy preparation with tiger prawns cooked in a vinegar-infused red chilli paste and toasted jaggery.</p>
                <button className="btn btn-outline-dark w-100 mt-3">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h5>Paneer Tikka Masala</h5>
                <p className="text-muted">$24</p>
                <p className="small text-muted">Tandoor-grilled cottage cheese tossed with bell peppers and onions in a robust tomato-onion masala.</p>
                <button className="btn btn-outline-dark w-100 mt-3">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* From the Tandoor */}
        <h3 className="mb-4">From the Tandoor</h3>
        <div className="row g-4 mb-5">
          <div className="col-lg-5">
            <img src="https://picsum.photos/id/866/600/400" className="img-fluid rounded" alt="Tandoor" />
          </div>
          <div className="col-lg-7">
            <div className="row g-4">
              {[
                { name: "Tandoori Lamb Chops", price: 36 },
                { name: "Malai Chicken Tikka", price: 26 },
                { name: "Hariyali Seekh Kebab", price: 24 },
                { name: "Achari Paneer Tikka", price: 22 }
              ].map((item, i) => (
                <div className="col-md-6" key={i}>
                  <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
                    <div>
                      <h6 className="mb-1">{item.name}</h6>
                      <small className="text-muted">Clay oven specialties, marinated for 24 hours</small>
                    </div>
                    <div className="text-end">
                      <span className="fw-bold">${item.price}</span>
                      <button className="btn btn-sm btn-outline-dark d-block mt-2">Add</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Breads & Grains */}
        <h3 className="mb-4">Breads & Grains</h3>
        <div className="row g-4 mb-5">
          {[
            { name: "Garlic Naan", price: 6 },
            { name: "Truffle Naan", price: 9 },
            { name: "Lachha Paratha", price: 7 },
            { name: "Saffron Pulao", price: 8 }
          ].map((item, i) => (
            <div className="col-md-3 col-6" key={i}>
              <div className="card text-center border-0 shadow-sm">
                <img src={`https://picsum.photos/id/${200+i}/300/200`} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h6>{item.name}</h6>
                  <p className="fw-bold text-warning">${item.price}</p>
                  <button className="btn btn-outline-dark btn-sm">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sweet Treats */}
        <h3 className="mb-4">Indulgent Endings</h3>
        <div className="row g-4">
          <div className="col-lg-5">
            <img src="https://picsum.photos/id/1080/600/500" className="img-fluid rounded" alt="Gulab Jamun" />
          </div>
          <div className="col-lg-7">
            <h4>Sweet Treats</h4>
            <div className="row g-4 mt-3">
              <div className="col-md-6">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6>Saffron & Rose Gulab Jamun</h6>
                    <small className="text-muted">$14</small>
                  </div>
                  <button className="btn btn-outline-dark">Add</button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-between">
                  <div>
                    <h6>Deconstructed Rabri Kesar Jalebi</h6>
                    <small className="text-muted">$16</small>
                  </div>
                  <button className="btn btn-outline-dark">Add</button>
                </div>
              </div>
            </div>
            <button className="btn btn-warning btn-lg mt-5 px-5">Book a Table for Tonight</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LandingPage
