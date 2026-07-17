import { SEO } from '../components/SEO';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <>
      <SEO title="Liên Hệ" />
      
      {/* Banner */}
      <section className="bg-primary pt-16 pb-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">LIÊN HỆ VỚI CHÚNG TÔI</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và tư vấn giải pháp thi công tốt nhất cho công trình của bạn.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">Thông Tin Trực Tiếp</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-orange-50 text-secondary rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Trụ Sở Văn Phòng</h3>
                    <p className="text-gray-600">Thành phố Hồ Chí Minh (Phục vụ 24 quận huyện và các tỉnh lân cận)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-orange-50 text-secondary rounded-full flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Điện Thoại / Zalo</h3>
                    <a href="tel:0972833227" className="text-2xl font-black text-primary hover:text-secondary transition-colors">0972 833 227</a>
                    <p className="text-gray-500 text-sm mt-1">Mr. Hải - Tư vấn kỹ thuật 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-orange-50 text-secondary rounded-full flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a href="mailto:contact@quanghai.vn" className="text-gray-600 hover:text-secondary transition-colors">contact@quanghai.vn</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-orange-50 text-secondary rounded-full flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Giờ Làm Việc</h3>
                    <p className="text-gray-600">Thứ 2 - Chủ Nhật: Phục vụ 24/24</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-primary">Gửi Yêu Cầu Báo Giá</h2>
              <p className="text-gray-600 mb-8">Vui lòng để lại thông tin công trình, chúng tôi sẽ liên hệ lại trong vòng 15 phút để khảo sát và báo giá.</p>
              
              {isSuccess && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                  Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ sớm nhất.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Họ tên / Đơn vị *</label>
                    <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder="Nhập họ tên" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">Số điện thoại *</label>
                    <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder="Nhập số điện thoại" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-1">Dịch vụ quan tâm</label>
                  <select id="service" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all">
                    <option value="">-- Chọn dịch vụ --</option>
                    <option value="Tháo dỡ nhà">Tháo dỡ nhà công trình</option>
                    <option value="Đào móng">Đào móng</option>
                    <option value="San lấp">San lấp mặt bằng</option>
                    <option value="Ép cừ">Đóng cừ, ép cừ</option>
                    <option value="Đục bê tông">Đục phá bê tông</option>
                    <option value="Khác">Dịch vụ khác</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">Mô tả công trình</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none" placeholder="Vị trí, diện tích, yêu cầu đặc biệt..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-secondary hover:bg-secondary-hover text-white rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? 'Đang gửi...' : (
                    <>Gửi Yêu Cầu <Send size={18} /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Full Width */}
      <div className="h-96 w-full relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.273573752175!2d106.63391941533418!3d10.790351792311684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eb9d9b68a8b%3A0xc3b8a1c97a220556!2sT%C3%A2n%20Ph%C3%BA%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1628135876356!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
          title="Bản đồ Quang Hải lớn"
        ></iframe>
      </div>
    </>
  );
}
