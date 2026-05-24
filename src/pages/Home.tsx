import heroHome from "@/assets/hero-home.jpg";
import creditCards from "@/assets/credit-cards.jpg";
import nightOwl from "@/assets/night-owl.jpg";
import southeastAsia from "@/assets/southeast-asia.jpg";
import mobileBooking from "@/assets/mobile-booking.jpg";
import savingsCelebration from "@/assets/savings-celebration.jpg";
import coupon1 from "@/assets/coupon-1.webp";
import coupon2 from "@/assets/coupon-2.webp";
import coupon3 from "@/assets/coupon-3.webp";
import coupon4 from "@/assets/coupon-4.webp";
import coupon5 from "@/assets/coupon-5.webp";
import CopyButton from "@/components/CopyButton";
import CtaButton from "@/components/CtaButton";

const AFFILIATE = "http://app.ac/hqp46L253";

export default function Home() {
  return (
    <>
      {/* Schema.org */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "아고다 쿠폰",
        "description": "5월 아고다 쿠폰 총정리! 국내·일본 아고다 할인코드부터 아고다 할인링크까지 한 번에. 지금 바로 쓸 수 있는 아고다 쿠폰 모음, 5월 숙소 예약 전 할인코드 사용해서 예약하세요. 매월 업데이트되는 최신 할인 정보입니다.",
        "url": "https://agd.couponmonster.co.kr/",
        "publisher": {"@type":"Organization","name":"아고다 쿠폰","url":"https://agd.couponmonster.co.kr"},
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": [
            {"@type":"ListItem","position":1,"name":"전 세계 숙소 5% 할인코드","url":"https://agd.couponmonster.co.kr/"},
            {"@type":"ListItem","position":2,"name":"인기 여행지 8% 할인코드","url":"https://agd.couponmonster.co.kr/"},
            {"@type":"ListItem","position":3,"name":"신규 회원 7% 할인코드","url":"https://agd.couponmonster.co.kr/"}
          ]
        }
      })}} />

      {/* Hero */}
      <section className="hero-section">
        <img src={heroHome} alt="아고다 할인코드 메인 배너 - 열대 리조트 풍경" width={1920} height={800} className="w-full h-[400px] md:h-[500px] object-cover" />
        <div className="hero-overlay absolute inset-0 flex items-center">
          <div className="container">
            <h1 className="text-3xl md:text-5xl font-black mb-4" style={{color:'white'}}>
              2026년 5월<br />아고다 할인코드 총정리
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-xl" style={{color:'rgba(255,255,255,0.9)'}}>
              최대 15% 할인! 카드사 프로모션부터 정기 할인까지 — 아고다 할인의 모든 것
            </p>
            <CtaButton text="지금 할인 적용하기 →" />
          </div>
        </div>
      </section>

      <div className="container py-12 space-y-16">

        {/* 기본 할인코드 */}
        <section>
          <h2 className="section-title">2026년 5월 아고다 할인코드</h2>
          <p className="text-sm text-muted-foreground mt-8 mb-6">⚠️ 아래 할인코드는 2026년 5월 기준이며, 매월 말~익월 초에 갱신됩니다.</p>

          <div className="grid gap-5">
            {/* Coupon 1 */}
            <div className="coupon-card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <img src={coupon1} alt="아고다 전 세계 숙소 5% 할인코드 쿠폰 이미지" loading="lazy" width={1254} height={1254} className="w-full sm:w-44 md:w-52 aspect-square object-cover rounded-xl shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="badge-discount">5% 할인</span>
                    <span className="text-xs text-muted-foreground">카드 무관 · 누구나</span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">① 전 세계 숙소 5% 할인코드</h3>
                  <p className="text-sm text-muted-foreground">전 세계 모든 지역 숙소 5% 즉시 할인 · 최대 $30 할인</p>
                  <div className="flex flex-wrap gap-4 mt-3 text-xs text-muted-foreground">
                    <span>📅 예약: ~4/30</span>
                    <span>🏨 투숙: ~2027.3.31</span>
                    <span>💻 PC/모바일 웹</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">💡 12만원 숙소 기준 약 6,000원 할인 / $600 이상 예약 시 5% 고정 코드가 유리</p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="cta-button text-xs whitespace-nowrap">할인 적용하기 →</a>
                </div>
              </div>
            </div>

            {/* Coupon 2 */}
            <div className="coupon-card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <img src={coupon2} alt="아고다 인기 여행지 4개국 전용 8% 할인코드 쿠폰 이미지" loading="lazy" width={1254} height={1254} className="w-full sm:w-44 md:w-52 aspect-square object-cover rounded-xl shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="badge-discount">8% 할인</span>
                    <span className="text-xs text-muted-foreground">4개국 전용</span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">② 인기 여행지 4개국 전용 8% 할인코드</h3>
                  <p className="text-sm text-muted-foreground">태국 🇹🇭 · 인도네시아 🇮🇩 · 이탈리아 🇮🇹 · 말레이시아 🇲🇾</p>
                  <div className="flex flex-wrap gap-4 mt-3 text-xs text-muted-foreground">
                    <span>📅 예약: ~4/30</span>
                    <span>💻 PC/모바일 웹 (앱 불가)</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">💡 일반 5% 코드보다 할인율이 높으므로 해당 국가 여행 시 반드시 우선 적용</p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="cta-button text-xs whitespace-nowrap">할인 적용하기 →</a>
                </div>
              </div>
            </div>

            {/* Coupon 3 */}
            <div className="coupon-card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <img src={coupon3} alt="아고다 신규 회원 전용 7% 할인코드 쿠폰 이미지" loading="lazy" width={1254} height={1254} className="w-full sm:w-44 md:w-52 aspect-square object-cover rounded-xl shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="badge-discount">7% 할인</span>
                    <span className="badge-info">신규 회원 전용</span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">③ 신규 회원 전용 7% 할인코드</h3>
                  <p className="text-sm text-muted-foreground">홍콩 🇭🇰 · 스페인 🇪🇸 · 독일 🇩🇪 · 라오스 🇱🇦</p>
                  <div className="flex flex-wrap gap-4 mt-3 text-xs text-muted-foreground">
                    <span>📅 예약: ~4/30</span>
                    <span>👤 첫 예약 고객 전용</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">💡 가입일과 무관하게 아고다에서 "첫 번째 예약"인지 여부가 기준</p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="cta-button text-xs whitespace-nowrap">신규 할인 적용 →</a>
                </div>
              </div>
            </div>

            {/* Coupon 4 */}
            <div className="coupon-card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <img src={coupon4} alt="아고다 국내 숙소 전용 5% 할인코드 쿠폰 이미지" loading="lazy" width={1254} height={1254} className="w-full sm:w-44 md:w-52 aspect-square object-cover rounded-xl shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="badge-discount">5% 할인</span>
                    <span className="text-xs text-muted-foreground">국내 숙소</span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">④ 국내 숙소 전용 5% 할인코드</h3>
                  <p className="text-sm text-muted-foreground">한국 내 모든 숙소 예약 시 5% 할인</p>
                  <div className="flex flex-wrap gap-4 mt-3 text-xs text-muted-foreground">
                    <span>📅 예약: ~4/30</span>
                    <span>💻 PC/모바일 웹</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="cta-button text-xs whitespace-nowrap">할인 적용하기 →</a>
                </div>
              </div>
            </div>

            {/* Coupon 5 */}
            <div className="coupon-card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <img src={coupon5} alt="아고다 인플루언서 최대 12% 할인코드 쿠폰 이미지" loading="lazy" width={1254} height={1254} className="w-full sm:w-44 md:w-52 aspect-square object-cover rounded-xl shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="badge-discount">최대 12%</span>
                    <span className="badge-warning">인플루언서</span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">⑤ 인플루언서 할인코드 (최대 12%)</h3>
                  <p className="text-sm text-muted-foreground">기존 할인에 중복 적용 가능 · 신규+기존 회원 모두</p>
                  <div className="flex flex-wrap gap-4 mt-3 text-xs text-muted-foreground">
                    <span>📅 예약: ~4/30</span>
                    <span>💻 PC/모바일 웹만</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="cta-button text-xs whitespace-nowrap">할인 적용하기 →</a>
                </div>
              </div>
            </div>

            {/* Coupon 6 */}
            <div className="coupon-card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="badge-discount">최대 15%</span>
                    <span className="badge-success">공식</span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">⑥ 아고다 공식 할인코드 (최대 15%)</h3>
                  <p className="text-sm text-muted-foreground">아고다 공식 발급 프로모션 코드 · 일부 지정 호텔에서만 적용</p>
                  <div className="flex flex-wrap gap-4 mt-3 text-xs text-muted-foreground">
                    <span>📅 예약: ~4/30</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="cta-button text-xs whitespace-nowrap">할인 적용하기 →</a>
                </div>
              </div>
            </div>

            {/* Coupon 7 */}
            <div className="coupon-card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="badge-discount">최대 8%</span>
                    <span className="badge-info">앱 전용</span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">⑦ 아고다 앱 전용 할인코드 (최대 8%)</h3>
                  <p className="text-sm text-muted-foreground">아고다 앱(APP)에서만 사용 가능 · 기간 제한 없음 (상시)</p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="cta-button text-xs whitespace-nowrap">앱에서 확인 →</a>
                </div>
              </div>
            </div>
          </div>

          {/* 할인코드 선택 가이드 */}
          <div className="info-card mt-8">
            <h3 className="text-lg font-bold mb-4">💡 할인코드 선택 가이드 (예약 금액별)</h3>
            <img src={savingsCelebration} alt="아고다 할인 절약 일러스트" width={960} height={640} loading="lazy" className="w-full h-48 object-cover rounded-lg mb-4" />
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong className="text-foreground">$600 미만 예약:</strong> 12% 또는 10% 할인코드가 가장 유리 (최대 할인 $30 한도 내)</li>
              <li><strong className="text-foreground">$600 이상 예약:</strong> 5% 할인코드가 유리 (한도 제한이 더 높거나 없음)</li>
              <li><strong className="text-foreground">해당 4개국 여행:</strong> 8% 지역 전용 코드가 항상 최선</li>
              <li><strong className="text-foreground">아고다 첫 예약:</strong> 7% 신규 코드 우선 적용 후 비교</li>
            </ul>
          </div>
        </section>

        {/* 카드사 제휴 할인 */}
        <section>
          <h2 className="section-title">2026년 5월 카드사 제휴 할인 프로모션</h2>
          <p className="text-sm text-muted-foreground mt-8 mb-6">카드사 프로모션은 별도의 할인코드 입력 없이, 카드사 전용 페이지에서 해당 카드로 결제하면 자동 적용됩니다.</p>
          <img src={creditCards} alt="아고다 카드사 할인 - 한국 신용카드" width={960} height={640} loading="lazy" className="w-full h-48 md:h-64 object-cover rounded-xl mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "삼성카드", rate: "7~10%", detail: "전 지역 7% / 이탈리아·말레이시아·인도네시아 10%", period: "~2026.05.31", note: "LINK 혜택 또는 전용 페이지" },
              { name: "신한카드", rate: "7~10%", detail: "전 지역 7% / 말레이시아·인도네시아·이탈리아 10%", period: "~2026.06.30", note: "선착순 자동 적용" },
              { name: "우리카드", rate: "7%+", detail: "전 지역 최소 7% 이상 할인", period: "~2026.06.30", note: "핀번호 입력 시 자동 적용" },
              { name: "하나카드", rate: "7%+", detail: "전 지역 최소 7% 이상 할인", period: "~2026.06.30", note: "선착순 마감" },
              { name: "현대카드", rate: "7~10%", detail: "전 지역 최소 7% / 최대 10%", period: "~2026.06.30", note: "" },
              { name: "KB국민카드", rate: "7~10%", detail: "전 지역 7% / 특정 지역 10%", period: "확인 필요", note: "" },
              { name: "NH농협카드", rate: "7~10%", detail: "전 지역 7% / 말레이시아·스페인·이탈리아 10%", period: "~2026.06.30", note: "체크카드도 가능!" },
              { name: "BC카드", rate: "7~10%", detail: "전 지역 7% / 이탈리아·말레이시아·인도네시아 10%", period: "확인 필요", note: "" },
              { name: "토스뱅크", rate: "7~10%", detail: "전 세계 7% / 한국·태국·베트남 10%", period: "~2028.08.31", note: "해외결제 수수료 무료!" },
              { name: "마스터카드", rate: "8~15%", detail: "월드엘리트 15% / 월드 10% / 기타 8%", period: "분기별 갱신", note: "등급별 차등" },
              { name: "Visa카드", rate: "6%", detail: "전 세계 호텔 6%", period: "확인 필요", note: "한국 발급 Visa만" },
              { name: "유니온페이", rate: "15%", detail: "코드: UPI15 입력", period: "확인 필요", note: "카드당 5회, 최대 $100 할인" },
            ].map((card) => (
              <div key={card.name} className="info-card">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">🏦 {card.name}</h3>
                  <span className="badge-discount">{card.rate}</span>
                </div>
                <p className="text-sm text-muted-foreground">{card.detail}</p>
                <div className="flex flex-wrap gap-3 mt-3 text-xs text-muted-foreground">
                  <span>📅 {card.period}</span>
                  {card.note && <span className="text-info font-medium">ℹ️ {card.note}</span>}
                </div>
                <a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="cta-button text-xs mt-3 w-full text-center block">
                  {card.name} 할인 적용하기 →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 간편결제 */}
        <section>
          <h2 className="section-title">간편결제 할인</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="info-card">
              <h3 className="font-bold mb-2">💳 카카오페이</h3>
              <span className="badge-discount mb-2">11% 할인</span>
              <p className="text-sm text-muted-foreground mt-2">전 세계 숙소 11% 할인 · 최대 100 USD · 아고다 결제 시 카카오페이 선택</p>
              <CtaButton className="mt-3 w-full text-center text-xs" text="카카오페이 할인 적용 →" />
            </div>
            <div className="info-card">
              <h3 className="font-bold mb-2">💳 네이버페이 / PAYCO</h3>
              <span className="badge-info mb-2">수시 확인</span>
              <p className="text-sm text-muted-foreground mt-2">결제 수단으로 사용 가능 · 별도 추가 할인은 프로모션에 따라 상이</p>
            </div>
          </div>
        </section>

        {/* 정기 프로모션 */}
        <section>
          <h2 className="section-title">정기 프로모션 (매월/매주/매일 반복)</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="info-card">
              <img src={nightOwl} alt="아고다 Night Owl Sale 심야 할인" width={960} height={640} loading="lazy" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="font-bold">🦉 Night Owl Sale (심야 할인)</h3>
              <span className="badge-discount mt-2">최대 20% 추가</span>
              <p className="text-sm text-muted-foreground mt-2">매일 오후 8시 ~ 자정 (숙소 현지 시각) · 일본, 태국, 말레이시아, 인도네시아, 한국 등 11개국</p>
            </div>
            <div className="info-card">
              <h3 className="font-bold">💰 Payday Sale (월급날 세일)</h3>
              <span className="badge-discount mt-2">최대 20% 추가</span>
              <p className="text-sm text-muted-foreground mt-2">매월 마지막 5일간 · 전 세계 인기 여행지 호텔 · 기본 할인에 추가 적용</p>
            </div>
            <div className="info-card">
              <h3 className="font-bold">🌙 정오·자정 할인</h3>
              <span className="badge-discount mt-2">최대 30%</span>
              <p className="text-sm text-muted-foreground mt-2">매일 12AM~3AM 및 2PM~6PM (현지 시각) · 전 세계 인기 호텔</p>
            </div>
            <div className="info-card">
              <h3 className="font-bold">💎 깜짝 할인 수요 특가</h3>
              <span className="badge-discount mt-2">초특가</span>
              <p className="text-sm text-muted-foreground mt-2">매주 수요일 24시간 · 인도, 터키, 이탈리아, 두바이, 몰디브 등</p>
            </div>
            <div className="info-card">
              <h3 className="font-bold">📅 주말 예약 할인</h3>
              <span className="badge-discount mt-2">최대 25%</span>
              <p className="text-sm text-muted-foreground mt-2">토·일요일에 예약 + 90일 이내 체크인 시 적용</p>
            </div>
            <div className="info-card">
              <h3 className="font-bold">🎉 더블데이 세일 (시즌성)</h3>
              <span className="badge-discount mt-2">15% 추가</span>
              <p className="text-sm text-muted-foreground mt-2">2026년 5월 31일까지 · 봄 시즌 한정 프로모션</p>
            </div>
          </div>
        </section>

        {/* 항공권·액티비티 */}
        <section>
          <h2 className="section-title">항공권 · 액티비티 할인</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="info-card">
              <h3 className="font-bold">✈️ 항공권 할인</h3>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• 모든 항공권 5% 할인 (매일 상시)</li>
                <li>• 첫 항공권 예약 시 최대 8% 할인</li>
                <li>• 티웨이, 베트남에어, 진에어 등 수시 제휴</li>
              </ul>
              <CtaButton className="mt-3 text-xs" text="항공권 할인 확인 →" />
            </div>
            <div className="info-card">
              <h3 className="font-bold">🎯 액티비티 할인</h3>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• 글로벌 액티비티 최대 15% 할인</li>
                <li>• 아고다 메인 → 즐길거리 프로모션 배너</li>
              </ul>
              <CtaButton className="mt-3 text-xs" text="액티비티 할인 확인 →" />
            </div>
          </div>
        </section>

        {/* 시크릿딜 & 아고다 캐시 */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="info-card">
            <h2 className="text-xl font-bold mb-3">🔒 시크릿딜 (Secret Deal)</h2>
            <img src={mobileBooking} alt="아고다 시크릿딜 모바일 예약" width={960} height={640} loading="lazy" className="w-full h-40 object-cover rounded-lg mb-3" />
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• 별도 코드 없이 특정 숙소 저렴하게 예약</li>
              <li>• "시크릿딜" 배지가 표시된 숙소</li>
              <li>• VIP 회원 등급 보유자 또는 특정 기간에만 공개</li>
              <li>• 아고다 앱에서 확인 가능한 경우가 많음</li>
              <li>• 원래 가격 대비 <strong className="text-foreground">최대 50% 이상</strong> 할인 가능</li>
            </ul>
          </div>
          <div className="info-card">
            <h2 className="text-xl font-bold mb-3">💰 아고다 캐시 (Agoda Cash)</h2>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• 아고다 이용 시마다 적립되는 적립금</li>
              <li>• 예약 완료 + 체크아웃 후 자동 적립</li>
              <li>• 다음 예약 시 결제 단계에서 차감</li>
              <li>• 일부 숙소 "캐시백 리워드" 10%+ 제공</li>
              <li>• 캐시백 → 재예약 사용 = 선순환 구조</li>
            </ul>
            <CtaButton className="mt-4 text-xs" text="아고다 캐시 적립하기 →" />
          </div>
        </section>

        {/* 아고다 소개 */}
        <section>
          <h2 className="section-title">아고다(Agoda)란?</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Agoda.com은 세계 최대 온라인 여행사 그룹인 <strong className="text-foreground">Booking Holdings</strong> 소속 플랫폼입니다. 유럽에는 Booking.com, 아시아에는 Agoda가 대표 브랜드로 자리잡고 있습니다.</p>
              <p>싱가포르, 방콕, 서울, 도쿄, 타이베이 등 아시아 주요 도시에 지사를 운영하며, 한국인이 선호하는 여행지(동남아, 일본 등)의 숙소를 가장 많이 보유하고 있습니다.</p>
              <p>호텔, 리조트, 아파트먼트, 게스트하우스는 물론 항공권, 액티비티까지 예약 가능합니다.</p>
              <h3 className="text-foreground font-semibold text-lg mt-4">결제 특징</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>국내 거의 모든 신용카드 지원: 신한, 현대, 하나, 국민, 농협, BC, 롯데, 삼성카드</li>
                <li>간편결제 지원: 카카오페이, 네이버페이, PAYCO</li>
                <li>대형 OTA 중 유일하게 <strong>PayPal 결제</strong> 지원</li>
                <li>선결제(온라인 결제) + 현장 결제 모두 지원</li>
                <li>무료 취소 옵션 제공 (숙소별 정책 상이)</li>
              </ul>
            </div>
            <img src={southeastAsia} alt="아고다가 강한 동남아시아 여행지" width={960} height={640} loading="lazy" className="rounded-xl object-cover w-full h-72 md:h-full" />
          </div>
        </section>

        {/* CTA Banner */}
        <section className="rounded-2xl overflow-hidden relative">
          <div className="hero-overlay p-10 md:p-16 text-center" style={{background: 'linear-gradient(135deg, hsl(0 78% 52%), hsl(25 95% 53%))'}}>
            <h2 className="text-2xl md:text-3xl font-black mb-4" style={{color:'white'}}>지금 바로 최대 15% 할인받으세요!</h2>
            <p className="mb-6 max-w-lg mx-auto" style={{color:'rgba(255,255,255,0.9)'}}>프로모션 전용 링크를 통해 아고다에 접속하면 할인코드가 자동 활성화됩니다.</p>
            <a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 bg-card text-primary hover:scale-105">
              할인 적용하고 예약하기 →
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
