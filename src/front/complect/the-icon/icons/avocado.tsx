import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 5C12 4 12.4 2 14 2',
  d2: 'M12 18.0412V13.9588C12 13.167 12.2189 12.8334 13.1525 13.0797C16.2825 13.9053 16.2825 18.0947 13.1525 18.9203C12.2189 19.1666 12 18.833 12 18.0412Z',
  d3: 'M12 5C9.60677 5 7.66667 6.79086 7.66667 9C7.66667 10.2239 7.38897 11.5983 6.63829 12.6071C5.92023 13.5722 5.5 14.7408 5.5 16C5.5 19.3137 8.41015 22 12 22C15.5899 22 18.5 19.3137 18.5 16C18.5 14.7408 18.0798 13.5722 17.3617 12.6071C16.611 11.5983 16.3333 10.2239 16.3333 9C16.3333 6.79086 14.3932 5 12 5Z',
  d4: 'M7.66667 9C7.66667 6.79086 9.60677 5 12 5C14.3932 5 16.3333 6.79086 16.3333 9C16.3333 10.2239 16.611 11.5983 17.3617 12.6071C18.0798 13.5722 18.5 14.7408 18.5 16C18.5 19.3137 15.5899 22 12 22C8.41015 22 5.5 19.3137 5.5 16C5.5 14.7408 5.92023 13.5722 6.63829 12.6071C7.38897 11.5983 7.66667 10.2239 7.66667 9ZM13.1525 13.0797C12.2189 12.8334 12 13.167 12 13.9588V18.0412C12 18.833 12.2189 19.1666 13.1525 18.9203C16.2825 18.0947 16.2825 13.9053 13.1525 13.0797Z',
  d5: 'M13.3015 3.68273C13.0857 4.1323 13 4.72242 13 5.125C13 5.67728 12.5523 6.125 12 6.125C11.4477 6.125 11 5.67728 11 5.125C11 4.52758 11.1143 3.6177 11.4985 2.81727C11.8938 1.99359 12.6747 1.125 14 1.125C14.5523 1.125 15 1.57272 15 2.125C15 2.67728 14.5523 3.125 14 3.125C13.7253 3.125 13.5062 3.25641 13.3015 3.68273Z',
  d6: 'M12 4.375C9.25021 4.375 6.91667 6.44625 6.91667 9.125C6.91667 10.2608 6.65492 11.4534 6.03658 12.2844C5.22822 13.3708 4.75 14.6947 4.75 16.125C4.75 19.9083 8.05359 22.875 12 22.875C15.9464 22.875 19.25 19.9083 19.25 16.125C19.25 14.6947 18.7718 13.3708 17.9634 12.2844C17.3451 11.4534 17.0833 10.2608 17.0833 9.125C17.0833 6.44625 14.7498 4.375 12 4.375ZM13.3438 12.4794C12.8552 12.3506 12.2114 12.2668 11.7293 12.6931C11.4945 12.9007 11.3799 13.1637 11.3217 13.3938C11.2645 13.6197 11.25 13.8598 11.25 14.0838V18.1662C11.25 18.3902 11.2645 18.6303 11.3217 18.8562C11.3799 19.0863 11.4945 19.3492 11.7293 19.5569C12.2114 19.9832 12.8552 19.8994 13.3438 19.7705C17.2187 18.7483 17.2187 13.5016 13.3438 12.4794Z',
  d7: 'M6.91667 9.125C6.91667 6.44625 9.25021 4.375 12 4.375C14.7498 4.375 17.0833 6.44625 17.0833 9.125C17.0833 10.2608 17.3451 11.4534 17.9634 12.2844C18.7718 13.3708 19.25 14.6947 19.25 16.125C19.25 19.9083 15.9464 22.875 12 22.875C8.05359 22.875 4.75 19.9083 4.75 16.125C4.75 14.6947 5.22822 13.3708 6.03658 12.2844C6.65492 11.4534 6.91667 10.2608 6.91667 9.125Z',
  d8: 'M13.059 4.47921C13.1067 4.20709 13.1852 3.92458 13.3012 3.68273C13.5059 3.25641 13.725 3.125 13.9997 3.125C14.552 3.125 14.9997 2.67728 14.9997 2.125C14.9997 1.57272 14.552 1.125 13.9997 1.125C12.6744 1.125 11.8936 1.99359 11.4982 2.81727C11.2385 3.35832 11.1021 3.94939 11.041 4.46016C11.3526 4.4042 11.6732 4.375 11.9997 4.375C12.3615 4.375 12.716 4.41085 13.059 4.47921Z',
  d9: 'M11.7293 12.6931C12.2114 12.2668 12.8552 12.3506 13.3438 12.4794C17.2187 13.5016 17.2187 18.7483 13.3438 19.7705C12.8552 19.8994 12.2114 19.9832 11.7293 19.5569C11.4945 19.3492 11.3799 19.0863 11.3217 18.8562C11.2645 18.6303 11.25 18.3902 11.25 18.1662V14.0838C11.25 13.8598 11.2645 13.6197 11.3217 13.3938C11.3799 13.1637 11.4945 12.9007 11.7293 12.6931Z',
  d10: 'M15 16C15 17.6569 13.6569 19 12 19V13C13.6569 13 15 14.3431 15 16Z',
  d11: 'M12.813 4.31105C12.8641 4.01959 12.9488 3.71482 13.0761 3.44955C13.3046 2.97356 13.594 2.75 14 2.75V1.25C12.806 1.25 12.0954 2.02644 11.7239 2.80045C11.4897 3.2883 11.3605 3.82326 11.2983 4.29539C8.86462 4.61222 6.91667 6.55255 6.91667 9C6.91667 10.1358 6.65492 11.3284 6.03658 12.1594C5.22822 13.2458 4.75 14.5697 4.75 16C4.75 19.7833 8.05359 22.75 12 22.75C15.9464 22.75 19.25 19.7833 19.25 16C19.25 14.5697 18.7718 13.2458 17.9634 12.1594C17.3451 11.3284 17.0833 10.1358 17.0833 9C17.0833 6.58997 15.1945 4.67167 12.813 4.31105ZM11.25 12.25H12C14.0711 12.25 15.75 13.9289 15.75 16C15.75 18.0711 14.0711 19.75 12 19.75H11.25V12.25Z',
};

export const IconAvocadoStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="avocado-stroke-rounded IconAvocadoStrokeRounded"
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

export const IconAvocadoDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="avocado-duotone-rounded IconAvocadoDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconAvocadoTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="avocado-twotone-rounded IconAvocadoTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAvocadoSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="avocado-solid-rounded IconAvocadoSolidRounded"
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

export const IconAvocadoBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="avocado-bulk-rounded IconAvocadoBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAvocadoStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="avocado-stroke-sharp IconAvocadoStrokeSharp"
    >
      <path 
        d={d.d1} 
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

export const IconAvocadoSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="avocado-solid-sharp IconAvocadoSolidSharp"
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

export const iconPackOfAvocado: TheIconSelfPack = {
  name: 'Avocado',
  StrokeRounded: IconAvocadoStrokeRounded,
  DuotoneRounded: IconAvocadoDuotoneRounded,
  TwotoneRounded: IconAvocadoTwotoneRounded,
  SolidRounded: IconAvocadoSolidRounded,
  BulkRounded: IconAvocadoBulkRounded,
  StrokeSharp: IconAvocadoStrokeSharp,
  SolidSharp: IconAvocadoSolidSharp,
};