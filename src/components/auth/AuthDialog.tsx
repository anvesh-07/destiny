"use client";
import { useState, useId, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import Cookies from 'js-cookie';

type AuthDialogProps = {
  triggerClassName?: string;
  openByDefault?: boolean;
};

function AuthDialog({
  triggerClassName,
  openByDefault = false,
}: AuthDialogProps) {
  const router = useRouter();
  const id = useId();
  const [open, setOpen] = useState(openByDefault);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen && openByDefault) {
      router.back();
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("User is signed in:", user);
        const token = await user.getIdToken();
        Cookies.set('firebase-auth-token', token, { expires: 7 }); // Set cookie for 7 days
        setOpen(false);
        router.push("/");
      } else {
        console.log("User is signed out");
        Cookies.remove('firebase-auth-token'); // Remove cookie on sign out
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleEmailPasswordAuth = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {!openByDefault && (
        <DialogTrigger asChild>
          <Button
            size="sm"
            className={
              triggerClassName ??
              "bg-[#6D28D9] hover:bg-[#6D28D9]/90 text-white"
            }
          >
            Login
          </Button>
        </DialogTrigger>
      )}

      <DialogOverlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

      <DialogContent>
        <div className="flex flex-col items-center gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
            aria-hidden="true"
          >
            <div
              className="w-8 h-8 bg-gradient-to-br from-[#6D28D9] to-[#2563EB] rounded-lg flex items-center justify-center cursor-pointer"
              onClick={() => router.push("/")}
            >
              <Globe className="h-5 w-5 text-white" />
            </div>
          </div>
          <DialogHeader>
            <DialogTitle className="sm:text-center">
              Login to Origin UI
            </DialogTitle>
            <DialogDescription className="sm:text-center">
              Enter your credentials to access your account.
            </DialogDescription>
          </DialogHeader>
        </div>

        {error && (
          <p className="text-center text-sm text-red-500">{error}</p>
        )}

        <form className="space-y-5" onSubmit={handleEmailPasswordAuth}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`${id}-email`}>Email</Label>
              <Input
                id={`${id}-email`}
                placeholder="you@example.com"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${id}-password`}>Password</Label>
              <Input
                id={`${id}-password`}
                placeholder="Enter your password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => alert("Forgot password flow here")}
                  className="text-xs text-[#2863d9] hover:underline"
                >
                  Forgot password?
                </button>
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-[#6D28D9] hover:bg-[#6D28D9]/90 text-white"
          >
            Login
          </Button>
        </form>

        <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
          <span className="text-xs text-muted-foreground">Or</span>
        </div>

        <Button variant="outline" onClick={handleGoogleSignIn}>
          Continue with Google
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          Don’t have an account?{" "}
          <Link href="/sign-up" className="underline hover:no-underline">
            Sign up
          </Link>
        </p>
      </DialogContent>
    </Dialog>
  );
}

export { AuthDialog };