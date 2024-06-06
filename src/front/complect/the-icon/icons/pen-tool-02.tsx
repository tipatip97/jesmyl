import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16.4215 7C16.6828 5.81796 17.5116 3.8044 16.5398 2.73202C15.8765 2 14.6288 2 12.1335 2L11.8665 2C9.37118 2 8.12353 2 7.46018 2.73202C6.4884 3.80441 7.31722 5.81796 7.57854 7',
  d2: 'M18.0068 14.6526L13.7868 20.3584C12.9774 21.4528 12.5726 22 12 22C11.4274 22 11.0227 21.4528 10.2132 20.3584L5.99325 14.6526C5.31656 13.7377 4.97821 13.2802 5.00109 12.7927C5.02396 12.3052 5.47593 11.7946 6.37986 10.7732C7.25108 9.78884 7.57854 8.76948 7.57854 7.00045L16.4215 7C16.4215 8.76902 16.7493 9.78857 17.6203 10.7731C18.5242 11.7947 18.9761 12.3054 18.9989 12.7929C19.0217 13.2803 18.6834 13.7377 18.0068 14.6526Z',
  d3: 'M13.5 14C13.0587 14.318 12.5464 14.5 12 14.5M12 14.5C11.4536 14.5 10.9413 14.318 10.5 14M12 14.5L12 22',
  d4: 'M12.1874 1.42188H11.8125C10.6107 1.42186 9.63495 1.42184 8.87996 1.51959C8.10296 1.62019 7.41218 1.83985 6.90433 2.40028C6.17824 3.20154 6.18996 4.27775 6.31524 5.10859C6.35728 5.38741 6.42404 5.69298 6.49312 5.97598C6.54491 6.18812 6.5708 6.29419 6.65238 6.35824C6.73395 6.42229 6.84546 6.42229 7.06848 6.42228L16.9315 6.42193C17.1545 6.42192 17.266 6.42192 17.3475 6.35787C17.4291 6.29381 17.455 6.18775 17.5068 5.97563C17.5758 5.69276 17.6425 5.38739 17.6846 5.10859C17.8099 4.27775 17.8216 3.20154 17.0955 2.40028C16.5876 1.83985 15.8969 1.62019 15.1199 1.51959C14.3649 1.42184 13.3892 1.42186 12.1874 1.42188Z',
  d5: 'M17.1094 7.99375C17.1936 8.06564 17.2152 8.20256 17.2586 8.47638C17.2963 8.71498 17.3464 8.92881 17.4089 9.12491C17.564 9.61194 17.8063 10.0233 18.182 10.4479L18.2079 10.4772C18.6378 10.963 18.9971 11.3691 19.2477 11.7155C19.501 12.0657 19.7262 12.4627 19.7481 12.9296C19.769 13.3755 19.6161 13.7584 19.4156 14.1077C19.2274 14.4354 18.9517 14.8082 18.6345 15.2369L14.357 21.0206C13.9805 21.5297 13.6487 21.9784 13.3346 22.2921C13.2315 22.3951 13.1205 22.4936 13.0001 22.5808V15.5236C13.3916 15.4051 13.7563 15.2198 14.0847 14.9831C14.5328 14.6602 14.6343 14.0352 14.3114 13.5872C13.9885 13.1391 13.3635 13.0376 12.9154 13.3605C12.6275 13.568 12.3167 13.6718 12.0001 13.6718C11.6834 13.6718 11.3726 13.568 11.0847 13.3605C10.6367 13.0376 10.0117 13.1391 9.68879 13.5872C9.3659 14.0352 9.46736 14.6602 9.91542 14.9831C10.2438 15.2198 10.6085 15.4051 11.0001 15.5236V22.5809C10.8796 22.4936 10.7686 22.3951 10.6654 22.2921C10.3513 21.9784 10.0195 21.5297 9.64303 21.0205L5.36549 15.2369C5.04832 14.8081 4.77259 14.4354 4.58442 14.1076C4.38383 13.7583 4.23099 13.3754 4.25192 12.9294C4.27382 12.4625 4.49908 12.0655 4.75246 11.7153C5.00308 11.369 5.36244 10.963 5.79237 10.4772L5.81824 10.448C6.19398 10.0234 6.43621 9.61222 6.59128 9.1253C6.65373 8.9292 6.70378 8.71537 6.74152 8.47675C6.78483 8.20293 6.80648 8.06602 6.89064 7.99412C6.9748 7.92222 7.10383 7.92221 7.36189 7.9222L16.6382 7.92188C16.8962 7.92187 17.0252 7.92186 17.1094 7.99375Z',
  d6: 'M12.1874 1.25H11.8125C10.6107 1.24998 9.63495 1.24996 8.87996 1.34771C8.10296 1.44831 7.41218 1.66797 6.90433 2.22841C6.17824 3.02967 6.18996 4.10588 6.31524 4.93672C6.35728 5.21554 6.42404 5.5211 6.49312 5.8041C6.54491 6.01624 6.5708 6.12231 6.65238 6.18636C6.73395 6.25041 6.84546 6.25041 7.06848 6.2504L16.9315 6.25005C17.1545 6.25005 17.266 6.25004 17.3475 6.18599C17.4291 6.12194 17.455 6.01588 17.5068 5.80375C17.5758 5.52089 17.6425 5.21551 17.6846 4.93672C17.8099 4.10588 17.8216 3.02967 17.0955 2.22841C16.5876 1.66797 15.8969 1.44831 15.1199 1.34771C14.3649 1.24996 13.3892 1.24998 12.1874 1.25Z',
  d7: 'M17.2586 8.3045C17.2152 8.03068 17.1936 7.89377 17.1094 7.82188C17.0252 7.74999 16.8962 7.74999 16.6382 7.75L7.36189 7.75033C7.10383 7.75034 6.9748 7.75034 6.89064 7.82224C6.80648 7.89414 6.78483 8.03105 6.74152 8.30487C6.70378 8.5435 6.65373 8.75733 6.59128 8.95343C6.43621 9.44034 6.19398 9.85155 5.81824 10.2761L5.79237 10.3053C5.36244 10.7911 5.00308 11.1971 4.75246 11.5435C4.49908 11.8936 4.27382 12.2906 4.25192 12.7575C4.23099 13.2035 4.38383 13.5864 4.58442 13.9358C4.77259 14.2635 5.04832 14.6363 5.36549 15.0651L9.64303 20.8486C10.0195 21.3578 10.3513 21.8065 10.6654 22.1202C11.0051 22.4595 11.4296 22.7499 12 22.7499C12.5705 22.7499 12.9949 22.4595 13.3346 22.1202C13.6487 21.8065 13.9805 21.3578 14.357 20.8487L18.6345 15.0651C18.9517 14.6363 19.2274 14.2635 19.4156 13.9358C19.6161 13.5865 19.769 13.2036 19.7481 12.7577C19.7262 12.2909 19.501 11.8938 19.2477 11.5436C18.9971 11.1972 18.6378 10.7912 18.2079 10.3053L18.182 10.276C17.8063 9.85139 17.564 9.44006 17.4089 8.95304C17.3464 8.75693 17.2963 8.5431 17.2586 8.3045Z',
  d8: 'M13.0001 22.4091L13.0001 15.3518C13.3916 15.2333 13.7563 15.048 14.0847 14.8114C14.5328 14.4885 14.6343 13.8635 14.3114 13.4154C13.9885 12.9674 13.3635 12.8659 12.9154 13.1888C12.6275 13.3963 12.3167 13.5001 12.0001 13.5001C11.6834 13.5001 11.3726 13.3963 11.0847 13.1888C10.6367 12.8659 10.0117 12.9674 9.68879 13.4154C9.3659 13.8635 9.46736 14.4885 9.91542 14.8114C10.2438 15.048 10.6085 15.2333 11.0001 15.3518L11.0001 22.4091C11.2764 22.6092 11.6028 22.7501 12 22.7501C12.3973 22.7501 12.7237 22.6092 13.0001 22.4091Z',
  d9: 'M16.4213 7.00775L16.998 2H6.99805L7.57842 7.00775',
  d10: 'M16.4237 6.98242H7.58548L4.99609 12.9962L12.0072 21.987C12.0112 21.9921 12.019 21.9921 12.023 21.987L18.9945 13.0154L16.4237 6.98242Z',
  d11: 'M14 12.9971H12M12 12.9971H10M12 12.9971V21.491',
  d12: 'M7 1.24805C6.78603 1.24805 6.58225 1.33944 6.43993 1.49923C6.29762 1.65901 6.23033 1.87198 6.25501 2.08452L6.73833 6.24843L17.2648 6.24811L17.7451 2.08398C17.7696 1.87151 17.7022 1.65869 17.5599 1.49902C17.4176 1.33936 17.2139 1.24805 17 1.24805H7Z',
  d13: 'M16.4355 6.24814L12.0005 6.24827L16.4237 6.24805L16.4355 6.24814Z',
  d14: 'M4 13.1088L6.4419 7.74844L17.5624 7.7481L20 13.1089L12.7539 22.748V13.748H14.0039V12.248H10.0039V13.748H11.2539V22.7522L4 13.1088Z',
};

export const IconPenTool02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-02-stroke-rounded IconPenTool02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconPenTool02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-02-duotone-rounded IconPenTool02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
      />
    </TheIconWrapper>
  );
};

export const IconPenTool02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-02-twotone-rounded IconPenTool02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconPenTool02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-02-solid-rounded IconPenTool02SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPenTool02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-02-bulk-rounded IconPenTool02BulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPenTool02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-02-stroke-sharp IconPenTool02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPenTool02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-02-solid-sharp IconPenTool02SolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPenTool02: TheIconSelfPack = {
  name: 'PenTool02',
  StrokeRounded: IconPenTool02StrokeRounded,
  DuotoneRounded: IconPenTool02DuotoneRounded,
  TwotoneRounded: IconPenTool02TwotoneRounded,
  SolidRounded: IconPenTool02SolidRounded,
  BulkRounded: IconPenTool02BulkRounded,
  StrokeSharp: IconPenTool02StrokeSharp,
  SolidSharp: IconPenTool02SolidSharp,
};