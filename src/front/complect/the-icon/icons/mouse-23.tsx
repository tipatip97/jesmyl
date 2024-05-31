import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.74061 17.0888C4.93047 19.4803 6.82417 21.511 9.26502 21.8118C10.1626 21.9223 11.0752 22 12 22C12.9247 22 13.8373 21.9223 14.7349 21.8118C17.1758 21.511 19.0694 19.4803 19.2593 17.0888C19.3909 15.4317 19.5 13.732 19.5 12C19.5 10.268 19.3909 8.56832 19.2593 6.91118C19.0694 4.51965 17.1758 2.48893 14.7349 2.1882C13.8373 2.07762 12.9247 2 12 2C11.0752 2 10.1626 2.07762 9.26502 2.1882C6.82417 2.48893 4.93047 4.51965 4.74061 6.91118C4.60903 8.56832 4.5 10.268 4.5 12C4.5 13.732 4.60903 15.4317 4.74061 17.0888Z',
  d2: 'M12 6L12 9',
  d3: 'M4.74061 17.0888C4.93047 19.4803 6.82417 21.511 9.26502 21.8118C10.1626 21.9223 11.0752 22 12 22C12.9247 22 13.8373 21.9223 14.7349 21.8118C17.1758 21.511 19.0694 19.4803 19.2593 17.0888C19.3909 15.4317 19.5 13.7319 19.5 12C19.5 10.2681 19.3909 8.56832 19.2593 6.91118C19.0694 4.51965 17.1758 2.48893 14.7349 2.1882C13.8373 2.07762 12.9247 2 12 2C11.0752 2 10.1626 2.07762 9.26502 2.1882C6.82417 2.48893 4.93047 4.51965 4.74061 6.91118C4.60903 8.56832 4.5 10.2681 4.5 12C4.5 13.7319 4.60903 15.4317 4.74061 17.0888Z',
  d4: 'M9.17331 1.44383C10.0889 1.33103 11.0341 1.25 12 1.25C12.9658 1.25 13.9111 1.33103 14.8266 1.44383C17.626 1.78873 19.7892 4.11005 20.007 6.85181C20.1391 8.51511 20.25 10.2381 20.25 12C20.25 13.7619 20.1391 15.4849 20.007 17.1482C19.7892 19.89 17.626 22.2112 14.8266 22.5562C13.9112 22.6689 12.9658 22.75 12 22.75C11.0341 22.75 10.0888 22.6689 9.17338 22.5562C6.37413 22.2112 4.21064 19.89 3.99296 17.1482C3.86089 15.4849 3.75 13.7618 3.75 12C3.75 10.2382 3.86089 8.51512 3.99296 6.85182C4.21063 4.11003 6.37402 1.78872 9.17331 1.44383ZM12 5C12.5523 5 13 5.44772 13 6V9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9V6C11 5.44772 11.4477 5 12 5Z',
  d5: 'M12 1.25C11.0341 1.25 10.0889 1.33103 9.17331 1.44383C6.37402 1.78872 4.21063 4.11003 3.99296 6.85182C3.86089 8.51512 3.75 10.2382 3.75 12C3.75 13.7618 3.86089 15.4849 3.99296 17.1482C4.21064 19.89 6.37413 22.2112 9.17338 22.5562C10.0888 22.6689 11.0341 22.75 12 22.75C12.9658 22.75 13.9112 22.6689 14.8266 22.5562C17.626 22.2112 19.7892 19.89 20.007 17.1482C20.1391 15.4849 20.25 13.7619 20.25 12C20.25 10.2381 20.1391 8.51511 20.007 6.85181C19.7892 4.11005 17.626 1.78873 14.8266 1.44383C13.9111 1.33103 12.9658 1.25 12 1.25Z',
  d6: 'M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V9C11 9.55228 11.4477 10 12 10C12.5523 10 13 9.55228 13 9V6Z',
  d7: 'M12 5L12 9',
  d8: 'M12 1.25C11.0341 1.25 10.0889 1.33103 9.17331 1.44383C6.37402 1.78872 4.21063 4.11003 3.99296 6.85182C3.86089 8.51512 3.75 10.2382 3.75 12C3.75 13.7618 3.86089 15.4849 3.99296 17.1482C4.21064 19.89 6.37413 22.2112 9.17338 22.5562C10.0888 22.6689 11.0341 22.75 12 22.75C12.9658 22.75 13.9112 22.6689 14.8266 22.5562C17.626 22.2112 19.7892 19.89 20.007 17.1482C20.1391 15.4849 20.25 13.7619 20.25 12C20.25 10.2381 20.1391 8.51511 20.007 6.85181C19.7892 4.11005 17.626 1.78873 14.8266 1.44383C13.9111 1.33103 12.9658 1.25 12 1.25ZM11 5V9H13V5H11Z',
} as const;

export const IconMouse23StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-23-stroke-rounded IconMouse23StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMouse23DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-23-duotone-rounded IconMouse23DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconMouse23TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-23-twotone-rounded IconMouse23TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconMouse23SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-23-solid-rounded IconMouse23SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse23BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-23-bulk-rounded IconMouse23BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMouse23StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-23-stroke-sharp IconMouse23StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouse23SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-23-solid-sharp IconMouse23SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMouse23: TheIconSelfPack = {
  name: 'Mouse23',
  StrokeRounded: IconMouse23StrokeRounded,
  DuotoneRounded: IconMouse23DuotoneRounded,
  TwotoneRounded: IconMouse23TwotoneRounded,
  SolidRounded: IconMouse23SolidRounded,
  BulkRounded: IconMouse23BulkRounded,
  StrokeSharp: IconMouse23StrokeSharp,
  SolidSharp: IconMouse23SolidSharp,
};