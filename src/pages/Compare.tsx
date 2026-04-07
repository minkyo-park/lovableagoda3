import heroCompare from "@/assets/hero-compare.jpg";
import vipTiers from "@/assets/vip-tiers.jpg";
import creditCards from "@/assets/credit-cards.jpg";
import nightOwl from "@/assets/night-owl.jpg";
import savingsCelebration from "@/assets/savings-celebration.jpg";
import southeastAsia from "@/assets/southeast-asia.jpg";
import CtaButton from "@/components/CtaButton";

const AFFILIATE = "http://app.ac/hqp46L253";

export default function Compare() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org","@type":"Article",
        "headline":"아고다 할인 비교 & 꿀팁 - 카드사별 비교, OTA 비교, VIP 가이드",
        "description":"카드사별 아고다 할인 비교표, OTA 비교, 할인 극대화 전략, AgodaVIP 등급 완전 가이드",
        "url":"https://agd.couponmonster.co.kr/compare",
        "author":{"@type":"Organization","name":"아고다 할인코드"},
        "datePublished":"2026-04-01","dateModified":"2026-04-07"
      })}} />

      <section className="hero-section">
        <img src={heroCompare} alt="아고다 할인 비교 분석" width={1920} height={800} className="w-full h-[300px] md:h-[400px] object-cover" />
        <div className="hero-overlay absolute inset-0 flex items-center">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-black mb-3" style={{color:'white'}}>할인 비교 & 꿀팁</h1>
            <p className="text-lg" style={{color:'rgba(255,255,255,0.9)'}}>카드사별 비교 · OTA 비교 · 할인 극대화 전략 · VIP 완전 가이드</p>
          </div>
        </div>
      </section>

      <div className="container py-12 space-y-16">
        {/* 3-1 카드사별 비교표 */}
        <section>
          <h2 className="section-title">카드사별 아고다 할인 비교표</h2>
          <p className="text-sm text-muted-foreground mt-8 mb-4">이 비교표는 다른 사이트에서 쉽게 찾기 어려운 독보적 정보입니다.</p>
          <img src={creditCards} alt="한국 카드사별 아고다 할인 비교" width={960} height={640} loading="lazy" className="w-full h-48 object-cover rounded-xl mb-4" />

          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>카드사</th>
                  <th>전 지역</th>
                  <th>특정 지역 추가</th>
                  <th>종료일</th>
                  <th>적용 카드</th>
                  <th>비고</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-bold">삼성카드</td><td><span className="badge-discount">7%</span></td><td>이탈리아·말레이시아·인도네시아 10%</td><td>2026.04.30</td><td>신용카드</td><td className="text-xs">LINK 혜택/전용 페이지</td></tr>
                <tr><td className="font-bold">신한카드</td><td><span className="badge-discount">7%</span></td><td>말레이시아·인도네시아·이탈리아 10%</td><td>2026.06.30</td><td>신용카드</td><td className="text-xs">선착순 자동적용</td></tr>
                <tr><td className="font-bold">우리카드</td><td><span className="badge-discount">7%</span></td><td>—</td><td>2026.06.30</td><td>신용카드</td><td className="text-xs">핀번호 입력</td></tr>
                <tr><td className="font-bold">하나카드</td><td><span className="badge-discount">7%</span></td><td>—</td><td>2026.06.30</td><td>신용카드</td><td className="text-xs">선착순 마감</td></tr>
                <tr><td className="font-bold">현대카드</td><td><span className="badge-discount">7%</span></td><td>최대 10%</td><td>2026.06.30</td><td>신용카드</td><td className="text-xs">—</td></tr>
                <tr><td className="font-bold">KB국민카드</td><td><span className="badge-discount">7%</span></td><td>이탈리아·말레이시아·인도네시아 10%</td><td>확인 필요</td><td>신용카드</td><td className="text-xs">—</td></tr>
                <tr><td className="font-bold">NH농협카드</td><td><span className="badge-discount">7%</span></td><td>말레이시아·스페인·이탈리아 10%</td><td>2026.06.30</td><td>신용+체크</td><td className="text-xs badge-success">체크카드 가능!</td></tr>
                <tr><td className="font-bold">BC카드</td><td><span className="badge-discount">7%</span></td><td>이탈리아·말레이시아·인도네시아 10%</td><td>확인 필요</td><td>신용카드</td><td className="text-xs">—</td></tr>
                <tr className="bg-muted"><td className="font-bold">토스뱅크</td><td><span className="badge-discount">7%</span></td><td>한국·태국·베트남 10%</td><td>2028.08.31</td><td>체크카드</td><td className="text-xs badge-success">수수료 무료+장기!</td></tr>
                <tr><td className="font-bold">마스터카드</td><td><span className="badge-discount">8~15%</span></td><td>월드엘리트 15% / 월드 10%</td><td>분기별 갱신</td><td>등급별</td><td className="text-xs">등급별 차등</td></tr>
                <tr><td className="font-bold">Visa카드</td><td><span className="badge-discount">6%</span></td><td>—</td><td>확인 필요</td><td>한국 Visa만</td><td className="text-xs">USD 결제 권장</td></tr>
                <tr><td className="font-bold">유니온페이</td><td><span className="badge-discount">15%</span></td><td>코드: UPI15</td><td>확인 필요</td><td>한국 유니온페이</td><td className="text-xs">5회/카드, 최대 $100</td></tr>
              </tbody>
            </table>
          </div>

          <div className="info-card mt-6">
            <h3 className="font-bold mb-3">💡 카드사 할인 선택 가이드</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>🏆 <strong>최고 할인율:</strong> 마스터카드 월드엘리트 (15%) 또는 유니온페이 (15%)</li>
              <li>👥 <strong>가장 범용적:</strong> 신한·삼성·KB국민카드 (7~10%)</li>
              <li>💳 <strong>체크카드 사용자:</strong> NH농협카드 또는 토스뱅크 (7~10%)</li>
              <li>⏰ <strong>장기 안정적:</strong> 토스뱅크 체크카드 (2028년까지 보장)</li>
              <li>💰 <strong>수수료 절약:</strong> 토스뱅크 (해외결제 수수료 무료 + 할인)</li>
            </ul>
            <CtaButton className="mt-4 text-xs" text="내 카드로 할인 적용하기 →" />
          </div>
        </section>

        {/* 3-2 OTA 비교 */}
        <section>
          <h2 className="section-title">아고다 vs 타 OTA 할인 비교</h2>
          <div className="mt-10 table-responsive">
            <table>
              <thead>
                <tr>
                  <th>비교 항목</th>
                  <th>아고다</th>
                  <th>부킹닷컴</th>
                  <th>호텔스닷컴</th>
                  <th>익스피디아</th>
                  <th>트립닷컴</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-bold">소속 그룹</td><td>Booking Holdings</td><td>Booking Holdings</td><td>Expedia Group</td><td>Expedia Group</td><td>Trip.com Group</td></tr>
                <tr><td className="font-bold">강점 지역</td><td className="text-primary font-bold">아시아 (동남아)</td><td>유럽 + 전 세계</td><td>전 세계 균등</td><td>북미 + 유럽</td><td>중국 + 아시아</td></tr>
                <tr><td className="font-bold">할인코드</td><td><span className="badge-success">매월 5~12%</span></td><td><span className="badge-warning">거의 없음</span></td><td>10박 1박 무료</td><td>7% 코드</td><td>할인코드 제공</td></tr>
                <tr><td className="font-bold">카드사 제휴</td><td><span className="badge-success">10+ 카드사</span></td><td>없거나 적음</td><td>제한적</td><td>제한적</td><td>일부 카드</td></tr>
                <tr><td className="font-bold">간편결제</td><td>카카오/네이버/PAYCO/PayPal</td><td>일부</td><td>제한적</td><td>일부</td><td>일부</td></tr>
                <tr><td className="font-bold">VIP/멤버십</td><td><span className="badge-success">4단계 (최대 25%)</span></td><td>Genius 2단계</td><td>리워드 나이트</td><td>실버/골드</td><td>회원 등급</td></tr>
                <tr><td className="font-bold">정기 프로모션</td><td><span className="badge-success">심야/수요/페이데이</span></td><td>시즌별 간헐적</td><td>비정기적</td><td>비정기적</td><td>회원 특가</td></tr>
              </tbody>
            </table>
          </div>

          <div className="info-card mt-6">
            <h3 className="font-bold mb-3">💡 OTA별 추천 상황</h3>
            <img src={southeastAsia} alt="동남아 여행지 비교" width={960} height={640} loading="lazy" className="w-full h-40 object-cover rounded-lg mb-3" />
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>🏖️ <strong>동남아 여행:</strong> 아고다가 가격 경쟁력 최고</li>
              <li>🏰 <strong>유럽 여행:</strong> 부킹닷컴 숙소 다양성 우위 / 아고다 카드 할인 시 역전 가능</li>
              <li>📆 <strong>장기 숙박:</strong> 아고다 + 카드 할인 + VIP 등급 조합이 가장 유리</li>
              <li>🔍 <strong>가격 비교:</strong> 동일 호텔도 OTA별 가격 상이 → 2~3개 사이트 비교 권장</li>
            </ul>
          </div>
        </section>

        {/* 3-3 VIP 등급 */}
        <section>
          <h2 className="section-title">AgodaVIP 등급 완전 가이드</h2>
          <img src={vipTiers} alt="아고다 VIP 등급 체계" width={960} height={640} loading="lazy" className="mt-10 w-full h-56 object-cover rounded-xl mb-6" />

          <div className="table-responsive">
            <table>
              <thead>
                <tr><th>등급</th><th>승급 조건 (최근 2년)</th><th>주요 혜택</th><th>최대 할인율</th></tr>
              </thead>
              <tbody>
                <tr><td className="font-bold">Member</td><td>회원가입만</td><td>회원 특가, 베스트 요금 보장, 아고다 캐시 적립, 시크릿딜 접근</td><td>기본</td></tr>
                <tr><td className="font-bold text-info">VIP Silver</td><td>숙박 2건+</td><td>실버 전용 특전, VIP 배지 숙소 추가 할인</td><td><span className="badge-discount">최대 12%</span></td></tr>
                <tr><td className="font-bold" style={{color:'hsl(38 92% 50%)'}}>VIP Gold</td><td>숙박 5건+ (낮은 취소율)</td><td>레이트 체크아웃, 룸 업그레이드, 무료 조식 가능</td><td><span className="badge-discount">최대 18%</span></td></tr>
                <tr><td className="font-bold text-muted-foreground">VIP Platinum</td><td>숙박 10건+</td><td>플래티넘 전용 요금, 환영 선물, 무료 미니바</td><td><span className="badge-discount">최대 25%</span></td></tr>
                <tr className="bg-muted"><td className="font-bold">Diamond 💎</td><td>15건+ & $1,500+</td><td>최상위 전용 특가, 모든 혜택 포함</td><td><span className="badge-discount">25%+</span></td></tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="info-card">
              <h3 className="font-bold mb-3">📋 등급 산정 기준</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 최근 2년(24개월)간 완료된 예약 기준</li>
                <li>• 체크아웃까지 완료된 예약만 유효</li>
                <li>• 호텔 가격 무관, 오직 건수로 결정 (다이아몬드 제외)</li>
                <li>• 항공권·액티비티 예약도 VIP 산정에 포함</li>
                <li>• 골드 이상은 낮은 취소율 유지 필요</li>
              </ul>
            </div>
            <div className="info-card">
              <h3 className="font-bold mb-3">🚀 등급 빠르게 올리는 전략</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>1. <strong>1박씩 여러 번 예약</strong>: 5박 1건보다 1박 5건이 유리</li>
                <li>2. <strong>저렴한 비즈니스호텔</strong>: 동남아·일본 1~2만원대 숙소</li>
                <li>3. <strong>출장 숙소를 아고다로 통일</strong></li>
                <li>4. <strong>항공권·액티비티도 아고다에서</strong></li>
                <li>5. <strong>모바일 전용 특가 활용</strong></li>
              </ul>
            </div>
          </div>

          <div className="info-card mt-4">
            <h3 className="font-bold mb-2">🔍 등급 확인 방법</h3>
            <p className="text-sm text-muted-foreground">PC: 아고다 로그인 → 내 계정 → 멤버십 등급 / 앱: 더보기 → AgodaVIP 메뉴</p>
          </div>
        </section>

        {/* 3-4 할인 극대화 */}
        <section>
          <h2 className="section-title">할인 극대화 종합 전략</h2>
          <div className="mt-10">
            <img src={savingsCelebration} alt="아고다 할인 극대화 전략" width={960} height={640} loading="lazy" className="w-full h-48 object-cover rounded-xl mb-6" />
            <div className="info-card">
              <h3 className="font-bold mb-4">🏆 최대 할인을 위한 체크리스트</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <ul className="space-y-2">
                  <li>✅ VIP 등급 확인 (VIP 전용 특가 자동 적용)</li>
                  <li>✅ 카드사 전용 프로모션 페이지 경유</li>
                  <li>✅ 할인코드 입력 (5~12% 추가)</li>
                  <li>✅ 아고다 캐시 사용</li>
                  <li>✅ 캐시백 리워드 숙소 선택</li>
                </ul>
                <ul className="space-y-2">
                  <li>✅ 결제 통화 USD로 변경</li>
                  <li>✅ 심야·정오·수요일 프로모션 시간대 활용</li>
                  <li>✅ 월초에 예약 (예산 소진 전)</li>
                  <li>✅ 해외결제 수수료 무료 카드 사용</li>
                </ul>
              </div>
            </div>

            <div className="info-card mt-6">
              <h3 className="font-bold mb-3">📊 시뮬레이션: 35만원 호텔을 최저가로</h3>
              <div className="table-responsive">
                <table>
                  <thead><tr><th>단계</th><th>적용 할인</th><th>할인 후 금액</th></tr></thead>
                  <tbody>
                    <tr><td>원가</td><td>—</td><td className="font-bold">350,000원</td></tr>
                    <tr><td>① VIP 골드 (-18%)</td><td>-63,000원</td><td>287,000원</td></tr>
                    <tr><td>② 할인코드 5%</td><td>-14,350원</td><td>272,650원</td></tr>
                    <tr><td>③ 신한카드 7%</td><td>-19,086원</td><td>253,564원</td></tr>
                    <tr><td>④ 아고다 캐시</td><td>-5,000원</td><td className="font-bold text-primary">248,564원</td></tr>
                    <tr className="bg-muted"><td colSpan={2} className="font-bold">총 약 29% 할인</td><td className="font-bold text-primary">약 101,000원 절감!</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 3-5 월별 프로모션 패턴 */}
        <section>
          <h2 className="section-title">월별 프로모션 패턴 분석 (독보적 정보)</h2>
          <div className="mt-10">
            <img src={nightOwl} alt="아고다 프로모션 패턴 분석" width={960} height={640} loading="lazy" className="w-full h-48 object-cover rounded-xl mb-6" />
            <div className="table-responsive">
              <table>
                <thead><tr><th>시기</th><th>프로모션</th><th>특징</th></tr></thead>
                <tbody>
                  <tr><td>1~2월</td><td>설날/구정 프로모션</td><td>동남아·일본 숙소 집중 할인</td></tr>
                  <tr><td>3~4월</td><td>봄 시즌 / 더블데이</td><td>벚꽃 여행지 특가</td></tr>
                  <tr><td>5월</td><td>아고다 창립 기념</td><td>대규모 할인 (20주년 등)</td></tr>
                  <tr><td>6~7월</td><td>여름 휴가 프로모션</td><td>해변·리조트 집중</td></tr>
                  <tr><td>8~9월</td><td>가을 시즌 세일</td><td>유럽·일본 단풍</td></tr>
                  <tr><td>10월</td><td>핼러윈 프로모션</td><td>테마파크 숙소 특가</td></tr>
                  <tr className="bg-muted"><td className="font-bold">11월</td><td className="font-bold">블랙프라이데이</td><td className="font-bold text-primary">연중 최대 할인 (최대 50%+)</td></tr>
                  <tr><td>12월</td><td>연말/크리스마스</td><td>겨울 여행지 특가</td></tr>
                </tbody>
              </table>
            </div>

            <div className="info-card mt-6">
              <h3 className="font-bold mb-2">💡 프로모션 갱신 패턴</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <strong>할인코드:</strong> 매월 말일(30일)~익월 1일 사이 갱신</li>
                <li>• <strong>카드사 프로모션:</strong> 분기별(3개월) 갱신 일반적</li>
                <li>• <strong>팁:</strong> 새 달이 시작되면 이전 코드도 먼저 테스트해볼 것</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 추가 독자적 콘텐츠: 여행지별 최적 할인 조합 */}
        <section>
          <h2 className="section-title">📊 여행지별 최적 할인 조합 (독자적 분석)</h2>
          <div className="mt-10 table-responsive">
            <table>
              <thead><tr><th>여행지</th><th>최적 카드</th><th>추가 할인코드</th><th>예상 총 할인율</th><th>추천 전략</th></tr></thead>
              <tbody>
                <tr><td className="font-bold">태국 방콕</td><td>토스뱅크 (10%)</td><td>8% 지역코드</td><td><span className="badge-discount">~18%+</span></td><td>토스뱅크+지역코드+심야특가</td></tr>
                <tr><td className="font-bold">일본 도쿄</td><td>신한카드 (7%)</td><td>5% 전세계코드</td><td><span className="badge-discount">~12%+</span></td><td>신한+할인코드+Night Owl</td></tr>
                <tr><td className="font-bold">발리</td><td>삼성카드 (10%)</td><td>8% 지역코드</td><td><span className="badge-discount">~18%+</span></td><td>삼성+인도네시아코드+VIP</td></tr>
                <tr><td className="font-bold">이탈리아</td><td>NH농협 (10%)</td><td>8% 지역코드</td><td><span className="badge-discount">~18%+</span></td><td>농협체크+이탈리아코드</td></tr>
                <tr><td className="font-bold">국내 제주</td><td>토스뱅크 (10%)</td><td>5% 국내코드</td><td><span className="badge-discount">~15%+</span></td><td>토스뱅크+국내코드</td></tr>
                <tr><td className="font-bold">유럽 전반</td><td>마스터 월드엘리트 (15%)</td><td>5% 전세계코드</td><td><span className="badge-discount">~20%+</span></td><td>마스터카드+코드+VIP</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="text-center">
          <a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300" style={{background:'linear-gradient(135deg, hsl(0 78% 52%), hsl(25 95% 53%))', color:'white', boxShadow:'0 6px 20px hsla(0,78%,52%,0.3)'}}>
            지금 최대 할인 적용하기 →
          </a>
        </section>
      </div>
    </>
  );
}
