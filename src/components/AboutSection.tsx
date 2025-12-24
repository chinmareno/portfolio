export const AboutSection = () => {
  const values = [
    {
      icon: "⏰",
      title: "Consistency",
      description: "Once I set a goal, I stay committed until I achieve it.",
    },
    {
      icon: "🛡️",
      title: "Integrity",
      description:
        "I follow through on commitments and take responsibility for my actions.",
    },
    {
      icon: "👁️",
      title: "Calm",
      description:
        "Stay logical and maintain fairness even in intense situations.",
    },
    {
      icon: "🏆",
      title: "High Achiever",
      description:
        "Set ambitious goals and push to reach them with dedication and focus.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-[100vh] flex items-center py-24 md:py-32 px-6 lg:px-12 bg-slate-50/45"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left column - Bio & Skills */}
        <div>
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
            About Me
          </h2>
          <h3
            className="text-3xl text-black md:text-4xl font-bold mb-8 leading-tight transition-all duration-700"
            style={{ transitionDelay: "100ms" }}
          >
            I’m a developer who believes fundamental still not overrated
          </h3>
          <p className="text-lg text-black leading-relaxed mb-4">
            Hello! I’m Chin Mareno, a Full-stack Developer who tries to
            understand the concept before writing code.
          </p>
          <p className="text-lg text-black leading-relaxed mb-4">
            Over the past 3 years, I’ve built applications using{" "}
            <strong>Next.js</strong>, <strong>Remix</strong>,{" "}
            <strong>React</strong>, <strong>Express</strong>, and{" "}
            <strong>NestJS</strong>.
          </p>
          <p className="text-lg text-black leading-relaxed mb-4">
            I also able to speak fluent <strong>Indonesian</strong> and{" "}
            <strong>English</strong>, conversational <strong>Mandarin</strong>,
            while currently learning Japanese.
          </p>
        </div>

        {/* Right column - Values */}
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-6 bg-white border-2 border-black rounded-lg"
            >
              <div className="text-muted-foreground font-bold text-2xl mb-2">
                {value.icon}
              </div>
              <h3 className="font-semibold text-black mb-1">{value.title}</h3>
              <p className="text-sm text-black leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
