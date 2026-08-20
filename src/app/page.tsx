export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.content}>
        <h2 style={styles.companyName}>TRIFLEX MEDIA</h2>
        <h1 style={styles.title}>SOMETHING BIG IS COMING SOON</h1>
      </div>
      <footer style={styles.footer}>
        <p style={styles.footerText}>@2026</p>
      </footer>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: "2rem 1rem",
  },
  content: {
    margin: "auto 0",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  },
  companyName: {
    color: "#0066ff",
    fontSize: "clamp(1.2rem, 3vw, 2.2rem)",
    fontWeight: 700,
    letterSpacing: "4px",
    textTransform: "uppercase",
  },
  title: {
    color: "#0066ff",
    fontSize: "clamp(2.5rem, 7vw, 6rem)",
    fontWeight: 800,
    letterSpacing: "-1px",
    lineHeight: 1.1,
  },
  footer: {
    marginTop: "auto",
    textAlign: "center",
  },
  footerText: {
    color: "#0066ff",
    fontSize: "1rem",
    fontWeight: 500,
  },
};
