import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 12C2 7.75736 2 5.63604 3.46447 4.31802C4.92893 3 7.28596 3 12 3C16.714 3 19.0711 3 20.5355 4.31802C22 5.63604 22 7.75736 22 12C22 16.2426 22 18.364 20.5355 19.682C19.0711 21 16.714 21 12 21C7.28596 21 4.92893 21 3.46447 19.682C2 18.364 2 16.2426 2 12Z',
  d2: 'M5 16.5C6.20831 13.9189 10.7122 13.7491 12 16.5M10.5 9.5C10.5 10.6046 9.60457 11.5 8.5 11.5C7.39543 11.5 6.5 10.6046 6.5 9.5C6.5 8.39543 7.39543 7.5 8.5 7.5C9.60457 7.5 10.5 8.39543 10.5 9.5Z',
  d3: 'M15 10H19',
  d4: 'M15 14H19',
  d5: 'M3.46447 4.31802C2 5.63604 2 7.75736 2 12C2 16.2426 2 18.364 3.46447 19.682C4.92893 21 7.28596 21 12 21C16.714 21 19.0711 21 20.5355 19.682C22 18.364 22 16.2426 22 12C22 7.75736 22 5.63604 20.5355 4.31802C19.0711 3 16.714 3 12 3C7.28596 3 4.92893 3 3.46447 4.31802ZM10.5 9.5C10.5 10.6046 9.60457 11.5 8.5 11.5C7.39543 11.5 6.5 10.6046 6.5 9.5C6.5 8.39543 7.39543 7.5 8.5 7.5C9.60457 7.5 10.5 8.39543 10.5 9.5ZM5 16.5C6.20831 13.9189 10.7122 13.7491 12 16.5H5Z',
  d6: 'M17.5765 2.42018C16.1699 2.24998 14.365 2.24999 12.0522 2.25C9.73933 2.24999 7.83014 2.24998 6.42355 2.42018C4.99222 2.59338 3.85936 2.95359 2.96274 3.76055C2.05481 4.57769 1.63908 5.62747 1.44129 6.95147C1.24997 8.23221 1.24998 9.99422 1.25 12.0625C1.24998 14.1308 1.24997 15.7678 1.44129 17.0485C1.63908 18.3725 2.05481 19.4223 2.96274 20.2395C3.85936 21.0464 4.99222 21.4066 6.42355 21.5798C7.83014 21.75 9.73935 21.75 12.0522 21.75C14.365 21.75 16.1699 21.75 17.5765 21.5798C19.0078 21.4066 20.1406 21.0464 21.0373 20.2395C21.9452 19.4223 22.3609 18.3725 22.5587 17.0485C22.75 15.7678 22.75 14.1308 22.75 12.0625C22.75 9.99426 22.75 8.23221 22.5587 6.95147C22.3609 5.62747 21.9452 4.57769 21.0373 3.76055C20.1406 2.95359 19.0078 2.59338 17.5765 2.42018ZM8.50018 6.75C6.9814 6.75 5.75018 7.98122 5.75018 9.5C5.75018 11.0188 6.9814 12.25 8.50018 12.25C10.019 12.25 11.2502 11.0188 11.2502 9.5C11.2502 7.98122 10.019 6.75 8.50018 6.75ZM5.67943 16.818C6.12793 15.8599 7.24064 15.2687 8.48143 15.2504C9.7131 15.2322 10.8358 15.7818 11.3209 16.818C11.4965 17.1931 11.943 17.3549 12.3182 17.1793C12.6933 17.0036 12.855 16.5572 12.6794 16.182C11.8767 14.4673 10.1036 13.7263 8.45929 13.7506C6.82412 13.7747 5.08074 14.559 4.32093 16.182C4.14531 16.5572 4.30705 17.0036 4.68219 17.1793C5.05733 17.3549 5.50381 17.1931 5.67943 16.818ZM14.25 10C14.25 9.58579 14.5858 9.25 15 9.25H19C19.4142 9.25 19.75 9.58579 19.75 10C19.75 10.4142 19.4142 10.75 19 10.75H15C14.5858 10.75 14.25 10.4142 14.25 10ZM15 13.25C14.5858 13.25 14.25 13.5858 14.25 14C14.25 14.4142 14.5858 14.75 15 14.75H19C19.4142 14.75 19.75 14.4142 19.75 14C19.75 13.5858 19.4142 13.25 19 13.25H15Z',
  d7: 'M12.0522 2.25C14.365 2.24999 16.1699 2.24998 17.5765 2.42018C19.0078 2.59338 20.1406 2.95359 21.0373 3.76055C21.9452 4.57769 22.3609 5.62747 22.5587 6.95147C22.75 8.23221 22.75 9.99426 22.75 12.0625C22.75 14.1308 22.75 15.7678 22.5587 17.0485C22.3609 18.3725 21.9452 19.4223 21.0373 20.2395C20.1406 21.0464 19.0078 21.4066 17.5765 21.5798C16.1699 21.75 14.365 21.75 12.0522 21.75C9.73935 21.75 7.83014 21.75 6.42355 21.5798C4.99222 21.4066 3.85936 21.0464 2.96274 20.2395C2.05481 19.4223 1.63907 18.3725 1.44129 17.0485C1.24997 15.7678 1.24998 14.1308 1.25 12.0625C1.24998 9.99422 1.24997 8.23221 1.44129 6.95147C1.63907 5.62747 2.05481 4.57769 2.96274 3.76055C3.85936 2.95359 4.99222 2.59338 6.42355 2.42018C7.83014 2.24998 9.73933 2.24999 12.0522 2.25Z',
  d8: 'M5.75018 9.5C5.75018 7.98122 6.9814 6.75 8.50018 6.75C10.019 6.75 11.2502 7.98122 11.2502 9.5C11.2502 11.0188 10.019 12.25 8.50018 12.25C6.9814 12.25 5.75018 11.0188 5.75018 9.5Z',
  d9: 'M8.48143 15.2504C7.24064 15.2687 6.12793 15.8599 5.67943 16.818C5.50381 17.1931 5.05733 17.3549 4.68219 17.1793C4.30705 17.0036 4.14531 16.5572 4.32093 16.182C5.08074 14.559 6.82412 13.7747 8.45929 13.7506C10.1036 13.7263 11.8767 14.4673 12.6794 16.182C12.855 16.5572 12.6933 17.0036 12.3182 17.1793C11.943 17.3549 11.4965 17.1931 11.3209 16.818C10.8358 15.7818 9.7131 15.2322 8.48143 15.2504Z',
  d10: 'M14.25 10C14.25 9.58579 14.5858 9.25 15 9.25H19C19.4142 9.25 19.75 9.58579 19.75 10C19.75 10.4142 19.4142 10.75 19 10.75H15C14.5858 10.75 14.25 10.4142 14.25 10Z',
  d11: 'M14.25 14C14.25 13.5858 14.5858 13.25 15 13.25H19C19.4142 13.25 19.75 13.5858 19.75 14C19.75 14.4142 19.4142 14.75 19 14.75H15C14.5858 14.75 14.25 14.4142 14.25 14Z',
  d12: 'M22 3H2V21H22V3Z',
  d13: 'M2 2.25C1.58579 2.25 1.25 2.58579 1.25 3V21C1.25 21.4142 1.58579 21.75 2 21.75H22C22.4142 21.75 22.75 21.4142 22.75 21V3C22.75 2.58579 22.4142 2.25 22 2.25H2ZM8.49957 6.75C6.98078 6.75 5.74957 7.98122 5.74957 9.5C5.74957 11.0188 6.98078 12.25 8.49957 12.25C10.0183 12.25 11.2496 11.0188 11.2496 9.5C11.2496 7.98122 10.0183 6.75 8.49957 6.75ZM5.67882 16.818C6.12732 15.8599 7.24003 15.2687 8.48082 15.2504C9.71249 15.2322 10.8352 15.7818 11.3203 16.818L12.6788 16.182C11.8761 14.4673 10.103 13.7263 8.45868 13.7506C6.8235 13.7747 5.08012 14.559 4.32031 16.182L5.67882 16.818ZM19 10.75H15V9.25H19V10.75ZM15 14.75H19V13.25H15V14.75Z',
} as const;

export const IconPassportStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="passport-stroke-rounded IconPassportStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPassportDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="passport-duotone-rounded IconPassportDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPassportTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="passport-twotone-rounded IconPassportTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPassportSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="passport-solid-rounded IconPassportSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPassportBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="passport-bulk-rounded IconPassportBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPassportStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="passport-stroke-sharp IconPassportStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPassportSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="passport-solid-sharp IconPassportSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPassport: TheIconSelfPack = {
  name: 'Passport',
  StrokeRounded: IconPassportStrokeRounded,
  DuotoneRounded: IconPassportDuotoneRounded,
  TwotoneRounded: IconPassportTwotoneRounded,
  SolidRounded: IconPassportSolidRounded,
  BulkRounded: IconPassportBulkRounded,
  StrokeSharp: IconPassportStrokeSharp,
  SolidSharp: IconPassportSolidSharp,
};