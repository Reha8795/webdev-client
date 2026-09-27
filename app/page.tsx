import { redirect } from "next/navigation";

// "/" redirects to the Kambaz sign-in screen (§1.4.2)
export default function Home() {
  redirect("/account/signin");
}
