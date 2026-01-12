import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./routes/login";
import { Dashboard } from "./routes/dashboard";

function App() {
  return (
    <Routes>
      {/* Default entry */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
