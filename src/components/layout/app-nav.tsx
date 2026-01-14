import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import { NavLink, useNavigate } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { LayoutDashboard } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { UserMenu } from "./user-menu";

export function AppNav() {
    const navigate = useNavigate();

    return (
        <Sidebar>
            <SidebarHeader className="border-b px-4 py-4">
                <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-md border">
                        💀
                    </span>
                    <span className="font-semibold">skelly-admin</span>
                </div>
            </SidebarHeader>

            <SidebarContent className="p-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <NavLink to="/dashboard" className="flex items-center gap-2">
                                <LayoutDashboard className="h-4 w-4" />
                                <span>Dashboard</span>
                            </NavLink>
                        </SidebarMenuButton>
                    </SidebarMenuItem>

                    {/* Future items go here */}
                </SidebarMenu>
            </SidebarContent>

            <SidebarFooter className="border-t p-3">
                <UserMenu
                    username="yeahitsmejayyy"
                    email="hello@itsjayyy.com"
                    avatarSrc="/avatar.png"
                    onSettings={() => {
                        navigate("/settings");
                    }}
                    onLogout={() => {
                        navigate("/login"); // or "/"
                    }}
                />
            </SidebarFooter>
        </Sidebar>
    );
}
