import { SignInButton, SignOutButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div>HomePage
      <SignOutButton />
      <SignInButton />
    </div>
  )
}
