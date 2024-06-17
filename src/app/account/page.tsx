import photosGet from "@/actions/photos-get";
import userGet from "@/actions/user-get";
import Feed from "@/components/feed/feed";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Account",
};

export default async function AccountPage() {
  const { data: user } = await userGet();
  const { data: photos } = await photosGet({ user: user?.username });

  return (
    <section>
      {photos?.length ? (
        <Feed photos={photos} />
      ) : (
        <span>
          <p
            style={{ color: "#444", fontSize: "1.25rem", marginBottom: "1rem" }}
          >
            There is no photos yet. Post one to get started!
          </p>
          <Link
            href="/account/post"
            style={{ display: "inline-block" }}
            className="button"
          >
            Post a new photo
          </Link>
        </span>
      )}
    </section>
  );
}
