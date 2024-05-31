import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21.9982 11.5C22.003 10.8417 21.9983 10.6844 21.9842 10.0244C21.9189 6.95886 21.8862 5.42609 20.7551 4.29066C19.6239 3.15523 18.0497 3.11568 14.9012 3.03657C12.9607 2.98781 11.0393 2.98781 9.09882 3.03656C5.95033 3.11566 4.37608 3.15521 3.24495 4.29065C2.11382 5.42608 2.08114 6.95885 2.01576 10.0244C1.99474 11.0101 1.99475 11.9899 2.01577 12.9756C2.08114 16.0412 2.11383 17.5739 3.24496 18.7094C4.37608 19.8448 5.95033 19.8843 9.09883 19.9634C10.404 19.9962 11.2005 20.007 12.5 19.9957',
  d2: 'M7 8L9.94202 9.73943C11.6572 10.7535 12.3428 10.7535 14.058 9.73943L17 8',
  d3: 'M16.0505 15C15.4022 15.6353 15 16.5207 15 17.5C15 19.433 16.567 21 18.5 21C19.4793 21 20.3647 20.5978 21 19.9495M16.0505 15C16.6818 14.3814 17.5463 14 18.5 14C20.433 14 22 15.567 22 17.5C22 18.4537 21.6186 19.3182 21 19.9495M16.0505 15L21 19.9495',
  d4: 'M3.24496 18.7094C2.11383 17.5739 2.08114 16.0412 2.01577 12.9756C1.99475 11.9899 1.99474 11.0101 2.01576 10.0244C2.08114 6.95885 2.11382 5.42608 3.24495 4.29065C4.37608 3.15521 5.95033 3.11566 9.09882 3.03656C11.0393 2.98781 12.9607 2.98781 14.9012 3.03657C18.0497 3.11568 19.6239 3.15523 20.7551 4.29066C21.8862 5.42609 21.9189 6.95886 21.9842 10.0244C22.0053 11.0101 22.0053 11.9899 21.9842 12.9756C21.9542 14.386 21.931 15.472 21.8046 16.344C21.3272 14.9791 20.0279 14 18.5 14C17.5463 14 16.6818 14.3814 16.0505 15C15.4022 15.6353 15 16.5207 15 17.5C15 18.446 15.3753 19.3043 15.9851 19.9342C15.6459 19.9447 15.2852 19.9538 14.9012 19.9634C12.9607 20.0122 11.0393 20.0122 9.09883 19.9634C5.95033 19.8843 4.37608 19.8448 3.24496 18.7094Z',
  d5: 'M8.95499 2.1618C10.908 2.11273 12.842 2.11273 14.795 2.16181L14.8532 2.16327C16.378 2.20156 17.605 2.23237 18.5883 2.40362C19.6178 2.58291 20.4545 2.92679 21.1614 3.63634C21.8653 4.34292 22.2074 5.16761 22.3832 6.18042C22.5507 7.14479 22.5762 8.34183 22.6078 9.82467L22.6091 9.8834C22.6211 10.4463 22.6246 11.0877 22.6215 11.719C22.6188 12.2919 22.6174 12.5784 22.4642 12.6637C22.311 12.749 22.0425 12.5845 21.5057 12.2555C20.5943 11.697 19.5223 11.375 18.375 11.375C16.7408 11.375 15.2552 12.0316 14.1758 13.0894C13.0676 14.1753 12.375 15.6964 12.375 17.375C12.375 18.183 12.5347 18.9536 12.8243 19.6572C13.0161 20.1233 13.112 20.3564 13.0233 20.4893C12.9346 20.6222 12.7036 20.623 12.2418 20.6244C11.1477 20.6279 10.0544 20.6158 8.95499 20.5882L8.89677 20.5867C7.37197 20.5485 6.14501 20.5176 5.1617 20.3464C4.1322 20.1671 3.29548 19.8232 2.58862 19.1137C1.88472 18.4071 1.54264 17.5824 1.36676 16.5696C1.19929 15.6052 1.17379 14.4082 1.14219 12.9254L1.14094 12.8666C1.11969 11.8703 1.11969 10.8797 1.14093 9.88339L1.14219 9.82465C1.17378 8.3418 1.19929 7.14478 1.36676 6.1804C1.54264 5.1676 1.88471 4.3429 2.58862 3.63632C3.29548 2.92677 4.1322 2.58289 5.1617 2.4036C6.14502 2.23235 7.372 2.20155 8.89682 2.16326L8.95499 2.1618ZM7.25682 7.22939C6.90027 7.01858 6.44033 7.13674 6.22952 7.49329C6.01871 7.84985 6.13686 8.30979 6.49341 8.5206L9.43543 10.26C10.3063 10.7749 11.0577 11.125 11.8751 11.125C12.6925 11.125 13.444 10.7749 14.3148 10.26L17.2568 8.5206C17.6134 8.30979 17.7315 7.84985 17.5207 7.49329C17.3099 7.13674 16.85 7.01858 16.4934 7.22939L13.5514 8.96882C12.707 9.46804 12.2581 9.625 11.8751 9.625C11.4921 9.625 11.0432 9.46804 10.1988 8.96882L7.25682 7.22939Z',
  d6: 'M17.4977 15.033L20.717 18.2523C20.8192 17.9794 20.875 17.6839 20.875 17.375C20.875 15.9943 19.7557 14.875 18.375 14.875C18.0661 14.875 17.7706 14.9308 17.4977 15.033ZM19.3248 19.6885L16.0615 16.4252C15.9412 16.7179 15.875 17.0385 15.875 17.375C15.875 18.7557 16.9943 19.875 18.375 19.875C18.7115 19.875 19.0321 19.8088 19.3248 19.6885ZM15.2256 14.1608C16.0362 13.3664 17.1492 12.875 18.375 12.875C20.8603 12.875 22.875 14.8897 22.875 17.375C22.875 18.6008 22.3836 19.7138 21.5892 20.5244C20.7736 21.3567 19.6339 21.875 18.375 21.875C15.8897 21.875 13.875 19.8603 13.875 17.375C13.875 16.1161 14.3933 14.9764 15.2256 14.1608Z',
  d7: 'M14.795 2.16181C12.842 2.11273 10.908 2.11273 8.95499 2.1618L8.89682 2.16326C7.372 2.20155 6.14502 2.23235 5.1617 2.4036C4.1322 2.58289 3.29548 2.92677 2.58862 3.63632C1.88471 4.3429 1.54264 5.1676 1.36676 6.1804C1.19929 7.14478 1.17378 8.3418 1.14219 9.82465L1.14093 9.88339C1.11969 10.8797 1.11969 11.8703 1.14094 12.8666L1.14219 12.9254C1.17379 14.4082 1.19929 15.6052 1.36676 16.5696C1.54264 17.5824 1.88472 18.4071 2.58862 19.1137C3.29548 19.8232 4.1322 20.1671 5.1617 20.3464C6.14501 20.5176 7.37197 20.5485 8.89677 20.5867L8.95499 20.5882C10.0544 20.6158 11.1477 20.6279 12.2418 20.6244C12.7036 20.623 12.9346 20.6222 13.0233 20.4893C13.112 20.3564 13.0161 20.1233 12.8243 19.6572C12.5347 18.9536 12.375 18.183 12.375 17.375C12.375 15.6964 13.0676 14.1753 14.1758 13.0894C15.2552 12.0316 16.7408 11.375 18.375 11.375C19.5223 11.375 20.5943 11.697 21.5057 12.2555C22.0425 12.5845 22.311 12.749 22.4642 12.6637C22.6174 12.5784 22.6188 12.2919 22.6215 11.719C22.6246 11.0877 22.6211 10.4463 22.6091 9.8834L22.6078 9.82467C22.5762 8.34183 22.5507 7.14479 22.3832 6.18042C22.2074 5.16761 21.8653 4.34292 21.1614 3.63634C20.4545 2.92679 19.6178 2.58291 18.5883 2.40362C17.605 2.23237 16.378 2.20156 14.8532 2.16327L14.795 2.16181Z',
  d8: 'M6.01435 7.36622C6.29543 6.89081 6.90869 6.73328 7.3841 7.01435L10.3261 8.75378C11.1664 9.25062 11.5648 9.37516 11.8752 9.37516C12.1855 9.37516 12.5839 9.25062 13.4242 8.75378L16.3662 7.01435C16.8416 6.73328 17.4549 6.89081 17.736 7.36622C18.017 7.84163 17.8595 8.45488 17.3841 8.73596L14.4421 10.4754C13.5666 10.993 12.7648 11.3752 11.8752 11.3752C10.9855 11.3752 10.1838 10.993 9.30823 10.4754L6.36622 8.73596C5.89081 8.45488 5.73328 7.84163 6.01435 7.36622Z',
  d9: 'M22 12V3H2V20H13',
  d10: 'M6 7.5L12 11.5L18 7.5',
  d11: 'M1.25 2.5C1.25 2.08579 1.58579 1.75 2 1.75H22C22.4142 1.75 22.75 2.08579 22.75 2.5V14.5087C21.7413 13.2822 20.212 12.5 18.5 12.5C17.002 12.5 15.6403 13.1018 14.6507 14.0715C13.6347 15.0671 13 16.4613 13 18C13 18.8016 13.1715 19.5632 13.4798 20.25H2C1.58579 20.25 1.25 19.9142 1.25 19.5V2.5ZM6.41603 6.37598L5.58398 7.62405L12 11.9014L18.416 7.62405L17.584 6.37598L12 10.0986L6.41603 6.37598Z',
  d12: 'M17.6714 15.7881L20.7119 18.8286C20.8084 18.5709 20.8611 18.2918 20.8611 18C20.8611 16.696 19.804 15.6389 18.5 15.6389C18.2082 15.6389 17.9291 15.6916 17.6714 15.7881ZM19.3971 20.185L16.315 17.1029C16.2014 17.3794 16.1389 17.6822 16.1389 18C16.1389 19.304 17.196 20.3611 18.5 20.3611C18.8178 20.3611 19.1206 20.2986 19.3971 20.185ZM15.5256 14.9643C16.2911 14.2141 17.3423 13.75 18.5 13.75C20.8472 13.75 22.75 15.6528 22.75 18C22.75 19.1577 22.2859 20.2088 21.5357 20.9744C20.7654 21.7605 19.689 22.25 18.5 22.25C16.1528 22.25 14.25 20.3472 14.25 18C14.25 16.811 14.7395 15.7346 15.5256 14.9643Z',
} as const;

export const IconMailBlock02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-block-02-stroke-rounded IconMailBlock02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconMailBlock02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-block-02-duotone-rounded IconMailBlock02DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconMailBlock02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-block-02-twotone-rounded IconMailBlock02TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconMailBlock02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-block-02-solid-rounded IconMailBlock02SolidRounded"
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

export const IconMailBlock02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-block-02-bulk-rounded IconMailBlock02BulkRounded"
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

export const IconMailBlock02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-block-02-stroke-sharp IconMailBlock02StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconMailBlock02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-block-02-solid-sharp IconMailBlock02SolidSharp"
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

export const iconPackOfMailBlock02: TheIconSelfPack = {
  name: 'MailBlock02',
  StrokeRounded: IconMailBlock02StrokeRounded,
  DuotoneRounded: IconMailBlock02DuotoneRounded,
  TwotoneRounded: IconMailBlock02TwotoneRounded,
  SolidRounded: IconMailBlock02SolidRounded,
  BulkRounded: IconMailBlock02BulkRounded,
  StrokeSharp: IconMailBlock02StrokeSharp,
  SolidSharp: IconMailBlock02SolidSharp,
};