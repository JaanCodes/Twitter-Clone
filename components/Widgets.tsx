import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Widgets = () => {
  const [user, setUser] = useState<string>("");

  return (
    <div className="px-2 mt-2 col-span-2 hidden lg:inline">
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2 mb-4">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Search User"
          className="flex-1 outline-none bg-transparent"
        />
      </div>
      <TwitterTimelineEmbed sourceType="profile" screenName={user || "elonmusk"} options={{ height: 1000 }} />
    </div>
  );
};

export default Widgets;