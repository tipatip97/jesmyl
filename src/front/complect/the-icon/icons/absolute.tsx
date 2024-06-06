import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.725 2.5C19.1145 2.65381 20.0498 3.00143 20.7479 3.78705C22 5.19617 22 7.46411 22 12C22 16.5359 22 18.8038 20.7479 20.213C20.0498 20.9986 19.1145 21.3462 17.725 21.5M6.27501 21.5C4.88551 21.3462 3.95021 20.9986 3.25212 20.213C2 18.8038 2 16.5359 2 12C2 7.46411 2 5.19617 3.25212 3.78705C3.95021 3.00143 4.88551 2.65381 6.27501 2.5',
  d2: 'M7.56055 8.01026C9.09055 7.95026 10.0505 8.04027 10.6505 9.09026C11.2805 10.3503 12.8405 13.8603 13.2305 14.6703C13.6505 15.5403 14.1905 16.1403 16.4105 15.9903',
  d3: 'M16.9998 8.00006C14.7998 7.98577 12.9998 10.7001 11.9998 12.0001C10.8998 13.5001 9.00977 16.1001 7.00977 16.0001',
  d4: 'M16.9949 7.9981C14.7949 7.98381 12.9949 10.6981 11.9949 11.9981C10.8949 13.4981 9.00488 16.0981 7.00488 15.9981',
  d5: 'M7.5752 7.99854C9.1052 7.93854 10.0651 8.02855 10.6651 9.07854C11.2951 10.3386 12.8551 13.8486 13.2451 14.6586C13.6651 15.5286 14.2051 16.1286 16.4251 15.9786',
  d6: 'M7.55566 8.00538C9.08566 7.94538 10.0456 8.03539 10.6456 9.08538C11.2756 10.3454 12.8356 13.8554 13.2256 14.6654C13.6456 15.5354 14.1856 16.1354 16.4056 15.9854M16.9949 7.99518C14.7949 7.98089 12.9949 10.6952 11.9949 11.9952C10.8949 13.4952 9.00488 16.0952 7.00488 15.9952',
  d7: 'M7.26894 2.39006C7.3297 2.939 6.93396 3.43325 6.38503 3.49402C5.10653 3.63554 4.46124 3.9319 3.99964 4.45137C3.56839 4.93669 3.29509 5.62061 3.14945 6.8397C3.00168 8.07662 3 9.70695 3 12.0001C3 14.2932 3.00168 15.9236 3.14945 17.1605C3.29509 18.3796 3.56839 19.0635 3.99964 19.5488C4.46123 20.0683 5.10653 20.3646 6.38503 20.5062C6.93396 20.5669 7.3297 21.0612 7.26894 21.6101C7.20817 22.159 6.71392 22.5548 6.16499 22.494C4.66448 22.3279 3.43918 21.9291 2.5046 20.8773C1.68373 19.9535 1.33097 18.7989 1.16358 17.3977C0.99997 16.0283 0.999984 14.2782 1 12.0673V11.9329C0.999984 9.72193 0.99997 7.97192 1.16358 6.60245C1.33097 5.20131 1.68373 4.0467 2.5046 3.1229C3.43918 2.07113 4.66448 1.67226 6.16498 1.50616C6.71392 1.44539 7.20817 1.84113 7.26894 2.39006ZM16.7311 2.39006C16.7918 1.84113 17.2861 1.4454 17.835 1.50616C19.3355 1.67226 20.5608 2.07113 21.4954 3.1229C22.3163 4.0467 22.669 5.20131 22.8364 6.60245C23 7.97191 23 9.72191 23 11.9329V12.0673C23 14.2783 23 16.0283 22.8364 17.3977C22.669 18.7989 22.3163 19.9535 21.4954 20.8773C20.5608 21.929 19.3355 22.3279 17.835 22.494C17.2861 22.5548 16.7918 22.159 16.7311 21.6101C16.6703 21.0612 17.066 20.5669 17.615 20.5062C18.8935 20.3646 19.5388 20.0683 20.0004 19.5488C20.4316 19.0635 20.7049 18.3796 20.8505 17.1605C20.9983 15.9236 21 14.2932 21 12.0001C21 9.70695 20.9983 8.07662 20.8505 6.8397C20.7049 5.62061 20.4316 4.93669 20.0004 4.45137C19.5388 3.9319 18.8935 3.63554 17.615 3.49402C17.066 3.43325 16.6703 2.939 16.7311 2.39006Z',
  d8: 'M9.19672 9.09759C8.97794 9.01571 8.69079 9.0002 7.58824 9.0002C7.03595 9.0002 6.58824 8.55249 6.58824 8.0002C6.58824 7.44792 7.03595 7.0002 7.58824 7.0002C7.64252 7.0002 7.69613 7.00015 7.74907 7.0001C8.6093 6.99926 9.29419 6.9986 9.89771 7.22446C10.2411 7.35297 10.5624 7.53584 10.8431 7.76969C11.3556 8.19665 11.6299 8.79651 11.9317 9.45642C11.9524 9.50165 11.9732 9.54716 11.9943 9.59291L12.217 10.0775C12.6666 9.51794 13.1402 8.97639 13.6402 8.51513C14.5392 7.686 15.6457 7.0002 17 7.0002C17.5523 7.0002 18 7.44792 18 8.0002C18 8.55249 17.5523 9.0002 17 9.0002C16.3645 9.0002 15.7236 9.31441 14.9962 9.98527C14.3788 10.5548 13.7873 11.2973 13.1582 12.1257L13.823 13.5723C14.2272 14.4517 14.3175 14.5945 14.4371 14.6941L14.4371 14.6941C14.5354 14.776 14.6585 14.8486 14.8033 14.9028C15.0221 14.9847 15.3092 15.0002 16.4118 15.0002C16.9641 15.0002 17.4118 15.4479 17.4118 16.0002C17.4118 16.5525 16.9641 17.0002 16.4118 17.0002C16.3575 17.0002 16.3039 17.0003 16.2509 17.0003C15.3907 17.0011 14.7058 17.0018 14.1023 16.776C13.7589 16.6474 13.4376 16.4646 13.1569 16.2307C12.6444 15.8038 12.3701 15.2039 12.0683 14.544C12.0476 14.4988 12.0268 14.4532 12.0057 14.4075L11.783 13.9229C11.3334 14.4825 10.8598 15.024 10.3598 15.4853C9.46082 16.3144 8.35432 17.0002 7 17.0002C6.44772 17.0002 6 16.5525 6 16.0002C6 15.4479 6.44772 15.0002 7 15.0002C7.63548 15.0002 8.27643 14.686 9.00377 14.0151C9.62123 13.4456 10.2127 12.7031 10.8418 11.8747L10.177 10.4281C9.77284 9.54868 9.68255 9.40593 9.56293 9.30627L10.1915 8.55185L9.56293 9.30627C9.46462 9.22436 9.34152 9.15177 9.19672 9.09759Z',
  d9: 'M18 3.00005L22 3.00003V21H18M6 21H2V3H6',
  d10: 'M7.59676 8.04248C9.5585 8.04248 10.25 7.63016 12.0091 12.0344C13.7351 16.3558 14.2421 16.0265 16.4195 16.0265M16.9998 8.04281C14.7511 8.04281 12.8565 10.7431 12.0081 11.9327C9.33365 15.6828 7.79472 16.0265 7.00293 16.0265',
  d11: 'M1.5 2H6.5V4H3.5V20L6.49999 20L6.50001 22L1.5 22V2ZM22.5 2.00002V22H17.5V20H20.5V4.00003L17.5 4.00005L17.5 2.00005L22.5 2.00002Z',
  d12: 'M9.19672 9.09759C8.97794 9.01571 8.69079 9.0002 7.58824 9.0002V7.0002C7.64252 7.0002 7.69613 7.00015 7.74907 7.0001C8.6093 6.99926 9.29419 6.9986 9.89771 7.22446C10.2411 7.35297 10.5624 7.53584 10.8431 7.76969C11.3556 8.19665 11.6299 8.79651 11.9317 9.45642C11.9524 9.50165 11.9732 9.54716 11.9943 9.59291L12.217 10.0775C12.6666 9.51794 13.1402 8.97639 13.6402 8.51513C14.5392 7.686 15.6457 7.0002 17 7.0002V9.0002C16.3645 9.0002 15.7236 9.31441 14.9962 9.98527C14.3788 10.5548 13.7873 11.2973 13.1582 12.1257L13.823 13.5723C14.2272 14.4517 14.3175 14.5945 14.4371 14.6941L14.4371 14.6941C14.5354 14.776 14.6585 14.8486 14.8033 14.9028C15.0221 14.9847 15.3092 15.0002 16.4118 15.0002V17.0002C16.3575 17.0002 16.3039 17.0003 16.2509 17.0003C15.3907 17.0011 14.7058 17.0018 14.1023 16.776C13.7589 16.6474 13.4376 16.4646 13.1569 16.2307C12.6444 15.8038 12.3701 15.2039 12.0683 14.544C12.0476 14.4988 12.0268 14.4532 12.0057 14.4075L11.783 13.9229C11.3334 14.4825 10.8598 15.024 10.3598 15.4853C9.46082 16.3144 8.35432 17.0002 7 17.0002V15.0002C7.63548 15.0002 8.27643 14.686 9.00377 14.0151C9.62123 13.4456 10.2127 12.7031 10.8418 11.8747L10.177 10.4281C9.77284 9.54868 9.68255 9.40593 9.56293 9.30627L10.1915 8.55185L9.56293 9.30627C9.46462 9.22436 9.34152 9.15177 9.19672 9.09759Z',
} as const;

export const IconAbsoluteStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="absolute-stroke-rounded IconAbsoluteStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAbsoluteDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="absolute-duotone-rounded IconAbsoluteDuotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAbsoluteTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="absolute-twotone-rounded IconAbsoluteTwotoneRounded"
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAbsoluteSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="absolute-solid-rounded IconAbsoluteSolidRounded"
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

export const IconAbsoluteBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="absolute-bulk-rounded IconAbsoluteBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAbsoluteStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="absolute-stroke-sharp IconAbsoluteStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAbsoluteSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="absolute-solid-sharp IconAbsoluteSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAbsolute: TheIconSelfPack = {
  name: 'Absolute',
  StrokeRounded: IconAbsoluteStrokeRounded,
  DuotoneRounded: IconAbsoluteDuotoneRounded,
  TwotoneRounded: IconAbsoluteTwotoneRounded,
  SolidRounded: IconAbsoluteSolidRounded,
  BulkRounded: IconAbsoluteBulkRounded,
  StrokeSharp: IconAbsoluteStrokeSharp,
  SolidSharp: IconAbsoluteSolidSharp,
};