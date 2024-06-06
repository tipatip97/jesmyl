import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 18V22',
  d2: 'M10 18L5 22',
  d3: 'M14 18L19 22',
  d4: 'M2.5 12C2.5 14.8284 2.5 16.2426 3.37868 17.1213C4.25736 18 5.67157 18 8.5 18H15.5C18.3284 18 19.7426 18 20.6213 17.1213C21.5 16.2426 21.5 14.8284 21.5 12V8C21.5 5.17157 21.5 3.75736 20.6213 2.87868C19.7426 2 18.3284 2 15.5 2H8.5C5.67157 2 4.25736 2 3.37868 2.87868C2.5 3.75736 2.5 5.17157 2.5 8V12Z',
  d5: 'M8 13V10M12 13V7M16 13V11',
  d6: 'M12 17C12.5523 17 13 17.4477 13 18V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V18.0115C10.9965 18.3008 10.8682 18.5861 10.6247 18.7809L5.62473 22.7809C5.19347 23.1259 4.56418 23.056 4.21917 22.6247C3.87416 22.1935 3.94408 21.5642 4.37534 21.2192L9.37534 17.2192C9.8066 16.8742 10.4359 16.9441 10.7809 17.3753C10.9265 17.5574 10.9982 17.7747 11 17.9911C11.0048 17.4429 11.4507 17 12 17Z',
  d7: 'M14.6247 17.2192C14.1935 16.8742 13.5642 16.9441 13.2192 17.3753C12.8742 17.8066 12.9441 18.4359 13.3753 18.7809L18.3753 22.7809C18.8066 23.1259 19.4359 23.056 19.7809 22.6247C20.1259 22.1935 20.056 21.5642 19.6247 21.2192L14.6247 17.2192Z',
  d8: 'M1.75 12.1875C1.75 15.2811 1.75 16.8279 2.69805 17.7889C3.6461 18.75 5.17196 18.75 8.22368 18.75H15.7763C18.828 18.75 20.3539 18.75 21.302 17.7889C22.25 16.8279 22.25 15.2811 22.25 12.1875V7.8125C22.25 4.71891 22.25 3.17211 21.302 2.21106C20.3539 1.25 18.828 1.25 15.7763 1.25H8.22368C5.17196 1.25 3.6461 1.25 2.69805 2.21106C1.75 3.17211 1.75 4.71891 1.75 7.8125V12.1875ZM13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V7ZM9 10C9 9.44772 8.55228 9 8 9C7.44772 9 7 9.44772 7 10V13C7 13.5523 7.44772 14 8 14C8.55228 14 9 13.5523 9 13V10ZM16 10C16.5523 10 17 10.4477 17 11V13C17 13.5523 16.5523 14 16 14C15.4477 14 15 13.5523 15 13V11C15 10.4477 15.4477 10 16 10Z',
  d9: 'M2.69805 17.7889C1.75 16.8279 1.75 15.2811 1.75 12.1875V7.8125C1.75 4.71891 1.75 3.17211 2.69805 2.21106C3.6461 1.25 5.17196 1.25 8.22368 1.25H15.7763C18.828 1.25 20.3539 1.25 21.302 2.21106C22.25 3.17211 22.25 4.71891 22.25 7.8125V12.1875C22.25 15.2811 22.25 16.8279 21.302 17.7889C20.3539 18.75 18.828 18.75 15.7763 18.75H8.22368C5.17196 18.75 3.6461 18.75 2.69805 17.7889Z',
  d10: 'M7.46259 18.7495L4.37534 21.2193C3.94408 21.5643 3.87416 22.1936 4.21917 22.6249C4.56418 23.0561 5.19347 23.1261 5.62473 22.781L10.6247 18.781C10.6373 18.771 10.6496 18.7607 10.6615 18.7501H8.22368C7.95869 18.7501 7.7052 18.7501 7.46259 18.7495ZM11 18.7501V22.0001C11 22.5524 11.4477 23.0001 12 23.0001C12.5523 23.0001 13 22.5524 13 22.0001V18.7501H11ZM13.3385 18.7501C13.3505 18.7607 13.3628 18.771 13.3753 18.781L18.3753 22.781C18.8066 23.1261 19.4359 23.0561 19.7809 22.6249C20.1259 22.1936 20.056 21.5643 19.6247 21.2193L16.5375 18.7495C16.2949 18.7501 16.0413 18.7501 15.7763 18.7501H13.3385Z',
  d11: 'M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V7Z',
  d12: 'M9 10C9 9.44772 8.55228 9 8 9C7.44772 9 7 9.44772 7 10V13C7 13.5523 7.44772 14 8 14C8.55228 14 9 13.5523 9 13V10Z',
  d13: 'M17 11C17 10.4477 16.5523 10 16 10C15.4477 10 15 10.4477 15 11V13C15 13.5523 15.4477 14 16 14C16.5523 14 17 13.5523 17 13V11Z',
  d14: 'M21 16V2H3V16L21 16Z',
  d15: 'M12 16L12 22',
  d16: 'M7 22L12.0001 19L17 22',
  d17: 'M8 13V9M12 13V6M16 13V10',
  d18: 'M11 19.6604V21.75H13V19.6603L16.4737 21.7501L17.5 20.0351L13 17.3279V15.75H11V17.328L6.5 20.0351L7.52628 21.7501L11 19.6604Z',
  d19: 'M3 1.25C2.58579 1.25 2.25 1.58579 2.25 2V16C2.25 16.4142 2.58579 16.75 3 16.75L21 16.75C21.1989 16.75 21.3897 16.671 21.5303 16.5303C21.671 16.3897 21.75 16.1989 21.75 16V2C21.75 1.58579 21.4142 1.25 21 1.25H3ZM13 13V6H11V13H13ZM9 13V9H7V13H9ZM17 13V10H15V13H17Z',
} as const;

export const IconPresentationBarChart01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-bar-chart-01-stroke-rounded IconPresentationBarChart01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentationBarChart01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-bar-chart-01-duotone-rounded IconPresentationBarChart01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentationBarChart01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-bar-chart-01-twotone-rounded IconPresentationBarChart01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentationBarChart01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-bar-chart-01-solid-rounded IconPresentationBarChart01SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentationBarChart01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-bar-chart-01-bulk-rounded IconPresentationBarChart01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentationBarChart01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-bar-chart-01-stroke-sharp IconPresentationBarChart01StrokeSharp"
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
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentationBarChart01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-bar-chart-01-solid-sharp IconPresentationBarChart01SolidSharp"
    >
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPresentationBarChart01: TheIconSelfPack = {
  name: 'PresentationBarChart01',
  StrokeRounded: IconPresentationBarChart01StrokeRounded,
  DuotoneRounded: IconPresentationBarChart01DuotoneRounded,
  TwotoneRounded: IconPresentationBarChart01TwotoneRounded,
  SolidRounded: IconPresentationBarChart01SolidRounded,
  BulkRounded: IconPresentationBarChart01BulkRounded,
  StrokeSharp: IconPresentationBarChart01StrokeSharp,
  SolidSharp: IconPresentationBarChart01SolidSharp,
};