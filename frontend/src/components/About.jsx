const About = ({ content }) => {
  if (!content) return null;

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-textMain mb-12">
          About <span className="text-accent">Me</span>
        </h2>
        <div className="bg-secondary p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
          <p className="text-textSub leading-relaxed text-lg">
            {content.text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;