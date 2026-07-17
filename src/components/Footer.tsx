import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, HardHat, Facebook, Send, Building2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1 */}
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-black text-secondary tracking-wider leading-none uppercase">
                QUANG HẢI
              </h3>
              <p className="text-xs font-bold text-gray-500 uppercase">
                Uy tín – Thân thiện – Chuyên Nghiệp
              </p>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-5 flex justify-center text-gray-400">
                  <span className="font-bold">🌍</span>
                </div>
                <span>quanghai.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gray-400 shrink-0" size={16} />
                <a href="tel:0972833227" className="hover:text-secondary transition-colors font-semibold text-primary">Hotline: 0972 833 227</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gray-400 shrink-0" size={16} />
                <a href="mailto:quanghai@gmail.com" className="hover:text-secondary transition-colors">Email: quanghai@gmail.com</a>
              </li>
            </ul>
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 rounded flex items-center justify-center bg-[#3b5998] text-white hover:opacity-90 transition-opacity">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded flex items-center justify-center bg-gray-800 text-white hover:opacity-90 transition-opacity">
                <span className="font-bold text-xs">t</span>
              </a>
              <a href="#" className="w-8 h-8 rounded flex items-center justify-center bg-[#cd201f] text-white hover:opacity-90 transition-opacity">
                <span className="font-bold text-xs">▶</span>
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-lg font-bold text-primary mb-6 uppercase">
              LIÊN HỆ
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Building2 className="text-gray-400 shrink-0 mt-1" size={16} />
                <div>
                  <span className="font-bold text-primary">Văn Phòng:</span> 100/3/14 Lê Thị Hà, Hóc Môn, HCM.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Building2 className="text-gray-400 shrink-0 mt-1" size={16} />
                <div>
                  <span className="font-bold text-primary">Kho:</span> 35A Lê Văn Khương, Hóc Môn, HCM
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Building2 className="text-gray-400 shrink-0 mt-1" size={16} />
                <div>
                  <span className="font-bold text-primary">Cửa hàng:</span> 343 Đ. Tô Hiến Thành, Phường 12, Quận 10, Hồ Chí Minh, Vietnam
                </div>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-lg font-bold text-primary mb-6 uppercase">
              ĐIỀU HƯỚNG NHANH
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Về chúng tôi', path: '/gioi-thieu' },
                { name: 'Tổng hợp dịch vụ', path: '/dich-vu' },
                { name: 'Tổng hợp dự án case study', path: '/du-an' },
                { name: 'Tổng hợp tin tức', path: '/tin-tuc' },
                { name: 'Liên hệ nhanh', path: '/lien-he' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="text-sm hover:text-secondary transition-colors flex items-center gap-2">
                    <span className="text-blue-500 font-bold">✓</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <div className="w-full h-48 bg-gray-200 rounded overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.420594896589!2d106.62768007469837!3d10.855574389297652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a1a8c9b2e53%3A0x6c6e7f1a3b8d4e4!2zQ8O0bmcgVHkgQuG6o28gVsG7hyBRdWFuZyBI4bqjaQ!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 text-xs flex justify-center items-center text-gray-500">
          <p>Copyright 2024 © quanghai.com & Việt Top Agency</p>
        </div>
      </div>
    </footer>
  );
}
