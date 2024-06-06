import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 7.5L9.94202 9.23943C11.6572 10.2535 12.3428 10.2535 14.058 9.23943L17 7.5',
  d2: 'M11.5 19.5C11.5 19.5 10.0691 19.4878 9.09883 19.4634C5.95033 19.3843 4.37608 19.3448 3.24496 18.2094C2.11383 17.0739 2.08114 15.5412 2.01577 12.4756C1.99475 11.4899 1.99474 10.5101 2.01576 9.52438C2.08114 6.45885 2.11382 4.92608 3.24495 3.79065C4.37608 2.65521 5.95033 2.61566 9.09882 2.53656C11.0393 2.48781 12.9607 2.48781 14.9012 2.53657C18.0497 2.61568 19.6239 2.65523 20.7551 3.79066C21.8862 4.92609 21.9189 6.45886 21.9842 9.52439C21.9918 9.88124 21.9967 10.4995 21.9988 11',
  d3: 'M14 17.5H22M18 21.5L18 13.5',
  d4: 'M2.01577 12.4756C2.08114 15.5412 2.11383 17.0739 3.24496 18.2094C4.37608 19.3448 5.95033 19.3843 9.09883 19.4634C11.0393 19.5122 12.9607 19.5122 14.9012 19.4634C18.0497 19.3843 19.6239 19.3448 20.7551 18.2094C21.8862 17.0739 21.9189 15.5412 21.9842 12.4756C22.0053 11.4899 22.0053 10.5101 21.9842 9.52439C21.9189 6.45886 21.8862 4.92609 20.7551 3.79066C19.6239 2.65523 18.0497 2.61568 14.9012 2.53657C12.9607 2.48781 11.0393 2.48781 9.09882 2.53656C5.95033 2.61566 4.37608 2.65521 3.24495 3.79065C2.11382 4.92608 2.08114 6.45885 2.01576 9.52438C1.99474 10.5101 1.99475 11.4899 2.01577 12.4756Z',
  d5: 'M8.95499 1.6618C10.908 1.61273 12.842 1.61273 14.795 1.66181L14.8532 1.66327C16.378 1.70156 17.605 1.73237 18.5883 1.90362C19.6178 2.08291 20.4545 2.42679 21.1614 3.13634C21.8653 3.84292 22.2074 4.66761 22.3832 5.68042C22.5507 6.64479 22.5762 7.84183 22.6078 9.32467L22.6091 9.3834C22.6303 10.3797 22.6303 11.3703 22.6091 12.3666L22.6078 12.4255L22.6078 12.4258C22.5931 13.1145 22.5798 13.7416 22.5529 14.3124C22.5412 14.5591 22.5354 14.6825 22.4788 14.7568C22.4567 14.7858 22.4405 14.8012 22.4106 14.8219C22.3336 14.875 22.1808 14.875 21.875 14.875H20.975C20.6922 14.875 20.5507 14.875 20.4629 14.7871C20.375 14.6993 20.375 14.5578 20.375 14.275V13.375C20.375 11.9943 19.2557 10.875 17.875 10.875C16.4943 10.875 15.375 11.9943 15.375 13.375V14.275C15.375 14.5578 15.375 14.6993 15.2871 14.7871C15.1993 14.875 15.0578 14.875 14.775 14.875H13.875C12.4943 14.875 11.375 15.9943 11.375 17.375V19.5213C11.375 19.8056 11.375 19.9477 11.2861 20.0358C11.1972 20.1238 11.0556 20.1224 10.7724 20.1197C10.1677 20.114 9.56226 20.1035 8.95499 20.0882L8.89677 20.0867C7.37197 20.0485 6.14501 20.0176 5.1617 19.8464C4.1322 19.6671 3.29548 19.3232 2.58862 18.6137C1.88472 17.9071 1.54264 17.0824 1.36676 16.0696C1.19929 15.1052 1.17379 13.9082 1.14219 12.4254L1.14094 12.3666C1.11969 11.3703 1.11969 10.3797 1.14093 9.38339L1.14219 9.32465C1.17378 7.8418 1.19929 6.64478 1.36676 5.6804C1.54264 4.6676 1.88471 3.8429 2.58862 3.13632C3.29548 2.42677 4.1322 2.08289 5.1617 1.9036C6.14502 1.73235 7.372 1.70155 8.89682 1.66326L8.95499 1.6618ZM7.25682 6.72939C6.90027 6.51858 6.44033 6.63674 6.22952 6.99329C6.01871 7.34985 6.13686 7.80979 6.49341 8.0206L9.43543 9.76003C10.3063 10.2749 11.0577 10.625 11.8751 10.625C12.6925 10.625 13.444 10.2749 14.3148 9.76003L17.2568 8.0206C17.6134 7.80979 17.7315 7.34985 17.5207 6.99329C17.3099 6.63674 16.85 6.51858 16.4934 6.72939L13.5514 8.46882C12.707 8.96804 12.2581 9.125 11.8751 9.125C11.4921 9.125 11.0432 8.96804 10.1988 8.46882L7.25682 6.72939Z',
  d6: 'M17.875 12.375C18.4273 12.375 18.875 12.8227 18.875 13.375V16.375H21.875C22.4273 16.375 22.875 16.8227 22.875 17.375C22.875 17.9273 22.4273 18.375 21.875 18.375H18.875V21.375C18.875 21.9273 18.4273 22.375 17.875 22.375C17.3227 22.375 16.875 21.9273 16.875 21.375V18.375H13.875C13.3227 18.375 12.875 17.9273 12.875 17.375C12.875 16.8227 13.3227 16.375 13.875 16.375H16.875L16.875 13.375C16.875 12.8227 17.3227 12.375 17.875 12.375Z',
  d7: 'M14.795 1.66181C12.842 1.61273 10.908 1.61273 8.95499 1.6618L8.89682 1.66326C7.372 1.70155 6.14502 1.73235 5.1617 1.9036C4.1322 2.08289 3.29548 2.42677 2.58862 3.13632C1.88471 3.8429 1.54264 4.6676 1.36676 5.6804C1.19929 6.64478 1.17378 7.8418 1.14219 9.32465L1.14093 9.38339C1.11969 10.3797 1.11969 11.3703 1.14094 12.3666L1.14219 12.4254C1.17379 13.9082 1.19929 15.1052 1.36676 16.0696C1.54264 17.0824 1.88472 17.9071 2.58862 18.6137C3.29548 19.3232 4.1322 19.6671 5.1617 19.8464C6.14501 20.0176 7.37197 20.0485 8.89677 20.0867L8.95499 20.0882C9.56226 20.1035 10.1677 20.114 10.7724 20.1197C11.0556 20.1224 11.1972 20.1238 11.2861 20.0358C11.375 19.9477 11.375 19.8056 11.375 19.5213V17.375C11.375 15.9943 12.4943 14.875 13.875 14.875H14.775C15.0578 14.875 15.1993 14.875 15.2871 14.7871C15.375 14.6993 15.375 14.5578 15.375 14.275V13.375C15.375 11.9943 16.4943 10.875 17.875 10.875C19.2557 10.875 20.375 11.9943 20.375 13.375V14.275C20.375 14.5578 20.375 14.6993 20.4629 14.7871C20.5507 14.875 20.6922 14.875 20.975 14.875H21.875C22.1808 14.875 22.3336 14.875 22.4106 14.8219C22.4405 14.8012 22.4567 14.7858 22.4788 14.7568C22.5354 14.6825 22.5412 14.5591 22.5529 14.3124C22.5798 13.7416 22.5931 13.1144 22.6078 12.4255L22.6091 12.3666C22.6303 11.3703 22.6303 10.3797 22.6091 9.3834L22.6078 9.32467C22.5762 7.84183 22.5507 6.64479 22.3832 5.68042C22.2074 4.66761 21.8653 3.84292 21.1614 3.13634C20.4545 2.42679 19.6178 2.08291 18.5883 1.90362C17.605 1.73237 16.378 1.70156 14.8532 1.66327L14.795 1.66181Z',
  d8: 'M6.01435 6.86622C6.29543 6.39081 6.90869 6.23328 7.3841 6.51435L10.3261 8.25378C11.1664 8.75062 11.5648 8.87516 11.8752 8.87516C12.1855 8.87516 12.5839 8.75062 13.4242 8.25378L16.3662 6.51435C16.8416 6.23328 17.4549 6.39081 17.736 6.86622C18.017 7.34163 17.8595 7.95488 17.3841 8.23596L14.4421 9.97539C13.5666 10.493 12.7648 10.8752 11.8752 10.8752C10.9855 10.8752 10.1838 10.493 9.30823 9.97539L6.36622 8.23596C5.89081 7.95488 5.73328 7.34163 6.01435 6.86622Z',
  d9: 'M22 11.5V2.5H2V19.5H12',
  d10: 'M6 7L12 11L18 7',
  d11: 'M1.25 2.5C1.25 2.08579 1.58579 1.75 2 1.75H22C22.4142 1.75 22.75 2.08579 22.75 2.5V16H21V13H16.5V16H13.5V20.25H2C1.58579 20.25 1.25 19.9142 1.25 19.5V2.5ZM6.41603 6.37598L5.58398 7.62405L12 11.9014L18.416 7.62405L17.584 6.37598L12 10.0986L6.41603 6.37598Z',
  d12: 'M19.75 19.25V22.25H17.75L17.75 19.25H14.75V17.25H17.75L17.75 14.25H19.75V17.25H22.75V19.25H19.75Z',
};

