import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.47461 6.10018L5.31543 18.1768C5.40886 19.3365 6.28178 21.5536 8.51889 21.8022C10.756 22.0507 15.2503 21.9951 16.0699 21.9951C16.8895 21.9951 19.0128 21.4136 19.0128 19.0059C19.0128 16.5756 16.9833 15.9419 15.7077 15.9635H12.0554M12.0554 15.9635C12.0607 15.7494 12.1515 15.5372 12.3278 15.3828L14.487 13.4924M12.0554 15.9635C12.0497 16.1919 12.1412 16.4224 12.33 16.5864L14.487 18.4609M19.4701 5.82422L19.0023 13.4792',
  d2: 'M3 5.49561H21M16.0555 5.49561L15.3729 4.08911C14.9194 3.15481 14.6926 2.68766 14.3015 2.39631C14.2148 2.33168 14.1229 2.2742 14.0268 2.22442C13.5937 2 13.0739 2 12.0343 2C10.9686 2 10.4358 2 9.99549 2.23383C9.89791 2.28565 9.80479 2.34547 9.7171 2.41265C9.32145 2.7158 9.10044 3.20004 8.65842 4.16854L8.05273 5.49561',
  d3: 'M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5H19.5Z',
  d4: 'M4.5 5.5L5.08671 15.1781C5.26178 18.066 5.34932 19.5099 6.14772 20.5018C6.38232 20.7932 6.65676 21.0505 6.96304 21.2662C8.00537 22 9.45801 22 12.3633 22H15.9867C17.4593 22 18.7162 20.9398 18.9583 19.4932C19.2643 17.6646 17.8483 16 15.9867 16H13.0357',
  d5: 'M14.5 18.5C13.9943 18.0085 12 16.7002 12 16C12 15.2998 13.9943 13.9915 14.5 13.5',
  d6: 'M21 5.5H3',
  d7: 'M16.0575 5.5L15.3748 4.09173C14.9213 3.15626 14.6946 2.68852 14.3035 2.39681C14.2167 2.3321 14.1249 2.27454 14.0288 2.2247C13.5957 2 13.0759 2 12.0363 2C10.9706 2 10.4377 2 9.99745 2.23412C9.89986 2.28601 9.80675 2.3459 9.71906 2.41317C9.3234 2.7167 9.10239 3.20155 8.66037 4.17126L8.05469 5.5',
  d8: 'M19 13.5L19.5 5.5',
  d9: 'M13.3473 1.28277C13.9124 1.33331 14.4435 1.50576 14.8996 1.84591C15.2369 2.09748 15.4712 2.40542 15.6714 2.73893C15.8569 3.04798 16.0437 3.4333 16.2555 3.8704L16.6823 4.7507H21C21.5523 4.7507 22 5.19842 22 5.7507C22 6.30299 21.5523 6.7507 21 6.7507C14.9998 6.7507 9.00019 6.7507 3 6.7507C2.44772 6.7507 2 6.30299 2 5.7507C2 5.19842 2.44772 4.7507 3 4.7507H7.40976L7.76556 3.97016C7.97212 3.51696 8.15403 3.11782 8.33676 2.79754C8.53387 2.45207 8.76721 2.13237 9.10861 1.87046C9.57032 1.51626 10.1121 1.33669 10.6899 1.28409C11.1249 1.24449 11.5634 1.24994 12 1.25064C12.5108 1.25146 12.97 1.24902 13.3473 1.28277ZM9.60776 4.7507H14.4597C14.233 4.28331 14.088 3.98707 13.9566 3.7682C13.7643 3.44787 13.5339 3.30745 13.1691 3.27482C12.9098 3.25163 12.5719 3.2507 12.0345 3.2507C11.4837 3.2507 11.137 3.25166 10.8712 3.27585C10.4971 3.30991 10.2639 3.45568 10.0739 3.78866C9.94941 4.00687 9.81387 4.29897 9.60776 4.7507Z',
  d10: 'M19.5262 16.5563C19.48 17.2608 19.457 17.6131 19.3256 17.6538C19.1941 17.6945 18.951 17.3851 18.4646 16.7663C17.6548 15.7361 16.4288 15.0561 15 15.0458L15 13.8397C15.0009 13.3494 14.8715 12.856 14.3955 12.6147C13.7187 12.2715 13.2059 12.7486 12.7217 13.1494C12.0856 13.6761 11.4059 14.2073 10.9179 14.8824C10.7505 15.1141 10.5 15.515 10.5 16.0002C10.5 16.4853 10.7505 16.8863 10.9179 17.1179C11.4059 17.7931 12.0856 18.3242 12.7217 18.8509C13.2025 19.249 13.7306 19.7228 14.3955 19.3857C14.8824 19.1388 15.0006 18.6361 15 18.1384V17.046C16.4914 17.0669 17.7342 18.5145 17.4633 20.2298C17.2399 21.6445 16.4446 22.6153 15.0531 22.75L8.92739 22.7499C8.1135 22.671 7.42972 22.5061 6.8176 22.129C6.25763 21.7841 5.77494 21.3251 5.40028 20.7813C4.99073 20.1869 4.78656 19.5075 4.65957 18.6917C4.53574 17.8962 4.47623 16.9003 4.40122 15.6453L3.75 4.75H20.25L19.5825 15.6564C19.5631 15.9725 19.5448 16.2721 19.5262 16.5563Z',
  d11: 'M2 5.49348H8M8 5.49348L9.5 2H14.5L16 5.49348M8 5.49348H16M22 5.49348H16',
  d12: 'M4.43896 5.55445L5.50726 22H16.0259C19.663 22 20.9154 15.9713 14.9576 15.9713H12.282M14.9576 12.9861L11.9237 15.9713L14.9576 18.9528M19.5063 5.48569L19.0547 12.9668',
  d13: 'M8.58085 1.85608C8.73843 1.4884 9.09997 1.25 9.5 1.25H14.5C14.9 1.25 15.2616 1.4884 15.4191 1.85608L16.6594 4.75H22V6.75H2V4.75H7.3406L8.58085 1.85608ZM9.51654 4.75H14.4835L13.8406 3.25H10.1594L9.51654 4.75Z',
  d14: 'M3.95582 4.98596C4.09755 4.83538 4.29516 4.75 4.50195 4.75H19.502C19.7087 4.75 19.9064 4.83538 20.0481 4.98596C20.1898 5.13654 20.2631 5.33896 20.2506 5.54537L19.4825 18.2181C18.8559 16.487 17.1974 15.25 15.25 15.25H12.8107L14.0303 14.0303L12.9697 12.9697L9.93934 16L12.9697 19.0303L14.0303 17.9697L12.8107 16.75H15.25C16.9069 16.75 18.25 18.0931 18.25 19.75C18.25 21.4069 16.9069 22.75 15.25 22.75H5.50195C5.10536 22.75 4.77732 22.4412 4.75333 22.0454L3.75333 5.54537C3.74082 5.33896 3.81409 5.13654 3.95582 4.98596Z',
} as const;

export const IconDeletePutBackStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delete-put-back-stroke-rounded IconDeletePutBackStrokeRounded"
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

export const IconDeletePutBackDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delete-put-back-duotone-rounded IconDeletePutBackDuotoneRounded"
    >
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDeletePutBackTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delete-put-back-twotone-rounded IconDeletePutBackTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDeletePutBackSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delete-put-back-solid-rounded IconDeletePutBackSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconDeletePutBackBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delete-put-back-bulk-rounded IconDeletePutBackBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDeletePutBackStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delete-put-back-stroke-sharp IconDeletePutBackStrokeSharp"
    >
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

export const IconDeletePutBackSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delete-put-back-solid-sharp IconDeletePutBackSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfDeletePutBack: TheIconSelfPack = {
  name: 'DeletePutBack',
  StrokeRounded: IconDeletePutBackStrokeRounded,
  DuotoneRounded: IconDeletePutBackDuotoneRounded,
  TwotoneRounded: IconDeletePutBackTwotoneRounded,
  SolidRounded: IconDeletePutBackSolidRounded,
  BulkRounded: IconDeletePutBackBulkRounded,
  StrokeSharp: IconDeletePutBackStrokeSharp,
  SolidSharp: IconDeletePutBackSolidSharp,
};