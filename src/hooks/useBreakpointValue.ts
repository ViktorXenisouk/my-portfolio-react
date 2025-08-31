import { useMediaQuery, useTheme } from "@mui/material";

type Values<T> = {
  xs: T;
  sm: T;
  md: T;
  lg: T;
  xl: T;
};

function useBreakpointValue<T>(values: Values<T>): T {
  const theme = useTheme();

  const matchesXs = useMediaQuery(theme.breakpoints.only("xs"));
  const matchesSm = useMediaQuery(theme.breakpoints.only("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.only("md"));
  const matchesLg = useMediaQuery(theme.breakpoints.only("lg"));
  const matchesXl = useMediaQuery(theme.breakpoints.only("xl"));

  if (matchesXl) return values.xl;
  if (matchesLg) return values.lg;
  if (matchesMd) return values.md;
  if (matchesSm) return values.sm;
  return values.xs;
}

export { useBreakpointValue };