import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./routes/login";
import { Dashboard } from "./routes/dashboard";
import { Settings } from "./routes/settings";
import { AppLayout } from "./components/layout/app-layout";

function App() {
  return (
    <Routes>
      {/* Default entry */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
