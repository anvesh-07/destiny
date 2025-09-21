import { SignUpDialog } from "@/components/auth/SignUpDialog";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignUpDialog openByDefault />
    </div>
  );
}
