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

        const positions = ord.positions || [];

        return (
          <TheOrder
            key={`order-${ordi}`}
            orderUnit={ord}
            chordVisibleVariant={ChordVisibleVariant.Maximal}
            com={ccom}
            currTransPosition={0}
            orderUniti={ordi}
            asLineComponent={(props) => {
              const { com, textLinei } = props;
              const linePoss = positions[textLinei];

              return (
                <>
                  <div
                    className={`pre binder ${
                      linePoss?.indexOf(-1) > -1 ? "active" : ""
                    }`}
                    onClick={() => {
                      exec(ord?.setChordPosition(textLinei, -1));
                    }}
                  />
                  <ComLine
                    key={`line-${textLinei}`}
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
                    className={`post binder ${
                      linePoss?.indexOf(-2) > -1 ? "active" : ""
                    }`}
                    onClick={() => {
                      exec(ord?.setChordPosition(textLinei, -2));
                    }}
                  />
                </>
              );
            }}
          />
        );
      })}
    </div>
  );
}
