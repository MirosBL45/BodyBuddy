"use client";

import { useState, useRef } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function GenerateProgramPage() {
  const [callActive, setCallActive] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [callEnded, setCallEnded] = useState(false);

  const { user } = useUser();
  const router = useRouter();

  const messageContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div>GenerateProgramPage</div>
  )
}
