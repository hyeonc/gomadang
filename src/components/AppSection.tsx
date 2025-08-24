import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AppSection() {
  const features = [
    {
      icon: "📅",
      title: "정확한 예측",
      description: "AI 기반 알고리즘으로 생리 주기와 배란일을 정확하게 예측해드려요."
    },
    {
      icon: "💊",
      title: "맞춤형 관리",
      description: "개인별 패턴을 분석하여 맞춤형 건강 관리 팁을 제공합니다."
    },
    {
      icon: "📊",
      title: "데이터 분석",
      description: "월별, 년별 패턴을 한눈에 보기 쉽게 시각화해서 보여드려요."
    },
    {
      icon: "🔔",
      title: "스마트 알림",
      description: "중요한 날짜와 복용 시간을 놓치지 않도록 알림을 보내드려요."
    },
    {
      icon: "🔒",
      title: "프라이버시 보호",
      description: "모든 데이터는 암호화되어 안전하게 보호됩니다."
    },
    {
      icon: "👩‍⚕️",
      title: "전문가 콘텐츠",
      description: "산부인과 전문의가 검증한 건강 정보를 제공합니다."
    }
  ];

  return (
    <section id="app" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full text-sm mb-4">
            <span className="text-orange-600">🥔</span>
            <span className="text-orange-700 font-medium">고구마마당 첫 번째 앱</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            여성 생리 주기 추적 앱
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            고구마마당이 선보이는 첫 번째 앱입니다. 여성의 건강한 삶을 위해 설계된 
            스마트한 생리 주기 관리 솔루션으로, 과학적이고 개인화된 접근 방식을 제공합니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="고구마마당 생리 주기 앱 화면"
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">
              왜 고구마마당의 생리 주기 앱을 선택해야 할까요?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-orange-600 text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">고구마마당의 첫 작품</h4>
                  <p className="text-muted-foreground">사용자 중심 철학이 담긴 고구마마당의 첫 번째 앱</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-pink-600 text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">과학적 정확성</h4>
                  <p className="text-muted-foreground">의학적 근거에 기반한 정확한 예측 시스템</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-purple-600 text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">아름다운 디자인</h4>
                  <p className="text-muted-foreground">직관적이고 아름다운 사용자 인터페이스</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">철저한 보안</h4>
                  <p className="text-muted-foreground">개인정보 보호를 위한 최고 수준의 보안</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary mb-2">🚀 앞으로의 계획</h4>
              <p className="text-muted-foreground text-sm">
                고구마마당은 이 생리 주기 앱을 시작으로 더 많은 혁신적인 앱과 게임을 
                개발할 예정입니다. 사용자의 다양한 라이프스타일을 지원하는 
                디지털 솔루션들을 기대해 주세요!
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}