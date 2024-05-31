import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 19H15M15 19C15 18.2322 14.7071 17.4645 14.1213 16.8787C12.9497 15.7071 11.0503 15.7071 9.87868 16.8787C8.70711 18.0503 8.70711 19.9497 9.87868 21.1213C11.0503 22.2929 12.9497 22.2929 14.1213 21.1213C14.7071 20.5355 15 19.7678 15 19Z',
  d2: 'M12 3L12 6',
  d3: 'M11.9998 12H12.0088',
  d4: 'M11.9998 9H12.0088',
  d5: 'M2.94867 11.4964C4.92231 14.2156 8.24 16 12 16C15.76 16 19.0777 14.2156 21.0513 11.4964C21.7599 10.5203 22.1141 10.0322 21.9672 9.18232C21.8203 8.33248 21.1837 7.89241 19.9104 7.01228L14.3985 3.20228C13.239 2.40076 12.6592 2 12 2C11.3408 2 10.761 2.40076 9.60147 3.20228L4.08961 7.01228C2.81635 7.89241 2.17971 8.33248 2.03278 9.18232C1.88585 10.0322 2.24013 10.5203 2.94867 11.4964Z',
  d6: 'M2.94867 11.4964C4.92231 14.2156 8.24 16 12 16C15.76 16 19.0777 14.2156 21.0513 11.4964C21.7599 10.5203 22.1141 10.0322 21.9672 9.18232C21.8203 8.33248 21.1837 7.89241 19.9104 7.01228L14.3985 3.20228C13.239 2.40076 12.6592 2 12 2C11.3408 2 10.761 2.40076 9.60146 3.20228L4.08961 7.01228C2.81635 7.89241 2.17971 8.33248 2.03278 9.18232C1.88585 10.0322 2.24013 10.5203 2.94867 11.4964Z',
  d7: 'M13.4142 17.2069C12.6332 16.4258 11.3668 16.4258 10.5858 17.2069C9.80474 17.9879 9.80474 19.2543 10.5858 20.0353C11.3668 20.8164 12.6332 20.8164 13.4142 20.0353C13.541 19.9085 13.6472 19.7691 13.7329 19.6211H12C11.4477 19.6211 11 19.1734 11 18.6211C11 18.0688 11.4477 17.6211 12 17.6211H13.7329C13.6472 17.4731 13.541 17.3337 13.4142 17.2069ZM9.17157 15.7927C10.7337 14.2306 13.2663 14.2306 14.8284 15.7927C15.6093 16.5735 16 17.599 16 18.6211C16 19.6432 15.6093 20.6687 14.8284 21.4495C13.2663 23.0116 10.7337 23.0116 9.17157 21.4495C7.60948 19.8874 7.60948 17.3548 9.17157 15.7927Z',
  d8: 'M10.6329 1.26169C10.8036 1.16982 11.0002 1.29883 11.0002 1.49267V5.62153C11.0002 6.17382 11.4479 6.62153 12.0002 6.62153C12.5525 6.62153 13.0002 6.17382 13.0002 5.62153V1.49239C13.0002 1.29878 13.1966 1.16993 13.3671 1.26169C13.7764 1.482 14.2403 1.80266 14.7915 2.18372L20.3831 6.04888C20.9802 6.46148 21.5014 6.82174 21.8831 7.19159C22.3058 7.6012 22.5997 8.06017 22.7062 8.67608C22.8058 9.25213 22.7327 9.7388 22.5132 10.2232C22.3225 10.6438 22.0174 11.0639 21.692 11.5121L21.6583 11.5585C19.5428 14.4731 15.9989 16.3715 12 16.3715C8.00107 16.3715 4.45718 14.4731 2.34168 11.5585L2.30796 11.5121C1.98253 11.0639 1.67745 10.6438 1.4868 10.2232C1.26725 9.7388 1.19413 9.25213 1.29372 8.67609C1.40021 8.06017 1.69418 7.6012 2.11687 7.1916C2.49853 6.82174 3.01979 6.46149 3.61679 6.04889L3.66313 6.01687L9.20846 2.18372C9.75969 1.80266 10.2236 1.482 10.6329 1.26169ZM11 8.62153C11 8.06925 11.4477 7.62153 12 7.62153H12.009C12.5613 7.62153 13.009 8.06925 13.009 8.62153C13.009 9.17382 12.5613 9.62153 12.009 9.62153H12C11.4477 9.62153 11 9.17382 11 8.62153ZM12 10.6215C11.4477 10.6215 11 11.0692 11 11.6215C11 12.1738 11.4477 12.6215 12 12.6215H12.009C12.5613 12.6215 13.009 12.1738 13.009 11.6215C13.009 11.0692 12.5613 10.6215 12.009 10.6215H12Z',
  d9: 'M10.6329 1.26125C11.0671 1.02751 11.5019 0.871094 12 0.871094C12.4981 0.871094 12.9328 1.02751 13.3671 1.26125C13.7764 1.48156 14.2403 1.80222 14.7915 2.18328L20.3831 6.04844C20.9802 6.46104 21.5014 6.8213 21.8831 7.19115C22.3058 7.60076 22.5997 8.05973 22.7062 8.67564C22.8058 9.25169 22.7327 9.73836 22.5132 10.2227C22.3225 10.6433 22.0174 11.0635 21.692 11.5117L21.6583 11.5581C19.5428 14.4727 15.9989 16.3711 12 16.3711C8.00107 16.3711 4.45718 14.4727 2.34168 11.5581L2.30796 11.5116C1.98253 11.0635 1.67745 10.6433 1.4868 10.2227C1.26725 9.73836 1.19413 9.25169 1.29372 8.67565C1.40021 8.05973 1.69418 7.60076 2.11687 7.19115C2.49853 6.8213 3.01979 6.46105 3.61679 6.04845L3.66313 6.01643L9.20846 2.18328C9.75969 1.80222 10.2236 1.48156 10.6329 1.26125Z',
  d10: 'M13.0002 1.08457C12.684 0.952075 12.3584 0.871094 12 0.871094C11.6417 0.871094 11.3163 0.952001 11.0002 1.08439L11.0002 5.62109C11.0002 6.17338 11.4479 6.62109 12.0002 6.62109C12.5525 6.62109 13.0002 6.17338 13.0002 5.62109L13.0002 1.08457Z',
  d11: 'M11 8.62109C11 8.06881 11.4477 7.62109 12 7.62109H12.009C12.5613 7.62109 13.009 8.06881 13.009 8.62109C13.009 9.17338 12.5613 9.62109 12.009 9.62109H12C11.4477 9.62109 11 9.17338 11 8.62109Z',
  d12: 'M12 10.6211C11.4477 10.6211 11 11.0688 11 11.6211C11 12.1734 11.4477 12.6211 12 12.6211H12.009C12.5613 12.6211 13.009 12.1734 13.009 11.6211C13.009 11.0688 12.5613 10.6211 12.009 10.6211H12Z',
  d13: 'M4.41148 12.7782C8.60251 17.0739 15.3975 17.0739 19.5885 12.7782C20.6729 11.6667 21.4768 10.3764 22 9L12 2L2 9C2.52324 10.3764 3.32706 11.6667 4.41148 12.7782Z',
  d14: 'M12 2L12 6',
  d15: 'M13.3356 17.4252C12.6034 16.6929 11.4162 16.6929 10.6839 17.4252C9.95171 18.1574 9.95171 19.3446 10.6839 20.0768C11.4162 20.809 12.6034 20.809 13.3356 20.0768C13.4545 19.9579 13.5541 19.8272 13.6343 19.6885H12.0098V17.8135H13.6343C13.5541 17.6747 13.4545 17.544 13.3356 17.4252ZM9.35812 16.0993C10.8226 14.6349 13.1969 14.6349 14.6614 16.0993C15.3935 16.8314 15.7598 17.7927 15.7598 18.751C15.7598 19.7092 15.3935 20.6706 14.6614 21.4026C13.1969 22.8671 10.8226 22.8671 9.35812 21.4026C7.89365 19.9382 7.89365 17.5638 9.35812 16.0993Z',
  d16: 'M11 1.50009V5.75069H13V1.5L22.4302 8.13627C22.7115 8.33323 22.8232 8.69615 22.7011 9.01719C22.1424 10.487 21.2836 11.8654 20.1254 13.0526C15.6401 17.6501 8.36005 17.6501 3.87471 13.0526C2.71649 11.8654 1.85774 10.487 1.29901 9.01719C1.17697 8.69615 1.2886 8.33323 1.56997 8.13627L11 1.50009ZM11 11.75C11 11.1977 11.4477 10.75 12 10.75H12.009C12.5613 10.75 13.009 11.1977 13.009 11.75C13.009 12.3023 12.5613 12.75 12.009 12.75H12C11.4477 12.75 11 12.3023 11 11.75ZM12 7.75C11.4477 7.75 11 8.19772 11 8.75C11 9.30228 11.4477 9.75 12 9.75H12.009C12.5613 9.75 13.009 9.30228 13.009 8.75C13.009 8.19772 12.5613 7.75 12.009 7.75H12Z',
} as const;

export const IconCone02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cone-02-stroke-rounded IconCone02StrokeRounded"
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
        strokeLinejoin="round" 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCone02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cone-02-duotone-rounded IconCone02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCone02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cone-02-twotone-rounded IconCone02TwotoneRounded"
    >
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
        strokeLinejoin="round" 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCone02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cone-02-solid-rounded IconCone02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconCone02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cone-02-bulk-rounded IconCone02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
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

export const IconCone02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cone-02-stroke-sharp IconCone02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconCone02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cone-02-solid-sharp IconCone02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCone02: TheIconSelfPack = {
  name: 'Cone02',
  StrokeRounded: IconCone02StrokeRounded,
  DuotoneRounded: IconCone02DuotoneRounded,
  TwotoneRounded: IconCone02TwotoneRounded,
  SolidRounded: IconCone02SolidRounded,
  BulkRounded: IconCone02BulkRounded,
  StrokeSharp: IconCone02StrokeSharp,
  SolidSharp: IconCone02SolidSharp,
};