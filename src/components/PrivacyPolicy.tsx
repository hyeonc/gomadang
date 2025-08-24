import { Link } from "react-router-dom";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
          ← 홈으로 돌아가기
        </Link>
        <h1 className="text-3xl font-bold mb-8">개인정보 처리방침</h1>
        
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. 개인정보의 수집 및 이용 목적</h2>
            <p className="mb-2">GOMADANG(이하 "회사")은 다음의 목적을 위하여 개인정보를 처리합니다.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>서비스 제공 및 운영</li>
              <li>회원 관리 및 본인 확인</li>
              <li>서비스 개선 및 신규 서비스 개발</li>
              <li>고객 문의 대응 및 공지사항 전달</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. 수집하는 개인정보 항목</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-foreground mb-2">필수 항목</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>이메일 주소</li>
                  <li>닉네임</li>
                  <li>서비스 이용 기록, 접속 로그</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">선택 항목</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>생년월일</li>
                  <li>성별</li>
                  <li>프로필 사진</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. 개인정보의 보유 및 이용 기간</h2>
            <p className="mb-2">회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>회원 탈퇴 시: 즉시 삭제</li>
              <li>관계 법령에 따른 보존 필요 시: 해당 법령에서 정한 기간</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. 개인정보의 제3자 제공</h2>
            <p>회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>이용자가 사전에 동의한 경우</li>
              <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. 개인정보의 안전성 확보 조치</h2>
            <p className="mb-2">회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>개인정보의 암호화</li>
              <li>해킹 등에 대비한 기술적 대책</li>
              <li>개인정보 접근 제한</li>
              <li>개인정보 처리 직원의 최소화 및 교육</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. 이용자의 권리와 행사 방법</h2>
            <p className="mb-2">이용자는 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제 요구</li>
              <li>처리 정지 요구</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. 쿠키(Cookie)의 사용</h2>
            <p className="mb-2">회사는 이용자에게 맞춤 서비스를 제공하기 위해 쿠키를 사용합니다.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>쿠키는 웹사이트 서버가 이용자의 브라우저에 보내는 소량의 정보입니다</li>
              <li>이용자는 쿠키 설치에 대한 선택권을 가지고 있으며, 브라우저 설정을 통해 쿠키를 거부할 수 있습니다</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">8. 개인정보 보호책임자</h2>
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="mb-2">개인정보 보호책임자</p>
              <ul className="space-y-1">
                <li>성명: 고마당 개인정보보호팀</li>
                <li>이메일: privacy@gomadang.com</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">9. 개인정보 처리방침의 변경</h2>
            <p>이 개인정보 처리방침은 2024년 1월 1일부터 적용되며, 법령 및 방침에 따른 변경 내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
          </section>

          <div className="pt-8 border-t">
            <p className="text-sm">
              시행일: 2024년 1월 1일<br />
              최종 수정일: 2024년 1월 1일
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}