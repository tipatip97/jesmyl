import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.5926 2.21C12.2371 1.93 11.7433 1.93 11.3877 2.21C9.51122 3.66 3.97049 8.39 4.00012 13.9C4.00012 18.36 7.58531 22 12.0001 22C16.4149 22 20 18.37 20 13.91C20.0099 8.48 14.4593 3.67 12.5926 2.21Z',
  d2: 'M12 2V22',
  d3: 'M12 19L20 15M12 14.1806L19 10.5M12 9.36145L16.5727 7',
  d4: 'M4.00012 13.9C3.97049 8.39 9.51122 3.66 11.3877 2.21C11.5683 2.06783 11.7845 1.99784 12.0001 2.00005V22C7.58531 22 4.00012 18.36 4.00012 13.9Z',
  d5: 'M20 13.9105C20 14.28 19.9754 14.6439 19.9277 15.0005L12.0001 19.0005L12 14.0005L19.3005 10.4531C19.7364 11.5564 20.0022 12.7185 20 13.9105Z',
  d6: 'M12.0001 2C12.2091 2.00214 12.4176 2.07212 12.5926 2.20995C13.5402 2.95108 15.437 4.55545 17.0739 6.66595L12 9.44596L12.0001 2Z',
  d7: 'M10.9268 1.61835C11.2411 1.372 11.62 1.24785 12 1.25003C12.38 1.24785 12.759 1.372 13.0732 1.61835C14.0361 2.36253 15.9419 3.94972 17.6102 6.06854C19.2703 8.17695 20.7654 10.9009 20.7499 13.902C20.7488 18.7659 16.8378 22.75 12.0001 22.75C7.16241 22.75 3.2512 18.7659 3.25012 13.902C3.23466 10.9009 4.72979 8.17695 6.38986 6.06854C8.05811 3.94972 9.96396 2.36253 10.9268 1.61835ZM14.9066 5.90428C15.1424 6.15859 15.2602 6.28574 15.2346 6.43231C15.2089 6.57888 15.052 6.65991 14.7382 6.82198L13.6254 7.39663C13.2338 7.59887 13.038 7.69998 12.8941 7.61231C12.7501 7.52464 12.7501 7.30427 12.7501 6.86352V5.1397C12.7501 4.5743 12.7501 4.2916 12.9313 4.21345C13.1125 4.13531 13.3146 4.32605 13.7189 4.70755C14.0983 5.06561 14.5007 5.46651 14.9066 5.90428ZM16.9653 8.50926C16.8309 8.3037 16.7638 8.20092 16.6522 8.17152C16.5406 8.14212 16.4288 8.19989 16.205 8.31543L13.0748 9.93193C12.9167 10.0136 12.8377 10.0544 12.7939 10.1263C12.7501 10.1982 12.7501 10.2871 12.7501 10.465V11.6631C12.7501 12.1071 12.7501 12.329 12.895 12.4166C13.0399 12.5041 13.2364 12.4008 13.6294 12.1942L17.2989 10.2647C17.5451 10.1352 17.6682 10.0705 17.7045 9.95C17.7407 9.82949 17.6759 9.71138 17.5462 9.47516C17.3663 9.14738 17.1716 8.82507 16.9653 8.50926ZM18.6959 12.6078C18.6388 12.2784 18.6102 12.1138 18.4732 12.0463C18.3363 11.9789 18.1806 12.0607 17.8694 12.2244L13.0709 14.7474C12.9147 14.8296 12.8365 14.8706 12.7933 14.9422C12.7501 15.0137 12.7501 15.102 12.7501 15.2785V16.5361C12.7501 16.9713 12.7501 17.1888 12.8924 17.2767C13.0347 17.3647 13.2293 17.2674 13.6185 17.0728L18.4782 14.6429C18.6268 14.5686 18.7011 14.5315 18.7455 14.4627C18.79 14.3939 18.7932 14.3154 18.7996 14.1585C18.8036 14.0617 18.8056 13.9643 18.8056 13.8666L18.8056 13.8648C18.8063 13.4438 18.7681 13.0242 18.6959 12.6078ZM16.9447 18.6231C17.4375 18.0926 17.6839 17.8273 17.5337 17.6268C17.3835 17.4263 17.0398 17.5982 16.3526 17.9418L13.0537 19.5912C12.92 19.6581 12.8531 19.6915 12.8108 19.7475C12.7995 19.7625 12.7896 19.7785 12.7813 19.7953C12.7501 19.8582 12.7501 19.933 12.7501 20.0825C12.7501 20.4008 12.7501 20.5599 12.8617 20.65C12.9733 20.74 13.1196 20.7084 13.4123 20.6453C14.7871 20.3486 16.0115 19.6278 16.9447 18.6231Z',
  d8: 'M10.9268 1.61835C11.2411 1.372 11.62 1.24785 12 1.25003C12.38 1.24785 12.759 1.372 13.0732 1.61835C14.0361 2.36253 15.9419 3.94972 17.6102 6.06854C19.2703 8.17695 20.7654 10.9009 20.7499 13.902C20.7488 18.7659 16.8378 22.75 12.0001 22.75C7.16241 22.75 3.2512 18.7659 3.25012 13.902C3.23466 10.9009 4.72979 8.17695 6.38986 6.06854C8.05811 3.94972 9.96396 2.36253 10.9268 1.61835Z',
  d9: 'M14.7381 6.82112L13.6253 7.39578C13.2337 7.59801 13.0379 7.69913 12.8939 7.61145C12.75 7.52378 12.75 7.30341 12.75 6.86267V5.13884C12.75 4.57344 12.75 4.29074 12.9312 4.21259C13.1124 4.13445 13.3145 4.3252 13.7188 4.7067C14.0982 5.06475 14.5006 5.46565 14.9065 5.90343C15.1422 6.15773 15.2601 6.28489 15.2345 6.43145C15.2088 6.57802 15.0519 6.65905 14.7381 6.82112Z',
  d10: 'M13.0747 9.93107L16.2049 8.31457C16.4286 8.19903 16.5405 8.14126 16.6521 8.17066C16.7637 8.20007 16.8308 8.30285 16.9651 8.5084C17.1715 8.82421 17.3662 9.14653 17.5461 9.4743C17.6758 9.71053 17.7406 9.82864 17.7044 9.94914C17.6681 10.0696 17.545 10.1344 17.2988 10.2638L13.6292 12.1933L13.6292 12.1933C13.2363 12.3999 13.0398 12.5032 12.8949 12.4157C12.75 12.3282 12.75 12.1062 12.75 11.6622V10.4642C12.75 10.2863 12.75 10.1973 12.7938 10.1254C12.8376 10.0535 12.9166 10.0127 13.0747 9.93107L13.0747 9.93107Z',
  d11: 'M13.0708 14.7466L17.8693 12.2235C18.1805 12.0598 18.3361 11.978 18.4731 12.0455C18.6101 12.1129 18.6387 12.2776 18.6958 12.6069C18.768 13.0233 18.8062 13.4429 18.8055 13.8639L18.8055 13.8657C18.8055 13.9635 18.8035 14.0608 18.7995 14.1576C18.7931 14.3146 18.7899 14.393 18.7454 14.4618C18.7009 14.5306 18.6266 14.5678 18.4781 14.6421L13.6183 17.0719C13.2292 17.2665 13.0346 17.3638 12.8923 17.2759C12.75 17.188 12.75 16.9704 12.75 16.5353V15.2776C12.75 15.1011 12.75 15.0129 12.7932 14.9413C12.8364 14.8698 12.9145 14.8287 13.0708 14.7466Z',
  d12: 'M13.0536 19.5904L16.3525 17.9409C17.0397 17.5973 17.3834 17.4255 17.5336 17.626C17.6838 17.8265 17.4374 18.0917 16.9446 18.6222C16.0114 19.627 14.787 20.3477 13.4122 20.6444C13.1195 20.7076 12.9731 20.7392 12.8616 20.6491C12.75 20.5591 12.75 20.3999 12.75 20.0816C12.75 19.9321 12.75 19.8574 12.7812 19.7944C12.7895 19.7776 12.7994 19.7616 12.8107 19.7467C12.853 19.6907 12.9199 19.6572 13.0536 19.5904Z',
  d13: 'M4.00012 13.9C4.00012 8 12.0001 2.00005 12.0001 2.00005C12.0001 2.00005 20 8 20 13.91C20 18.37 16.4149 22 12.0001 22C7.58531 22 4.00012 18.36 4.00012 13.9Z',
  d14: 'M12 2V22M12 19L20 15M12 14.1806L19 10.5M12 9.36145L16.5727 7',
  d15: 'M12.2835 1.47119C12.1548 1.37039 12.0541 1.29153 12.0019 1.25C11.9497 1.29153 11.849 1.37039 11.7203 1.4712C11.2921 1.80653 10.5537 2.38477 10.2587 2.64004C9.49243 3.30316 8.46878 4.25113 7.44276 5.38907C5.42758 7.62406 3.25195 10.7555 3.25195 13.9765C3.25195 18.7992 7.16357 22.75 12.0019 22.75C16.8391 22.75 20.7518 18.8104 20.7518 13.9864C20.7518 10.7607 18.5766 7.62694 16.5612 5.39046C15.5352 4.25186 14.5115 3.30355 13.7452 2.64026C13.4502 2.3849 12.7117 1.80657 12.2835 1.47119ZM12.752 8.13004L15.6617 6.62741C15.5889 6.54458 15.5158 6.46248 15.4426 6.38116C14.4686 5.30037 13.4856 4.3897 12.752 3.75464V8.13004ZM16.637 7.81196C17.1994 8.54459 17.7151 9.31633 18.1372 10.1073L12.752 12.9389V9.81825L16.637 7.81196ZM19.2305 14.5472C19.2446 14.3621 19.2518 14.1751 19.2518 13.9864C19.2518 13.1555 19.0701 12.311 18.7591 11.4751L12.752 14.6336V17.7865L19.2305 14.5472ZM12.752 21.2243C15.5676 20.9324 17.9142 19.016 18.8344 16.4223L12.752 19.4635V21.2243Z',
};

export const IconBlurStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blur-stroke-rounded IconBlurStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeMiterlimit="10" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBlurDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blur-duotone-rounded IconBlurDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeMiterlimit="10" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBlurTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blur-twotone-rounded IconBlurTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeMiterlimit="10" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBlurSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blur-solid-rounded IconBlurSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBlurBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blur-bulk-rounded IconBlurBulkRounded"
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
      <path 
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
    </TheIconWrapper>
  );
};

export const IconBlurStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blur-stroke-sharp IconBlurStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeMiterlimit="10" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBlurSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="blur-solid-sharp IconBlurSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBlur: TheIconSelfPack = {
  name: 'Blur',
  StrokeRounded: IconBlurStrokeRounded,
  DuotoneRounded: IconBlurDuotoneRounded,
  TwotoneRounded: IconBlurTwotoneRounded,
  SolidRounded: IconBlurSolidRounded,
  BulkRounded: IconBlurBulkRounded,
  StrokeSharp: IconBlurStrokeSharp,
  SolidSharp: IconBlurSolidSharp,
};