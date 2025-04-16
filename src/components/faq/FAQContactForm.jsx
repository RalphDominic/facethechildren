import React from 'react'

const FAQContactForm = () => {
  return (
    <section className="bg-gray-100 px-6 py-16">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
      <div className="md:w-1/2">
        <h5 className="text-sm text-orange-500 font-semibold uppercase mb-1">Frequently Asked Question</h5>
        <h2 className="text-2xl font-bold text-blue-500 mb-4">
          Can't find what you are looking for?
        </h2>
        <p className="text-gray-700">
          If your question is not listed above, you can use the form to send it directly to us.
        </p>
      </div>
      <form className="md:w-1/2 space-y-4">
        <input type="text" placeholder="Name" className="w-full border p-3 rounded outline-blue-300" />
        <input type="email" placeholder="Email" className="w-full border p-3 rounded outline-blue-300" />
        <input type="tel" placeholder="Phone" className="w-full border p-3 rounded outline-blue-300" />
        <input type="text" placeholder="Subject" className="w-full border p-3 rounded outline-blue-300" />
        <textarea placeholder="Message" rows="5" className="w-full border p-3 rounded outline-blue-300"></textarea>
        <button className="bg-orange-200 hover:bg-orange-300 text-orange-900 px-6 py-2 rounded font-semibold">
          Submit
        </button>
      </form>
    </div>
  </section>
  )
}

export default FAQContactForm
