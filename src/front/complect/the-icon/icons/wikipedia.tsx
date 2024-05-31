import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M5 8H6.05M6.05 8H7M6.05 8L8.62731 14.8207C9.17631 16.2736 9.45081 17 9.9 17C10.3492 17 10.6237 16.2736 11.1727 14.8207L13.75 8H14.5M9.5 8H10.25L12.8273 14.8207C13.3763 16.2736 13.6508 17 14.1 17C14.5492 17 14.8237 16.2736 15.3727 14.8207L17.95 8M17.95 8H17M17.95 8H19',
  d3: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.7521 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75ZM5 7.25C4.58579 7.25 4.25 7.58579 4.25 8C4.25 8.41421 4.58579 8.75 5 8.75H5.53164L7.94522 15.1374C8.20304 15.8198 8.42283 16.4015 8.63908 16.8077C8.82898 17.1643 9.19835 17.75 9.9 17.75C10.6017 17.75 10.971 17.1643 11.1609 16.8077C11.3772 16.4015 11.5969 15.8198 11.8548 15.1374L11.8548 15.1374L12 14.753L12.1452 15.1374C12.403 15.8198 12.6228 16.4015 12.8391 16.8077C13.029 17.1643 13.3983 17.75 14.1 17.75C14.8017 17.75 15.171 17.1643 15.3609 16.8077C15.5772 16.4015 15.797 15.8198 16.0548 15.1374L18.4684 8.75H19C19.4142 8.75 19.75 8.41421 19.75 8C19.75 7.58579 19.4142 7.25 19 7.25H17C16.5858 7.25 16.25 7.58579 16.25 8C16.25 8.36958 16.5173 8.67672 16.8691 8.73862L14.6711 14.5556C14.4237 15.2102 14.2501 15.6663 14.1 15.9778C13.9499 15.6663 13.7763 15.2102 13.5289 14.5556L12.8018 12.6312L14.2684 8.75H14.5C14.9142 8.75 15.25 8.41421 15.25 8C15.25 7.58579 14.9142 7.25 14.5 7.25H13.75C13.4381 7.25 13.1587 7.44309 13.0484 7.73489L12 10.5095L10.9516 7.73489C10.8413 7.44309 10.5619 7.25 10.25 7.25H9.5C9.08579 7.25 8.75 7.58579 8.75 8C8.75 8.41421 9.08579 8.75 9.5 8.75H9.73164L11.1982 12.6312L10.4711 14.5556C10.2237 15.2102 10.0501 15.6663 9.9 15.9778C9.74985 15.6663 9.57626 15.2102 9.32889 14.5556L7.13086 8.73862C7.48269 8.67672 7.75 8.36958 7.75 8C7.75 7.58579 7.41421 7.25 7 7.25H5Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d5: 'M4.25 8C4.25 7.58579 4.58579 7.25 5 7.25H7C7.41421 7.25 7.75 7.58579 7.75 8C7.75 8.36958 7.48269 8.67672 7.13086 8.73862L9.32889 14.5556C9.57626 15.2102 9.74985 15.6663 9.9 15.9778C10.0501 15.6663 10.2237 15.2102 10.4711 14.5556L11.1982 12.6312L9.73164 8.75H9.5C9.08579 8.75 8.75 8.41421 8.75 8C8.75 7.58579 9.08579 7.25 9.5 7.25H10.25C10.5619 7.25 10.8413 7.44309 10.9516 7.73489L12 10.5095L13.0484 7.73489C13.1587 7.44309 13.4381 7.25 13.75 7.25H14.5C14.9142 7.25 15.25 7.58579 15.25 8C15.25 8.41421 14.9142 8.75 14.5 8.75H14.2684L12.8018 12.6312L13.5289 14.5556C13.7763 15.2102 13.9499 15.6663 14.1 15.9778C14.2501 15.6663 14.4237 15.2102 14.6711 14.5556L16.8691 8.73862C16.5173 8.67672 16.25 8.36958 16.25 8C16.25 7.58579 16.5858 7.25 17 7.25H19C19.4142 7.25 19.75 7.58579 19.75 8C19.75 8.41421 19.4142 8.75 19 8.75H18.4684L16.0548 15.1374C15.797 15.8198 15.5772 16.4015 15.3609 16.8077C15.171 17.1643 14.8017 17.75 14.1 17.75C13.3983 17.75 13.029 17.1643 12.8391 16.8077C12.6228 16.4015 12.403 15.8198 12.1452 15.1374L12 14.753L11.8548 15.1374L11.8548 15.1374C11.597 15.8198 11.3772 16.4015 11.1609 16.8077C10.971 17.1643 10.6017 17.75 9.9 17.75C9.19835 17.75 8.82898 17.1643 8.63908 16.8077C8.42283 16.4015 8.20304 15.8198 7.94522 15.1374L5.53164 8.75H5C4.58579 8.75 4.25 8.41421 4.25 8Z',
  d6: 'M21 3V21H3V3H21Z',
  d7: 'M4.5 8H6.05M6.05 8H8M6.05 8L9.5 17L13.75 8H15M9 8H10.25L14.5 17L17.95 8M17.95 8H16M17.95 8H19.5',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM4.5 8.75H5.53428L8.79969 17.2685C8.9072 17.5489 9.17168 17.7382 9.47184 17.7495C9.77199 17.7608 10.0499 17.5919 10.1782 17.3203L12 13.4623L13.8218 17.3203C13.9501 17.5919 14.228 17.7608 14.5282 17.7495C14.8283 17.7382 15.0928 17.5489 15.2003 17.2685L18.4657 8.75H19.5V7.25H16V8.75H16.8593L14.4283 15.0917L12.8294 11.7059L14.2253 8.75H15V7.25H13.75C13.4598 7.25 13.1957 7.41737 13.0718 7.67975L12 9.94947L10.9282 7.67975C10.8043 7.41737 10.5402 7.25 10.25 7.25L9 7.25V8.75L9.77475 8.75L11.1706 11.7059L9.57171 15.0917L7.14072 8.75H8V7.25H4.5V8.75Z',
} as const;

export const IconWikipediaStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wikipedia-stroke-rounded IconWikipediaStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWikipediaDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wikipedia-duotone-rounded IconWikipediaDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWikipediaTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wikipedia-twotone-rounded IconWikipediaTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWikipediaSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wikipedia-solid-rounded IconWikipediaSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWikipediaBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wikipedia-bulk-rounded IconWikipediaBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWikipediaStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wikipedia-stroke-sharp IconWikipediaStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWikipediaSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wikipedia-solid-sharp IconWikipediaSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWikipedia: TheIconSelfPack = {
  name: 'Wikipedia',
  StrokeRounded: IconWikipediaStrokeRounded,
  DuotoneRounded: IconWikipediaDuotoneRounded,
  TwotoneRounded: IconWikipediaTwotoneRounded,
  SolidRounded: IconWikipediaSolidRounded,
  BulkRounded: IconWikipediaBulkRounded,
  StrokeSharp: IconWikipediaStrokeSharp,
  SolidSharp: IconWikipediaSolidSharp,
};