import { Profile, ProfileOwnedByMe, useFollow } from "@lens-protocol/react-web";

// new component
export function FollowComponent({
  wallet,
  profile,
  isConnected,
}: {
  isConnected: boolean;
  profile: Profile;
  wallet: ProfileOwnedByMe;
}) {
  const { execute: follow, error } = useFollow({
    followee: profile,
    follower: wallet,
  });

  return (
    <>
      {isConnected && (
        <button
          className="bg-white text-black px-14 py-4 rounded-full"
          onClick={follow}
        >
          Follow {profile.handle}
        </button>
      )}
    </>
  );
}
