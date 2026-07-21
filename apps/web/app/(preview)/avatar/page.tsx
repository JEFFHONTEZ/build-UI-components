"use client"

import * as React from "react"
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "@workspace/ui/components/avatar"
import { User, Check } from "lucide-react"

export default function AvatarPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Avatar</h1>

      {/* 1. All Sizes (lg, default, sm) */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Sizes (lg, default, sm)
        </p>
        <div className="flex items-center gap-4">
          <Avatar size="lg">
            <AvatarImage
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
              alt="Sarah Chen"
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>

          <Avatar size="default">
            <AvatarImage
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
              alt="Sarah Chen"
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>

          <Avatar size="sm">
            <AvatarImage
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
              alt="Sarah Chen"
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </div>
      </section>

      {/* 2. Avatar Fallbacks (Initials & Icons) */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Fallbacks (Initials & Icon Fallback when image fails)
        </p>
        <div className="flex items-center gap-4">
          <Avatar size="lg">
            <AvatarImage src="/invalid-image-url.png" alt="Alex Rivera" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>

          <Avatar size="default">
            <AvatarImage src="/invalid-image-url.png" alt="User" />
            <AvatarFallback>
              <User className="size-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </section>

      {/* 3. With AvatarBadge (Online/Active Indicator) */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          With Status Badges
        </p>
        <div className="flex items-center gap-4">
          <Avatar size="lg">
            <AvatarImage
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
              alt="Sarah Chen"
            />
            <AvatarFallback>SC</AvatarFallback>
            <AvatarBadge className="bg-emerald-500" />
          </Avatar>

          <Avatar size="default">
            <AvatarImage
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
              alt="Sarah Chen"
            />
            <AvatarFallback>SC</AvatarFallback>
            <AvatarBadge className="bg-emerald-500">
              <Check />
            </AvatarBadge>
          </Avatar>

          <Avatar size="sm">
            <AvatarImage
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
              alt="Sarah Chen"
            />
            <AvatarFallback>SC</AvatarFallback>
            <AvatarBadge className="bg-amber-500" />
          </Avatar>
        </div>
      </section>

      {/* 4. AvatarGroup & AvatarGroupCount */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          AvatarGroup Container with Count
        </p>
        <div className="flex items-center gap-6">
          <AvatarGroup>
            <Avatar size="default">
              <AvatarImage
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
                alt="Sarah Chen"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar size="default">
              <AvatarImage
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
                alt="Alex Rivera"
              />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
            <Avatar size="default">
              <AvatarImage
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
                alt="Emma Vance"
              />
              <AvatarFallback>EV</AvatarFallback>
            </Avatar>
            <AvatarGroupCount>+5</AvatarGroupCount>
          </AvatarGroup>
        </div>
      </section>
    </div>
  )
}
