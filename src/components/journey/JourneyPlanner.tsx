'use client';
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function JourneyPlanner() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // The onAuthStateChanged listener in your auth components will handle cookie removal
      router.push("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const handleJourneySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the journey submission here
    alert(`Planning journey from ${from} to ${to}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Plan Your Journey</h1>
        <form onSubmit={handleJourneySubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="from">From</Label>
            <Input
              id="from"
              type="text"
              placeholder="Starting location"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="to">To</Label>
            <Input
              id="to"
              type="text"
              placeholder="Destination"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-[#6D28D9] hover:bg-[#6D28D9]/90 text-white">
            Plan Journey
          </Button>
        </form>
      </div>
      <div className="mt-4">
        <Button onClick={handleSignOut} variant="outline">
          Sign Out
        </Button>
      </div>
    </div>
  );
}
