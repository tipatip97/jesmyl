import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.725 2.5C19.1145 2.65381 20.0498 3.00143 20.7479 3.78705C22 5.19617 22 7.46411 22 12C22 16.5359 22 18.8038 20.7479 20.213C20.0498 20.9986 19.1145 21.3462 17.725 21.5M6.27501 21.5C4.88551 21.3462 3.95021 20.9986 3.25212 20.213C2 18.8038 2 16.5359 2 12C2 7.46411 2 5.19617 3.25212 3.78705C3.95021 3.00143 4.88551 2.65381 6.27501 2.5',
  d2: 'M14.9998 14.4986C14.9981 15.0266 14.983 15.3137 14.8502 15.5299C14.5236 16.0612 13.8736 15.9976 13.3241 15.9976H10.7994C9.69158 15.9976 9.13766 15.9976 9.01957 15.6713C8.90149 15.345 9.32205 14.9765 10.1632 14.2394L11.8529 12.7588C12.2554 12.4062 12.4566 12.2298 12.4566 12C12.4566 11.7702 12.2554 11.5938 11.8529 11.2412L10.1632 9.76058C9.32205 9.02355 8.90149 8.65503 9.01957 8.3287C9.13766 8.00237 9.69158 8.00237 10.7994 8.00237H13.3241C13.8736 8.00237 14.5236 7.93885 14.8502 8.47006C14.983 8.68627 14.9981 8.97338 14.9998 9.50144',
  d3: 'M7.26894 2.39006C7.3297 2.939 6.93396 3.43325 6.38503 3.49402C5.10653 3.63554 4.46123 3.9319 3.99964 4.45137C3.56839 4.93669 3.29509 5.62061 3.14945 6.8397C3.00168 8.07662 3 9.70695 3 12.0001C3 14.2932 3.00168 15.9236 3.14945 17.1605C3.29509 18.3796 3.56839 19.0635 3.99964 19.5488C4.46123 20.0683 5.10653 20.3646 6.38503 20.5062C6.93396 20.5669 7.3297 21.0612 7.26894 21.6101C7.20817 22.159 6.71392 22.5548 6.16499 22.494C4.66448 22.3279 3.43918 21.929 2.5046 20.8773C1.68373 19.9535 1.33097 18.7989 1.16358 17.3977C0.99997 16.0283 0.999984 14.2782 1 12.0673V11.9329C0.999984 9.72193 0.99997 7.97192 1.16358 6.60245C1.33097 5.20131 1.68373 4.0467 2.5046 3.1229C3.43918 2.07113 4.66448 1.67226 6.16499 1.50616C6.71392 1.44539 7.20817 1.84113 7.26894 2.39006ZM16.7311 2.39006C16.7918 1.84113 17.2861 1.4454 17.835 1.50616C19.3355 1.67226 20.5608 2.07113 21.4954 3.1229C22.3163 4.0467 22.669 5.20131 22.8364 6.60245C23 7.97191 23 9.72191 23 11.9329V12.0673C23 14.2783 23 16.0283 22.8364 17.3977C22.669 18.7989 22.3163 19.9535 21.4954 20.8773C20.5608 21.929 19.3355 22.3279 17.835 22.494C17.2861 22.5548 16.7918 22.159 16.7311 21.6101C16.6703 21.0612 17.066 20.5669 17.615 20.5062C18.8935 20.3646 19.5388 20.0683 20.0004 19.5488C20.4316 19.0635 20.7049 18.3796 20.8505 17.1605C20.9983 15.9236 21 14.2932 21 12.0001C21 9.70695 20.9983 8.07662 20.8505 6.8397C20.7049 5.62061 20.4316 4.93669 20.0004 4.45137C19.5388 3.9319 18.8935 3.63554 17.615 3.49402C17.066 3.43325 16.6703 2.939 16.7311 2.39006Z',
  d4: 'M13.7303 9.0011L10.8134 9.00286L10.8204 9.00896L12.543 10.5184L12.543 10.5184C12.7146 10.6685 12.9138 10.8429 13.0618 11.0148C13.2387 11.2203 13.4548 11.547 13.4548 12.0005C13.4548 12.454 13.2387 12.7807 13.0618 12.9862C12.9138 13.1581 12.7146 13.3325 12.543 13.4826L12.5101 13.5114L10.8204 14.992L13.7303 14.9999C13.8467 14.998 13.926 14.9912 13.9831 14.9809C13.9929 14.8847 13.9972 14.7418 13.998 14.4959C13.9998 13.9436 14.4489 13.4973 15.0012 13.4991C15.5535 13.5009 15.9998 13.95 15.998 14.5023C15.9971 14.7604 15.9938 15.0222 15.9647 15.2556C15.9337 15.5032 15.8674 15.7822 15.7003 16.0541C15.3433 16.635 14.8024 16.8629 14.3516 16.9467C14.0228 17.0077 13.6558 17.0025 13.4322 16.9993L10.732 16.9981H10.732C10.2353 16.9982 9.7601 16.9983 9.39805 16.9477C9.07711 16.9028 8.34696 16.7569 8.07745 16.0121C7.81214 15.2789 8.26254 14.6985 8.47498 14.454C8.71605 14.1765 9.07541 13.8618 9.45369 13.5304L9.4537 13.5304L11.1997 12.0005L9.45369 10.4706C9.07541 10.1392 8.71605 9.82445 8.47498 9.54697C8.26254 9.30245 7.81214 8.7221 8.07745 7.98893C8.34696 7.24412 9.07711 7.09817 9.39805 7.05329C9.7601 7.00266 10.2353 7.00275 10.732 7.00285L10.7976 7.00286L13.4322 7.00172C13.6558 6.99852 14.0228 6.99325 14.3516 7.05432C14.8024 7.13805 15.3433 7.36602 15.7003 7.94691C15.8674 8.2188 15.9337 8.49781 15.9647 8.74537C15.9938 8.97885 15.9971 9.2406 15.998 9.49871C15.9998 10.051 15.5535 10.5002 15.0012 10.5019C14.4489 10.5037 13.9998 10.0574 13.998 9.50516C13.9972 9.2592 13.9929 9.11628 13.9831 9.0201C13.926 9.00979 13.8467 9.00301 13.7303 9.0011Z',
  d5: 'M18 3.00005L22 3.00003V21H18M6 21H2V3H6',
  d6: 'M14.999 10.0079V8.00002L9.00376 8C9.00005 8 8.99809 8.00455 9.00056 8.00741L12.5105 11.9935L9.00013 15.9839C8.99765 15.9867 8.99961 15.9913 9.00332 15.9913L14.9988 16L14.999 14.0104',
  d7: 'M1.5 2H6.5V4H3.5V20L6.49999 20L6.50001 22L1.5 22V2ZM22.5 2.00002V22H17.5V20H20.5V4.00003L17.5 4.00005L17.5 2.00005L22.5 2.00002Z',
  d8: 'M15.7066 7.2952C15.8942 7.48275 15.9996 7.73716 15.9996 8.00244V9.99994H13.9996V9.00282L11.2044 9.00388L13.8287 11.9996L11.2038 14.9991L13.9994 14.998V13.9999H15.9994V15.9976C15.9994 16.5497 15.5519 16.9973 14.9998 16.9976L8.99944 17C8.60698 17.0002 8.25071 16.7707 8.08848 16.4134C7.92624 16.056 7.98805 15.6368 8.24651 15.3414L11.1704 12.0003L8.24743 8.66366C7.98885 8.36849 7.92681 7.94936 8.08879 7.59194C8.25077 7.23452 8.60683 7.00487 8.99925 7.00472L14.9992 7.00244C15.2645 7.00234 15.519 7.10765 15.7066 7.2952Z',
} as const;

export const IconSummation02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="summation-02-stroke-rounded IconSummation02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSummation02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="summation-02-duotone-rounded IconSummation02DuotoneRounded"
    >
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

export const IconSummation02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="summation-02-twotone-rounded IconSummation02TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconSummation02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="summation-02-solid-rounded IconSummation02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSummation02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="summation-02-bulk-rounded IconSummation02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSummation02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="summation-02-stroke-sharp IconSummation02StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSummation02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="summation-02-solid-sharp IconSummation02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
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

export const iconPackOfSummation02: TheIconSelfPack = {
  name: 'Summation02',
  StrokeRounded: IconSummation02StrokeRounded,
  DuotoneRounded: IconSummation02DuotoneRounded,
  TwotoneRounded: IconSummation02TwotoneRounded,
  SolidRounded: IconSummation02SolidRounded,
  BulkRounded: IconSummation02BulkRounded,
  StrokeSharp: IconSummation02StrokeSharp,
  SolidSharp: IconSummation02SolidSharp,
};