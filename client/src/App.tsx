import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AgentAssistedResearch from "./pages/threads/AgentAssistedResearch";
import BuiltForPeople from "./pages/threads/BuiltForPeople";
import DLTheoryClass from "./pages/threads/DLTheoryClass";
import ResurrectedFromDuke from "./pages/threads/ResurrectedFromDuke";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/threads/agent-assisted-research"} component={AgentAssistedResearch} />
      <Route path={"/threads/resurrected-from-duke"} component={ResurrectedFromDuke} />
      <Route path={"/threads/dl-theory-class"} component={DLTheoryClass} />
      <Route path={"/threads/built-for-people"} component={BuiltForPeople} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
