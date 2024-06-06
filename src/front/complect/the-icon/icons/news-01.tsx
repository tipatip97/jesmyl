import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10.5 8H18.5M10.5 12H13M18.5 12H16M10.5 16H13M18.5 16H16',
  d2: 'M7 7.5H6C4.11438 7.5 3.17157 7.5 2.58579 8.08579C2 8.67157 2 9.61438 2 11.5V18C2 19.3807 3.11929 20.5 4.5 20.5C5.88071 20.5 7 19.3807 7 18V7.5Z',
  d3: 'M16 3.5H11C10.07 3.5 9.60504 3.5 9.22354 3.60222C8.18827 3.87962 7.37962 4.68827 7.10222 5.72354C7 6.10504 7 6.57003 7 7.5V18C7 19.3807 5.88071 20.5 4.5 20.5H16C18.8284 20.5 20.2426 20.5 21.1213 19.6213C22 18.7426 22 17.3284 22 14.5V9.5C22 6.67157 22 5.25736 21.1213 4.37868C20.2426 3.5 18.8284 3.5 16 3.5Z',
  d4: 'M5.82782 6.75L6.81752 6.75C7.33036 6.75 7.74609 7.1828 7.74609 7.71667V8.68334H5.88895C4.98724 8.68334 4.40436 8.68539 3.97489 8.7455C3.57214 8.80187 3.4459 8.89288 3.37521 8.96647C3.30453 9.04005 3.2171 9.17147 3.16295 9.59075C3.10521 10.0378 3.10324 10.6446 3.10324 11.5833V17.8667C3.10324 18.6675 3.90541 19.3167 4.67466 19.3167C5.44392 19.3167 6.24609 18.6675 6.24609 17.8667H7.74609C7.74609 19.7352 6.29102 21.25 4.4961 21.25C2.70117 21.25 1.2461 19.7352 1.2461 17.8667L1.2461 11.5197C1.24605 10.6628 1.24601 9.92441 1.32237 9.33314C1.40421 8.69947 1.58876 8.09207 2.06201 7.59939C2.53527 7.10672 3.11874 6.9146 3.72743 6.82941C4.2954 6.74991 5.00466 6.74995 5.82782 6.75Z',
  d5: 'M19.3918 2.86657C18.5248 2.75001 17.4225 2.75003 16.0549 2.75005L10.8842 2.75002C10.0662 2.74975 9.50809 2.74957 9.02943 2.87783C7.73533 3.22458 6.72453 4.23538 6.37778 5.52948C6.24952 6.00814 6.24971 6.56629 6.24997 7.38425V7.38425L6.25 18C6.25 18.9665 5.4665 19.75 4.5 19.75C4.08579 19.75 3.75 20.0858 3.75 20.5C3.75 20.9143 4.08579 21.25 4.5 21.25H16.0549C17.4225 21.2501 18.5248 21.2501 19.3918 21.1335C20.2919 21.0125 21.0497 20.7536 21.6517 20.1517C22.2536 19.5498 22.5125 18.7919 22.6335 17.8918C22.75 17.0248 22.75 15.9225 22.75 14.5549V9.44518C22.75 8.07759 22.75 6.97527 22.6335 6.1083C22.5125 5.20819 22.2536 4.45032 21.6517 3.8484C21.0497 3.24648 20.2919 2.98759 19.3918 2.86657ZM10.5 7.25C10.0858 7.25 9.75 7.58579 9.75 8C9.75 8.41421 10.0858 8.75 10.5 8.75H18.5C18.9142 8.75 19.25 8.41421 19.25 8C19.25 7.58579 18.9142 7.25 18.5 7.25H10.5ZM10.5 11.25C10.0858 11.25 9.75 11.5858 9.75 12C9.75 12.4142 10.0858 12.75 10.5 12.75H13C13.4142 12.75 13.75 12.4142 13.75 12C13.75 11.5858 13.4142 11.25 13 11.25H10.5ZM16 11.25C15.5858 11.25 15.25 11.5858 15.25 12C15.25 12.4142 15.5858 12.75 16 12.75H18.5C18.9142 12.75 19.25 12.4142 19.25 12C19.25 11.5858 18.9142 11.25 18.5 11.25H16ZM10.5 15.25C10.0858 15.25 9.75 15.5858 9.75 16C9.75 16.4142 10.0858 16.75 10.5 16.75H13C13.4142 16.75 13.75 16.4142 13.75 16C13.75 15.5858 13.4142 15.25 13 15.25H10.5ZM16 15.25C15.5858 15.25 15.25 15.5858 15.25 16C15.25 16.4142 15.5858 16.75 16 16.75H18.5C18.9142 16.75 19.25 16.4142 19.25 16C19.25 15.5858 18.9142 15.25 18.5 15.25H16Z',
  d6: 'M16.0549 2.75005C17.4225 2.75003 18.5248 2.75001 19.3918 2.86657C20.2919 2.98759 21.0497 3.24648 21.6517 3.8484C22.2536 4.45032 22.5125 5.20819 22.6335 6.1083C22.75 6.97527 22.75 8.07759 22.75 9.44518V14.5549C22.75 15.9225 22.75 17.0248 22.6335 17.8918C22.5125 18.7919 22.2536 19.5498 21.6517 20.1517C21.0497 20.7536 20.2919 21.0125 19.3918 21.1335C18.5248 21.2501 17.4225 21.2501 16.0549 21.25H4.5C5.4665 21.25 6.25 20.4665 6.25 19.5L6.24997 7.38425C6.24971 6.56629 6.24952 6.00814 6.37778 5.52948C6.72453 4.23538 7.73533 3.22458 9.02943 2.87783C9.50809 2.74957 10.0662 2.74975 10.8842 2.75002L16.0549 2.75005Z',
  d7: 'M6.25265 6.75L5.82782 6.75C5.00466 6.74995 4.2954 6.74991 3.72743 6.82941C3.11874 6.9146 2.53527 7.10672 2.06201 7.59939C1.58876 8.09207 1.40421 8.69947 1.32237 9.33314C1.24601 9.92441 1.24605 10.6628 1.2461 11.5197L1.2461 17.8667C1.2461 19.7352 2.70117 21.25 4.4961 21.25C4.50618 21.25 4.51624 21.25 4.5263 21.2499C5.48067 21.2358 6.25 20.4578 6.25 19.5L6.25 17.8667H6.24609C6.24609 18.6675 5.44392 19.3167 4.67466 19.3167C3.90541 19.3167 3.10324 18.6675 3.10324 17.8667V11.5833C3.10324 10.6446 3.10521 10.0378 3.16295 9.59075C3.2171 9.17147 3.30453 9.04005 3.37521 8.96647C3.4459 8.89288 3.57214 8.80187 3.97489 8.7455C4.40436 8.68539 4.98724 8.68334 5.88895 8.68334H6.24998L6.24997 7.38425C6.2499 7.15351 6.24983 6.94344 6.25265 6.75Z',
  d8: 'M9.75 8C9.75 7.58579 10.0858 7.25 10.5 7.25H18.5C18.9142 7.25 19.25 7.58579 19.25 8C19.25 8.41421 18.9142 8.75 18.5 8.75H10.5C10.0858 8.75 9.75 8.41421 9.75 8ZM9.75 12C9.75 11.5858 10.0858 11.25 10.5 11.25H13C13.4142 11.25 13.75 11.5858 13.75 12C13.75 12.4142 13.4142 12.75 13 12.75H10.5C10.0858 12.75 9.75 12.4142 9.75 12ZM15.25 12C15.25 11.5858 15.5858 11.25 16 11.25H18.5C18.9142 11.25 19.25 11.5858 19.25 12C19.25 12.4142 18.9142 12.75 18.5 12.75H16C15.5858 12.75 15.25 12.4142 15.25 12ZM9.75 16C9.75 15.5858 10.0858 15.25 10.5 15.25H13C13.4142 15.25 13.75 15.5858 13.75 16C13.75 16.4142 13.4142 16.75 13 16.75H10.5C10.0858 16.75 9.75 16.4142 9.75 16ZM15.25 16C15.25 15.5858 15.5858 15.25 16 15.25H18.5C18.9142 15.25 19.25 15.5858 19.25 16C19.25 16.4142 18.9142 16.75 18.5 16.75H16C15.5858 16.75 15.25 16.4142 15.25 16Z',
  d9: 'M10 8.00635H19M10 12.0119H13M19 12.0119H16M10 16.0175H13M19 16.0175H16',
  d10: 'M7.0182 7.5276L7.04695 18.0855C7.05059 19.4222 5.97266 20.5078 4.64171 20.5078M7.0182 7.5276H2.03906L2.06785 18.0987C2.07147 19.4303 3.14727 20.5078 4.47308 20.5078H4.64171M7.0182 7.5276L7.04479 3.60336C7.04516 3.54833 7.08969 3.50391 7.14449 3.50391H21.9357C21.9909 3.50391 22.0356 3.54886 22.0354 3.60424L22.0084 17.6564C22.059 19.5262 20.9786 20.391 19.6421 20.5078H4.64171',
  d11: 'M6.24995 3.5C6.24995 3.08579 6.58574 2.75 6.99995 2.75H22C22.4142 2.75 22.75 3.08579 22.75 3.5V18C22.75 19.7949 21.2949 21.25 19.5 21.25H4.5C2.70507 21.25 1.25 19.7949 1.25 18V6.75H6.24995V3.5ZM6.24995 8.25H2.75V18C2.75 18.9665 3.5335 19.75 4.5 19.75C5.46649 19.75 6.24999 18.9665 6.24999 18L6.24995 8.25ZM10 8.75H19V7.25H10V8.75ZM10 12.75H13V11.25H10V12.75ZM16 12.75H19V11.25H16V12.75ZM10 16.75H13V15.25H10V16.75ZM16 16.75H19V15.25H16V16.75Z',
} as const;

export const IconNews01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="news-01-stroke-rounded IconNews01StrokeRounded"
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

export const IconNews01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="news-01-duotone-rounded IconNews01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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

export const IconNews01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="news-01-twotone-rounded IconNews01TwotoneRounded"
    >
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

export const IconNews01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="news-01-solid-rounded IconNews01SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNews01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="news-01-bulk-rounded IconNews01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconNews01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="news-01-stroke-sharp IconNews01StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconNews01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="news-01-solid-sharp IconNews01SolidSharp"
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

export const iconPackOfNews01: TheIconSelfPack = {
  name: 'News01',
  StrokeRounded: IconNews01StrokeRounded,
  DuotoneRounded: IconNews01DuotoneRounded,
  TwotoneRounded: IconNews01TwotoneRounded,
  SolidRounded: IconNews01SolidRounded,
  BulkRounded: IconNews01BulkRounded,
  StrokeSharp: IconNews01StrokeSharp,
  SolidSharp: IconNews01SolidSharp,
};