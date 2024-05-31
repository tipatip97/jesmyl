import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16.5 7C18.6111 8.09821 20.1802 9.94542 20.7578 12.1376C21.5 12.1376 22 13.1645 22 14.0106C22 16.3424 18.5658 16.7405 18 14.5165C17.4968 16.4945 14.5032 16.4945 14 14.5165C13.4968 16.4945 10.5032 16.4945 10 14.5165C9.49677 16.4945 6.50323 16.4945 6 14.5165C5.43417 16.7405 2 16.3424 2 14.0106C2 13.1645 2.5 12.1376 3.24224 12.1376C3.81984 9.94542 5.38887 8.09821 7.5 7',
  d2: 'M12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4ZM12 4C12 3.5 12.4 2.4 14 2',
  d3: 'M14.5 10.5L15 11.5',
  d4: 'M9.5 10.5L9 11.5',
  d5: 'M3.5 16L4.13246 17.8974C4.79247 19.8774 5.12248 20.8675 5.90815 21.4337C6.69381 22 7.73739 22 9.82456 22H14.1754C16.2626 22 17.3062 22 18.0919 21.4337C18.8775 20.8675 19.2075 19.8774 19.8675 17.8974L20.5 16',
  d6: 'M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6Z',
  d7: 'M9.99918 14.5156C9.49595 16.4937 6.50241 16.4937 5.99918 14.5156C5.68233 15.761 4.46607 16.1842 3.45703 15.9061L3.49918 15.9991L4.13164 17.8965C4.79166 19.8766 5.12166 20.8666 5.90733 21.4329C6.69299 21.9991 7.73657 21.9991 9.82373 21.9991H9.82374H14.1746C16.2618 21.9991 17.3054 21.9991 18.091 21.4329C18.8767 20.8666 19.2067 19.8766 19.8667 17.8965L19.8667 17.8965L20.4992 15.9991L20.5512 15.9033C19.5403 16.187 18.3171 15.7651 17.9992 14.5156C17.4959 16.4937 14.5024 16.4937 13.9992 14.5156C13.4959 16.4937 10.5024 16.4937 9.99918 14.5156Z',
  d8: 'M8.46926 6.53859C8.71834 7.02855 8.5321 7.63235 8.05328 7.88723C6.20753 8.86971 4.87317 10.5017 4.3863 12.3924C4.27826 12.812 3.91918 13.1101 3.5003 13.1358C3.47992 13.1549 3.44532 13.1946 3.39998 13.2719C3.28209 13.4727 3.20455 13.7617 3.20455 14.0107C3.20455 14.5662 3.56584 14.9139 4.09242 14.9794C4.62582 15.0458 5.06009 14.7896 5.18926 14.27C5.29945 13.8268 5.68944 13.5166 6.13636 13.5166C6.58329 13.5166 6.97327 13.8268 7.08347 14.27C7.19643 14.7244 7.58414 15.0001 8.09091 15.0001C8.59767 15.0001 8.98538 14.7244 9.09835 14.27C9.20855 13.8268 9.59853 13.5166 10.0455 13.5166C10.4924 13.5166 10.8824 13.8268 10.9926 14.27C11.1055 14.7244 11.4932 15.0001 12 15.0001C12.5068 15.0001 12.8945 14.7244 13.0074 14.27C13.1176 13.8268 13.5076 13.5166 13.9545 13.5166C14.4015 13.5166 14.7915 13.8268 14.9016 14.27C15.0146 14.7244 15.4023 15.0001 15.9091 15.0001C16.4159 15.0001 16.8036 14.7244 16.9165 14.27C17.0267 13.8268 17.4167 13.5166 17.8636 13.5166C18.3106 13.5166 18.7005 13.8268 18.8107 14.27C18.9399 14.7896 19.3742 15.0458 19.9076 14.9794C20.4342 14.9139 20.7955 14.5662 20.7955 14.0107C20.7955 13.7617 20.7179 13.4727 20.6 13.2719C20.5547 13.1946 20.5201 13.1549 20.4997 13.1358C20.0808 13.1101 19.7217 12.812 19.6137 12.3924C19.1268 10.5017 17.7925 8.86971 15.9467 7.88723C15.4679 7.63235 15.2817 7.02855 15.5307 6.53859C15.7798 6.04864 16.3699 5.85806 16.8487 6.11294C18.956 7.23463 20.5952 9.08083 21.3387 11.3221C21.7714 11.5392 22.0817 11.9119 22.2755 12.2419C22.5832 12.7661 22.75 13.4136 22.75 14.0107C22.75 15.787 21.4332 16.8043 20.1435 16.9648C19.3694 17.0611 18.5088 16.8602 17.8549 16.3111C17.2934 16.7761 16.5825 17.0001 15.9091 17.0001C15.2321 17.0001 14.5174 16.7738 13.9545 16.3039C13.3917 16.7738 12.677 17.0001 12 17.0001C11.323 17.0001 10.6083 16.7738 10.0455 16.3039C9.48258 16.7738 8.76786 17.0001 8.09091 17.0001C7.41746 17.0001 6.70662 16.7761 6.1451 16.3111C5.49118 16.8602 4.63062 17.0611 3.85649 16.9648C2.56677 16.8043 1.25 15.787 1.25 14.0107C1.25 13.4136 1.41677 12.7661 1.72454 12.2419C1.91829 11.9119 2.22862 11.5392 2.66126 11.3221C3.40475 9.08083 5.044 7.23463 7.15127 6.11294C7.63009 5.85806 8.22017 6.04864 8.46926 6.53859Z',
  d9: 'M14.7274 1.81815C14.627 1.41631 14.2198 1.17199 13.8179 1.27245C12.3416 1.64154 11.6246 2.54359 11.3665 3.32334C10.153 3.60937 9.24982 4.69924 9.24982 6.00006C9.24982 7.51884 10.481 8.75006 11.9998 8.75006C13.5186 8.75006 14.7498 7.51884 14.7498 6.00006C14.7498 4.82848 14.0172 3.82802 12.9851 3.43182C13.1839 3.17042 13.5429 2.88736 14.1817 2.72766C14.5836 2.6272 14.8279 2.22 14.7274 1.81815Z',
  d10: 'M9.94743 9.60555C10.4414 9.85254 10.6416 10.4532 10.3946 10.9472L9.89465 11.9472C9.64766 12.4412 9.04698 12.6414 8.55301 12.3944C8.05903 12.1474 7.8588 11.5467 8.10579 11.0528L8.60579 10.0528C8.85278 9.55878 9.45345 9.35856 9.94743 9.60555ZM14.053 9.60555C14.547 9.35856 15.1477 9.55878 15.3946 10.0528L15.8946 11.0528C16.1416 11.5467 15.9414 12.1474 15.4474 12.3944C14.9535 12.6414 14.3528 12.4412 14.1058 11.9472L13.6058 10.9472C13.3588 10.4532 13.559 9.85254 14.053 9.60555Z',
  d11: 'M2.89157 15.5615C3.03254 15.3659 3.25892 15.25 3.50001 15.25H20.5C20.7411 15.25 20.9675 15.3659 21.1084 15.5615C21.2494 15.757 21.2878 16.0085 21.2115 16.2372L20.5651 18.1764L20.5651 18.1764C20.247 19.1309 19.9882 19.9073 19.7068 20.5121C19.4133 21.1431 19.0652 21.6567 18.5304 22.0422C17.9956 22.4276 17.3983 22.5954 16.7068 22.6744C16.0441 22.75 15.2257 22.75 14.2196 22.75H9.78042H9.78041C8.77434 22.75 7.95588 22.75 7.29322 22.6744C6.60173 22.5954 6.00444 22.4276 5.46962 22.0422C4.9348 21.6567 4.58673 21.1431 4.29317 20.5121C4.01185 19.9073 3.75304 19.1309 3.43491 18.1764L2.78849 16.2372C2.71226 16.0085 2.75061 15.757 2.89157 15.5615Z',
  d12: 'M16 7C18.1111 8.09821 19.4224 9.80785 20 12C21.1046 12 22 12.9061 22 14.0106C22 16.3424 18.5658 16.7405 18 14.5165C17.4968 16.4945 14.5032 16.4945 14 14.5165C13.4968 16.4945 10.5032 16.4945 10 14.5165C9.49677 16.4945 6.50323 16.4945 6 14.5165C5.43417 16.7405 2 16.3424 2 14.0106C2 12.9061 2.89543 12 4 12C4.5776 9.80785 5.88887 8.09821 8 7',
  d13: 'M14 10L15.5 12',
  d14: 'M10 10L8.5 12',
  d15: 'M4 16L6 22H18L20 16',
  d16: 'M14.75 5.97761C14.75 4.80603 14.0174 3.80557 12.9853 3.40937C13.1841 3.14797 13.5431 2.86491 14.1819 2.70521L13.8181 1.25C12.3417 1.61909 11.6247 2.52114 11.3667 3.30089C10.1532 3.58692 9.25 4.67679 9.25 5.97761C9.25 7.49639 10.4812 8.72761 12 8.72761C13.5188 8.72761 14.75 7.49639 14.75 5.97761Z',
  d17: 'M16.7563 6.29521C19.7202 7.373 21.2353 9.28386 21.9945 10.9433C22.3706 11.7654 22.5588 12.5189 22.6533 13.0697C22.7006 13.3457 22.7248 13.5727 22.7371 13.7345C22.7428 13.8097 22.7476 13.9435 22.7496 13.9994L22.75 14.0107C22.75 15.6344 21.5248 16.568 20.3027 16.7166C19.5037 16.8137 18.6185 16.5855 17.9927 15.9767C17.4466 16.498 16.7058 16.7501 16 16.7501C15.291 16.7501 14.5468 16.4957 14 15.9697C13.4532 16.4957 12.709 16.7501 12 16.7501C11.291 16.7501 10.5468 16.4957 10 15.9697C9.45322 16.4957 8.70897 16.7501 8 16.7501C7.29419 16.7501 6.55342 16.498 6.00734 15.9767C5.38154 16.5855 4.49633 16.8137 3.69729 16.7166C2.47518 16.568 1.25 15.6344 1.25 14.0107L1.25041 13.9994L1.25041 13.9994C1.2524 13.9434 1.25718 13.8097 1.26291 13.7345C1.27524 13.5727 1.29939 13.3457 1.34673 13.0697C1.44123 12.5189 1.62939 11.7654 2.00549 10.9433C2.76474 9.28386 4.27979 7.373 7.24369 6.29521C7.39952 6.24991 7.60069 6.19159 7.75348 6.15088C7.84451 8.41763 9.71091 10.2273 12 10.2273C14.285 10.2273 16.1488 8.42412 16.246 6.16309C16.3446 6.18704 16.475 6.22138 16.5951 6.25299C16.6528 6.26818 16.7081 6.28274 16.7563 6.29521ZM16.0996 13.5503L14.5996 11.5503L13.3996 12.4503L14.8996 14.4503L16.0996 13.5503ZM9.40039 11.5503L7.90039 13.5503L9.10039 14.4503L10.6004 12.4503L9.40039 11.5503Z',
  d18: 'M3.26855 18.1683L4.27192 22.1818C4.35539 22.5156 4.65537 22.7499 4.99952 22.7499H18.9995C19.3437 22.7499 19.6437 22.5156 19.7271 22.1818L20.7305 18.1683C20.6479 18.1833 20.5654 18.1958 20.4833 18.2058C19.6785 18.3037 18.7896 18.1832 17.9887 17.7876C17.3513 18.103 16.6584 18.2503 15.9995 18.2503C15.337 18.2503 14.64 18.1013 13.9995 17.7822C13.359 18.1013 12.6621 18.2503 11.9995 18.2503C11.337 18.2503 10.64 18.1013 9.99952 17.7822C9.35902 18.1013 8.66206 18.2503 7.99952 18.2503C7.34059 18.2503 6.64778 18.103 6.0103 17.7876C5.20939 18.1832 4.32054 18.3037 3.51575 18.2058C3.43364 18.1958 3.35118 18.1833 3.26855 18.1683Z',
} as const;

export const IconApplePieStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-pie-stroke-rounded IconApplePieStrokeRounded"
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

export const IconApplePieDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-pie-duotone-rounded IconApplePieDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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

export const IconApplePieTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-pie-twotone-rounded IconApplePieTwotoneRounded"
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

export const IconApplePieSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-pie-solid-rounded IconApplePieSolidRounded"
    >
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconApplePieBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-pie-bulk-rounded IconApplePieBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
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

export const IconApplePieStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-pie-stroke-sharp IconApplePieStrokeSharp"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconApplePieSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-pie-solid-sharp IconApplePieSolidSharp"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfApplePie: TheIconSelfPack = {
  name: 'ApplePie',
  StrokeRounded: IconApplePieStrokeRounded,
  DuotoneRounded: IconApplePieDuotoneRounded,
  TwotoneRounded: IconApplePieTwotoneRounded,
  SolidRounded: IconApplePieSolidRounded,
  BulkRounded: IconApplePieBulkRounded,
  StrokeSharp: IconApplePieStrokeSharp,
  SolidSharp: IconApplePieSolidSharp,
};