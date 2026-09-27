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
  theme?: 'light' | 'dark';
}

interface SocialItem {
  id: string;
  name: string;
  url: string;
  icon: React.FC<{ size?: number; className?: string }>;
  ariaLabel: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = 'flex items-center gap-2.5',
  iconSize,
  size = 16,
  showLabels = false,
  theme = 'light',
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

  const activeStyles =
    theme === 'dark'
      ? 'border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-blue-400 hover:bg-white/10'
      : 'border border-slate-200 bg-[#F8FAFC] text-slate-600 hover:text-[#1E3A8A] hover:border-[#1E3A8A] hover:bg-blue-50/50 shadow-xs';

  const disabledStyles =
    theme === 'dark'
      ? 'border border-white/5 bg-white/[0.02] text-slate-600'
      : 'border border-slate-100 bg-slate-50 text-slate-400';

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
              className={`p-2 rounded-lg transition-all duration-150 inline-flex items-center gap-2 text-xs font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] ${activeStyles}`}
            >
              <IconComponent size={resolvedSize} />
              {showLabels && <span>{item.name}</span>}
            </a>
          );
        }

        return (
          <span
            key={item.id}
            role="listitem"
            title={`${item.name} channel pending configuration`}
            aria-label={`${item.name} channel pending configuration`}
            className={`p-2 rounded-lg cursor-not-allowed inline-flex items-center gap-2 text-xs font-mono select-none ${disabledStyles}`}
          >
            <IconComponent size={resolvedSize} />
            {showLabels && <span className="opacity-50">{item.name}</span>}
          </span>
        );
      })}
    </div>
  );
};
