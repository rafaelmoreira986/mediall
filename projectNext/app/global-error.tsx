"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{ textAlign: "center", padding: "60px 20px" }}>
          <h2>Algo deu errado.</h2>
          <button onClick={reset}>Tentar novamente</button>
        </div>
      </body>
    </html>
  );
}
