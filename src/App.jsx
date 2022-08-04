import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import styles from "./styles/App.module.css";
import { Landing } from "./pages/landingPage";
import { MovieDetails } from "./pages/MovieDetails";

export function App(props) {
  const { titulo } = props;
  return (
    <Router className={styles.BodyPrincipal}>
      <header className={styles.header}>
        <Link to="/">
          <h1 className={styles.border}>{titulo}</h1>
          <h1 className={styles.wave}>{titulo}</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Landing></Landing>} />
          <Route
            path="/movies/:movieId"
            element={<MovieDetails valor={":movieId"} />}
          />
        </Routes>
      </main>
      <footer></footer>
    </Router>
  );
}
