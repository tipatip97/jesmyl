import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11 9H19.9948C20.4907 9 20.7387 9 20.8843 9.16028C21.0299 9.32055 21.0108 9.57261 20.9728 10.0767L20.3518 18.3068C20.2196 20.0588 20.1535 20.9349 19.5893 21.4674C19.0252 22 18.1633 22 16.4396 22H11.9354C10.2116 22 9.34972 22 8.78559 21.4674C7.94616 20.675 8.08069 19.0693 8 18',
  d2: 'M11 8.90909V14.3636C11 16.0778 11 16.9349 10.4142 17.4675C9.82843 18 8.88562 18 7 18C5.11438 18 4.17157 18 3.58579 17.4675C3 16.9349 3 16.0778 3 14.3636V13.4545C3 10.8832 3 9.5976 3.87868 8.7988C4.75736 8 6.17157 8 9 8H10C10.4714 8 10.7071 8 10.8536 8.13313C11 8.26627 11 8.48054 11 8.90909Z',
  d3: 'M19 9C19 5.13401 16.75 2 13.9746 2C11.4428 2 9.34836 4.60771 9 8',
  d4: 'M3 14H11',
  d5: 'M11 13H20',
  d6: 'M20.3518 18.3039L20.9728 10.0739C21.0108 9.56976 21.0299 9.31771 20.8843 9.15743C20.7387 8.99716 20.4907 8.99716 19.9948 8.99716H11V9.03232V14.3608C11 16.075 11 16.9321 10.4142 17.4646C9.94665 17.8897 9.25162 17.9755 8.03124 17.9928L8 17.9972C8.08069 19.0665 7.94616 20.6722 8.78559 21.4646C9.34972 21.9972 10.2116 21.9972 11.9354 21.9972H16.4396C18.1633 21.9972 19.0252 21.9972 19.5893 21.4646C20.1535 20.932 20.2196 20.056 20.3518 18.3039Z',
  d7: 'M9 8C9.34836 4.60771 11.4428 2 13.9746 2C16.75 2 19 5.13401 19 9H11',
  d8: 'M11 8.9082V9.03427M11 9.03427V14.3627C11 16.0769 11 16.934 10.4142 17.4666C9.94665 17.8916 9.25162 17.9774 8.03124 17.9947L8 17.9991C8.08069 19.0685 7.94616 20.6741 8.78559 21.4666C9.34972 21.9991 10.2116 21.9991 11.9354 21.9991H16.4396C18.1633 21.9991 19.0252 21.9991 19.5893 21.4666C20.1535 20.934 20.2196 20.058 20.3518 18.3059L20.9728 10.0758C21.0108 9.57172 21.0299 9.31966 20.8843 9.15939C20.7387 8.99911 20.4907 8.99911 19.9948 8.99911H11V9.03427Z',
  d9: 'M10.0208 3.21824C11.0469 1.96882 12.4669 1.125 14.0996 1.125C15.8919 1.125 17.4221 2.13866 18.4655 3.59206C19.5101 5.0471 20.1251 7.00649 20.1251 9.125C20.1251 9.67728 19.6774 10.125 19.1251 10.125C18.5728 10.125 18.1251 9.67728 18.1251 9.125C18.1251 7.37752 17.6151 5.83691 16.8408 4.75844C16.0654 3.67834 15.0829 3.125 14.0996 3.125C13.2006 3.125 12.3076 3.58503 11.5664 4.48754C10.8236 5.392 10.2767 6.6995 10.1198 8.22715C10.0634 8.77655 9.57232 9.17619 9.02292 9.11977C8.47353 9.06335 8.07389 8.57224 8.13031 8.02285C8.32179 6.15821 8.99631 4.46571 10.0208 3.21824Z',
  d10: 'M2.12501 14.129L2.125 14.5579C2.12493 15.3555 2.12487 16.0612 2.20899 16.63C2.30135 17.2545 2.51252 17.8546 3.03812 18.3324C3.55011 18.7979 4.16991 18.9729 4.80914 19.0511C5.4148 19.1251 6.17327 19.1251 7.06385 19.125H7.18617C8.07674 19.1251 8.83522 19.1251 9.44087 19.0511C10.0801 18.9729 10.6999 18.7979 11.2119 18.3324C11.7375 17.8546 11.9487 17.2545 12.041 16.63C12.1251 16.0612 12.1251 15.3556 12.125 14.5579L12.125 8.99575C12.1252 8.81719 12.1254 8.58831 12.0959 8.38906C12.0585 8.13591 11.9572 7.79634 11.6512 7.51822C11.3589 7.25247 11.0257 7.17726 10.795 7.14905C10.5965 7.1248 10.3644 7.12491 10.1629 7.12501L9.05982 7.12502C7.70105 7.125 6.58966 7.12498 5.71187 7.23226C4.80032 7.34368 3.98945 7.58531 3.33101 8.18389C2.65896 8.79484 2.37457 9.56867 2.2456 10.4407C2.12491 11.2568 2.12496 12.2829 2.12501 13.5045L2.12501 14.121L2.125 14.125L2.12501 14.129ZM9.52501 13.125C9.80785 13.125 9.94927 13.125 10.0371 13.0371C10.125 12.9493 10.125 12.8078 10.125 12.525V9.72503C10.125 9.44218 10.125 9.30076 10.0371 9.21289C9.94927 9.12503 9.80785 9.12503 9.52501 9.12503H9.12501C7.68503 9.12503 6.69661 9.12679 5.95451 9.21749C5.23218 9.30578 4.8966 9.46355 4.67636 9.66377C4.46973 9.85161 4.31479 10.12 4.22408 10.7333C4.15603 11.1935 4.13469 11.7652 4.12802 12.5239C4.12554 12.8062 4.1243 12.9474 4.21232 13.0362C4.30035 13.125 4.44231 13.125 4.72623 13.125H9.52501ZM10.1119 15.7292C10.1224 15.4489 10.1277 15.3088 10.0392 15.2169C9.9507 15.125 9.80686 15.125 9.51919 15.125H4.73082C4.44315 15.125 4.29932 15.125 4.21082 15.2169C4.12232 15.3088 4.12758 15.4489 4.1381 15.7292C4.14707 15.968 4.16215 16.1662 4.18747 16.3374C4.24156 16.7032 4.32328 16.7978 4.38347 16.8526C4.45726 16.9196 4.60176 17.0108 5.05179 17.0658C5.52157 17.1233 6.15644 17.125 7.12501 17.125C8.09358 17.125 8.72844 17.1233 9.19823 17.0658C9.64825 17.0108 9.79275 16.9196 9.86655 16.8526C9.92673 16.7978 10.0085 16.7032 10.0625 16.3374C10.0879 16.1662 10.1029 15.968 10.1119 15.7292Z',
  d11: 'M21.5644 8.78101C21.3265 8.51907 21.0304 8.43478 20.8005 8.40239C20.6049 8.37482 20.3718 8.37492 20.1561 8.37501L11.125 8.37502C10.7108 8.37502 10.375 8.71081 10.375 9.12502V11.775C10.375 12.0578 10.375 12.1993 10.4629 12.2871C10.5507 12.375 10.6922 12.375 10.975 12.375H21.1295C21.3935 12.375 21.5254 12.375 21.6117 12.295C21.698 12.2149 21.708 12.0833 21.7278 11.8201L21.8484 10.2222C21.8651 10.002 21.8828 9.76789 21.8711 9.57003C21.8575 9.34129 21.8002 9.04057 21.5644 8.78101Z',
  d12: 'M21.5241 14.5201C21.5469 14.2181 21.5583 14.067 21.4692 13.971C21.3802 13.875 21.2287 13.875 20.9258 13.875H10.975C10.6922 13.875 10.5507 13.875 10.4629 13.9629C10.375 14.0507 10.375 14.1922 10.375 14.475V14.4887C10.375 15.369 10.3731 15.9464 10.3098 16.374C10.251 16.7721 10.1531 16.9299 10.0347 17.0375C9.93397 17.1291 9.77759 17.2147 9.46854 17.276C9.14784 17.3396 8.7198 17.3665 8.11436 17.3751C7.90752 17.378 7.71107 17.4663 7.57148 17.6189C7.43189 17.7716 7.36156 17.9752 7.37713 18.1815C7.39112 18.3669 7.39795 18.5664 7.4057 18.793C7.40835 18.8703 7.4111 18.9507 7.41428 19.0349C7.4263 19.3526 7.4442 19.7061 7.48937 20.0581C7.57652 20.7371 7.7808 21.5573 8.39575 22.1378C8.83601 22.5535 9.36699 22.7243 9.95192 22.8019C10.5029 22.8751 11.1911 22.8751 12.0101 22.875H16.6148C17.4338 22.8751 18.122 22.8751 18.673 22.8019C19.2579 22.7243 19.7889 22.5535 20.2292 22.1378C20.6677 21.7239 20.8727 21.2024 20.9922 20.6202C21.1055 20.0685 21.158 19.3715 21.221 18.537L21.5241 14.5201Z',
  d13: 'M14.0996 1.125C12.4669 1.125 11.0469 1.96882 10.0208 3.21824C8.99631 4.46571 8.32179 6.15821 8.13031 8.02285C8.07389 8.57224 8.47353 9.06335 9.02292 9.11977C9.57232 9.17619 10.0634 8.77655 10.1198 8.22715C10.2767 6.6995 10.8236 5.392 11.5664 4.48754C12.3076 3.58503 13.2006 3.125 14.0996 3.125C15.0829 3.125 16.0654 3.67834 16.8408 4.75844C17.5022 5.67975 17.9708 6.93832 18.0933 8.37501L20.0992 8.37501C19.9724 6.54667 19.3856 4.87371 18.4655 3.59206C17.4221 2.13866 15.8919 1.125 14.0996 1.125Z',
  d14: 'M11 8V18H3V8H11Z',
  d15: 'M11.0001 9H21.0001L20.0001 22H8.00008L7.69238 18',
  d16: 'M21.5018 12.2502L21.7474 9.05777C21.7634 8.84947 21.6918 8.64394 21.5499 8.49066C21.4079 8.33738 21.2085 8.25024 20.9996 8.25024H11.0326V12.2502H21.5018Z',
  d17: 'M6.94233 17.9746C6.94138 18.0023 6.94198 18.0301 6.9441 18.0578L7.2518 22.0578C7.28185 22.4485 7.60768 22.7502 7.99959 22.7502H19.9996C20.3915 22.7502 20.7173 22.4485 20.7474 22.0578L21.3864 13.7502H11.0326V17.9746H6.94233Z',
  d18: 'M2.25049 8.20858C2.25049 7.6793 2.67582 7.25024 3.20049 7.25024H10.8005C11.3252 7.25024 11.7505 7.6793 11.7505 8.20858V17.7919C11.7505 18.3212 11.3252 18.7502 10.8005 18.7502H3.20049C2.67582 18.7502 2.25049 18.3212 2.25049 17.7919V8.20858ZM4.15049 9.16691V13.0002H9.85049V9.16691H4.15049ZM9.85049 14.9169H4.15049V16.8336H9.85049V14.9169Z',
  d19: 'M9.89683 3.34324C10.9229 2.09382 12.3429 1.25 13.9757 1.25C15.7679 1.25 17.2981 2.26366 18.3415 3.71706C19.3861 5.1721 20.0011 7.13149 20.0011 9.25H18.0011C18.0011 7.50252 17.4911 5.96191 16.7169 4.88344C15.9414 3.80334 14.9589 3.25 13.9757 3.25C13.0767 3.25 12.1836 3.71003 11.4424 4.61254C10.6996 5.517 10.1528 6.8245 9.99589 8.35215L8.00635 8.14785C8.19783 6.28321 8.87235 4.59071 9.89683 3.34324Z',
} as const;

