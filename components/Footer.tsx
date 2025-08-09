import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div>
                <div className="font-semibold">GOMADANG</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">지원</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  이용약관
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © 2024 GOMADANG. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}