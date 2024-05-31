import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10Z',
  d2: 'M18.2454 15C19.3433 13.6304 20 11.8919 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 11.8919 4.65672 13.6304 5.75463 15',
  d3: 'M3 18.5C3 17.0955 3 16.3933 3.30335 15.8889C3.43468 15.6705 3.60343 15.483 3.79997 15.3371C4.25398 15 4.88598 15 6.15 15H17.85C19.114 15 19.746 15 20.2 15.3371C20.3966 15.483 20.5653 15.6705 20.6966 15.8889C21 16.3933 21 17.0955 21 18.5C21 19.9045 21 20.6067 20.6966 21.1111C20.5653 21.3295 20.3966 21.517 20.2 21.6629C19.746 22 19.114 22 17.85 22H6.15C4.88598 22 4.25398 22 3.79997 21.6629C3.60343 21.517 3.43468 21.3295 3.30335 21.1111C3 20.6067 3 19.9045 3 18.5Z',
  d4: 'M11 18H13',
  d5: 'M15.8904 6.61055L17.9018 4.59912',
  d6: 'M15.8906 6.61104L17.9021 4.59961',
  d7: 'M18.2454 15C19.3433 13.6304 20 11.8919 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 11.8919 4.65672 13.6304 5.75463 15M17.9018 4.59915L15.8904 6.61058',
  d8: 'M17.8911 14.25H17.891H17.891H6.10901H6.10898H6.10894C5.51196 14.25 5.00213 14.25 4.587 14.2969C4.1454 14.3468 3.72729 14.4569 3.3529 14.7349C3.07445 14.9416 2.84034 15.2035 2.66062 15.5023C2.42562 15.8931 2.33365 16.3232 2.29104 16.7885C2.24998 17.2371 2.24999 17.7925 2.25 18.4648V18.4649V18.4649V18.5351V18.5351V18.5352C2.24999 19.2075 2.24998 19.7629 2.29104 20.2115C2.33365 20.6768 2.42562 21.1069 2.66062 21.4977C2.84034 21.7965 3.07445 22.0584 3.3529 22.2651C3.72729 22.5431 4.1454 22.6532 4.587 22.7031C5.00213 22.75 5.51196 22.75 6.10896 22.75H6.10902H17.891H17.891C18.488 22.75 18.9979 22.75 19.413 22.7031C19.8546 22.6532 20.2727 22.5431 20.6471 22.2651C20.9255 22.0584 21.1597 21.7965 21.3394 21.4977C21.5744 21.1069 21.6664 20.6768 21.709 20.2115C21.75 19.7629 21.75 19.2075 21.75 18.5351V18.4649C21.75 17.7925 21.75 17.2371 21.709 16.7885C21.6664 16.3232 21.5744 15.8931 21.3394 15.5023C21.1597 15.2035 20.9255 14.9416 20.6471 14.7349C20.2727 14.4569 19.8546 14.3468 19.413 14.2969C18.9979 14.25 18.488 14.25 17.8911 14.25ZM11 17.5C10.4477 17.5 10 17.9477 10 18.5C10 19.0523 10.4477 19.5 11 19.5H13C13.5523 19.5 14 19.0523 14 18.5C14 17.9477 13.5523 17.5 13 17.5H11Z',
  d9: 'M3.25 9.94998C3.25 5.14511 7.16751 1.25 12 1.25C14.554 1.25 16.8524 2.33796 18.452 4.07318C18.4543 4.07569 18.4567 4.0782 18.459 4.08073C19.8819 5.62795 20.75 7.68817 20.75 9.94998C20.75 12.0065 20.0312 13.8987 18.8305 15.3879C18.4946 15.8045 17.8827 15.8715 17.4638 15.5375C17.0448 15.2036 16.9775 14.5952 17.3133 14.1787C18.2474 13.0201 18.8056 11.5511 18.8056 9.94998C18.8056 8.55466 18.3808 7.25798 17.6528 6.1808L16.4698 7.35708C16.0901 7.73459 15.4745 7.73459 15.0949 7.35708C14.7152 6.97958 14.7152 6.36752 15.0949 5.99001L16.3479 4.74412C15.1688 3.76946 13.6532 3.18333 12 3.18333C8.2414 3.18333 5.19444 6.21286 5.19444 9.94998C5.19444 11.5511 5.75255 13.0201 6.68669 14.1787C7.02253 14.5952 6.95516 15.2036 6.53621 15.5375C6.11726 15.8715 5.50538 15.8045 5.16954 15.3879C3.96884 13.8987 3.25 12.0065 3.25 9.94998Z',
  d10: 'M17.891 14.25C18.488 14.25 18.9979 14.25 19.413 14.2969C19.8546 14.3468 20.2727 14.4569 20.6471 14.7349C20.9255 14.9416 21.1597 15.2035 21.3394 15.5023C21.5744 15.8931 21.6664 16.3232 21.709 16.7885C21.75 17.2371 21.75 17.7925 21.75 18.4649V18.5351C21.75 19.2075 21.75 19.7629 21.709 20.2115C21.6664 20.6768 21.5744 21.1069 21.3394 21.4977C21.1597 21.7965 20.9255 22.0584 20.6471 22.2651C20.2727 22.5431 19.8546 22.6532 19.413 22.7031C18.9979 22.75 18.488 22.75 17.891 22.75H17.891H6.10902H6.10896C5.51196 22.75 5.00213 22.75 4.587 22.7031C4.1454 22.6532 3.72729 22.5431 3.3529 22.2651C3.07445 22.0584 2.84034 21.7965 2.66062 21.4977C2.42562 21.1069 2.33365 20.6768 2.29104 20.2115C2.24998 19.7629 2.24999 19.2075 2.25 18.5351V18.5351V18.4649V18.4649C2.24999 17.7925 2.24998 17.2371 2.29104 16.7885C2.33365 16.3232 2.42562 15.8931 2.66062 15.5023C2.84034 15.2035 3.07445 14.9416 3.3529 14.7349C3.72729 14.4569 4.1454 14.3468 4.587 14.2969C5.00214 14.25 5.51198 14.25 6.10898 14.25H6.10901H17.891H17.891Z',
  d11: 'M10 18.5C10 17.9477 10.4477 17.5 11 17.5H13C13.5523 17.5 14 17.9477 14 18.5C14 19.0523 13.5523 19.5 13 19.5H11C10.4477 19.5 10 19.0523 10 18.5Z',
  d12: 'M12 1.25C7.16751 1.25 3.25 5.14511 3.25 9.94998C3.25 11.5409 3.68023 13.0336 4.43095 14.3174C4.48261 14.3096 4.53464 14.3028 4.587 14.2969C5.00213 14.25 5.51195 14.25 6.10893 14.25H6.73907C6.72285 14.2257 6.7054 14.2019 6.68669 14.1787C5.75255 13.0201 5.19444 11.5511 5.19444 9.94998C5.19444 6.21286 8.2414 3.18333 12 3.18333C13.6532 3.18333 15.1688 3.76946 16.3479 4.74412L15.0949 5.99001C14.7152 6.36752 14.7152 6.97958 15.0949 7.35708C15.4745 7.73459 16.0901 7.73459 16.4698 7.35708L17.6528 6.1808C18.3808 7.25798 18.8056 8.55466 18.8056 9.94998C18.8056 11.5511 18.2474 13.0201 17.3133 14.1787C17.2946 14.2019 17.2771 14.2257 17.2609 14.25H17.891C18.488 14.25 18.9979 14.25 19.413 14.2969C19.4654 14.3028 19.5174 14.3096 19.5691 14.3174C20.3198 13.0336 20.75 11.5409 20.75 9.94998C20.75 7.68817 19.8819 5.62795 18.459 4.08073L18.452 4.07318C16.8524 2.33796 14.554 1.25 12 1.25Z',
  d13: 'M21 15H3V22H21V15Z',
  d14: 'M10 18H14',
  d15: 'M18.2454 15C19.3433 13.6304 20 11.8919 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 11.8919 4.65672 13.6304 5.75463 15M17.5 4.5L15.5 6.5',
  d16: 'M3.25 10C3.25 5.16751 7.16751 1.25 12 1.25C16.8325 1.25 20.75 5.16751 20.75 10C20.75 12.0683 20.0312 13.9714 18.8305 15.4692L17.3133 14.253C18.2474 13.0877 18.8056 11.6104 18.8056 10C18.8056 8.47134 18.3016 7.0604 17.4507 5.92428L16.0902 7.28469L14.7153 5.90976L16.0757 4.54935C14.9396 3.69845 13.5287 3.19444 12 3.19444C8.2414 3.19444 5.19444 6.24139 5.19444 10C5.19444 11.6104 5.75255 13.0877 6.68669 14.253L5.16954 15.4692C3.96884 13.9714 3.25 12.0683 3.25 10Z',
  d17: 'M10 10.0005C10 11.1051 10.8954 12.0005 12 12.0005C13.1046 12.0005 14 11.1051 14 10.0005C14 8.89592 13.1046 8.00049 12 8.00049C10.8954 8.00049 10 8.89592 10 10.0005Z',
  d18: 'M3 14.2495C2.58579 14.2495 2.25 14.5853 2.25 14.9995V21.9995C2.25 22.4137 2.58579 22.7495 3 22.7495H21C21.4142 22.7495 21.75 22.4137 21.75 21.9995V14.9995C21.75 14.5853 21.4142 14.2495 21 14.2495H3ZM10 19.4995H14V17.4995H10V19.4995Z',
} as const;

export const IconSoftwareStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="software-stroke-rounded IconSoftwareStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSoftwareDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="software-duotone-rounded IconSoftwareDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconSoftwareTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="software-twotone-rounded IconSoftwareTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSoftwareSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="software-solid-rounded IconSoftwareSolidRounded"
    >
      <path 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconSoftwareBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="software-bulk-rounded IconSoftwareBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconSoftwareStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="software-stroke-sharp IconSoftwareStrokeSharp"
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
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSoftwareSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="software-solid-sharp IconSoftwareSolidSharp"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSoftware: TheIconSelfPack = {
  name: 'Software',
  StrokeRounded: IconSoftwareStrokeRounded,
  DuotoneRounded: IconSoftwareDuotoneRounded,
  TwotoneRounded: IconSoftwareTwotoneRounded,
  SolidRounded: IconSoftwareSolidRounded,
  BulkRounded: IconSoftwareBulkRounded,
  StrokeSharp: IconSoftwareStrokeSharp,
  SolidSharp: IconSoftwareSolidSharp,
};