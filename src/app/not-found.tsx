/* eslint-disable @next/next/no-html-link-for-pages */
export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-5xl font-extrabold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Página não encontrada</h2>
        <p className="mt-2 text-gray-600">
          Desculpe, a página que você está procurando não existe ou foi removida.
        </p>
        <a
          href="/"
          className="mt-6 inline-block bg-primary100 text-white font-medium py-2 px-6 rounded-full hover:bg-primary200 transition"
        >
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
}
