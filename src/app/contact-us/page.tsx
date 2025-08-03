export default function ContactUs() {
  return (
    <div>
      {/* --- Hero Banner --- */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/contactus-hero.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-extrabold">
          Contact Us
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="flex flex-col gap-4 text-base text-neutral-800">
            <span className="font-bold text-[#905636]">Registered Office Address</span>
            <span>Shop No. 25 B.N. Birajdar Shopping Complex Saat Rasta, Solapur 413003</span>

            <span className="font-bold text-[#905636] mt-4">Warehouse Address</span>
            <span>Gat No. 55/2, Plot No. 39, Behind Ganesh Petrol Pump, Pune-Solapur National highway, At Post Kondi, Solapur- 413 255</span>

            <span className="font-bold text-[#905636] mt-4">Email Address</span>
            <a href="mailto:saichem9@gmail.com" className="hover:underline text-[#cb3d1f]">saichem9@gmail.com</a>
            <a href="mailto:sales.saichemicals@gmail.com" className="hover:underline text-[#cb3d1f]">sales.saichemicals@gmail.com</a>


            <span className="font-bold text-[#905636] mt-4">Phone Numbers</span>
            <div className="flex flex-col gap-1">
              <a href="tel:+919890101050" className="hover:underline">+91-9890101050</a>
              <a href="tel:+919822242479" className="hover:underline">+91-9822242479</a>
              <a href="tel:02172315003" className="hover:underline">0217-2315003</a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white rounded-2xl p-8 shadow border border-neutral-200 flex flex-col gap-4">
            <label className="font-semibold text-sm text-[#905636]">Name
              <input type="text" className="block w-full mt-2 border border-neutral-300 rounded p-2 focus:ring-[#cb3d1f] focus:outline-none" placeholder="Your name" />
            </label>
            <label className="font-semibold text-sm text-[#905636]">Email Address
              <input type="email" className="block w-full mt-2 border border-neutral-300 rounded p-2 focus:ring-[#cb3d1f] focus:outline-none" placeholder="you@example.com" />
            </label>
            <label className="font-semibold text-sm text-[#905636]">Phone
              <input type="tel" className="block w-full mt-2 border border-neutral-300 rounded p-2 focus:ring-[#cb3d1f] focus:outline-none" placeholder="Mobile number" />
            </label>
            <label className="font-semibold text-sm text-[#905636]">Message
              <textarea rows={4} className="block w-full mt-2 border border-neutral-300 rounded p-2 focus:ring-[#cb3d1f] focus:outline-none" placeholder="Your message..." />
            </label>
            <button type="submit" className="bg-[#cb3d1f] mt-6 hover:bg-[#a92c11] text-white py-3 px-6 rounded-full font-bold shadow transition-colors">Send Message</button>
          </form>
        </div>

        {/* Maps Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Registered Office Map */}
          <div>
            <h2 className="font-bold text-lg text-[#905636] mb-2">Map: Registered Office</h2>
            <iframe
              title="Registered Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d723.9656827420187!2d75.90623703315116!3d17.66209067968998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da7b78dc763d%3A0x132e8cc6a8b6a5ff!2sDOSHIBA%20WATERTREATMENT!5e0!3m2!1sen!2sin!4v1753431947490!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow"
            />
          </div>

          {/* Warehouse Map */}
          <div>
            <h2 className="font-bold text-lg text-[#905636] mb-2">Map: Warehouse Address</h2>
            <iframe
              title="Warehouse Address Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46314.55827792101!2d75.75397253036502!3d17.736679895450376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5ce126848415d%3A0x5108cfc45663ab8b!2sGanesh%20Highway%20Service%20Station!5e0!3m2!1sen!2sin!4v1753434669388!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
