import { ModeToggle } from "@/components/mode-toggle";

export function Login() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-4 p-4">
            <h1 className="text-2xl flex flex-col items-center gap-1">
                <span className="flex items-center justify-center border bg-background rounded-full w-[46px] h-[46px]">
                    💀
                </span>
                <span className="font-bold">skelly-admin</span>
            </h1>

            <ModeToggle />

            <p className="text-sm text-muted-foreground">
                Login screen (stub)
            </p>
        </div>
    );
}
