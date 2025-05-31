import { Mail, Phone, MapPin } from 'lucide-react';
import Swal from 'sweetalert2'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    formData.append("access_key", "1b9f45a0-595a-4075-8384-6ca6bfc4329c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();
      console.log(data); // Check what Web3Forms returns

      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
        form.reset(); // Clear the form
      } else {
        alert("Failed: " + (data.message || "Something went wrong"));
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Network or server error. Try again later.");
    }
  };



  return (
    <section id="contact" className="flex flex-col justify-center items-center px-4 md:px-12 lg:px-24 pt-12 pb-20 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Side - Contact Info */}
        <div className="flex flex-col justify-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            CONTACT <span className="text-green-700">ME</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-xl leading-relaxed">
            I'm always open to new opportunities, collaborations, or even a friendly chat.
            Reach out via the methods below or send me a direct message using the form.
          </p>

          <div className="space-y-6 text-lg md:text-xl">
            <div className="flex items-center gap-4 text-gray-800 hover:text-green-700 transition cursor-pointer">
              <Mail className="w-7 h-7 flex-shrink-0" />
              <a href=" adityagowala656@gmail.com" className="font-medium">
                adityagowala656@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 text-gray-800 hover:text-green-700 transition cursor-pointer">
              <Phone className="w-7 h-7 flex-shrink-0" />
              <a href="tel:+919083194806" className="font-medium">
                +91 9083194806
              </a>
            </div>
            <div className="flex items-center gap-4 text-gray-800 hover:text-green-700 transition cursor-pointer">
              <MapPin className="w-7 h-7 flex-shrink-0" />
              <p className="font-medium">West Bengal, INDIA</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="bg-white rounded-xl shadow-2xl p-10 md:p-12 space-y-6" onSubmit={onSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-lg">
              Name
            </label>
            <input
              id='name'
              name="name"
              type="text"
              placeholder="Your full name"
              className="w-full px-5 py-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition text-base"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-lg">
              Email
            </label>
            <input
              id='email'
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-5 py-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition text-base"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-lg">
              Message
            </label>
            <textarea
              id='message'
              name="message"
              rows="5"
              placeholder="Your message..."
              className="w-full px-5 py-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition resize-none text-base"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-green-700 text-white text-lg font-semibold rounded-lg hover:bg-green-800 shadow-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
