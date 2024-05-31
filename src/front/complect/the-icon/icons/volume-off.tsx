import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 22L2 2',
  d2: 'M17 10C17.6296 10.7667 18 11.7054 18 12.7195C18 13.1635 17.929 13.593 17.7963 14',
  d3: 'M20 8C21.2508 9.22951 22 10.7952 22 12.5C22 13.9164 21.4829 15.2367 20.5906 16.348',
  d4: 'M14 14C14 17.1452 14 19.5313 13.074 19.9227C12.1481 20.3141 11.0583 19.2021 8.8787 16.9781C7.7499 15.8264 7.106 15.5713 5.5 15.5713C4.3879 15.5713 3.02749 15.7187 2.33706 14.6643C2 14.1496 2 13.4331 2 12C2 10.5669 2 9.85038 2.33706 9.33566C3.02749 8.28131 4.3879 8.42869 5.5 8.42869C6.60725 8.42869 7.3569 8.43869 7.96 7.96M14 9.5C14 6.3548 14.026 4.46866 13.1 4.0773C12.3292 3.75147 11.5323 4.46765 10 6',
  d5: 'M5.50603 8.42924C6.58804 8.42924 7.23308 8.3133 7.88421 7.88477L14 14.0006V14.8141C14 17.9593 14 19.5319 13.0747 19.9233C12.1494 20.3146 11.0604 19.2026 8.88232 16.9787C7.75439 15.827 7.11085 15.5719 5.50604 15.5719C4.10257 15.5719 3.40084 15.5719 2.89675 15.2279C1.85035 14.514 2.00852 13.1186 2.00852 12.0006C2.00852 10.8826 1.85035 9.48711 2.89675 8.77317C3.40084 8.42924 4.10257 8.42924 5.50603 8.42924Z',
  d6: 'M14 13.9975C14 17.1427 14 19.5288 13.074 19.9202C12.1481 20.3116 11.0583 19.1996 8.8787 16.9756C7.7499 15.8239 7.106 15.5688 5.5 15.5688C4.3879 15.5688 3.02749 15.7162 2.33706 14.6618C2 14.1471 2 13.4306 2 11.9975C2 10.5644 2 9.8479 2.33706 9.33318C3.02749 8.27883 4.3879 8.42621 5.5 8.42621C6.60725 8.42621 7.3569 8.43621 7.96 7.95752',
  d7: 'M14 9.49951C14 6.35431 14.026 4.46817 13.1 4.07681C12.3292 3.75098 11.5323 4.46716 10 5.99951',
  d8: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d9: 'M10.9916 3.9756C11.6784 3.44801 12.4957 3.01957 13.367 3.38808C14.2302 3.75318 14.5076 4.63267 14.6274 5.49785C14.7502 6.38459 14.7502 7.60557 14.7502 9.12365V9.76734C14.7502 10.3838 14.7502 10.6921 14.565 10.7688C14.3798 10.8455 14.1618 10.6275 13.7259 10.1916L9.60567 6.07138C9.4057 5.87142 9.30572 5.77143 9.30618 5.64652C9.30664 5.5216 9.40654 5.42317 9.60634 5.22631C10.1262 4.71414 10.59 4.28407 10.9916 3.9756Z',
  d10: 'M14.7502 14.8794C14.7502 16.3975 14.7502 17.6185 14.6274 18.5052C14.5076 19.3704 14.2302 20.2499 13.367 20.615C12.4957 20.9835 11.6784 20.5551 10.9916 20.0275C10.2892 19.488 9.39657 18.5765 8.34663 17.5044C7.80717 16.9535 7.44921 16.6873 7.08663 16.5374C6.72221 16.3868 6.27914 16.3229 5.50619 16.3229C4.83768 16.3229 4.23963 16.3229 3.78679 16.2758C3.31184 16.2265 2.87088 16.1191 2.47421 15.8485C1.7184 15.3328 1.42917 14.5777 1.31957 13.8838C1.23785 13.3663 1.24723 12.7981 1.25479 12.3405V11.6626C1.24723 11.205 1.23785 10.6368 1.31957 10.1193C1.42917 9.42536 1.7184 8.67029 2.47421 8.15462C2.87088 7.88398 3.31184 7.77657 3.78679 7.72723C4.23963 7.68019 4.83768 7.68021 5.50619 7.68023C6.27914 7.68023 6.72221 7.61628 7.08663 7.46563L7.08667 7.46562C7.15391 7.43782 7.18754 7.42392 7.20716 7.41876C7.30665 7.39262 7.38317 7.40787 7.46504 7.47015C7.48118 7.48243 7.50056 7.50181 7.53931 7.54055L14.6596 14.6609L14.6648 14.6661C14.7187 14.7212 14.7492 14.795 14.7501 14.8721L14.7502 14.8794Z',
  d11: 'M19.2869 7.29899C19.674 6.90513 20.3072 6.89969 20.701 7.28685C22.1127 8.67445 23 10.4871 23 12.5C23 13.8929 22.5738 15.1964 21.8385 16.3278C21.5376 16.7909 20.9182 16.9223 20.4551 16.6214C19.992 16.3204 19.8606 15.701 20.1615 15.238C20.7044 14.4027 21 13.4737 21 12.5C21 11.1032 20.389 9.78458 19.299 8.71315C18.9052 8.32599 18.8997 7.69285 19.2869 7.29899ZM16.3654 9.22717C16.7922 8.87668 17.4224 8.93856 17.7729 9.36538C18.5358 10.2945 19 11.4536 19 12.7195C19 12.7455 18.9998 12.7716 18.9994 12.7976C18.9911 13.3498 18.5366 13.7907 17.9844 13.7823C17.4322 13.7739 16.9913 13.3195 16.9997 12.7673C16.9999 12.7514 17 12.7354 17 12.7195C17 11.9573 16.7233 11.2388 16.2272 10.6346C15.8767 10.2078 15.9386 9.57766 16.3654 9.22717Z',
  d12: 'M10.9923 3.9756C11.6792 3.44801 12.4965 3.01957 13.3677 3.38808C14.2309 3.75318 14.5083 4.63267 14.6281 5.49785C14.7509 6.38459 14.7509 7.60557 14.7509 9.12365V9.76734C14.7509 10.3838 14.7509 10.6921 14.5657 10.7688C14.3805 10.8455 14.1625 10.6275 13.7266 10.1916L9.6064 6.07138C9.40643 5.87142 9.30645 5.77143 9.30691 5.64652C9.30738 5.5216 9.40728 5.42317 9.60708 5.22631C10.1269 4.71414 10.5907 4.28407 10.9923 3.9756Z',
  d13: 'M14.7502 14.8783C14.7502 16.3964 14.7502 17.6174 14.6274 18.5041C14.5076 19.3693 14.2302 20.2488 13.367 20.6139C12.4957 20.9824 11.6784 20.554 10.9916 20.0264C10.2892 19.4869 9.39657 18.5754 8.34663 17.5033C7.80717 16.9525 7.44921 16.6863 7.08663 16.5364C6.72221 16.3857 6.27914 16.3218 5.50619 16.3218C4.83768 16.3218 4.23963 16.3218 3.78679 16.2748C3.31184 16.2254 2.87088 16.118 2.47421 15.8474C1.7184 15.3317 1.42917 14.5766 1.31957 13.8827C1.23785 13.3652 1.24723 12.797 1.25479 12.3394V11.6615C1.24723 11.2039 1.23785 10.6357 1.31957 10.1182C1.42917 9.42428 1.7184 8.6692 2.47421 8.15353C2.87088 7.88289 3.31184 7.77548 3.78679 7.72614C4.23963 7.67911 4.83768 7.67912 5.50619 7.67914C6.27914 7.67914 6.72221 7.6152 7.08663 7.46455L7.08664 7.46454C7.1539 7.43673 7.18754 7.42283 7.20716 7.41767C7.30665 7.39153 7.38317 7.40678 7.46504 7.46906C7.48118 7.48135 7.50056 7.50072 7.53931 7.53947L14.6596 14.6598L14.6648 14.665C14.7187 14.7201 14.7492 14.7939 14.7501 14.871L14.7502 14.8783Z',
  d14: 'M9.85076 6.66781L14.0003 4V10.8173M7.91458 7.91262L7.00098 8.5H2.00098V15.5H7.00098L14.0003 20V13.9983',
  d15: 'M21.3348 22.75L1.24902 2.66421L2.66324 1.25L22.749 21.3358L21.3348 22.75Z',
  d16: 'M14.7454 3.99951C14.7454 3.72515 14.5956 3.47269 14.3548 3.34122C14.1139 3.20975 13.8206 3.22027 13.5898 3.36865L9.51903 5.98583L14.7454 11.2122V3.99951Z',
  d17: 'M6.7758 7.74951H1.99609C1.58188 7.74951 1.24609 8.0853 1.24609 8.49951V15.4995C1.24609 15.9137 1.58188 16.2495 1.99609 16.2495H6.7758L13.5898 20.6304C13.8206 20.7788 14.1139 20.7893 14.3548 20.6578C14.5956 20.5263 14.7454 20.2739 14.7454 19.9995V14.7477L7.36705 7.36938L6.7758 7.74951Z',
  d18: 'M20.7454 11.9995C20.7454 10.3785 20.1062 8.87447 19.0078 7.6748L20.4829 6.32422C21.8861 7.8568 22.7454 9.83197 22.7454 11.9995C22.7454 13.988 22.0222 15.8146 20.8193 17.2861L19.396 15.8628C20.2553 14.7486 20.7454 13.4189 20.7454 11.9995Z',
  d19: 'M16.7442 11.9997C16.7442 11.0848 16.4432 10.2537 15.9492 9.60624L17.5393 8.39307C18.2961 9.38499 18.7442 10.6414 18.7442 11.9997C18.7442 12.938 18.5303 13.8278 18.1485 14.6153L16.6018 13.0686C16.6943 12.7307 16.7442 12.3721 16.7442 11.9997Z',
} as const;

export const IconVolumeOffStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-off-stroke-rounded IconVolumeOffStrokeRounded"
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

export const IconVolumeOffDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-off-duotone-rounded IconVolumeOffDuotoneRounded"
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

export const IconVolumeOffTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-off-twotone-rounded IconVolumeOffTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        d={d.d6} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVolumeOffSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-off-solid-rounded IconVolumeOffSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVolumeOffBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-off-bulk-rounded IconVolumeOffBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVolumeOffStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-off-stroke-sharp IconVolumeOffStrokeSharp"
    >
      <path 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconVolumeOffSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-off-solid-sharp IconVolumeOffSolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfVolumeOff: TheIconSelfPack = {
  name: 'VolumeOff',
  StrokeRounded: IconVolumeOffStrokeRounded,
  DuotoneRounded: IconVolumeOffDuotoneRounded,
  TwotoneRounded: IconVolumeOffTwotoneRounded,
  SolidRounded: IconVolumeOffSolidRounded,
  BulkRounded: IconVolumeOffBulkRounded,
  StrokeSharp: IconVolumeOffStrokeSharp,
  SolidSharp: IconVolumeOffSolidSharp,
};