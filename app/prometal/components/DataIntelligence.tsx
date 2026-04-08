"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Network, Database, Map, PieChart, AreaChart, BarChart3, TrendingUp, Users, 
  BrainCircuit, Zap, Target, ShieldAlert, MessageSquare, Heart, CheckCircle2,
  AlertTriangle
} from "lucide-react";

const pillars = [
  {
    id: "ops",
    title: "Tối ưu Vận Hành & Supply Chain",
    icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
    desc: "Dự báo nhu cầu, tối ưu tồn kho và điều hướng dòng hàng realtime.",
    color: "from-[#06B6D4] to-[#3B82F6]",
    borderColor: "border-[#06B6D4]/30",
    bgActive: "bg-[#06B6D4]/10",
    textColor: "text-[#06B6D4]",
  },
  {
    id: "growth",
    title: "Giữ Chân & Phân Tích Đối Tác",
    icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
    desc: "Phân loại khách hàng tự động và cảnh báo rủi ro rời bỏ (Churn).",
    color: "from-[#F59E0B] to-[#EF4444]",
    borderColor: "border-[#F59E0B]/30",
    bgActive: "bg-[#F59E0B]/10",
    textColor: "text-[#F59E0B]",
  },
  {
    id: "smart",
    title: "Chăm sóc & Bảo mật AI",
    icon: <BrainCircuit className="w-5 h-5 sm:w-6 sm:h-6" />,
    desc: "Chatbot kỹ thuật, phân tích cảm xúc và chống gian lận đa lớp.",
    color: "from-[#8B5CF6] to-[#EC4899]",
    borderColor: "border-[#8B5CF6]/30",
    bgActive: "bg-[#8B5CF6]/10",
    textColor: "text-[#8B5CF6]",
  }
];

