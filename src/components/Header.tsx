export function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <div className="font-semibold text-foreground">
              GOMADANG
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}