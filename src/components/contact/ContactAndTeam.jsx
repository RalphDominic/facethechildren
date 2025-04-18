import React from 'react';
import FAQContactForm from '../faq/FAQContactForm';

const ContactAndTeam = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-12 md:py-16 space-y-20">
      {/* Contact Section */}
      <section className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Left: Text Info */}
        <div className="lg:w-1/2 space-y-6">
          <h5 className="text-sm text-orange-500 font-semibold uppercase tracking-wide">
            Let's Talk
          </h5>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
            We’re Here for You
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            We believe in building strong relationships and fostering a sense of community. Your feedback and inquiries are important to us, and we strive to respond as quickly and thoroughly as possible.
          </p>

          <div className="text-sm text-gray-800 space-y-2">
            <p>Feel free to get in touch with us via phone</p>
            <div className="flex flex-col sm:flex-row sm:gap-10">
              <p className="text-blue-600">
                <strong>Philippines:</strong> <a href="tel:+639274203409">+63 927 420 3409</a>
              </p>
              <p className="text-blue-600">
                <strong>USA:</strong> <a href="tel:+18157979177">+815 797 9177</a>
              </p>
            </div>
          </div>

          <div className="text-sm">
            <p>Visit us here in the Philippines</p>
            <p className="text-blue-700 font-medium">
              Frontline Mission Center, Sitio Subac, <br />
              Brgy. Sto Niño, San Pablo City, 4000 Laguna
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="lg:w-1/2 space-y-4">
          <input type="text" placeholder="Name" className="w-full border p-3 rounded outline-blue-300" />
          <input type="email" placeholder="Email" className="w-full border p-3 rounded outline-blue-300" />
          <input type="tel" placeholder="Phone" className="w-full border p-3 rounded outline-blue-300" />
          <input type="text" placeholder="Subject" className="w-full border p-3 rounded outline-blue-300" />
          <textarea placeholder="Message" rows="5" className="w-full border p-3 rounded outline-blue-300"></textarea>
          <button className="bg-orange-200 hover:bg-orange-300 text-orange-900 px-6 py-2 rounded font-semibold">
            Submit
          </button>
        </form>
      </section>

      {/* Our Team Section */}
      <section className="text-center space-y-10">
        <div>
          <h5 className="text-sm text-orange-500 font-semibold uppercase tracking-wide">
            Get to know us
          </h5>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">Our Dedicated Team</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {/* Member 1 */}
          <div className="space-y-2 text-center">
            <img
              src="https://facethechildren.org/images/website/team-judea.webp"
              alt="Judea Delos Santos"
              className="w-40 h-40 mx-auto object-cover grayscale "
            />
            <h4 className="text-lg font-semibold text-blue-900">Judea Delos Santos</h4>
            <p className="text-sm text-gray-600">Communication & Development Staff</p>
            <a href="mailto:judea.delossantos@thefrontline.asia" className="text-blue-600 text-sm">
              judea.delossantos@thefrontline.asia
            </a>
          </div>

          {/* Member 2 */}
          <div className="space-y-2 text-center">
            <img
              src="https://facethechildren.org/images/website/team-mike.webp"
              alt="Michael Gordon"
              className="w-40 h-40 mx-auto object-cover grayscale "
            />
            <h4 className="text-lg font-semibold text-blue-900">Michael Gordon</h4>
            <p className="text-sm text-gray-600">Spiritual Director</p>
            <a href="mailto:mike.gordon@thefrontline.asia" className="text-blue-600 text-sm">
              mike.gordon@thefrontline.asia
            </a>
          </div>

          {/* Member 3 */}
          <div className="space-y-2 text-center">
            <img
              src="https://facethechildren.org/images/website/team-jp.webp"
              alt="John Katigbak"
              className="w-40 h-40 mx-auto object-cover grayscale "
            />
            <h4 className="text-lg font-semibold text-blue-900">John Katigbak</h4>
            <p className="text-sm text-gray-600">Managing Director</p>
            <a href="mailto:john.katigbak@thefrontline.asia" className="text-blue-600 text-sm">
              john.katigbak@thefrontline.asia
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactAndTeam;
