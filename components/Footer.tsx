import Link from 'next/link';

export default function Footer() {
  return (
    <div className="mt-20">
      {/* Top Wave Divider connecting the light background to the dark footer */}
      <div className="w-full overflow-hidden leading-none mb-[-1px]">
        <svg 
          className="relative block w-full h-[60px] md:h-[120px]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.33,197.83,105,240.23,95.96,281.33,70.53,321.39,56.44Z" className="fill-[#1c1c1c]"></path>
        </svg>
      </div>

      <footer className="bg-[#1c1c1c] text-[#f4ecdf] pt-12 pb-8">
        <div className="max-w-[1400px] mx-auto px-10">
          
          {/* 4 Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 px-4">
            
            {/* Column 1: Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6 font-[family-name:var(--font-oswald)] tracking-widest text-[#cca752]">
                STAY CONNECTED
              </h3>
              <p className="text-sm opacity-70 mb-4">
                Subscribe for updates on new availability, community events, and neighborhood news.
              </p>
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-[#2a2a2a] border-none px-4 py-3 rounded-md text-sm outline-none focus:ring-1 focus:ring-[#cca752] text-[#f4ecdf] placeholder-opacity-50" 
                />
                <button className="bg-gradient-to-r from-[#cca752] to-[#b38e3f] text-[#1c1c1c] font-bold py-3 rounded-md text-sm tracking-widest hover:opacity-90 transition-opacity">
                  SUBSCRIBE
                </button>
              </div>
            </div>

            {/* Column 2: Quick Links & Social */}
            <div>
              <h3 className="text-lg font-bold mb-6 font-[family-name:var(--font-oswald)] tracking-widest">
                RESIDENCES
              </h3>
              <ul className="flex flex-col gap-3 text-sm opacity-70">
                <li><Link href="#floor-plans" className="hover:text-[#cca752] transition-colors">Floor Plans</Link></li>
                <li><Link href="#amenities" className="hover:text-[#cca752] transition-colors">Amenities & Services</Link></li>
                <li><Link href="#neighborhood" className="hover:text-[#cca752] transition-colors">Neighborhood</Link></li>
                <li><Link href="#gallery" className="hover:text-[#cca752] transition-colors">Photo Gallery</Link></li>
              </ul>
              <div className="mt-8">
                <h4 className="text-sm font-bold mb-4 font-[family-name:var(--font-oswald)] tracking-widest">FOLLOW US</h4>
                <div className="flex gap-4">
                  {/* Stylized Social Icons */}
                  <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2a2a2a] hover:bg-[#cca752] hover:text-[#1c1c1c] transition-colors">
                    <span className="font-bold font-serif italic text-sm">f</span>
                  </a>
                  <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2a2a2a] hover:bg-[#cca752] hover:text-[#1c1c1c] transition-colors">
                    <span className="font-bold font-serif italic text-sm">in</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Information */}
            <div>
              <h3 className="text-lg font-bold mb-6 font-[family-name:var(--font-oswald)] tracking-widest">
                INFORMATION
              </h3>
              <ul className="flex flex-col gap-3 text-sm opacity-70">
                <li><Link href="#portal" className="hover:text-[#cca752] transition-colors">Resident Portal</Link></li>
                <li><Link href="#faqs" className="hover:text-[#cca752] transition-colors">Leasing FAQs</Link></li>
                <li><Link href="#maintenance" className="hover:text-[#cca752] transition-colors">Maintenance Request</Link></li>
                <li><Link href="#terms" className="hover:text-[#cca752] transition-colors">Terms & Conditions</Link></li>
                <li><Link href="#privacy" className="hover:text-[#cca752] transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="text-lg font-bold mb-6 font-[family-name:var(--font-oswald)] tracking-widest">
                CONTACT
              </h3>
              <div className="text-sm opacity-70 flex flex-col gap-3">
                <p className="font-bold text-[#f4ecdf] opacity-100 flex items-center gap-2 mb-2">
                  <span className="font-serif italic text-2xl text-[#cca752] leading-none">22</span>
                  <span className="font-[family-name:var(--font-oswald)] tracking-widest uppercase mt-1">Apartments</span>
                </p>
                <p>
                  Victoria Tower, Kaduwela Road<br/>
                  IDH, Colombo<br/>
                  Sri Lanka
                </p>
                <p className="mt-4">
                  <a href="tel:+94112345678" className="hover:text-[#cca752] transition-colors flex items-center gap-2">
                    📞 011 234 5678
                  </a>
                </p>
                <p>
                  <a href="mailto:leasing@22apartments.lk" className="hover:text-[#cca752] transition-colors flex items-center gap-2">
                    ✉️ leasing@22apartments.lk
                  </a>
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Payment Mockups */}
          <div className="border-t border-[#f4ecdf]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs opacity-60">
            <p>&copy; {new Date().getFullYear()} 22 Apartments. All rights reserved.</p>
            <div className="flex gap-4 items-center">
              <span className="font-bold tracking-widest font-[family-name:var(--font-oswald)]">SECURE PAYMENTS</span>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-[#2a2a2a] rounded italic font-bold">VISA</span>
                <span className="px-2 py-1 bg-[#2a2a2a] rounded italic font-bold">MasterCard</span>
                <span className="px-2 py-1 bg-[#2a2a2a] rounded italic font-bold">Amex</span>
              </div>
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
}
