import photoGet from "@/actions/photo-get";
import PhotoContent from "@/components/photo/photo-content";
import { notFound } from "next/navigation";

interface PhotoIdaParams {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PhotoIdaParams) {
  const { data } = await photoGet(params.id);

  if (!data) return { title: "Photo" };
  return {
    title: data.photo.title + " | Dogs",
  };
}

export default async function FotoIdPage({ params }: PhotoIdaParams) {
  const { data } = await photoGet(params.id);
  if (!data) return notFound();

  return (
    <section className="container mainContainer">
      <PhotoContent data={data} single />
    </section>
  );
}
