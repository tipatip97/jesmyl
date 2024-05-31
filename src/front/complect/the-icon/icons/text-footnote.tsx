import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.75 5.8877L19.7494 8.7232M19.7494 8.7232L22 7.70588M19.7494 8.7232L17.5 7.70588M19.7494 8.7232L17.95 10.8877M19.7494 8.7232L21.55 10.8877',
  d2: 'M12 21.0015H6',
  d3: 'M16 5.99756C16 5.3406 16 5.01212 15.9194 4.72427C15.7518 4.12555 15.3066 3.60978 14.7541 3.37454C14.4886 3.26144 14.1885 3.22937 13.5884 3.16524C12.1695 3.0136 10.3874 2.99756 9 2.99756C7.61262 2.99756 5.83047 3.0136 4.41161 3.16524C3.8115 3.22937 3.51144 3.26144 3.24586 3.37454C2.69344 3.60978 2.24816 4.12555 2.08057 4.72427C2 5.01212 2 5.3406 2 5.99756',
  d4: 'M9 3.34961L9 21.0013',
  d5: 'M12 21H6M9 3V21M9 3C7.61262 3 5.83047 3.14718 4.41161 3.29216C3.8115 3.35347 3.51144 3.38413 3.24586 3.49226C2.69344 3.71716 2.24816 4.21026 2.08057 4.78267C2 5.05787 2 5.37191 2 6M9 3C10.3874 3 12.1695 3.14718 13.5884 3.29216C14.1885 3.35347 14.4886 3.38413 14.7541 3.49226C15.3066 3.71716 15.7518 4.21026 15.9194 4.78267C16 5.05787 16 5.37191 16 6',
  d6: 'M19.75 6L19.7494 8.8355M19.7494 8.8355L22 7.81818M19.7494 8.8355L17.5 7.81818M19.7494 8.8355L17.95 11M19.7494 8.8355L21.55 11',
  d7: 'M12 21H6',
  d8: 'M16 6C16 5.37191 16 5.05787 15.9194 4.78267C15.7518 4.21026 15.3066 3.71716 14.7541 3.49226C14.4886 3.38413 14.1885 3.35347 13.5884 3.29216C12.1695 3.14718 10.3874 3 9 3C7.61262 3 5.83047 3.14718 4.41161 3.29216C3.8115 3.35347 3.51144 3.38413 3.24586 3.49226C2.69344 3.71716 2.24816 4.21026 2.08057 4.78267C2 5.05787 2 5.37191 2 6',
  d9: 'M9 3.34863L9 21.0003',
  d10: 'M8.00016 4.02187C6.86529 4.06724 5.59384 4.17658 4.51342 4.28698C3.85381 4.35437 3.72459 4.37712 3.62309 4.41844C3.35311 4.52836 3.12235 4.78389 3.04045 5.06365C3.00991 5.16796 3.00016 5.30827 3.00016 6C3.00016 6.55228 2.55245 7 2.00016 7C1.44788 7 1.00016 6.55228 1.00016 6C1.00016 5.96303 1.00012 5.92639 1.00008 5.89007C0.99949 5.37184 0.998973 4.91856 1.12102 4.50169C1.37429 3.63663 2.03411 2.90596 2.86895 2.56607C3.27109 2.40235 3.70933 2.35808 4.20703 2.30779C4.24112 2.30435 4.27548 2.30087 4.31013 2.29733C5.73474 2.15178 7.5591 2 9.00016 2C10.4412 2 12.2656 2.15178 13.6902 2.29733C13.7248 2.30087 13.7592 2.30435 13.7933 2.30779C14.291 2.35808 14.7292 2.40235 15.1314 2.56607C15.9662 2.90596 16.626 3.63663 16.8793 4.50169C17.0014 4.91856 17.0008 5.37184 17.0002 5.89007C17.0002 5.92639 17.0002 5.96303 17.0002 6C17.0002 6.55228 16.5524 7 16.0002 7C15.4479 7 15.0002 6.55228 15.0002 6C15.0002 5.30827 14.9904 5.16796 14.9599 5.06365C14.878 4.78389 14.6472 4.52836 14.3772 4.41844C14.2757 4.37712 14.1465 4.35437 13.4869 4.28698C12.4065 4.17658 11.135 4.06724 10.0002 4.02187V20H12.0002C12.5524 20 13.0002 20.4477 13.0002 21C13.0002 21.5523 12.5524 22 12.0002 22H6.00016C5.44788 22 5.00016 21.5523 5.00016 21C5.00016 20.4477 5.44788 20 6.00016 20H8.00016V4.02187Z',
  d11: 'M19.7505 6C20.3027 6.00012 20.7504 6.44793 20.7502 7.00022L20.75 8.28591L21.5884 7.90695C22.0916 7.67947 22.684 7.90303 22.9115 8.40629C23.139 8.90955 22.9154 9.50193 22.4121 9.72941L21.3584 10.2057L22.319 11.3605C22.6722 11.7851 22.6144 12.4156 22.1898 12.7688C21.7652 13.122 21.1347 13.0641 20.7815 12.6395L19.7499 11.3995L18.7192 12.6393C18.3662 13.064 17.7357 13.122 17.311 12.769C16.8863 12.4159 16.8282 11.7854 17.1813 11.3607L18.1415 10.2057L17.0882 9.72933C16.585 9.50174 16.3615 8.90932 16.5891 8.4061C16.8167 7.90289 17.4091 7.67945 17.9123 7.90703L18.75 8.28587L18.7502 6.99978C18.7504 6.4475 19.1982 5.99988 19.7505 6Z',
  d12: 'M16.0001 6.00785V3.00002L2 3L2.00008 6.00785',
  d13: 'M19.75 6.00781L19.7494 8.85071M19.7494 8.85071L22 7.83074M19.7494 8.85071L17.5 7.83074M19.7494 8.85071L17.95 11.0209M19.7494 8.85071L21.55 11.0209',
  d14: 'M9.04465 3.67188V21.0041M9.04465 21.0041H11.9523M9.04465 21.0041H6.01953',
  d15: 'M8.25 20V3H10.25V20H12.25V22H6.25V20H8.25Z',
  d16: 'M1.54288 2.2929C1.73042 2.10536 1.98478 2 2.25 2L16.2501 2.00002C16.8024 2.00002 17.2501 2.44773 17.2501 3.00002V6.00002H15.2501V4.00002L3.25003 4L3.25008 5.99999L1.25008 6.00004L1.25 3.00003C1.24999 2.73481 1.35535 2.48044 1.54288 2.2929Z',
  d17: 'M19.0876 7.28609L19.0879 6L21.0879 6.00044L21.0876 7.28613L21.926 6.90717L22.7498 8.72963L21.696 9.20594L22.6566 10.3607L21.1191 11.6397L20.0875 10.3997L19.0568 11.6395L17.5189 10.3609L18.4791 9.20591L17.4258 8.72955L18.2499 6.90725L19.0876 7.28609Z',
} as const;

export const IconTextFootnoteStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-footnote-stroke-rounded IconTextFootnoteStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextFootnoteDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-footnote-duotone-rounded IconTextFootnoteDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextFootnoteTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-footnote-twotone-rounded IconTextFootnoteTwotoneRounded"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextFootnoteSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-footnote-solid-rounded IconTextFootnoteSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTextFootnoteBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-footnote-bulk-rounded IconTextFootnoteBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTextFootnoteStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-footnote-stroke-sharp IconTextFootnoteStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconTextFootnoteSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-footnote-solid-sharp IconTextFootnoteSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTextFootnote: TheIconSelfPack = {
  name: 'TextFootnote',
  StrokeRounded: IconTextFootnoteStrokeRounded,
  DuotoneRounded: IconTextFootnoteDuotoneRounded,
  TwotoneRounded: IconTextFootnoteTwotoneRounded,
  SolidRounded: IconTextFootnoteSolidRounded,
  BulkRounded: IconTextFootnoteBulkRounded,
  StrokeSharp: IconTextFootnoteStrokeSharp,
  SolidSharp: IconTextFootnoteSolidSharp,
};