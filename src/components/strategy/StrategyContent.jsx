import React from 'react'

const StrategyContent = () => {
  return (
    <main className="px-6 md:px-20 py-16 space-y-24 text-gray-700">
  

    {/* Section: Our Action */}
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start gap-10">

      
 
      <div className="md:w-1/2 space-y-6 sm:text-2xl">
        <p className="text-xs font-semibold text-orange-500 uppercase">The Problem</p>
        <h2 className="text-3xl font-bold text-blue-800 sm:te">Rescuing Lives from Poverty and Abuse</h2>
        <p>
        Historically in the Philippines, due to widespread poverty, the problem of abandoned, abused, or dangerously neglected (AADN) children has been remarkably large. Many hundreds of thousands of children, perhaps millions, have grown up living mostly on the streets. There is very minimal governmental protection or assistance for what are often termed "street children," and in class-segregated social systems these children are not only viewed as a nuisance, but are the target of a wide variety of evils.
        </p>
        <p className="text-xs font-semibold text-orange-500 uppercase">Our Action</p>
        <h2 className="text-3xl font-bold text-blue-800">Creating Lasting Change through Our Intervention</h2>
        <p>
          The Face the Children (FTC) program is established to serve AADN children through a program that provides protection, care, nurture, education, and spiritual development that affords them a genuinely greater opportunity for a dignified and meaningful adult life.
        </p>

        <div>
          <h3 className="text-blue-800 font-semibold">Protect</h3>
          <p>We provide a safe environment and place for those living in our children's homes, who are provided full-time care.</p>
        </div>

        <div>
          <h3 className="text-blue-800 font-semibold">Care</h3>
          <p>We meet the basic physical and material needs for the children in the FTC program</p>
        </div>

        <div>
          <h3 className="text-blue-800 font-semibold">Nurture</h3>
          <p>We provide loving oversight that involves listening, counseling, and prayer. We do our best to be a parent figure in the lives of the children.</p>
        </div>

        <div>
          <h3 className="text-blue-800 font-semibold">Education</h3>
          <p>We provide K-12 educational services for all the children in our program, as well as opportunities for University for the higher achievers.</p>
        </div>

        <div>
          <h3 className="text-blue-800 font-semibold">Spiritual Development</h3>
          <p>As Christians we believe spiritual well-being comes through a meaningful relationship with God. The Bible is our main source of spiritual direction and guidance.</p>
        </div>
      </div>

      <div className="md:w-1/2 space-y-6 flex flex-col items-center justify-center relative">
        {/* Big Circle Image */}
        <img
          src="https://facethechildren.org/images/website/s-banner.webp"
          alt="Children group"
          className=""
        />

     
      </div>
    </section>

    {/* Section: Love Never Fails */}
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src="https://facethechildren.org/images/website/s-love.webp"
            alt="Group of children"
            className="rounded-full w-80 h-80 object-cover shadow-md mx-auto md:mx-0"
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-xs font-semibold text-orange-500 uppercase mb-2">Prevails Forever</p>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Love Never Fails</h2>
          <p className="mb-4">
            Many children we serve come to us with psychological, behavioral problems, and even chemical or mental addictions; some at very young ages. Many are not ready to trust or commit to others due to various forms of abuse or levels of neglect. Needless to say, many children have good reasons for hesitation to trust or commit to others; and in some cases fail to do so. Knowing that not all children respond as we hope does not deter us. We are committed to the welfare of children regardless of the outcomes of our interventions with all children.
          </p>
          <p>
            Many children we serve come to us with psychological, behavioral problems, and even chemical or mental addictions; some at very young ages. Many are not ready to trust or commit to others due to various forms of abuse or levels of neglect. Needless to say, many children have good reasons for hesitation to trust or commit to others.
          </p>
        </div>
      </div>
    </section>


  </main>
  )
}

export default StrategyContent
