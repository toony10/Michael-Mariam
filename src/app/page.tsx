"use client";
import { useState } from "react";
import Envelope from "@/components/Envelope";
import Invitation from "@/components/Invitation";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="min-h-screen bg-[#f5f0e8] overflow-x-hidden">
      { !opened ? (
        <Envelope onOpen={ () => setOpened(true) } />
      ) : (
        <Invitation />
      ) }
    </main>
  );
}