export const IconMailAdd02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-add-02-stroke-rounded IconMailAdd02StrokeRounded"
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

export const IconMailAdd02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-add-02-duotone-rounded IconMailAdd02DuotoneRounded"
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

export const IconMailAdd02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-add-02-twotone-rounded IconMailAdd02TwotoneRounded"
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

export const IconMailAdd02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-add-02-solid-rounded IconMailAdd02SolidRounded"
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

export const IconMailAdd02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-add-02-bulk-rounded IconMailAdd02BulkRounded"
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

export const IconMailAdd02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-add-02-stroke-sharp IconMailAdd02StrokeSharp"
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

export const IconMailAdd02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-add-02-solid-sharp IconMailAdd02SolidSharp"
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

export const iconPackOfMailAdd02: TheIconSelfPack = {
  name: 'MailAdd02',
  StrokeRounded: IconMailAdd02StrokeRounded,
  DuotoneRounded: IconMailAdd02DuotoneRounded,
  TwotoneRounded: IconMailAdd02TwotoneRounded,
  SolidRounded: IconMailAdd02SolidRounded,
  BulkRounded: IconMailAdd02BulkRounded,
  StrokeSharp: IconMailAdd02StrokeSharp,
  SolidSharp: IconMailAdd02SolidSharp,
};