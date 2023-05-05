import useExer from "../../../../../../../../complect/exer/useExer";
import { ChordVisibleVariant } from "../../../../../Cm.model";
import { cmExer } from "../../../../../Cm.store";
import ComLine from "../../../../../col/com/line/ComLine";
import TheOrder from "../../../../../col/com/order/TheOrder";
import { useEditableCcom } from "../../useEditableCcom";
import "./ChordApplicationsRedactor.scss";

export default function ChordApplicationsRedactor() {
  const ccom = useEditableCcom();
  const { exec } = useExer(cmExer);

  return (
    <div className="chord-application-redactor">
      {ccom?.orders?.map((ord, ordi) => {
        if (!ord.isVisible) return null;
        const chords = ord.chords?.split("\n").map((line) => line.split(" "));

        return (
          <TheOrder
            key={ordi}
            orderUnit={ord}
            chordVisibleVariant={ChordVisibleVariant.Maximal}
            com={ccom}
            orderUniti={ordi}
            asLineComponent={(props) => {
              const { com, textLine, textLinei } = props;
              const linePoss = ord.positions?.[textLinei] ?? [];
              const diffCount =
                (chords[textLinei]?.length || 0) - (linePoss?.length || 0);

              return (
                <div>
                  <div
                    className={`pre binder ${linePoss?.includes(-1) ? "active" : ""}`}
                    onClick={() => exec(ord?.setChordPosition(textLinei, -1))}
                  />
                  <ComLine
                    key={textLinei}
                    {...props}
                    chordedOrd
                    orderUnit={ord}
                    com={com}
                    orderUniti={ordi}
                    isJoinLetters={false}
                    onClick={(event) => {
                      const clicked = event.nativeEvent
                        .composedPath()
                        .find((span) =>
                          (span as HTMLSpanElement)?.classList?.contains(
                            "com-letter"
                          )
                        ) as HTMLSpanElement;

                      const [, letteri] =
                        Array.from(clicked.classList)
                          .find((className) => className.startsWith("letteri_"))
                          ?.split("_") || [];

                      if (letteri != null)
                        exec(ord?.setChordPosition(textLinei, +letteri));
                    }}
                  />
                  <div
                    className={'post binder'
                      + (linePoss?.includes(-2) ? " active" : "")}
                    onClick={() => {
                      exec(ord?.setChordPosition(textLinei, -2));
                    }}
                  />
                  <span
                    className={'margin-gap-h'
                      + (diffCount < 0 ? " pointer error-message" : "")}
                    onClick={() => {
                      exec(ord?.cutChordPositions(textLine, textLinei));
                    }}
                  >
                    {diffCount || ""}
                  </span>
                </div>
              );
            }}
          />
        );
      })}
    </div>
  );
}
