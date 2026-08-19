/**
 * Style system: ClashOfCode Tournament Console — routes retain a stable competition desk
 * while dedicated room paths make host, guest, and live lobby flows explicit.
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
import RoomCreate from "@/pages/RoomCreate";
import RoomJoin from "@/pages/RoomJoin";
import RoomLobby from "@/pages/RoomLobby";
import { Route, Switch } from "wouter";

function Router() { return <AppShell><Switch><Route path="/" component={Dashboard} /><Route path="/matchmaking" component={Matchmaking} /><Route path="/rooms/create" component={RoomCreate} /><Route path="/join/:code" component={RoomJoin} /><Route path="/join" component={RoomJoin} /><Route path="/room/:code" component={RoomLobby} /><Route path="/battle" component={Battle} /><Route path="/result" component={Result} /><Route path="/practice" component={Practice} /><Route path="/leaderboard" component={Leaderboard} /><Route path="/friends" component={Friends} /><Route path="/profile" component={Profile} /><Route component={NotFound} /></Switch></AppShell>; }
export default function App() { return <ErrorBoundary><ThemeProvider defaultTheme="dark"><TooltipProvider><Toaster theme="dark" richColors position="bottom-right" /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>; }
