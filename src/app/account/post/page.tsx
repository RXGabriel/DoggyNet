import AccountPhotoPost from "@/components/account/account-photo-post";
import { Metadata } from "next";

export const runTime = "edge";

export const metadata: Metadata = {
  title: "Post | Doggy Net",
};

export default async function PostPage() {
  return <AccountPhotoPost />;
}
