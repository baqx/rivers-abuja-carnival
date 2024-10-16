import { useState } from "react";
import "/src/assets/css/components/home/contact-us-section.css";

function AboutSection() {
 
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

   const updateMessage = (event) => {
      setMessage(event.target.value);
   };
   const updateEmail = (event) => {
      setEmail(event.target.value);
   };
   const updateFullname = (event) => {
      setFullname(event.target.value);
   };
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    sendEmail(fullname, email, message)
    setIsModalOpen(true); // Show the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Hide the modal
  };

  function sendEmail(fullname, email, message) {
   var subject = `Sponsorship Request from ${fullname}`;
 
   var body = `Dear B-brand Agent,\n\n`;
   body += `Client's Name: ${fullname}\n`;
   body += `Client's Email: ${email}\n\n`;
   body += `Message:\n${message.replace(/\n/g, "%0A")}`;
 
   var mailToLink = `mailto:bardirealestateltd@gmail.com?subject=${encodeURIComponent(
     subject
   )}&body=${encodeURIComponent(body)}`;
 
   window.location.href = mailToLink;
 }

  return (
    <div className="main-section objectives-section">
      <a name="contact"></a>
      <h2 className="heading">Contact Us</h2>

      <section className="contact-details">
        <h4>Connect with us for sponsorship opportunities and inquiries to support diversity, cultural preservation, 
          <br/>and the rich heritage of Rivers State through our vibrant events and initiatives.</h4>
        
        <section className="contact-boxes">
          <div className="contact-box first">
            <i className="fa-solid fa-phone"></i>
            <p className="phone-num">
              <a href="tel:08037782874" className="contact-link">08037782874</a>
              <br />
              <a href="tel:09063920226" className="contact-link">09063920226</a>
              <br />
              <a href="tel:07038881659" className="contact-link">07038881659</a>
              <br />
              <a href="tel:08036740423" className="contact-link">08036740423</a>
            </p>
          </div>

          <div className="contact-box sec">
            <a href="mailto:support@example.com" className="contact-link">
              <i className="fa-solid fa-envelope"></i>
              <br />
              <p>support@example.com</p>
              <br />
            </a>
          </div>

        <div className="contact-box trd">
          <a href="https://maps.app.goo.gl/hn8cDPPJkvZz9Kxb7" target="_blank" rel="noopener noreferrer" className="contact-link">
            <i className="fa-solid fa-map-marker-alt"></i>
            <br />
            <p>Rivers House, opposite Federal Ministry of Finance, Central Business District, Abuja.</p>
            <br />
          </a>
        </div>
        </section>

      </section>

      <section className="contact-form-section">
        <div className="left-side">
          <img src="/images/Rivers Carnival Group pic.jpeg" alt="Rivers Carnival Group Abuja" className="company-image" />
          
      </div>

        <div className="right-side">
          <h3>Interested in Sponsorship?</h3>
          <p>Submit your proposal and join us in promoting culture and diversity!</p>

          <form onSubmit={handleSubmit}>
            <input type="text" id="name" name="name" placeholder="Your name" required value={fullname} onChange={updateFullname} />

            <input type="email" id="email" name="email" placeholder="Your email" required value={email} onChange={updateEmail} />

            <textarea id="message" name="message" placeholder="Tell us about your proposal..." required value={message} onChange={updateMessage} ></textarea>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </section>
    
    {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Thank you for your interest to sponsor! <br/> <br/> We will redirect you shortly.</p>
          </div>
        </div>
      )}


    </div>
  );
}

export default AboutSection;