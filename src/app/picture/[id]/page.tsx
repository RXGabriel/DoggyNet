export default async function pictureIdPage({
  params,
}: {
  params: { id: number };
}) {
  return (
    <main>
      <h1>picture id: {params.id}</h1>
    </main>
  );
}
