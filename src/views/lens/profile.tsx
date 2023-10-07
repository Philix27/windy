// app/profile/[handle]/page.tsx
"use client";
import { useProfile, } from "@lens-protocol/react-web";
import { Publications } from "./publication";

export default function LensProfile({ params: { handle } }) {
  let { data: profile, loading } = useProfile({ handle });

  if (loading) return <p className="p-14">Loading ...</p>;

  return (
    <div>
      <div className="p-14">
        {profile?.picture?.__typename === "MediaSet" && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            width="200"
            height="200"
            alt={profile.handle}
            className="rounded-xl"
            src={profile.picture.original.url}
          />
        )}
        <h1 className="text-3xl my-3">{profile?.handle}</h1>
        <h3 className="text-xl mb-4">{profile?.bio}</h3>
        {profile && <Publications profile={profile} />}
      </div>
    </div>
  );
}
