/**
 * NOXVION Central Contact & Social Media Configuration
 * 
 * Single source of truth for all public contact channels, email addresses,
 * telephone numbers, WhatsApp, physical locations, and social media profiles.
 *
 * All values default to clearly identifiable placeholders per specification
 * until real client-approved credentials or environment variables are provided.
 */

export interface ContactConfig {
  email: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  address: string;
  mapsUrl: string;
  formEndpoint?: string;
  newsletterEndpoint?: string;
  social: {
    linkedin: string;
    github: string;
    x: string;
    instagram: string;
    facebook: string;
    youtube: string;
  };
}

// Environment variables (Vite prefix VITE_) with fallback placeholders
const env = import.meta.env;

export const contactConfig: ContactConfig = {
  // Direct Communication
  email: env.VITE_CONTACT_EMAIL || 'noxvion.official@gmail.com',
  phone: env.VITE_CONTACT_PHONE || 'REPLACE_WITH_APPROVED_PHONE',
  phoneDisplay: env.VITE_CONTACT_PHONE_DISPLAY || 'REPLACE_WITH_APPROVED_PHONE',
  whatsappNumber: env.VITE_CONTACT_WHATSAPP || 'REPLACE_WITH_APPROVED_WHATSAPP_NUMBER',
  address: env.VITE_CONTACT_ADDRESS || 'REPLACE_WITH_APPROVED_ADDRESS',
  mapsUrl: env.VITE_MAPS_URL || '',

  // API Backend Endpoints (if server integration is deployed)
  formEndpoint: env.VITE_FORM_ENDPOINT || '',
  newsletterEndpoint: env.VITE_NEWSLETTER_ENDPOINT || '',

  // Social Media Profiles
  social: {
    linkedin: env.VITE_SOCIAL_LINKEDIN || 'https://www.linkedin.com/company/noxvion/',
    github: env.VITE_SOCIAL_GITHUB || 'https://github.com/noxvionofficial-dev',
    x: env.VITE_SOCIAL_X || 'REPLACE_WITH_APPROVED_X_URL',
    instagram: env.VITE_SOCIAL_INSTAGRAM || 'https://www.instagram.com/noxvion.official',
    facebook: env.VITE_SOCIAL_FACEBOOK || 'REPLACE_WITH_APPROVED_FACEBOOK_URL',
    youtube: env.VITE_SOCIAL_YOUTUBE || 'REPLACE_WITH_APPROVED_YOUTUBE_URL',
  },
};

/**
 * Check if a configuration item is active and not a placeholder
 */
export function isConfigured(value: string | undefined): boolean {
  if (!value) return false;
  const trimmed = value.trim();
  return trimmed.length > 0 && !trimmed.startsWith('REPLACE_WITH_');
}

/**
 * Generates a safe mailto: URI if the email address is configured
 */
export function getEmailHref(subject?: string, body?: string): string | undefined {
  if (!isConfigured(contactConfig.email)) return undefined;
  let href = `mailto:${contactConfig.email}`;
  const params: string[] = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  if (params.length > 0) {
    href += `?${params.join('&')}`;
  }
  return href;
}

/**
 * Generates a safe tel: URI if the phone number is configured
 */
export function getPhoneHref(): string | undefined {
  if (!isConfigured(contactConfig.phone)) return undefined;
  // Clean phone to digits and leading plus only
  const cleanNumber = contactConfig.phone.replace(/[^\d+]/g, '');
  return `tel:${cleanNumber}`;
}

/**
 * Generates a safe WhatsApp click-to-chat URL if configured
 */
export function getWhatsappHref(prefilledText?: string): string | undefined {
  if (!isConfigured(contactConfig.whatsappNumber)) return undefined;
  // WhatsApp format: digits only, no symbols
  const cleanDigits = contactConfig.whatsappNumber.replace(/\D/g, '');
  if (!cleanDigits) return undefined;
  let url = `https://wa.me/${cleanDigits}`;
  if (prefilledText) {
    url += `?text=${encodeURIComponent(prefilledText)}`;
  }
  return url;
}

/**
 * Generates a safe Google Maps search URL if address is configured
 */
export function getMapsHref(): string | undefined {
  if (isConfigured(contactConfig.mapsUrl)) {
    return contactConfig.mapsUrl;
  }
  if (isConfigured(contactConfig.address)) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactConfig.address)}`;
  }
  return undefined;
}
