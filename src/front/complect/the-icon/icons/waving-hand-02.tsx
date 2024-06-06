import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18.9154 11.6997L17.373 15.8314C16.6547 17.7556 16.2955 18.7177 15.709 19.377C14.812 20.3851 13.5203 20.9748 12.1549 20.9995C11.262 21.0156 10.2783 20.6665 8.31091 19.9683C7.27913 19.6022 6.76324 19.4191 6.32165 19.1455C5.64795 18.7281 5.09127 18.1534 4.70166 17.4731C4.44628 17.0272 4.28743 16.5137 3.96974 15.4867L2.56985 10.9613C2.35476 10.266 2.64855 9.51553 3.28412 9.13687C4.11475 8.64198 5.19966 8.96175 5.60953 9.82225L6.5443 11.7848L9.1763 4.73429C9.4501 4.00083 10.2819 3.62265 11.0342 3.88961C11.7865 4.15657 12.1743 4.96757 11.9005 5.70103M11.9005 5.70103L12.5616 3.93029C12.8354 3.19683 13.6672 2.81866 14.4194 3.08562C15.1717 3.35257 15.5596 4.16357 15.2858 4.89704L14.6248 6.66777M11.9005 5.70103L10.4132 9.68518M14.6248 6.66777C14.8986 5.93431 15.7304 5.55613 16.4826 5.82309C17.2349 6.09005 17.6228 6.90105 17.349 7.63451L16.688 9.40524M14.6248 6.66777L13.1374 10.6519M18.5859 12.5854L19.4122 10.372C19.686 9.63852 19.2981 8.82752 18.5458 8.56056C17.7936 8.2936 16.9618 8.67178 16.688 9.40524M16.688 9.40524L15.8617 11.6187',
  d2: 'M21.3307 14C21.877 15.6354 21.0574 17.4263 19.5 18',
  d3: 'M3.96974 15.4867L2.56985 10.9613C2.35476 10.266 2.64855 9.51553 3.28412 9.13687C4.11475 8.64198 5.19966 8.96175 5.60953 9.82225L6.5443 11.7848L9.1763 4.73429C9.4501 4.00083 10.2819 3.62265 11.0342 3.88961C11.7865 4.15657 12.0605 5.08963 11.7867 5.82309L12.5616 3.93029C12.8354 3.19683 13.6672 2.81866 14.4194 3.08562C15.1717 3.35257 15.5596 4.16357 15.2858 4.89704L14.6248 6.66777C14.8986 5.93431 15.7304 5.55613 16.4826 5.82309C17.2349 6.09005 17.6228 6.90105 17.349 7.63451L16.688 9.40524C16.9618 8.67178 17.7936 8.2936 18.5458 8.56056C19.2981 8.82752 19.686 9.63852 19.4122 10.372L18.9154 11.6997L17.373 15.8314C16.6547 17.7556 16.2956 18.7177 15.709 19.377C14.812 20.3851 13.5203 20.9748 12.1549 20.9995C11.262 21.0156 10.2783 20.6665 8.31092 19.9683C7.27913 19.6022 6.76324 19.4191 6.32165 19.1455C5.64795 18.7281 5.09127 18.1534 4.70166 17.4731C4.44628 17.0272 4.28743 16.5137 3.96974 15.4867Z',
  d4: 'M10.057 9.68748C10.2779 9.76936 10.5239 9.65793 10.6063 9.4386L13.2613 3.05801C13.5077 2.46572 14.1883 2.18617 14.7799 2.43424C15.3624 2.67845 15.6422 3.34393 15.4092 3.93096L12.9079 10.2349C12.8254 10.4543 12.9377 10.6984 13.1586 10.7803C13.3795 10.8622 13.6254 10.7508 13.7078 10.5314L15.4327 6.10205C15.6728 5.48561 16.3728 5.18711 16.9838 5.44062C17.5694 5.68358 17.8582 6.34601 17.6376 6.9404L16.0094 11.3278C15.927 11.5471 16.0392 11.7913 16.2601 11.8731C16.481 11.955 16.7269 11.8436 16.8094 11.6243L17.7346 9.12406C17.9851 8.44698 18.7572 8.12428 19.415 8.42166C20.0041 8.68791 20.2913 9.36063 20.0764 9.97022L17.941 16.0253C17.5896 16.9666 17.3132 17.7071 17.0504 18.2927C16.7825 18.8894 16.509 19.3721 16.1438 19.7826C15.1058 20.9493 13.6148 21.6281 12.043 21.6564C11.4912 21.6664 10.9414 21.5621 10.3042 21.3799C9.67807 21.2009 8.92192 20.9326 7.95845 20.5907C7.00928 20.254 6.31189 20.0066 5.80116 19.6901C5.02271 19.2078 4.37761 18.5426 3.92535 17.7529C3.62832 17.2343 3.44655 16.6464 3.15512 15.7039L1.6846 10.6077C1.65257 10.5049 1.63358 10.4005 1.62695 10.2964C1.63821 10.0635 1.6848 9.83517 1.76353 9.61852C1.87934 9.38389 2.06456 9.17896 2.30844 9.03469C3.04385 8.59965 3.99626 8.88616 4.35193 9.62759L5.41617 11.8461C5.48988 11.9997 5.64899 12.0947 5.82023 12.0873C5.99147 12.0799 6.14164 11.9715 6.20159 11.8121L9.37529 3.69229C9.61412 3.08127 10.3003 2.77637 10.9138 3.00865C11.5375 3.24475 11.8479 3.94497 11.6041 4.56563L9.80638 9.14208C9.72392 9.36142 9.83614 9.6056 10.057 9.68748Z',
  d5: 'M20.8891 12.958C21.413 12.7831 21.9795 13.0658 22.1545 13.5897C22.861 15.7048 21.8174 18.0726 19.7209 18.8449C19.2027 19.0358 18.6278 18.7704 18.4369 18.2522C18.246 17.7339 18.5114 17.1591 19.0296 16.9682C20.048 16.593 20.6436 15.3792 20.2575 14.2234C20.0825 13.6995 20.3653 13.133 20.8891 12.958Z',
  d6: 'M14.7483 2.32391C14.0922 2.09266 13.3771 2.42379 13.1446 3.04218L10.7063 9.52885L9.96196 9.25291L11.6501 4.76213C11.8806 4.14877 11.5578 3.45982 10.9061 3.23013C10.2499 2.99889 9.53483 3.33001 9.30238 3.9484L5.98729 12.7674L4.52329 9.71503C4.16133 8.96037 3.19305 8.6697 2.44592 9.11176C1.8784 9.44755 1.62275 10.1071 1.81141 10.7127L3.40028 15.8135C3.76618 16.9882 3.9333 17.5171 4.19622 17.9731C4.60526 18.6824 5.19025 19.2825 5.89942 19.7189C6.35586 19.9997 6.89316 20.1913 8.08086 20.6099C9.20204 21.005 10.0258 21.2951 10.696 21.4854C11.3631 21.6748 11.8528 21.7575 12.3038 21.7495C13.7441 21.7237 15.1047 21.1058 16.048 20.0529C16.3428 19.7238 16.5915 19.3076 16.8707 18.69C17.1512 18.0692 17.4519 17.2699 17.8613 16.1807L20.1758 10.0271C20.4063 9.41369 20.0835 8.72473 19.4318 8.49505C18.7756 8.26381 18.0606 8.59493 17.8281 9.21332L16.8903 11.7082L16.146 11.4323L17.834 6.94148C18.0646 6.32812 17.7418 5.63916 17.0901 5.40948C16.4339 5.17824 15.7188 5.50936 15.4864 6.12775L13.7983 10.6185L13.054 10.3426L15.4923 3.85591C15.7229 3.24254 15.4001 2.55359 14.7483 2.32391Z',
  d7: 'M18.9053 17.0611C19.9236 16.686 20.5193 15.4721 20.1332 14.3163L22.0301 13.6826C22.7367 15.7977 21.693 18.1656 19.5966 18.9378L18.9053 17.0611Z',
} as const;

export const IconWavingHand02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="waving-hand-02-stroke-rounded IconWavingHand02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconWavingHand02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="waving-hand-02-duotone-rounded IconWavingHand02DuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWavingHand02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="waving-hand-02-twotone-rounded IconWavingHand02TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconWavingHand02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="waving-hand-02-solid-rounded IconWavingHand02SolidRounded"
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

export const IconWavingHand02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="waving-hand-02-bulk-rounded IconWavingHand02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconWavingHand02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="waving-hand-02-stroke-sharp IconWavingHand02StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconWavingHand02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="waving-hand-02-solid-sharp IconWavingHand02SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWavingHand02: TheIconSelfPack = {
  name: 'WavingHand02',
  StrokeRounded: IconWavingHand02StrokeRounded,
  DuotoneRounded: IconWavingHand02DuotoneRounded,
  TwotoneRounded: IconWavingHand02TwotoneRounded,
  SolidRounded: IconWavingHand02SolidRounded,
  BulkRounded: IconWavingHand02BulkRounded,
  StrokeSharp: IconWavingHand02StrokeSharp,
  SolidSharp: IconWavingHand02SolidSharp,
};