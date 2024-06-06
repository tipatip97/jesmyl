import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.1121 8.68466L12.965 3.7607C13.1063 2.94487 12.5712 2.16689 11.7698 2.02304C10.9684 1.87919 10.2042 2.42393 10.0629 3.23976L8.35714 13.0877L8.21569 13.8509L6.30622 11.837C5.61343 11.1239 4.47226 11.1889 3.86022 11.9765C3.3919 12.5791 3.37897 13.4315 3.82877 14.0489L6.75611 18.0667C7.42045 18.9785 7.75263 19.4345 8.15236 19.7888C8.76222 20.3294 9.49302 20.7056 10.2791 20.8834C10.7943 21 11.3479 21 12.4552 21H14.7886C17.0993 21 19.0901 19.3242 19.549 16.9929L20.3921 12.7094L20.4774 12.2171C20.6187 11.4012 20.0836 10.6232 19.2822 10.4794C18.4808 10.3355 17.7166 10.8803 17.5752 11.6961L17.49 12.1885M12.1121 8.68466L11.8563 10.1618M12.1121 8.68466C12.2534 7.86883 13.0177 7.32408 13.8191 7.46794C14.6205 7.61179 15.1556 8.38977 15.0143 9.20559L14.8437 10.1904M14.8437 10.1904L14.7584 10.6828M14.8437 10.1904C14.985 9.37456 15.7492 8.82981 16.5506 8.97367C17.352 9.11752 17.8871 9.89549 17.7458 10.7113L17.6605 11.2037',
  d2: 'M6.75611 18.0667L3.82877 14.0489C3.37897 13.4315 3.3919 12.5791 3.86022 11.9765C4.47226 11.1889 5.61343 11.1239 6.30622 11.837L8.21569 13.8509L8.35714 13.0877L10.0629 3.23976C10.2042 2.42393 10.9684 1.87919 11.7698 2.02304C12.5712 2.16689 13.1063 2.94487 12.965 3.7607L12.1121 8.68466C12.2534 7.86883 13.0177 7.32408 13.8191 7.46794C14.6205 7.61179 15.1556 8.38977 15.0143 9.20559L14.8437 10.1904C14.985 9.37456 15.7492 8.82981 16.5506 8.97367C17.352 9.11752 17.8871 9.89549 17.7458 10.7113L17.5752 11.6961C17.7166 10.8803 18.4808 10.3355 19.2822 10.4794C20.0836 10.6232 20.6187 11.4012 20.4774 12.2171L19.549 16.9929C19.0901 19.3242 17.0993 21 14.7886 21H12.4552C11.3479 21 10.7943 21 10.2791 20.8834C9.49302 20.7056 8.76222 20.3294 8.15236 19.7888C7.75263 19.4345 7.42045 18.9785 6.75611 18.0667Z',
  d3: 'M11.6625 1.76908C10.9899 1.64996 10.3369 2.10026 10.2153 2.7931L8.11148 14.7175C8.08222 14.8732 7.96684 14.9996 7.81287 15.0446C7.6589 15.0896 7.49238 15.0455 7.3819 14.9305L5.20992 12.6703C4.60286 12.0557 3.60838 12.1104 3.07027 12.7936C2.65401 13.3221 2.64225 14.0731 3.04242 14.615L6.37508 19.1282C7.14273 20.1678 7.49051 20.6349 7.9028 20.9955C8.54391 21.5562 9.31108 21.9455 10.135 22.1294C10.6641 22.2476 11.238 22.25 12.5182 22.25H15.1747C17.593 22.25 19.6907 20.5182 20.1753 18.0888L21.2305 12.7335C21.3524 12.0388 20.8898 11.3876 20.215 11.2681C19.5424 11.149 18.8895 11.5993 18.7678 12.2921L18.6707 12.8452C18.6305 13.0744 18.4095 13.2281 18.1772 13.1884C17.9449 13.1487 17.7892 12.9307 17.8294 12.7014L18.1207 11.0421C18.2427 10.3474 17.78 9.69621 17.1053 9.5767C16.4329 9.45761 15.7801 9.90757 15.6582 10.6L15.561 11.1538C15.5207 11.3831 15.2998 11.5367 15.0675 11.497C14.8351 11.4573 14.6794 11.2393 14.7197 11.01L15.011 9.35072C15.1329 8.65602 14.6702 8.00482 13.9955 7.88532C13.3229 7.76619 12.6699 8.21649 12.5483 8.90934L12.257 10.5687C12.2168 10.7979 11.9958 10.9515 11.7635 10.9118C11.5312 10.8721 11.3755 10.6541 11.4157 10.4249L12.678 3.23449C12.7999 2.53978 12.3372 1.88859 11.6625 1.76908Z',
  d4: 'M12.1121 8.68466L12.965 3.7607C13.1063 2.94487 12.5712 2.16689 11.7698 2.02304C10.9684 1.87919 10.2042 2.42393 10.0629 3.23976L8.35714 13.0877L8.21569 13.8509L6.30622 11.837C5.61343 11.1239 4.47226 11.1889 3.86022 11.9765C3.3919 12.5791 3.37897 13.4315 3.82877 14.0489L7.80042 19.3875C8.55519 20.4021 9.74523 21 11.0097 21H15.6166C17.5697 21 19.2373 19.5895 19.5612 17.6635L20.4774 12.2171C20.6187 11.4012 20.0836 10.6232 19.2822 10.4794C18.4808 10.3355 17.7166 10.8803 17.5752 11.6961M12.1121 8.68466L11.8563 10.1618M12.1121 8.68466C12.2534 7.86883 13.0177 7.32408 13.8191 7.46794C14.6205 7.61179 15.1556 8.38977 15.0143 9.20559L14.8437 10.1904M14.8437 10.1904L14.7584 10.6828M14.8437 10.1904C14.985 9.37456 15.7492 8.82981 16.5506 8.97367C17.352 9.11752 17.8871 9.89549 17.7458 10.7113L17.5752 11.6961M17.5752 11.6961L17.49 12.1885',
  d5: 'M11.6685 1.76948C10.9821 1.64786 10.3167 2.10767 10.1928 2.81349L8.25608 13.8499L7.95336 15.462L5.25118 12.649C4.63391 12.0237 3.62225 12.0796 3.07525 12.7743C2.65288 13.3107 2.6406 14.0724 3.04587 14.6229L3.04696 14.6243L7.55232 20.6017C8.334 21.6388 9.56647 22.25 10.8761 22.25H16.1048C18.1275 22.25 19.8545 20.8082 20.19 18.8394L21.2298 12.7381L21.2301 12.7363C21.3543 12.0287 20.8833 11.3645 20.1948 11.2425C19.5084 11.1209 18.843 11.5807 18.7191 12.2865L18.6223 12.8381L17.8395 12.7043L18.1299 11.0495C18.2541 10.342 17.7831 9.67774 17.0946 9.55576C16.4081 9.43414 15.7428 9.89395 15.6189 10.5998L15.5221 11.1514L14.7393 11.0175L15.0297 9.36275C15.1538 8.6552 14.6828 7.99098 13.9944 7.86901C13.3079 7.74738 12.6425 8.20719 12.5187 8.91301L12.2283 10.5678L11.4455 10.434L12.7038 3.26323C12.828 2.55568 12.357 1.89146 11.6685 1.76948Z',
};

export const IconTouch09StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-09-stroke-rounded IconTouch09StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch09DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-09-duotone-rounded IconTouch09DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch09TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-09-twotone-rounded IconTouch09TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch09SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-09-solid-rounded IconTouch09SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch09BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-09-bulk-rounded IconTouch09BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch09StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-09-stroke-sharp IconTouch09StrokeSharp"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch09SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-09-solid-sharp IconTouch09SolidSharp"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTouch09: TheIconSelfPack = {
  name: 'Touch09',
  StrokeRounded: IconTouch09StrokeRounded,
  DuotoneRounded: IconTouch09DuotoneRounded,
  TwotoneRounded: IconTouch09TwotoneRounded,
  SolidRounded: IconTouch09SolidRounded,
  BulkRounded: IconTouch09BulkRounded,
  StrokeSharp: IconTouch09StrokeSharp,
  SolidSharp: IconTouch09SolidSharp,
};