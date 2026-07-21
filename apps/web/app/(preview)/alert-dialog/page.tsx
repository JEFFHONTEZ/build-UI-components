"use client"

import * as React from "react"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@workspace/ui/components/alert-dialog"
import { Button } from "@workspace/ui/components/button"
import { Trash2, AlertTriangle, ShieldAlert } from "lucide-react"

export default function AlertDialogPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Alert Dialog</h1>

      {/* 1. Default Destructive Confirmation (size="default") */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Default Destructive Action (size="default")
        </p>
        <AlertDialog>
          <AlertDialogTrigger render={<Button variant="destructive" />}>
            <Trash2 className="mr-2 size-4" />
            Delete Repository
          </AlertDialogTrigger>
          <AlertDialogContent size="default">
            <AlertDialogHeader>
              <AlertDialogMedia className="bg-destructive/10 text-destructive">
                <AlertTriangle />
              </AlertDialogMedia>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the{" "}
                <span className="font-semibold text-foreground">
                  acme-ui-components
                </span>{" "}
                repository and remove all collaborator permissions.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction variant="destructive">
                Confirm Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </section>

      {/* 2. Small Size Variant (size="sm") */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Small Size Variant (size="sm")
        </p>
        <AlertDialog>
          <AlertDialogTrigger render={<Button variant="outline" />}>
            Revoke Access Key
          </AlertDialogTrigger>
          <AlertDialogContent size="sm">
            <AlertDialogHeader>
              <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>
              <AlertDialogDescription>
                Applications using this key will immediately lose access to
                production endpoints.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel size="sm">Back</AlertDialogCancel>
              <AlertDialogAction size="sm" variant="destructive">
                Revoke
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </section>

      {/* 3. Security Warning Dialog */}
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Security Warning Dialog
        </p>
        <AlertDialog>
          <AlertDialogTrigger render={<Button variant="secondary" />}>
            <ShieldAlert className="mr-2 size-4 text-amber-500" />
            Reset Security Credentials
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogMedia className="bg-amber-500/10 text-amber-500">
                <ShieldAlert />
              </AlertDialogMedia>
              <AlertDialogTitle>Force Global Logout?</AlertDialogTitle>
              <AlertDialogDescription>
                All active sessions across web, mobile, and CLI tools will be
                terminated immediately.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Keep Active</AlertDialogCancel>
              <AlertDialogAction variant="default">
                Terminate All Sessions
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </section>
    </div>
  )
}
