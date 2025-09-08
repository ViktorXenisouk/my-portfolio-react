import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", // можно заменить на "dark" для полного dark mode
    primary: {
      main: "#4f46e5", // фиолетовый акцент
      light: "#6366f1",
      dark: "#3730a3",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#06b6d4", // бирюзовый акцент
      light: "#22d3ee",
      dark: "#0e7490",
      contrastText: "#ffffff",
    },
    background: {
      default: "#e5e7eb", // тёмный серо-светлый фон
      paper: "#f3f4f6", // чуть светлее для карточек
    },
    text: {
      primary: "#111827", // почти чёрный
      secondary: "#374151", // глубокий серый
    },
  },
  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    h1: { fontSize: "3rem", fontWeight: 700, color: "#111827" },
    h2: { fontSize: "2.25rem", fontWeight: 700, color: "#111827" },
    h3: { fontSize: "1.75rem", fontWeight: 600, color: "#1f2937" },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    body2: { fontSize: "0.9rem", lineHeight: 1.5, color: "#4b5563" },
    button: { fontWeight: 600, textTransform: "none" },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          backgroundImage: 'none',
          color:'#111827',
        },
        outlined:{
          backgroundImage: 'none',
                    color:'#111827',
        },
        root: {
          borderRadius: 12,
          padding: "8px 20px",
          backgroundImage: "linear-gradient(135deg, #4f46e5, #06b6d4)",
          color: "#fff",
          boxShadow: "none",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
          background: "#f9fafb",
        },
      },
    },
  },
});

export default theme;