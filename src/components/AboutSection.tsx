import { Card, CardContent } from "./ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            고구마마당은 누구인가요?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            고구마마당(줄여서 고마당)은 사용자의 일상을 더 편리하고 즐겁게 만드는 
            다양한 디지털 콘텐츠를 개발하는 혁신적인 기술 회사입니다. 
            앱, 게임, 그리고 라이프스타일 솔루션까지, 고품질의 디지털 경험을 제공합니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-4">우리의 미션</h3>
              <p className="text-muted-foreground">
                일상의 모든 순간을 더 스마트하고 즐겁게 만드는 
                디지털 솔루션을 통해 사용자의 삶의 질을 향상시킵니다.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-4">우리의 비전</h3>
              <p className="text-muted-foreground">
                혁신적인 기술과 창의적인 아이디어로 전 세계 사용자들에게 
                사랑받는 글로벌 콘텐츠 회사로 성장합니다.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold mb-4">우리의 가치</h3>
              <p className="text-muted-foreground">
                사용자 중심의 설계, 지속적인 혁신, 그리고 신뢰할 수 있는 
                품질을 바탕으로 모든 제품을 개발합니다.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">
              고구마마당의 다양한 서비스
            </h3>
            <p className="text-muted-foreground">
              우리는 다양한 분야에서 혁신적인 디지털 솔루션을 제공합니다
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📱</span>
              </div>
              <h4 className="font-bold mb-2">라이프스타일 앱</h4>
              <p className="text-muted-foreground text-sm">건강, 생활, 취미 등 일상을 더 풍요롭게 만드는 앱들</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎮</span>
              </div>
              <h4 className="font-bold mb-2">모바일 게임</h4>
              <p className="text-muted-foreground text-sm">재미있고 중독성 있는 캐주얼 및 전략 게임들</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h4 className="font-bold mb-2">유틸리티 솔루션</h4>
              <p className="text-muted-foreground text-sm">생산성과 편의성을 높이는 실용적인 도구들</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                우리가 중요하게 생각하는 것들
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold">사용자 경험 우선</h4>
                    <p className="text-muted-foreground text-sm">모든 제품은 사용자의 편의성과 만족도를 최우선으로 설계됩니다.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold">창의적 혁신</h4>
                    <p className="text-muted-foreground text-sm">기존의 틀을 벗어난 창의적이고 혁신적인 아이디어를 추구합니다.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold">지속 가능한 성장</h4>
                    <p className="text-muted-foreground text-sm">장기적인 관점에서 지속 가능하고 건전한 성장을 추구합니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-orange-400 to-purple-500 rounded-full text-white text-4xl mb-6">
                🥔
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">첫 번째 앱 런칭!</h4>
              <p className="text-muted-foreground">생리 주기 추적 앱으로 시작하는 고구마마당의 여정</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}