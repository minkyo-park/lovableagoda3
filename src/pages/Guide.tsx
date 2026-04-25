import heroGuide from "@/assets/hero-guide.jpg";
import mobileBooking from "@/assets/mobile-booking.jpg";
import creditCards from "@/assets/credit-cards.jpg";
import savingsCelebration from "@/assets/savings-celebration.jpg";
import southeastAsia from "@/assets/southeast-asia.jpg";
import nightOwl from "@/assets/night-owl.jpg";
import CtaButton from "@/components/CtaButton";

const AFFILIATE = "http://app.ac/hqp46L253";

export default function Guide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org","@type":"HowTo",
        "name":"아고다 쿠폰 사용 방법 가이드",
        "description":"아고다 쿠폰 입력법, 카드 할인 적용법, 중복 할인 조합법, 결제 팁을 상세히 안내합니다.",
        "url":"https://agd.couponmonster.co.kr/guide",
        "step":[
          {"@type":"HowToStep","name":"프로모션 전용 링크로 접속","text":"프로모션 전용 링크를 통해 아고다에 접속합니다."},
          {"@type":"HowToStep","name":"숙소 검색 및 선택","text":"원하는 숙소를 검색하고 날짜, 인원 수, 방 종류를 선택합니다."},
          {"@type":"HowToStep","name":"할인코드 입력","text":"결제 페이지에서 할인코드 입력란에 코드를 입력하고 적용 버튼을 클릭합니다."},
          {"@type":"HowToStep","name":"할인 확인 및 결제","text":"할인된 가격이 반영되었는지 확인 후 결제를 완료합니다."}
        ]
      })}} />

      {/* Hero */}
      <section className="hero-section">
        <img src={heroGuide} alt="아고다 할인코드 사용 방법 가이드" width={1920} height={800} className="w-full h-[300px] md:h-[400px] object-cover" />
        <div className="hero-overlay absolute inset-0 flex items-center">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-black mb-3" style={{color:'white'}}>아고다 할인코드 사용 방법 가이드</h1>
            <p className="text-lg" style={{color:'rgba(255,255,255,0.9)'}}>할인코드 입력법 · 카드 할인 적용법 · 중복 할인 조합법 · 결제 팁</p>
          </div>
        </div>
      </section>

      <div className="container py-12 space-y-16">
        {/* 2-1 할인코드 입력 방법 */}
        <section>
          <h2 className="section-title">아고다 할인코드 입력 방법 (Step-by-Step)</h2>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">💻 PC 웹 버전</h3>
              <img src={mobileBooking} alt="아고다 PC 할인코드 입력 화면" width={960} height={640} loading="lazy" className="w-full h-48 object-cover rounded-xl mb-4" />
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3"><span className="badge-discount shrink-0">1</span><span>프로모션 전용 링크를 통해 아고다에 접속 (일반 검색으로 접속 시 코드 적용 불가)</span></li>
                <li className="flex gap-3"><span className="badge-discount shrink-0">2</span><span>원하는 숙소를 검색하고 날짜, 인원 수, 방 종류 선택</span></li>
                <li className="flex gap-3"><span className="badge-discount shrink-0">3</span><span>원하는 객실을 선택 → "지금 예약하기" 클릭 → 결제 페이지로 이동</span></li>
                <li className="flex gap-3"><span className="badge-discount shrink-0">4</span><span>결제 페이지 오른쪽 예약 정보 요약란 아래에 <strong>[할인 코드를 입력하세요]</strong> 입력란 확인</span></li>
                <li className="flex gap-3"><span className="badge-discount shrink-0">5</span><span>할인코드 입력 → <strong>적용</strong> 버튼 클릭</span></li>
                <li className="flex gap-3"><span className="badge-discount shrink-0">6</span><span>할인된 가격이 즉시 반영되는지 확인 (예: 12만원 → 10만 8천원)</span></li>
                <li className="flex gap-3"><span className="badge-discount shrink-0">7</span><span>결제 수단 선택 후 예약 완료</span></li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">📱 모바일 웹 / 앱 버전</h3>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3"><span className="badge-info shrink-0">1</span><span>프로모션 링크를 통해 아고다 접속 (모바일 웹)</span></li>
                <li className="flex gap-3"><span className="badge-info shrink-0">2</span><span>숙소 검색 → 날짜/인원 설정 → 객실 선택 → 결제 단계 이동</span></li>
                <li className="flex gap-3"><span className="badge-info shrink-0">3</span><span>결제 단계에서 하단으로 스크롤</span></li>
                <li className="flex gap-3"><span className="badge-info shrink-0">4</span><span><strong>"할인 쿠폰/프로모션 코드 입력"</strong> 또는 "코드가 있으신가요?" 문구 클릭</span></li>
                <li className="flex gap-3"><span className="badge-info shrink-0">5</span><span>코드 입력 → 할인 반영 확인 → 결제 완료</span></li>
              </ol>

              <div className="mt-6 p-4 rounded-xl border-2 border-dashed" style={{borderColor:'hsl(38 92% 50%)', background:'hsl(38 92% 97%)'}}>
                <h4 className="font-bold text-sm mb-2">⚠️ 필수 유의사항</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• <strong>대소문자 구분:</strong> 복사·붙여넣기(Ctrl+V) 사용 권장</li>
                  <li>• <strong>프로모션 전용 링크 경유 필수:</strong> 일반 페이지에서 "유효하지 않은 코드" 표시 가능</li>
                  <li>• <strong>한 번에 하나만:</strong> 할인코드는 1개만 적용 가능</li>
                  <li>• <strong>결제 전 단계에서만:</strong> 결제 완료 후 소급 적용 불가</li>
                  <li>• <strong>쿠폰 적용 가능 숙소 확인:</strong> "쿠폰 적용 가능" 배너 확인</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <CtaButton text="프로모션 전용 링크로 접속하기 →" />
          </div>
        </section>

        {/* 2-2 카드사 할인 적용 */}
        <section>
          <h2 className="section-title">카드사 할인 적용 방법</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div>
              <img src={creditCards} alt="아고다 카드사 할인 적용" width={960} height={640} loading="lazy" className="w-full h-56 object-cover rounded-xl" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">적용 절차</h3>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3"><span className="badge-success shrink-0">1</span><span>아고다 사이트에서 해당 카드사 <strong>전용 프로모션 페이지</strong>로 이동</span></li>
                <li className="flex gap-3"><span className="badge-success shrink-0">2</span><span>전용 페이지에서 원하는 숙소 및 날짜 선택</span></li>
                <li className="flex gap-3"><span className="badge-success shrink-0">3</span><span>결제 수단으로 해당 카드 선택 → 할인 자동 적용 (코드 입력 불필요)</span></li>
                <li className="flex gap-3"><span className="badge-success shrink-0">4</span><span>카드 번호 입력 시 즉시 할인 혜택 표시 확인 후 결제</span></li>
              </ol>
              <div className="mt-4 p-4 rounded-xl bg-muted">
                <h4 className="font-bold text-sm mb-2">핵심 포인트</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• <strong>전용 페이지 경유 필수</strong>: 일반 포털 검색 '광고' 링크로 접속하면 할인 미적용</li>
                  <li>• <strong>선결제 전용</strong>: "숙소에서 결제" 옵션은 카드 할인 제외</li>
                  <li>• <strong>예산 소진 시 조기 마감</strong>: 월초 예약 추천</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2-3 중복 할인 조합 */}
        <section>
          <h2 className="section-title">중복 할인 조합 방법 (할인 극대화 전략)</h2>
          <div className="mt-10">
            <img src={savingsCelebration} alt="아고다 중복 할인 절약" width={960} height={640} loading="lazy" className="w-full h-48 object-cover rounded-xl mb-6" />

            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>할인 요소</th>
                    <th>적용 방식</th>
                    <th>할인율 예시</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>① VIP 등급 할인</td><td>자동 적용</td><td><span className="badge-discount">최대 25%</span></td></tr>
                  <tr><td>② 할인코드</td><td>코드 입력</td><td><span className="badge-discount">5~12%</span></td></tr>
                  <tr><td>③ 카드사 제휴 할인</td><td>전용 페이지 + 해당 카드</td><td><span className="badge-discount">7~15%</span></td></tr>
                  <tr><td>④ 아고다 캐시</td><td>적립금 차감</td><td>보유 캐시만큼</td></tr>
                </tbody>
              </table>
            </div>

            <div className="info-card mt-6">
              <h3 className="font-bold mb-3">📊 실제 할인 조합 사례</h3>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr><th>단계</th><th>적용 할인</th><th>할인 후 금액</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>원래 가격</td><td>—</td><td className="font-bold">600,000원</td></tr>
                    <tr><td>① VIP 골드 (-18%)</td><td>-108,000원</td><td>492,000원</td></tr>
                    <tr><td>② 5% 할인코드</td><td>-24,600원</td><td>467,400원</td></tr>
                    <tr><td>③ 신한카드 7%</td><td>-32,718원</td><td>434,682원</td></tr>
                    <tr><td>④ 아고다 캐시 1만원</td><td>-10,000원</td><td className="font-bold text-primary">424,682원</td></tr>
                    <tr className="bg-muted"><td colSpan={2} className="font-bold">총 할인율: 약 29%</td><td className="font-bold text-primary">절감액: 약 175,000원</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-3">⚠️ 모든 할인이 항상 중복 가능한 것은 아닙니다. 결제 전 최종 가격을 반드시 확인하세요.</p>
            </div>
          </div>
        </section>

        {/* 2-4 결제 수수료 절약 */}
        <section>
          <h2 className="section-title">결제 시 수수료 절약 팁</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="info-card border-l-4" style={{borderLeftColor:'hsl(0 84% 60%)'}}>
              <h3 className="font-bold mb-2">❌ 원화(KRW) 결제 시 이중환전 수수료 문제</h3>
              <p className="text-sm text-muted-foreground">아고다에서 KRW(원화)로 결제하면 <strong>아고다 자체 환전 수수료 3~8%</strong>가 추가 발생합니다. 이중환전(DCC) 수수료로 실제 결제 금액이 표시 가격보다 3~5% 비쌀 수 있습니다.</p>
            </div>
            <div className="info-card border-l-4" style={{borderLeftColor:'hsl(142 71% 45%)'}}>
              <h3 className="font-bold mb-2">✅ 해결 방법</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>1. <strong>결제 통화를 USD 또는 현지 통화로 변경</strong> — 아고다 상단 메뉴 → [통화] 설정</li>
                <li>2. <strong>'해외 원화 결제 차단 서비스' 신청</strong> — 카드사 앱 → 해외결제 설정 → DCC 차단 활성화</li>
                <li>3. <strong>토스뱅크 체크카드</strong> — 해외결제 수수료 무료 + 아고다 7~10% 할인 (2028년까지)</li>
              </ul>
            </div>
          </div>

          <div className="info-card mt-6">
            <h3 className="font-bold mb-3">💡 할부 결제 방법</h3>
            <p className="text-sm text-muted-foreground">신용카드 정보 입력 후 결제 단계에서 할부 개월 수 선택 가능합니다. 네이버페이·카카오페이 등 간편결제도 동일하게 할부 설정 가능합니다.</p>
          </div>
        </section>

        {/* 2-5 예약기간 vs 숙박기간 */}
        <section>
          <h2 className="section-title">예약 기간 vs 숙박 기간 차이 이해</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="info-card">
              <h3 className="font-bold mb-2">📅 예약 기간 (프로모션 기간)</h3>
              <p className="text-sm text-muted-foreground">할인코드를 입력해 호텔을 실제 예약할 수 있는 기간입니다.</p>
              <p className="text-xs text-muted-foreground mt-2">예: 2026년 5월 1일 ~ 5월 31일</p>
            </div>
            <div className="info-card">
              <h3 className="font-bold mb-2">🏨 숙박 기간</h3>
              <p className="text-sm text-muted-foreground">예약한 호텔에 실제로 체크인하여 머무를 수 있는 날짜 범위입니다.</p>
              <p className="text-xs text-muted-foreground mt-2">예: 2026년 5월 1일 ~ 12월 31일</p>
            </div>
          </div>
          <div className="info-card mt-4">
            <h4 className="font-bold text-sm mb-2">💡 실전 팁</h4>
            <p className="text-sm text-muted-foreground">4월 중에 예약을 완료해야 하며, 숙박은 5~12월 사이에 가능합니다. 5월 1일 이후에는 할인코드를 사용한 예약 자체가 불가능합니다.</p>
          </div>
        </section>

        {/* 추가 독자적 콘텐츠: 결제 통화별 실제 비용 비교 */}
        <section>
          <h2 className="section-title">📊 결제 통화별 실제 비용 비교 (독자적 분석)</h2>
          <div className="mt-10">
            <p className="text-sm text-muted-foreground mb-4">동일한 $100(약 135,000원) 호텔 예약 시, 결제 통화에 따른 실제 청구 금액 차이를 시뮬레이션했습니다.</p>
            <div className="table-responsive">
              <table>
                <thead>
                  <tr><th>결제 통화</th><th>표시 금액</th><th>아고다 환전 수수료</th><th>카드사 해외결제 수수료</th><th>실제 청구 예상</th><th>차이</th></tr>
                </thead>
                <tbody>
                  <tr><td>KRW (원화)</td><td>135,000원</td><td>+3~8% (+4,050~10,800원)</td><td>0원</td><td className="font-bold text-destructive">139,050~145,800원</td><td className="text-destructive">+4,050~10,800원</td></tr>
                  <tr><td>USD (달러)</td><td>$100</td><td>0원</td><td>+1~1.5% (+1,350~2,025원)</td><td className="font-bold text-success">136,350~137,025원</td><td className="text-success">+1,350~2,025원</td></tr>
                  <tr className="bg-muted"><td>USD + 토스뱅크</td><td>$100</td><td>0원</td><td>0원 (무료)</td><td className="font-bold text-primary">~135,000원</td><td className="font-bold text-primary">0원!</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3">※ 환율 1,350원/USD 기준 시뮬레이션. 실제 금액은 환율 변동에 따라 달라질 수 있습니다.</p>
          </div>
        </section>

        <section className="text-center">
          <img src={southeastAsia} alt="아고다 할인으로 떠나는 동남아 여행" width={960} height={640} loading="lazy" className="w-full h-56 object-cover rounded-2xl mb-6" />
          <CtaButton text="지금 바로 할인 적용하기 →" />
        </section>
      </div>
    </>
  );
}
