import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d2: 'M13.6314 12.5252C14.1397 13.1555 15.1725 13.9361 14.9886 14.3068M14.9886 14.3068C15.091 14.6847 14.0911 15.4318 13.6292 16.0017M14.9886 14.3068C12.9059 14.3521 11.6315 14.1001 10.4014 12.8753C9.12028 11.5996 8.90953 10.2057 9.01322 7.99707',
  d3: 'M13.6314 12.5256C14.1397 13.1556 15.1725 13.9366 14.9886 14.3076M14.9886 14.3076C15.091 14.6856 14.0911 15.4326 13.6292 16.0026M14.9886 14.3076C12.9058 14.3526 11.6315 14.1005 10.4014 12.8755C9.12032 11.5995 8.90952 10.2056 9.01322 7.99756',
  d4: 'M8.25 8C8.25 7.58579 8.58579 7.25 9 7.25C9.41421 7.25 9.75 7.58579 9.75 8H8.25ZM15 13.5218C15.4142 13.5218 15.75 13.8576 15.75 14.2718C15.75 14.686 15.4142 15.0218 15 15.0218V13.5218ZM12.9762 14.2124L13.0962 13.4721L12.9762 14.2124ZM9.05803 10.202L8.31685 10.3167L9.05803 10.202ZM14.1674 16.518C13.8813 16.8175 13.4065 16.8285 13.107 16.5424C12.8074 16.2563 12.7965 15.7815 13.0826 15.482L14.1674 16.518ZM14.8051 14.7644L15.3474 15.2824L14.8051 14.7644ZM14.8051 13.7789L15.3474 13.2609L14.8051 13.7789ZM13.0826 13.0613C12.7965 12.7617 12.8074 12.287 13.107 12.0009C13.4065 11.7148 13.8813 11.7257 14.1674 12.0253L13.0826 13.0613ZM9.75 8V8.48244H8.25V8H9.75ZM15 15.0218C14.1652 15.0218 13.2993 15.0246 12.8562 14.9527L13.0962 13.4721C13.3859 13.519 14.0833 13.5218 15 13.5218V15.0218ZM9.75 8.48244C9.75 9.40686 9.75222 9.78372 9.79921 10.0874L8.31685 10.3167C8.24778 9.87034 8.25 9.35081 8.25 8.48244H9.75ZM12.8562 14.9527C10.5088 14.5722 8.68446 12.6923 8.31685 10.3167L9.79921 10.0874C10.0705 11.8405 11.4098 13.1987 13.0962 13.4721L12.8562 14.9527ZM13.0826 15.482L14.2627 14.2464L15.3474 15.2824L14.1674 16.518L13.0826 15.482ZM14.2627 14.2969L13.0826 13.0613L14.1674 12.0253L15.3474 13.2609L14.2627 14.2969ZM14.2627 14.2464C14.2508 14.2588 14.25 14.2698 14.25 14.2716C14.25 14.2734 14.2508 14.2844 14.2627 14.2969L15.3474 13.2609C15.8842 13.8229 15.8842 14.7204 15.3474 15.2824L14.2627 14.2464Z',
  d5: 'M12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75ZM14.3482 16.6907C13.9667 17.0901 13.3337 17.1046 12.9343 16.7232C12.7287 16.5267 12.625 16.2636 12.625 16V15.1651C10.2603 14.6981 8.44344 12.7696 8.0698 10.355C7.99982 9.90274 7.99989 9.38288 7.99999 8.57954L8 8.48244V8C8 7.44771 8.44772 7 9 7C9.55229 7 10 7.44771 10 8V8.48244C10 9.41619 10.003 9.76928 10.0463 10.0491C10.2732 11.5158 11.2934 12.6834 12.625 13.1038V12.5C12.6357 12.251 12.7399 12.0058 12.9343 11.8201C13.3337 11.4386 13.9667 11.4532 14.3482 11.8526L15.5282 13.0882C15.842 13.4167 15.9992 13.8425 16 14.2685L16 14.2718L16 14.275C15.9992 14.7009 15.8419 15.1266 15.5282 15.4551L14.3482 16.6907Z',
  d6: 'M1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12Z',
  d7: 'M12.9343 16.7232C13.3337 17.1046 13.9667 17.0901 14.3482 16.6907L15.5283 15.4551C15.8419 15.1266 15.9992 14.7009 16 14.275L16 14.2718L16 14.2685C15.9992 13.8425 15.842 13.4167 15.5283 13.0882L14.3482 11.8526C13.9667 11.4532 13.3337 11.4386 12.9343 11.8201C12.7399 12.0058 12.6357 12.251 12.625 12.5V13.1038C11.2934 12.6834 10.2732 11.5158 10.0463 10.0491C10.003 9.76928 10 9.41619 10 8.48244V8C10 7.44771 9.5523 7 9.00002 7C8.44773 7 8.00002 7.44771 8.00002 8V8.48244L8.00001 8.57954C7.9999 9.38288 7.99983 9.90274 8.06981 10.355C8.44346 12.7696 10.2603 14.6981 12.625 15.1651V16C12.625 16.2636 12.7287 16.5267 12.9343 16.7232Z',
  d8: 'M13.5 17L16 14.5L13.5 12',
  d9: 'M16 14.5043H8.10106C8.04603 14.5043 8 14.4385 8 14.3832V7.00586',
  d10: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM8.25 8V14C8.25 14.4142 8.58579 14.75 9 14.75H13.1893L12.4697 15.4697L13.5303 16.5303L16.0607 14L13.5303 11.4697L12.4697 12.5303L13.1893 13.25H9.75V8H8.25Z',
} as const;

export const IconCircleArrowMoveDownRightStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-down-right-stroke-rounded IconCircleArrowMoveDownRightStrokeRounded"
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

export const IconCircleArrowMoveDownRightDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-down-right-duotone-rounded IconCircleArrowMoveDownRightDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowMoveDownRightTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-down-right-twotone-rounded IconCircleArrowMoveDownRightTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowMoveDownRightSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-down-right-solid-rounded IconCircleArrowMoveDownRightSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowMoveDownRightBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-down-right-bulk-rounded IconCircleArrowMoveDownRightBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowMoveDownRightStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-down-right-stroke-sharp IconCircleArrowMoveDownRightStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowMoveDownRightSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-down-right-solid-sharp IconCircleArrowMoveDownRightSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCircleArrowMoveDownRight: TheIconSelfPack = {
  name: 'CircleArrowMoveDownRight',
  StrokeRounded: IconCircleArrowMoveDownRightStrokeRounded,
  DuotoneRounded: IconCircleArrowMoveDownRightDuotoneRounded,
  TwotoneRounded: IconCircleArrowMoveDownRightTwotoneRounded,
  SolidRounded: IconCircleArrowMoveDownRightSolidRounded,
  BulkRounded: IconCircleArrowMoveDownRightBulkRounded,
  StrokeSharp: IconCircleArrowMoveDownRightStrokeSharp,
  SolidSharp: IconCircleArrowMoveDownRightSolidSharp,
};