export default function ContactUs() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#1f1e21] mb-6 text-center">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="flex flex-col gap-4 text-base text-neutral-800">
          <span className="font-bold text-[#905636]">Registered Office Address</span>
          <span>Shop No. 25 B.N. Birajdar Shopping Complex Saat Rasta, Solapur 413003</span>

          <span className="font-bold text-[#905636] mt-4">Warehouse Address</span>
          <span>B-50 MIDC Solapur 413001</span>

          <span className="font-bold text-[#905636] mt-4">Email Address</span>
          <a href="mailto:sales@shreesaichem.com" className="hover:underline text-[#cb3d1f]">sales@shreesaichem.com</a>

          <span className="font-bold text-[#905636] mt-4">Phone Numbers</span>
          <div className="flex flex-col gap-1">
            <a href="tel:+919890101050" className="hover:underline">+91-9890101050</a>
            <a href="tel:0217231536" className="hover:underline">0217-231536</a>
          </div>
        </div>

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
    </div>
  );
}
