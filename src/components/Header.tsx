import TikTokIcon from "./TikTokIcon";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <TikTokIcon className="w-7 h-7 text-tiktok-red" />
          <span className="text-lg font-semibold tracking-tight">
            Agency Connect
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#setup" className="transition-colors hover:text-foreground">
            Setup
          </a>
          <a href="#api-keys" className="transition-colors hover:text-foreground">
            API Keys
          </a>
        </nav>
        <a
          href="#connect"
          className="connect-btn rounded-full px-5 py-2 text-sm font-medium text-white"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
