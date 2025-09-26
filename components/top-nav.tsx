import { Phone, Mail, Facebook, Instagram, } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

export function TopNav() {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61579023196710"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="https://www.instagram.com/7eleveneducationconsultancy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://www.tiktok.com/@7eleveneduconsultancy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            <FaTiktok className="h-4 w-4" />
          </a>
        </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>info@7eleveneduconsultancy.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>    +977-1-5929711 </span>
            <span>,</span>
            <span> +977-9764774577 </span>
          </div>
      </div>
    </div>
  )
}
