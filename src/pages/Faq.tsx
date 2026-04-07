import { useState } from "react";
import heroFaq from "@/assets/hero-faq.jpg";
import mobileBooking from "@/assets/mobile-booking.jpg";
import creditCards from "@/assets/credit-cards.jpg";
import savingsCelebration from "@/assets/savings-celebration.jpg";
import southeastAsia from "@/assets/southeast-asia.jpg";
import nightOwl from "@/assets/night-owl.jpg";
import CtaButton from "@/components/CtaButton";

const AFFILIATE = "http://app.ac/hqp46L253";

function FaqItem({ q, a }: { q: string; a: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <svg className={`w-5 h-5 transition-transform shrink-0 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="faq-answer">{a}</div>}
    </div>
  );
}

export default function Faq() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage",
        "mainEntity":[
          {"@type":"Question","name":"아고다 할인코드가 적용되지 않으면 어떻게 하나요?","acceptedAnswer":{"@type":"Answer","text":"프로모션 전용 링크를 통해 접속해야 합니다. 일반 검색으로 접속하면 코드 입력란이 비활성화될 수 있습니다."}},
          {"@type":"Question","name":"아고다 예약 취소는 어떻게 하나요?","acceptedAnswer":{"@type":"Answer","text":"아고다 앱 또는 웹사이트 → 내 예약 → 해당 예약 선택 → 예약 취소 버튼을 클릭합니다."}},
          {"@type":"Question","name":"아고다 할인코드는 모든 숙소에 적용되나요?","acceptedAnswer":{"@type":"Answer","text":"아닙니다. 일부 숙소, 글로벌 체인 호텔, 이미 높은 할인이 적용된 특가 상품은 제외될 수 있습니다."}},
          {"@type":"Question","name":"아고다 고객센터 전화번호는?","acceptedAnswer":{"@type":"Answer","text":"+82 70 4784 4366 (오전 9시~오후 9시 45분, 매일)"}}
        ]
      })}} />

      <section className="hero-section">
        <img src={heroFaq} alt="아고다 트러블슈팅 FAQ" width={1920} height={800} className="w-full h-[300px] md:h-[400px] object-cover" />
        <div className="hero-overlay absolute inset-0 flex items-center">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-black mb-3" style={{color:'white'}}>트러블슈팅 & FAQ</h1>
            <p className="text-lg" style={{color:'rgba(255,255,255,0.9)'}}>할인코드 문제 해결 · 예약/취소/환불 · 고객센터 안내</p>
          </div>
        </div>
      </section>

      <div className="container py-12 space-y-16">
        {/* 4-1 할인코드 문제 해결 */}
        <section>
          <h2 className="section-title">할인코드가 적용되지 않을 때 해결 방법</h2>

          <div className="mt-10 space-y-6">
            <div className="info-card border-l-4" style={{borderLeftColor:'hsl(0 84% 60%)'}}>
              <h3 className="font-bold mb-2">🔴 문제 1: "유효하지 않은 코드" 또는 입력란이 보이지 않음</h3>
              <p className="text-sm text-muted-foreground mb-3"><strong>원인:</strong> 프로모션 전용 링크를 경유하지 않고 일반 아고다 페이지에서 접속한 경우</p>
              <img src={mobileBooking} alt="아고다 할인코드 입력 화면" width={960} height={640} loading="lazy" className="w-full h-40 object-cover rounded-lg mb-3" />
              <h4 className="font-semibold text-sm mb-2">해결 방법:</h4>
              <ol className="text-sm text-muted-foreground space-y-1">
                <li>1. 반드시 프로모션 전용 링크를 통해 아고다에 접속</li>
                <li>2. 포털 검색 결과의 '광고'/'스폰서' 링크 접속 시 할인 미적용</li>
                <li>3. 브라우저 쿠키/캐시 삭제 후 전용 링크로 재접속</li>
              </ol>
              <CtaButton className="mt-3 text-xs" text="프로모션 전용 링크로 접속 →" />
            </div>

            <div className="info-card border-l-4" style={{borderLeftColor:'hsl(0 84% 60%)'}}>
              <h3 className="font-bold mb-2">🔴 문제 2: 앱에서 할인코드가 적용되지 않음</h3>
              <p className="text-sm text-muted-foreground mb-2"><strong>원인:</strong> 일부 할인코드는 아고다 앱에서 적용 불가</p>
              <h4 className="font-semibold text-sm mb-2">해결 방법:</h4>
              <ol className="text-sm text-muted-foreground space-y-1">
                <li>1. 모바일 웹 브라우저(Chrome, Safari)를 통해 접속</li>
                <li>2. PC 웹 브라우저로 접속 후 코드 적용</li>
                <li>3. 앱 전용 코드는 반대로 앱에서만 사용 가능</li>
              </ol>
            </div>

            <div className="info-card border-l-4" style={{borderLeftColor:'hsl(0 84% 60%)'}}>
              <h3 className="font-bold mb-2">🔴 문제 3: 코드 입력했는데 할인 금액이 표시되지 않음</h3>
              <p className="text-sm text-muted-foreground mb-2"><strong>원인 후보:</strong></p>
              <ul className="text-sm text-muted-foreground space-y-1 mb-3">
                <li>• 해당 숙소가 할인코드 적용 대상이 아닌 경우</li>
                <li>• 글로벌 체인 호텔(메리어트·힐튼 등) 미적용 대상</li>
                <li>• 이미 높은 할인이 적용된 특가 상품</li>
                <li>• 할인코드 유효기간 만료</li>
                <li>• 최소 예약 금액 미달 / 비로그인 상태</li>
                <li>• "숙소에서 결제" 옵션 선택 (선결제만 대상)</li>
              </ul>
              <h4 className="font-semibold text-sm mb-2">해결 방법:</h4>
              <ol className="text-sm text-muted-foreground space-y-1">
                <li>1. "쿠폰 적용 가능" 배너 숙소인지 확인</li>
                <li>2. 할인코드 적용 조건 재확인</li>
                <li>3. 다른 할인코드로 교체 시도</li>
                <li>4. 결제 옵션을 "선결제"로 변경</li>
                <li>5. 로그인 후 재시도</li>
              </ol>
            </div>

            <div className="info-card border-l-4" style={{borderLeftColor:'hsl(0 84% 60%)'}}>
              <h3 className="font-bold mb-2">🔴 문제 4: 카드사 할인이 적용되지 않음</h3>
              <img src={creditCards} alt="카드사 할인 적용 문제" width={960} height={640} loading="lazy" className="w-full h-40 object-cover rounded-lg mb-3" />
              <h4 className="font-semibold text-sm mb-2">해결 방법:</h4>
              <ol className="text-sm text-muted-foreground space-y-1">
                <li>1. 반드시 카드사 전용 프로모션 페이지에서 예약</li>
                <li>2. "선결제" 옵션으로 변경</li>
                <li>3. 간편결제가 아닌 카드 번호 직접 입력으로 결제</li>
                <li>4. 월초에 예약 (예산 소진 전)</li>
              </ol>
            </div>

            <div className="info-card border-l-4" style={{borderLeftColor:'hsl(38 92% 50%)'}}>
              <h3 className="font-bold mb-2">🔴 문제 5: 할인코드 취소 후 재사용 불가</h3>
              <p className="text-sm text-muted-foreground">할인코드를 적용하여 예약한 후 취소하면 해당 할인코드는 일반적으로 재사용이 불가능합니다.</p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• 예약 전 가격을 충분히 확인 후 확정</li>
                <li>• 불가피한 취소 시 고객센터에 재활성화 요청 (보장 안 됨)</li>
                <li>• 다른 할인코드로 대체 사용</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4-2 결제 관련 */}
        <section>
          <h2 className="section-title">결제 관련 문제 해결</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="info-card">
              <h3 className="font-bold mb-3">💳 결제 오류 발생 시</h3>
              <ol className="text-sm text-muted-foreground space-y-2">
                <li>1. 카드 한도 확인 (해외 결제 한도 별도 설정 확인)</li>
                <li>2. 해외 결제 차단 설정 해제 (카드사 앱)</li>
                <li>3. 3D Secure 팝업 차단 여부 확인</li>
                <li>4. 다른 브라우저/시크릿 모드로 재시도</li>
                <li>5. 다른 결제 수단으로 변경</li>
              </ol>
            </div>
            <div className="info-card">
              <h3 className="font-bold mb-3">💰 이중 결제 / 중복 결제 의심 시</h3>
              <ol className="text-sm text-muted-foreground space-y-2">
                <li>1. "내 예약" 페이지에서 실제 예약 건수 확인</li>
                <li>2. 카드사 앱에서 결제 내역 확인</li>
                <li>3. 24~48시간 대기 (일시적 승인 자동 취소 가능)</li>
                <li>4. 지속 시 아고다 + 카드사 동시 문의</li>
              </ol>
            </div>
          </div>
        </section>

        {/* 4-3 FAQ */}
        <section>
          <h2 className="section-title">예약 · 취소 · 변경 관련 FAQ</h2>
          <div className="mt-10">
            <img src={savingsCelebration} alt="아고다 FAQ" width={960} height={640} loading="lazy" className="w-full h-40 object-cover rounded-xl mb-6" />

            <FaqItem q="Q. 예약 취소는 어떻게 하나요?" a={
              <div className="space-y-2 text-sm">
                <p>아고다 앱 또는 웹사이트 → "내 예약" → 해당 예약 선택 → "예약 취소" 버튼을 클릭합니다.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>무료 취소:</strong> 무료 취소 가능 기간 내라면 수수료 없이 취소 가능</li>
                  <li><strong>환불 불가:</strong> 예약 시 "환불 불가" 조건이었다면 수수료 발생 또는 환불 불가</li>
                  <li><strong>팁:</strong> 사유를 상세히 작성하여 이메일로 요청하면 유연하게 처리되기도 함</li>
                </ul>
              </div>
            } />
            <FaqItem q="Q. 예약 변경(날짜/인원/객실)은 가능한가요?" a={
              <p className="text-sm">"내 예약" 페이지에서 "예약 변경" 버튼으로 직접 변경 가능합니다. 숙소마다 변경 정책이 다르므로 수수료 발생 여부 확인 필수입니다. 변경 불가 시 취소 후 재예약이 필요할 수 있습니다.</p>
            } />
            <FaqItem q="Q. 노쇼(No-Show) 시 어떻게 되나요?" a={
              <p className="text-sm">호텔에 따라 첫날 객실 요금 또는 전액 청구 가능합니다. 하루 늦게 도착 시 반드시 미리 호텔에 연락하세요.</p>
            } />
            <FaqItem q="Q. 예약자 이름 변경(양도)은 가능한가요?" a={
              <p className="text-sm">일반적으로 예약자 변경이 제한적입니다. 아고다 고객센터에 직접 문의하여 가능 여부를 확인하세요.</p>
            } />
            <FaqItem q="Q. 결제 완료 후 할인코드를 추가 적용할 수 있나요?" a={
              <p className="text-sm"><strong>불가능합니다.</strong> 할인코드는 결제 단계에서만 적용 가능하며, 예약 완료 후 소급 적용이 되지 않습니다.</p>
            } />
            <FaqItem q="Q. 할인코드는 어디서 구할 수 있나요?" a={
              <ul className="text-sm list-disc pl-5 space-y-1">
                <li>아고다 공식 홈페이지 프로모션 배너</li>
                <li>아고다 앱 내 프로모션 섹션</li>
                <li>아고다 뉴스레터 (이메일 구독)</li>
                <li>카드사 제휴 이벤트 페이지</li>
                <li>인플루언서 제휴 코드</li>
                <li>할인코드 정보 사이트 (본 사이트 포함)</li>
              </ul>
            } />
            <FaqItem q="Q. 할인코드는 모든 숙소에 적용되나요?" a={
              <p className="text-sm"><strong>아닙니다.</strong> 일부 숙소, 글로벌 체인 호텔(메리어트·힐튼), 이미 높은 할인이 적용된 특가 상품은 제외될 수 있습니다.</p>
            } />
            <FaqItem q="Q. 모바일 앱 전용 할인코드가 있나요?" a={
              <p className="text-sm"><strong>네.</strong> 아고다는 모바일 앱 전용 할인코드를 자주 제공합니다. 앱에서만 뜨는 특가 숙소도 별도로 존재합니다.</p>
            } />
            <FaqItem q="Q. 아고다 베스트 요금 보장이란?" a={
              <div className="text-sm space-y-2">
                <p>아고다에서 예약한 숙소를 다른 사이트에서 더 저렴하게 발견하면 차액을 보상받을 수 있는 제도입니다.</p>
                <p>일반 회원(Member)부터 적용 가능하며, 필요 자료: 호텔명, 예약 가능 여부, 객실 종류, 해당 웹사이트 스크린샷 최대 3장</p>
              </div>
            } />
          </div>
        </section>

        {/* 4-4 고객센터 */}
        <section>
          <h2 className="section-title">아고다 고객센터 연락 방법</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <div className="info-card text-center">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold mb-2">전화 상담</h3>
              <p className="text-lg font-bold text-primary">+82 70 4784 4366</p>
              <p className="text-xs text-muted-foreground mt-1">오전 9:00 ~ 오후 9:45 (매일)</p>
              <p className="text-xs text-muted-foreground">이외 시간: 영어 상담 가능</p>
              <p className="text-xs text-muted-foreground mt-2">준비: 예약번호 + 카드 마지막 4자리</p>
            </div>
            <div className="info-card text-center">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-bold mb-2">실시간 채팅</h3>
              <p className="text-sm text-muted-foreground">아고다 앱/웹 → "도움이 필요하신가요?" → 실시간 채팅</p>
              <p className="text-xs text-muted-foreground mt-2">빠른 응답이 필요할 때 추천</p>
            </div>
            <div className="info-card text-center">
              <div className="text-3xl mb-3">✉️</div>
              <h3 className="font-bold mb-2">이메일 문의</h3>
              <p className="text-sm text-muted-foreground">환불 불가 예약 취소나 특수 상황 시 사유를 상세히 작성</p>
              <p className="text-xs text-muted-foreground mt-2">구체적 상황 설명 = 유연한 처리 확률 ↑</p>
            </div>
          </div>
        </section>

        {/* 4-5 체크리스트 */}
        <section>
          <h2 className="section-title">흔한 실수 & 주의사항 체크리스트</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="info-card border-l-4" style={{borderLeftColor:'hsl(0 84% 60%)'}}>
              <h3 className="font-bold mb-3">❌ 하지 말아야 할 것</h3>
              <img src={nightOwl} alt="아고다 주의사항" width={960} height={640} loading="lazy" className="w-full h-32 object-cover rounded-lg mb-3" />
              <ol className="text-sm text-muted-foreground space-y-2">
                <li>1. ❌ 일반 포털 '광고' 링크로 접속하여 할인코드 입력</li>
                <li>2. ❌ 원화(KRW)로 결제하여 이중환전 수수료 발생</li>
                <li>3. ❌ 결제 완료 후 소급 적용 요청</li>
                <li>4. ❌ 앱 전용 코드를 웹에서 사용 (또는 반대)</li>
                <li>5. ❌ 할인 확인 없이 바로 결제</li>
                <li>6. ❌ "숙소에서 결제" 선택 후 카드 할인 기대</li>
                <li>7. ❌ 여러 할인코드 동시 입력 시도</li>
                <li>8. ❌ 간편결제를 통한 카드사 전용 할인 기대</li>
              </ol>
            </div>
            <div className="info-card border-l-4" style={{borderLeftColor:'hsl(142 71% 45%)'}}>
              <h3 className="font-bold mb-3">✅ 반드시 해야 할 것</h3>
              <ol className="text-sm text-muted-foreground space-y-2">
                <li>1. ✅ 프로모션 전용 링크 경유 후 접속</li>
                <li>2. ✅ 결제 통화를 USD 또는 현지 통화로 설정</li>
                <li>3. ✅ 카드사 전용 페이지에서 예약 진행</li>
                <li>4. ✅ 할인코드 입력 후 할인 금액 반영 확인</li>
                <li>5. ✅ VIP 등급 혜택 자동 적용 확인</li>
                <li>6. ✅ 무료 취소 가능 기간 확인</li>
                <li>7. ✅ 해외 원화 결제(DCC) 차단 설정</li>
                <li>8. ✅ 월초에 예약 (예산 소진 전)</li>
                <li>9. ✅ 심야·수요·정오 프로모션 시간대 활용</li>
              </ol>
              <CtaButton className="mt-4 w-full text-center text-xs" text="프로모션 전용 링크로 접속 →" />
            </div>
          </div>
        </section>

        {/* 4-6 용어 사전 */}
        <section>
          <h2 className="section-title">아고다 용어 사전</h2>
          <div className="mt-10 table-responsive">
            <table>
              <thead><tr><th>용어</th><th>설명</th></tr></thead>
              <tbody>
                <tr><td className="font-bold">할인코드</td><td>결제 단계에서 입력하면 추가 할인이 적용되는 텍스트 코드</td></tr>
                <tr><td className="font-bold">카드사 제휴 할인</td><td>특정 카드사 전용 페이지에서 해당 카드로 결제 시 자동 적용</td></tr>
                <tr><td className="font-bold">선결제</td><td>예약 시 온라인으로 미리 결제. 대부분의 할인은 선결제에만 적용</td></tr>
                <tr><td className="font-bold">현장 결제</td><td>호텔 체크인 시 현장에서 결제. 할인코드/카드할인 대부분 미적용</td></tr>
                <tr><td className="font-bold">DCC (이중환전)</td><td>해외 결제 시 원화로 변환하면서 추가 수수료가 발생하는 것</td></tr>
                <tr><td className="font-bold">시크릿딜</td><td>할인코드 없이 특정 숙소를 특가로 제공하는 숨겨진 프로모션</td></tr>
                <tr><td className="font-bold">아고다 캐시</td><td>아고다 이용 시 적립되는 포인트. 다음 예약 시 결제에 사용</td></tr>
                <tr><td className="font-bold">캐시백 리워드</td><td>예약 완료 후 현금 환급 방식 (아고다 캐시와 별개)</td></tr>
                <tr><td className="font-bold">AgodaVIP</td><td>회원 등급 프로그램. 실버→골드→플래티넘→다이아몬드</td></tr>
                <tr><td className="font-bold">베스트 요금 보장</td><td>다른 사이트에서 더 저렴하면 차액 보상 제도</td></tr>
                <tr><td className="font-bold">Night Owl Sale</td><td>매일 오후 8시~자정 심야 할인 프로모션</td></tr>
                <tr><td className="font-bold">Payday Sale</td><td>매월 마지막 5일간 월급날 세일</td></tr>
                <tr><td className="font-bold">프로모션 전용 링크</td><td>할인이 활성화되도록 설계된 특정 URL</td></tr>
                <tr><td className="font-bold">예산 소진</td><td>카드사별 프로모션 할인 예산이 모두 사용된 상태</td></tr>
                <tr><td className="font-bold">선착순 마감</td><td>프로모션 참여 인원/예산 한정, 먼저 신청한 순서대로 제공</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 추가 독자적 콘텐츠: 실 사용 후기/경험 팁 */}
        <section>
          <h2 className="section-title">💡 실전 경험 팁 (독자적 분석)</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="info-card">
              <img src={southeastAsia} alt="동남아 여행 할인 경험" width={960} height={640} loading="lazy" className="w-full h-40 object-cover rounded-lg mb-3" />
              <h3 className="font-bold mb-2">🏖️ 동남아 여행 시 절약 팁</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 태국·발리는 8% 지역 코드가 존재할 때 반드시 우선 사용</li>
                <li>• 토스뱅크 체크카드로 결제하면 수수료 0원 + 10% 할인</li>
                <li>• Night Owl Sale은 현지 시각 기준이므로 한국 시간으로 계산 필요</li>
                <li>• 방콕·쿠알라룸푸르 등은 아고다가 부킹닷컴보다 평균 5~15% 저렴</li>
              </ul>
            </div>
            <div className="info-card">
              <h3 className="font-bold mb-2">🗾 일본 여행 시 절약 팁</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 일본 비즈니스호텔(1~2만원대)은 VIP 등급 올리기에 최적</li>
                <li>• USD 결제 시 환율에 따라 추가 절약 가능</li>
                <li>• 벚꽃 시즌(3~4월)에는 봄 프로모션 활용</li>
                <li>• 아고다 앱 전용 특가가 웹보다 저렴한 경우 빈번</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center">
          <CtaButton text="지금 최대 할인 적용하기 →" />
        </section>
      </div>
    </>
  );
}
