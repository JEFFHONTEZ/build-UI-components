"use client"

import * as React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@workspace/ui/components/accordion"
import { Badge } from "@workspace/ui/components/badge"
import { CreditCard, ShieldCheck, Users, HelpCircle } from "lucide-react"

export default function AccordionPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Accordion</h1>

      {/* 1. Default Single Selection (One item open at a time) */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Default Accordion (Single Selection)
        </p>
        <Accordion
          defaultValue={["item-1"]}
          className="max-w-xl rounded-xl border p-2"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is included in the Pro Plan subscription?
            </AccordionTrigger>
            <AccordionContent>
              The Pro Plan includes unlimited component access, custom theme
              exports, team collaboration roles, and 24/7 priority developer
              support.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              How do workspace licenses work for enterprise teams?
            </AccordionTrigger>
            <AccordionContent>
              Licenses are calculated per active developer. Read-only
              stakeholders and product managers do not count toward your seat
              limit.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can I cancel or downgrade my subscription anytime?
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can cancel your subscription at any time from your
              account settings. You will retain access until the end of your
              billing cycle.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* 2. Multiple Selection Allowed */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Multiple Expansion (openMultiple={true})
        </p>
        <Accordion
          multiple
          defaultValue={["sec-1", "sec-2"]}
          className="max-w-xl rounded-xl border p-2"
        >
          <AccordionItem value="sec-1">
            <AccordionTrigger>Security & Compliance Standards</AccordionTrigger>
            <AccordionContent>
              Our infrastructure is SOC2 Type II certified, ISO 27001 compliant,
              and all data is encrypted at rest using AES-256.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="sec-2">
            <AccordionTrigger>Data Retention Policy</AccordionTrigger>
            <AccordionContent>
              Audit logs and analytics events are retained for 90 days by
              default. Custom retention schedules are available for Enterprise
              plans.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* 3. Rich Trigger Content with Icons & Badges */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Rich Triggers with Icons & Badges
        </p>
        <Accordion
          defaultValue={["rich-1"]}
          className="max-w-xl rounded-xl border p-2"
        >
          <AccordionItem value="rich-1">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <CreditCard className="size-4 text-muted-foreground" />
                <span>Billing & Payment Methods</span>
                <Badge variant="secondary" className="ml-2">
                  Updated
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              We support major credit cards (Visa, Mastercard, AMEX), PayPal,
              and direct wire transfers for annual contracts.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="rich-2">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-muted-foreground" />
                <span>Two-Factor Authentication (2FA)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Enforce TOTP authenticator apps or hardware security keys
              (WebAuthn) for all team members.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="rich-3">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <Users className="size-4 text-muted-foreground" />
                <span>Team Seat Provisioning</span>
                <Badge variant="outline" className="ml-2">
                  Admin Only
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Configure SAML SSO (Okta, Azure AD, Google Workspace) to
              automatically provision seats for new employees.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* 4. Disabled Item State */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Disabled Item State
        </p>
        <Accordion
          defaultValue={["dis-1"]}
          className="max-w-xl rounded-xl border p-2"
        >
          <AccordionItem value="dis-1">
            <AccordionTrigger>Active Feature Access</AccordionTrigger>
            <AccordionContent>
              Standard feature settings are enabled for your current workspace
              tier.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="dis-2" disabled>
            <AccordionTrigger>
              Legacy Integration Settings (Unavailable)
            </AccordionTrigger>
            <AccordionContent>
              This integration has been deprecated and is no longer
              configurable.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  )
}
