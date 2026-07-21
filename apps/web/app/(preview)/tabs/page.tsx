"use client"

import * as React from "react"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@workspace/ui/components/tabs"

export default function TabsPreview() {
  const [activeTab, setActiveTab] = React.useState("account")

  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Tabs</h1>

      {/* 1. Default Horizontal Tabs (Pill Variant) */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Default Variant (Controlled State)
        </p>
        <Tabs
          value={activeTab}
          onValueChange={(val) => setActiveTab(val as string)}
          className="max-w-lg"
        >
          <TabsList variant="default">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="disabled" disabled>
              Disabled
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="mt-3 rounded-lg border p-4">
            <p className="text-sm font-medium">Account Settings</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Manage your profile details and email preferences.
            </p>
          </TabsContent>
          <TabsContent value="password" className="mt-3 rounded-lg border p-4">
            <p className="text-sm font-medium">Password & Security</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Change your password and enable two-factor authentication.
            </p>
          </TabsContent>
          <TabsContent
            value="notifications"
            className="mt-3 rounded-lg border p-4"
          >
            <p className="text-sm font-medium">Notification Preferences</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Choose how you receive product updates and security alerts.
            </p>
          </TabsContent>
        </Tabs>
      </section>

      {/* 2. Line Variant */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Line Variant
        </p>
        <Tabs defaultValue="general" className="max-w-lg">
          <TabsList variant="line">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="mt-3">
            <p className="text-xs text-muted-foreground">
              General workspace parameters.
            </p>
          </TabsContent>
          <TabsContent value="integrations" className="mt-3">
            <p className="text-xs text-muted-foreground">
              Connected third-party services.
            </p>
          </TabsContent>
          <TabsContent value="billing" className="mt-3">
            <p className="text-xs text-muted-foreground">
              Invoices and subscription plans.
            </p>
          </TabsContent>
        </Tabs>
      </section>

      {/* 3. Vertical Orientation */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Vertical Orientation
        </p>
        <Tabs
          defaultValue="overview"
          orientation="vertical"
          className="max-w-lg"
        >
          <TabsList variant="default">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="logs">Audit Logs</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="rounded-lg border p-4">
            <p className="text-sm font-medium">Project Overview</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Active deployments and system health metrics.
            </p>
          </TabsContent>
          <TabsContent value="analytics" className="rounded-lg border p-4">
            <p className="text-sm font-medium">Analytics Summary</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Monthly traffic and conversion reports.
            </p>
          </TabsContent>
          <TabsContent value="logs" className="rounded-lg border p-4">
            <p className="text-sm font-medium">Audit Logs</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Recent administrative activities and login history.
            </p>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
