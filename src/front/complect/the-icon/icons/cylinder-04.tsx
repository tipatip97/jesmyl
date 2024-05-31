import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 19L9.87868 21.1213M9.87868 21.1213C10.4216 21.6642 11.1716 22 12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 19.8284 9.33579 20.5784 9.87868 21.1213Z',
  d2: 'M10 16H14C16.8089 16 18.2134 16 19.2223 15.3259C19.659 15.034 20.034 14.659 20.3259 14.2223C21 13.2134 21 11.8089 21 9C21 6.19108 21 4.78661 20.3259 3.77772C20.034 3.34096 19.659 2.96596 19.2223 2.67412C18.2134 2 16.8089 2 14 2H10C7.19108 2 5.78661 2 4.77772 2.67412C4.34096 2.96596 3.96596 3.34096 3.67412 3.77772C3 4.78661 3 6.19108 3 9C3 11.8089 3 13.2134 3.67412 14.2223C3.96596 14.659 4.34096 15.034 4.77772 15.3259C5.78661 16 7.19108 16 10 16Z',
  d3: 'M12 20.875C13.1046 20.875 14 19.9796 14 18.875C14 17.7704 13.1046 16.875 12 16.875C10.8954 16.875 10 17.7704 10 18.875C10 19.0543 10.0235 19.228 10.0676 19.3932L11.2929 18.1679C11.6834 17.7774 12.3166 17.7774 12.7071 18.1679C13.0976 18.5584 13.0976 19.1916 12.7071 19.5821L11.4818 20.8074C11.647 20.8515 11.8207 20.875 12 20.875ZM16 18.875C16 21.0841 14.2091 22.875 12 22.875C10.8957 22.875 9.89434 22.4262 9.17157 21.7034C8.44881 20.9807 8 19.9793 8 18.875C8 16.6659 9.79086 14.875 12 14.875C14.2091 14.875 16 16.6659 16 18.875Z',
  d4: 'M14.0416 1.125C15.4108 1.12499 16.4957 1.12498 17.3621 1.21312C18.2497 1.30341 18.9907 1.49239 19.639 1.92552C20.1576 2.27207 20.6029 2.71739 20.9495 3.23604C21.3826 3.88426 21.5716 4.6253 21.6619 5.51294C21.75 6.37931 21.75 7.54733 21.75 8.91656C21.75 10.2858 21.75 11.3707 21.6619 12.2371C21.5716 13.1247 21.3826 13.8657 20.9495 14.514C20.6029 15.0326 20.1576 15.4779 19.639 15.8245C18.9907 16.2576 18.2497 16.4466 17.3621 16.5369C16.4957 16.625 15.4108 16.625 14.0416 16.625H9.9584C8.5892 16.625 7.5043 16.625 6.63794 16.5369C5.7503 16.4466 5.00926 16.2576 4.36104 15.8245C3.84239 15.4779 3.39707 15.0326 3.05052 14.514C2.61739 13.8657 2.42841 13.1247 2.33812 12.2371C2.24998 11.3707 2.24999 10.2858 2.25 8.9166V8.91659C2.24999 7.54738 2.24998 6.3793 2.33812 5.51294C2.42841 4.6253 2.61739 3.88426 3.05052 3.23604C3.39707 2.71739 3.84239 2.27207 4.36104 1.92552C5.00926 1.49239 5.7503 1.30341 6.63794 1.21312C7.5043 1.12498 8.5892 1.12499 9.95841 1.125H9.95841H14.0416H14.0416Z',
  d5: 'M3 16.0004H21V2.00036L3 2V16.0004Z',
  d6: 'M12 17.125C10.9645 17.125 10.125 17.9645 10.125 19C10.125 19.1681 10.147 19.3309 10.1884 19.4858L11.3371 18.3371L12.6629 19.6629L11.5142 20.8116C11.6691 20.853 11.8319 20.875 12 20.875C13.0355 20.875 13.875 20.0355 13.875 19C13.875 17.9645 13.0355 17.125 12 17.125ZM8.25 19C8.25 16.9289 9.92893 15.25 12 15.25C14.0711 15.25 15.75 16.9289 15.75 19C15.75 21.0711 14.0711 22.75 12 22.75C10.9647 22.75 10.0259 22.3292 9.34835 21.6516C8.67076 20.9741 8.25 20.0353 8.25 19Z',
  d7: 'M2.46968 1.46966C2.61033 1.32901 2.8011 1.25 3.00002 1.25L21 1.25036C21.4142 1.25037 21.75 1.58615 21.75 2.00036V16.0004C21.75 16.4146 21.4142 16.7504 21 16.7504H3C2.58579 16.7504 2.25 16.4146 2.25 16.0004V2C2.25 1.80108 2.32902 1.61032 2.46968 1.46966Z',
} as const;

export const IconCylinder04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cylinder-04-stroke-rounded IconCylinder04StrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCylinder04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cylinder-04-duotone-rounded IconCylinder04DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCylinder04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cylinder-04-twotone-rounded IconCylinder04TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconCylinder04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cylinder-04-solid-rounded IconCylinder04SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCylinder04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cylinder-04-bulk-rounded IconCylinder04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCylinder04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cylinder-04-stroke-sharp IconCylinder04StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconCylinder04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cylinder-04-solid-sharp IconCylinder04SolidSharp"
    >
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

export const iconPackOfCylinder04: TheIconSelfPack = {
  name: 'Cylinder04',
  StrokeRounded: IconCylinder04StrokeRounded,
  DuotoneRounded: IconCylinder04DuotoneRounded,
  TwotoneRounded: IconCylinder04TwotoneRounded,
  SolidRounded: IconCylinder04SolidRounded,
  BulkRounded: IconCylinder04BulkRounded,
  StrokeSharp: IconCylinder04StrokeSharp,
  SolidSharp: IconCylinder04SolidSharp,
};