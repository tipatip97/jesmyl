import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.5 20.4989C10.7011 20.4954 9.90159 20.4836 9.09883 20.4634C5.95033 20.3843 4.37608 20.3448 3.24496 19.2094C2.11383 18.0739 2.08114 16.5412 2.01577 13.4756C1.99475 12.4899 1.99474 11.5101 2.01576 10.5244C2.08114 7.45885 2.11382 5.92608 3.24495 4.79065C4.37608 3.65521 5.95033 3.61566 9.09882 3.53656C11.0393 3.48781 12.9607 3.48781 14.9012 3.53657C18.0497 3.61568 19.6239 3.65523 20.7551 4.79066C21.8862 5.92609 21.9189 7.45886 21.9842 10.5244C22.0019 11.3514 22.0047 12.1744 21.9928 13.0001',
  d2: 'M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5',
  d3: 'M14 17.5H22',
  d4: 'M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z',
  d5: 'M8.95499 2.7868C10.908 2.73773 12.842 2.73773 14.795 2.7868L14.8532 2.78826C16.378 2.82655 17.605 2.85736 18.5883 3.02861C19.6178 3.2079 20.4545 3.55178 21.1614 4.26134C21.8653 4.96792 22.2074 5.79261 22.3832 6.80541C22.5507 7.76979 22.5762 8.96682 22.6078 10.4497L22.6091 10.5084C22.6303 11.5047 22.6303 12.4953 22.6091 13.4916L22.6078 13.5503L22.6078 13.5509C22.6016 13.8437 22.5956 14.1253 22.5887 14.3962C22.5817 14.6702 22.5782 14.8072 22.5166 14.8854C22.4975 14.9098 22.485 14.9219 22.4602 14.9405C22.3804 15 22.2119 15 21.875 15H13.875C12.4943 15 11.375 16.1193 11.375 17.5C11.375 18.8807 12.4943 20 13.875 20H19.2154C19.8652 20 20.1902 20 20.229 20.2548C20.2679 20.5096 19.9851 20.5979 19.4194 20.7745C19.1569 20.8564 18.8804 20.9205 18.5883 20.9714C17.605 21.1426 16.378 21.1735 14.8532 21.2117L14.795 21.2132C12.842 21.2623 10.908 21.2623 8.95499 21.2132L8.89677 21.2117C7.37197 21.1735 6.14501 21.1426 5.1617 20.9714C4.1322 20.7921 3.29548 20.4482 2.58862 19.7387C1.88472 19.0321 1.54264 18.2074 1.36676 17.1946C1.19929 16.2302 1.17379 15.0332 1.14219 13.5503L1.14094 13.4916C1.11969 12.4953 1.11969 11.5047 1.14093 10.5084L1.14219 10.4496C1.17378 8.9668 1.19929 7.76977 1.36676 6.8054C1.54264 5.79259 1.88471 4.9679 2.58862 4.26132C3.29548 3.55177 4.1322 3.20789 5.1617 3.0286C6.14502 2.85735 7.372 2.82654 8.89682 2.78826L8.95499 2.7868ZM7.25682 7.85439C6.90027 7.64358 6.44033 7.76174 6.22952 8.11829C6.01871 8.47485 6.13686 8.93479 6.49341 9.1456L9.43543 10.885C10.3063 11.3999 11.0577 11.75 11.8751 11.75C12.6925 11.75 13.444 11.3999 14.3148 10.885L17.2568 9.1456C17.6134 8.93479 17.7315 8.47485 17.5207 8.11829C17.3099 7.76174 16.85 7.64358 16.4934 7.85439L13.5514 9.59382C12.707 10.093 12.2581 10.25 11.8751 10.25C11.4921 10.25 11.0432 10.093 10.1988 9.59382L7.25682 7.85439Z',
  d6: 'M12.875 17.5C12.875 16.9477 13.3227 16.5 13.875 16.5H21.875C22.4273 16.5 22.875 16.9477 22.875 17.5C22.875 18.0523 22.4273 18.5 21.875 18.5H13.875C13.3227 18.5 12.875 18.0523 12.875 17.5Z',
  d7: 'M14.795 2.78681C12.842 2.73773 10.908 2.73773 8.95499 2.7868L8.89682 2.78826C7.372 2.82655 6.14502 2.85735 5.1617 3.0286C4.1322 3.20789 3.29548 3.55177 2.58862 4.26132C1.88471 4.9679 1.54264 5.7926 1.36676 6.8054C1.19929 7.76978 1.17378 8.9668 1.14219 10.4496L1.14093 10.5084C1.11969 11.5047 1.11969 12.4953 1.14094 13.4916L1.14219 13.5504C1.17379 15.0332 1.19929 16.2302 1.36676 17.1946C1.54264 18.2074 1.88472 19.0321 2.58862 19.7387C3.29548 20.4482 4.1322 20.7921 5.1617 20.9714C6.14501 21.1426 7.37197 21.1735 8.89677 21.2117L8.95499 21.2132C10.908 21.2623 12.842 21.2623 14.795 21.2132L14.8532 21.2117C16.378 21.1735 17.605 21.1426 18.5883 20.9714C18.8804 20.9205 19.1569 20.8564 19.4194 20.7745C19.9851 20.5979 20.2679 20.5096 20.229 20.2548C20.1902 20 19.8652 20 19.2154 20H13.875C12.4943 20 11.375 18.8807 11.375 17.5C11.375 16.1193 12.4943 15 13.875 15H21.875C22.2119 15 22.3804 15 22.4602 14.9405C22.485 14.9219 22.4975 14.9098 22.5166 14.8855C22.5782 14.8072 22.5817 14.6702 22.5887 14.3962C22.5956 14.1251 22.6016 13.8433 22.6078 13.5503L22.6091 13.4916C22.6303 12.4953 22.6303 11.5047 22.6091 10.5084L22.6078 10.4497C22.5762 8.96683 22.5507 7.76979 22.3832 6.80542C22.2074 5.79261 21.8653 4.96792 21.1614 4.26134C20.4545 3.55179 19.6178 3.20791 18.5883 3.02862C17.605 2.85737 16.378 2.82656 14.8532 2.78827L14.795 2.78681Z',
  d8: 'M6.01435 7.99122C6.29543 7.51581 6.90869 7.35828 7.3841 7.63935L10.3261 9.37878C11.1664 9.87562 11.5648 10.0002 11.8752 10.0002C12.1855 10.0002 12.5839 9.87562 13.4242 9.37878L16.3662 7.63935C16.8416 7.35828 17.4549 7.51581 17.736 7.99122C18.017 8.46663 17.8595 9.07988 17.3841 9.36096L14.4421 11.1004C13.5666 11.618 12.7648 12.0002 11.8752 12.0002C10.9855 12.0002 10.1838 11.618 9.30823 11.1004L6.36622 9.36096C5.89081 9.07988 5.73328 8.46663 6.01435 7.99122Z',
  d9: 'M22 14.5V3.5H2V20.5H12',
  d10: 'M6 8L12 12L18 8',
  d11: 'M1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H22C22.4142 2.75 22.75 3.08579 22.75 3.5V16.25H13.5V21.25H2C1.58579 21.25 1.25 20.9142 1.25 20.5V3.5ZM6.41603 7.37598L5.58398 8.62405L12 12.9014L18.416 8.62405L17.584 7.37598L12 11.0986L6.41603 7.37598Z',
  d12: 'M22.75 19.5H14.75V17.5H22.75V19.5Z',
} as const;

export const IconMailMinus02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-minus-02-stroke-rounded IconMailMinus02StrokeRounded"
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

export const IconMailMinus02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-minus-02-duotone-rounded IconMailMinus02DuotoneRounded"
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

export const IconMailMinus02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-minus-02-twotone-rounded IconMailMinus02TwotoneRounded"
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

export const IconMailMinus02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-minus-02-solid-rounded IconMailMinus02SolidRounded"
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

export const IconMailMinus02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-minus-02-bulk-rounded IconMailMinus02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
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

export const IconMailMinus02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-minus-02-stroke-sharp IconMailMinus02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailMinus02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-minus-02-solid-sharp IconMailMinus02SolidSharp"
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

export const iconPackOfMailMinus02: TheIconSelfPack = {
  name: 'MailMinus02',
  StrokeRounded: IconMailMinus02StrokeRounded,
  DuotoneRounded: IconMailMinus02DuotoneRounded,
  TwotoneRounded: IconMailMinus02TwotoneRounded,
  SolidRounded: IconMailMinus02SolidRounded,
  BulkRounded: IconMailMinus02BulkRounded,
  StrokeSharp: IconMailMinus02StrokeSharp,
  SolidSharp: IconMailMinus02SolidSharp,
};