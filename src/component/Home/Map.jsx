import React from 'react';
import './Map.css'; // Make sure to create this CSS file or adjust styles directly in your CSS

const Map = () => {
    return (

        <section className='my-10 md:my-20 lg:my-32'>

            <div className="main_container ">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57498.018533816605!2d89.22080929194506!3d25.749873663844667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32de6fca6019b%3A0x9fa496e687f818c8!2sRangpur!5e0!3m2!1sen!2sbd!4v1729773153539!5m2!1sen!2sbd"
                    width="600"
                    height="450"
                    className="google-map" // CSS class for styles
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map of Rangpur" // Title for accessibility
                ></iframe>
            </div>
        </section>
    );
};

export default Map;
