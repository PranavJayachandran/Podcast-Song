import React from "react";

function RecentCard(props) {
  console.log(props);
  return (
    <div>
      <div className="h-36 w-32 bg-red-100 rounded-lg"></div>
      <div className="pl-1 text-left">{props.item.name}</div>
      <div className="pl-1 text-xs font-light text-left">
        {props.item.speaker}
      </div>
    </div>
  );
}

export default function RecentlyPlayed() {
  const data = [
    { name: "Elevation", speaker: "Steven Some" },
    { name: "Elevation", speaker: "Steven Some" },
    { name: "Elevation", speaker: "Steven Some" },
    { name: "Elevation", speaker: "Steven Some" },
    { name: "Elevation", speaker: "Steven Some" },
  ];
  return (
    <div className="mt-10">
      <div className="text-xl text-left">RECENTLY PLAYED</div>
      <div className="flex gap-6 mt-4">
        {data.map((item, index) => (
          <div>
            <RecentCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
