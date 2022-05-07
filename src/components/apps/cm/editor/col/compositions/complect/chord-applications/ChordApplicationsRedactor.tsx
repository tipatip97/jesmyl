import { putCmCompositionsStyles } from "../../../../../Cm.complect";
import { ChordVisibleVariant } from "../../../../../Cm.model";
import ComLine from "../../../../../col/com/line/ComLine";
import TheOrder from "../../../../../col/com/order/TheOrder";
import { useEditableCcom } from "../../useEditableCcom";
import useChordApplicationsRedactor from "./useChordApplicationsRedactor";
import "./ChordApplicationsRedactor.scss";

export default function ChordApplicationsRedactor() {
  const ccom = useEditableCcom();
  const { setChordPosition } = useChordApplicationsRedactor(ccom);

  return (
    <div className="chord-application-redactor">
      {ccom?.orders?.map((ord, ordi) => {
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
                      setChordPosition(ord, textLinei, -1);
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
                        setChordPosition(ord, textLinei, +letteri);
                    }}
                  />
                  <div
                    className={`post binder ${
                      linePoss?.indexOf(-2) > -1 ? "active" : ""
                    }`}
                    onClick={() => {
                      setChordPosition(ord, textLinei, -2);
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

putCmCompositionsStyles();
