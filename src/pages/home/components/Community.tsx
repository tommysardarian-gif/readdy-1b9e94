const values = [
  { icon: 'ri-heart-3-line', title: 'Compassion First', body: 'Every decision we make starts with one question: is this good for the animals?' },
  { icon: 'ri-hand-heart-line', title: 'Real Accountability', body: 'We publish transparent impact reports so you always know where your support goes.' },
  { icon: 'ri-earth-line', title: 'Community Driven', body: 'This movement belongs to the people in it — not a corporation, not a committee.' },
];

export default function Community() {
  return (
    <section id="community" className="bg-[#FAFAF8] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">The Movement</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] leading-tight mb-5">
            More Than a Transaction
          </h2>
          <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            This is a community united by compassion, responsibility, and the belief that every animal deserves a safe place to land. When you join us, you&apos;re not just buying a product — you&apos;re becoming part of something real.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {values.map((v, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 border border-[#F0EAE4]">
              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#F5EDE6] mb-4">
                <i className={`${v.icon} text-lg text-[#C97D5D]`}></i>
              </div>
              <h3 className="font-serif text-xl text-[#2D2D2D] mb-2">{v.title}</h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>

        {/* Community image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 rounded-2xl overflow-hidden h-60 md:h-72">
            <img
              src="https://readdy.ai/api/search-image?query=A%20joyful%20diverse%20group%20of%20animal%20rescue%20volunteers%20gathered%20outdoors%20at%20a%20community%20adoption%20event%2C%20smiling%20and%20holding%20rescue%20dogs%20and%20cats%2C%20warm%20golden%20afternoon%20sunlight%2C%20authentic%20and%20heartwarming%20atmosphere%2C%20lifestyle%20photography%2C%20warm%20color%20tones&width=900&height=500&seq=community001&orientation=landscape"
              alt="Community rescue event"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden flex-1 h-32 md:h-auto">
              <img
                src="https://readdy.ai/api/search-image?query=A%20tender%20moment%20of%20a%20child%20gently%20petting%20a%20small%20rescue%20kitten%20at%20an%20animal%20shelter%2C%20warm%20natural%20light%2C%20soft%20focus%20background%2C%20heartwarming%20and%20hopeful%20mood%2C%20lifestyle%20photography%2C%20warm%20cream%20and%20amber%20tones&width=400&height=300&seq=community002&orientation=landscape"
                alt="Child with rescue kitten"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="rounded-2xl overflow-hidden flex-1 h-32 md:h-auto">
              <img
                src="https://readdy.ai/api/search-image?query=A%20smiling%20woman%20wearing%20a%20rescue%20brand%20hoodie%20walking%20her%20adopted%20dog%20in%20a%20sunny%20park%2C%20warm%20golden%20light%2C%20lifestyle%20photography%2C%20warm%20and%20joyful%20mood%2C%20clean%20background%20with%20soft%20bokeh&width=400&height=300&seq=community003&orientation=landscape"
                alt="Rescue brand lifestyle"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
