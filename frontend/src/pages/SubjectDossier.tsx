import { Atom, Calculator, FlaskConical, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface SubjectCard {
  id: string;
  name: string;
  stone: string;
  icon: typeof Atom;
  color: string;
  tagline: string;
}

const SUBJECTS: SubjectCard[] = [
  {
    id: "physics",
    name: "Physics",
    stone: "Space Stone",
    icon: Atom,
    color: "var(--stone-physics)",
    tagline: "Mechanics, waves, electromagnetism, thermodynamics and modern physics.",
  },
  {
    id: "chemistry",
    name: "Chemistry",
    stone: "Time Stone",
    icon: FlaskConical,
    color: "var(--stone-chemistry)",
    tagline: "Organic, inorganic, physical chemistry and chemical bonding.",
  },
  {
    id: "maths",
    name: "Maths",
    stone: "Soul Stone",
    icon: Calculator,
    color: "var(--stone-maths)",
    tagline: "Calculus, algebra, coordinate geometry, probability and statistics.",
  },
];

const SubjectDossier = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <>
      <div className="grid-bg" />
      <div className="dossier-page">
        <div className="dossier-header__user">
          <span>Agent {user?.name ?? "Unknown"}</span>
          <button className="dossier-header__logout" onClick={logout} type="button">
            <LogOut size={14} style={{ marginRight: 6, verticalAlign: -2 }} />
            Logout
          </button>
        </div>

        <header className="dossier-header">
          <p className="dossier-header__eyebrow">S.T.U.D.Y. Initiative</p>
          <h1>Subject Dossiers</h1>
          <p>
            Select an Infinity Stone to open its knowledge workspace. Upload your notes,
            interrogate the AI, and test your mastery.
          </p>
        </header>

        <div className="dossier-grid">
          {SUBJECTS.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.id}
                className="stone-card"
                style={{ "--stone-color": s.color } as React.CSSProperties}
                onClick={() => navigate(`/subject/${s.id}`)}
              >
                <div className="stone-card__icon">
                  <Icon size={28} />
                </div>
                <h3>{s.name}</h3>
                <p>{s.tagline}</p>
                <div className="stone-card__footer">
                  <span className="stone-card__badge">{s.stone}</span>
                  <span>Click to enter workspace -&gt;</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SubjectDossier;