export default function DataIntelligence() {
  const [activeTab, setActiveTab] = useState("ops");
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play tabs every 8 seconds
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveTab(prev => {
        const currentIndex = pillars.findIndex(p => p.id === prev);
        return pillars[(currentIndex + 1) % pillars.length].id;
      });
    }, 8000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="relative py-20 sm:py-28 bg-[#0A0A0A] overflow-hidden">
      {/* Background Grid & Gradient */}
      <div className="absolute inset-0 pm-grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] z-0" />
      
      {/* Dynamic Glow based on active tab */}
      <div 
        className={`absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] z-0 pointer-events-none transition-colors duration-1000 ${
          activeTab === 'ops' ? 'bg-[#06B6D4]/5' : 
          activeTab === 'growth' ? 'bg-[#F59E0B]/5' : 
          'bg-[#8B5CF6]/5'
        }`} 
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Section Header */}
        <motion.div
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
           <span className="inline-block text-xs font-semibold text-[#06B6D4] uppercase tracking-[0.2em] mb-4 bg-[#06B6D4]/10 border border-[#06B6D4]/20 px-4 py-1.5 rounded-full">
             Command Center
           </span>
           <h2
             className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight"
             style={{ fontFamily: "var(--font-pm-outfit)" }}
           >
             Quyền lực từ phân tích <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Big Data</span>
           </h2>
           <p className="mt-5 text-[#888] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
             Hệ sinh thái phân tích 8 chiều, trang bị những "vũ khí" AI tiên tiến nhất để hoạch định chiến lược kinh doanh B2B.
           </p>
        </motion.div>

        {/* Interactive Workspace */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Left Column: Vertical Tabs (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {pillars.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`relative p-5 sm:p-6 rounded-2xl border text-left transition-all duration-300 overflow-hidden ${
                  activeTab === pillar.id 
                    ? `bg-[#111] ${pillar.borderColor} shadow-lg shadow-${pillar.textColor.split('-')[1]}/10` 
                    : 'bg-[#141414] border-white/5 hover:border-white/10 hover:bg-white/5'
                }`}
              >
                {/* Active Indicator Line */}
                {activeTab === pillar.id && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${pillar.color}`}
                  />
                )}
                
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                  activeTab === pillar.id ? pillar.bgActive : 'bg-white/5'
                } ${
                  activeTab === pillar.id ? pillar.textColor : 'text-[#888]'
                }`}>
                  {pillar.icon}
                </div>
                
                <h3 className={`text-lg sm:text-xl font-bold mb-2 transition-colors duration-300 ${
                  activeTab === pillar.id ? 'text-white' : 'text-[#bbb]'
                }`}>
                  {pillar.title}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Right Column: Display Content (8 cols) */}
          <div className="lg:col-span-8 bg-[#111111] border border-white/10 rounded-[2rem] p-6 sm:p-8 min-h-[500px] flex overflow-hidden relative">
            <AnimatePresence mode="wait">
              
              {/* CONTENT: OPS */}
              {activeTab === 'ops' && (
                <motion.div 
                  key="ops"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col gap-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                     <span className="w-3 h-3 rounded-full bg-[#06B6D4] animate-pulse" />
                     <h3 className="text-xl sm:text-2xl font-bold text-white">Supply Chain & Demand</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
                    {/* Item 1: Demand Forecasting */}
                    <div className="bg-[#18181A] rounded-xl p-5 border border-white/5 flex flex-col">
                      <div className="flex items-center gap-2 mb-4 text-[#06B6D4]">
                        <BarChart3 size={18} />
                        <span className="font-semibold text-sm">Demand Forecasting</span>
                      </div>
                      <p className="text-[#888] text-xs sm:text-sm mb-4">
                        Dự báo nhu cầu khung trần khu vực dựa vào lịch sử, thời vụ và cả thời tiết. Cảnh báo tự động nhập hàng.
                      </p>
                      <div className="mt-auto bg-black/40 rounded-lg p-3 border border-white/5">
                         <div className="flex justify-between items-end h-16 gap-1.5 pb-2 border-b border-white/10">
                            {[30, 45, 40, 80, 60, 95, 75].map((h, i) => (
                               <div key={i} className="w-full bg-[#06B6D4]/30 rounded-t-sm relative group" style={{ height: `${h}%` }}>
                                  {i === 5 && <div className="absolute -top-1 left-0 right-0 h-1 bg-[#06B6D4]" />}
                               </div>
                            ))}
                         </div>
                         <div className="flex justify-between text-[10px] text-[#666] mt-2 font-mono">
                           <span>THG 9</span>
                           <span className="text-[#06B6D4]">DỰ BÁO CAO ĐIỂM</span>
                         </div>
                      </div>
                    </div>

                    {/* Item 2: Dynamic Pricing + Heatmap */}
                    <div className="flex flex-col gap-5">
                      {/* Dynamic Pricing */}
                      <div className="bg-[#18181A] rounded-xl p-5 border border-white/5 flex-1">
                        <div className="flex items-center gap-2 mb-2 text-[#E9A033]">
                          <Zap size={18} />
                          <span className="font-semibold text-sm">Dynamic Pricing</span>
                        </div>
                        <p className="text-[#888] text-xs mb-3">Tự động tăng hệ số điểm cho SKU tồn kho cáo, đẩy hàng không giảm giá margin.</p>
                        <div className="flex items-center justify-between bg-black/40 px-3 py-2 rounded-lg border border-white/5">
                          <span className="text-xs text-white">Khung nổi T1220</span>
                          <span className="text-xs font-bold text-[#E9A033] bg-[#E9A033]/10 px-2 py-0.5 rounded border border-[#E9A033]/20">🔥 X3 ĐIỂM (48H)</span>
                        </div>
                      </div>

                      {/* Heatmap */}
                      <div className="bg-[#18181A] rounded-xl p-5 border border-white/5 flex-1 relative overflow-hidden">
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-2 text-emerald-400">
                            <Map size={18} />
                            <span className="font-semibold text-sm">Construction Heatmap</span>
                          </div>
                          <p className="text-[#888] text-xs">Mật độ công trình dùng ProMetal (Realtime).</p>
                        </div>
                        {/* Heatmap Mock UI */}
                        <div className="absolute right-[-20px] bottom-[-20px] w-32 h-32 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
                        <div className="absolute right-6 bottom-4 flex gap-2 w-auto">
                           <div className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
                           <div className="w-3 h-3 rounded-full bg-emerald-400 mix-blend-screen animate-pulse" />
                           <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}


              {/* CONTENT: GROWTH */}
              {activeTab === 'growth' && (
                <motion.div 
                  key="growth"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col gap-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                     <span className="w-3 h-3 rounded-full bg-[#F59E0B] animate-pulse" />
                     <h3 className="text-xl sm:text-2xl font-bold text-white">Partner Growth Analytics</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
                    {/* Item 1: Clustering */}
                    <div className="bg-[#18181A] rounded-xl p-5 border border-white/5 flex flex-col">
                      <div className="flex items-center gap-2 mb-4 text-[#F59E0B]">
                        <Users size={18} />
                        <span className="font-semibold text-sm">Behavior Clustering</span>
                      </div>
                      <p className="text-[#888] text-xs sm:text-sm mb-6">
                        AI tự động phân nhóm đại lý theo profile mua hàng thực tế để lên campaign cá nhân hóa.
                      </p>
                      
                      <div className="mt-auto flex flex-col gap-2">
                        <div className="flex items-center justify-between bg-black/40 p-2.5 rounded border border-white/10">
                          <span className="text-xs font-semibold text-white flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#10B981]" /> Nhóm A (Trung thành)
                          </span>
                          <span className="text-[10px] text-[#888]">45%</span>
                        </div>
                        <div className="flex items-center justify-between bg-black/40 p-2.5 rounded border border-white/10">
                          <span className="text-xs font-semibold text-white flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#3B82F6]" /> Nhóm B (Theo mùa/Dự án)
                          </span>
                          <span className="text-[10px] text-[#888]">30%</span>
                        </div>
                        <div className="flex items-center justify-between bg-black/40 p-2.5 rounded border border-white/10">
                          <span className="text-xs font-semibold text-white flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#EF4444]" /> Nhóm D (Sắp rời đi)
                          </span>
                          <span className="text-[10px] text-red-500 font-bold uppercase">Cần Nurture</span>
                        </div>
                      </div>
                    </div>

                    {/* Item 2: Churn Prediction */}
                    <div className="bg-[#18181A] rounded-xl p-5 border border-white/5 flex flex-col">
                       <div className="flex items-center gap-2 mb-4 text-[#EF4444]">
                        <AlertTriangle size={18} />
                        <span className="font-semibold text-sm">Churn Prediction</span>
                      </div>
                      <p className="text-[#888] text-xs sm:text-sm mb-6">
                        Tính điểm "Rủi ro rời bỏ". Alert sales team gọi điện, tặng voucher khi đại lý có dấu hiệu giảm mua / chuyển đối thủ.
                      </p>

                      <div className="mt-auto bg-black/40 rounded-xl p-4 border border-red-500/20 text-center">
                         <div className="w-16 h-16 mx-auto rounded-full border-[4px] border-red-500/30 flex items-center justify-center mb-3">
                            <span className="text-2xl font-bold text-red-400">85%</span>
                         </div>
                         <h4 className="text-sm font-bold text-white mb-1">Rủi Ro Cấp Bách</h4>
                         <p className="text-[10px] text-[#888] mb-3">Đại lý Phát Đạt - 60 ngày không nhập</p>
                         <button className="w-full bg-red-500/10 text-red-400 py-1.5 rounded text-xs font-bold border border-red-500/20 hover:bg-red-500/20 transition-colors">
                            Kích hoạt Voucher Giữ chân
                         </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}


              {/* CONTENT: SMART */}
              {activeTab === 'smart' && (
                <motion.div 
                  key="smart"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col gap-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                     <span className="w-3 h-3 rounded-full bg-[#8B5CF6] animate-pulse" />
                     <h3 className="text-xl sm:text-2xl font-bold text-white">Smart Security & AI Support</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
                    {/* Item 1: Anti Fraud & Sentiment */}
                    <div className="flex flex-col gap-5">
                      {/* Fraud Detection */}
                      <div className="bg-[#18181A] rounded-xl p-5 border border-white/5 flex-1 relative overflow-hidden group">
                        <div className="flex items-center gap-2 mb-2 text-[#8B5CF6]">
                          <ShieldAlert size={18} />
                          <span className="font-semibold text-sm">Advanced Fraud Detection</span>
                        </div>
                        <p className="text-[#888] text-xs">AI soi pattern ảnh hóa đơn, IP thiết bị để chặn gian lận tự động.</p>
                        
                        {/* Scanner animation */}
                        <div className="mt-4 bg-black/50 h-16 rounded border border-white/10 relative overflow-hidden flex items-center justify-center">
                           <div className="text-[10px] text-[#555] font-mono">invoice_scan.jpg</div>
                           <motion.div 
                             animate={{ y: ["-100%", "100%"] }} 
                             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                             className="absolute top-0 left-0 right-0 h-1 bg-[#8B5CF6] shadow-[0_0_10px_#8B5CF6]"
                           />
                        </div>
                      </div>

                      {/* Sentiment */}
                      <div className="bg-[#18181A] rounded-xl p-5 border border-white/5 flex-1">
                        <div className="flex items-center gap-2 mb-2 text-pink-400">
                          <Heart size={18} />
                          <span className="font-semibold text-sm">Sentiment Analysis</span>
                        </div>
                        <p className="text-[#888] text-xs mb-3">Đánh giá cảm xúc từ feedback nhận quà.</p>
                        <div className="flex gap-2">
                           <div className="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded text-[10px] font-bold border border-emerald-500/20">Positive 82%</div>
                           <div className="bg-white/5 text-[#888] px-2 py-1 rounded text-[10px] font-bold border border-white/10">Neutral 15%</div>
                        </div>
                      </div>
                    </div>

                    {/* Item 2: AI Chatbot */}
                    <div className="bg-[#18181A] rounded-xl p-5 border border-white/5 flex flex-col">
                       <div className="flex items-center gap-2 mb-4 text-[#06B6D4]">
                        <MessageSquare size={18} />
                        <span className="font-semibold text-sm">Technical AI Chatbot</span>
                      </div>
                      <p className="text-[#888] text-xs sm:text-sm mb-4">
                        Trợ lý 24/7 tính toán vật tư cho công trình, giải đáp mọi vấn đề kỹ thuật mảng trần thạch cao.
                      </p>

                      <div className="mt-auto bg-black/40 rounded-xl p-3 border border-white/10 flex flex-col gap-3">
                         <div className="flex gap-2 w-11/12 ml-auto">
                            <div className="bg-white/10 rounded-xl rounded-tr-sm p-2 text-[10px] text-white">
                               Công trình 50m² trần chìm cần bao nhiêu khung U48?
                            </div>
                         </div>
                         <div className="flex gap-2 w-11/12">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#06B6D4] to-blue-500 flex items-center justify-center shrink-0">
                               <BrainCircuit size={10} className="text-white" />
                            </div>
                            <div className="bg-[#06B6D4]/10 border border-[#06B6D4]/20 rounded-xl rounded-tl-sm p-2 text-[10px] text-white leading-relaxed">
                               Tường 50m², bạn cần khoảng: <br/> 
                               • 85 thanh chính U48<br/>
                               • 170 thanh phụ U25<br/>
                               • 300 vít, 50 ty ren.
                            </div>
                         </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
