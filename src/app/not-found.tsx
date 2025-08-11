import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] grid place-items-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-heading text-foreground">Página não encontrada</h1>
        <p className="mt-2 text-muted-foreground">
          O conteúdo que você tentou acessar não existe.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary text-black px-6 py-3 font-medium"
        >
          Voltar para a Home
        </Link>
      </div>
    </main>
  );
}