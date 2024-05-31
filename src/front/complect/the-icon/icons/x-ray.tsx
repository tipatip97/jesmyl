import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 5L12 14',
  d2: 'M12 14.3321C11.047 14.3321 10.1425 14.2268 9.329 14.0377C8.45448 13.8345 7.5 14.4753 7.5 15.4049C7.5 15.8904 7.76615 16.3401 8.20673 16.5039C8.53045 16.6243 8.87716 16.7297 9.24287 16.8181C9.83466 16.961 10.3551 17.3472 10.6124 17.9182L10.7188 18.1543C10.9514 18.6703 11.4509 19 12 19C12.5491 19 13.0486 18.6703 13.2812 18.1543L13.3876 17.9182C13.6449 17.3472 14.1653 16.961 14.7571 16.8181C15.1228 16.7297 15.4695 16.6243 15.7933 16.5039C16.2338 16.3401 16.5 15.8904 16.5 15.4049C16.5 14.4753 15.5455 13.8345 14.671 14.0377C13.8575 14.2268 12.953 14.3321 12 14.3321Z',
  d3: 'M15 7C14.6134 7.61859 14.084 8 13.5 8C12.916 8 12.3866 7.61859 12 7C11.6134 7.61859 11.084 8 10.5 8C9.91601 8 9.38657 7.61859 9 7',
  d4: 'M7 10C7.64429 10.6186 8.52668 11 9.5 11C10.4733 11 11.3557 10.6186 12 10C12.6443 10.6186 13.5267 11 14.5 11C15.4733 11 16.3557 10.6186 17 10',
  d5: 'M18.9389 21.0451C17.6246 22 15.7497 22 12 22C8.25027 22 6.3754 22 5.06107 21.0451C4.6366 20.7367 4.26331 20.3634 3.95491 19.9389C3 18.6246 3 16.7497 3 13V11C3 7.25027 3 5.3754 3.95491 4.06107C4.26331 3.6366 4.6366 3.26331 5.06107 2.95491C6.3754 2 8.25027 2 12 2C15.7497 2 17.6246 2 18.9389 2.95491C19.3634 3.26331 19.7367 3.6366 20.0451 4.06107C21 5.3754 21 7.25027 21 11V13C21 16.7497 21 18.6246 20.0451 19.9389C19.7367 20.3634 19.3634 20.7367 18.9389 21.0451ZM9.329 14.0377C10.1425 14.2268 11.047 14.3321 12 14.3321C12.953 14.3321 13.8575 14.2268 14.671 14.0377C15.5455 13.8345 16.5 14.4753 16.5 15.4049C16.5 15.8904 16.2338 16.3401 15.7933 16.5039C15.4695 16.6243 15.1228 16.7297 14.7571 16.8181C14.1653 16.961 13.6449 17.3472 13.3876 17.9182L13.2812 18.1543C13.0486 18.6703 12.5491 19 12 19C11.4509 19 10.9514 18.6703 10.7188 18.1543L10.6124 17.9182C10.3551 17.3472 9.83466 16.961 9.24287 16.8181C8.87716 16.7297 8.53045 16.6243 8.20673 16.5039C7.76615 16.3401 7.5 15.8904 7.5 15.4049C7.5 14.4753 8.45448 13.8345 9.329 14.0377Z',
  d6: 'M21 7L21 17C21 19.7614 18.7614 22 16 22L8 22C5.23858 22 3 19.7614 3 17L3 7C3 4.23858 5.23858 2 8 2L16 2C18.7614 2 21 4.23858 21 7Z',
  d7: 'M12 5V14M15 7C14.6134 7.61859 14.084 8 13.5 8C12.916 8 12.3866 7.61859 12 7C11.6134 7.61859 11.084 8 10.5 8C9.91601 8 9.38657 7.61859 9 7M7 10C7.64429 10.6186 8.52668 11 9.5 11C10.4733 11 11.3557 10.6186 12 10C12.6443 10.6186 13.5267 11 14.5 11C15.4733 11 16.3557 10.6186 17 10M12 14.3321C11.047 14.3321 10.1425 14.2268 9.329 14.0377C8.45448 13.8345 7.5 14.4753 7.5 15.4049C7.5 15.8904 7.76615 16.3401 8.20673 16.5039C8.53045 16.6243 8.87716 16.7297 9.24287 16.8181C9.83466 16.961 10.3551 17.3472 10.6124 17.9182L10.7188 18.1543C10.9514 18.6703 11.4509 19 12 19C12.5491 19 13.0486 18.6703 13.2812 18.1543L13.3876 17.9182C13.6449 17.3472 14.1653 16.961 14.7571 16.8181C15.1228 16.7297 15.4695 16.6243 15.7933 16.5039C16.2338 16.3401 16.5 15.8904 16.5 15.4049C16.5 14.4753 15.5455 13.8345 14.671 14.0377C13.8575 14.2268 12.953 14.3321 12 14.3321Z',
  d8: 'M21.6263 6.53647C21.75 7.67861 21.75 9.11821 21.75 10.9548V13.0452V13.0453C21.75 14.8818 21.75 16.3214 21.6263 17.4635C21.5 18.6291 21.2377 19.5734 20.6518 20.3798C20.2972 20.8679 19.8679 21.2972 19.3798 21.6518C18.5734 22.2377 17.6291 22.5 16.4635 22.6263C15.3214 22.75 13.8818 22.75 12.0453 22.75H12.0452H11.9548C10.1182 22.75 8.67861 22.75 7.53648 22.6263C6.37094 22.5 5.42656 22.2377 4.62024 21.6518C4.13209 21.2972 3.70281 20.8679 3.34815 20.3798C2.76232 19.5734 2.50001 18.6291 2.37373 17.4635C2.24999 16.3214 2.24999 14.8818 2.25 13.0453V13.0453V10.9547V10.9547C2.24999 9.11816 2.24999 7.67859 2.37373 6.53647C2.50001 5.37094 2.76232 4.42656 3.34815 3.62023C3.70281 3.13209 4.13209 2.70281 4.62024 2.34815C5.42656 1.76232 6.37094 1.50001 7.53648 1.37373C8.67859 1.24999 10.1182 1.24999 11.9547 1.25H11.9547H12.0453H12.0453C13.8818 1.24999 15.3214 1.24999 16.4635 1.37373C17.6291 1.50001 18.5734 1.76232 19.3798 2.34815C19.8679 2.70281 20.2972 3.13209 20.6518 3.62024C21.2377 4.42656 21.5 5.37094 21.6263 6.53647ZM12 4.25C12.5523 4.25 13 4.69772 13 5.25V6.93273C13.2207 7.19931 13.409 7.25 13.5 7.25C13.6114 7.25 13.8682 7.17414 14.152 6.72005C14.4447 6.2517 15.0616 6.10929 15.53 6.40197C15.9983 6.69465 16.1407 7.3116 15.848 7.77995C15.3587 8.56305 14.5566 9.25 13.5 9.25C13.3264 9.25 13.1596 9.23145 13 9.19697L13 9.78117C13.4211 10.0758 13.938 10.25 14.5 10.25C15.2077 10.25 15.8439 9.97366 16.3074 9.52866C16.7058 9.14616 17.3388 9.15904 17.7213 9.55742C18.1038 9.95581 18.091 10.5888 17.6926 10.9713C16.8675 11.7635 15.7389 12.25 14.5 12.25C13.9753 12.25 13.4704 12.1628 13 12.002V13.5403C13.5294 13.4955 14.0331 13.416 14.5012 13.3072C15.7722 13.0118 17.25 13.9195 17.25 15.4049C17.25 16.1453 16.8403 16.9148 16.0547 17.2069C15.7012 17.3384 15.3259 17.4522 14.9332 17.5471C14.5379 17.6426 14.222 17.892 14.0713 18.2264L13.9649 18.4624C13.616 19.2367 12.8556 19.75 12 19.75C11.1444 19.75 10.384 19.2367 10.0351 18.4624L9.92867 18.2264C9.77798 17.892 9.46206 17.6426 9.06676 17.5471C8.67411 17.4522 8.29878 17.3384 7.94531 17.2069C7.15974 16.9148 6.75 16.1453 6.75 15.4049C6.75 13.9195 8.22778 13.0118 9.49875 13.3072C9.96693 13.416 10.4706 13.4955 11 13.5403V12.002C10.5296 12.1628 10.0247 12.25 9.5 12.25C8.26107 12.25 7.13251 11.7635 6.30742 10.9713C5.90904 10.5888 5.89616 9.95581 6.27866 9.55742C6.66116 9.15904 7.29419 9.14616 7.69258 9.52866C8.15606 9.97366 8.79229 10.25 9.5 10.25C10.062 10.25 10.5789 10.0758 11 9.78117V9.19697C10.8404 9.23145 10.6736 9.25 10.5 9.25C9.44339 9.25 8.64134 8.56305 8.15197 7.77995C7.85929 7.3116 8.0017 6.69465 8.47005 6.40197C8.9384 6.10929 9.55535 6.2517 9.84803 6.72005C10.1318 7.17414 10.3886 7.25 10.5 7.25C10.591 7.25 10.7793 7.19931 11 6.93273V5.25C11 4.69772 11.4477 4.25 12 4.25Z',
  d9: 'M21.75 10.9548C21.75 9.11821 21.75 7.67861 21.6263 6.53647C21.5 5.37094 21.2377 4.42656 20.6518 3.62024C20.2972 3.13209 19.8679 2.70281 19.3798 2.34815C18.5734 1.76232 17.6291 1.50001 16.4635 1.37373C15.3214 1.24999 13.8818 1.24999 12.0453 1.25L12.0453 1.25L11.9547 1.25L11.9547 1.25C10.1182 1.24999 8.67859 1.24999 7.53648 1.37373C6.37094 1.50001 5.42656 1.76232 4.62024 2.34815C4.13209 2.70281 3.70281 3.13209 3.34815 3.62023C2.76232 4.42656 2.50001 5.37094 2.37373 6.53647C2.24999 7.67859 2.24999 9.11816 2.25 10.9547L2.25 10.9547L2.25 13.0453L2.25 13.0453C2.24999 14.8818 2.24999 16.3214 2.37373 17.4635C2.50001 18.6291 2.76232 19.5734 3.34815 20.3798C3.70281 20.8679 4.13209 21.2972 4.62024 21.6518C5.42656 22.2377 6.37094 22.5 7.53648 22.6263C8.67861 22.75 10.1182 22.75 11.9548 22.75L12.0452 22.75C13.8818 22.75 15.3214 22.75 16.4635 22.6263C17.6291 22.5 18.5734 22.2377 19.3798 21.6518C19.8679 21.2972 20.2972 20.8679 20.6518 20.3798C21.2377 19.5734 21.5 18.6291 21.6263 17.4635C21.75 16.3214 21.75 14.8818 21.75 13.0452L21.75 10.9548Z',
  d10: 'M13 5.25C13 4.69772 12.5523 4.25 12 4.25C11.4477 4.25 11 4.69772 11 5.25V6.93273C10.7793 7.19931 10.591 7.25 10.5 7.25C10.3886 7.25 10.1318 7.17414 9.84803 6.72005C9.55535 6.2517 8.9384 6.10929 8.47005 6.40197C8.0017 6.69465 7.85929 7.3116 8.15197 7.77995C8.64134 8.56305 9.44339 9.25 10.5 9.25C10.6736 9.25 10.8404 9.23145 11 9.19697V9.78117C10.5789 10.0758 10.062 10.25 9.5 10.25C8.79229 10.25 8.15606 9.97366 7.69258 9.52866C7.29419 9.14616 6.66116 9.15904 6.27866 9.55742C5.89616 9.95581 5.90904 10.5888 6.30742 10.9713C7.13251 11.7635 8.26107 12.25 9.5 12.25C10.0247 12.25 10.5296 12.1628 11 12.002V13.5403C10.4706 13.4955 9.96693 13.416 9.49875 13.3072C8.22778 13.0118 6.75 13.9195 6.75 15.4049C6.75 16.1453 7.15974 16.9148 7.94531 17.2069C8.29878 17.3384 8.67411 17.4522 9.06676 17.5471C9.46206 17.6426 9.77798 17.892 9.92867 18.2264L10.0351 18.4624C10.384 19.2367 11.1444 19.75 12 19.75C12.8556 19.75 13.616 19.2367 13.9649 18.4624L14.0713 18.2264C14.222 17.892 14.5379 17.6426 14.9332 17.5471C15.3259 17.4522 15.7012 17.3384 16.0547 17.2069C16.8403 16.9148 17.25 16.1453 17.25 15.4049C17.25 13.9195 15.7722 13.0118 14.5012 13.3072C14.0331 13.416 13.5294 13.4955 13 13.5403V12.002C13.4704 12.1628 13.9753 12.25 14.5 12.25C15.7389 12.25 16.8675 11.7635 17.6926 10.9713C18.091 10.5888 18.1038 9.95581 17.7213 9.55742C17.3388 9.15904 16.7058 9.14616 16.3074 9.52866C15.8439 9.97366 15.2077 10.25 14.5 10.25C13.938 10.25 13.4211 10.0758 13 9.78117L13 9.19697C13.1596 9.23145 13.3264 9.25 13.5 9.25C14.5566 9.25 15.3587 8.56305 15.848 7.77995C16.1407 7.3116 15.9983 6.69465 15.53 6.40197C15.0616 6.10929 14.4447 6.2517 14.152 6.72005C13.8682 7.17414 13.6114 7.25 13.5 7.25C13.409 7.25 13.2207 7.19931 13 6.93273V5.25Z',
  d11: 'M3 22H21V2.00052L3 2V22Z',
  d12: 'M3.00002 1.25C2.80111 1.24999 2.61033 1.32901 2.46968 1.46966C2.32902 1.61032 2.25 1.80108 2.25 2V22C2.25 22.4142 2.58579 22.75 3 22.75H21C21.4142 22.75 21.75 22.4142 21.75 22V2.00052C21.75 1.58631 21.4142 1.25053 21 1.25052L3.00002 1.25ZM11.25 9.65753V8.61243C11.0174 8.70045 10.7666 8.75 10.4993 8.75C9.56085 8.75 8.82695 8.13943 8.36328 7.39746L9.63532 6.60254C9.9448 7.09775 10.2698 7.25 10.4993 7.25C10.7009 7.25 10.9763 7.1325 11.25 6.76819V5H12.75V6.77004C13.0233 7.1329 13.298 7.25 13.4993 7.25C13.7288 7.25 14.0538 7.09775 14.3633 6.60254L15.6353 7.39746C15.1717 8.13943 14.4378 8.75 13.4993 8.75C13.2325 8.75 12.9822 8.70065 12.75 8.61296V9.65768C13.2301 10.0281 13.837 10.25 14.4999 10.25C15.274 10.25 15.9718 9.94739 16.4805 9.45899L17.5193 10.541C16.7395 11.2898 15.6724 11.75 14.4999 11.75C13.8779 11.75 13.2855 11.6205 12.75 11.3871V13.5591C13.3711 13.5201 13.9599 13.4333 14.5012 13.3075C15.7722 13.0122 17.25 13.9199 17.25 15.4053C17.25 16.1457 16.8403 16.9151 16.0547 17.2073C15.7012 17.3387 15.3259 17.4526 14.9332 17.5474C14.5379 17.6429 14.222 17.8924 14.0713 18.2267L13.9649 18.4628C13.616 19.237 12.8556 19.7504 12 19.7504C11.1444 19.7504 10.384 19.237 10.0351 18.4628L9.92867 18.2267C9.77798 17.8924 9.46206 17.6429 9.06676 17.5474C8.67411 17.4526 8.29878 17.3387 7.94531 17.2073C7.15974 16.9151 6.75 16.1457 6.75 15.4053C6.75 13.9199 8.22778 13.0122 9.49875 13.3075C10.0401 13.4333 10.6289 13.5201 11.25 13.5591V11.387C10.7144 11.6204 10.122 11.75 9.4999 11.75C8.32738 11.75 7.26035 11.2898 6.48047 10.541L7.51934 9.45899C8.02802 9.94739 8.72579 10.25 9.4999 10.25C10.1629 10.25 10.7698 10.0281 11.25 9.65753Z',
} as const;

