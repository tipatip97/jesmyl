import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 22C16.4183 22 20 18.4183 20 14C20 8 12 2 12 2C11.6117 4.48692 11.2315 5.82158 10 8C8.79908 7.4449 8.5 7 8 5.75C6 8 4 11 4 14C4 18.4183 7.58172 22 12 22Z',
  d2: 'M10 17L14 13',
  d3: 'M10 13H10.009M13.991 17H14',
  d4: 'M12.45 1.40001C12.8831 1.72485 13.3601 2.131 13.7439 2.46682C14.5104 3.13754 15.5343 4.09721 16.5606 5.25173C18.5779 7.52119 20.75 10.7037 20.75 14C20.75 18.8325 16.8325 22.75 12 22.75C7.16751 22.75 3.25 18.8325 3.25 14C3.25 10.7037 5.42215 7.52119 7.43944 5.25173C7.61213 5.05746 7.8731 4.96645 8.12915 5.01121C8.3852 5.05597 8.59982 5.23012 8.69636 5.47146C8.94564 6.09466 9.10783 6.41451 9.30773 6.64882C9.40619 6.76424 9.52614 6.87279 9.6987 6.98717C10.6012 5.26797 10.9217 4.04476 11.259 1.88432C11.2996 1.6242 11.4736 1.40442 11.7175 1.30525C11.9614 1.20608 12.2394 1.24204 12.45 1.40001ZM8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L14.2929 11.2929C14.6834 10.9024 15.3166 10.9024 15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071ZM9.01076 11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H9.01076C9.56304 13 10.0108 12.5523 10.0108 12C10.0108 11.4477 9.56304 11 9.01076 11ZM14.9892 17C14.437 17 13.9892 17.4477 13.9892 18C13.9892 18.5523 14.437 19 14.9892 19H15C15.5523 19 16 18.5523 16 18C16 17.4477 15.5523 17 15 17H14.9892Z',
  d5: 'M12.45 1.40001C12.8831 1.72485 13.3601 2.131 13.7439 2.46682C14.5104 3.13754 15.5343 4.09721 16.5606 5.25173C18.5779 7.52119 20.75 10.7037 20.75 14C20.75 18.8325 16.8325 22.75 12 22.75C7.16751 22.75 3.25 18.8325 3.25 14C3.25 10.7037 5.42215 7.52119 7.43944 5.25173C7.61213 5.05746 7.8731 4.96645 8.12915 5.01121C8.3852 5.05597 8.59982 5.23012 8.69636 5.47146C8.94564 6.09466 9.10783 6.41451 9.30773 6.64882C9.40619 6.76424 9.52614 6.87279 9.6987 6.98717C10.6012 5.26797 10.9217 4.04476 11.259 1.88432C11.2996 1.6242 11.4736 1.40442 11.7175 1.30525C11.9614 1.20608 12.2394 1.24204 12.45 1.40001Z',
  d6: 'M8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L14.2929 11.2929C14.6834 10.9024 15.3166 10.9024 15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071Z',
  d7: 'M8 12C8 11.4477 8.44772 11 9 11H9.01076C9.56304 11 10.0108 11.4477 10.0108 12C10.0108 12.5523 9.56304 13 9.01076 13H9C8.44772 13 8 12.5523 8 12ZM13.9892 18C13.9892 17.4477 14.437 17 14.9892 17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H14.9892C14.437 19 13.9892 18.5523 13.9892 18Z',
  d8: 'M9 18L15 12',
  d9: 'M9.49902 12.5H9.50799M14.4908 17.5H14.4997',
  d10: 'M9.99932 7.96255L8.00458 5.72789C5.67605 8.30418 4.07823 11.1879 4.00246 13.9893C3.89431 17.9878 7.36966 21.9996 12.0207 21.9996C16.3235 22.0438 20.0773 18.3131 20.0029 13.9331C19.9262 10.1304 16.8565 5.8798 12.1093 2.02243C12.0551 1.97841 11.9734 2.00203 11.9515 2.06842L9.99932 7.96255Z',
  d11: 'M11.6175 1.25012C11.6175 1.25012 13.3601 2.5762 13.7439 2.90478C14.5104 3.56101 15.5343 4.49997 16.5606 5.62957C18.5779 7.85004 20.75 10.9639 20.75 14.189C20.75 18.9172 16.8325 22.7501 12 22.7501C7.16751 22.7501 3.25 18.9172 3.25 14.189C3.25 10.9639 5.42215 7.85004 7.43944 5.62957L8 5.01256L9.69871 6.88236L11.6175 1.25012ZM15.5294 12.5305L9.52941 18.5305L8.46875 17.4698L14.4688 11.4698L15.5294 12.5305ZM10.509 11.5001L8.5 11.5001L8.5 13.5001L10.509 13.5001L10.509 11.5001ZM15.5007 16.5001H13.4917V18.5001H15.5007V16.5001Z',
} as const;

export const IconHotPriceStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hot-price-stroke-rounded IconHotPriceStrokeRounded"
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

export const IconHotPriceDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hot-price-duotone-rounded IconHotPriceDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconHotPriceTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hot-price-twotone-rounded IconHotPriceTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconHotPriceSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hot-price-solid-rounded IconHotPriceSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHotPriceBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hot-price-bulk-rounded IconHotPriceBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconHotPriceStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hot-price-stroke-sharp IconHotPriceStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHotPriceSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hot-price-solid-sharp IconHotPriceSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHotPrice: TheIconSelfPack = {
  name: 'HotPrice',
  StrokeRounded: IconHotPriceStrokeRounded,
  DuotoneRounded: IconHotPriceDuotoneRounded,
  TwotoneRounded: IconHotPriceTwotoneRounded,
  SolidRounded: IconHotPriceSolidRounded,
  BulkRounded: IconHotPriceBulkRounded,
  StrokeSharp: IconHotPriceStrokeSharp,
  SolidSharp: IconHotPriceSolidSharp,
};