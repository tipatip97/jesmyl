import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.74061 17.0888C4.93047 19.4803 6.82417 21.511 9.26502 21.8118C10.1626 21.9223 11.0752 22 12 22C12.9247 22 13.8373 21.9223 14.7349 21.8118C17.1758 21.511 19.0694 19.4803 19.2593 17.0888C19.3909 15.4317 19.5 13.732 19.5 12C19.5 10.268 19.3909 8.56832 19.2593 6.91118C19.0694 4.51965 17.1758 2.48893 14.7349 2.1882C13.8373 2.07762 12.9247 2 12 2C11.0752 2 10.1626 2.07762 9.26502 2.1882C6.82417 2.48893 4.93047 4.51965 4.74061 6.91118C4.60903 8.56832 4.5 10.268 4.5 12C4.5 13.732 4.60903 15.4317 4.74061 17.0888Z',
  d2: 'M11.9883 6.83984L11.9883 11.7598',
  d3: 'M10.0039 7.85958C10.9859 6.83958 11.5847 5.93958 12.0398 6.00426C12.4231 6.00107 12.7823 6.59958 14.0039 7.85958',
  d4: 'M13.9961 11.1416C13.0141 12.1616 12.4153 13.0616 11.9602 12.9969C11.5769 13.0001 11.2177 12.4016 9.99609 11.1416',
  d5: 'M4.74061 17.0888C4.93047 19.4803 6.82417 21.511 9.26502 21.8118C10.1626 21.9223 11.0752 22 12 22C12.9247 22 13.8373 21.9223 14.7349 21.8118C17.1758 21.511 19.0694 19.4803 19.2593 17.0888C19.3909 15.4317 19.5 13.7319 19.5 12C19.5 10.2681 19.3909 8.56832 19.2593 6.91118C19.0694 4.51965 17.1758 2.48893 14.7349 2.1882C13.8373 2.07762 12.9247 2 12 2C11.0752 2 10.1626 2.07762 9.26502 2.1882C6.82417 2.48893 4.93047 4.51965 4.74061 6.91118C4.60903 8.56832 4.5 10.2681 4.5 12C4.5 13.7319 4.60903 15.4317 4.74061 17.0888Z',
  d6: 'M11.9883 6.83887V11.7588',
  d7: 'M10.0039 7.85861C10.9859 6.83861 11.5847 5.93861 12.0398 6.00329C12.4231 6.0001 12.7823 6.59861 14.0039 7.85861',
  d8: 'M13.9961 11.1406C13.0141 12.1606 12.4153 13.0606 11.9602 12.9959C11.5769 12.9991 11.2177 12.4006 9.99609 11.1406',
  d9: 'M11.9883 6.83886V11.7588M10.0039 7.85861C10.9859 6.83861 11.5847 5.93861 12.0398 6.00329C12.4231 6.0001 12.7823 6.59861 14.0039 7.85861M13.9961 11.1406C13.0141 12.1606 12.4153 13.0606 11.9602 12.9959C11.5769 12.9991 11.2177 12.4006 9.99609 11.1406',
  d10: 'M12 1.25C11.0341 1.25 10.0889 1.33103 9.17331 1.44383C6.37402 1.78872 4.21063 4.11003 3.99296 6.85182C3.86089 8.51512 3.75 10.2382 3.75 12C3.75 13.7618 3.86089 15.4849 3.99296 17.1482C4.21064 19.89 6.37413 22.2112 9.17338 22.5562C10.0888 22.6689 11.0341 22.75 12 22.75C12.9658 22.75 13.9112 22.6689 14.8266 22.5562C17.626 22.2112 19.7892 19.89 20.007 17.1482C20.1391 15.4849 20.25 13.7619 20.25 12C20.25 10.2381 20.1391 8.51511 20.007 6.85181C19.7892 4.11005 17.626 1.78873 14.8266 1.44383C13.9111 1.33103 12.9658 1.25 12 1.25ZM9.49278 8.41184C9.18766 8.13171 9.1674 7.65727 9.44754 7.35215L10.4755 6.23249C10.6868 6.00228 10.8934 5.77707 11.0876 5.61573C11.3045 5.4355 11.6032 5.25 12 5.25C12.3968 5.25 12.6955 5.4355 12.9124 5.61573C13.1066 5.77706 13.3132 6.00225 13.5245 6.23246L13.5245 6.23248L13.5245 6.23249L14.5525 7.35215C14.8326 7.65727 14.8124 8.13171 14.5072 8.41184C14.3631 8.54413 14.1813 8.60943 14 8.60938H13V10.3906H14C14.1813 10.3906 14.3631 10.4559 14.5072 10.5882C14.8124 10.8683 14.8326 11.3427 14.5525 11.6479L13.5245 12.7675L13.5245 12.7675C13.3132 12.9977 13.1066 13.2229 12.9124 13.3843C12.6955 13.5645 12.3968 13.75 12 13.75C11.6032 13.75 11.3045 13.5645 11.0876 13.3843C10.8934 13.2229 10.6868 12.9977 10.4755 12.7675L9.44754 11.6479C9.1674 11.3427 9.18766 10.8683 9.49278 10.5882C9.63686 10.4559 9.8187 10.3906 10 10.3906H11V8.60938H10C9.8187 8.60943 9.63686 8.54413 9.49278 8.41184Z',
  d11: 'M9.17331 1.44383C10.0889 1.33103 11.0341 1.25 12 1.25C12.9658 1.25 13.9111 1.33103 14.8266 1.44383C17.626 1.78873 19.7892 4.11005 20.007 6.85181C20.1391 8.51511 20.25 10.2381 20.25 12C20.25 13.7619 20.1391 15.4849 20.007 17.1482C19.7892 19.89 17.626 22.2112 14.8266 22.5562C13.9112 22.6689 12.9658 22.75 12 22.75C11.0341 22.75 10.0888 22.6689 9.17338 22.5562C6.37413 22.2112 4.21064 19.89 3.99296 17.1482C3.86089 15.4849 3.75 13.7618 3.75 12C3.75 10.2382 3.86089 8.51512 3.99296 6.85182C4.21063 4.11003 6.37402 1.78872 9.17331 1.44383Z',
  d12: 'M9.44754 7.35215C9.1674 7.65727 9.18766 8.13171 9.49278 8.41184C9.63686 8.54413 9.8187 8.60943 10 8.60938H11V10.3906H10C9.8187 10.3906 9.63686 10.4559 9.49278 10.5882C9.18766 10.8683 9.1674 11.3427 9.44754 11.6479L10.4755 12.7675C10.6868 12.9977 10.8934 13.2229 11.0876 13.3843C11.3045 13.5645 11.6032 13.75 12 13.75C12.3968 13.75 12.6955 13.5645 12.9124 13.3843C13.1066 13.2229 13.3132 12.9977 13.5245 12.7675L14.5525 11.6479C14.8326 11.3427 14.8124 10.8683 14.5072 10.5882C14.3631 10.4559 14.1813 10.3906 14 10.3906H13V8.60938H14C14.1813 8.60943 14.3631 8.54413 14.5072 8.41184C14.8124 8.13171 14.8326 7.65727 14.5525 7.35215L13.5245 6.23249L13.5245 6.23248C13.3132 6.00227 13.1066 5.77706 12.9124 5.61573C12.6955 5.4355 12.3968 5.25 12 5.25C11.6032 5.25 11.3045 5.4355 11.0876 5.61573C10.8934 5.77707 10.6868 6.00228 10.4755 6.23249L9.44754 7.35215Z',
  d13: 'M9.48535 10.9621L12.0169 13.0088L14.4921 11.0059M14.5301 7.99969L12.0169 6.00684L9.48535 7.99969M12.0169 6.53928V12.43',
  d14: 'M12 1.25C11.0341 1.25 10.0889 1.33103 9.17331 1.44383C6.37402 1.78872 4.21063 4.11003 3.99296 6.85182C3.86089 8.51512 3.75 10.2382 3.75 12C3.75 13.7618 3.86089 15.4849 3.99296 17.1482C4.21064 19.89 6.37413 22.2112 9.17338 22.5562C10.0888 22.6689 11.0341 22.75 12 22.75C12.9658 22.75 13.9112 22.6689 14.8266 22.5562C17.626 22.2112 19.7892 19.89 20.007 17.1482C20.1391 15.4849 20.25 13.7619 20.25 12C20.25 10.2381 20.1391 8.51511 20.007 6.85181C19.7892 4.11005 17.626 1.78873 14.8266 1.44383C13.9111 1.33103 12.9658 1.25 12 1.25ZM14.9683 7.41388L11.9998 5.03906L9.03125 7.41388L9.96829 8.58518L11.2498 7.56V11.4391L9.96829 10.4139L9.03125 11.5852L11.9998 13.96L14.9683 11.5852L14.0312 10.4139L12.7498 11.4391V7.56L14.0312 8.58518L14.9683 7.41388Z',
} as const;

export const IconMouseScroll01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-scroll-01-stroke-rounded IconMouseScroll01StrokeRounded"
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

export const IconMouseScroll01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-scroll-01-duotone-rounded IconMouseScroll01DuotoneRounded"
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseScroll01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-scroll-01-twotone-rounded IconMouseScroll01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseScroll01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-scroll-01-solid-rounded IconMouseScroll01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseScroll01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-scroll-01-bulk-rounded IconMouseScroll01BulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconMouseScroll01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-scroll-01-stroke-sharp IconMouseScroll01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseScroll01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-scroll-01-solid-sharp IconMouseScroll01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMouseScroll01: TheIconSelfPack = {
  name: 'MouseScroll01',
  StrokeRounded: IconMouseScroll01StrokeRounded,
  DuotoneRounded: IconMouseScroll01DuotoneRounded,
  TwotoneRounded: IconMouseScroll01TwotoneRounded,
  SolidRounded: IconMouseScroll01SolidRounded,
  BulkRounded: IconMouseScroll01BulkRounded,
  StrokeSharp: IconMouseScroll01StrokeSharp,
  SolidSharp: IconMouseScroll01SolidSharp,
};