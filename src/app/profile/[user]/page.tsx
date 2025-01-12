import photosGet from "@/actions/photos-get";
import Feed from "@/components/feed/feed";
import { notFound } from "next/navigation";

export default async function ProfileUserPage({
  params,
}: {
  params: { user: string };
}) {
  const { data } = await photosGet({ user: params.user });

  if (!data) return notFound();

  const title = params.user.charAt(0).toUpperCase() + params.user.slice(1);

  return (
    <section className="container mainSection">
      <h1 className="title">{title}</h1>
      <Feed photos={data} user={params.user} />
    </section>
  );
}
