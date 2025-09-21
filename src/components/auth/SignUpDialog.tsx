"use client";
import { useState, useId } from "react";
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

type SignUpDialogProps = {
  triggerClassName?: string;
  openByDefault?: boolean;
};

function SignUpDialog({ triggerClassName, openByDefault = false }: SignUpDialogProps) {
  const router = useRouter();
  const id = useId();
  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [open, setOpen] = useState(openByDefault);

  const isLogin = mode === "login";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Trigger Button (hide if openByDefault) */}
      {!openByDefault && (
        <DialogTrigger asChild>
          <Button
            size="sm"
            className={
              triggerClassName ??
              "bg-[#6D28D9] hover:bg-[#6D28D9]/90 text-white"
            }
          >
            {isLogin ? "Login" : "Sign up"}
          </Button>
        </DialogTrigger>
      )}

      {/* Custom Overlay with Blur */}
      <DialogOverlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Dialog Content */}
      <DialogContent>
        <div className="flex flex-col items-center gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
            aria-hidden="true"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-[#6D28D9] to-[#2563EB] rounded-lg flex items-center justify-center"
            onClick={() => router.push('/')}
            >
              <Globe className="h-5 w-5 text-white" />
            </div>
          </div>
          <DialogHeader>
            <DialogTitle className="sm:text-center">
              {isLogin ? "Login" : "Sign up"} to Origin UI
            </DialogTitle>
            <DialogDescription className="sm:text-center">
              {isLogin
                ? "Enter your credentials to access your account."
                : "We just need a few details to get you started."}
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor={`${id}-name`}>Full name</Label>
                <Input
                  id={`${id}-name`}
                  placeholder="Matt Welsh"
                  type="text"
                  required
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor={`${id}-email`}>Email</Label>
              <Input
                id={`${id}-email`}
                placeholder="you@example.com"
                type="email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${id}-password`}>Password</Label>
              <Input
                id={`${id}-password`}
                placeholder="Enter your password"
                type="password"
                required
              />
              {isLogin && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => alert("Forgot password flow here")}
                    className="text-xs text-[#2863d9] hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
              )}
            </div>
          </div>
          <Button type="submit" className="w-full bg-[#6D28D9] hover:bg-[#6D28D9]/90 text-white">
            {isLogin ? "Login" : "Sign up"}
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
          <span className="text-xs text-muted-foreground">Or</span>
        </div>

        <Button variant="outline">Continue with Google</Button>

        {/* Footer Toggle */}
        <p className="text-center text-xs text-muted-foreground">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("signup")}
                className="underline hover:no-underline"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("login")}
                className="underline hover:no-underline "
              >
                Login
              </button>
            </>
          )}
        </p>
      </DialogContent>
    </Dialog>
  );
}

export { SignUpDialog };
