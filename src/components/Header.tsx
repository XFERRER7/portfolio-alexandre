import type { SocialLink } from '@/types';

interface HeaderProps {
  socialLinks: SocialLink[];
}

export default function Header({ socialLinks }: HeaderProps) {
  return (
    <header>
      <div className="left">
        <h1>Alexandre Talles</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="box-icons">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.link}
            target="_blank"
            aria-label={social.label}
            rel="noreferrer"
          >
            <i className={social.icon} />
          </a>
        ))}
      </div>
    </header>
  );
}
