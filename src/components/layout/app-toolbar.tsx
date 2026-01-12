import { SidebarTrigger } from "@/components/ui/sidebar";

interface AppToolbarProps {
    title?: string;
}

export function AppToolbar({ title }: AppToolbarProps) {
    return (
        <header className="flex h-14 items-center justify-between border-b px-4">
            <div className="flex items-center gap-2">
                <SidebarTrigger />
                {title && <h1 className="text-sm font-medium">{title}</h1>}
            </div>

            <div className="flex items-center gap-2">
                {/* Right-side actions later */}
            </div>
        </header>
    );
}
