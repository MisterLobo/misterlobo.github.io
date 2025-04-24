"use client"

import * as React from "react"
import { TextScramble } from "@/components/ui/text-scramble"

export function TextScrambleWrapper() {
  return (
    <div className="flex justify-center">
      <TextScramble className="font-mono text-sm uppercase">
        Text Scramble
      </TextScramble>
    </div>
  )
}