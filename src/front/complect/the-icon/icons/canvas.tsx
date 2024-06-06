import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 8C4 5.17157 4 3.75736 5.00421 2.87868C6.00841 2 7.62465 2 10.8571 2H13.1429C16.3753 2 17.9916 2 18.9958 2.87868C20 3.75736 20 5.17157 20 8V17H4V8Z',
  d2: 'M3 17H21',
  d3: 'M10.6987 5.56588C11.9289 5.38957 13.9674 5.4601 12.2803 7.15266C10.1715 9.26836 7.00837 14.0289 10.6987 12.4421C14.3891 10.8554 15.9709 11.9132 14.3893 13.5',
  d4: 'M12 17V21',
  d5: 'M5 22L8 17',
  d6: 'M19 22L16 17',
  d7: 'M4 8C4 5.17157 4 3.75736 5.00421 2.87868C6.00841 2 7.62466 2 10.8571 2H13.1429C16.3753 2 17.9916 2 18.9958 2.87868C20 3.75736 20 5.17157 20 8V17H4V8Z',
  d8: 'M8.51465 15.8927C8.98823 16.1768 9.14179 16.7911 8.85764 17.2646L5.85764 22.2646C5.5735 22.7382 4.95924 22.8918 4.48566 22.6076C4.01208 22.3235 3.85851 21.7092 4.14266 21.2357L7.14266 16.2357C7.42681 15.7621 8.04107 15.6085 8.51465 15.8927ZM15.4857 15.8927C15.9592 15.6085 16.5735 15.7621 16.8576 16.2357L19.8576 21.2357C20.1418 21.7092 19.9882 22.3235 19.5146 22.6076C19.0411 22.8918 18.4268 22.7382 18.1427 22.2646L15.1427 17.2646C14.8585 16.7911 15.0121 16.1768 15.4857 15.8927ZM12.0002 15.7502C12.5524 15.7502 13.0002 16.1979 13.0002 16.7502V20.7502C13.0002 21.3024 12.5524 21.7502 12.0002 21.7502C11.4479 21.7502 11.0002 21.3024 11.0002 20.7502V16.7502C11.0002 16.1979 11.4479 15.7502 12.0002 15.7502Z',
  d9: 'M13.1924 1.25C14.7666 1.24999 16.0151 1.24998 16.9926 1.36497C17.9927 1.48263 18.8231 1.73103 19.4897 2.31425C20.1706 2.91008 20.4744 3.6743 20.6158 4.59428C20.7501 5.4682 20.75 6.57662 20.75 7.93855V16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H3C2.44772 18 2 17.5523 2 17C2 16.4477 2.44772 16 3 16H3.25V7.93855C3.24997 6.57662 3.24995 5.4682 3.38423 4.59428C3.52559 3.6743 3.82938 2.91008 4.51033 2.31425C5.17686 1.73103 6.00729 1.48263 7.00744 1.36497C7.98494 1.24998 9.23337 1.24999 10.8077 1.25H10.8077H13.1923H13.1924ZM10.8051 5.89432C11.0812 5.85476 11.3965 5.8302 11.6837 5.83722C11.8317 5.84084 11.9537 5.85255 12.05 5.86816C11.9824 5.95929 11.8853 6.07258 11.7491 6.20923C10.6555 7.30644 9.27741 9.09441 8.63663 10.4517C8.47496 10.7941 8.34152 11.1474 8.28285 11.4791C8.22877 11.7848 8.20937 12.2359 8.48939 12.6146C8.8001 13.0347 9.28335 13.1175 9.67069 13.0916C10.0577 13.0657 10.5032 12.9287 10.995 12.7172C11.8753 12.3387 12.6042 12.1293 13.1691 12.0421C13.7356 11.9547 14.0724 12 14.229 12.0581C14.1928 12.1473 14.098 12.3159 13.8581 12.5566C13.5657 12.8499 13.5665 13.3248 13.8599 13.6172C14.1532 13.9096 14.6281 13.9089 14.9205 13.6155C15.3635 13.1711 15.7161 12.6413 15.7477 12.0696C15.7647 11.7632 15.6865 11.4587 15.4983 11.1974C15.3158 10.9438 15.063 10.7764 14.8003 10.671C14.2919 10.4669 13.6429 10.4512 12.9403 10.5597C12.2201 10.6708 11.3674 10.9243 10.4025 11.3392C10.1491 11.4481 9.95374 11.5142 9.80772 11.552C9.84707 11.4268 9.90752 11.2732 9.99306 11.0921C10.5385 9.9368 11.7964 8.28663 12.8115 7.26815C13.2522 6.82603 13.6063 6.34719 13.6633 5.83484C13.6957 5.54405 13.6297 5.25815 13.4596 5.01566C13.3005 4.78882 13.0854 4.64942 12.8957 4.56254C12.5297 4.39498 12.0898 4.34671 11.7204 4.33767C11.3321 4.32817 10.9314 4.3609 10.5923 4.4095C10.1823 4.46826 9.89755 4.84829 9.95632 5.25832C10.0151 5.66834 10.3951 5.95309 10.8051 5.89432Z',
  d10: 'M13.1924 1.25H13.1923H10.8077H10.8077C9.23337 1.24999 7.98494 1.24998 7.00744 1.36497C6.00729 1.48263 5.17687 1.73103 4.51033 2.31425C3.82938 2.91008 3.52559 3.6743 3.38423 4.59428C3.24995 5.46819 3.24997 6.5766 3.25 7.93852V7.93855V16H20.75V7.93855C20.75 6.57662 20.7501 5.4682 20.6158 4.59428C20.4744 3.6743 20.1706 2.91008 19.4897 2.31425C18.8231 1.73103 17.9927 1.48263 16.9926 1.36497C16.0151 1.24998 14.7666 1.24999 13.1924 1.25Z',
  d11: 'M15.3385 16H16.6619C16.737 16.0663 16.8034 16.1451 16.8576 16.2356L19.8576 21.2356C20.1418 21.7092 19.9882 22.3234 19.5146 22.6076C19.0411 22.8917 18.4268 22.7382 18.1427 22.2646L15.1427 17.2646C14.8904 16.8441 14.9831 16.3128 15.3385 16ZM11.3388 16H12.6615C12.8692 16.1832 13.0002 16.4514 13.0002 16.7501V20.7501C13.0002 21.3024 12.5524 21.7501 12.0002 21.7501C11.4479 21.7501 11.0002 21.3024 11.0002 20.7501V16.7501C11.0002 16.4514 11.1311 16.1832 11.3388 16ZM7.33841 16H8.66175C9.01717 16.3128 9.10992 16.8441 8.85764 17.2646L5.85764 22.2646C5.5735 22.7382 4.95924 22.8917 4.48566 22.6076C4.01208 22.3234 3.85851 21.7092 4.14266 21.2356L7.14266 16.2356C7.19695 16.1451 7.2633 16.0663 7.33841 16Z',
  d12: 'M3 16C2.44772 16 2 16.4477 2 17C2 17.5523 2.44772 18 3 18H21C21.5523 18 22 17.5523 22 17C22 16.4477 21.5523 16 21 16H3Z',
  d13: 'M11.6836 5.83713C11.3964 5.8301 11.081 5.85467 10.805 5.89423C10.395 5.953 10.015 5.66825 9.9562 5.25823C9.89743 4.8482 10.1822 4.46817 10.5922 4.40941C10.9312 4.36081 11.332 4.32808 11.7203 4.33758C12.0897 4.34662 12.5295 4.39489 12.8955 4.56245C13.0853 4.64933 13.3004 4.78873 13.4595 5.01557C13.6296 5.25806 13.6955 5.54396 13.6632 5.83475C13.6062 6.3471 13.2521 6.82594 12.8114 7.26806C11.7962 8.28654 10.5383 9.93671 9.99294 11.092C9.9074 11.2731 9.84695 11.4267 9.8076 11.5519C9.95362 11.5141 10.149 11.448 10.4024 11.3391C11.3672 10.9242 12.22 10.6707 12.9402 10.5596C13.6428 10.4511 14.2917 10.4668 14.8002 10.6709C15.0629 10.7763 15.3156 10.9437 15.4982 11.1973C15.6864 11.4587 15.7645 11.7631 15.7476 12.0695C15.716 12.6412 15.3634 13.171 14.9204 13.6154C14.628 13.9088 14.1531 13.9095 13.8598 13.6171C13.5664 13.3247 13.5656 12.8498 13.858 12.5565C14.0979 12.3158 14.1927 12.1472 14.2288 12.0581C14.0723 11.9999 13.7355 11.9546 13.169 12.042C12.604 12.1292 11.8752 12.3386 10.9949 12.7171C10.503 12.9286 10.0576 13.0656 9.67057 13.0915C9.28323 13.1174 8.79998 13.0347 8.48927 12.6145C8.20925 12.2358 8.22865 11.7847 8.28273 11.479C8.3414 11.1473 8.47484 10.794 8.63651 10.4516C9.27729 9.09432 10.6554 7.30635 11.749 6.20913C11.8852 6.07249 11.9823 5.9592 12.0499 5.86807C11.9536 5.85246 11.8316 5.84075 11.6836 5.83713Z',
  d14: 'M20 2H4V16H20V2Z',
  d15: 'M2 16H22',
  d16: 'M10.6987 5.06588C11.9289 4.88957 13.9674 4.9601 12.2803 6.65266C10.1715 8.76836 7.00837 13.5289 10.6987 11.9421C14.3891 10.3554 15.9709 11.4132 14.3893 13',
  d17: 'M12 16V21',
  d18: 'M5 22L8 16',
  d19: 'M19 22L16 16',
  d20: 'M4 1.25C3.80109 1.25 3.61032 1.32902 3.46967 1.46967C3.32902 1.61032 3.25 1.80109 3.25 2V16C3.25 16.4142 3.58579 16.75 4 16.75H20C20.4142 16.75 20.75 16.4142 20.75 16V2C20.75 1.58579 20.4142 1.25 20 1.25H4ZM10.805 5.80829C11.081 5.76873 11.3964 5.74417 11.6836 5.75119C11.8316 5.75482 11.9536 5.76652 12.0499 5.78213C11.9823 5.87326 11.8852 5.98655 11.749 6.1232C10.6554 7.22041 9.27729 9.00838 8.63651 10.3656C8.47484 10.7081 8.3414 11.0614 8.28273 11.393C8.22865 11.6988 8.20925 12.1498 8.48927 12.5285C8.79998 12.9487 9.28323 13.0314 9.67057 13.0056C10.0576 12.9797 10.503 12.8426 10.9949 12.6312C11.8752 12.2527 12.604 12.0433 13.169 11.9561C13.7355 11.8687 14.0723 11.914 14.2288 11.9721C14.1927 12.0613 14.0979 12.2299 13.858 12.4705L14.9204 13.5295C15.3634 13.085 15.716 12.5553 15.7476 11.9836C15.7645 11.6771 15.6864 11.3727 15.4982 11.1114C15.3156 10.8578 15.0629 10.6903 14.8002 10.5849C14.2917 10.3809 13.6428 10.3652 12.9402 10.4737C12.22 10.5848 11.3673 10.8383 10.4024 11.2531C10.149 11.3621 9.95362 11.4282 9.8076 11.466C9.84695 11.3407 9.9074 11.1872 9.99294 11.006C10.5383 9.85077 11.7962 8.20061 12.8114 7.18212C13.2521 6.74 13.6062 6.26116 13.6632 5.74881C13.6955 5.45803 13.6296 5.17212 13.4595 4.92963C13.3004 4.70279 13.0853 4.56339 12.8955 4.47651C12.5295 4.30896 12.0897 4.26068 11.7203 4.25164C11.332 4.24214 10.9312 4.27488 10.5922 4.32347L10.805 5.80829Z',
  d21: 'M17.618 17.3027H22V15.3027H2V17.3027H6.38204L4.10568 21.8555L5.89453 22.7499L8.61811 17.3027H11V21.3027H13V17.3027H15.3819L18.1055 22.7499L19.8943 21.8555L17.618 17.3027Z',
};

export const IconCanvasStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="canvas-stroke-rounded IconCanvasStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCanvasDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="canvas-duotone-rounded IconCanvasDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCanvasTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="canvas-twotone-rounded IconCanvasTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCanvasSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="canvas-solid-rounded IconCanvasSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCanvasBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="canvas-bulk-rounded IconCanvasBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCanvasStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="canvas-stroke-sharp IconCanvasStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCanvasSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="canvas-solid-sharp IconCanvasSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCanvas: TheIconSelfPack = {
  name: 'Canvas',
  StrokeRounded: IconCanvasStrokeRounded,
  DuotoneRounded: IconCanvasDuotoneRounded,
  TwotoneRounded: IconCanvasTwotoneRounded,
  SolidRounded: IconCanvasSolidRounded,
  BulkRounded: IconCanvasBulkRounded,
  StrokeSharp: IconCanvasStrokeSharp,
  SolidSharp: IconCanvasSolidSharp,
};