export const IconXRayStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="x-ray-stroke-rounded IconXRayStrokeRounded"
    >
      <rect 
        width="20" 
        height="18" 
        rx="5" 
        transform="matrix(4.37114e08 1 1 4.37114e08 21 22)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
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

export const IconXRayDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="x-ray-duotone-rounded IconXRayDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <rect 
        width="20" 
        height="18" 
        rx="5" 
        transform="matrix(4.37114e08 1 1 4.37114e08 21 22)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
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

export const IconXRayTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="x-ray-twotone-rounded IconXRayTwotoneRounded"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconXRaySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="x-ray-solid-rounded IconXRaySolidRounded"
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

export const IconXRayBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="x-ray-bulk-rounded IconXRayBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconXRayStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="x-ray-stroke-sharp IconXRayStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconXRaySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="x-ray-solid-sharp IconXRaySolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfXRay: TheIconSelfPack = {
  name: 'XRay',
  StrokeRounded: IconXRayStrokeRounded,
  DuotoneRounded: IconXRayDuotoneRounded,
  TwotoneRounded: IconXRayTwotoneRounded,
  SolidRounded: IconXRaySolidRounded,
  BulkRounded: IconXRayBulkRounded,
  StrokeSharp: IconXRayStrokeSharp,
  SolidSharp: IconXRaySolidSharp,
};