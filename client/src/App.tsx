import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import Placeholder from "@/pages/Placeholder";
import SignUp from "@/pages/SignUp";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/prices" component={Placeholder} />
      <Route path="/learn" component={Placeholder} />
      <Route path="/individuals" component={Placeholder} />
      <Route path="/businesses" component={Placeholder} />
      <Route path="/developers" component={Placeholder} />
      <Route path="/company" component={Placeholder} />
      <Route path="/cryptocurrencies" component={Placeholder} />
      <Route path="/institutions" component={Placeholder} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
