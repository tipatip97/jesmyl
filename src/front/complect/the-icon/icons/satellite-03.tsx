import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.5355 6.10913C14.0144 4.63029 16.412 4.63029 17.8909 6.10913C19.3697 7.58796 19.3697 9.98563 17.8909 11.4645L15.7487 13.6066C14.8881 14.4672 14.4578 14.8975 13.937 14.98C13.7688 15.0067 13.5974 15.0067 13.4292 14.98C12.9084 14.8975 12.4781 14.4672 11.6175 13.6066L10.3934 12.3825C9.53278 11.5219 9.10247 11.0916 9.01998 10.5708C8.99334 10.4026 8.99334 10.2312 9.01998 10.063C9.10247 9.54219 9.53278 9.11188 10.3934 8.25126L12.5355 6.10913Z',
  d2: 'M6.8483 14C6.96714 15.5706 8.41803 17.0084 10 17.1305M3.00586 15.2381C2.85202 18.2662 5.7538 21.1419 8.80421 20.9946',
  d3: 'M12.5293 5.52954L10.9336 3.8673C10.3555 3.2891 10.0664 3 9.70711 3C9.34786 3 9.05876 3.2891 8.48057 3.8673L7.8673 4.48057C7.2891 5.05876 7 5.34786 7 5.70711C7 6.06635 7.2891 6.35545 7.8673 6.93365L9.31826 8.38462M18.4214 11.355L20.1327 13.0664C20.7109 13.6445 21 13.9336 21 14.2929C21 14.6521 20.7109 14.9412 20.1327 15.5194L19.5194 16.1327C18.9412 16.7109 18.6521 17 18.2929 17C17.9336 17 17.6445 16.7109 17.0664 16.1327L15.5111 14.5775',
  d4: 'M9.70711 4.07325C9.59196 4.17208 9.438 4.32408 9.18767 4.5744L8.5744 5.18767C8.32408 5.438 8.17208 5.59196 8.07325 5.70711C8.17208 5.82225 8.32408 5.97622 8.5744 6.22654L10.0254 7.67751L8.61116 9.09172L7.16019 7.64075C7.14804 7.62861 7.13588 7.61646 7.12372 7.6043C6.86646 7.34717 6.60782 7.08866 6.4218 6.84485C6.20939 6.56644 6 6.19329 6 5.70711C6 5.22093 6.20938 4.84777 6.4218 4.56936C6.60782 4.32556 6.86647 4.06704 7.12373 3.80991C7.13589 3.79776 7.14804 3.78561 7.16019 3.77346L7.77346 3.16019C7.78561 3.14804 7.79776 3.13589 7.80991 3.12373C8.06704 2.86647 8.32556 2.60782 8.56936 2.4218C8.84777 2.20938 9.22093 2 9.70711 2C10.1933 2 10.5664 2.20938 10.8449 2.4218C11.0887 2.60782 11.3472 2.86646 11.6043 3.12372C11.6165 3.13588 11.6286 3.14804 11.6408 3.16019L11.648 3.16742L13.2507 4.83703L11.8079 6.22205L10.2193 4.56719C9.97325 4.32115 9.82114 4.17113 9.70711 4.07325ZM19.4256 13.7735L17.7143 12.0621L19.1285 10.6479L20.8398 12.3592C20.852 12.3714 20.8641 12.3835 20.8763 12.3957C21.1335 12.6528 21.3922 12.9113 21.5782 13.1551C21.7906 13.4336 22 13.8067 22 14.2929C22 14.7791 21.7906 15.1522 21.5782 15.4306C21.3922 15.6744 21.1335 15.933 20.8763 16.1901C20.8641 16.2022 20.852 16.2144 20.8398 16.2265L20.2265 16.8398C20.2144 16.852 20.2022 16.8641 20.1901 16.8763C19.933 17.1335 19.6744 17.3922 19.4306 17.5782C19.1522 17.7906 18.7791 18 18.2929 18C17.8067 18 17.4336 17.7906 17.1551 17.5782C16.9113 17.3922 16.6528 17.1335 16.3957 16.8763C16.3835 16.8641 16.3714 16.852 16.3592 16.8398L14.804 15.2846L16.2183 13.8704L17.7735 15.4256C18.0238 15.6759 18.1777 15.8279 18.2929 15.9268C18.408 15.8279 18.562 15.6759 18.8123 15.4256L19.4256 14.8123C19.6759 14.562 19.8279 14.408 19.9268 14.2929C19.8279 14.1777 19.6759 14.0238 19.4256 13.7735Z',
  d5: 'M12.0052 5.5788C13.7769 3.80707 16.6495 3.80707 18.4212 5.5788C20.1929 7.35053 20.1929 10.2231 18.4212 11.9948L16.2511 14.1649C15.8447 14.5713 15.4977 14.9184 15.1856 15.1695C14.8553 15.4352 14.4968 15.6507 14.0543 15.7208C13.8084 15.7597 13.5578 15.7597 13.3119 15.7208C12.8694 15.6507 12.5109 15.4352 12.1807 15.1695C11.8685 14.9184 11.5215 14.5713 11.1151 14.1649L9.83508 12.8849C9.42864 12.4785 9.08163 12.1315 8.83052 11.8193C8.56482 11.4891 8.3493 11.1306 8.27921 10.6881C8.24026 10.4422 8.24026 10.1916 8.27921 9.94569C8.3493 9.50317 8.56482 9.14471 8.83052 8.81444C9.08163 8.50231 9.42865 8.15532 9.83509 7.74891L12.0052 5.5788Z',
  d6: 'M6.77289 13.0029C7.3236 12.9612 7.80382 13.3739 7.84549 13.9246C7.9265 14.9952 8.97929 16.0488 10.077 16.1335C10.6276 16.176 11.0396 16.6568 10.9971 17.2075C10.9546 17.7581 10.4738 18.1701 9.92312 18.1276C7.85685 17.9682 6.00787 16.1461 5.85119 14.0755C5.80952 13.5248 6.22218 13.0446 6.77289 13.0029ZM3.05663 14.2394C3.60821 14.2675 4.03263 14.7373 4.00461 15.2889C3.94473 16.4676 4.48228 17.679 5.40781 18.5973C6.33308 19.5153 7.55919 20.0536 8.75602 19.9958C9.30766 19.9691 9.77645 20.3947 9.80309 20.9464C9.82973 21.498 9.40413 21.9668 8.85248 21.9935C6.99891 22.083 5.24892 21.257 3.99915 20.017C2.74965 18.7773 1.91323 17.0368 2.00718 15.1874C2.03521 14.6358 2.50506 14.2114 3.05663 14.2394Z',
  d7: 'M17.8906 11.4645C19.3694 9.98563 19.3694 7.58796 17.8906 6.10913C16.4118 4.63029 14.0141 4.63029 12.5353 6.10913L8.32715 10.3165L13.6828 15.6722L17.8906 11.4645Z',
  d8: 'M18 11L21 14L18 17L15 14M13 6L10 3L7 6L10 9',
  d9: 'M10.81 2.53374C10.4317 2.15542 9.81831 2.15542 9.43999 2.53374L6.53374 5.43999C6.15542 5.81831 6.15542 6.43169 6.53374 6.81001L8.58259 8.85886L7.13461 10.3066L13.693 16.865L15.1409 15.4171L17.19 17.4663C17.5683 17.8446 18.1817 17.8446 18.56 17.4663L21.4663 14.56C21.8446 14.1817 21.8446 13.5683 21.4663 13.19L19.2735 10.9972C20.2032 9.2448 19.9302 7.02159 18.4543 5.54571C16.9784 4.06983 14.7552 3.79676 13.0028 4.7265L10.81 2.53374ZM11.4902 5.95295L9.95379 7.48905L8.58984 6.1251L10.1261 4.58887L11.4902 5.95295ZM17.8761 15.4113L16.512 14.0472L18.0482 12.511L19.4123 13.8751L17.8761 15.4113Z',
  d10: 'M10.1731 17.8778C8.10685 17.7184 6.25787 15.8963 6.10119 13.8257L8.09549 13.6748C8.1765 14.7454 9.22929 15.799 10.327 15.8837L10.1731 17.8778ZM4.24915 19.7673C2.99965 18.5275 2.16323 16.7871 2.25718 14.9376L4.25461 15.0391C4.19473 16.2178 4.73228 17.4292 5.65781 18.3475C6.58308 19.2655 7.80919 19.8038 9.00602 19.746L9.10248 21.7437C7.24891 21.8332 5.49892 21.0072 4.24915 19.7673Z',
};

export const IconSatellite03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-03-stroke-rounded IconSatellite03StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSatellite03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-03-duotone-rounded IconSatellite03DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSatellite03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-03-twotone-rounded IconSatellite03TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSatellite03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-03-solid-rounded IconSatellite03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconSatellite03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-03-bulk-rounded IconSatellite03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconSatellite03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-03-stroke-sharp IconSatellite03StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSatellite03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-03-solid-sharp IconSatellite03SolidSharp"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const iconPackOfSatellite03: TheIconSelfPack = {
  name: 'Satellite03',
  StrokeRounded: IconSatellite03StrokeRounded,
  DuotoneRounded: IconSatellite03DuotoneRounded,
  TwotoneRounded: IconSatellite03TwotoneRounded,
  SolidRounded: IconSatellite03SolidRounded,
  BulkRounded: IconSatellite03BulkRounded,
  StrokeSharp: IconSatellite03StrokeSharp,
  SolidSharp: IconSatellite03SolidSharp,
};