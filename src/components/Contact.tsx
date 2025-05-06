import { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle, MailIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const recipientEmail = 'syedaryana869@gmail.com';
  const form = useRef();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.querySelectorAll('.animate-on-scroll').forEach((el) => {
              el.classList.add('is-visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Simple client-side validation before submit
  const validateForm = () => {
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    setError('');
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_djht6vc',
      'template_22jlmfn',
      form.current,
      '86vEtTAwxHdBYT2rX'
    )
    .then(
      (result) => {
        setIsSubmitted(true);
        setError('');
      },
      (error) => {
        setError('Failed to send message. Please try again later.');
      }
    );
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 sm:py-32 bg-secondary/50"
    >
      <div className="container max-w-5xl px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/5 mb-3 animate-on-scroll">
            Contact Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            <span className="block mt-2 text-sm font-medium">
              <MailIcon className="inline-block w-4 h-4 mr-1" /> {recipientEmail}
            </span>
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="text-center p-8 rounded-2xl border border-green-200 bg-green-50 animate-fade-in">
              <CheckCircle className="w-12 h-12 mx-auto text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6 animate-on-scroll"
            >
              {/* Hidden fields for FormSubmit.co */}
              <input type="hidden" name="_subject" value="New portfolio contact message" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 resize-none"
                  placeholder="I'm interested in working with you on..."
                ></Textarea>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center"
              >
                Send Message <Send size={16} className="ml-2" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
