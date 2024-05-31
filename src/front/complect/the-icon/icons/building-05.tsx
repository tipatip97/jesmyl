import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 22H22',
  d2: 'M18 9H14C11.518 9 11 9.518 11 12V22H21V12C21 9.518 20.482 9 18 9Z',
  d3: 'M15 22H3V5C3 2.518 3.518 2 6 2H12C14.482 2 15 2.518 15 5V9',
  d4: 'M3 6H6M3 10H6M3 14H6',
  d5: 'M15 13H17M15 16H17',
  d6: 'M16 22L16 19',
  d7: 'M6 2H12C14.482 2 15 2.518 15 5V9H14C11.518 9 11 9.518 11 12V22H3V5C3 2.518 3.518 2 6 2Z',
  d8: 'M14 8.25C13.3633 8.25 12.801 8.28223 12.3232 8.38719C11.837 8.49401 11.3917 8.68612 11.0389 9.03892C10.6861 9.39172 10.494 9.83699 10.3872 10.3232C10.2822 10.801 10.25 11.3633 10.25 12V20.75H14.9996V19C14.9996 18.4477 15.4473 18 15.9996 18C16.5518 18 16.9996 18.4477 16.9996 19V20.75H21.75V12C21.75 11.3633 21.7178 10.801 21.6128 10.3232C21.506 9.83699 21.3139 9.39172 20.9611 9.03892C20.6083 8.68612 20.163 8.49401 19.6768 8.38719C19.199 8.28223 18.6367 8.25 18 8.25H14ZM15 11.25C14.5858 11.25 14.25 11.5858 14.25 12C14.25 12.4142 14.5858 12.75 15 12.75H17C17.4142 12.75 17.75 12.4142 17.75 12C17.75 11.5858 17.4142 11.25 17 11.25H15ZM15 14.25C14.5858 14.25 14.25 14.5858 14.25 15C14.25 15.4142 14.5858 15.75 15 15.75H17C17.4142 15.75 17.75 15.4142 17.75 15C17.75 14.5858 17.4142 14.25 17 14.25H15Z',
  d9: 'M2.25 20.75H8.75V12C8.75 11.3305 8.78199 10.6393 8.92212 10.0014C9.06777 9.33839 9.35931 8.59721 9.97826 7.97826C10.5972 7.35931 11.3384 7.06777 12.0014 6.92212C12.6393 6.78199 13.3305 6.75 14 6.75H15.15C15.4328 6.75 15.5743 6.75 15.6621 6.66213C15.75 6.57426 15.75 6.43284 15.75 6.15V5C15.75 4.36327 15.7178 3.80098 15.6128 3.32323C15.506 2.83699 15.3139 2.39172 14.9611 2.03892C14.6083 1.68612 14.163 1.49401 13.6768 1.38719C13.199 1.28223 12.6367 1.25 12 1.25H6C5.36327 1.25 4.80098 1.28223 4.32323 1.38719C3.83699 1.49401 3.39172 1.68612 3.03892 2.03892C2.68612 2.39172 2.49401 2.83699 2.38719 3.32323C2.28223 3.80098 2.25 4.36327 2.25 5V5.25H4.99956C5.41377 5.25 5.74956 5.58579 5.74956 6C5.74956 6.41421 5.41377 6.75 4.99956 6.75H2.25V9.25H4.99956C5.41377 9.25 5.74956 9.58579 5.74956 10C5.74956 10.4142 5.41377 10.75 4.99956 10.75H2.25V13.25H4.99956C5.41377 13.25 5.74956 13.5858 5.74956 14C5.74956 14.4142 5.41377 14.75 4.99956 14.75H2.25V20.75Z',
  d10: 'M2.25 20.75C1.69772 20.75 1.25 21.1977 1.25 21.75C1.25 22.3023 1.69772 22.75 2.25 22.75H21.75C22.3023 22.75 22.75 22.3023 22.75 21.75C22.75 21.1977 22.3023 20.75 21.75 20.75H2.25Z',
  d11: 'M14.0001 8.25C13.3634 8.25 12.8011 8.28223 12.3234 8.38719C11.8371 8.49401 11.3918 8.68612 11.039 9.03892C10.6862 9.39172 10.4941 9.83699 10.3873 10.3232C10.2824 10.801 10.2501 11.3633 10.2501 12V20.75H14.9997V19C14.9997 18.4477 15.4474 18 15.9997 18C16.552 18 16.9997 18.4477 16.9997 19V20.75H21.7501V12C21.7501 11.3633 21.7179 10.801 21.6129 10.3232C21.5061 9.83699 21.314 9.39172 20.9612 9.03892C20.6084 8.68612 20.1631 8.49401 19.6769 8.38719C19.1991 8.28223 18.6369 8.25 18.0001 8.25H14.0001Z',
  d12: 'M17.0001 19V20.75H15.0001V19C15.0001 18.4477 15.4478 18 16.0001 18C16.5524 18 17.0001 18.4477 17.0001 19Z',
  d13: 'M12.0015 6.92212C12.6394 6.78199 13.3306 6.75 14.0001 6.75H15.1501C15.433 6.75 15.5744 6.75 15.6623 6.66213C15.7501 6.57426 15.7501 6.43284 15.7501 6.15V5C15.7501 4.36327 15.7179 3.80098 15.6129 3.32323C15.5061 2.83699 15.314 2.39172 14.9612 2.03892C14.6084 1.68612 14.1631 1.49401 13.6769 1.38719C13.1991 1.28223 12.6369 1.25 12.0001 1.25H6.00012C5.36339 1.25 4.80111 1.28223 4.32336 1.38719C3.83711 1.494 3.39185 1.68612 3.03904 2.03892C2.68624 2.39172 2.49413 2.83699 2.38731 3.32323C2.28236 3.80098 2.25012 4.36327 2.25012 5V5.25H4.99968C5.4139 5.25 5.74968 5.58579 5.74968 6C5.74968 6.41421 5.4139 6.75 4.99968 6.75H2.25012V9.25H4.99968C5.4139 9.25 5.74968 9.58579 5.74968 10C5.74968 10.4142 5.4139 10.75 4.99968 10.75H2.25012V13.25H4.99968C5.4139 13.25 5.74968 13.5858 5.74968 14C5.74968 14.4142 5.4139 14.75 4.99968 14.75H2.25012V20.75H8.75012V12C8.75012 11.3305 8.78211 10.6393 8.92224 10.0014C9.06789 9.33839 9.35943 8.59721 9.97838 7.97826C10.5973 7.35931 11.3385 7.06777 12.0015 6.92212Z',
  d14: 'M14.2501 12C14.2501 11.5858 14.5859 11.25 15.0001 11.25H17.0001C17.4143 11.25 17.7501 11.5858 17.7501 12C17.7501 12.4142 17.4143 12.75 17.0001 12.75H15.0001C14.5859 12.75 14.2501 12.4142 14.2501 12ZM14.2501 15C14.2501 14.5858 14.5859 14.25 15.0001 14.25H17.0001C17.4143 14.25 17.7501 14.5858 17.7501 15C17.7501 15.4142 17.4143 15.75 17.0001 15.75H15.0001C14.5859 15.75 14.2501 15.4142 14.2501 15Z',
  d15: 'M2.25012 20.75C1.69784 20.75 1.25012 21.1977 1.25012 21.75C1.25012 22.3023 1.69784 22.75 2.25012 22.75H21.7501C22.3024 22.75 22.7501 22.3023 22.7501 21.75C22.7501 21.1977 22.3024 20.75 21.7501 20.75H2.25012Z',
  d16: 'M1 22H23',
  d17: 'M21 9H11V22H21V9Z',
  d18: 'M15 22H3V2H15V9',
  d19: 'M3 6H7M3 10H7M3 14H7',
  d20: 'M14 13H18M14 16H18',
  d21: 'M23 22.75H1V20.75H23V22.75Z',
  d22: 'M8.75 6.75H15.75V2C15.75 1.58579 15.4142 1.25 15 1.25H3C2.58579 1.25 2.25 1.58579 2.25 2V5.25H6V6.75H2.25V9.25H6V10.75H2.25V13.25H6V14.75H2.25V22C2.25 22.4142 2.58579 22.75 3 22.75H8.87803C8.79512 22.5154 8.75 22.263 8.75 22V6.75Z',
  d23: 'M10.25 9C10.25 8.58579 10.5858 8.25 11 8.25L21 8.25C21.4142 8.25 21.75 8.58579 21.75 9V22C21.75 22.4142 21.4142 22.75 21 22.75H11C10.5858 22.75 10.25 22.4142 10.25 22L10.25 9ZM18 13.75L14 13.75L14 12.25L18 12.25V13.75ZM18 16.75H14V15.25H18V16.75ZM17 22V19H15V22L17 22Z',
} as const;

export const IconBuilding05StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="building-05-stroke-rounded IconBuilding05StrokeRounded"
    >
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBuilding05DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="building-05-duotone-rounded IconBuilding05DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBuilding05TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="building-05-twotone-rounded IconBuilding05TwotoneRounded"
    >
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
        strokeLinejoin="round" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBuilding05SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="building-05-solid-rounded IconBuilding05SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconBuilding05BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="building-05-bulk-rounded IconBuilding05BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconBuilding05StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="building-05-stroke-sharp IconBuilding05StrokeSharp"
    >
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
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBuilding05SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="building-05-solid-sharp IconBuilding05SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBuilding05: TheIconSelfPack = {
  name: 'Building05',
  StrokeRounded: IconBuilding05StrokeRounded,
  DuotoneRounded: IconBuilding05DuotoneRounded,
  TwotoneRounded: IconBuilding05TwotoneRounded,
  SolidRounded: IconBuilding05SolidRounded,
  BulkRounded: IconBuilding05BulkRounded,
  StrokeSharp: IconBuilding05StrokeSharp,
  SolidSharp: IconBuilding05SolidSharp,
};