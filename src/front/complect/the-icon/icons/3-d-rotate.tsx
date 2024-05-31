import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 12C7.18491 16.8269 16.4642 16.3877 22 12.3556',
  d2: 'M11.5368 2C6.98945 6.5 6.48414 17 11.9941 22',
  d3: 'M2 12C2 17.5228 6.47715 22 12 22C9.84377 19.9785 8.77475 17.5245 8.39646 15C4.71363 14.6 2.59764 12.8333 2 12Z',
  d4: 'M21.9987 12C21.9987 6.47715 17.5215 2 11.9987 2C11.7182 2 11.4405 2.01154 11.1659 2.03418C9.58174 4.7895 7.65061 10.0314 8.39513 15C11.1659 16.2496 17.5987 16 21.9987 12Z',
  d5: 'M22 12.3556C16.4642 16.3877 7.18491 16.8269 2 12M11.9941 22C6.4841 17 6.98941 6.5 11.5368 2',
  d6: 'M9.7158 2.49651C10.1505 1.88871 10.3678 1.58481 10.2463 1.40919C10.1249 1.23357 9.797 1.32471 9.14121 1.50699C5.26043 2.58572 2.25586 5.79148 1.44174 9.80068C1.40941 9.95989 1.39324 10.0395 1.41955 10.1172C1.44586 10.1949 1.50923 10.2499 1.63596 10.36L2.64643 11.2377L2.66039 11.2508C3.68758 12.2139 4.90031 12.9577 6.22852 13.4908C6.60369 13.6414 6.79127 13.7167 6.92495 13.6198C7.05863 13.5228 7.04643 13.3078 7.02204 12.8778C7.00163 12.5179 6.99184 12.1582 6.9924 11.8C6.99769 8.41451 7.92739 4.99728 9.7158 2.49651Z',
  d7: 'M1.30578 12.745C1.28303 12.7253 1.24796 12.7432 1.25009 12.7733C1.59089 17.6033 5.06342 21.5615 9.6343 22.5999C10.2963 22.7503 10.6273 22.8255 10.7399 22.6423C10.8526 22.4591 10.619 22.1709 10.1518 21.5946C8.92072 20.076 8.07515 18.2739 7.5708 16.3708C7.52471 16.1969 7.50167 16.1099 7.44524 16.0528C7.38881 15.9956 7.3026 15.9718 7.13019 15.9242C4.97319 15.329 2.95898 14.2902 1.30578 12.745Z',
  d8: 'M13.8911 22.4576C14.0018 22.5589 14.0572 22.6095 14.1282 22.6283C14.1993 22.6472 14.2696 22.6312 14.4103 22.5992C18.8352 21.5924 22.2301 17.8492 22.7496 13.2283C22.7556 13.1752 22.6963 13.1402 22.6532 13.1713C19.6831 15.3487 15.7526 16.5324 11.8914 16.5435C11.4598 16.5448 11.0278 16.5314 10.5969 16.5028C10.1693 16.4745 9.95556 16.4603 9.85814 16.5945C9.76073 16.7286 9.8346 16.9181 9.98233 17.2971C10.5926 18.8626 11.4914 20.2633 12.6897 21.3585L13.8911 22.4576Z',
  d9: 'M22.4434 10.835C22.5866 10.7319 22.6581 10.6803 22.6911 10.6011C22.724 10.5218 22.7106 10.4375 22.684 10.2687C21.9609 5.69262 18.4037 2.06792 13.8811 1.27688C13.7368 1.25164 13.6647 1.23902 13.5938 1.2622C13.523 1.28539 13.4701 1.34022 13.3645 1.4499L12.2692 2.58665L12.262 2.59385C10.2219 4.62717 9.00707 8.12929 9.00133 11.8031C9.00025 12.4983 9.04246 13.1915 9.12864 13.8741C9.15478 14.0812 9.16786 14.1847 9.23971 14.2576C9.31156 14.3306 9.41434 14.3445 9.6199 14.3725C10.363 14.4736 11.1213 14.5225 11.8856 14.5203C15.3754 14.5102 18.8839 13.4332 21.4739 11.5332L21.4811 11.528L22.4434 10.835Z',
  d10: 'M9.71564 2.49802C10.1503 1.89022 10.3676 1.58632 10.2462 1.4107C10.1247 1.23508 9.79684 1.32622 9.14106 1.50851C5.26027 2.58723 2.2557 5.793 1.44158 9.80219C1.40925 9.96141 1.39308 10.041 1.4194 10.1187C1.44571 10.1964 1.50907 10.2514 1.6358 10.3615L2.64627 11.2392L2.66023 11.2523C3.68743 12.2154 4.90015 12.9592 6.22836 13.4923C6.60353 13.6429 6.79111 13.7182 6.92479 13.6213C7.05847 13.5244 7.04628 13.3093 7.02189 12.8793C7.00147 12.5194 6.99168 12.1597 6.99224 11.8015C6.99753 8.41602 7.92723 4.99879 9.71564 2.49802Z',
  d11: 'M13.891 22.4591C14.0017 22.5604 14.057 22.611 14.1281 22.6299C14.1991 22.6487 14.2695 22.6327 14.4102 22.6007C18.8351 21.5939 22.2299 17.8507 22.7494 13.2298C22.7554 13.1767 22.6962 13.1417 22.653 13.1728C19.6829 15.3502 15.7524 16.534 11.8912 16.5451C11.4597 16.5463 11.0277 16.5329 10.5967 16.5043C10.1692 16.476 9.9554 16.4618 9.85799 16.596C9.76057 16.7301 9.83444 16.9196 9.98218 17.2986C10.5924 18.8641 11.4913 20.2648 12.6896 21.36L13.891 22.4591Z',
  d12: 'M1.30578 12.745C1.28303 12.7253 1.24796 12.7432 1.25009 12.7733C1.59089 17.6033 5.06342 21.5615 9.6343 22.5999C10.2963 22.7503 10.6273 22.8255 10.7399 22.6423C10.8526 22.4591 10.619 22.1709 10.1518 21.5946C8.92072 20.076 8.07515 18.2739 7.5708 16.3708C7.52471 16.1969 7.50167 16.11 7.44524 16.0528C7.38881 15.9956 7.3026 15.9718 7.13019 15.9242C4.97319 15.329 2.95898 14.2902 1.30578 12.745Z',
  d13: 'M22.4434 10.835C22.5866 10.7319 22.6581 10.6803 22.6911 10.6011C22.724 10.5218 22.7106 10.4375 22.684 10.2687C21.9609 5.69262 18.4037 2.06792 13.8811 1.27688C13.7368 1.25164 13.6647 1.23902 13.5938 1.2622C13.523 1.28539 13.4701 1.34022 13.3645 1.4499L12.2692 2.58665L12.262 2.59385C10.2219 4.62717 9.00707 8.12929 9.00133 11.8031C9.00025 12.4983 9.04246 13.1915 9.12864 13.8741C9.15478 14.0812 9.16786 14.1847 9.23971 14.2577C9.31156 14.3306 9.41434 14.3445 9.6199 14.3725C10.363 14.4736 11.1213 14.5225 11.8856 14.5203C15.3754 14.5102 18.8839 13.4332 21.4739 11.5332L21.4811 11.528L22.4434 10.835Z',
  d14: 'M13.1764 22.75C11.4108 21.036 10.2199 18.8294 9.56792 16.4286C10.3213 16.5052 11.08 16.5416 11.8377 16.5395C15.63 16.5289 19.4799 15.5552 22.6362 13.7471C21.8724 18.5028 18.0035 22.2197 13.1764 22.75Z',
  d15: 'M10.4484 22.7062C5.71548 22.0305 1.97286 18.2809 1.30472 13.543C3.12938 14.7969 5.22415 15.6322 7.42055 16.0954C7.94701 18.4793 8.93719 20.7638 10.4484 22.7062Z',
  d16: 'M1.25 10.9584C2.87449 12.3953 4.88167 13.3849 7.07275 13.9521C6.99667 13.2329 6.95999 12.5114 6.9612 11.7937C6.96754 8.04485 8.00798 4.2836 9.98939 1.41213C5.32543 2.28536 1.7186 6.16156 1.25 10.9584Z',
  d17: 'M12.6857 1.25C10.3333 3.77106 8.97508 7.71006 8.96817 11.7971C8.96672 12.6552 9.02485 13.5124 9.14396 14.3568C10.0256 14.4762 10.9254 14.5339 11.8321 14.5314C15.788 14.5204 19.7664 13.3609 22.75 11.3062C22.3973 5.90987 18.081 1.59571 12.6857 1.25Z',
} as const;

export const Icon3DRotateStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-rotate-stroke-rounded Icon3DRotateStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
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

export const Icon3DRotateDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-rotate-duotone-rounded Icon3DRotateDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
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

export const Icon3DRotateTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-rotate-twotone-rounded Icon3DRotateTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const Icon3DRotateSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-rotate-solid-rounded Icon3DRotateSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const Icon3DRotateBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-rotate-bulk-rounded Icon3DRotateBulkRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const Icon3DRotateStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-rotate-stroke-sharp Icon3DRotateStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const Icon3DRotateSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-rotate-solid-sharp Icon3DRotateSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOf3DRotate: TheIconSelfPack = {
  name: '3DRotate',
  StrokeRounded: Icon3DRotateStrokeRounded,
  DuotoneRounded: Icon3DRotateDuotoneRounded,
  TwotoneRounded: Icon3DRotateTwotoneRounded,
  SolidRounded: Icon3DRotateSolidRounded,
  BulkRounded: Icon3DRotateBulkRounded,
  StrokeSharp: Icon3DRotateStrokeSharp,
  SolidSharp: Icon3DRotateSolidSharp,
};