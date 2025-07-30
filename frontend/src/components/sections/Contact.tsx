import ContactInfo from "./contactInfo";
import ContactForm from "./contactForm";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 transition-colors"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-1 animate-on-scroll">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md transition-colors h-full">
              <ContactInfo />
            </div>
          </div>

          <div className="lg:col-span-2 animate-on-scroll animation-delay-200">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md transition-colors">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
