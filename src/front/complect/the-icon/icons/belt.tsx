import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8.9751 17.9655C12.4619 17.5232 16 16.3318 16 12C16 7.66817 12.4619 6.47683 8.9751 6.0345C6.62063 5.73582 6 7.41975 6 9.41154V14.5885C6 16.5803 6.62063 18.2642 8.9751 17.9655Z',
  d2: 'M2 7.5H6M2 16.5H6M14 7.5H22M14 16.5L22 16.5',
  d3: 'M5 12H10',
  d4: 'M19.9998 12H20.0088',
  d5: 'M6 11H9.00002C9.5523 11 10 11.4477 10 12C10 12.5523 9.5523 13 9.00002 13H6V11Z',
  d6: 'M6.00654 6.48856C6.68515 5.5274 7.78211 5.11192 9.18007 5.29038C10.8872 5.50831 12.7574 5.92399 14.2162 6.91858C15.7445 7.96056 16.75 9.59109 16.75 12C16.75 14.4089 15.7445 16.0394 14.2162 17.0814C12.7574 18.076 10.8872 18.4917 9.18007 18.7096C7.78211 18.8881 6.68515 18.4726 6.00653 17.5114C5.39892 16.6508 5.25 15.513 5.25 14.4962V9.50378C5.25 8.48698 5.39892 7.34916 6.00654 6.48856ZM7.569 7.60565C7.31513 7.96521 7.16667 8.59976 7.16667 9.50378V14.4962C7.16667 15.4002 7.31513 16.0348 7.569 16.3943C7.75185 16.6533 8.08047 16.9058 8.93886 16.7962C10.5732 16.5876 12.0691 16.2155 13.1411 15.4847C14.1435 14.8012 14.8333 13.7686 14.8333 12C14.8333 10.2314 14.1435 9.19879 13.1411 8.51532C12.0691 7.78446 10.5732 7.41241 8.93886 7.20378C8.08047 7.0942 7.75185 7.34666 7.569 7.60565Z',
  d7: 'M3.95524 17.25H3.95525H3.95526L7.02375 17.25V13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H7.02375V6.75001L3.95526 6.75C3.52244 6.74995 3.12561 6.74991 2.8028 6.79331C2.44732 6.8411 2.07159 6.95355 1.76257 7.26257C1.45355 7.57159 1.3411 7.94732 1.29331 8.3028C1.24991 8.62561 1.24995 9.02244 1.25 9.45526L1.25 14.5448C1.24995 14.9776 1.24991 15.3744 1.29331 15.6972C1.3411 16.0527 1.45355 16.4284 1.76257 16.7374C2.07159 17.0465 2.44732 17.1589 2.8028 17.2067C3.12561 17.2501 3.52243 17.2501 3.95524 17.25Z',
  d8: 'M22.2371 7.26257C21.9281 6.95355 21.5524 6.8411 21.1969 6.79331C20.8741 6.74991 20.4772 6.74995 20.0444 6.75L12.5433 6.75001L13.3891 7.93558C14.1011 8.93363 14.838 9.97747 15.0538 11.2514C15.2601 12.4693 15.0026 14.0211 13.4112 16.035L12.4512 17.25L20.0444 17.25H20.0444H20.0444C20.4772 17.2501 20.8741 17.2501 21.1969 17.2067C21.5524 17.1589 21.9281 17.0465 22.2371 16.7374C22.5461 16.4284 22.6586 16.0527 22.7064 15.6972C22.7498 15.3744 22.7497 14.9776 22.7497 14.5448V14.5448V14.5448V9.45526V9.45525V9.45524C22.7497 9.02243 22.7498 8.62561 22.7064 8.3028C22.6586 7.94732 22.5461 7.57159 22.2371 7.26257ZM19.9955 11C19.4457 11 19 11.4477 19 12C19 12.5523 19.4457 13 19.9956 13H20.0045C20.5543 13 21 12.5523 21 12C21 11.4477 20.5543 11 20.0045 11H19.9955Z',
  d9: 'M3.95525 17.25C3.52244 17.2501 3.12561 17.2501 2.8028 17.2067C2.44732 17.1589 2.07159 17.0465 1.76257 16.7374C1.45355 16.4284 1.3411 16.0527 1.29331 15.6972C1.24991 15.3744 1.24995 14.9776 1.25 14.5448L1.25 9.45526C1.24995 9.02244 1.24991 8.62561 1.29331 8.3028C1.3411 7.94732 1.45355 7.57159 1.76257 7.26257C2.07159 6.95355 2.44732 6.8411 2.8028 6.79331C3.12561 6.74991 3.52244 6.74995 3.95526 6.75L7.02375 6.75001V17.25L3.95526 17.25H3.95525Z',
  d10: 'M3 12C3 11.4477 3.44772 11 4 11H9C9.55228 11 10 11.4477 10 12C10 12.5523 9.55228 13 9 13H4C3.44772 13 3 12.5523 3 12Z',
  d11: 'M21.1969 6.79331C21.5524 6.8411 21.9281 6.95355 22.2371 7.26257C22.5461 7.57159 22.6586 7.94732 22.7064 8.3028C22.7498 8.62561 22.7497 9.02244 22.7497 9.45525V9.45526V14.5448V14.5448C22.7497 14.9776 22.7498 15.3744 22.7064 15.6972C22.6586 16.0527 22.5461 16.4284 22.2371 16.7374C21.9281 17.0465 21.5524 17.1589 21.1969 17.2067C20.8741 17.2501 20.4772 17.2501 20.0444 17.25H20.0444L12.4512 17.25L13.4112 16.035C15.0026 14.0211 15.2601 12.4693 15.0538 11.2514C14.838 9.97747 14.1011 8.93363 13.3891 7.93558L12.5433 6.75001L20.0444 6.75C20.4772 6.74995 20.8741 6.74991 21.1969 6.79331Z',
  d12: 'M19 12C19 11.4477 19.4457 11 19.9955 11H20.0045C20.5543 11 21 11.4477 21 12C21 12.5523 20.5543 13 20.0045 13H19.9956C19.4457 13 19 12.5523 19 12Z',
  d13: 'M6 6V18L10 18C13.3137 18 16 15.3137 16 12C16 8.68629 13.3137 6 10 6H6Z',
  d14: 'M4 12H11',
  d15: 'M6 6C6 5.44772 6.44772 5 7 5H10C13.866 5 17 8.13401 17 12C17 15.866 13.866 19 10 19L7 19C6.73479 19 6.48043 18.8946 6.29289 18.7071C6.10536 18.5196 6 18.2652 6 18V6ZM8 7V17L10 17C12.7614 17 15 14.7614 15 12C15 9.23857 12.7614 7 10 7H8Z',
  d16: 'M11 13H7V11H11V13Z',
  d17: 'M1.25 6.75H7.75V11H4V13H7.75V17.25H1.25V6.75ZM13.25 6.75H22.75V17.25L13.25 17.25L16.25 12L13.25 6.75ZM21.009 11H19L19 13H21.009L21.009 11Z',
};

export const IconBeltStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="belt-stroke-rounded IconBeltStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBeltDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="belt-duotone-rounded IconBeltDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBeltTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="belt-twotone-rounded IconBeltTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBeltSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="belt-solid-rounded IconBeltSolidRounded"
    >
      <path 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBeltBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="belt-bulk-rounded IconBeltBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconBeltStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="belt-stroke-sharp IconBeltStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBeltSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="belt-solid-sharp IconBeltSolidSharp"
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

export const iconPackOfBelt: TheIconSelfPack = {
  name: 'Belt',
  StrokeRounded: IconBeltStrokeRounded,
  DuotoneRounded: IconBeltDuotoneRounded,
  TwotoneRounded: IconBeltTwotoneRounded,
  SolidRounded: IconBeltSolidRounded,
  BulkRounded: IconBeltBulkRounded,
  StrokeSharp: IconBeltStrokeSharp,
  SolidSharp: IconBeltSolidSharp,
};