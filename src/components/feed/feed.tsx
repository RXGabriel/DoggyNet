import FeedPhotos from "./feed-photos";

export default function Feed({ photos }: { photos: any }) {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
}
