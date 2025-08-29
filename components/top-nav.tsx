import { Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"

export function TopNav() {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+977-1-4567890</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>info@7eleveneducation.com</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com/7eleveneducation"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="https://instagram.com/7eleveneducation"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://twitter.com/7eleveneducation"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            <Twitter className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
