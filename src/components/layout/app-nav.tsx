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
import { useSidebar } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";


type AppNavProps = {
    variant?: "default" | "icon";
};


export function AppNav({ variant = "default" }: AppNavProps) {
    const navigate = useNavigate();
    const { state } = useSidebar();
    const [showText, setShowText] = useState(state === "expanded");

    useEffect(() => {
        if (state === "expanded") {
            const t = setTimeout(() => setShowText(true), 150);
            return () => clearTimeout(t);
        } else {
            // collapse: hide immediately
            setShowText(false);
        }
    }, [state]);


    return (
        <Sidebar collapsible={variant === "icon" ? "icon" : "offcanvas"}>
            <SidebarHeader className="px-4 py-4 border-b">
                <div
                    className="
      flex items-center gap-2"
                >
                    <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-md border">
                        💀
                    </span>

                    {showText && (
                        <span
                            className="
      font-semibold
      animate-in
      fade-in
      slide-in-from-left-1
      duration-200
    "
                        >
                            skelly-admin
                        </span>
                    )}



                </div>
            </SidebarHeader>



            <SidebarContent
                className="
    p-4
    group-data-[collapsible=icon]:p-4
  "
            >

                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            tooltip="Dashboard"
                        >
                            <NavLink
                                to="/dashboard"
                                className="
  flex items-center gap-2
  pl-2 pr-4
  group-data-[collapsible=icon]:pl-4
  group-data-[collapsible=icon]:pr-0
"

                            >
                                <LayoutDashboard className="h-4 w-4" />
                                {showText && (
                                    <span
                                        className="
      animate-in
      fade-in
      slide-in-from-left-1
      duration-200
    "
                                    >
                                        Dashboard
                                    </span>
                                )}
                            </NavLink>

                        </SidebarMenuButton>
                    </SidebarMenuItem>



                    {/* Future items go here */}
                </SidebarMenu>
            </SidebarContent>

            <SidebarFooter
                className="
                border-t
    p-[16px]
    group-data-[collapsible=icon]:pl-[16px]
  "
            >
                <UserMenu
                    username="yeahitsmejayyy"
                    email="hello@itsjayyy.com"
                    avatarSrc="/avatar.png"
                    onSettings={() => navigate("/settings")}
                    onLogout={() => navigate("/login")}
                />
            </SidebarFooter>

        </Sidebar>
    );
}
