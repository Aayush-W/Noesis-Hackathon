import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import LoginPage from "./pages/LoginPage";
import SubjectDossier from "./pages/SubjectDossier";
import SubjectWorkspace from "./pages/SubjectWorkspace";
import { useState } from "react";

const App = () => {
  const { isAuthenticated } = useAuth();
  const [toast, setToast] = useState("");

  const showToast = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(""), 2800);
  };

  // Not logged in → show login page
  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="*" element={<LoginPage />} />
      </Routes>
    );
  }

  // Logged in → main app
  return (
    <>
      <Routes>
        <Route path="/" element={<SubjectDossier />} />
        <Route path="/subject/:id" element={<SubjectWorkspace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {toast && <div className="toast">{toast}</div>}
    </>
  );
};

export default App;
