import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 7.26294C20.412 8.60838 22 10.8996 22 13.5C22 15.5586 21.0047 17.4235 19.3933 18.7787C19.1517 18.9819 19 19.2762 19 19.5919V22H17L16.2062 20.8674C16.083 20.6916 15.8616 20.6152 15.6537 20.6687C13.9248 21.1132 12.0752 21.1132 10.3463 20.6687C10.1384 20.6152 9.91703 20.6916 9.79384 20.8674L9 22H7V19.6154C7 19.2866 6.83835 18.9788 6.56764 18.7921C5.49285 18.0511 2 16.6014 2 15.0582V13.5C2 12.9082 2.44771 12.4286 3 12.4286C3.60665 12.4286 4.10188 12.1929 4.30205 11.5661C4.87123 9.78376 6.20828 8.26239 8 7.26294',
  d2: 'M13.5 2L11 6H15L12.5 10',
  d3: 'M7.49981 12H7.50879',
  d4: 'M2 15.0579V13.4996C2 12.9079 2.44771 12.4282 3 12.4282C3.60665 12.4282 4.10188 12.1925 4.30205 11.5657C4.87123 9.78342 6.20828 8.26204 8 7.26259C9.5 6.35016 13.6 5.07275 18 7.26259C20.412 8.60803 22 10.8993 22 13.4996C22 15.5582 21.0047 17.4231 19.3933 18.7784C19.1517 18.9816 19 19.2759 19 19.5916V21.9996H17L16.2062 20.867C16.083 20.6912 15.8616 20.6149 15.6537 20.6683C13.9248 21.1129 12.0752 21.1129 10.3463 20.6683C10.1384 20.6149 9.91703 20.6912 9.79384 20.867L9 21.9996H7V19.6151C7 19.2863 6.83835 18.9784 6.56764 18.7918C5.49285 18.0507 2 16.601 2 15.0579Z',
  d5: 'M13.8975 1.3641C14.2488 1.58363 14.3555 2.04635 14.136 2.3976L12.3532 5.2501H15C15.2726 5.2501 15.5238 5.39806 15.656 5.63652C15.7882 5.87499 15.7805 6.1664 15.636 6.3976L13.136 10.3976C12.9165 10.7489 12.4538 10.8556 12.1025 10.6361C11.7512 10.4166 11.6445 9.95385 11.864 9.6026L13.6468 6.7501H11C10.7274 6.7501 10.4762 6.60214 10.344 6.36368C10.2118 6.12521 10.2195 5.8338 10.364 5.6026L12.864 1.6026C13.0835 1.25135 13.5462 1.14457 13.8975 1.3641Z',
  d6: 'M7.63984 6.60536C7.93769 6.4423 8.3133 6.26845 8.75233 6.10264C8.76783 6.44346 8.86084 6.782 9.03206 7.09092C9.419 7.78906 10.1459 8.22862 10.9409 8.24942L10.592 8.80769C9.93341 9.86145 10.2537 11.2496 11.3075 11.9082C12.3613 12.5668 13.7494 12.2464 14.408 11.1927L16.908 7.19269C17.1211 6.8517 17.235 6.46706 17.2486 6.0791C17.6201 6.22886 17.9913 6.40342 18.3602 6.60536L18.3654 6.60821C20.9631 8.05725 22.75 10.5735 22.75 13.5003C22.75 15.8136 21.6296 17.8782 19.876 19.353C19.7853 19.4293 19.75 19.5211 19.75 19.5922V22.0003C19.75 22.4145 19.4142 22.7503 19 22.7503H17C16.7554 22.7503 16.5262 22.631 16.3858 22.4307L15.687 21.4336C13.9312 21.8586 12.0688 21.8586 10.313 21.4336L9.61417 22.4307C9.47379 22.631 9.24458 22.7503 9 22.7503H7C6.58579 22.7503 6.25 22.4145 6.25 22.0003V19.6157C6.25 19.5335 6.20959 19.4565 6.14191 19.4099C5.66469 19.1464 4.00277 18.1964 3.4751 17.8571C2.95227 17.5208 2.42306 17.1333 2.01729 16.7037C1.62349 16.2867 1.25 15.7287 1.25 15.0585V13.5003C1.25 12.5439 1.9856 11.6788 3 11.6788C3.15677 11.678 3.49377 11.6088 3.5876 11.3382C4.22333 9.34747 5.70308 7.68569 7.63464 6.60824L7.63984 6.60536ZM7.5 11C6.94772 11 6.5 11.4477 6.5 12C6.5 12.5523 6.94772 13 7.5 13H7.50898C8.06127 13 8.50898 12.5523 8.50898 12C8.50898 11.4477 8.06127 11 7.50898 11H7.5Z',
  d7: 'M8.75233 6.10264C8.3133 6.26845 7.93769 6.4423 7.63984 6.60536L7.63464 6.60824C5.70308 7.68569 4.22333 9.34747 3.5876 11.3382C3.49377 11.6088 3.15677 11.678 3 11.6788C1.9856 11.6788 1.25 12.5439 1.25 13.5003V15.0585C1.25 15.7287 1.62349 16.2867 2.01729 16.7037C2.42306 17.1333 2.95227 17.5208 3.4751 17.8571C4.00277 18.1964 5.66469 19.1464 6.14191 19.4099C6.20959 19.4565 6.25 19.5335 6.25 19.6157V22.0003C6.25 22.4145 6.58579 22.7503 7 22.7503H9C9.24458 22.7503 9.47379 22.631 9.61417 22.4307L10.313 21.4336C12.0688 21.8586 13.9312 21.8586 15.687 21.4336L16.3858 22.4307C16.5262 22.631 16.7554 22.7503 17 22.7503H19C19.4142 22.7503 19.75 22.4145 19.75 22.0003V19.5922C19.75 19.5211 19.7853 19.4293 19.876 19.353C21.6296 17.8782 22.75 15.8136 22.75 13.5003C22.75 10.5735 20.9631 8.05725 18.3654 6.60821L18.3602 6.60536C17.9913 6.40342 17.6201 6.22886 17.2486 6.0791C17.235 6.46706 17.1211 6.8517 16.908 7.19269L14.408 11.1927C13.7494 12.2464 12.3613 12.5668 11.3075 11.9082C10.2537 11.2496 9.93341 9.86145 10.592 8.80769L10.9409 8.24942C10.1459 8.22862 9.419 7.78906 9.03206 7.09092C8.86084 6.782 8.76783 6.44346 8.75233 6.10264Z',
  d8: 'M6.5 12C6.5 11.4477 6.94772 11 7.5 11H7.50898C8.06127 11 8.50898 11.4477 8.50898 12C8.50898 12.5523 8.06127 13 7.50898 13H7.5C6.94772 13 6.5 12.5523 6.5 12Z',
  d9: 'M18 7.26294C20.412 8.60838 22 10.8996 22 13.5C22 15.5586 20.6114 17.6445 19 18.9998V22H17L16 20.4998C14.5 20.9998 12 21.4998 10 20.4998L9 22H7V18.9998L2 15.4998V12.4998H4C4.5 9.99976 6.20828 8.26239 8 7.26294',
  d10: 'M14.5332 2.045L12.3529 5.5335H16.3529L12.7382 11.317L11.4662 10.522L13.6465 7.0335H9.64648L13.2612 1.25L14.5332 2.045Z',
  d11: 'M7.63234 6.60966C7.84272 6.49045 8.09127 6.36554 8.37292 6.2417L6.94043 8.53368H10.9404L9.39949 10.9992L13.2155 13.3842L17.6792 6.24221C17.9112 6.3545 18.1424 6.47765 18.3725 6.61236C20.9663 8.06202 22.75 10.5763 22.75 13.5004C22.75 15.744 21.3426 17.9052 19.75 19.3414V22.7504H16.5986L15.6862 21.3816C14.2569 21.7877 12.1647 22.1154 10.2789 21.434L9.40142 22.7504H6.25V19.3907L1.25 15.8907V11.7502H3.40957C4.09943 9.30462 5.84997 7.60452 7.63234 6.60966ZM7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H7.00898C7.56127 13 8.00898 12.5523 8.00898 12C8.00898 11.4477 7.56127 11 7.00898 11H7Z',
};