export const IconCleaningBucketStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cleaning-bucket-stroke-rounded IconCleaningBucketStrokeRounded"
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

export const IconCleaningBucketDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cleaning-bucket-duotone-rounded IconCleaningBucketDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
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

export const IconCleaningBucketTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cleaning-bucket-twotone-rounded IconCleaningBucketTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCleaningBucketSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cleaning-bucket-solid-rounded IconCleaningBucketSolidRounded"
    >
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

export const IconCleaningBucketBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cleaning-bucket-bulk-rounded IconCleaningBucketBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCleaningBucketStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cleaning-bucket-stroke-sharp IconCleaningBucketStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCleaningBucketSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cleaning-bucket-solid-sharp IconCleaningBucketSolidSharp"
    >
      <path 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCleaningBucket: TheIconSelfPack = {
  name: 'CleaningBucket',
  StrokeRounded: IconCleaningBucketStrokeRounded,
  DuotoneRounded: IconCleaningBucketDuotoneRounded,
  TwotoneRounded: IconCleaningBucketTwotoneRounded,
  SolidRounded: IconCleaningBucketSolidRounded,
  BulkRounded: IconCleaningBucketBulkRounded,
  StrokeSharp: IconCleaningBucketStrokeSharp,
  SolidSharp: IconCleaningBucketSolidSharp,
};