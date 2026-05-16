import { publicEnv } from "@/lib/env";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Instagram,
  type LucideIcon,
} from "lucide-react";

export type SocialLink = {
  name: string;
  url: string;
  icon: LucideIcon | "x" | "upwork" | "fiverr" | "freelancer";
  label: string;
};

export function getSocialLinks(): SocialLink[] {
  const s = publicEnv.socials;
  const links: SocialLink[] = [
    { name: "LinkedIn", url: s.linkedin, icon: Linkedin, label: "LinkedIn" },
    { name: "GitHub", url: s.github, icon: Github, label: "GitHub" },
    { name: "X", url: s.x, icon: "x", label: "X / Twitter" },
    { name: "Instagram", url: s.instagram, icon: Instagram, label: "Instagram" },
    { name: "WhatsApp", url: s.whatsapp, icon: MessageCircle, label: "WhatsApp" },
    { name: "Email", url: `mailto:${publicEnv.profile.email}`, icon: Mail, label: "Email" },
    { name: "Upwork", url: s.upwork, icon: "upwork", label: "Upwork" },
    { name: "Fiverr", url: s.fiverr, icon: "fiverr", label: "Fiverr" },
    { name: "Freelancer", url: s.freelancer, icon: "freelancer", label: "Freelancer" },
  ];
  return links.filter((l) => l.url && l.url.trim().length > 0);
}
