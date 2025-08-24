import { Link } from "react-router-dom";

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
          ← 홈으로 돌아가기
        </Link>
        <h1 className="text-3xl font-bold mb-8">이용약관</h1>
        
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">제1조 (목적)</h2>
            <p>
              이 약관은 GOMADANG(이하 "회사")이 제공하는 모바일 애플리케이션 서비스(이하 "서비스")의 이용과 관련하여 
              회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">제2조 (정의)</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>"서비스"란 회사가 제공하는 Thatday 애플리케이션 및 관련 제반 서비스를 의미합니다.</li>
              <li>"이용자"란 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>
              <li>"회원"이란 회사와 서비스 이용계약을 체결하고 이용자 아이디를 부여받은 이용자를 말합니다.</li>
              <li>"비회원"이란 회원에 가입하지 않고 회사가 제공하는 서비스를 이용하는 자를 말합니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">제3조 (약관의 게시와 개정)</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>회사는 이 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 내에 게시합니다.</li>
              <li>회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</li>
              <li>회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 서비스 내에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">제4조 (서비스의 제공 및 변경)</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>회사는 다음과 같은 서비스를 제공합니다:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>생리 주기 추적 및 예측</li>
                  <li>건강 정보 및 통계 제공</li>
                  <li>알림 및 리마인더 기능</li>
                  <li>기타 회사가 추가 개발하거나 다른 회사와의 제휴계약 등을 통해 회원에게 제공하는 일체의 서비스</li>
                </ul>
              </li>
              <li>회사는 서비스의 내용을 변경할 수 있으며, 변경된 서비스의 내용 및 제공일자를 제공합니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">제5조 (서비스 이용계약의 체결)</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>이용계약은 이용자가 이 약관의 내용에 대하여 동의를 한 다음 회원가입 신청을 하고 회사가 이러한 신청에 대하여 승낙함으로써 체결됩니다.</li>
              <li>회사는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않거나 사후에 이용계약을 해지할 수 있습니다:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우</li>
                  <li>실명이 아니거나 타인의 명의를 이용한 경우</li>
                  <li>허위의 정보를 기재하거나, 회사가 제시하는 내용을 기재하지 않은 경우</li>
                  <li>기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우</li>
                </ul>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">제6조 (회원정보의 변경)</h2>
            <p>
              회원은 서비스 내 계정 관리 화면을 통하여 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다. 
              회원은 회원가입 신청 시 기재한 사항이 변경되었을 경우 온라인으로 수정을 하거나 전자우편 기타 방법으로 
              회사에 대하여 그 변경사항을 알려야 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">제7조 (이용자의 의무)</h2>
            <p className="mb-2">이용자는 다음 행위를 하여서는 안 됩니다:</p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>신청 또는 변경 시 허위 내용의 등록</li>
              <li>타인의 정보 도용</li>
              <li>회사가 게시한 정보의 변경</li>
              <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
              <li>회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
              <li>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
              <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">제8조 (저작권의 귀속)</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>회사가 제공하는 서비스 및 관련 저작물에 대한 저작권 및 기타 지적재산권은 회사에 귀속됩니다.</li>
              <li>이용자는 서비스를 이용함으로써 얻은 정보 중 회사에게 지적재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">제9조 (서비스 이용의 제한 및 정지)</h2>
            <p>
              회사는 이용자가 이 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해한 경우, 
              경고, 일시정지, 영구이용정지 등으로 서비스 이용을 단계적으로 제한할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">제10조 (면책조항)</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</li>
              <li>회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</li>
              <li>회사는 이용자가 서비스와 관련하여 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">제11조 (분쟁해결)</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.</li>
              <li>회사는 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다.</li>
              <li>회사와 이용자 간에 발생한 전자상거래 분쟁과 관련하여 이용자의 피해구제신청이 있는 경우에는 공정거래위원회 또는 시·도지사가 의뢰하는 소비자분쟁조정위원회의 조정에 따를 수 있습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">제12조 (재판권 및 준거법)</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>회사와 이용자 간에 발생한 서비스 이용에 관한 분쟁에 대하여는 대한민국 법을 적용합니다.</li>
              <li>회사와 이용자 간에 제기된 소송은 대한민국 법원에서 진행합니다.</li>
            </ol>
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