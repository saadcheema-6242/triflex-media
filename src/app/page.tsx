export default function Home() {
  return (
    <main style={styles.main}>
      {/* Header Brand */}
      <header style={styles.header}>
        <div className="pulse-badge float-element">
          <span className="pulse-dot"></span>
          <span>Triflex Media</span>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        {/* Animated Badge */}
        <div style={styles.badgeWrapper} className="float-delayed">
          <span style={styles.miniBadge}>✦ THE NEXT REVOLUTION IS HERE ✦</span>
        </div>

        {/* Large Animated Floating Text */}
        <div className="float-slow" style={styles.titleContainer}>
          <h1 style={styles.mainTitle} className="glow-blue">
            SOMETHING <span className="gradient-text-blue">BIG</span>
          </h1>
          <h1 style={styles.subTitle} className="glow-blue">
            IS COMING <span className="gradient-text-blue">SOON</span>
          </h1>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          &copy; {new Date().getFullYear()} Triflex Media. All rights reserved. Designed for the extraordinary.
        </p>
      </footer>
    </main>
  );
}

// Inline Style Tokens for Layout Structure
const styles: { [key: string]: React.CSSProperties } = {
  main: {
    position: "relative",
    zIndex: 1,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "2rem 1.5rem",
  },
  header: {
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    justifyContent: "center",
    padding: "1rem 0",
  },
  heroSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    maxWidth: "1000px",
    margin: "auto 0",
    gap: "2.5rem",
  },
  badgeWrapper: {
    marginBottom: "0.5rem",
  },
  miniBadge: {
    color: "#60a5fa",
    fontSize: "0.9rem",
    fontWeight: 600,
    letterSpacing: "3px",
    textTransform: "uppercase",
    background: "rgba(37, 99, 235, 0.12)",
    padding: "10px 24px",
    borderRadius: "100px",
    border: "1px solid rgba(96, 165, 250, 0.3)",
    boxShadow: "0 0 20px rgba(0, 102, 255, 0.2)",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    userSelect: "none",
  },
  mainTitle: {
    fontSize: "clamp(3.5rem, 10vw, 8rem)",
    fontWeight: 900,
    lineHeight: 1.05,
    letterSpacing: "-2px",
    color: "#ffffff",
  },
  subTitle: {
    fontSize: "clamp(3.2rem, 9vw, 7.5rem)",
    fontWeight: 900,
    lineHeight: 1.05,
    letterSpacing: "-2px",
    color: "#ffffff",
  },
  footer: {
    marginTop: "auto",
    paddingTop: "2rem",
    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
    width: "100%",
    textAlign: "center",
  },
  footerText: {
    fontSize: "0.85rem",
    color: "#64748b",
  },
};
