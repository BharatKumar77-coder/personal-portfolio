const Hero = ({content}) => {

  if (!content) return null;
  return (
    <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 max-w-7xl mx-auto flex flex-col items-center text-center">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-textMain mb-6">
        Hi, I'm <span className="text-accent">{content.name}</span>
      </h1>
      
      <h2 className="text-2xl md:text-4xl font-medium text-textSub mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
        {content.role}
      </h2>
      
      <p className="max-w-2xl text-lg text-textSub mb-10 leading-relaxed">
        {content.tagline}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="#projects" 
          className="px-8 py-3 rounded-full bg-accent text-primary font-semibold hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)]"
        >
          View Projects
        </a>
        <a 
          href="#contact" 
          className="px-8 py-3 rounded-full border border-white/20 text-textMain font-semibold hover:bg-white/10 transition-all"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;