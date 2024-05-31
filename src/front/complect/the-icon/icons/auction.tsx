import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 14.0059L5.84373 21.2328C5.01764 22.2026 3.54001 22.2616 2.63922 21.3608C1.73843 20.46 1.79744 18.9824 2.7672 18.1563L9.99412 12',
  d2: 'M22 11.9048L15.9048 18M12.0952 2L6 8.09524M11.3334 2.76186L6.76195 7.33329C6.76195 7.33329 9.04766 10.3809 11.3334 12.6666C13.6191 14.9523 16.6667 17.2381 16.6667 17.2381L21.2381 12.6666C21.2381 12.6666 18.9524 9.61901 16.6667 7.33329C14.381 5.04758 11.3334 2.76186 11.3334 2.76186Z',
  d3: 'M11.3334 2.76186C11.3334 2.76186 14.381 5.04758 16.6667 7.33329C18.9524 9.61901 21.2381 12.6666 21.2381 12.6666L16.6667 17.2381C16.6667 17.2381 13.6191 14.9523 11.3334 12.6666C9.04766 10.3809 6.76195 7.33329 6.76195 7.33329L11.3334 2.76186Z',
  d4: 'M21.999 11.9048L15.9038 18M12.0943 2L5.99902 8.09524M11.3324 2.76186L6.76097 7.33329C6.76097 7.33329 9.04668 10.3809 11.3324 12.6666C13.6181 14.9523 16.6657 17.2381 16.6657 17.2381L21.2372 12.6666C21.2372 12.6666 18.9514 9.61901 16.6657 7.33329C14.38 5.04758 11.3324 2.76186 11.3324 2.76186Z',
  d5: 'M8.55434 13.0095C8.36634 12.8038 8.27235 12.7009 8.15137 12.6934C8.0304 12.6858 7.92527 12.7754 7.715 12.9545L2.28085 17.5836C0.977826 18.6935 0.898535 20.679 2.10889 21.8893C3.31925 23.0997 5.30468 23.0204 6.41467 21.7174L11.0438 16.2832C11.2229 16.073 11.3124 15.9678 11.3049 15.8469C11.2973 15.7259 11.1945 15.6319 10.9888 15.4439C10.5659 15.0574 10.1444 14.6578 9.74239 14.2558C9.34039 13.8538 8.94082 13.4323 8.55434 13.0095Z',
  d6: 'M12.6256 1.46967C12.9185 1.76256 12.9185 2.23744 12.6256 2.53033L12.4672 2.68871C12.7753 2.93001 13.1709 3.24429 13.6178 3.60997C14.6738 4.47391 16.0288 5.6347 17.197 6.80296C18.3653 7.97123 19.5261 9.32625 20.39 10.3822C20.7557 10.8291 21.07 11.2247 21.3113 11.5328L21.4697 11.3744C21.7626 11.0815 22.2374 11.0815 22.5303 11.3744C22.8232 11.6673 22.8232 12.1422 22.5303 12.4351L16.4351 18.5303C16.1422 18.8232 15.6673 18.8232 15.3744 18.5303C15.0815 18.2374 15.0815 17.7626 15.3744 17.4697L15.5329 17.3112C15.2247 17.0699 14.8292 16.7556 14.3823 16.39C13.3263 15.526 11.9713 14.3652 10.803 13.197C9.63478 12.0287 8.47399 10.6737 7.61005 9.61775C7.24437 9.1708 6.93009 8.77526 6.68879 8.46711L6.53033 8.62557C6.23744 8.91846 5.76256 8.91846 5.46967 8.62557C5.17678 8.33268 5.17678 7.8578 5.46967 7.56491L11.5649 1.46967C11.8578 1.17678 12.3327 1.17678 12.6256 1.46967Z',
  d7: 'M9.50098 11.5L2.00098 19L5.00098 22L12.501 14.5',
  d8: 'M22 11.9039L14.9042 18.9997M12.0952 1.99976L5 9.09495M10.8346 3.26162C10.8346 3.26162 13.8822 5.54733 16.1679 7.83305C18.4537 10.1188 20.7394 13.1664 20.7394 13.1664M16.1679 17.7378C16.1679 17.7378 13.1203 15.4521 10.8346 13.1664C8.5489 10.8807 6.26318 7.83305 6.26318 7.83305',
  d9: 'M4.50195 8.41834L11.6703 1.25L12.7419 2.3216L12.0773 2.98622C12.3887 3.23008 12.7886 3.54779 13.2405 3.91752C14.3073 4.79037 15.6763 5.96313 16.8566 7.14344C18.0369 8.32375 19.2097 9.69274 20.0825 10.7595C20.4516 11.2106 20.7688 11.6098 21.0125 11.921L21.6772 11.2563L22.7488 12.3279L15.5799 19.4968L14.5083 18.4252L15.1743 17.7592C14.8631 17.5155 14.4639 17.1983 14.0128 16.8293C12.946 15.9564 11.577 14.7837 10.3967 13.6034C9.21641 12.423 8.04365 11.0541 7.1708 9.98724C6.80106 9.53534 6.48334 9.13544 6.23948 8.82401L5.57354 9.48994L4.50195 8.41834Z',
  d10: 'M7.36074 12.5378L1.47291 18.4257C1.177 18.7216 1.177 19.2014 1.47291 19.4973L4.50384 22.5282C4.64594 22.6703 4.83868 22.7501 5.03964 22.7501C5.2406 22.7501 5.43333 22.6703 5.57544 22.5282L11.4634 16.6402C10.7562 16.0225 10.0178 15.3467 9.33508 14.664C8.65308 13.982 7.97799 13.2443 7.36074 12.5378Z',
} as const;

export const IconAuctionStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="auction-stroke-rounded IconAuctionStrokeRounded"
    >
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAuctionDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="auction-duotone-rounded IconAuctionDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconAuctionTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="auction-twotone-rounded IconAuctionTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconAuctionSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="auction-solid-rounded IconAuctionSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAuctionBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="auction-bulk-rounded IconAuctionBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAuctionStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="auction-stroke-sharp IconAuctionStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAuctionSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="auction-solid-sharp IconAuctionSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAuction: TheIconSelfPack = {
  name: 'Auction',
  StrokeRounded: IconAuctionStrokeRounded,
  DuotoneRounded: IconAuctionDuotoneRounded,
  TwotoneRounded: IconAuctionTwotoneRounded,
  SolidRounded: IconAuctionSolidRounded,
  BulkRounded: IconAuctionBulkRounded,
  StrokeSharp: IconAuctionStrokeSharp,
  SolidSharp: IconAuctionSolidSharp,
};