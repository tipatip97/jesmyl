import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5',
  d2: 'M9.5 12.5C9.99153 11.9943 11.2998 10 12 10M14.5 12.5C14.0085 11.9943 12.7002 10 12 10M12 10V18',
  d3: 'M3 5.5H21M16.0555 5.5L15.3729 4.09173C14.9194 3.15626 14.6926 2.68852 14.3015 2.39681C14.2148 2.3321 14.1229 2.27454 14.0268 2.2247C13.5937 2 13.0739 2 12.0343 2C10.9686 2 10.4358 2 9.99549 2.23412C9.89791 2.28601 9.80479 2.3459 9.7171 2.41317C9.32145 2.7167 9.10044 3.20155 8.65842 4.17126L8.05273 5.5',
  d4: 'M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5H19.5Z',
  d5: 'M21 5.5H3',
  d6: 'M16.0575 5.5L15.3748 4.09173C14.9213 3.15626 14.6946 2.68852 14.3035 2.39681C14.2167 2.3321 14.1249 2.27454 14.0288 2.2247C13.5957 2 13.0759 2 12.0363 2C10.9706 2 10.4377 2 9.99745 2.23412C9.89986 2.28601 9.80675 2.3459 9.71906 2.41317C9.3234 2.7167 9.10239 3.20155 8.66037 4.17126L8.05469 5.5',
  d7: 'M13.3473 1.28277C13.9124 1.33331 14.4435 1.50576 14.8996 1.84591C15.2369 2.09748 15.4712 2.40542 15.6714 2.73893C15.8569 3.04798 16.0437 3.4333 16.2555 3.8704L16.6823 4.7507H21C21.5523 4.7507 22 5.19842 22 5.7507C22 6.30299 21.5523 6.7507 21 6.7507C14.9998 6.7507 9.00019 6.7507 3 6.7507C2.44772 6.7507 2 6.30299 2 5.7507C2 5.19842 2.44772 4.7507 3 4.7507H7.40976L7.76556 3.97016C7.97212 3.51696 8.15403 3.11782 8.33676 2.79754C8.53387 2.45207 8.76721 2.13237 9.10861 1.87046C9.57032 1.51626 10.1121 1.33669 10.6899 1.28409C11.1249 1.24449 11.5634 1.24994 12 1.25064C12.5108 1.25146 12.97 1.24902 13.3473 1.28277ZM9.60776 4.7507H14.4597C14.233 4.28331 14.088 3.98707 13.9566 3.7682C13.7643 3.44787 13.5339 3.30745 13.1691 3.27482C12.9098 3.25163 12.5719 3.2507 12.0345 3.2507C11.4837 3.2507 11.137 3.25166 10.8712 3.27585C10.4971 3.30991 10.2639 3.45568 10.0739 3.78866C9.94941 4.00687 9.81387 4.29897 9.60776 4.7507Z',
  d8: 'M19.3202 18.6984C19.4449 17.9041 19.5058 16.9096 19.5825 15.6564L20.25 4.75H3.75L4.40122 15.6453C4.47623 16.9003 4.53574 17.8962 4.65957 18.6917C4.78656 19.5075 4.99073 20.1869 5.40028 20.7813C5.77494 21.3251 6.25763 21.7841 6.8176 22.129C7.42972 22.5061 8.1135 22.671 8.92739 22.7499L15.0531 22.75C15.8661 22.6713 16.5491 22.5067 17.1608 22.1303C17.7204 21.786 18.2029 21.3278 18.5777 20.7849C18.9874 20.1915 19.1922 19.5131 19.3202 18.6984ZM11.9997 9.25C11.6457 9.25 11.3473 9.41814 11.1548 9.55057C10.9431 9.69624 10.7388 9.88452 10.5543 10.0742C10.1847 10.4541 9.78969 10.9546 9.49388 11.3319C9.18362 11.7274 8.83277 12.1892 9.08795 12.7153C9.34172 13.2385 9.91556 13.2502 10.4157 13.25L11.2497 13.25V17.0005C11.2497 17.4147 11.5855 17.7505 11.9997 17.7505C12.4139 17.7505 12.7497 17.4147 12.7497 17.0005V13.25L13.5837 13.25C14.0838 13.2502 14.6576 13.2385 14.9114 12.7153C15.1665 12.1893 14.8157 11.7273 14.5055 11.332C14.2097 10.9546 13.8146 10.4541 13.445 10.0742C13.2605 9.88452 13.0562 9.69624 12.8445 9.55057C12.652 9.41814 12.3536 9.25 11.9997 9.25Z',
  d9: 'M19.5825 15.6564C19.5058 16.9096 19.4449 17.9041 19.3202 18.6984C19.1922 19.5131 18.9874 20.1915 18.5777 20.7849C18.2029 21.3278 17.7204 21.786 17.1608 22.1303C16.5491 22.5067 15.8661 22.6713 15.0531 22.75L8.92739 22.7499C8.1135 22.671 7.42972 22.5061 6.8176 22.129C6.25763 21.7841 5.77494 21.3251 5.40028 20.7813C4.99073 20.1869 4.78656 19.5075 4.65957 18.6917C4.53574 17.8962 4.47623 16.9003 4.40122 15.6453L3.75 4.75H20.25L19.5825 15.6564Z',
  d10: 'M11.1548 9.55057C11.3473 9.41814 11.6457 9.25 11.9997 9.25C12.3536 9.25 12.652 9.41814 12.8445 9.55057C13.0562 9.69624 13.2605 9.88452 13.445 10.0742C13.8146 10.4541 14.2097 10.9546 14.5055 11.332C14.8157 11.7273 15.1665 12.1893 14.9114 12.7153C14.6576 13.2385 14.0838 13.2502 13.5837 13.25L12.7497 13.25V17.0005C12.7497 17.4147 12.4139 17.7505 11.9997 17.7505C11.5855 17.7505 11.2497 17.4147 11.2497 17.0005V13.25L10.4157 13.25C9.91556 13.2502 9.34172 13.2385 9.08795 12.7153C8.83277 12.1892 9.18362 11.7274 9.49388 11.3319C9.78969 10.9546 10.1847 10.4541 10.5543 10.0742C10.7388 9.88452 10.9431 9.69624 11.1548 9.55057Z',
  d11: 'M9 13L12 10L15 13M12 18V10.4733',
  d12: 'M19.5 5.5L18.5 22H5.5L4.5 5.5',
  d13: 'M2 5.5H8M22 5.5H16M16 5.5L14.5 2H9.5L8 5.5M16 5.5H8',
  d14: 'M3.95387 4.98596C4.0956 4.83538 4.29321 4.75 4.5 4.75H19.5C19.7068 4.75 19.9044 4.83538 20.0461 4.98596C20.1879 5.13654 20.2611 5.33896 20.2486 5.54537L19.2486 22.0454C19.2246 22.4412 18.8966 22.75 18.5 22.75H5.5C5.10341 22.75 4.77537 22.4412 4.75138 22.0454L3.75138 5.54537C3.73887 5.33896 3.81213 5.13654 3.95387 4.98596ZM15.5294 13.4697L11.9991 9.93933L8.46875 13.4697L9.52941 14.5303L11.2491 12.8107V19H12.7491V12.8107L14.4688 14.5303L15.5294 13.4697Z',
  d15: 'M8.58085 1.85608C8.73843 1.4884 9.09997 1.25 9.5 1.25H14.5C14.9 1.25 15.2616 1.4884 15.4191 1.85608L16.6594 4.75H22V6.75H2V4.75H7.3406L8.58085 1.85608ZM9.51654 4.75H14.4835L13.8406 3.25H10.1594L9.51654 4.75Z',
} as const;

export const IconDeleteThrowStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delete-throw-stroke-rounded IconDeleteThrowStrokeRounded"
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
        strokeLinejoin="round" 
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

export const IconDeleteThrowDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delete-throw-duotone-rounded IconDeleteThrowDuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
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

export const IconDeleteThrowTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delete-throw-twotone-rounded IconDeleteThrowTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconDeleteThrowSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delete-throw-solid-rounded IconDeleteThrowSolidRounded"
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

export const IconDeleteThrowBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delete-throw-bulk-rounded IconDeleteThrowBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDeleteThrowStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delete-throw-stroke-sharp IconDeleteThrowStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconDeleteThrowSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delete-throw-solid-sharp IconDeleteThrowSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDeleteThrow: TheIconSelfPack = {
  name: 'DeleteThrow',
  StrokeRounded: IconDeleteThrowStrokeRounded,
  DuotoneRounded: IconDeleteThrowDuotoneRounded,
  TwotoneRounded: IconDeleteThrowTwotoneRounded,
  SolidRounded: IconDeleteThrowSolidRounded,
  BulkRounded: IconDeleteThrowBulkRounded,
  StrokeSharp: IconDeleteThrowStrokeSharp,
  SolidSharp: IconDeleteThrowSolidSharp,
};