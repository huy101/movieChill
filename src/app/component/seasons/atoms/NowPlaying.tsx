import React from "react";


interface NowPlayingProps {
  SeasonId: string;
  currentEpisode: string;
}

const NowPlaying: React.FC<NowPlayingProps> = ({
  SeasonId,
  currentEpisode,
}) => {
  return (
    <div className="flex items-center gap-2">
      <h3 className="w-fit pl-14 max-md:pl-2 max-md:text-sm text-neutral-400 flex items-center text-lg font-medium gap-3">
      </h3>
    </div>
  );
};
export default NowPlaying;