export const IconRenewableEnergy01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="renewable-energy-01-stroke-rounded IconRenewableEnergy01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconRenewableEnergy01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="renewable-energy-01-duotone-rounded IconRenewableEnergy01DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconRenewableEnergy01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="renewable-energy-01-twotone-rounded IconRenewableEnergy01TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRenewableEnergy01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="renewable-energy-01-solid-rounded IconRenewableEnergy01SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconRenewableEnergy01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="renewable-energy-01-bulk-rounded IconRenewableEnergy01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconRenewableEnergy01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="renewable-energy-01-stroke-sharp IconRenewableEnergy01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRenewableEnergy01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="renewable-energy-01-solid-sharp IconRenewableEnergy01SolidSharp"
    >
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

export const iconPackOfRenewableEnergy01: TheIconSelfPack = {
  name: 'RenewableEnergy01',
  StrokeRounded: IconRenewableEnergy01StrokeRounded,
  DuotoneRounded: IconRenewableEnergy01DuotoneRounded,
  TwotoneRounded: IconRenewableEnergy01TwotoneRounded,
  SolidRounded: IconRenewableEnergy01SolidRounded,
  BulkRounded: IconRenewableEnergy01BulkRounded,
  StrokeSharp: IconRenewableEnergy01StrokeSharp,
  SolidSharp: IconRenewableEnergy01SolidSharp,
};