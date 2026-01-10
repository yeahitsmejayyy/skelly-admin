import { ModeToggle } from "./components/mode-toggle";
import { trpc } from "./lib/trpc";

function App() {
  const healthCheck = trpc.health.check.useQuery();

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl flex flex-col items-center gap-1">
        <span className="flex items-center justify-center border bg-background rounded-full w-[46px] h-[46px]">💀</span>
        <span className="font-bold">skelly-admin</span>
      </h1>
      <div className="mx-auto"><ModeToggle /></div>
      {healthCheck.data ? (
        <pre className="text-sm text-neutral-400">
          {JSON.stringify(healthCheck.data, null, 2)}
        </pre>
      ) : (
        <pre className="text-sm text-neutral-400">❌ Health check failed with Backend</pre>
      )}
    </div>
  );
}

export default App;
