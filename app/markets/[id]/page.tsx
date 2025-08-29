export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main className="container min-h-screen overflow-x-hidden py-20">
      <h2>{id}</h2>
    </main>
  );
}
