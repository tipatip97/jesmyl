import React from "react";
import { indexStorage } from "../store/jstorages";

let pack = indexStorage.getOr("evaIconPack", {});

indexStorage.listen("evaIconPack", (key, value) => {
  if (key === "evaIconPack") pack = value as never;
});

export function EvaIcon({
  name,
  alt,
  scale = 1,
}: {
  name: string;
  alt?: string;
  scale?: number;
}) {
  const icon = pack[name];

  return (
    <>
      {icon == null ? (
        alt || null
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{
            transform: `scale(${scale})`,
          }}
          fill="var(--svg-color)"
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      )}
    </>
  );
}
