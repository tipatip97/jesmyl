import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 17.9745C6.1287 19.2829 6.41956 20.1636 7.07691 20.8209C8.25596 22 10.1536 22 13.9489 22C17.7442 22 19.6419 22 20.8209 20.8209C22 19.6419 22 17.7442 22 13.9489C22 10.1536 22 8.25596 20.8209 7.07691C20.1636 6.41956 19.2829 6.1287 17.9745 6',
  d2: 'M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2C13.7712 2 15.6569 2 16.8284 3.17157C18 4.34315 18 6.22876 18 10C18 13.7712 18 15.6569 16.8284 16.8284C15.6569 18 13.7712 18 10 18C6.22876 18 4.34315 18 3.17157 16.8284C2 15.6569 2 13.7712 2 10Z',
  d3: 'M2 11.1185C2.61902 11.0398 3.24484 11.001 3.87171 11.0023C6.52365 10.9533 9.11064 11.6763 11.1711 13.0424C13.082 14.3094 14.4247 16.053 15 18',
  d4: 'M12.9998 7H13.0088',
  d5: 'M3.17157 3.17157C2 4.34315 2 6.22876 2 10C2 10.3953 2 10.7698 2.00135 11.125C2.62037 11.0463 3.24484 11.001 3.87171 11.0023C6.52365 10.9533 9.11064 11.6763 11.1711 13.0424C13.0043 14.2579 14.3146 15.9121 14.9261 17.7636C15.7375 17.597 16.344 17.3129 16.8284 16.8284C18 15.6569 18 13.7712 18 10C18 6.22876 18 4.34315 16.8284 3.17157C15.6569 2 13.7712 2 10 2C6.22876 2 4.34315 2 3.17157 3.17157Z',
  d6: 'M20.1129 7.78312C19.6979 7.36808 19.0964 7.11438 17.8757 6.9943L18.0715 5.00391C19.4675 5.14123 20.6275 5.46925 21.5272 6.36891C22.3335 7.1752 22.6805 8.19058 22.8428 9.39768C22.9992 10.5606 22.9991 12.0394 22.9991 13.8748V14.0212C22.9991 15.8567 22.9992 17.3355 22.8428 18.4984C22.6805 19.7055 22.3335 20.7209 21.5272 21.5272C20.7209 22.3335 19.7055 22.6805 18.4984 22.8428C17.3355 22.9992 15.8567 22.9991 14.0212 22.9991H13.8748C12.0394 22.9991 10.5606 22.9992 9.39768 22.8428C8.19058 22.6805 7.1752 22.3335 6.36891 21.5272C5.46925 20.6275 5.14123 19.4675 5.00391 18.0715L6.9943 17.8757C7.11438 19.0964 7.36808 19.6979 7.78312 20.1129C8.15588 20.4857 8.67885 20.7282 9.66417 20.8606C10.6783 20.997 12.0221 20.9991 13.948 20.9991C15.874 20.9991 17.2178 20.997 18.2319 20.8606C19.2172 20.7282 19.7402 20.4857 20.1129 20.1129C20.4857 19.7402 20.7282 19.2172 20.8606 18.2319C20.997 17.2178 20.9991 15.874 20.9991 13.948C20.9991 12.0221 20.997 10.6783 20.8606 9.66417C20.7282 8.67885 20.4857 8.15588 20.1129 7.78312Z',
  d7: 'M9.92684 1H10.0732C11.8966 0.999973 13.3664 0.999951 14.5223 1.15537C15.7225 1.31672 16.733 1.66191 17.5355 2.46447C18.3381 3.26702 18.6833 4.27752 18.8446 5.47767C19.0001 6.63362 19 8.10336 19 9.9268V10.0732C19 11.8966 19.0001 13.3664 18.8446 14.5223C18.6833 15.7225 18.3381 16.733 17.5355 17.5355C16.733 18.3381 15.7225 18.6833 14.5223 18.8446C13.3664 19.0001 11.8966 19 10.0732 19H9.9268C8.10336 19 6.63362 19.0001 5.47767 18.8446C4.27752 18.6833 3.26702 18.3381 2.46447 17.5355C1.66191 16.733 1.31672 15.7225 1.15537 14.5223C0.999951 13.3664 0.999973 11.8966 1 10.0732V9.92684C0.999973 8.10338 0.999951 6.63362 1.15537 5.47767C1.31672 4.27752 1.66191 3.26702 2.46447 2.46447C3.26702 1.66191 4.27752 1.31672 5.47767 1.15537C6.63362 0.999951 8.10338 0.999973 9.92684 1ZM5.74416 3.13753C4.76579 3.26907 4.2477 3.50966 3.87868 3.87868C3.50966 4.2477 3.26907 4.76579 3.13753 5.74416C3.00213 6.7513 3 8.08611 3 10C3 11.9139 3.00213 13.2487 3.13753 14.2558C3.26907 15.2342 3.50966 15.7523 3.87868 16.1213C4.2477 16.4903 4.76579 16.7309 5.74416 16.8625C6.7513 16.9979 8.08611 17 10 17C11.9139 17 13.2487 16.9979 14.2558 16.8625C15.2342 16.7309 15.7523 16.4903 16.1213 16.1213C16.4903 15.7523 16.7309 15.2342 16.8625 14.2558C16.9979 13.2487 17 11.9139 17 10C17 8.08611 16.9979 6.7513 16.8625 5.74416C16.7309 4.76579 16.4903 4.2477 16.1213 3.87868C15.7523 3.50966 15.2342 3.26907 14.2558 3.13753C13.2487 3.00213 11.9139 3 10 3C8.08611 3 6.7513 3.00213 5.74416 3.13753Z',
  d8: 'M11.6363 12.4162C9.4301 10.9618 6.68031 10.2023 3.87635 10.2523C3.2166 10.2512 2.55784 10.2921 1.90597 10.3744C1.53026 10.4219 1.24888 10.742 1.25 11.1207C1.25458 12.6661 1.28026 13.8928 1.45316 14.8725C1.63123 15.8815 1.97481 16.6895 2.64946 17.3603C3.40134 18.1079 4.35431 18.4395 5.53219 18.5969C6.67735 18.75 8.14081 18.75 9.98955 18.75L10.1393 18.75C12.2827 18.7501 13.9178 18.7501 15.1501 18.4985C15.3602 18.4556 15.5419 18.3248 15.6492 18.1391C15.7566 17.9535 15.7794 17.7308 15.7118 17.5272C15.0373 15.4965 13.6026 13.7125 11.6363 12.4162Z',
  d9: 'M12 6.75C12 6.05964 12.5571 5.5 13.2444 5.5C13.9268 5.5 14.5 6.05988 14.5 6.75C14.5 7.44012 13.9268 8 13.2444 8C12.5571 8 12 7.44036 12 6.75Z',
  d10: 'M18 18V2H2V18H18Z',
  d11: 'M18 6H22V22H6V18',
  d12: 'M20.806 7.19432H17.8894V5.24988H21.7783C22.3152 5.24988 22.7505 5.68516 22.7505 6.2221V21.7777C22.7505 22.3146 22.3152 22.7499 21.7783 22.7499H6.22271C5.68577 22.7499 5.25049 22.3146 5.25049 21.7777V17.8888H7.19493V20.8054H20.806V7.19432Z',
  d13: 'M2.22222 1.25012C1.68528 1.25012 1.25 1.6854 1.25 2.22234V17.7779C1.25 18.3148 1.68528 18.7501 2.22222 18.7501H17.7778C18.3147 18.7501 18.75 18.3148 18.75 17.7779V2.22234C18.75 1.6854 18.3147 1.25012 17.7778 1.25012H2.22222ZM3.19531 10.2653V3.19446H16.8064V16.8056H15.3604C14.6135 15.0754 13.3027 13.5575 11.5824 12.417C9.38781 10.9619 6.65221 10.2019 3.86251 10.252C3.63992 10.2516 3.41744 10.256 3.19531 10.2653Z',
  d14: 'M11.9976 5.99963H13.9976V7.99963H11.9976V5.99963Z',
};

export const IconAlbum02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="album-02-stroke-rounded IconAlbum02StrokeRounded"
    >
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

export const IconAlbum02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="album-02-duotone-rounded IconAlbum02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconAlbum02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="album-02-twotone-rounded IconAlbum02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconAlbum02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="album-02-solid-rounded IconAlbum02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconAlbum02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="album-02-bulk-rounded IconAlbum02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
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

export const IconAlbum02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="album-02-stroke-sharp IconAlbum02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlbum02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="album-02-solid-sharp IconAlbum02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAlbum02: TheIconSelfPack = {
  name: 'Album02',
  StrokeRounded: IconAlbum02StrokeRounded,
  DuotoneRounded: IconAlbum02DuotoneRounded,
  TwotoneRounded: IconAlbum02TwotoneRounded,
  SolidRounded: IconAlbum02SolidRounded,
  BulkRounded: IconAlbum02BulkRounded,
  StrokeSharp: IconAlbum02StrokeSharp,
  SolidSharp: IconAlbum02SolidSharp,
};