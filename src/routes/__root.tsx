import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-[11px] uppercase tracking-lux text-muted-foreground">Erro 404</p>
        <h1 className="mt-4 font-serif text-5xl text-foreground">Página perdida no escuro.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          O conteúdo que você procura não existe ou foi arquivado.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm text-foreground transition-opacity hover:opacity-60"
          >
            Voltar à galeria <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl text-foreground">Algo se desfocou.</h1>
        <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 border-b border-foreground pb-1 text-sm text-foreground transition-opacity hover:opacity-60"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Henrico Portfólio" },
      { name: "description", content: "Registros de Gustavo Henrico" },
      { property: "og:title", content: "Henrico Portfólio" },
      { property: "og:description", content: "Registros de Gustavo Henrico" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Henrico Portfólio" },
      { name: "twitter:description", content: "Registros de Gustavo Henrico" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/81fa6333-cbe3-4428-9678-a1fcdcd8cb0e/id-preview-dab4ac1e--90da24e2-11f5-447a-9bb2-fe38250810eb.lovable.app-1778869886335.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/81fa6333-cbe3-4428-9678-a1fcdcd8cb0e/id-preview-dab4ac1e--90da24e2-11f5-447a-9bb2-fe38250810eb.lovable.app-1778869886335.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
