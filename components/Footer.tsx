import { EmailIcon, GithubIcon } from '@/icons'

export default function Footer() {
  return (
    <footer className="bg-navy border-lightest-navy border-t py-12">
      <div className="mx-auto max-w-4xl space-y-4 px-6">
        {/* Built with */}
        <p className="text-slate text-center font-mono text-sm">
          Built with Next.js & TailwindCSS
        </p>
        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="mailto:lucienengineerlife@gmail.com"
            className="text-slate hover:text-green transition-colors"
            aria-label="Email"
            target="_blank"
          >
            <EmailIcon className="size-6" />
          </a>
          <a
            href="https://github.com/Lucien-MHL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-green transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="size-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}
