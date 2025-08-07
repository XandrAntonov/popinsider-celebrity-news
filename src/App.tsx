
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Cookies from "./pages/Cookies";
import Terms from "./pages/Terms";
import Legal from "./pages/Legal";
import Celebrities from "./pages/Celebrities";
import Scandals from "./pages/Scandals";
import Exclusives from "./pages/Exclusives";
import Archive from "./pages/Archive";
import CookieBanner from "./components/CookieBanner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/celebridades" element={<Celebrities />} />
          <Route path="/escandalos" element={<Scandals />} />
          <Route path="/exclusivas" element={<Exclusives />} />
          <Route path="/archivo" element={<Archive />} />
          <Route path="/gracias" element={<ThankYou />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/terminos" element={<Terms />} />
          <Route path="/aviso-legal" element={<Legal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
