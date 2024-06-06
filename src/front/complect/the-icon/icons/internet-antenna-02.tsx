import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 18.001C2.74418 16.3295 2 14.2516 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2516 21.2558 16.3295 20 18.001',
  d2: 'M7.52779 16C6.57771 14.9385 6 13.5367 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 13.5367 17.4223 14.9385 16.4722 16',
  d3: 'M12 14L12 19',
  d4: 'M13.2623 19H10.7377C10.4667 19 10.3312 19 10.2019 19.0183C9.94003 19.0552 9.69171 19.1474 9.4774 19.2873C9.37156 19.3564 9.27574 19.4423 9.08411 19.614C8.45381 20.1791 8.13866 20.4616 8.05571 20.6884C7.88399 21.1577 8.12031 21.6692 8.61197 21.8923C8.84946 22 9.29515 22 10.1865 22H13.8135C14.7049 22 15.1505 22 15.388 21.8923C15.8797 21.6692 16.116 21.1577 15.9443 20.6884C15.8613 20.4616 15.5462 20.1791 14.9159 19.614C14.7243 19.4423 14.6284 19.3564 14.5226 19.2873C14.3083 19.1474 14.06 19.0552 13.7981 19.0183C13.6688 19 13.5333 19 13.2623 19Z',
  d5: 'M12 3C7.02944 3 3 7.02944 3 12C3 14.0276 3.66932 15.8961 4.79949 17.4003C5.13124 17.8418 5.04222 18.4687 4.60067 18.8005C4.15913 19.1322 3.53225 19.0432 3.20051 18.6017C1.81903 16.7629 1 14.4757 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 14.4757 22.181 16.7629 20.7995 18.6017C20.4678 19.0432 19.8409 19.1322 19.3993 18.8005C18.9578 18.4687 18.8688 17.8418 19.2005 17.4003C20.3307 15.8961 21 14.0276 21 12C21 7.02944 16.9706 3 12 3Z',
  d6: 'M12 7C9.23858 7 7 9.23858 7 12C7 13.2812 7.48059 14.4478 8.27292 15.3331C8.64125 15.7446 8.60623 16.3768 8.1947 16.7451C7.78317 17.1135 7.15098 17.0784 6.78265 16.6669C5.67482 15.4291 5 13.7922 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 13.7922 18.3252 15.4291 17.2173 16.6669C16.849 17.0784 16.2168 17.1135 15.8053 16.7451C15.3938 16.3768 15.3588 15.7446 15.7271 15.3331C16.5194 14.4478 17 13.2812 17 12C17 9.23858 14.7614 7 12 7Z',
  d7: 'M9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12C14.75 13.166 14.0243 14.1625 13 14.5625V18.25L13.3036 18.25C13.534 18.2499 13.7198 18.2498 13.9025 18.2756C14.2695 18.3274 14.6226 18.4572 14.9321 18.6592C15.0872 18.7604 15.2238 18.8831 15.3851 19.0278L15.4342 19.0718C15.734 19.3406 15.9841 19.5648 16.1679 19.7504C16.3395 19.9237 16.5458 20.1508 16.6482 20.4307C16.9712 21.3134 16.5012 22.2106 15.6975 22.5753C15.4402 22.692 15.1454 22.7216 14.8855 22.7355C14.6129 22.75 14.2621 22.75 13.8351 22.75H10.164C9.73711 22.75 9.38633 22.75 9.11369 22.7355C8.85377 22.7216 8.55898 22.692 8.3017 22.5753C7.49797 22.2106 7.02802 21.3134 7.35097 20.4307C7.45335 20.1508 7.65969 19.9237 7.83132 19.7504C8.01508 19.5648 8.26522 19.3406 8.56499 19.0718L8.61406 19.0278C8.77537 18.8831 8.91202 18.7604 9.06711 18.6592C9.3766 18.4572 9.72969 18.3274 10.0967 18.2756C10.2794 18.2498 10.4652 18.2499 10.6955 18.25L11 18.25V14.5625C9.97566 14.1625 9.25 13.166 9.25 12Z',
  d8: 'M12 13C12.5523 13 13 13.4477 13 14L13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19L11 14C11 13.4477 11.4477 13 12 13Z',
  d9: 'M16.1679 19.7504C15.9841 19.5648 15.734 19.3406 15.4342 19.0718C14.8053 18.5077 14.1339 18.2497 13.3036 18.25H10.6955C9.86528 18.2497 9.19394 18.5077 8.56499 19.0718L8.56492 19.0719C8.26518 19.3406 8.01507 19.5648 7.83132 19.7504C7.65969 19.9237 7.45335 20.1508 7.35097 20.4307C7.02802 21.3134 7.49797 22.2106 8.3017 22.5753C8.55898 22.692 8.85377 22.7216 9.11369 22.7355C9.38633 22.75 9.73711 22.75 10.164 22.75H13.8351C14.2621 22.75 14.6129 22.75 14.8855 22.7355C15.1454 22.7216 15.4402 22.692 15.6975 22.5753C16.5012 22.2106 16.9712 21.3134 16.6482 20.4307C16.5458 20.1508 16.3395 19.9237 16.1679 19.7504Z',
  d10: 'M12 9.25C10.4812 9.25 9.25 10.4812 9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25Z',
  d11: 'M9.99902 19V18.25H9.82197L9.66361 18.3292L9.99902 19ZM13.999 19L14.3343 18.3291L14.176 18.25H13.999V19ZM15.9999 22V22.75C16.4142 22.75 16.7499 22.4142 16.7499 22H15.9999ZM7.99902 22H7.24902C7.24902 22.4142 7.58481 22.75 7.99902 22.75V22ZM7.99902 20L7.66361 19.3292L7.24902 19.5365V20H7.99902ZM15.9999 20H16.7499V19.5364L16.3352 19.3291L15.9999 20ZM9.99902 19.75H13.999V18.25H9.99902V19.75ZM8.74902 22V20H7.24902V22H8.74902ZM9.66361 18.3292L7.66361 19.3292L8.33443 20.6708L10.3344 19.6708L9.66361 18.3292ZM13.6637 19.6709L15.6647 20.6709L16.3352 19.3291L14.3343 18.3291L13.6637 19.6709ZM15.9999 21.25H7.99902V22.75H15.9999V21.25ZM15.2499 20V22H16.7499V20H15.2499Z',
  d12: 'M3 12.25C3 7.27944 7.02944 3.25 12 3.25C16.9706 3.25 21 7.27944 21 12.25C21 14.2261 20.3643 16.0509 19.2858 17.5348L20.8746 18.7498C22.2104 16.9287 23 14.6802 23 12.25C23 6.17487 18.0751 1.25 12 1.25C5.92487 1.25 1 6.17487 1 12.25C1 14.6802 1.78926 16.9289 3.12504 18.75L4.71413 17.5348C3.6357 16.0509 3 14.226 3 12.25Z',
  d13: 'M7 12.25C7 9.48858 9.23858 7.25 12 7.25C14.7614 7.25 17 9.48858 17 12.25C17 13.3115 16.6701 14.2942 16.1064 15.1035L17.6963 16.3193C18.5165 15.1727 19 13.7669 19 12.25C19 8.38401 15.866 5.25 12 5.25C8.13401 5.25 5 8.38401 5 12.25C5 13.7669 5.48345 15.1726 6.30371 16.3192L7.89352 15.1035C7.32984 14.2942 7 13.3114 7 12.25Z',
  d14: 'M12 9.25C10.3431 9.25 9 10.5931 9 12.25C9 13.9069 10.3431 15.25 12 15.25C13.6569 15.25 15 13.9069 15 12.25C15 10.5931 13.6569 9.25 12 9.25Z',
  d15: 'M14.177 18.25H13V14H11L11 18.25H9.82295L7.25 19.5365V22C7.25 22.4142 7.58579 22.75 8 22.75H16.0009C16.4151 22.75 16.7509 22.4142 16.7509 22V19.5364L14.177 18.25Z',
};

export const IconInternetAntenna02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-antenna-02-stroke-rounded IconInternetAntenna02StrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInternetAntenna02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-antenna-02-duotone-rounded IconInternetAntenna02DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="2" 
        fill="var(--icon-fill)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInternetAntenna02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-antenna-02-twotone-rounded IconInternetAntenna02TwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInternetAntenna02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-antenna-02-solid-rounded IconInternetAntenna02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInternetAntenna02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-antenna-02-bulk-rounded IconInternetAntenna02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInternetAntenna02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-antenna-02-stroke-sharp IconInternetAntenna02StrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInternetAntenna02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="internet-antenna-02-solid-sharp IconInternetAntenna02SolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfInternetAntenna02: TheIconSelfPack = {
  name: 'InternetAntenna02',
  StrokeRounded: IconInternetAntenna02StrokeRounded,
  DuotoneRounded: IconInternetAntenna02DuotoneRounded,
  TwotoneRounded: IconInternetAntenna02TwotoneRounded,
  SolidRounded: IconInternetAntenna02SolidRounded,
  BulkRounded: IconInternetAntenna02BulkRounded,
  StrokeSharp: IconInternetAntenna02StrokeSharp,
  SolidSharp: IconInternetAntenna02SolidSharp,
};