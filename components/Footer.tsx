'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('success');

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      setMessageType('success');
      setMessage("✓ You're subscribed — welcome to 22 Apartments!");
      setEmail('');
    } else {
      setMessageType('error');
      setMessage('Please enter a valid email address.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div className="mt-20">

      {/* ── Animated Skyline Divider ── */}
      <div className="w-full overflow-hidden leading-none mb-[-2px] bg-[#f9f5ee]">
        <svg
          viewBox="0 0 1200 200"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full h-[160px] md:h-[200px]"
        >
          <style>{`
            @keyframes float-a {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-3px); }
            }
            @keyframes float-b {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-3px); }
            }
            @keyframes float-c {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-3px); }
            }
            @keyframes twinkle {
              0%, 100% { opacity: 0.9; }
              50% { opacity: 0.2; }
            }
            .bg-a { animation: float-a 5s ease-in-out infinite; }
            .bg-b { animation: float-b 5s ease-in-out infinite; animation-delay: -1.5s; }
            .bg-c { animation: float-c 5s ease-in-out infinite; animation-delay: -3s; }
            .w0 { animation: twinkle 3.0s ease-in-out infinite; }
            .w1 { animation: twinkle 3.0s ease-in-out infinite; animation-delay: -0.4s; }
            .w2 { animation: twinkle 3.0s ease-in-out infinite; animation-delay: -0.8s; }
            .w3 { animation: twinkle 3.0s ease-in-out infinite; animation-delay: -1.2s; }
            .w4 { animation: twinkle 3.0s ease-in-out infinite; animation-delay: -1.6s; }
            .w5 { animation: twinkle 3.0s ease-in-out infinite; animation-delay: -2.0s; }
            .w6 { animation: twinkle 3.0s ease-in-out infinite; animation-delay: -2.4s; }
          `}</style>

          {/* ── Group A ── */}
          <g className="bg-a">
            {/* Thin tower */}
            <rect x="30" y="100" width="40" height="100" fill="#1a1a1a"/>
            <rect x="35" y="85" width="30" height="20" fill="#1a1a1a"/>
            <rect x="42" y="75" width="16" height="15" fill="#1a1a1a"/>
            <rect x="33" y="110" width="6" height="5" fill="#cca752" className="w0"/>
            <rect x="43" y="110" width="6" height="5" fill="#cca752" className="w2"/>
            <rect x="55" y="110" width="6" height="5" fill="#cca752" className="w4"/>
            <rect x="33" y="125" width="6" height="5" fill="#cca752" className="w1"/>
            <rect x="43" y="125" width="6" height="5" fill="#cca752" className="w5"/>
            <rect x="55" y="125" width="6" height="5" fill="#cca752" className="w3"/>
            <rect x="33" y="140" width="6" height="5" fill="#cca752" className="w6"/>
            <rect x="55" y="140" width="6" height="5" fill="#cca752" className="w2"/>
            {/* Wide block */}
            <rect x="80" y="120" width="55" height="80" fill="#1a1a1a"/>
            <rect x="90" y="130" width="8" height="6" fill="#cca752" className="w3"/>
            <rect x="104" y="130" width="8" height="6" fill="#cca752" className="w1"/>
            <rect x="118" y="130" width="8" height="6" fill="#cca752" className="w5"/>
            <rect x="90" y="144" width="8" height="6" fill="#cca752" className="w0"/>
            <rect x="104" y="144" width="8" height="6" fill="#cca752" className="w6"/>
            <rect x="118" y="144" width="8" height="6" fill="#cca752" className="w2"/>
            <rect x="90" y="158" width="8" height="6" fill="#cca752" className="w4"/>
            <rect x="118" y="158" width="8" height="6" fill="#cca752" className="w1"/>
            {/* Tall spire */}
            <rect x="145" y="70" width="35" height="130" fill="#222"/>
            <rect x="152" y="55" width="21" height="20" fill="#222"/>
            <rect x="159" y="48" width="7" height="10" fill="#222"/>
            <line x1="162" y1="42" x2="162" y2="33" stroke="#cca752" strokeWidth="1.5" opacity="0.7"/>
            <rect x="148" y="80" width="6" height="4" fill="#cca752" className="w2"/>
            <rect x="159" y="80" width="6" height="4" fill="#cca752" className="w5"/>
            <rect x="170" y="80" width="6" height="4" fill="#cca752" className="w1"/>
            <rect x="148" y="92" width="6" height="4" fill="#cca752" className="w4"/>
            <rect x="159" y="92" width="6" height="4" fill="#cca752" className="w0"/>
            <rect x="170" y="92" width="6" height="4" fill="#cca752" className="w6"/>
            <rect x="148" y="104" width="6" height="4" fill="#cca752" className="w3"/>
            <rect x="159" y="104" width="6" height="4" fill="#cca752" className="w2"/>
            <rect x="170" y="104" width="6" height="4" fill="#cca752" className="w5"/>
            <rect x="148" y="116" width="6" height="4" fill="#cca752" className="w1"/>
            <rect x="170" y="116" width="6" height="4" fill="#cca752" className="w4"/>
            <rect x="148" y="128" width="6" height="4" fill="#cca752" className="w6"/>
            <rect x="159" y="128" width="6" height="4" fill="#cca752" className="w0"/>
            {/* Small block */}
            <rect x="188" y="130" width="28" height="70" fill="#1c1c1c"/>
            <rect x="191" y="140" width="5" height="4" fill="#cca752" className="w3"/>
            <rect x="200" y="140" width="5" height="4" fill="#cca752" className="w1"/>
            <rect x="209" y="140" width="5" height="4" fill="#cca752" className="w5"/>
            <rect x="191" y="152" width="5" height="4" fill="#cca752" className="w6"/>
            <rect x="209" y="152" width="5" height="4" fill="#cca752" className="w2"/>
            {/* Gabled tower */}
            <rect x="225" y="90" width="50" height="110" fill="#1a1a1a"/>
            <polygon points="225,90 250,65 275,90" fill="#1a1a1a"/>
            <line x1="250" y1="65" x2="250" y2="52" stroke="#cca752" strokeWidth="1.5" opacity="0.7"/>
            <rect x="230" y="100" width="7" height="5" fill="#cca752" className="w0"/>
            <rect x="243" y="100" width="7" height="5" fill="#cca752" className="w4"/>
            <rect x="258" y="100" width="7" height="5" fill="#cca752" className="w2"/>
            <rect x="230" y="115" width="7" height="5" fill="#cca752" className="w6"/>
            <rect x="243" y="115" width="7" height="5" fill="#cca752" className="w1"/>
            <rect x="258" y="115" width="7" height="5" fill="#cca752" className="w5"/>
            <rect x="230" y="130" width="7" height="5" fill="#cca752" className="w3"/>
            <rect x="258" y="130" width="7" height="5" fill="#cca752" className="w0"/>
            <rect x="243" y="145" width="7" height="5" fill="#cca752" className="w2"/>
          </g>

          {/* ── Group B ── */}
          <g className="bg-b">
            <rect x="285" y="110" width="38" height="90" fill="#202020"/>
            <rect x="300" y="100" width="8" height="15" fill="#202020"/>
            <rect x="290" y="120" width="6" height="4" fill="#cca752" className="w1"/>
            <rect x="302" y="120" width="6" height="4" fill="#cca752" className="w4"/>
            <rect x="313" y="120" width="6" height="4" fill="#cca752" className="w0"/>
            <rect x="290" y="133" width="6" height="4" fill="#cca752" className="w6"/>
            <rect x="313" y="133" width="6" height="4" fill="#cca752" className="w2"/>
            <rect x="290" y="146" width="6" height="4" fill="#cca752" className="w5"/>
            <rect x="302" y="146" width="6" height="4" fill="#cca752" className="w3"/>
            {/* Needle tower */}
            <rect x="335" y="80" width="25" height="120" fill="#1a1a1a"/>
            <rect x="338" y="68" width="19" height="16" fill="#1a1a1a"/>
            <rect x="343" y="58" width="9" height="14" fill="#1a1a1a"/>
            <rect x="338" y="90" width="5" height="4" fill="#cca752" className="w2"/>
            <rect x="348" y="90" width="5" height="4" fill="#cca752" className="w5"/>
            <rect x="338" y="102" width="5" height="4" fill="#cca752" className="w0"/>
            <rect x="348" y="102" width="5" height="4" fill="#cca752" className="w3"/>
            <rect x="338" y="114" width="5" height="4" fill="#cca752" className="w6"/>
            <rect x="348" y="114" width="5" height="4" fill="#cca752" className="w1"/>
            <rect x="338" y="126" width="5" height="4" fill="#cca752" className="w4"/>
            <rect x="348" y="138" width="5" height="4" fill="#cca752" className="w2"/>
            {/* Flat block */}
            <rect x="370" y="105" width="45" height="95" fill="#1e1e1e"/>
            <rect x="375" y="115" width="7" height="5" fill="#cca752" className="w3"/>
            <rect x="387" y="115" width="7" height="5" fill="#cca752" className="w0"/>
            <rect x="399" y="115" width="7" height="5" fill="#cca752" className="w5"/>
            <rect x="375" y="129" width="7" height="5" fill="#cca752" className="w1"/>
            <rect x="387" y="129" width="7" height="5" fill="#cca752" className="w6"/>
            <rect x="399" y="129" width="7" height="5" fill="#cca752" className="w2"/>
            <rect x="375" y="143" width="7" height="5" fill="#cca752" className="w4"/>
            <rect x="399" y="143" width="7" height="5" fill="#cca752" className="w0"/>
            {/* Beacon tower */}
            <rect x="425" y="60" width="30" height="140" fill="#1a1a1a"/>
            <rect x="430" y="48" width="20" height="16" fill="#1a1a1a"/>
            <rect x="436" y="38" width="8" height="14" fill="#1a1a1a"/>
            <line x1="440" y1="32" x2="440" y2="22" stroke="#cca752" strokeWidth="1.5" opacity="0.8"/>
            <circle cx="440" cy="22" r="2" fill="#cca752" opacity="0.9"/>
            <rect x="428" y="70" width="5" height="4" fill="#cca752" className="w5"/>
            <rect x="437" y="70" width="5" height="4" fill="#cca752" className="w2"/>
            <rect x="446" y="70" width="5" height="4" fill="#cca752" className="w0"/>
            <rect x="428" y="82" width="5" height="4" fill="#cca752" className="w3"/>
            <rect x="437" y="82" width="5" height="4" fill="#cca752" className="w6"/>
            <rect x="428" y="94" width="5" height="4" fill="#cca752" className="w1"/>
            <rect x="446" y="94" width="5" height="4" fill="#cca752" className="w4"/>
            <rect x="428" y="106" width="5" height="4" fill="#cca752" className="w2"/>
            <rect x="437" y="106" width="5" height="4" fill="#cca752" className="w5"/>
            <rect x="446" y="106" width="5" height="4" fill="#cca752" className="w3"/>
            <rect x="428" y="118" width="5" height="4" fill="#cca752" className="w0"/>
            <rect x="446" y="118" width="5" height="4" fill="#cca752" className="w6"/>
            {/* Peaked block */}
            <rect x="465" y="95" width="40" height="105" fill="#202020"/>
            <polygon points="465,95 485,75 505,95" fill="#202020"/>
            <rect x="470" y="105" width="6" height="4" fill="#cca752" className="w1"/>
            <rect x="481" y="105" width="6" height="4" fill="#cca752" className="w4"/>
            <rect x="492" y="105" width="6" height="4" fill="#cca752" className="w2"/>
            <rect x="470" y="118" width="6" height="4" fill="#cca752" className="w6"/>
            <rect x="492" y="118" width="6" height="4" fill="#cca752" className="w0"/>
            <rect x="481" y="131" width="6" height="4" fill="#cca752" className="w3"/>
            {/* Squat block */}
            <rect x="515" y="115" width="32" height="85" fill="#1a1a1a"/>
            <rect x="518" y="125" width="5" height="4" fill="#cca752" className="w5"/>
            <rect x="528" y="125" width="5" height="4" fill="#cca752" className="w1"/>
            <rect x="538" y="125" width="5" height="4" fill="#cca752" className="w3"/>
            <rect x="518" y="138" width="5" height="4" fill="#cca752" className="w0"/>
            <rect x="538" y="138" width="5" height="4" fill="#cca752" className="w6"/>
          </g>

          {/* ── Group C ── */}
          <g className="bg-c">
            {/* Tall HQ block */}
            <rect x="555" y="75" width="48" height="125" fill="#1e1e1e"/>
            <rect x="562" y="62" width="34" height="17" fill="#1e1e1e"/>
            <rect x="571" y="50" width="16" height="16" fill="#1e1e1e"/>
            <rect x="577" y="42" width="4" height="12" fill="#1e1e1e"/>
            <line x1="579" y1="36" x2="579" y2="26" stroke="#cca752" strokeWidth="1.5" opacity="0.7"/>
            <rect x="558" y="85" width="7" height="5" fill="#cca752" className="w2"/>
            <rect x="570" y="85" width="7" height="5" fill="#cca752" className="w5"/>
            <rect x="582" y="85" width="7" height="5" fill="#cca752" className="w0"/>
            <rect x="594" y="85" width="7" height="5" fill="#cca752" className="w3"/>
            <rect x="558" y="98" width="7" height="5" fill="#cca752" className="w6"/>
            <rect x="570" y="98" width="7" height="5" fill="#cca752" className="w1"/>
            <rect x="594" y="98" width="7" height="5" fill="#cca752" className="w4"/>
            <rect x="558" y="111" width="7" height="5" fill="#cca752" className="w2"/>
            <rect x="582" y="111" width="7" height="5" fill="#cca752" className="w0"/>
            <rect x="594" y="111" width="7" height="5" fill="#cca752" className="w5"/>
            <rect x="558" y="124" width="7" height="5" fill="#cca752" className="w3"/>
            <rect x="570" y="124" width="7" height="5" fill="#cca752" className="w6"/>
            <rect x="594" y="124" width="7" height="5" fill="#cca752" className="w1"/>
            <rect x="558" y="137" width="7" height="5" fill="#cca752" className="w4"/>
            <rect x="582" y="137" width="7" height="5" fill="#cca752" className="w2"/>
            {/* Medium block */}
            <rect x="613" y="100" width="35" height="100" fill="#1a1a1a"/>
            <rect x="616" y="112" width="6" height="4" fill="#cca752" className="w0"/>
            <rect x="627" y="112" width="6" height="4" fill="#cca752" className="w3"/>
            <rect x="638" y="112" width="6" height="4" fill="#cca752" className="w6"/>
            <rect x="616" y="125" width="6" height="4" fill="#cca752" className="w2"/>
            <rect x="638" y="125" width="6" height="4" fill="#cca752" className="w5"/>
            <rect x="616" y="138" width="6" height="4" fill="#cca752" className="w1"/>
            <rect x="627" y="138" width="6" height="4" fill="#cca752" className="w4"/>
            {/* Narrow spire */}
            <rect x="658" y="85" width="28" height="115" fill="#222"/>
            <rect x="663" y="73" width="18" height="16" fill="#222"/>
            <rect x="669" y="63" width="6" height="14" fill="#222"/>
            <rect x="661" y="95" width="5" height="4" fill="#cca752" className="w3"/>
            <rect x="671" y="95" width="5" height="4" fill="#cca752" className="w0"/>
            <rect x="681" y="95" width="5" height="4" fill="#cca752" className="w6"/>
            <rect x="661" y="107" width="5" height="4" fill="#cca752" className="w5"/>
            <rect x="681" y="107" width="5" height="4" fill="#cca752" className="w1"/>
            <rect x="661" y="119" width="5" height="4" fill="#cca752" className="w2"/>
            <rect x="671" y="119" width="5" height="4" fill="#cca752" className="w4"/>
            <rect x="681" y="131" width="5" height="4" fill="#cca752" className="w0"/>
            {/* Short block */}
            <rect x="695" y="120" width="42" height="80" fill="#1c1c1c"/>
            <rect x="698" y="130" width="7" height="5" fill="#cca752" className="w6"/>
            <rect x="710" y="130" width="7" height="5" fill="#cca752" className="w2"/>
            <rect x="722" y="130" width="7" height="5" fill="#cca752" className="w4"/>
            <rect x="698" y="144" width="7" height="5" fill="#cca752" className="w1"/>
            <rect x="722" y="144" width="7" height="5" fill="#cca752" className="w3"/>
            {/* Beacon high-rise */}
            <rect x="748" y="65" width="38" height="135" fill="#1a1a1a"/>
            <rect x="755" y="50" width="24" height="19" fill="#1a1a1a"/>
            <rect x="762" y="38" width="10" height="16" fill="#1a1a1a"/>
            <line x1="767" y1="32" x2="767" y2="18" stroke="#cca752" strokeWidth="2" opacity="0.8"/>
            <circle cx="767" cy="18" r="2.5" fill="#cca752" opacity="1"/>
            <rect x="751" y="75" width="6" height="4" fill="#cca752" className="w0"/>
            <rect x="762" y="75" width="6" height="4" fill="#cca752" className="w3"/>
            <rect x="773" y="75" width="6" height="4" fill="#cca752" className="w6"/>
            <rect x="751" y="87" width="6" height="4" fill="#cca752" className="w2"/>
            <rect x="773" y="87" width="6" height="4" fill="#cca752" className="w5"/>
            <rect x="751" y="99" width="6" height="4" fill="#cca752" className="w1"/>
            <rect x="762" y="99" width="6" height="4" fill="#cca752" className="w4"/>
            <rect x="773" y="99" width="6" height="4" fill="#cca752" className="w0"/>
            <rect x="751" y="111" width="6" height="4" fill="#cca752" className="w6"/>
            <rect x="762" y="111" width="6" height="4" fill="#cca752" className="w3"/>
            <rect x="751" y="123" width="6" height="4" fill="#cca752" className="w2"/>
            <rect x="773" y="123" width="6" height="4" fill="#cca752" className="w5"/>
            {/* Peaked block */}
            <rect x="796" y="100" width="30" height="100" fill="#202020"/>
            <polygon points="796,100 811,82 826,100" fill="#202020"/>
            <rect x="800" y="110" width="5" height="4" fill="#cca752" className="w1"/>
            <rect x="810" y="110" width="5" height="4" fill="#cca752" className="w4"/>
            <rect x="820" y="110" width="5" height="4" fill="#cca752" className="w0"/>
            <rect x="800" y="123" width="5" height="4" fill="#cca752" className="w6"/>
            <rect x="820" y="123" width="5" height="4" fill="#cca752" className="w2"/>
            {/* Wide block */}
            <rect x="836" y="80" width="45" height="120" fill="#1e1e1e"/>
            <rect x="843" y="68" width="31" height="16" fill="#1e1e1e"/>
            <rect x="851" y="56" width="15" height="16" fill="#1e1e1e"/>
            <rect x="840" y="90" width="7" height="5" fill="#cca752" className="w3"/>
            <rect x="852" y="90" width="7" height="5" fill="#cca752" className="w0"/>
            <rect x="864" y="90" width="7" height="5" fill="#cca752" className="w5"/>
            <rect x="876" y="90" width="7" height="5" fill="#cca752" className="w2"/>
            <rect x="840" y="103" width="7" height="5" fill="#cca752" className="w1"/>
            <rect x="864" y="103" width="7" height="5" fill="#cca752" className="w6"/>
            <rect x="876" y="103" width="7" height="5" fill="#cca752" className="w4"/>
            <rect x="840" y="116" width="7" height="5" fill="#cca752" className="w2"/>
            <rect x="852" y="116" width="7" height="5" fill="#cca752" className="w3"/>
            <rect x="876" y="116" width="7" height="5" fill="#cca752" className="w0"/>
            <rect x="840" y="129" width="7" height="5" fill="#cca752" className="w5"/>
            <rect x="864" y="129" width="7" height="5" fill="#cca752" className="w1"/>
            {/* Small block */}
            <rect x="890" y="115" width="35" height="85" fill="#1a1a1a"/>
            <rect x="894" y="125" width="6" height="4" fill="#cca752" className="w4"/>
            <rect x="905" y="125" width="6" height="4" fill="#cca752" className="w0"/>
            <rect x="916" y="125" width="6" height="4" fill="#cca752" className="w6"/>
            <rect x="894" y="138" width="6" height="4" fill="#cca752" className="w2"/>
            <rect x="916" y="138" width="6" height="4" fill="#cca752" className="w5"/>
            {/* Narrow block */}
            <rect x="936" y="90" width="32" height="110" fill="#222"/>
            <rect x="940" y="78" width="24" height="16" fill="#222"/>
            <rect x="939" y="100" width="5" height="4" fill="#cca752" className="w1"/>
            <rect x="949" y="100" width="5" height="4" fill="#cca752" className="w3"/>
            <rect x="959" y="100" width="5" height="4" fill="#cca752" className="w6"/>
            <rect x="939" y="113" width="5" height="4" fill="#cca752" className="w0"/>
            <rect x="959" y="113" width="5" height="4" fill="#cca752" className="w4"/>
            <rect x="939" y="126" width="5" height="4" fill="#cca752" className="w2"/>
            <rect x="949" y="139" width="5" height="4" fill="#cca752" className="w5"/>
            {/* Right block */}
            <rect x="978" y="105" width="40" height="95" fill="#1c1c1c"/>
            <rect x="983" y="115" width="7" height="5" fill="#cca752" className="w0"/>
            <rect x="995" y="115" width="7" height="5" fill="#cca752" className="w3"/>
            <rect x="1007" y="115" width="7" height="5" fill="#cca752" className="w6"/>
            <rect x="983" y="128" width="7" height="5" fill="#cca752" className="w2"/>
            <rect x="1007" y="128" width="7" height="5" fill="#cca752" className="w5"/>
            <rect x="995" y="141" width="7" height="5" fill="#cca752" className="w1"/>
            {/* Spire right */}
            <rect x="1028" y="75" width="35" height="125" fill="#1a1a1a"/>
            <rect x="1033" y="62" width="25" height="17" fill="#1a1a1a"/>
            <rect x="1040" y="52" width="11" height="14" fill="#1a1a1a"/>
            <line x1="1045" y1="46" x2="1045" y2="34" stroke="#cca752" strokeWidth="1.5" opacity="0.7"/>
            <rect x="1031" y="85" width="5" height="4" fill="#cca752" className="w4"/>
            <rect x="1041" y="85" width="5" height="4" fill="#cca752" className="w1"/>
            <rect x="1051" y="85" width="5" height="4" fill="#cca752" className="w6"/>
            <rect x="1031" y="97" width="5" height="4" fill="#cca752" className="w2"/>
            <rect x="1051" y="97" width="5" height="4" fill="#cca752" className="w0"/>
            <rect x="1041" y="109" width="5" height="4" fill="#cca752" className="w5"/>
            <rect x="1031" y="121" width="5" height="4" fill="#cca752" className="w3"/>
            <rect x="1051" y="121" width="5" height="4" fill="#cca752" className="w1"/>
            {/* End blocks */}
            <rect x="1073" y="95" width="28" height="105" fill="#1e1e1e"/>
            <rect x="1076" y="107" width="5" height="4" fill="#cca752" className="w0"/>
            <rect x="1086" y="107" width="5" height="4" fill="#cca752" className="w4"/>
            <rect x="1096" y="107" width="5" height="4" fill="#cca752" className="w2"/>
            <rect x="1076" y="120" width="5" height="4" fill="#cca752" className="w6"/>
            <rect x="1096" y="120" width="5" height="4" fill="#cca752" className="w3"/>
            <rect x="1086" y="133" width="5" height="4" fill="#cca752" className="w1"/>
            <rect x="1110" y="110" width="50" height="90" fill="#1a1a1a"/>
            <rect x="1115" y="120" width="8" height="5" fill="#cca752" className="w5"/>
            <rect x="1128" y="120" width="8" height="5" fill="#cca752" className="w2"/>
            <rect x="1141" y="120" width="8" height="5" fill="#cca752" className="w0"/>
            <rect x="1154" y="120" width="8" height="5" fill="#cca752" className="w3"/>
            <rect x="1115" y="134" width="8" height="5" fill="#cca752" className="w6"/>
            <rect x="1141" y="134" width="8" height="5" fill="#cca752" className="w1"/>
            <rect x="1128" y="148" width="8" height="5" fill="#cca752" className="w4"/>
            <rect x="1154" y="148" width="8" height="5" fill="#cca752" className="w2"/>
          </g>

          {/* Floor seal */}
          <rect x="0" y="196" width="1200" height="4" fill="#1a1a1a"/>
        </svg>
      </div>

      {/* ── Footer Body ── */}
      <footer className="bg-[#1a1a1a] text-[#f4ecdf] pt-12 pb-0">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">

          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

            {/* Column 1: Newsletter */}
            <div className="animate-[fadeUp_0.5s_ease_0.05s_both]">
              <h3 className="text-xs font-bold mb-5 font-[family-name:var(--font-oswald)] tracking-[3px] uppercase text-[#cca752]">
                Stay Connected
              </h3>
              <p className="text-sm text-[#f4ecdf]/60 leading-relaxed mb-4">
                Subscribe for updates on availability, community events, and neighbourhood news.
              </p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-[#252525] border border-[#f4ecdf]/10 rounded px-4 py-2.5 text-sm text-[#f4ecdf] placeholder:text-[#f4ecdf]/30 outline-none focus:border-[#cca752] transition-colors mb-2.5"
              />
              <button
                onClick={handleSubscribe}
                className="w-full bg-[#cca752] hover:bg-[#b8923d] text-[#1a1a1a] font-bold py-2.5 rounded text-xs tracking-[2px] uppercase font-[family-name:var(--font-oswald)] transition-all hover:-translate-y-px active:translate-y-0"
              >
                Subscribe
              </button>
              {message && (
                <p
                  className="text-xs mt-2 transition-colors"
                  style={{ color: messageType === 'success' ? '#cca752' : '#e87461' }}
                >
                  {message}
                </p>
              )}
            </div>

            {/* Column 2: Residences + Social */}
            <div className="animate-[fadeUp_0.5s_ease_0.15s_both]">
              <h3 className="text-xs font-bold mb-5 font-[family-name:var(--font-oswald)] tracking-[3px] uppercase text-[#cca752]">
                Residences
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm">
                {[
                  { href: '#floor-plans', label: 'Floor Plans' },
                  { href: '#amenities', label: 'Amenities & Services' },
                  { href: '#neighbourhood', label: 'Neighbourhood' },
                  { href: '#gallery', label: 'Photo Gallery' },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[#f4ecdf]/60 hover:text-[#cca752] transition-colors relative group inline-block"
                    >
                      {label}
                      <span className="absolute bottom-[-2px] left-0 w-0 h-px bg-[#cca752] group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <p className="text-[10px] font-[family-name:var(--font-oswald)] tracking-[2px] uppercase text-[#f4ecdf]/40 mb-2.5">
                  Follow Us
                </p>
                <div className="flex gap-2.5">
                  {[
                    { label: 'f', title: 'Facebook' },
                    { label: 'ig', title: 'Instagram' },
                    { label: 'in', title: 'LinkedIn' },
                  ].map(({ label, title }) => (
                    <a
                      key={title}
                      href="#"
                      title={title}
                      className="w-8 h-8 rounded-full bg-[#252525] flex items-center justify-center text-[#f4ecdf]/60 hover:bg-[#cca752] hover:text-[#1a1a1a] transition-all hover:-translate-y-0.5 text-xs font-bold italic"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3: Information */}
            <div className="animate-[fadeUp_0.5s_ease_0.25s_both]">
              <h3 className="text-xs font-bold mb-5 font-[family-name:var(--font-oswald)] tracking-[3px] uppercase text-[#cca752]">
                Information
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm">
                {[
                  { href: '#portal', label: 'Resident Portal' },
                  { href: '#faqs', label: 'Leasing FAQs' },
                  { href: '#maintenance', label: 'Maintenance Request' },
                  { href: '#terms', label: 'Terms & Conditions' },
                  { href: '#privacy', label: 'Privacy Policy' },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[#f4ecdf]/60 hover:text-[#cca752] transition-colors relative group inline-block"
                    >
                      {label}
                      <span className="absolute bottom-[-2px] left-0 w-0 h-px bg-[#cca752] group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="animate-[fadeUp_0.5s_ease_0.35s_both]">
              <h3 className="text-xs font-bold mb-5 font-[family-name:var(--font-oswald)] tracking-[3px] uppercase text-[#cca752]">
                Contact
              </h3>
              {/* Brand mark */}
              <div className="flex items-center gap-2 mb-5">
                <span className="font-[family-name:var(--font-oswald)] text-4xl font-bold text-[#cca752] leading-none">22</span>
                <span className="font-[family-name:var(--font-oswald)] text-xs font-semibold tracking-[3px] uppercase text-[#f4ecdf]/80 leading-tight">
                  Apartments<br/>Colombo
                </span>
              </div>
              {/* Address */}
              <div className="flex items-start gap-2.5 mb-3">
                <span className="text-[#cca752] mt-0.5 text-sm">📍</span>
                <p className="text-sm text-[#f4ecdf]/60 leading-relaxed">
                  Victoria Tower, Kaduwela Road<br/>IDH, Colombo, Sri Lanka
                </p>
              </div>
              {/* Phones */}
              <div className="flex items-start gap-2.5 mb-3">
                <span className="text-[#cca752] text-sm">📞</span>
                <div className="flex flex-col gap-1">
                  <a href="tel:0719009600" className="text-sm text-[#f4ecdf]/60 hover:text-[#cca752] transition-colors">071 900 9600</a>
                  <a href="tel:0716944441" className="text-sm text-[#f4ecdf]/60 hover:text-[#cca752] transition-colors">071 694 4441</a>
                </div>
              </div>
              {/* Emails */}
              <div className="flex items-start gap-2.5">
                <span className="text-[#cca752] text-sm">✉️</span>
                <div className="flex flex-col gap-1">
                  <a href="mailto:Yushinmalinga@yahoo.com" className="text-xs text-[#f4ecdf]/60 hover:text-[#cca752] transition-colors">Yushinmalinga@yahoo.com</a>
                  <a href="mailto:amashakya7@hotmail.com" className="text-xs text-[#f4ecdf]/60 hover:text-[#cca752] transition-colors">amashakya7@hotmail.com</a>
                </div>
              </div>
            </div>

          </div>

          {/* ── Bottom Bar ── */}
          <div className="border-t border-[#f4ecdf]/[0.08] py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#f4ecdf]/40">
            <p>&copy; {new Date().getFullYear()} 22 Apartments. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <span className="font-[family-name:var(--font-oswald)] tracking-[2px] uppercase text-[10px]">Secure Payments</span>
              {['VISA', 'MasterCard', 'Amex'].map((card) => (
                <span key={card} className="px-2 py-1 bg-[#252525] rounded text-[10px] font-bold italic">
                  {card}
                </span>
              ))}
            </div>
          </div>

        </div>
      </footer>

      {/* Keyframe styles */}
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}