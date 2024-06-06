import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 12H20',
  d2: 'M20 6.99972L7.00316 7C5.18197 7 4.27137 7 4.04476 6.38268C3.81814 5.76537 4.46203 5.03884 5.7498 3.58579L6.26896 3',
  d3: 'M4 17.0003L16.9968 17C18.818 17 19.7286 17 19.9552 17.6173C20.1819 18.2346 19.538 18.9612 18.2502 20.4142L17.731 21',
  d4: 'M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z',
  d5: 'M6.93329 2.25162C7.34662 2.61793 7.38473 3.24995 7.01842 3.66327L6.49926 4.24906C5.83414 4.99955 5.40857 5.48325 5.16251 5.85234C5.14147 5.88391 5.12309 5.91268 5.10704 5.93881C5.49298 5.99701 6.0741 6.00001 7.00421 6.00001L20.001 5.99973C20.5533 5.99972 21.0011 6.44743 21.0011 6.99971C21.0011 7.552 20.5534 7.99972 20.0011 7.99973L7.00425 8.00001L6.92165 8.00002H6.92163C6.08214 8.00011 5.33258 8.0002 4.7695 7.91036C4.18796 7.81757 3.41506 7.56626 3.10708 6.72731C2.8185 5.94118 3.16907 5.23696 3.4984 4.74295C3.83059 4.24467 4.35151 3.65696 4.95346 2.97785L4.95346 2.97785L5.00249 2.92254L5.52164 2.33675C5.88795 1.92343 6.51997 1.88531 6.93329 2.25162Z',
  d6: 'M17.0706 21.7484C16.6573 21.3821 16.6192 20.7501 16.9855 20.3367L17.5046 19.7509C18.1698 19.0005 18.5953 18.5168 18.8414 18.1477C18.8624 18.1161 18.8808 18.0873 18.8969 18.0612C18.5109 18.003 17.9298 18 16.9997 18L4.00286 18.0003C3.45057 18.0003 3.00285 17.5526 3.00284 17.0003C3.00282 16.448 3.45053 16.0003 4.00282 16.0003L16.9997 16L17.0823 16H17.0823C17.9218 15.9999 18.6713 15.9998 19.2344 16.0896C19.8159 16.1824 20.5888 16.4337 20.8968 17.2727C21.1854 18.0588 20.8348 18.763 20.5055 19.2571C20.1733 19.7553 19.6524 20.343 19.0504 21.0221L19.0504 21.0222L19.0014 21.0775L18.4823 21.6633C18.116 22.0766 17.4839 22.1147 17.0706 21.7484Z',
  d7: 'M19.9992 6.99972L4 7L8 3',
  d8: 'M4.00098 17.0003L20.0002 17L16.0002 21',
  d9: 'M20 13H4V11H20V13Z',
  d10: 'M6.41428 6.00008L9.0001 3.41421L7.58589 2L3.29292 6.29302C3.00692 6.57902 2.92137 7.00914 3.07615 7.38281C3.23094 7.75649 3.59558 8.00013 4.00005 8.00012L19.9993 7.99984L19.9992 5.99984L6.41428 6.00008Z',
  d11: 'M4.00098 16.0003L20.0002 16C20.4047 16 20.7693 16.2436 20.9241 16.6173C21.0789 16.991 20.9933 17.4211 20.7073 17.7071L16.4144 22L15.0002 20.5858L17.586 18L4.00101 18.0003L4.00098 16.0003Z',
};

export const IconMoreOrLessStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-or-less-stroke-rounded IconMoreOrLessStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMoreOrLessDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-or-less-duotone-rounded IconMoreOrLessDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoreOrLessTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-or-less-twotone-rounded IconMoreOrLessTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoreOrLessSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-or-less-solid-rounded IconMoreOrLessSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconMoreOrLessBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-or-less-bulk-rounded IconMoreOrLessBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoreOrLessStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-or-less-stroke-sharp IconMoreOrLessStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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

export const IconMoreOrLessSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-or-less-solid-sharp IconMoreOrLessSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfMoreOrLess: TheIconSelfPack = {
  name: 'MoreOrLess',
  StrokeRounded: IconMoreOrLessStrokeRounded,
  DuotoneRounded: IconMoreOrLessDuotoneRounded,
  TwotoneRounded: IconMoreOrLessTwotoneRounded,
  SolidRounded: IconMoreOrLessSolidRounded,
  BulkRounded: IconMoreOrLessBulkRounded,
  StrokeSharp: IconMoreOrLessStrokeSharp,
  SolidSharp: IconMoreOrLessSolidSharp,
};