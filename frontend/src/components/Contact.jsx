import { Mail, Linkedin, Github } from "lucide-react";

const Contact = ({ contactInfo }) => {
  if (!contactInfo) return null;

  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-textMain mb-12">
        Get In <span className="text-accent">Touch</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 bg-secondary p-8 rounded-2xl border border-white/5">
        
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-textMain">Let's Connect</h3>
          <p className="text-textSub">
            I'm currently looking for internships and freelance opportunities. 
            Feel free to reach out!
          </p>
          
          <div className="space-y-4">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-textSub hover:text-accent transition-colors">
              <Mail className="w-5 h-5" />
              {contactInfo.email}
            </a>
            <a href={contactInfo.linkedin} target="_blank" 
              rel="noopener noreferrer" className="flex items-center gap-3 text-textSub hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5" />
              LinkedIn Profile
            </a>
            <a href={contactInfo.github} target="_blank" 
              rel="noopener noreferrer" className="flex items-center gap-3 text-textSub hover:text-accent transition-colors">
              <Github className="w-5 h-5" />
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;