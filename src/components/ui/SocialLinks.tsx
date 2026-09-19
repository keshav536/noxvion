import React from 'react';
import { contactConfig, isConfigured } from '../../config/contact';
import {
  LinkedInIcon,
  GitHubIcon,
  XIcon,
  InstagramIcon,
  YouTubeIcon,
} from './SocialIcons';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  size?: number;
  showLabels?: boolean;
}

interface SocialItem {
  id: string;
  name: string;
  url: string;
  icon: React.FC<{ size?: number; className?: string }>;
  ariaLabel: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = 'flex items-center gap-3',
  iconSize,
  size = 18,
  showLabels = false,
}) => {
  const resolvedSize = iconSize ?? size;
  const items: SocialItem[] = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: contactConfig.social.linkedin,
      icon: LinkedInIcon,
      ariaLabel: 'Visit our LinkedIn page',
    },
    {
      id: 'github',
      name: 'GitHub',
      url: contactConfig.social.github,
      icon: GitHubIcon,
      ariaLabel: 'Visit our GitHub organization',
    },
    {
      id: 'x',
      name: 'X',
      url: contactConfig.social.x,
      icon: XIcon,
      ariaLabel: 'Follow us on X',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      url: contactConfig.social.instagram,
      icon: InstagramIcon,
      ariaLabel: 'Follow us on Instagram',
    },
    {
      id: 'youtube',
      name: 'YouTube',
      url: contactConfig.social.youtube,
      icon: YouTubeIcon,
      ariaLabel: 'Subscribe to our YouTube channel',
    },
  ];

  return (
    <div className={className} role="list" aria-label="Social media profiles">
      {items.map((item) => {
        const configured = isConfigured(item.url);
        const IconComponent = item.icon;

        if (configured) {
          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.ariaLabel}
              role="listitem"
              className="p-2 rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black inline-flex items-center gap-2 text-xs font-mono"
            >
              <IconComponent size={resolvedSize} />
              {showLabels && <span>{item.name}</span>}
            </a>
          );
        }

        // Render disabled / pending configuration state safely without broken navigation
        return (
          <span
            key={item.id}
            role="listitem"
            title={`${item.name} channel pending configuration`}
            aria-label={`${item.name} channel pending configuration`}
            className="p-2 rounded-lg border border-white/[0.05] bg-white/[0.01] text-zinc-600 cursor-not-allowed inline-flex items-center gap-2 text-xs font-mono select-none"
          >
            <IconComponent size={resolvedSize} />
            {showLabels && <span className="opacity-50">{item.name}</span>}
          </span>
        );
      })}
    </div>
  );
};
