import TikTokIcon from "./TikTokIcon";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <TikTokIcon className="w-5 h-5 text-muted" />
            <span className="text-sm text-muted">
              TikTok Agency Connect
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Documentation
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-muted/50">
          Built for TikTok Marketing API partners. All data shared with explicit user consent.
        </div>
      </div>
    </footer>
  );
}
