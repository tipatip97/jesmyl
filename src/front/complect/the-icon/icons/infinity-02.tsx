import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 12C12 12 10.3569 15 8.7 15C7.04315 15 6 13.6569 6 12C6 10.3431 7.04315 9 8.7 9C10.3569 9 12 12 12 12ZM12 12C12 12 13.6431 15 15.3 15C16.9569 15 18 13.6569 18 12C18 10.3431 16.9569 9 15.3 9C13.6431 9 12 12 12 12Z',
  d2: 'M17.725 2.5C19.1145 2.65381 20.0498 3.00143 20.7479 3.78705C22 5.19617 22 7.46411 22 12C22 16.5359 22 18.8038 20.7479 20.213C20.0498 20.9986 19.1145 21.3462 17.725 21.5M6.27501 21.5C4.88551 21.3462 3.95021 20.9986 3.25212 20.213C2 18.8038 2 16.5359 2 12C2 7.46411 2 5.19617 3.25212 3.78705C3.95021 3.00143 4.88551 2.65381 6.27501 2.5',
  d3: 'M12 12C12 12 10.3569 15 8.7 15C7.04315 15 6 13.6569 6 12C6 10.3431 7.04315 9 8.7 9C10.3569 9 12 12 12 12Z',
  d4: 'M12 12C12 12 13.6431 15 15.3 15C16.9569 15 18 13.6569 18 12C18 10.3431 16.9569 9 15.3 9C13.6431 9 12 12 12 12Z',
  d5: 'M8.7 10C7.72979 10 7 10.7507 7 12C7 13.2493 7.72979 14 8.7 14C8.81663 14 9.0241 13.9422 9.32676 13.7223C9.61968 13.5094 9.91942 13.2041 10.1995 12.8641C10.4513 12.5585 10.6679 12.2487 10.8297 12C10.6679 11.7513 10.4513 11.4415 10.1995 11.1359C9.91942 10.7959 9.61968 10.4906 9.32676 10.2777C9.0241 10.0578 8.81663 10 8.7 10ZM13.1703 12C13.3321 12.2487 13.5487 12.5585 13.8005 12.8641C14.0806 13.2041 14.3803 13.5094 14.6732 13.7223C14.9759 13.9422 15.1834 14 15.3 14C16.2702 14 17 13.2493 17 12C17 10.7507 16.2702 10 15.3 10C15.1834 10 14.9759 10.0578 14.6732 10.2777C14.3803 10.4906 14.0806 10.7959 13.8005 11.1359C13.5487 11.4415 13.3321 11.7513 13.1703 12ZM12 13.811C11.9189 13.9177 11.8331 14.0266 11.7431 14.1359C11.4053 14.5459 10.9836 14.9906 10.5025 15.3402C10.031 15.6828 9.4118 16 8.7 16C6.3565 16 5 14.0644 5 12C5 9.93556 6.3565 8 8.7 8C9.4118 8 10.031 8.31721 10.5025 8.65978C10.9836 9.00942 11.4053 9.45412 11.7431 9.86414C11.8331 9.97341 11.9189 10.0823 12 10.189C12.0811 10.0823 12.1669 9.97341 12.2569 9.86414C12.5947 9.45412 13.0164 9.00942 13.4975 8.65978C13.969 8.31721 14.5882 8 15.3 8C17.6435 8 19 9.93556 19 12C19 14.0644 17.6435 16 15.3 16C14.5882 16 13.969 15.6828 13.4975 15.3402C13.0164 14.9906 12.5947 14.5459 12.2569 14.1359C12.1669 14.0266 12.0811 13.9177 12 13.811Z',
  d6: 'M7.26894 2.39006C7.3297 2.939 6.93396 3.43325 6.38503 3.49402C5.10653 3.63554 4.46124 3.9319 3.99964 4.45137C3.56839 4.93669 3.29509 5.62061 3.14945 6.8397C3.00168 8.07662 3 9.70695 3 12.0001C3 14.2932 3.00168 15.9236 3.14945 17.1605C3.29509 18.3796 3.56839 19.0635 3.99964 19.5488C4.46123 20.0683 5.10653 20.3646 6.38503 20.5062C6.93396 20.5669 7.3297 21.0612 7.26894 21.6101C7.20817 22.159 6.71392 22.5548 6.16499 22.494C4.66448 22.3279 3.43918 21.9291 2.5046 20.8773C1.68373 19.9535 1.33097 18.7989 1.16358 17.3977C0.99997 16.0283 0.999984 14.2782 1 12.0673V11.9329C0.999984 9.72193 0.99997 7.97192 1.16358 6.60245C1.33097 5.20131 1.68373 4.0467 2.5046 3.1229C3.43918 2.07113 4.66448 1.67226 6.16498 1.50616C6.71392 1.44539 7.20817 1.84113 7.26894 2.39006ZM16.7311 2.39006C16.7918 1.84113 17.2861 1.4454 17.835 1.50616C19.3355 1.67226 20.5608 2.07113 21.4954 3.1229C22.3163 4.0467 22.669 5.20131 22.8364 6.60245C23 7.97191 23 9.72191 23 11.9329V12.0673C23 14.2783 23 16.0283 22.8364 17.3977C22.669 18.7989 22.3163 19.9535 21.4954 20.8773C20.5608 21.929 19.3355 22.3279 17.835 22.494C17.2861 22.5548 16.7918 22.159 16.7311 21.6101C16.6703 21.0612 17.066 20.5669 17.615 20.5062C18.8935 20.3646 19.5388 20.0683 20.0004 19.5488C20.4316 19.0635 20.7049 18.3796 20.8505 17.1605C20.9983 15.9236 21 14.2932 21 12.0001C21 9.70695 20.9983 8.07662 20.8505 6.8397C20.7049 5.62061 20.4316 4.93669 20.0004 4.45137C19.5388 3.9319 18.8935 3.63554 17.615 3.49402C17.066 3.43325 16.6703 2.939 16.7311 2.39006Z',
  d7: 'M18 3.00005L22 3.00003V21H18M6 21L2 21V3H6',
  d8: 'M1.5 2H6.5V4H3.5V20L6.49999 20L6.50001 22L1.5 22V2ZM22.5 2.00002V22H17.5V20H20.5V4.00003L17.5 4.00005L17.5 2.00005L22.5 2.00002Z',
} as const;

export const IconInfinity02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="infinity-02-stroke-rounded IconInfinity02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconInfinity02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="infinity-02-duotone-rounded IconInfinity02DuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      </g>
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
    </TheIconWrapper>
  );
};

export const IconInfinity02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="infinity-02-twotone-rounded IconInfinity02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconInfinity02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="infinity-02-solid-rounded IconInfinity02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInfinity02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="infinity-02-bulk-rounded IconInfinity02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInfinity02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="infinity-02-stroke-sharp IconInfinity02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconInfinity02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="infinity-02-solid-sharp IconInfinity02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfInfinity02: TheIconSelfPack = {
  name: 'Infinity02',
  StrokeRounded: IconInfinity02StrokeRounded,
  DuotoneRounded: IconInfinity02DuotoneRounded,
  TwotoneRounded: IconInfinity02TwotoneRounded,
  SolidRounded: IconInfinity02SolidRounded,
  BulkRounded: IconInfinity02BulkRounded,
  StrokeSharp: IconInfinity02StrokeSharp,
  SolidSharp: IconInfinity02SolidSharp,
};