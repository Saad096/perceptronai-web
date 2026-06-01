/**
 * Public, browser-safe env helpers. All values originate from NEXT_PUBLIC_* env
 * variables so they can be inlined at build time. Missing values fall back to
 * sensible defaults so the UI never breaks.
 */

const pick = (v: string | undefined, fallback = "") => (v && v.trim().length > 0 ? v : fallback);

export const publicEnv = {
  siteUrl: pick(process.env.NEXT_PUBLIC_SITE_URL, "https://qentrixai.com"),
  siteName: pick(process.env.NEXT_PUBLIC_SITE_NAME, "QentrixAI"),

  profile: {
    name: pick(process.env.NEXT_PUBLIC_PROFILE_NAME, "Saad Alam"),
    role: pick(
      process.env.NEXT_PUBLIC_PROFILE_ROLE,
      "AI & Data Science Consultant | GenAI & Agentic AI Specialist"
    ),
    tagline: pick(
      process.env.NEXT_PUBLIC_PROFILE_TAGLINE,
      "Transforming Ideas into Intelligent Solutions with Production-Ready AI"
    ),
    email: pick(process.env.NEXT_PUBLIC_PROFILE_EMAIL, "saadalamtrohli106@gmail.com"),
    phone: pick(process.env.NEXT_PUBLIC_PROFILE_PHONE, "+923196828506"),
    location: pick(process.env.NEXT_PUBLIC_PROFILE_LOCATION, "Lahore, Pakistan"),
    availability: pick(
      process.env.NEXT_PUBLIC_PROFILE_AVAILABILITY,
      "Open for Projects, Ideas & Remote Positions"
    ),
    resumeUrl: pick(process.env.NEXT_PUBLIC_PROFILE_RESUME_URL, "/api/resume"),
  },

  socials: {
    linkedin: pick(
      process.env.NEXT_PUBLIC_PROFILE_LINKEDIN,
      "https://www.linkedin.com/in/saad-alam-b9a304217/"
    ),
    upwork: pick(
      process.env.NEXT_PUBLIC_PROFILE_UPWORK,
      "https://www.upwork.com/freelancers/~016509a74d546ffb23"
    ),
    fiverr: pick(process.env.NEXT_PUBLIC_PROFILE_FIVERR, "https://www.fiverr.com/saadalam340"),
    freelancer: pick(
      process.env.NEXT_PUBLIC_PROFILE_FREELANCER,
      "https://www.freelancer.com/u/SaadAlam106"
    ),
    github: pick(process.env.NEXT_PUBLIC_PROFILE_GITHUB, "https://github.com/Saad096"),
    whatsapp: pick(process.env.NEXT_PUBLIC_PROFILE_WHATSAPP, "https://wa.me/923196828506"),
    x: pick(process.env.NEXT_PUBLIC_PROFILE_X, "https://x.com/Saad_Alam106"),
    instagram: pick(
      process.env.NEXT_PUBLIC_PROFILE_INSTAGRAM,
      "https://www.instagram.com/saadalam9657"
    ),
  },

  calendar: {
    primary: pick(process.env.NEXT_PUBLIC_CALENDAR_URL, ""),
    calendly: pick(process.env.NEXT_PUBLIC_CALENDLY_URL, ""),
    calcom: pick(process.env.NEXT_PUBLIC_CALCOM_URL, ""),
  },

  team: {
    shahidLinkedIn: pick(process.env.NEXT_PUBLIC_TEAM_SHAHID_LINKEDIN, ""),
    saadLinkedIn: pick(
      process.env.NEXT_PUBLIC_TEAM_SAAD_LINKEDIN,
      "https://www.linkedin.com/in/saad-alam-b9a304217/"
    ),
    shafaatLinkedIn: pick(process.env.NEXT_PUBLIC_TEAM_SHAFAAT_LINKEDIN, ""),
    mawraLinkedIn: pick(process.env.NEXT_PUBLIC_TEAM_MAWRA_LINKEDIN, ""),
  },

  analytics: {
    plausibleDomain: pick(process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN, ""),
    gaId: pick(process.env.NEXT_PUBLIC_GA_ID, ""),
  },
};

/**
 * Returns the first non-empty calendar URL, or falls back to /contact.
 */
export function getBookingUrl(): string {
  const { primary, calendly, calcom } = publicEnv.calendar;
  return primary || calendly || calcom || "/contact";
}

export type PublicEnv = typeof publicEnv;
