import ChordCard from "./ChordCard";
import { useCcom } from "../useCcom";

export default function ChordImagesList() {
  const [ccom] = useCcom();
  return (
    <div className="full-container">
      <div className="margin-big-gap flex center column">
        {ccom?.usedChords &&
          Object.keys(ccom.usedChords)
            .filter((uc) => uc)
            .map((chordName) => {
              return (
                <div
                  key={`chord-used-${chordName}`}
                  className="chord-application"
                >
                  <ChordCard
                    chordName={chordName}
                    chordLabel={
                      (ccom.usedChords && ccom.usedChords[chordName]) || "?"
                    }
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
}
