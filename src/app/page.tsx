"use client";

import React, { useState } from "react";

export default function Home() {
  // Client state for interactive slanted cards
  const [activeCard, setActiveCard] = useState<number>(1);

  // Client state for registration form
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    birthYear: "",
    parentPhone: "",
    position: "Orta Saha",
    experience: "Lisanssız / Başlangıç",
  });
  
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.studentName && formData.birthYear && formData.parentPhone) {
      setFormSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData({
      studentName: "",
      birthYear: "",
      parentPhone: "",
      position: "Orta Saha",
      experience: "Lisanssız / Başlangıç",
    });
    setFormSubmitted(false);
  };

  // 3 Slanted Visual Cards Data
  const slantedCards = [
    {
      id: 0,
      title: "KOORDİNASYON",
      badge: "DRİLLER",
      image: "https://images.unsplash.com/photo-1526232759582-705003c00454?q=80&w=600&auto=format&fit=crop",
      desc: "Motorik Beceriler",
      tagline: "Denge ve çeviklik çalışmaları"
    },
    {
      id: 1,
      title: "TAKTIK & TEKNIK",
      badge: "ELİT AKADEMİ",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop",
      desc: "Oyun Zekası",
      tagline: "Pas, kontrol ve mevkisel oyun"
    },
    {
      id: 2,
      title: "MAÇ DENEYİMİ",
      badge: "LİSANSLI GRUP",
      image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=600&auto=format&fit=crop",
      desc: "Takım Ruhu",
      tagline: "Nizami saha içi taktik mücadele"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-pitch-green selection:text-white relative overflow-x-hidden font-sans">
      
      {/* Soft Blurred Corporate Gradients in Background (Navy, Green, Gold) */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-pitch-green/8 blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[-200px] w-[700px] h-[700px] rounded-full bg-gold/6 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-200px] w-[600px] h-[600px] rounded-full bg-navy/6 blur-[140px] pointer-events-none z-0" />

      {/* Textured Background Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none z-0" />

      {/* Dynamic Upper Accent Grid Line */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-navy via-pitch-green to-gold z-50" />

      {/* Top Banner */}
      <div className="bg-[#0F172A] text-white text-xs py-2.5 px-4 text-center font-medium tracking-wider uppercase border-b border-white/5 relative z-40">
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse"></span>
          Kayıtlar için Son Gün: <strong className="text-gold font-bold">15 Eylül 2026</strong>. Erken Kayıt Avantajlarını Kaçırmayın!
        </span>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-[#F8FAFC]/80 backdrop-blur-md border-b border-[#0F172A]/5 z-45 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-12 h-12 bg-[#0F172A] rounded-xl flex items-center justify-center transform -rotate-6 border-2 border-pitch-green shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h5v-2h-3V7z" />
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.5c4.694 0 8.5-3.806 8.5-8.5S16.694 3.5 12 3.5 3.5 7.306 3.5 12s3.806 8.5 8.5 8.5zm2.8-8.5l2.45-1.425c.16.59.25 1.205.25 1.845 0 .64-.09 1.255-.25 1.845L14.8 12zm-5.6 0l-2.45 1.425C6.59 12.835 6.5 12.42 6.5 12c0-.42.09-.835.25-1.425L9.2 12zm2.8 2.8l1.425 2.45c-.59.16-1.205.25-1.845.25-.64 0-1.255-.09-1.845-.25L12 14.8zm0-5.6L10.575 6.75c.59-.16 1.205-.25 1.845-.25.64 0 1.255.09 1.845.25L12 9.2zm-2.122 3.978l-1.428 2.472a8.47 8.47 0 0 1-1.642-1.642l2.472-1.428.598.598zm4.244 0l.598-.598 2.472 1.428a8.47 8.47 0 0 1-1.642 1.642l-1.428-2.472zM9.878 10.822l-.598-.598L6.808 8.796c.465-.62.997-1.152 1.617-1.617l1.428 2.472.025.171zm4.244 0l.025-.171 1.428-2.472c.62.465 1.152.997 1.617 1.617l-2.472 1.428-.598.598z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl leading-none uppercase tracking-tight text-[#0F172A]">
                  BİLGEGENÇ
                </span>
                <span className="text-[10px] font-bold text-pitch-green tracking-widest uppercase leading-none mt-1">
                  Futbol Okulu
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
              <a href="#hakkimizda" className="hover:text-pitch-green transition-colors py-2">Biz Kimiz?</a>
              <a href="#egitimler" className="hover:text-pitch-green transition-colors py-2">Akademi Programları</a>
              <a href="#kayit" className="hover:text-pitch-green transition-colors py-2">Kayıt Başvurusu</a>
              <a href="#iletisim" className="hover:text-pitch-green transition-colors py-2">İletişim</a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#kayit"
                className="relative inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-[#0F172A] rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 border-2 border-pitch-green/30 hover:border-pitch-green"
              >
                <span className="absolute inset-0 w-full h-full bg-pitch-green transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500 ease-out z-0"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <span>İletişim / Kayıt</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#0F172A] hover:text-pitch-green transition-colors focus:outline-none"
                aria-label="Menüyü Aç"
              >
                {isMobileMenuOpen ? (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#F8FAFC] border-b border-[#0F172A]/10 py-4 px-6 space-y-3 font-semibold text-base shadow-lg">
            <a
              href="#hakkimizda"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2.5 px-3 rounded-lg hover:bg-slate-200 hover:text-pitch-green transition-all"
            >
              Biz Kimiz?
            </a>
            <a
              href="#egitimler"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2.5 px-3 rounded-lg hover:bg-slate-200 hover:text-pitch-green transition-all"
            >
              Akademi Programları
            </a>
            <a
              href="#kayit"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2.5 px-3 rounded-lg hover:bg-slate-200 hover:text-pitch-green transition-all"
            >
              Kayıt Başvurusu
            </a>
            <a
              href="#iletisim"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2.5 px-3 rounded-lg hover:bg-slate-200 hover:text-pitch-green transition-all"
            >
              İletişim
            </a>
            <div className="pt-2">
              <a
                href="#kayit"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-3 bg-[#0F172A] text-white text-center rounded-xl font-bold shadow-md hover:bg-pitch-green transition-all"
              >
                İletişim / Kayıt
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Redesigned with Ambitious Typography & Spacing */}
      <section className="relative w-full overflow-hidden bg-slate-950 py-16 md:py-28 lg:py-36">
        {/* Background Video */}
        <video
          src="/videos/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/60 md:bg-gradient-to-r md:from-slate-950/90 md:via-slate-950/60 md:to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Bold Typography & CTAs */}
            <div className="lg:col-span-6 flex flex-col items-start space-y-8 text-left">
              
              {/* Tag/Badge */}
              <div className="inline-flex items-center gap-2 bg-[#16A34A]/8 border border-[#16A34A]/20 text-pitch-green px-4 py-2 rounded-full font-black text-xs uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pitch-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pitch-green"></span>
                </span>
                2026 GÜZ DÖNEMİ AKADEMİ KAYITLARI
              </div>

              {/* Redesigned Ambitious Title */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.93]">
                  Geleceğin Yıldızları <br />
                  <span className="text-pitch-green relative inline-block transform -skew-y-1 bg-pitch-green/20 px-3 py-1 border-b-6 border-pitch-green mt-1">
                    Sahaya Çıkıyor!
                  </span> <br />
                  BilgeGenç Başlıyor! 🏆
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-slate-200/90 font-medium leading-relaxed max-w-xl pt-2">
                  8-14 yaş arası sporcularımızı; disiplin, gelişim ve takım ruhuyla buluşturuyoruz. Çocuğunuzun hem sportif hem de kişisel gelişimine katkı sağlayacak bu yolculukta siz de yerinizi alın!
                </p>
              </div>

              {/* Checklist with Minimalist Rounded Badges / SVG Icons (Lucide-Style) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
                
                {/* Feature 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#16A34A]/10 border border-[#16A34A]/25 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-pitch-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base font-black text-slate-200">Profesyonel antrenman ortamı</span>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base font-black text-slate-200">Eğlenceli ve öğretici çalışmalar</span>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#16A34A]/10 border border-[#16A34A]/25 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-pitch-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base font-black text-slate-200">Sınırlı kontenjan</span>
                </div>

                {/* Feature 4 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base font-black text-slate-200">Erken kayıt fırsatı</span>
                </div>

              </div>

              {/* Accent Message (Birebir İstenen Vurgu) */}
              <div className="w-full bg-white/10 backdrop-blur-sm border-l-4 border-gold p-4.5 rounded-r-2xl">
                <p className="text-sm font-black text-slate-100 leading-relaxed flex items-center gap-2">
                  <span>📞 Detaylı bilgi ve kayıt için bizimle iletişime geçebilirsiniz.</span>
                </p>
              </div>

              {/* Redesigned Dynamic CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
                <a
                  href="#kayit"
                  className="relative inline-flex items-center justify-center px-8 py-4.5 font-black text-white bg-pitch-green rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pitch-green-hover to-pitch-green transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500 ease-out z-0"></span>
                  <span className="relative z-10 flex items-center gap-2.5">
                    <span>Kayıt Formunu Doldur</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </a>
                <a
                  href="tel:+902125554545"
                  className="text-center bg-white hover:bg-slate-100 text-[#0F172A] font-extrabold px-8 py-4.5 rounded-xl border-2 border-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Hemen Ara</span>
                </a>
              </div>

            </div>

            {/* Right Column: Glassmorphic Slanted Visual Cards (/ / /) */}
            <div className="lg:col-span-6 flex items-center justify-center py-10 lg:py-0 w-full overflow-visible">
              
              {/* The 3 Slanted Cards Container (/ / /) */}
              <div className="flex gap-4 sm:gap-5 items-center transform -skew-x-12 select-none relative max-w-full">
                
                {slantedCards.map((card, index) => {
                  const isActive = activeCard === index;
                  
                  return (
                    <div
                      key={card.id}
                      onMouseEnter={() => setActiveCard(index)}
                      onClick={() => setActiveCard(index)}
                      className={`relative rounded-3xl border transition-all duration-500 ease-out cursor-pointer flex flex-col p-3 sm:p-4 ${
                        isActive
                          ? "w-36 sm:w-52 md:w-60 h-[360px] sm:h-[440px] md:h-[480px] bg-white/95 border-pitch-green/40 shadow-2xl z-20 scale-[1.03]"
                          : "w-24 sm:w-36 md:w-40 h-[290px] sm:h-[360px] md:h-[390px] bg-white/80 backdrop-blur-md border-white/50 opacity-70 hover:opacity-90 z-0 scale-95 shadow-lg"
                      }`}
                    >
                      {/* Visual Card Image Box (Slanted inside, compensated unskewed photo) */}
                      <div className={`w-full overflow-hidden rounded-2xl relative border border-[#0F172A]/5 transition-all duration-500 ${
                        isActive ? "h-[200px] sm:h-[260px] md:h-[290px]" : "h-[140px] sm:h-[180px] md:h-[200px]"
                      }`}>
                        <div className="w-full h-full transform skew-x-12 scale-[1.35] relative">
                          <img
                            src={card.image}
                            alt={card.title}
                            className={`w-full h-full object-cover transition-all duration-500 ${
                              isActive ? "brightness-105" : "brightness-95 grayscale-[10%]"
                            }`}
                          />
                        </div>
                      </div>
                      
                      {/* Glassmorphic Text Hierarchy */}
                      <div className="mt-3.5 flex flex-col items-start text-left transform skew-x-12">
                        <span className={`font-black uppercase tracking-wider transition-all duration-500 ${
                          isActive ? "text-[10px] text-pitch-green" : "text-[8px] text-[#0F172A]/50"
                        }`}>
                          {card.badge}
                        </span>
                        <h3 className={`font-black uppercase tracking-tight text-[#0F172A] mt-1 leading-none transition-all duration-500 ${
                          isActive ? "text-sm sm:text-lg md:text-xl" : "text-xs"
                        }`}>
                          {card.title}
                        </h3>
                        <p className={`text-[#0F172A]/60 font-semibold mt-1.5 leading-tight transition-all duration-500 ${
                          isActive ? "text-[10px] sm:text-xs block" : "hidden"
                        }`}>
                          {card.tagline}
                        </p>
                      </div>

                      {/* Small layout indicator dot */}
                      {isActive && (
                        <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-pitch-green z-30 animate-pulse transform skew-x-12" />
                      )}
                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Skewed Ribbon Banner */}
      <div className="relative w-full h-20 bg-gradient-to-br from-[#0F172A] to-[#1e293b] text-white py-4 overflow-hidden transform -skew-y-3 z-30 shadow-lg mt-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,197,94,0.15),rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-around font-black uppercase text-xs md:text-sm tracking-widest select-none animate-marquee gap-8 whitespace-nowrap">
          <span>★ GELECEĞİN YILDIZLARI SAHAYA ÇIKIYOR</span>
          <span className="text-gold">★ BİLGEGENÇ SPOR AKADEMİSİ</span>
          <span>★ DİSİPLİN VE ELİT GELİŞİM</span>
          <span className="text-pitch-green">★ 8-14 YAŞ GRUBU KAYITLARI</span>
          <span>★ ERKEN KAYIT FIRSATLARI</span>
          <span>★ PROFESYONEL ANTRENMAN ORTAMI</span>
        </div>
      </div>

      {/* Biz Kimiz / Hakkımızda Section - Asymmetric Grid Layout */}
      <section id="hakkimizda" className="pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-sm font-extrabold text-pitch-green uppercase tracking-wider">BİZİM HİKAYEMİZ</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] uppercase">
              Altyapı Devrimine Hoş Geldiniz
            </h2>
            <div className="w-16 h-1.5 bg-gold mx-auto rounded-full" />
            <p className="text-[#0F172A]/70 font-medium">
              Gençleri sadece fiziksel olarak değil, aynı zamanda taktik zeka ve spor ahlakı alanında da yarınlara hazırlıyoruz. Her yaş kategorisine özel bilimsel futbol programı uyguluyoruz.
            </p>
          </div>

          {/* Asymmetric Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Box 1 (Deep Navy background, large accent) */}
            <div className="md:col-span-2 bg-[#0F172A] text-white p-8 md:p-12 rounded-3xl relative overflow-hidden group shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#16A34A]/10 rounded-full blur-2xl -z-10 group-hover:bg-[#16A34A]/20 transition-all duration-500" />
              <div className="absolute bottom-6 right-6 opacity-5 transform group-hover:scale-110 transition-transform duration-500">
                <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
                </svg>
              </div>
              <div className="space-y-4">
                <span className="text-gold text-xs font-black uppercase tracking-widest">Vizyonumuz & Farkımız</span>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                  Sadece Futbolcu Değil, Karakterli Sporcular Yetiştiriyoruz
                </h3>
                <p className="text-slate-300 font-medium leading-relaxed">
                  Akademimizde eğitim modeli yalnızca teknik antrenmanlardan ibaret değildir. Sporcularımızın kişisel gelişimi, beslenme planlaması, akademik başarı takibi ve psikolojik destek süreçleri profesyonel ekiplerimiz tarafından koordine edilir.
                </p>
                <div className="pt-4 flex flex-wrap gap-3">
                  <span className="bg-white/10 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">Kişisel Analiz</span>
                  <span className="bg-white/10 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">Beslenme Danışmanlığı</span>
                  <span className="bg-white/10 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">Okul & Eğitim Entegrasyonu</span>
                </div>
              </div>
            </div>

            {/* Box 2 (Light Pitch Green background, tall grid element) */}
            <div className="bg-pitch-green text-white p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl" />
              <div className="space-y-4 z-10">
                <span className="text-navy font-black text-xs uppercase tracking-widest">Eğitim Sahası</span>
                <h3 className="text-2xl font-black uppercase tracking-tight leading-tight">
                  Modern Tesis & Teknolojik Altyapı
                </h3>
                <p className="text-white/90 text-sm font-medium leading-relaxed">
                  Çocuklarımızın her türlü sakatlık riskini en aza indiren en son teknoloji şok emici zemin kaplamalı çim sahalarımızda, her hava koşulunda kesintisiz antrenman imkanı sunuyoruz.
                </p>
              </div>
              <div className="pt-6 border-t border-white/20 mt-6 z-10 flex items-center justify-between">
                <span className="font-extrabold text-sm uppercase">Program Detayları</span>
                <a href="#egitimler" className="w-10 h-10 rounded-full bg-white text-pitch-green flex items-center justify-center font-black group-hover:translate-x-1.5 transition-transform">→</a>
              </div>
            </div>

            {/* Box 3 (Soft Gold border, glassmorphism base) */}
            <div className="bg-white/60 backdrop-blur-md border border-white/70 p-8 rounded-3xl flex flex-col justify-between group shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4">
                <span className="text-pitch-green font-black text-xs uppercase tracking-widest">Antrenman Metodu</span>
                <h3 className="text-xl font-black text-[#0F172A] uppercase tracking-tight">
                  Bireysel Gelişim Kartı (Sınırsız Analiz)
                </h3>
                <p className="text-[#0F172A]/70 text-sm font-medium leading-relaxed">
                  Veli portalımız üzerinden sporcumuzun hız, pas yüzdesi, dayanıklılık ve taktik uyum gelişim grafiğini her ay düzenli güncellenen verilerle takip edin.
                </p>
              </div>
              <div className="pt-6 border-t border-[#0F172A]/10 mt-6 flex items-center justify-between">
                <span className="font-black text-xs uppercase text-gold-hover">Gelişim Portalı</span>
                <span className="text-[#0F172A]/50 text-xs font-bold">Her Ay Raporlama</span>
              </div>
            </div>

            {/* Box 4 (Navy and Gold asymmetric layout) */}
            <div className="md:col-span-2 bg-white/40 backdrop-blur-sm border border-white/50 p-8 rounded-3xl relative overflow-hidden group shadow-md flex flex-col justify-between transform hover:-translate-y-1 transition-all duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <span className="text-pitch-green font-black text-xs uppercase tracking-widest">Sosyal Sorumluluk</span>
                  <h3 className="text-xl font-black text-[#0F172A] uppercase tracking-tight">
                    Lisanslı Kulüp Ağları ile Doğrudan Entegrasyon
                  </h3>
                  <p className="text-[#0F172A]/70 text-sm font-medium leading-relaxed">
                    Türkiye ve Avrupa'nın önde gelen profesyonel kulüplerinin altyapı scoutları ile düzenlediğimiz hazırlık maçları ve seçmelerle sporcularımıza çıkış kapısı aralıyoruz.
                  </p>
                </div>
                <div className="relative h-44 rounded-2xl overflow-hidden border border-[#0F172A]/10">
                  <img
                    src="https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=600&auto=format&fit=crop"
                    alt="Antrenör ve Genç Takım"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent flex items-end p-3">
                    <span className="text-white text-[11px] font-bold uppercase">Scout Turnuvası - 2026 Güz</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Programlar Section - Modern Sports Brochure style (U9, U12, U15) */}
      <section id="egitimler" className="py-24 bg-[#0F172A] text-white relative overflow-hidden z-10">
        
        {/* Dynamic slanted divider */}
        <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-r from-gold via-pitch-green to-gold" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#16A34A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-sm font-extrabold text-gold uppercase tracking-wider">YAŞ GRUBU PROGRAMLARIMIZ</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Gelişim Seviyesine Özel <br />
                <span className="text-pitch-green">Planlanmış Müfredat</span>
              </h2>
            </div>
            <p className="max-w-md text-slate-300 text-sm font-medium leading-relaxed">
              Her çocuğun kas yapısı, algı seviyesi ve motor becerileri farklıdır. Programlarımız, yaş kategorilerine özel fizyolojik ve psikolojik müfredat içermektedir.
            </p>
          </div>

          {/* Brochure List Layout - Asymmetric, clean and readable with big numbers */}
          <div className="space-y-8">
            
            {/* U9 - U11 Section */}
            <div className="bg-white/5 border border-white/10 hover:border-pitch-green/60 rounded-3xl p-6 md:p-10 transition-all duration-300 group hover:bg-white/[0.08]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Number */}
                <div className="lg:col-span-2 flex lg:flex-col items-baseline justify-between lg:justify-start gap-2">
                  <span className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-pitch-green to-white/20 select-none">
                    01
                  </span>
                  <span className="text-xs font-black uppercase bg-pitch-green/20 text-pitch-green px-3 py-1 rounded-full tracking-widest border border-pitch-green/20">
                    U9 - U11
                  </span>
                </div>

                {/* Info Text */}
                <div className="lg:col-span-5 space-y-3">
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">
                    Temel Eğitim ve Koordinasyon
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Futbola ilk adımı atan çocuklar için eğlence odaklı temel motorik beceriler, esneklik, top hissi ve takım bilinci aşılama programı.
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-400 pt-2">
                    <li className="flex items-center gap-1.5"><span className="text-pitch-green">✦</span> Top Kontrolü Temelleri</li>
                    <li className="flex items-center gap-1.5"><span className="text-pitch-green">✦</span> Eğitsel Oyunlar</li>
                    <li className="flex items-center gap-1.5"><span className="text-pitch-green">✦</span> Koordinasyon Parkurları</li>
                    <li className="flex items-center gap-1.5"><span className="text-pitch-green">✦</span> Haftada 2 Antrenman</li>
                  </ul>
                </div>

                {/* Schedule & Focus */}
                <div className="lg:col-span-3 bg-white/5 rounded-2xl p-5 border border-white/5">
                  <span className="block text-[10px] font-black uppercase text-gold tracking-widest mb-1">ODAK ALANI</span>
                  <span className="block text-base font-bold uppercase mb-3">Topla Dostluk & Esneklik</span>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gold h-full w-[85%] rounded-full" />
                  </div>
                  <span className="block text-[10px] font-bold text-slate-400 mt-2 text-right">Eğlence ve Katılım %85</span>
                </div>

                {/* Call Action inside grid */}
                <div className="lg:col-span-2 text-center lg:text-right">
                  <a
                    href="#kayit"
                    className="inline-flex items-center justify-center w-full lg:w-auto px-6 py-3.5 bg-pitch-green hover:bg-pitch-green-hover text-white font-extrabold text-sm uppercase rounded-xl transition-all duration-300 group-hover:scale-105 shadow-md"
                  >
                    Detayları Seç
                  </a>
                </div>

              </div>
            </div>

            {/* U12 - U14 Section */}
            <div className="bg-white/5 border border-white/10 hover:border-gold/60 rounded-3xl p-6 md:p-10 transition-all duration-300 group hover:bg-white/[0.08]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Number */}
                <div className="lg:col-span-2 flex lg:flex-col items-baseline justify-between lg:justify-start gap-2">
                  <span className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gold to-white/20 select-none">
                    02
                  </span>
                  <span className="text-xs font-black uppercase bg-gold/20 text-gold px-3 py-1 rounded-full tracking-widest border border-gold/20">
                    U12 - U14
                  </span>
                </div>

                {/* Info Text */}
                <div className="lg:col-span-5 space-y-3">
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">
                    Gelişim ve Taktik Bilinç
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Saha içi pozisyon bilgisi, grup taktiği, pas ve şut varyasyonları ile birlikte bire bir mücadele yeteneğinin geliştirildiği aşama.
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-400 pt-2">
                    <li className="flex items-center gap-1.5"><span className="text-gold">✦</span> Grup Taktik Çalışmaları</li>
                    <li className="flex items-center gap-1.5"><span className="text-gold">✦</span> Dar Alan Maç Senaryoları</li>
                    <li className="flex items-center gap-1.5"><span className="text-gold">✦</span> Hız ve Reaksiyon Gelişimi</li>
                    <li className="flex items-center gap-1.5"><span className="text-gold">✦</span> Haftada 3 Antrenman</li>
                  </ul>
                </div>

                {/* Schedule & Focus */}
                <div className="lg:col-span-3 bg-white/5 rounded-2xl p-5 border border-white/5">
                  <span className="block text-[10px] font-black uppercase text-gold tracking-widest mb-1">ODAK ALANI</span>
                  <span className="block text-base font-bold uppercase mb-3">Taktik Uyum & Karar Verme</span>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-pitch-green h-full w-[90%] rounded-full" />
                  </div>
                  <span className="block text-[10px] font-bold text-slate-400 mt-2 text-right">Taktik Zeka %90</span>
                </div>

                {/* Call Action inside grid */}
                <div className="lg:col-span-2 text-center lg:text-right">
                  <a
                    href="#kayit"
                    className="inline-flex items-center justify-center w-full lg:w-auto px-6 py-3.5 bg-gold hover:bg-gold-hover text-[#0F172A] font-extrabold text-sm uppercase rounded-xl transition-all duration-300 group-hover:scale-105 shadow-md"
                  >
                    Detayları Seç
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Kayıt ve Başvuru Formu - Interactive Section with Client Success State */}
      <section id="kayit" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="bg-white border border-[#0F172A]/10 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left side info (Navy background) */}
            <div className="lg:col-span-5 bg-[#0F172A] text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
              {/* Graphic background lines */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#16A34A]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <span className="text-gold text-xs font-black uppercase tracking-widest">Kayıt Başvurusu</span>
                <h3 className="text-3xl font-black uppercase tracking-tight leading-none text-white">
                  Akademimize <br />
                  <span className="text-pitch-green">İlk Adımı Atın</span>
                </h3>
                <p className="text-slate-300 text-sm font-medium leading-relaxed">
                  Ön kayıt formunu doldurduktan sonra, koordinatör ekibimiz sizi arayarak sporcumuzun doğum yılına uygun ücretsiz deneme antrenmanı günü ve saati için randevu oluşturacaktır.
                </p>

                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#16A34A]/20 flex items-center justify-center text-pitch-green font-bold shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-sm">Ön Kayıt Formunu Gönderin</h4>
                      <p className="text-xs text-slate-400">Öğrenci ve veli bilgilerini eksiksiz girin.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold font-bold shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-sm">Ücretsiz Deneme İdmanına Gelin</h4>
                      <p className="text-xs text-slate-400">Teknik ekibimiz sporcuyu sahada analiz etsin.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white font-bold shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-sm">Akademi Grubuna Katılın</h4>
                      <p className="text-xs text-slate-400">Kendi yaş ve performans seviyesine uygun takımla başlayın.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-12 text-xs font-bold text-slate-400 z-10 leading-normal">
                📞 Detaylı bilgi ve kayıt için bizimle iletişime geçebilirsiniz. <br />
                <strong className="text-white text-sm mt-1 inline-block">+90 (212) 555 45 45</strong>
              </div>
            </div>

            {/* Right side form (Interactive client component part) */}
            <div className="lg:col-span-7 p-8 md:p-12 bg-white flex flex-col justify-center">
              
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#0F172A] uppercase">Akademi Ön Başvuru Formu</h3>
                    <p className="text-[#0F172A]/60 text-xs font-bold mt-1">Lütfen tüm bilgileri eksiksiz doldurunuz.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Student Name */}
                    <div className="space-y-2">
                      <label htmlFor="studentName" className="block text-xs font-black uppercase text-[#0F172A]/85">
                        Öğrenci Adı Soyadı
                      </label>
                      <input
                        type="text"
                        id="studentName"
                        name="studentName"
                        required
                        value={formData.studentName}
                        onChange={handleInputChange}
                        placeholder="Örn: Ahmet Can Yılmaz"
                        className="w-full px-4 py-3 rounded-xl border border-[#0F172A]/10 focus:border-pitch-green focus:ring-2 focus:ring-pitch-green/20 outline-none transition-all font-semibold placeholder:text-slate-400"
                      />
                    </div>

                    {/* Birth Year */}
                    <div className="space-y-2">
                      <label htmlFor="birthYear" className="block text-xs font-black uppercase text-[#0F172A]/85">
                        Öğrenci Doğum Yılı
                      </label>
                      <input
                        type="number"
                        id="birthYear"
                        name="birthYear"
                        required
                        min="2012"
                        max="2019"
                        value={formData.birthYear}
                        onChange={handleInputChange}
                        placeholder="Örn: 2014"
                        className="w-full px-4 py-3 rounded-xl border border-[#0F172A]/10 focus:border-pitch-green focus:ring-2 focus:ring-pitch-green/20 outline-none transition-all font-semibold placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Parent Phone */}
                    <div className="space-y-2">
                      <label htmlFor="parentPhone" className="block text-xs font-black uppercase text-[#0F172A]/85">
                        Veli Telefon Numarası
                      </label>
                      <input
                        type="tel"
                        id="parentPhone"
                        name="parentPhone"
                        required
                        value={formData.parentPhone}
                        onChange={handleInputChange}
                        placeholder="Örn: 0555 123 45 67"
                        className="w-full px-4 py-3 rounded-xl border border-[#0F172A]/10 focus:border-pitch-green focus:ring-2 focus:ring-pitch-green/20 outline-none transition-all font-semibold placeholder:text-slate-400"
                      />
                    </div>

                    {/* Position / Preference */}
                    <div className="space-y-2">
                      <label htmlFor="position" className="block text-xs font-black uppercase text-[#0F172A]/85">
                        Oynamak İstediği Pozisyon
                      </label>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#0F172A]/10 focus:border-pitch-green focus:ring-2 focus:ring-pitch-green/20 outline-none bg-white transition-all font-semibold"
                      >
                        <option value="Kaleci">Kaleci</option>
                        <option value="Defans">Defans</option>
                        <option value="Orta Saha">Orta Saha</option>
                        <option value="Forvet">Forvet</option>
                        <option value="Kararsız">Fark Etmez / Kararsız</option>
                      </select>
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div className="space-y-2">
                    <label className="block text-xs font-black uppercase text-[#0F172A]/85">
                      Daha Önceki Futbol Deneyimi
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {["Lisanssız / Başlangıç", "Okul Takımı Deneyimli", "Kulüp Altyapı Lisanslı"].map((level) => (
                        <label
                          key={level}
                          className={`flex items-center justify-center p-3 border rounded-xl cursor-pointer text-xs font-bold transition-all ${
                            formData.experience === level
                              ? "bg-[#16A34A]/10 border-pitch-green text-pitch-green"
                              : "border-slate-200 text-[#0F172A]/70 hover:bg-slate-50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="experience"
                            value={level}
                            checked={formData.experience === level}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          {level}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Kvkk approval placeholder */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      required
                      id="kvkk"
                      className="mt-1 rounded text-pitch-green focus:ring-pitch-green"
                    />
                    <label htmlFor="kvkk" className="text-xs text-[#0F172A]/60 font-semibold leading-tight cursor-pointer">
                      BilgeGenç Futbol Okulu KVKK Aydınlatma Metnini okudum, kişisel bilgilerimin deneme antrenmanı organizasyonu için işlenmesini onaylıyorum.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4.5 bg-pitch-green hover:bg-pitch-green-hover text-white font-black text-sm uppercase rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    <span>Kayıt Başvurusunu Tamamla</span>
                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l7-7-7-7M5 12h14" />
                    </svg>
                  </button>
                </form>
              ) : (
                /* Success State Block */
                <div className="text-center py-12 px-6 bg-[#16A34A]/5 border-2 border-dashed border-[#16A34A]/30 rounded-3xl space-y-6">
                  
                  <div className="w-20 h-20 bg-pitch-green text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-[#0F172A] uppercase">Başvurunuz Alındı!</h3>
                    <p className="text-sm text-[#0F172A]/80 font-bold">
                      Tebrikler <span className="text-pitch-green">{formData.studentName}</span>, kaydınız başarıyla sisteme aktarıldı.
                    </p>
                  </div>

                  <p className="text-xs text-[#0F172A]/70 max-w-md mx-auto leading-relaxed">
                    Veli telefon numaranız olan <strong className="text-navy">{formData.parentPhone}</strong> üzerinden en geç 24 saat içinde aranarak deneme antrenmanı grubunuz, saatiniz ve gerekli malzemeler hakkında bilgilendirileceksiniz.
                  </p>

                  <div className="bg-white rounded-2xl p-4 border border-[#0F172A]/5 text-left max-w-sm mx-auto space-y-1.5 text-xs font-semibold">
                    <div className="flex justify-between"><span className="text-slate-400">Doğum Yılı:</span> <span className="text-navy font-bold">{formData.birthYear}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Pozisyon:</span> <span className="text-navy font-bold">{formData.position}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Deneyim Seviyesi:</span> <span className="text-navy font-bold">{formData.experience}</span></div>
                  </div>

                  <button
                    onClick={resetForm}
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-black text-pitch-green hover:text-pitch-green-hover bg-pitch-green/10 hover:bg-pitch-green/20 px-5 py-2.5 rounded-xl transition-all"
                  >
                    Yeni Başvuru Yap
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* İletişim / Lokasyon Section */}
      <section id="iletisim" className="py-20 bg-[#0F172A] text-white border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact details */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl font-black uppercase tracking-tight">Akademi İletişim Hattı</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Kayıt ofisimiz haftanın her günü 09:00 - 18:00 saatleri arasında açıktır. Kampüsümüzü ziyaret edip detayları yüz yüze görüşebilirsiniz.
              </p>
              
              <div className="space-y-4 pt-4 text-sm font-semibold">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-gold">📞</div>
                  <span>+90 (212) 555 45 45</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-gold">✉</div>
                  <span>akademi@bilgegenc.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-gold">📍</div>
                  <span>Atatürk Mah. Olimpiyat Cad. No: 12, Başakşehir / İstanbul</span>
                </div>
              </div>
            </div>

            {/* Simulated Map / Location Graphic */}
            <div className="lg:col-span-7 h-80 bg-white/5 rounded-3xl border border-white/10 overflow-hidden relative group">
              <div className="absolute inset-0 bg-slate-900/60 z-10 pointer-events-none" />
              {/* Map background image */}
              <img
                src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop"
                alt="Lokasyon Harita Arka Planı"
                className="w-full h-full object-cover filter grayscale blur-[1px] opacity-40"
              />
              {/* Location Card */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 bg-pitch-green rounded-2xl flex items-center justify-center text-white shadow-lg border-2 border-white">
                  📍
                </div>
                <div className="space-y-1">
                  <h4 className="font-black text-lg uppercase tracking-tight text-white">BilgeGenç Merkez Kampüsü</h4>
                  <p className="text-xs text-slate-300 font-bold">Olimpiyat Stadı Yanı, Doğal Çim Kompleksi</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white hover:bg-gold hover:text-navy text-[#0F172A] font-extrabold text-xs uppercase px-5 py-2.5 rounded-xl transition-all shadow-md"
                >
                  Yol Tarifi Al
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b101c] text-white py-12 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/5 pb-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0F172A] rounded-lg flex items-center justify-center border border-pitch-green shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h5v-2h-3V7z" />
                </svg>
              </div>
              <span className="font-black text-lg uppercase tracking-tight">
                BİLGEGENÇ FUTBOL OKULU
              </span>
            </div>
            
            {/* Mini Footer Menu */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-bold">
              <a href="#hakkimizda" className="hover:text-white transition-colors">Biz Kimiz</a>
              <a href="#egitimler" className="hover:text-white transition-colors">Programlar</a>
              <a href="#kayit" className="hover:text-white transition-colors">Kayıt</a>
              <a href="https://bilgegenc.com" className="hover:text-white transition-colors">KVKK Politikası</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-semibold gap-4">
            <p>© 2026 BilgeGenç Spor Akademileri. Tüm hakları saklıdır.</p>
            <p>Design inspired by Modern Sports Brochures & Premium Football Clubs</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
