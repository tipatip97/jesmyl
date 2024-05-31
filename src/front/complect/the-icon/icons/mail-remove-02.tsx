import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 7.5L9.94202 9.23943C11.6572 10.2535 12.3428 10.2535 14.058 9.23943L17 7.5',
  d2: 'M21.9928 11C22.0047 10.1743 22.0019 10.3514 21.9842 9.52439C21.9189 6.45886 21.8862 4.92609 20.7551 3.79066C19.6239 2.65523 18.0497 2.61568 14.9012 2.53657C12.9607 2.48781 11.0393 2.48781 9.09882 2.53656C5.95033 2.61566 4.37608 2.65521 3.24495 3.79065C2.11382 4.92608 2.08114 6.45885 2.01576 9.52438C1.99474 10.5101 1.99475 11.4899 2.01577 12.4756C2.08114 15.5412 2.11383 17.0739 3.24496 18.2094C4.37608 19.3448 5.95033 19.3843 9.09883 19.4634C10.0691 19.4878 11.0345 19.5 12 19.5',
  d3: 'M15 14.5L18.5 18M18.5 18L22 21.5M18.5 18L15 21.5M18.5 18L22 14.5',
  d4: 'M2.01577 12.4756C2.08114 15.5412 2.11383 17.0739 3.24496 18.2094C4.37608 19.3448 5.95033 19.3843 9.09883 19.4634C11.0393 19.5122 12.9607 19.5122 14.9012 19.4634C18.0497 19.3843 19.6239 19.3448 20.7551 18.2094C21.8862 17.0739 21.9189 15.5412 21.9842 12.4756C22.0053 11.4899 22.0053 10.5101 21.9842 9.52439C21.9189 6.45886 21.8862 4.92609 20.7551 3.79066C19.6239 2.65523 18.0497 2.61568 14.9012 2.53657C12.9607 2.48781 11.0393 2.48781 9.09882 2.53656C5.95033 2.61566 4.37608 2.65521 3.24495 3.79065C2.11382 4.92608 2.08114 6.45885 2.01576 9.52438C1.99474 10.5101 1.99475 11.4899 2.01577 12.4756Z',
  d5: 'M8.95499 1.6618C10.908 1.61273 12.842 1.61273 14.795 1.66181L14.8532 1.66327C16.378 1.70156 17.605 1.73237 18.5883 1.90362C19.6178 2.08291 20.4545 2.42679 21.1614 3.13634C21.8653 3.84292 22.2074 4.66761 22.3832 5.68042C22.5507 6.64479 22.5762 7.84183 22.6078 9.32467L22.6091 9.3834C22.6219 9.98574 22.627 10.586 22.6243 11.1866C22.6228 11.5219 22.6221 11.6895 22.5363 11.7765C22.4505 11.8636 22.2427 11.8675 21.827 11.8755C21.2033 11.8874 20.5832 12.1313 20.1072 12.6072L18.7993 13.9152C18.5993 14.1152 18.4993 14.2152 18.375 14.2152C18.2507 14.2152 18.1507 14.1152 17.9507 13.9152L16.6428 12.6072C15.6665 11.6309 14.0835 11.6309 13.1072 12.6072C12.1309 13.5835 12.1309 15.1665 13.1072 16.1428L14.4152 17.4507C14.6152 17.6507 14.7152 17.7507 14.7152 17.875C14.7152 17.9993 14.6152 18.0993 14.4152 18.2993L13.1072 19.6072C13.0335 19.681 12.9654 19.7581 12.9028 19.8382L12.9028 19.8383C12.7861 19.9876 12.7278 20.0623 12.6659 20.0926C12.604 20.1229 12.5254 20.1233 12.3682 20.124C11.2319 20.1288 10.0967 20.1169 8.95499 20.0882L8.89677 20.0867C7.37197 20.0485 6.14501 20.0176 5.1617 19.8464C4.1322 19.6671 3.29548 19.3232 2.58862 18.6137C1.88472 17.9071 1.54264 17.0824 1.36676 16.0696C1.19929 15.1052 1.17379 13.9082 1.14219 12.4254L1.14094 12.3666C1.11969 11.3703 1.11969 10.3797 1.14093 9.38339L1.14219 9.32465C1.17378 7.8418 1.19929 6.64478 1.36676 5.6804C1.54264 4.6676 1.88471 3.8429 2.58862 3.13632C3.29548 2.42677 4.1322 2.08289 5.1617 1.9036C6.14502 1.73235 7.372 1.70155 8.89682 1.66326L8.95499 1.6618ZM7.25682 6.72939C6.90027 6.51858 6.44033 6.63674 6.22952 6.99329C6.01871 7.34985 6.13686 7.80979 6.49341 8.0206L9.43543 9.76003C10.3063 10.2749 11.0577 10.625 11.8751 10.625C12.6925 10.625 13.444 10.2749 14.3148 9.76003L17.2568 8.0206C17.6134 7.80979 17.7315 7.34985 17.5207 6.99329C17.3099 6.63674 16.85 6.51858 16.4934 6.72939L13.5514 8.46882C12.707 8.96804 12.2581 9.125 11.8751 9.125C11.4921 9.125 11.0432 8.96804 10.1988 8.46882L7.25682 6.72939Z',
  d6: 'M22.5821 13.6679C22.9726 14.0584 22.9726 14.6916 22.5821 15.0821L19.7892 17.875L22.5821 20.6679C22.9726 21.0584 22.9726 21.6916 22.5821 22.0821C22.1916 22.4726 21.5584 22.4726 21.1679 22.0821L18.375 19.2892L15.5821 22.0821C15.1916 22.4726 14.5584 22.4726 14.1679 22.0821C13.7774 21.6916 13.7774 21.0584 14.1679 20.6679L16.9608 17.875L14.1679 15.0821C13.7774 14.6916 13.7774 14.0584 14.1679 13.6679C14.5584 13.2774 15.1916 13.2774 15.5821 13.6679L18.375 16.4608L21.1679 13.6679C21.5584 13.2774 22.1916 13.2774 22.5821 13.6679Z',
  d7: 'M14.795 1.66181C12.842 1.61273 10.908 1.61273 8.95499 1.6618L8.89682 1.66326C7.372 1.70155 6.14502 1.73235 5.1617 1.9036C4.1322 2.08289 3.29548 2.42677 2.58862 3.13632C1.88471 3.8429 1.54264 4.6676 1.36676 5.6804C1.19929 6.64478 1.17378 7.8418 1.14219 9.32465L1.14093 9.38339C1.11969 10.3797 1.11969 11.3703 1.14094 12.3666L1.14219 12.4254C1.17379 13.9082 1.19929 15.1052 1.36676 16.0696C1.54264 17.0824 1.88472 17.9071 2.58862 18.6137C3.29548 19.3232 4.1322 19.6671 5.1617 19.8464C6.14501 20.0176 7.37197 20.0485 8.89677 20.0867L8.95499 20.0882C10.0967 20.1169 11.2319 20.1288 12.3682 20.124C12.5254 20.1233 12.604 20.1229 12.6659 20.0926C12.7278 20.0622 12.7861 19.9876 12.9028 19.8382C12.9654 19.7581 13.0335 19.681 13.1072 19.6072L14.4152 18.2993C14.6152 18.0993 14.7152 17.9993 14.7152 17.875C14.7152 17.7507 14.6152 17.6507 14.4152 17.4507L13.1072 16.1428C12.1309 15.1665 12.1309 13.5835 13.1072 12.6072C14.0835 11.6309 15.6665 11.6309 16.6428 12.6072L17.9507 13.9152C18.1507 14.1152 18.2507 14.2152 18.375 14.2152C18.4993 14.2152 18.5993 14.1152 18.7993 13.9152L20.1072 12.6072C20.5832 12.1313 21.2033 11.8874 21.827 11.8755C22.2427 11.8675 22.4505 11.8636 22.5363 11.7765C22.6221 11.6895 22.6228 11.5219 22.6243 11.1866C22.627 10.586 22.6219 9.98574 22.6091 9.3834L22.6078 9.32467C22.5762 7.84183 22.5507 6.64479 22.3832 5.68042C22.2074 4.66761 21.8653 3.84292 21.1614 3.13634C20.4545 2.42679 19.6178 2.08291 18.5883 1.90362C17.605 1.73237 16.378 1.70156 14.8532 1.66327L14.795 1.66181Z',
  d8: 'M6.01435 6.86622C6.29543 6.39081 6.90869 6.23328 7.3841 6.51435L10.3261 8.25378C11.1664 8.75062 11.5648 8.87516 11.8752 8.87516C12.1855 8.87516 12.5839 8.75062 13.4242 8.25378L16.3662 6.51435C16.8416 6.23328 17.4549 6.39081 17.736 6.86622C18.017 7.34163 17.8595 7.95488 17.3841 8.23596L14.4421 9.97539C13.5666 10.493 12.7648 10.8752 11.8752 10.8752C10.9855 10.8752 10.1838 10.493 9.30823 9.97539L6.36622 8.23596C5.89081 7.95488 5.73328 7.34163 6.01435 6.86622Z',
  d9: 'M22 11.5V2.5H2V19.5H12',
  d10: 'M6 7L12 11L18 7',
  d11: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V14.1089L21.2092 12.568L18.4163 15.3609L15.6234 12.568L12.4414 15.75L15.2343 18.5429L14.0272 19.75H2C1.58579 19.75 1.25 19.4142 1.25 19V2ZM6.41603 5.87598L5.58398 7.12405L12 11.4014L18.416 7.12405L17.584 5.87598L12 9.59863L6.41603 5.87598Z',
  d12: 'M17.0019 18.543L14.209 21.3359L15.6232 22.7502L18.4161 19.9573L21.209 22.7502L22.6232 21.3359L19.8303 18.543L22.6232 15.7502L21.209 14.3359L18.4161 17.1288L15.6232 14.3359L14.209 15.7502L17.0019 18.543Z',
} as const;

export const IconMailRemove02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-remove-02-stroke-rounded IconMailRemove02StrokeRounded"
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

export const IconMailRemove02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-remove-02-duotone-rounded IconMailRemove02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
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

export const IconMailRemove02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-remove-02-twotone-rounded IconMailRemove02TwotoneRounded"
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

export const IconMailRemove02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-remove-02-solid-rounded IconMailRemove02SolidRounded"
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

export const IconMailRemove02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-remove-02-bulk-rounded IconMailRemove02BulkRounded"
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

export const IconMailRemove02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-remove-02-stroke-sharp IconMailRemove02StrokeSharp"
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

export const IconMailRemove02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-remove-02-solid-sharp IconMailRemove02SolidSharp"
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

export const iconPackOfMailRemove02: TheIconSelfPack = {
  name: 'MailRemove02',
  StrokeRounded: IconMailRemove02StrokeRounded,
  DuotoneRounded: IconMailRemove02DuotoneRounded,
  TwotoneRounded: IconMailRemove02TwotoneRounded,
  SolidRounded: IconMailRemove02SolidRounded,
  BulkRounded: IconMailRemove02BulkRounded,
  StrokeSharp: IconMailRemove02StrokeSharp,
  SolidSharp: IconMailRemove02SolidSharp,
};