// components/SocialIcons.tsx
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Download } from "lucide-react";

export default function SocialIcons() {
    return (
      <div className="flex gap-2">
            <a
                href="https://github.com/JarvisNguyen0804"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-neutral-800 transition-all"
            >
                <Github className="w-6 h-6 text-neutral-300 hover:text-white" />
            </a>

            <a
                href="https://github.com/JarvisNguyen0804"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-neutral-800 transition-all"
            >
                <Linkedin className="w-6 h-6 text-neutral-300 hover:text-white" />
            </a>

            <a
                href="/JARVIS_NGUYEN_Resume.pdf"
                download
                title="Download my resume"
                className="p-2 rounded-full hover:bg-neutral-800 transition-all"
            >
                <Download className="w-6 h-6 text-neutral-300 hover:text-white" />
            </a>
      </div>
    );
  }
  