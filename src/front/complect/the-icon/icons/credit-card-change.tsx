import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 9.5C21.9635 7.24771 21.7892 5.94656 20.9564 5.0129C20.7879 4.82403 20.6022 4.64935 20.4014 4.49087C19.1461 3.5 17.2659 3.5 13.5056 3.5H10.5041C6.74371 3.5 4.86352 3.5 3.60823 4.49087C3.40746 4.64935 3.22178 4.82403 3.05331 5.0129C2 6.19377 2 7.96252 2 11.5C2 15.0375 2 16.8062 3.05331 17.9871C3.22178 18.176 3.40746 18.3506 3.60823 18.5091C4.86352 19.5 6.74371 19.5 10.5041 19.5H11',
  d2: 'M2 8.5H22',
  d3: 'M19.3333 12.5L20.1565 13.2579C20.3357 13.434 20.4253 13.5221 20.3938 13.5969C20.3622 13.6717 20.2355 13.6717 19.9821 13.6717H16.8777C15.2884 13.6717 14 14.938 14 16.5C14 16.8521 14.0655 17.1891 14.185 17.5M16.6667 20.5L15.8435 19.7421C15.6643 19.566 15.5747 19.4779 15.6062 19.4031C15.6378 19.3283 15.7645 19.3283 16.0179 19.3283H19.1223C20.7116 19.3283 22 18.062 22 16.5C22 16.1479 21.9345 15.8109 21.815 15.5',
  d4: 'M10.5 19.5H13.5C17.2586 19.5 19.1379 19.5 20.3925 18.5091C20.5932 18.3506 20.7788 18.176 20.9472 17.9871C22 16.8062 22 15.0375 22 11.5C22 10.3169 22 9.3316 21.9606 8.5H2.03939C2 9.3316 2 10.3169 2 11.5C2 15.0375 2 16.8062 3.0528 17.9871C3.22119 18.176 3.40678 18.3506 3.60746 18.5091C4.86213 19.5 6.74142 19.5 10.5 19.5Z',
  d5: 'M18.4727 11.6977C18.8467 11.2914 19.4794 11.2652 19.8857 11.6393L21.0233 12.7326C21.0918 12.8221 21.4349 13.2798 21.1903 13.8603C20.9494 14.4318 20.3924 14.5127 20.2838 14.5278C20.1439 14.5473 19.9815 14.547 19.883 14.5468L16.7527 14.5467C15.6993 14.5467 14.875 15.3815 14.875 16.375C14.875 16.9273 14.4273 17.375 13.875 17.375C13.3227 17.375 12.875 16.9273 12.875 16.375C12.875 14.2444 14.6275 12.5467 16.7527 12.5467H18.2231C18.1718 12.251 18.2536 11.9355 18.4727 11.6977Z',
  d6: 'M21.875 15.375C22.4273 15.375 22.875 15.8227 22.875 16.375C22.875 18.5056 21.1225 20.2033 18.9973 20.2033H17.5269C17.5782 20.499 17.4964 20.8145 17.2773 21.0523C16.9033 21.4586 16.2706 21.4848 15.8643 21.1107L14.7267 20.0174C14.6582 19.9279 14.3151 19.4702 14.5597 18.8897C14.8006 18.3182 15.3576 18.2373 15.4662 18.2222C15.606 18.2027 15.7685 18.203 15.867 18.2032H15.867L18.9973 18.2033C20.0507 18.2033 20.875 17.3685 20.875 16.375C20.875 15.8227 21.3227 15.375 21.875 15.375Z',
  d7: 'M10.3275 20.125C8.48845 20.125 7.04417 20.125 5.90558 19.9964C4.74342 19.8651 3.801 19.5914 3.01763 18.9727C2.78311 18.7875 2.56568 18.5829 2.36798 18.3612C1.70181 17.614 1.40432 16.7083 1.26263 15.5972C1.12498 14.5177 1.12499 13.1517 1.125 11.4277V11.3223C1.125 10.7465 1.12499 10.2106 1.13012 9.71209C1.13295 9.4364 1.13437 9.29856 1.22204 9.21178C1.30972 9.125 1.44861 9.125 1.72639 9.125H22.0236C22.3011 9.125 22.4399 9.125 22.5276 9.21202C22.6153 9.29904 22.6164 9.43667 22.6186 9.71192C22.6224 10.186 22.6232 10.7941 22.6233 11.4912C22.6234 11.6788 22.6234 11.7726 22.6103 11.807C22.5631 11.9311 22.459 11.9732 22.3388 11.917C22.3054 11.9015 22.2245 11.818 22.0626 11.6511L20.9016 10.5358C19.8859 9.60061 18.3043 9.66592 17.3691 10.6817C17.3413 10.7119 17.3088 10.7515 17.276 10.7934C17.177 10.92 17.1275 10.9833 17.0687 11.0135C17.0099 11.0436 16.9318 11.0467 16.7757 11.053C13.4182 11.1875 11.375 13.479 11.375 16.375C11.375 17.2706 11.8459 18.0562 12.5537 18.4977C12.7857 18.6424 12.9017 18.7148 12.9395 18.7842C12.9772 18.8536 12.9749 18.9907 12.9702 19.2647C12.97 19.2778 12.9699 19.2909 12.9699 19.3039C12.9695 19.7343 12.9692 19.9495 12.8814 20.0372C12.7935 20.125 12.6193 20.125 12.2709 20.125H10.3275Z',
  d8: 'M13.4226 2.625C15.2616 2.62499 16.7058 2.62498 17.8444 2.7536C19.0066 2.88488 19.949 3.15862 20.7324 3.77729C20.9669 3.96249 21.1843 4.16705 21.382 4.3888C22.0482 5.13601 22.3457 6.04169 22.4874 7.15285C22.5037 7.2807 22.5118 7.34463 22.4972 7.40079C22.4737 7.49053 22.4049 7.56875 22.3188 7.60335C22.265 7.625 22.1976 7.625 22.0628 7.625H1.68724C1.55246 7.625 1.48507 7.625 1.43122 7.60335C1.34515 7.56875 1.27628 7.49054 1.25284 7.40079C1.23818 7.34463 1.24633 7.2807 1.26264 7.15285C1.40433 6.04169 1.70182 5.13601 2.36799 4.3888C2.56569 4.16705 2.78312 3.96249 3.01764 3.77729C3.80102 3.15862 4.74343 2.88488 5.90559 2.7536C7.04418 2.62498 8.48847 2.62499 10.3275 2.625H13.4226Z',
  d9: 'M13.4235 2.625C15.2625 2.62499 16.7067 2.62498 17.8453 2.7536C19.0075 2.88488 19.9499 3.15862 20.7333 3.77729C20.9678 3.96249 21.1852 4.16705 21.3829 4.3888C22.0491 5.13601 22.3466 6.04169 22.4883 7.15285C22.5046 7.2807 22.5127 7.34463 22.4981 7.40079C22.4746 7.49053 22.4058 7.56875 22.3197 7.60335C22.2659 7.625 22.1985 7.625 22.0637 7.625H1.68814C1.55336 7.625 1.48597 7.625 1.43212 7.60335C1.34605 7.56875 1.27718 7.49054 1.25374 7.40079C1.23908 7.34463 1.24723 7.2807 1.26354 7.15285C1.40523 6.04169 1.70272 5.13601 2.36889 4.3888C2.56659 4.16705 2.78402 3.96249 3.01854 3.77729C3.80192 3.15862 4.74433 2.88488 5.90649 2.7536C7.04508 2.62498 8.48937 2.62499 10.3284 2.625H13.4235Z',
  d10: 'M22 9.99453V2.49854H2V18.49H11',
  d11: 'M2 7.49609H22',
  d12: 'M19.5044 11.48L21.0016 13.4756V13.9784H13.9929C13.9874 13.9784 13.9829 13.9829 13.9829 13.9884V16.4907M15.4878 21.5014L13.9907 19.5058V19.003H20.9993C21.0048 19.003 21.0093 18.9985 21.0093 18.993V16.4907',
  d13: 'M20.0996 12.3477L21.75 14.5439V16.046H14.75V17.7982H13.25V15.296C13.25 14.8818 13.5858 14.546 14 14.546H19.8752L18.9004 13.2488L20.0996 12.3477ZM21.75 17.7982V20.2982C21.75 20.7124 21.4142 21.0482 21 21.0482H15.125L16.1 22.3482L14.9 23.2482L13.25 21.0482V19.5482H20.25V17.7982H21.75Z',
  d14: 'M1.25 2.5C1.25 2.08579 1.58579 1.75 2 1.75H22C22.4142 1.75 22.75 2.08579 22.75 2.5V6.75H1.25V2.5Z',
  d15: 'M1.25 8.25H22.75V13.3765L20.3976 10.2461L16.6803 13.0447H14C12.7574 13.0447 11.75 14.0521 11.75 15.2947L11.75 19.25H2C1.58579 19.25 1.25 18.9142 1.25 18.5V8.25Z',
} as const;

export const IconCreditCardChangeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-change-stroke-rounded IconCreditCardChangeStrokeRounded"
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
        strokeLinejoin="round" 
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

export const IconCreditCardChangeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-change-duotone-rounded IconCreditCardChangeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
        strokeLinejoin="round" 
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

export const IconCreditCardChangeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-change-twotone-rounded IconCreditCardChangeTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconCreditCardChangeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-change-solid-rounded IconCreditCardChangeSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconCreditCardChangeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-change-bulk-rounded IconCreditCardChangeBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardChangeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-change-stroke-sharp IconCreditCardChangeStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardChangeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-change-solid-sharp IconCreditCardChangeSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCreditCardChange: TheIconSelfPack = {
  name: 'CreditCardChange',
  StrokeRounded: IconCreditCardChangeStrokeRounded,
  DuotoneRounded: IconCreditCardChangeDuotoneRounded,
  TwotoneRounded: IconCreditCardChangeTwotoneRounded,
  SolidRounded: IconCreditCardChangeSolidRounded,
  BulkRounded: IconCreditCardChangeBulkRounded,
  StrokeSharp: IconCreditCardChangeStrokeSharp,
  SolidSharp: IconCreditCardChangeSolidSharp,
};