import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const AFFILIATE_LINK = "http://app.ac/hqp46L253";

const navItems = [
  { path: "/", label: "홈" },
  { path: "/guide", label: "사용 방법" },
  { path: "/compare", label: "할인 비교 & 꿀팁" },
  { path: "/faq", label: "FAQ & 트러블슈팅" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <nav className="container flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            아고다 쿠폰
          </Link>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium py-1 transition-colors ${
                  location.pathname === item.path
                    ? "nav-link-active"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button text-xs">
              할인 적용하기 →
            </a>
          </div>
          {/* Mobile hamburger */}
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴 열기">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t bg-card">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium border-b ${
                  location.pathname === item.path ? "text-primary bg-muted" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="p-4">
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button w-full block text-center text-sm">
                할인 적용하기 →
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t bg-card mt-16">
        <div className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3">아고다 쿠폰</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                아고다(Agoda) 최신 할인코드, 카드사 프로모션, 사용 가이드를 한곳에서 확인하세요.
                매월 업데이트되는 정보로 여행 경비를 절약하세요.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">빠른 링크</h4>
              <ul className="space-y-2 text-sm">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-muted-foreground hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">유용한 링크</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="text-muted-foreground hover:text-primary transition-colors">
                    아고다 할인 페이지 바로가기
                  </a>
                </li>
                <li className="text-muted-foreground">업데이트: 2026년 6월</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-6 text-center text-xs text-muted-foreground">
            <p>© 2026 아고다 쿠폰. 이 사이트는 아고다 제휴 파트너로서 제휴 링크를 포함하고 있습니다.</p>
            <p className="mt-1">본 사이트는 Agoda.com의 공식 사이트가 아닙니다. 모든 정보는 참고용이며, 정확한 정보는 아고다 공식 사이트에서 확인하세요.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
