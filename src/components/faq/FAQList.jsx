import React, { useState } from 'react'

const faqs = [
  {
    question: 'Can I communicate with the child I have made a Pledge to?',
    answer:
      'Yes. You can email them, but all communication is monitored by FTC management.',
  },
  {
    question: 'How can you make sure our payment is secure?',
    answer:
      'Our online donation transaction is a secure SSL encrypted payment using Stripe payment processor with the best-in-class security tools and practices to maintain a high level of security.',
  },
  {
    question: 'Can I update my card number using your website?',
    answer: 'Yes. You can change it on your account settings. Login to your donor console',
  },
  {
    question:
      'Will I receive personal updates from FTC and the child I pledge to on a regular basis?',
    answer:
      'Yes, you will receive regular updates about the progress and developments of our program. Additionally, from time to time you will receive communications directly from the child you sponsor.',
  },
  {
    question: 'Can I make a pledge to more than one FTC Child?',
    answer:
      'Yes. We welcome your pledges to as many children as possible!',
  },
  {
    question:
      'Can I make a Partner Pledge for the entire monthly care of a child in the FTC program?',
    answer:
      'Yes. But the full-care sponsorship of a child in our program is limited to $200 monthly. Therefore, if a child has current sponsorship pledges, the website will allow only the remaining balance necessary for full-care coverage.',
  },
  {
    question: 'How much does an FTC Child Partner Pledge Cost?',
    answer:
      'You can partner with us by sponsoring a child for as little as $20 monthly. You can also select higher sponsorship amounts if the child has remaining full-care needs. Please see the options presented for a selected child on the sponsorship page.',
  },
]

const FAQList = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h4 className="text-sm text-orange-500 font-semibold uppercase mb-2 tracking-wide text-center">
        Your Questions, Our Clarity
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
        Our Commitment to Child Development
        </h2>
        
      </div>

















      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Question List */}
        <div className="md:w-1/2 space-y-4">
          {faqs.map((faq, index) => (
            <button
              key={index}
              className={`w-full flex items-center justify-between p-4 rounded border text-left ${
                activeIndex === index
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
              onClick={() => handleClick(index)}
            >
              <div className="flex items-start gap-2">
                <span className="font-bold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{faq.question}</span>
              </div>
              <span className="text-lg">{'>'}</span>
            </button>
          ))}
        </div>

        {/* Answer Section */}
        <div className="md:w-1/2 p-4 border border-blue-300 bg-blue-50 rounded text-gray-700">
          <p>{faqs[activeIndex].answer}</p>
        </div>
      </div>
    </section>
  )
}

export default FAQList
