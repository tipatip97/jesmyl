import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22.0027 4.50049H16.0063M22.0027 4.50049C22.0027 3.80026 20.0096 2.49202 19.5042 2.00049M22.0027 4.50049C22.0027 5.20072 20.0096 6.50896 19.5042 7.00049',
  d2: 'M1.99816 10.8266L2.94625 10.8266C3.59136 10.8266 4.2193 10.6178 4.73702 10.2311L9.63686 6.57098C10.202 6.14885 10.9031 5.8117 11.5503 6.09039C12.5981 6.54155 13.2788 7.81436 11.7079 9.37227L9.99955 10.9706L20.4162 10.9706C22.4581 11.0268 22.5593 14.3171 20.4162 14.4578L14.4799 14.4578C14.6709 15.9388 13.6281 22.9156 9.21058 21.8986C9.0007 21.8503 8.78772 21.8021 8.57757 21.755C7.65937 21.5492 6.02293 20.941 5.06625 20.2702C4.07032 19.5719 3.07832 19.8183 1.99816 19.8183',
  d3: 'M6.30682 20.9985C7.78211 21.7056 10.6694 22.6732 12.0289 21.3211C14.172 19.1895 14.5644 16.2082 14.4884 14.5H20.2331C21.1987 14.5 21.9815 13.7165 21.9815 12.75C21.9815 11.7835 21.1987 11 20.2331 11H9.9926L12.3191 8.78341C12.9587 8.05938 12.8527 6.96519 12.0854 6.36948C11.4468 5.87385 10.5387 5.87719 9.90405 6.37749L5.57307 9.65863C4.81856 10.2303 4.44127 10.5161 4.00083 10.6732C3.96174 10.6871 3.92237 10.7003 3.88273 10.7126C3.43591 10.8518 2.95727 10.8518 2 10.8518V19.8919H3.61652C4.54129 19.8919 5.50873 20.6159 6.30682 20.9985Z',
  d4: 'M21.9818 4.5H15.9873M21.9818 4.5C21.9818 3.79977 19.9893 2.49153 19.4841 2M21.9818 4.5C21.9818 5.20023 19.9893 6.50847 19.4841 7',
  d5: 'M2.03125 10.8264H2.97846C3.62298 10.8264 4.25033 10.6176 4.76758 10.2309L9.66288 6.57074C10.2275 6.14861 10.9279 5.81146 11.5745 6.09015C12.6214 6.54131 13.3014 7.81412 11.732 9.37203L10.0252 10.9704H20.4322C22.4723 11.0266 22.5734 14.3169 20.4322 14.4576H14.5014C14.6923 15.9386 13.6504 22.9154 9.23699 21.8984C9.02731 21.8501 8.81453 21.8019 8.60457 21.7548C7.68722 21.549 6.05229 20.9408 5.0965 20.27C4.10149 19.5717 3.11041 19.8181 2.03125 19.8181',
  d6: 'M21.9996 4.49987H15.9961M21.9996 4.49987C21.9996 3.79988 20.0041 2.49209 19.4981 2.00073M21.9996 4.49987C21.9996 5.19986 20.0041 6.50765 19.4981 6.99901',
  d7: 'M2 10.8303H2.94864C3.59413 10.8303 4.22243 10.6216 4.74045 10.235L9.64314 6.57615C10.2086 6.15417 10.9101 5.81713 11.5577 6.09573C12.6061 6.54673 13.2872 7.81911 11.7154 9.37648L10.006 10.9743H20.4287C22.4718 11.0304 22.5731 14.3196 20.4287 14.4603H14.489C14.6801 15.9408 13.6367 22.9152 9.21661 21.8985C9.00661 21.8502 8.79351 21.802 8.58324 21.755C7.6645 21.5492 6.02711 20.9412 5.06987 20.2707C4.07336 19.5726 3.08079 19.8189 2 19.8189',
  d8: 'M20.25 10.2502C21.6307 10.2502 22.75 11.3695 22.75 12.7502C22.75 14.131 21.6307 15.2502 20.25 15.2502H15.2525C15.1894 17.1141 14.6138 19.8193 12.5668 21.8533C11.6249 22.7893 10.2471 22.8447 9.1069 22.674C7.93015 22.4978 6.76409 22.0473 5.98688 21.6751C5.77359 21.5559 4.8798 21.0744 4.67654 20.9728C4.24372 20.7564 3.89992 20.6421 3.61802 20.6421C3.35274 20.6421 3.08205 20.6422 2.87858 20.625C2.65905 20.6066 2.41913 20.5643 2.18353 20.44C1.87161 20.2754 1.61667 20.0205 1.45214 19.7086C1.32786 19.473 1.28555 19.2331 1.26708 19.0135C1.24996 18.8101 1.24998 18.5664 1.25 18.3011V12.7166C1.24997 12.4089 1.24994 12.1254 1.27335 11.8896C1.29882 11.633 1.39965 11.1699 1.66177 10.9077C1.88929 10.6377 2.22105 10.4886 2.4938 10.3826C2.78506 10.2695 3.17066 10.1495 3.63451 10.0052C3.94162 9.89574 4.33239 9.65984 5.12375 9.06086L9.45346 5.78372C10.359 5.07504 11.6452 5.07203 12.5543 5.77706C13.6612 6.63549 13.8207 8.22852 12.8906 9.28045L11.8758 10.2502L20.25 10.2502Z',
  d9: 'M15.7461 5.5061C15.1938 5.5061 14.7461 5.05839 14.7461 4.5061C14.7461 3.95382 15.1938 3.5061 15.7461 3.5061L18.2461 3.5061L18.2461 2.91184C18.246 2.73621 18.2458 2.52056 18.2679 2.34412L18.2683 2.34077C18.2841 2.21432 18.3559 1.63828 18.9215 1.36392C19.4883 1.08896 19.9885 1.3909 20.0967 1.45622L20.5652 1.79536C20.941 2.08999 21.4555 2.49569 21.8465 2.87612C22.0416 3.06595 22.2428 3.28322 22.4017 3.51412C22.5429 3.71938 22.7461 4.06958 22.7461 4.50024C22.7461 4.93091 22.5429 5.2811 22.4017 5.48636C22.2428 5.71727 22.0416 5.93454 21.8465 6.12437C21.4555 6.5048 20.941 6.91049 20.5652 7.20512L20.0967 7.54427C19.9885 7.60959 19.4883 7.91153 18.9215 7.63657C18.3559 7.36221 18.2841 6.78616 18.2683 6.65972L18.2679 6.65637C18.2458 6.47993 18.246 6.26428 18.2461 6.08864L18.2461 5.5061L15.7461 5.5061Z',
  d10: 'M15.9897 4.49278H21.2693M19.4766 2.00073L21.9673 4.49278L19.4766 6.98483',
  d11: 'M1.99951 10.8969L4.04298 10.897L9.89746 6.45972C10.0167 6.36936 10.1481 6.29593 10.2827 6.23051C10.4283 6.15973 10.5794 6.09942 10.7384 6.06863C10.8098 6.0548 10.8511 6.05473 11.0238 6.05445L11.0254 6.05445C11.2864 6.05402 11.5044 6.07782 11.7771 6.19901C11.9127 6.25925 12.0791 6.39108 12.1743 6.4637C12.5539 6.75324 12.762 7.25146 12.7776 7.76344C12.7931 8.27236 12.5454 8.63059 12.1736 8.97841C11.4422 9.66253 10.8095 10.2287 9.97536 11.0436L19.9245 11.0439C20.4538 11.0422 21.0807 11.1425 21.429 11.5074C22.1866 12.3655 22.1923 13.1405 21.4368 14.0473C21.0882 14.4288 20.5413 14.5155 19.9983 14.5172L14.464 14.517C14.634 17.5265 13.4255 19.7467 12.5632 20.7944C11.6927 21.852 10.757 22.1609 9.14377 21.9241C7.44313 21.6359 6.26982 20.9617 4.02824 19.9034L2.03962 19.9034',
  d12: 'M4.5305 20.4787C5.00932 20.7075 5.58776 20.984 5.98688 21.1751C6.76409 21.5473 7.93015 21.9978 9.1069 22.174C10.2471 22.3447 11.6249 22.2893 12.5668 21.3533C14.6138 19.3193 15.1894 16.6141 15.2525 14.7502H20.25C21.6307 14.7502 22.75 13.631 22.75 12.2502C22.75 10.8695 21.6307 9.75024 20.25 9.75024L11.8758 9.75024L12.8692 8.80464L12.8906 8.78045C13.8207 7.72852 13.6612 6.13549 12.5543 5.27706C11.6453 4.57207 10.3591 4.57504 9.45361 5.28361L3.74439 9.60205H1.25V20.1421H3.82615L4.5305 20.4787Z',
  d13: 'M19.543 1.75024L22.7502 4.95735L19.543 8.16446L18.1288 6.75024L18.9217 5.95735L15.3359 5.95735V3.95735L18.9217 3.95735L18.1288 3.16446L19.543 1.75024Z',
} as const;

export const IconPointingRight01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-01-stroke-rounded IconPointingRight01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPointingRight01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-01-duotone-rounded IconPointingRight01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingRight01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-01-twotone-rounded IconPointingRight01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingRight01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-01-solid-rounded IconPointingRight01SolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingRight01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-01-bulk-rounded IconPointingRight01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingRight01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-01-stroke-sharp IconPointingRight01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingRight01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-01-solid-sharp IconPointingRight01SolidSharp"
    >
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

export const iconPackOfPointingRight01: TheIconSelfPack = {
  name: 'PointingRight01',
  StrokeRounded: IconPointingRight01StrokeRounded,
  DuotoneRounded: IconPointingRight01DuotoneRounded,
  TwotoneRounded: IconPointingRight01TwotoneRounded,
  SolidRounded: IconPointingRight01SolidRounded,
  BulkRounded: IconPointingRight01BulkRounded,
  StrokeSharp: IconPointingRight01StrokeSharp,
  SolidSharp: IconPointingRight01SolidSharp,
};