'use client';

import { useState, useRef, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { vapi } from '@/lib/vapi';

export default function GenerateProgramPage() {
  const [callActive, setCallActive] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [callEnded, setCallEnded] = useState(false);

  const { user } = useUser();
  const router = useRouter();

  const messageContainerRef = useRef<HTMLDivElement>(null);

  // setup event listeners for vapi
  useEffect(() => {
    const handleCallStart = () => {
      console.log('Call started');
      setConnecting(false);
      setCallActive(true);
      setCallEnded(false);
    };

    const handleCallEnd = () => {
      console.log('Call ended');
      setCallActive(false);
      setConnecting(false);
      setIsSpeaking(false);
      setCallEnded(true);
    };

    const handleSpeechStart = () => {
      console.log('AI started Speaking');
      setIsSpeaking(true);
    };

    const handleSpeechEnd = () => {
      console.log('AI stopped Speaking');
      setIsSpeaking(false);
    };
    const handleMessage = (message: any) => {
      if (message.type === 'transcript' && message.transcriptType === 'final') {
        const newMessage = { content: message.transcript, role: message.role };
        setMessages((prev) => [...prev, newMessage]);
      }
    };

    const handleError = (error: any) => {
      console.log('Vapi Error', error);
      setConnecting(false);
      setCallActive(false);
    };

    vapi
      .on('call-start', handleCallStart)
      .on('call-end', handleCallEnd)
      .on('speech-start', handleSpeechStart)
      .on('speech-end', handleSpeechEnd)
      .on('message', handleMessage)
      .on('error', handleError);

    // cleanup event listeners on unmount
    return () => {
      vapi
        .off('call-start', handleCallStart)
        .off('call-end', handleCallEnd)
        .off('speech-start', handleSpeechStart)
        .off('speech-end', handleSpeechEnd)
        .off('message', handleMessage)
        .off('error', handleError);
    };
  }, []);

  return <div>GenerateProgramPage</div>;
}
