/**
 * Style system: Tournament Console — routes live inside a stable competition-desk shell
 * so every screen retains a clear route back to the next battle.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppShell from "@/components/AppShell";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Battle from "@/pages/Battle";
import Dashboard from "@/pages/Dashboard";
import Friends from "@/pages/Friends";
import Leaderboard from "@/pages/Leaderboard";
import Matchmaking from "@/pages/Matchmaking";
import NotFound from "@/pages/NotFound";
import Practice from "@/pages/Practice";
import Profile from "@/pages/Profile";
import Result from "@/pages/Result";
import { Route, Switch } from "wouter";

function Router() {
  return <AppShell><Switch>
    <Route path="/" component={Dashboard} />
    <Route path="/matchmaking" component={Matchmaking} />
    <Route path="/battle" component={Battle} />
    <Route path="/result" component={Result} />
    <Route path="/practice" component={Practice} />
    <Route path="/leaderboard" component={Leaderboard} />
    <Route path="/friends" component={Friends} />
    <Route path="/profile" component={Profile} />
    <Route component={NotFound} />
  </Switch></AppShell>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="dark"><TooltipProvider><Toaster theme="dark" richColors position="bottom-right" /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
