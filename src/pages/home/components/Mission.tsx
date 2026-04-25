export default function Mission() {
  const pillars = [
    {
      icon: 'ri-heart-line',
      title: 'People Help Animals',
      body: 'Every purchase, donation, and share gives a shelter animal a better chance at life. Your action — however small — creates a ripple that reaches real animals in real need.',
    },
    {
      icon: 'ri-refresh-line',
      title: 'Healing Works Both Ways',
      body: 'The bond between humans and animals is one of the most powerful forces in nature. When you help rescue an animal, something in you heals too. That\'s not a metaphor — it\'s science.',
    },
    {
      icon: 'ri-community-line',
      title: 'Animals Help People',
      body: 'Rescue animals reduce anxiety, loneliness, and depression. They teach children empathy. They give veterans purpose. Supporting rescue isn\'t charity — it\'s an investment in human wellbeing.',
    },
  ];

  return (
    <section id="mission" className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#C97D5D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Mission</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] leading-tight mb-6">
            Healing Works Both Ways
          </h2>
          <p className="text-[#6B6B6B] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            We built this brand on a simple truth: when communities support animal rescue, everyone wins — the animals, the people, and the world they share.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F5EDE6] mb-6">
                <i className={`${pillar.icon} text-2xl text-[#C97D5D]`}></i>
              </div>
              <h3 className="font-serif text-xl text-[#2D2D2D] mb-4">{pillar.title}</h3>
              <p className="text-[#6B6B6B] text-base leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>

        {/* Divider quote */}
        <div className="mt-24 border-t border-[#E8E0D8] pt-16 text-center">
          <blockquote className="font-serif text-2xl md:text-3xl text-[#2D2D2D] leading-relaxed max-w-3xl mx-auto italic">
            &ldquo;The greatness of a nation and its moral progress can be judged by the way its animals are treated.&rdquo;
          </blockquote>
          <p className="text-[#A8A8A8] text-sm mt-4 tracking-wide">— Mahatma Gandhi</p>
        </div>
      </div>
    </section>
  );
}
