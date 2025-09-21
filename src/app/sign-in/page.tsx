
import { AuthDialog } from "@/components/auth/AuthDialog";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <AuthDialog openByDefault />
    </div>
  );
}