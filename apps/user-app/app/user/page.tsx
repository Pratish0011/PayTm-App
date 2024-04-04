"use client";

import { useBalance } from "@repo/store/balance";

export default function () {
  const balance = useBalance();
  return <div className="text-2xl bg-black text-white">hi there {balance}</div>;
}
