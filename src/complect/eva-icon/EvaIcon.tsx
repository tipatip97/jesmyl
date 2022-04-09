import { indexStorage } from "../../store/jstorages";
import { EvaIconName } from "./EvaIcon.model";

let pack = indexStorage.getOr("evaIconPack", {});

indexStorage.listen("evaIconPack", "evaIconPack", (value) => (pack = value));

export default function EvaIcon({
  name,
  alt,
  scale = 1,
}: {
  name: EvaIconName;
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
