import { FolderKanban, LayoutDashboard, Settings } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"
export default function SidebarPreview() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="mb-6 text-lg font-semibold">Sidebar</h1>
      <section className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Composed inset navigation with menu buttons, badges, submenus, and
          rail
        </p>
        <SidebarProvider>
          <div className="flex h-96 max-w-2xl overflow-hidden rounded-xl border">
            <Sidebar collapsible="icon" variant="inset">
              <SidebarHeader>
                <SidebarTrigger />
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Workspace</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton isActive>
                          <LayoutDashboard />
                          Overview
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <FolderKanban />
                          Projects
                        </SidebarMenuButton>
                        <SidebarMenuBadge>12</SidebarMenuBadge>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton>
                              Active work
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton disabled>
                          <Settings />
                          Settings
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
              <SidebarRail />
            </Sidebar>
            <main className="flex-1 p-6 text-sm text-muted-foreground">
              Select a workspace area to review current activity.
            </main>
          </div>
        </SidebarProvider>
      </section>
    </div>
  )
}
