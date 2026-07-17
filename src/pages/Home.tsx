import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Phone, ArrowRight, ShieldCheck, Truck, Clock, DollarSign, 
  ThumbsUp, CheckCircle, MapPin, Pickaxe, HardHat, Building2, 
  Wrench, Quote, Mail
} from 'lucide-react';
import { useState } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [activeProjectFilter, setActiveProjectFilter] = useState('all');

  return (
    <>
      <SEO />
      
      {/* 1. HERO BANNER */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541888081622-19e525656157?auto=format&fit=crop&q=80&w=1920")' }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-wide drop-shadow-lg uppercase">
              quanghai.com <sup className="text-2xl md:text-4xl">&reg;</sup>
            </h1>
            <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-200">
              Am hiểu các hệ thống của tòa nhà, các công trình xây dựng giúp chúng tôi có khả năng tách rời giữa hệ thống cần tháo và hệ thống vẫn đang hoạt động.
            </p>
          </motion.div>
        </div>

        {/* Bottom Info Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-black/80 py-6 z-20 hidden lg:block">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-4 text-white">
                <MapPin className="text-secondary flex-shrink-0" size={32} />
                <div>
                  <div className="font-bold text-lg">Địa Chỉ:</div>
                  <div className="text-sm text-gray-300">123 Nguyễn Văn Linh, Quận 7, TP.HCM</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white justify-center border-l border-r border-gray-700">
                <Phone className="text-secondary flex-shrink-0" size={32} />
                <div>
                  <div className="font-bold text-lg">Hotline:</div>
                  <div className="text-sm text-gray-300">0972 833 227</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white justify-end">
                <Mail className="text-secondary flex-shrink-0" size={32} />
                <div>
                  <div className="font-bold text-lg">Email:</div>
                  <div className="text-sm text-gray-300">quanghai@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GIỚI THIỆU & THỐNG KÊ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1.5 after:bg-secondary">
                Về Quang Hải
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Với hơn 10 năm kinh nghiệm trong lĩnh vực thi công cơ giới, tháo dỡ và chuẩn bị mặt bằng, <strong>Quang Hải</strong> tự hào là đối tác tin cậy của hàng ngàn khách hàng tại TP.HCM và các tỉnh lân cận.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Chúng tôi cam kết mang đến dịch vụ chất lượng, an toàn tuyệt đối, tiến độ nhanh chóng với mức chi phí cạnh tranh nhất.
              </p>
              <Link to="/gioi-thieu" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
                Xem chi tiết <ArrowRight size={18} />
              </Link>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "500+", label: "Công trình", icon: Building2 },
                { number: "50+", label: "Đội ngũ", icon: HardHat },
                { number: "30+", label: "Máy móc", icon: Truck },
                { number: "10+", label: "Năm kinh nghiệm", icon: Clock },
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-shadow group"
                >
                  <stat.icon className="w-10 h-10 mx-auto text-secondary mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl md:text-4xl font-black text-primary mb-2">{stat.number}</div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. DỊCH VỤ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-2xl md:text-3xl font-bold mb-4 uppercase">
              DỊCH VỤ NỔI BẬT CỦA quanghai.com <sup className="text-sm">&reg;</sup>
            </motion.h2>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-12"
          >
            {[
              { title: "Tháo dỡ nhà, công trình", desc: "Tháo dỡ nhà cũ, công trình, xưởng, kho bãi.... Nhận đập phá nhà cấp 4, Biệt thự, tòa nhà", img: "https://images.unsplash.com/photo-1518182170546-076616fdfaaf?auto=format&fit=crop&q=80&w=800" },
              { title: "Tháo dỡ shophouse, văn phòng", desc: "Tháo dỡ shop, văn phòng, trả lại hiện trạng cho trung tâm thương mại, building.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" },
              { title: "Thu mua xác nhà giá cao", desc: "Thu mua xác nhà cũ, công trình cũ, thu mua nhà hàng, quán ăn, quán cà phê cũ", img: "https://images.unsplash.com/photo-1574320297050-62136e053fa8?auto=format&fit=crop&q=80&w=800" },
              { title: "Thu mua thanh lý đồ cũ giá cao", desc: "Mua các loại đồ cũ như bàn ghế, nội thất, đồ đạc nhà hàng khách sạn, cửa cũ, đồ văn phòng...", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800" },
            ].map((service, idx) => (
              <motion.div key={idx} variants={fadeIn} className="text-center group cursor-pointer">
                <div className="h-64 overflow-hidden mb-6">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary uppercase">{service.title}</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. QUY TRÌNH LÀM VIỆC */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quy Trình Làm Việc</h2>
            <p className="text-gray-600">Chuyên nghiệp, minh bạch và tối ưu hóa thời gian cho khách hàng.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
            {[
              { title: "Tiếp nhận", icon: Phone },
              { title: "Khảo sát", icon: MapPin },
              { title: "Báo giá", icon: DollarSign },
              { title: "Ký HĐ", icon: CheckCircle },
              { title: "Thi công", icon: Truck },
              { title: "Bàn giao", icon: ThumbsUp },
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center text-gray-400 group-hover:border-secondary group-hover:text-secondary transition-colors shadow-sm mb-4 relative">
                  <step.icon size={24} />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="font-bold text-gray-800">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DỰ ÁN NỔI BẬT */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Dự Án Đã Thi Công</h2>
              <p className="text-gray-400">Những công trình tiêu biểu minh chứng cho năng lực của Quang Hải.</p>
            </div>
            <Link to="/du-an" className="px-6 py-2.5 bg-white/10 hover:bg-secondary text-white rounded-md transition-colors flex items-center gap-2 font-medium">
              Xem tất cả <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative h-72 rounded-xl overflow-hidden cursor-pointer"
              >
                <img src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000}?auto=format&fit=crop&q=80&w=600`} alt="Dự án" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="text-secondary text-sm font-bold mb-2 uppercase tracking-wider">Tháo dỡ nhà</div>
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">Công trình Quận {i + 1}</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">Hoàn thành đúng tiến độ, an toàn.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VÌ SAO CHỌN CHÚNG TÔI */}
      <section className="py-24 relative bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541888081622-19e525656157?auto=format&fit=crop&q=80&w=1920")' }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-white uppercase">TẠI SAO BẠN NÊN CHỌN quanghai.com <sup className="text-xl">&reg;</sup></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { desc: "quanghai.com bốc được khối lượng, lập bảng báo giá chi tiết rõ ràng các hạng mục, là tư liệu để xây dựng đơn giá phục vụ công tác đấu thầu" },
              { desc: "quanghai.com tổ chức thi công tốt, lắp dựng hoarding chuyên nghiệp ngăn cách khu vực thi công và khu vực đang hoạt động" },
              { desc: "quanghai.com am hiểu các hệ thống của tòa nhà, các công trình xây dựng giúp chúng tôi có khả năng tách rời giữa hệ thống cần tháo và hệ thống vẫn đang hoạt động" },
            ].map((reason, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm p-10 flex flex-col items-center text-center shadow-2xl border-b-4 border-secondary"
              >
                <div className="w-16 h-16 border-4 border-gray-300 text-gray-500 rounded flex items-center justify-center mb-6">
                  <CheckCircle size={32} />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ĐÁNH GIÁ (Simple Grid fallback) */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-primary">Khách Hàng Nói Gì?</h2>
            <div className="flex justify-center gap-1 text-secondary mb-4">
              {[1, 2, 3, 4, 5].map(i => <ThumbsUp key={i} size={20} className="fill-current" />)}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Anh Minh", role: "Chủ thầu", content: "Đội ngũ Quang Hải làm việc rất chuyên nghiệp. Máy móc đầy đủ, tháo dỡ nhà 3 tầng trong hẻm rất an toàn và sạch sẽ." },
              { name: "Chị Lan", role: "Quận 7", content: "Giá cả rất hợp lý, gọi cái là có mặt khảo sát liền. San lấp mặt bằng đúng như thiết kế, đất cát đạt chuẩn." },
              { name: "Chú Tư", role: "Quận Tân Bình", content: "Tôi rất ưng ý với dịch vụ đục nền bê tông. Nhanh gọn lẹ, dọn xà bần sạch sẽ không ảnh hưởng hàng xóm." },
            ].map((review, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-xl relative border border-slate-200">
                <Quote size={40} className="text-slate-200 absolute top-4 right-6" />
                <p className="text-slate-600 mb-6 relative z-10 italic">"{review.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-black text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-black text-primary">{review.name}</h4>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="bg-secondary text-white py-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6 drop-shadow-md tracking-tighter">
            CẦN KHẢO SÁT & BÁO GIÁ MIỄN PHÍ?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-orange-100 max-w-2xl mx-auto font-medium">
            Liên hệ ngay với Quang Hải để nhận phương án thi công tối ưu và báo giá chi tiết nhất trong ngày.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:0972833227"
              className="w-full sm:w-auto px-10 py-4 bg-white text-primary hover:bg-slate-100 rounded-lg font-black tracking-wide text-lg transition-all shadow-2xl flex items-center justify-center gap-2"
            >
              <Phone className="animate-pulse" />
              GỌI NGAY: 0972 833 227
            </a>
            <a 
              href="https://zalo.me/0972833227"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-primary text-white hover:bg-primary-dark rounded-lg font-black tracking-wide text-lg transition-all shadow-2xl flex items-center justify-center gap-2"
            >
              CHAT ZALO NGAY
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
