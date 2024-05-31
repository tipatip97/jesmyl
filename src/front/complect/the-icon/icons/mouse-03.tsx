import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.74061 17.0888C4.93047 19.4803 6.82417 21.511 9.26502 21.8118C10.1626 21.9223 11.0752 22 12 22C12.9247 22 13.8373 21.9223 14.7349 21.8118C17.1758 21.511 19.0694 19.4803 19.2593 17.0888C19.3909 15.4317 19.5 13.732 19.5 12C19.5 10.268 19.3909 8.56832 19.2593 6.91118C19.0694 4.51965 17.1758 2.48893 14.7349 2.1882C13.8373 2.07762 12.9247 2 12 2C11.0752 2 10.1626 2.07762 9.26502 2.1882C6.82417 2.48893 4.93047 4.51965 4.74061 6.91118C4.60903 8.56832 4.5 10.268 4.5 12C4.5 13.732 4.60903 15.4317 4.74061 17.0888Z',
  d2: 'M12 5.5L12 7.5',
  d3: 'M5 11H19',
  d4: 'M9.26502 21.8118C6.82417 21.511 4.93047 19.4803 4.74061 17.0888C4.60903 15.4317 4.5 13.732 4.5 12C4.5 11.6654 4.50407 11.3321 4.51158 11H19.4884C19.4959 11.3321 19.5 11.6654 19.5 12C19.5 13.732 19.3909 15.4317 19.2593 17.0888C19.0694 19.4803 17.1758 21.511 14.7349 21.8118C13.8373 21.9223 12.9247 22 12 22C11.0752 22 10.1626 21.9223 9.26502 21.8118Z',
  d5: 'M9.22678 1.44126C10.1212 1.3303 11.0492 1.25 12 1.25C12.9507 1.25 13.8787 1.3303 14.7731 1.44126C17.6062 1.7927 19.793 4.15593 20.0133 6.94946C20.1417 8.57698 20.25 10.2685 20.25 12C20.25 13.7315 20.1417 15.423 20.0133 17.0506C19.793 19.8441 17.606 22.2072 14.7731 22.5588C13.8787 22.6696 12.9507 22.75 12 22.75C11.0492 22.75 10.1211 22.6696 9.22673 22.5588C6.39387 22.2072 4.20685 19.8441 3.98657 17.0505C3.85823 15.423 3.75 13.7315 3.75 12C3.75 10.2685 3.85823 8.577 3.98657 6.94949C4.20684 4.15592 6.39386 1.7927 9.22678 1.44126ZM11.9999 3.20459C11.1555 3.20459 10.312 3.27599 9.4641 3.38118C7.5589 3.61753 6.06992 5.22345 5.92162 7.10423C5.85573 7.9398 5.7962 8.78057 5.75415 9.62702C5.73969 9.91811 5.73246 10.0636 5.82114 10.1568C5.90983 10.25 6.05662 10.25 6.3502 10.25H17.6497C17.9433 10.25 18.0901 10.25 18.1788 10.1568C18.2674 10.0636 18.2602 9.9181 18.2457 9.62701C18.2037 8.78057 18.1441 7.93981 18.0782 7.10425C17.9299 5.22342 16.441 3.61753 14.5357 3.38118C13.6878 3.27599 12.8444 3.20459 11.9999 3.20459Z',
  d6: 'M12 4.72656C12.5523 4.72656 13 5.17428 13 5.72656L13 7.72656C13 8.27885 12.5523 8.72656 12 8.72656C11.4477 8.72656 11 8.27885 11 7.72656L11 5.72656C11 5.17428 11.4477 4.72656 12 4.72656Z',
  d7: 'M12 5L12 8',
  d8: 'M9.17331 1.44383C10.0889 1.33103 11.0341 1.25 12 1.25C12.9658 1.25 13.9111 1.33103 14.8266 1.44383C17.626 1.78873 19.7892 4.11005 20.007 6.85181C20.1391 8.51511 20.25 10.2381 20.25 12C20.25 13.7619 20.1391 15.4849 20.007 17.1482C19.7892 19.89 17.626 22.2112 14.8266 22.5562L14.8265 22.5562C13.9111 22.6689 12.9658 22.75 12 22.75C11.0341 22.75 10.0888 22.6689 9.17338 22.5562L9.17328 22.5562C6.37403 22.2112 4.21064 19.89 3.99296 17.1482C3.86089 15.4849 3.75 13.7618 3.75 12C3.75 10.2382 3.86089 8.51512 3.99296 6.85182C4.21063 4.11003 6.37402 1.78872 9.17331 1.44383L9.17331 1.44383ZM12 2.75C11.1162 2.75 10.2363 2.8242 9.35673 2.93257C7.27431 3.18914 5.65031 4.92927 5.48825 6.97054L5.48825 6.97055C5.35717 8.62151 5.25 10.2979 5.25 12C5.25 13.7021 5.35717 15.3785 5.48825 17.0295L4.74061 17.0888L5.48825 17.0295C5.65031 19.0707 7.27425 20.8107 9.35666 21.0675C10.2364 21.1758 11.1163 21.25 12 21.25C12.8837 21.25 13.7636 21.1757 14.6433 21.0675C16.7257 20.8107 18.3496 19.0707 18.5117 17.0295L18.5117 17.0294C18.6428 15.3785 18.75 13.702 18.75 12C18.75 10.298 18.6428 8.62152 18.5117 6.97056C18.3496 4.92925 16.7257 3.18914 14.6432 2.93257C13.7636 2.8242 12.8837 2.75 12 2.75Z',
  d9: 'M11 8L11 5L13 5L13 8L11 8Z',
  d10: 'M9.22678 1.44126C10.1212 1.3303 11.0492 1.25 12 1.25C12.9507 1.25 13.8787 1.3303 14.7731 1.44126C17.6062 1.7927 19.793 4.15593 20.0133 6.94946C20.1417 8.57698 20.25 10.2685 20.25 12C20.25 13.7315 20.1417 15.423 20.0133 17.0506C19.793 19.8441 17.606 22.2072 14.7731 22.5588C13.8787 22.6696 12.9507 22.75 12 22.75C11.0492 22.75 10.1211 22.6696 9.22673 22.5588C6.39387 22.2072 4.20685 19.8441 3.98657 17.0505C3.85823 15.423 3.75 13.7315 3.75 12C3.75 10.2685 3.85823 8.577 3.98657 6.94949C4.20684 4.15592 6.39386 1.7927 9.22678 1.44126ZM11.9995 3.2041C11.155 3.2041 10.3115 3.27551 9.46362 3.38069C7.55843 3.61704 6.06944 5.22296 5.92114 7.10375C5.84558 8.06194 5.77839 9.02696 5.73633 9.99956H18.2626C18.2205 9.02697 18.1533 8.06194 18.0777 7.10376C17.9294 5.22293 16.4405 3.61704 14.5353 3.38069C13.6874 3.27551 12.8439 3.2041 11.9995 3.2041Z',
} as const;

export const IconMouse03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-03-stroke-rounded IconMouse03StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-03-duotone-rounded IconMouse03DuotoneRounded"
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

export const IconMouse03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-03-twotone-rounded IconMouse03TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-03-solid-rounded IconMouse03SolidRounded"
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

export const IconMouse03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-03-bulk-rounded IconMouse03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMouse03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-03-stroke-sharp IconMouse03StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
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
    </TheIconWrapper>
  );
};

export const IconMouse03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-03-solid-sharp IconMouse03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfMouse03: TheIconSelfPack = {
  name: 'Mouse03',
  StrokeRounded: IconMouse03StrokeRounded,
  DuotoneRounded: IconMouse03DuotoneRounded,
  TwotoneRounded: IconMouse03TwotoneRounded,
  SolidRounded: IconMouse03SolidRounded,
  BulkRounded: IconMouse03BulkRounded,
  StrokeSharp: IconMouse03StrokeSharp,
  SolidSharp: IconMouse03SolidSharp,
};