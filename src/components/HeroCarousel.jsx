import React, { useState, useEffect } from 'react';

function HeroCarousel() {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            image: 'https://picsum.photos/id/1080/1920/1080',
            subtitle: "SIGNATURE SPECIAL",
            title: "Imperial Saffron Lobster",
            description: "Fresh Nova Scotia lobster tail poached in a decadent saffron-infused butter emulsion, served with wild asparagus and star anise reduction.",
            buttonText: "Add to Order"
        },
        {
            image: 'https://picsum.photos/id/292/1920/1080',
            subtitle: "CHEF'S CURATED SELECTION",
            title: "The Spice Garden Trio",
            description: "Celebratory triptych of organic farm vegetables: charred cauliflower with truffle oil, honey-glazed baby carrots, and smoked eggplant caviar.",
            buttonText: "Add to Order"
        },
        {
            image: 'https://picsum.photos/id/431/1920/1080',
            subtitle: "TODAY'S SPECIAL",
            title: "Butter Chicken Bliss",
            description: "Tender chicken simmered in rich tomato-butter gravy with aromatic spices, served with garlic naan.",
            buttonText: "Add to Order"
        }
    ];

    // Auto slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const current = slides[currentIndex];

    return (
        <div className="position-relative" style={{ height: '850px', overflow: 'hidden' }}>
            {/* Background Image */}
            <div className="position-absolute w-100 h-100" style={{ backgroundImage: `url(${current.image})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'opacity 0.8s ease-in-out' }} />

            {/* Dark Overlay */}
            <div className="position-absolute w-100 h-100 bg-black" style={{ opacity: 0.45 }}></div>

            {/* Content */}
            <div className="position-relative h-100 d-flex align-items-center container">
                <div className="row w-100">
                    <div className="col-lg-7">
                        <div className="ps-4" style={{ maxWidth: '580px' }}>
                            <span className="badge bg-warning text-dark fs-6 px-3 py-2 mb-3">
                                {current.subtitle}
                            </span>
                            <h1 className="display-3 fw-bold text-white mb-4">
                                {current.title}
                            </h1>
                            <p className="lead text-white mb-5 fs-5" style={{ maxWidth: '500px' }}>
                                {current.description}
                            </p>
                            <button className="btn btn-warning btn-lg px-5 py-3 fw-semibold"
                                style={{ borderRadius: '50px' }}>
                                {current.buttonText} →
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)}
                className="position-absolute top-50 start-0 translate-middle-y btn btn-light rounded-circle shadow-lg p-3 mx-4"
                style={{ fontSize: '1.8rem', zIndex: 10 }}>←</button>
            <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
                className="position-absolute top-50 end-0 translate-middle-y btn btn-light rounded-circle shadow-lg p-3 mx-4"
                style={{ fontSize: '1.8rem', zIndex: 10 }}>
                →
            </button>

            {/* Dots */}
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-flex gap-3" style={{ zIndex: 10 }}>
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`rounded-circle border-0 transition-all ${idx === currentIndex ? 'bg-warning' : 'bg-white'}`}
                        style={{
                            width: idx === currentIndex ? '45px' : '12px',
                            height: '12px'
                        }} />
                ))}
            </div>
        </div>
    );
}

export default HeroCarousel;