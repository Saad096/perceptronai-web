import { redirect } from "next/navigation";

/**
 * The team page/tab is hidden from the frontend (nav, footer, homepage,
 * about page). This route redirects any direct or bookmarked visit back
 * home instead of exposing member profiles.
 */
export default function TeamPage() {
  redirect("/");
}
