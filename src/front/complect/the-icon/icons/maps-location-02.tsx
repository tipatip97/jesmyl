import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 10.5V9.71749C22 7.77787 22 6.80807 21.4142 6.2055C20.8284 5.60294 19.8856 5.60294 18 5.60294H15.9214C15.004 5.60294 14.9964 5.60116 14.1715 5.18834L10.8399 3.52114C9.44884 2.82504 8.75332 2.47699 8.01238 2.50118C7.27143 2.52537 6.59877 2.91808 5.25345 3.70351L4.02558 4.42037C3.03739 4.99729 2.54329 5.28576 2.27164 5.76564C2 6.24553 2 6.82993 2 7.99873V16.2157C2 17.7514 2 18.5193 2.34226 18.9467C2.57001 19.231 2.88916 19.4222 3.242 19.4856C3.77226 19.5808 4.42148 19.2018 5.71987 18.4437C6.60156 17.929 7.45011 17.3944 8.50487 17.5394C9.38869 17.6608 10.21 18.2185 11 18.6138',
  d2: 'M8 2.5L8 17.5',
  d3: 'M15 5.5V9.5',
  d4: 'M17.5 12C19.9353 12 22 14.0165 22 16.4629C22 18.9482 19.9017 20.6924 17.9635 21.8783C17.8223 21.9581 17.6625 22 17.5 22C17.3375 22 17.1777 21.9581 17.0365 21.8783C15.1019 20.6808 13 18.9568 13 16.4629C13 14.0165 15.0647 12 17.5 12Z',
  d5: 'M17.5 16.5H17.509',
  d6: 'M4.02558 4.42037L5.25345 3.70351C6.59128 2.92246 7.26392 2.52976 8 2.50162L8.01238 2.50118C8.75332 2.47699 9.44884 2.82504 10.8399 3.52114L14.1715 5.18834C14.9964 5.60116 15.004 5.60294 15.9214 5.60294H18C19.8856 5.60294 20.8284 5.60294 21.4142 6.2055C22 6.80807 22 7.77787 22 9.71749V15.9853L21.9761 16.0081C21.7396 13.7715 19.7825 12 17.5 12C15.0647 12 13 14.0165 13 16.4629C13 17.2874 13.2297 18.0277 13.6072 18.6927L11 18.6138C10.8135 18.5205 10.6253 18.4181 10.4349 18.3146C9.81874 17.9795 9.18005 17.6322 8.50487 17.5394C7.49945 17.4012 6.68141 17.8805 5.84342 18.3714C5.8023 18.3955 5.76112 18.4197 5.71987 18.4437C4.42151 19.2018 3.77226 19.5808 3.242 19.4856C2.88916 19.4222 2.57001 19.231 2.34226 18.9467C2 18.5193 2 17.7514 2 16.2157V7.99873C2 6.82993 2 6.24553 2.27164 5.76564C2.54329 5.28576 3.03739 4.99729 4.02558 4.42037Z',
  d7: 'M8.75 17.1838C8.75 17.3864 8.75 17.4877 8.7977 17.5618C8.84539 17.636 8.94451 17.6811 9.14275 17.7714C9.36402 17.8723 9.6448 18.0102 10.0237 18.1986L10.2595 18.3159C10.6338 18.502 10.821 18.5951 10.9201 18.5187C11.0192 18.4423 10.9746 18.2266 10.8854 17.7952C10.7982 17.3731 10.75 16.929 10.75 16.4629C10.75 14.0186 12.0905 11.8866 14.0459 10.7128C14.1474 10.6519 14.1981 10.6215 14.2241 10.5756C14.25 10.5298 14.25 10.473 14.25 10.3594V4.07979C14.25 3.89894 14.25 3.80852 14.205 3.73592C14.16 3.66332 14.0791 3.62306 13.9171 3.54254L11.1426 2.16295C10.4736 1.8303 9.92553 1.55778 9.45232 1.3752C9.16028 1.26252 9.01425 1.20618 8.88544 1.29069L8.87522 1.2977C8.75 1.38746 8.75 1.55645 8.75 1.89444L8.75 17.1838Z',
  d8: 'M22.75 11.144C22.75 11.6029 22.75 11.8323 22.6322 11.8854C22.5143 11.9385 22.3334 11.7785 21.9714 11.4584C20.7692 10.3952 19.1937 9.75 17.5 9.75C17.078 9.75 16.6634 9.79005 16.2601 9.86663C16.0166 9.91285 15.8949 9.93596 15.8225 9.87598C15.75 9.81599 15.75 9.69758 15.75 9.46076L15.75 4.33964C15.75 4.24511 15.8268 4.16857 15.9214 4.16857L18.0529 4.16857C18.9506 4.16854 19.7008 4.16851 20.2966 4.25039C20.9275 4.33708 21.4955 4.52797 21.9503 4.99278C22.4028 5.45531 22.5866 6.0292 22.6704 6.66607C22.7501 7.27181 22.75 8.03568 22.75 8.95563V11.144Z',
  d9: 'M7.25 1.95737C7.25 1.62984 7.25 1.46607 7.13415 1.37599C7.1208 1.36561 7.10282 1.3541 7.08779 1.34634C6.95744 1.27893 6.81999 1.34242 6.54509 1.46938C6.08426 1.68221 5.55431 1.98964 4.90724 2.36503L3.6187 3.11251C3.15062 3.38402 2.75247 3.61497 2.44084 3.84C2.10848 4.07999 1.82705 4.3455 1.61998 4.70898C1.4134 5.07159 1.32728 5.45023 1.28746 5.86053C1.24997 6.2469 1.24999 6.71323 1.25 7.26437V15.5035C1.24999 16.2326 1.24998 16.8354 1.29639 17.3069C1.34327 17.783 1.44676 18.2613 1.75833 18.6479C2.09802 19.0693 2.57688 19.3558 3.11024 19.451C3.60335 19.539 4.0707 19.3911 4.5015 19.1966C4.92742 19.0043 5.49919 18.6726 6.11822 18.3135C6.40134 18.1492 6.6546 18.0023 6.89091 17.8802C7.07195 17.7867 7.16247 17.7399 7.20624 17.668C7.25 17.5962 7.25 17.5016 7.25 17.3124L7.25 1.95737Z',
  d10: 'M17.5 11.25C14.6598 11.25 12.25 13.5931 12.25 16.4629C12.25 17.9384 12.8764 19.1598 13.7241 20.1457C14.5649 21.1236 15.6491 21.9016 16.6417 22.516L16.6546 22.524L16.6678 22.5315C16.9218 22.6748 17.2086 22.75 17.5 22.75C17.7914 22.75 18.0782 22.6748 18.3322 22.5315L18.3437 22.525L18.355 22.5181C19.3529 21.9074 20.4376 21.1268 21.2781 20.1459C22.1249 19.1576 22.75 17.9337 22.75 16.4629C22.75 13.5931 20.3402 11.25 17.5 11.25ZM17.4911 14.25C16.3914 14.25 15.5 15.1454 15.5 16.25C15.5 17.3546 16.3914 18.25 17.4911 18.25H17.5089C18.6086 18.25 19.5 17.3546 19.5 16.25C19.5 15.1454 18.6086 14.25 17.5089 14.25H17.4911Z',
  d11: 'M22 9.9998V5H15L8.01175 2.00098L2 5.08297V19L8.01175 17L12 18.712',
  d12: 'M8 2L8 17',
  d13: 'M15 5V10',
  d14: 'M18 12C15.7909 12 14 13.8089 14 16.0404C14 17.3163 14.5 18.3084 15.5 19.1945C16.2049 19.8192 17.4873 21.159 18 22C18.5386 21.1757 19.7951 19.8192 20.5 19.1945C21.5 18.3084 22 17.3163 22 16.0404C22 13.8089 20.2091 12 18 12Z',
  d15: 'M17.999 16H18.008',
  d16: 'M18 11.25C15.3696 11.25 13.25 13.4018 13.25 16.0404C13.25 17.5592 13.8644 18.7473 15.0026 19.7559C15.6888 20.364 16.9052 21.6451 17.3596 22.3904C17.4936 22.6102 17.7309 22.7459 17.9882 22.7499C18.2456 22.7539 18.487 22.6257 18.6278 22.4103C19.1188 21.659 20.3246 20.3521 20.9974 19.7559C22.1356 18.7473 22.75 17.5592 22.75 16.0404C22.75 13.4018 20.6304 11.25 18 11.25ZM17.9911 14C16.8914 14 16 14.8954 16 16C16 17.1046 16.8914 18 17.9911 18H18.0089C19.1086 18 20 17.1046 20 16C20 14.8954 19.1086 14 18.0089 14H17.9911Z',
  d17: 'M13.1902 20.0393L8.75 18.1333L8.75 1.25L14.25 3.61034V11.007C12.7283 12.1583 11.75 13.9912 11.75 16.0404C11.75 17.6218 12.2748 18.9387 13.1902 20.0393Z',
  d18: 'M22.75 11.9523V4.74835C22.75 4.33413 22.4142 3.99835 22 3.99835H15.75V10.1691C16.4469 9.89859 17.2052 9.75 18 9.75C19.909 9.75 21.6073 10.6072 22.75 11.9523Z',
  d19: 'M1.65785 4.16391L7.25 1.29703L7.25 18.044L2.23675 19.7118C2.00807 19.7879 1.75676 19.7495 1.56129 19.6085C1.36582 19.4675 1.25 19.2412 1.25 19.0002V4.83131C1.25 4.54995 1.40747 4.29226 1.65785 4.16391Z',
} as const;

export const IconMapsLocation02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-location-02-stroke-rounded IconMapsLocation02StrokeRounded"
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

export const IconMapsLocation02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-location-02-duotone-rounded IconMapsLocation02DuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMapsLocation02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-location-02-twotone-rounded IconMapsLocation02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMapsLocation02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-location-02-solid-rounded IconMapsLocation02SolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconMapsLocation02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-location-02-bulk-rounded IconMapsLocation02BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMapsLocation02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-location-02-stroke-sharp IconMapsLocation02StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
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
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMapsLocation02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-location-02-solid-sharp IconMapsLocation02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMapsLocation02: TheIconSelfPack = {
  name: 'MapsLocation02',
  StrokeRounded: IconMapsLocation02StrokeRounded,
  DuotoneRounded: IconMapsLocation02DuotoneRounded,
  TwotoneRounded: IconMapsLocation02TwotoneRounded,
  SolidRounded: IconMapsLocation02SolidRounded,
  BulkRounded: IconMapsLocation02BulkRounded,
  StrokeSharp: IconMapsLocation02StrokeSharp,
  SolidSharp: IconMapsLocation02SolidSharp,
};