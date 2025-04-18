import React from 'react';

const StrategyContent = () => {
  return (
    <main className="px-6 md:px-20 py-16 space-y-24 text-gray-700">
      {/* Section: Our Action */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start gap-10">
        {/* Image (first on mobile, second on desktop) */}
        <div className="order-1 md:order-2 md:w-1/2 space-y-6 flex flex-col items-center justify-center">
          <img
            src="https://facethechildren.org/images/website/s-banner.webp"
            alt="Children group"
          />
        </div>

        {/* Text (second on mobile, first on desktop) */}
        <div className="order-2 md:order-1 md:w-1/2 space-y-6 sm:text-2xl">
          <p className="text-xs font-semibold text-orange-500 uppercase">The Problem</p>
          <h2 className="text-3xl font-bold text-blue-800">
            Rescuing Lives from Poverty and Abuse
          </h2>
          <p>
            Historically in the Philippines, due to widespread poverty, the problem of abandoned,
            abused, or dangerously neglected (AADN) children has been remarkably large...
          </p>

          <p className="text-xs font-semibold text-orange-500 uppercase">Our Action</p>
          <h2 className="text-3xl font-bold text-blue-800">
            Creating Lasting Change through Our Intervention
          </h2>
          <p>
            The Face the Children (FTC) program is established to serve AADN children through a
            program that provides protection, care, nurture, education, and spiritual development...
          </p>

          <div>
            <h3 className="text-blue-800 font-semibold">Protect</h3>
            <p>We provide a safe environment and place for those living in our children's homes...</p>
          </div>

          <div>
            <h3 className="text-blue-800 font-semibold">Care</h3>
            <p>We meet the basic physical and material needs for the children...</p>
          </div>

          <div>
            <h3 className="text-blue-800 font-semibold">Nurture</h3>
            <p>We provide loving oversight that involves listening, counseling, and prayer...</p>
          </div>

          <div>
            <h3 className="text-blue-800 font-semibold">Education</h3>
            <p>We provide K-12 educational services and university opportunities...</p>
          </div>

          <div>
            <h3 className="text-blue-800 font-semibold">Spiritual Development</h3>
            <p>As Christians we believe spiritual well-being comes through a meaningful relationship with God...</p>
          </div>
        </div>
      </section>

      {/* Section: Love Never Fails */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Image (first on mobile, second on desktop) */}
          <div className="order-1 md:order-2 md:w-1/2">
            <img
              src="https://facethechildren.org/images/website/s-love.webp"
              alt="Group of children"
              className="rounded-full w-80 h-80 object-cover shadow-md mx-auto md:mx-0"
            />
          </div>

          {/* Text (second on mobile, first on desktop) */}
          <div className="order-2 md:order-1 md:w-1/2">
            <p className="text-xs font-semibold text-orange-500 uppercase mb-2">Prevails Forever</p>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Love Never Fails</h2>
            <p className="mb-4">
              Many children we serve come to us with psychological, behavioral problems...
            </p>
            <p>
              Many children have good reasons for hesitation to trust or commit to others...
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StrategyContent;
