import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.8831 10.2C15.1353 10.2 16.961 8.58822 16.961 6.6C16.961 4.61177 15.1353 3 12.8831 3C10.6309 3 8.80516 4.61177 8.80516 6.6V19.2C8.80516 20.1941 7.89228 21 6.76619 21C6.01148 21 5.35255 20.638 5 20.1M8.80516 14.7C8.80516 17.1853 11.0874 19.2 13.9026 19.2C16.7178 19.2 19 17.1853 19 14.7C19 12.2147 16.7178 10.0866 13.9026 10.0866',
  d2: 'M13.9021 10.0866C15.6609 9.68695 16.9606 8.27746 16.9606 6.6C16.9606 4.61177 15.1348 3 12.8826 3C10.6304 3 8.80469 4.61177 8.80469 6.6V14.7C8.80469 17.1853 11.0869 19.2 13.9021 19.2C16.7173 19.2 18.9995 17.1853 18.9995 14.7C18.9995 12.2147 16.7173 10.0866 13.9021 10.0866Z',
  d3: 'M12.9088 10.2C15.1683 10.2 17 8.58822 17 6.6C17 4.61177 15.1683 3 12.9088 3C10.6493 3 8.81756 4.61177 8.81756 6.6V19.2C8.81756 20.1941 7.9017 21 6.77194 21C6.01478 21 5.3537 20.638 5 20.1',
  d4: 'M12.8832 4C11.0625 4 9.80527 5.27757 9.80527 6.6V14.7C9.80527 16.5195 11.519 18.2 13.9027 18.2C16.2864 18.2 18.0001 16.5195 18.0001 14.7C18.0001 12.8744 16.2982 11.1329 13.9948 11.0875C13.634 11.1613 13.2615 11.2 12.8832 11.2C12.3309 11.2 11.8832 10.7523 11.8832 10.2C11.8832 9.64772 12.3309 9.2 12.8832 9.2C13.142 9.2 13.3893 9.1742 13.6233 9.12613C13.6626 9.11474 13.7028 9.10568 13.7439 9.09913C15.0883 8.77265 15.9611 7.7019 15.9611 6.6C15.9611 5.27757 14.7039 4 12.8832 4ZM16.6413 9.69737C17.4525 8.89615 17.9611 7.82328 17.9611 6.6C17.9611 3.94598 15.5669 2 12.8832 2C10.1995 2 7.80527 3.94598 7.80527 6.6V19.2C7.80527 19.5283 7.4609 20 6.7663 20C6.32486 20 5.99156 19.7885 5.83654 19.5519C5.53384 19.09 4.91398 18.9609 4.45203 19.2636C3.99009 19.5663 3.86099 20.1861 4.16369 20.6481C4.71376 21.4875 5.69833 22 6.7663 22C8.32389 22 9.80527 20.8599 9.80527 19.2V18.7742C10.9059 19.6694 12.3596 20.2 13.9027 20.2C17.1494 20.2 20.0001 17.8511 20.0001 14.7C20.0001 12.5061 18.608 10.6226 16.6413 9.69737Z',
  d5: 'M12.8832 4C11.0625 4 9.80527 5.27757 9.80527 6.6V19.2C9.80527 20.8599 8.32389 22 6.7663 22C5.69833 22 4.71376 21.4875 4.16369 20.6481C3.86099 20.1861 3.99009 19.5663 4.45203 19.2636C4.91398 18.9609 5.53384 19.09 5.83654 19.5519C5.99156 19.7885 6.32486 20 6.7663 20C7.4609 20 7.80527 19.5283 7.80527 19.2V6.6C7.80527 3.94598 10.1995 2 12.8832 2C15.5669 2 17.9611 3.94598 17.9611 6.6C17.9611 7.82328 17.4525 8.89615 16.6413 9.69737C15.7728 10.6257 14.5151 11.0109 13.9948 11.0875C13.634 11.1613 13.2615 11.2 12.8832 11.2C12.3309 11.2 11.8832 10.7523 11.8832 10.2C11.8832 9.64772 12.3309 9.2 12.8832 9.2C13.142 9.2 13.3893 9.1742 13.6233 9.12613C13.6626 9.11474 13.7028 9.10568 13.7439 9.09913C15.0883 8.77265 15.9611 7.7019 15.9611 6.6C15.9611 5.27757 14.7039 4 12.8832 4Z',
  d6: 'M16.3907 9.69737C17.2019 8.89615 17.7105 7.82328 17.7105 6.6C17.7105 3.94598 15.3163 2 12.6326 2C9.94893 2 7.55467 3.94598 7.55467 6.6V19.2C7.55467 19.5283 7.2103 20 6.5157 20C6.07426 20 5.74096 19.7885 5.58594 19.5519L4.25098 21.0692C4.82094 21.6557 5.64031 22 6.5157 22C8.07329 22 9.55467 20.8599 9.55467 19.2V18.7742C10.6553 19.6694 12.109 20.2 13.6521 20.2C16.8988 20.2 19.7495 17.8511 19.7495 14.7C19.7495 12.5061 18.3574 10.6226 16.3907 9.69737ZM9.55371 6.6C9.55371 5.27757 10.811 4 12.6316 4C14.4523 4 15.7096 5.27757 15.7096 6.6C15.7096 7.92243 14.4523 9.2 12.6316 9.2V11.2C13.0099 11.2 13.3824 11.1613 13.7432 11.0875C16.0466 11.1329 17.7486 12.8744 17.7486 14.7C17.7486 16.5195 16.0349 18.2 13.6511 18.2C11.2674 18.2 9.55371 16.5195 9.55371 14.7V6.6Z',
};

export const IconBetaStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="beta-stroke-rounded IconBetaStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBetaDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="beta-duotone-rounded IconBetaDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBetaTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="beta-twotone-rounded IconBetaTwotoneRounded"
    >
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

export const IconBetaSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="beta-solid-rounded IconBetaSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBetaBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="beta-bulk-rounded IconBetaBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBetaStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="beta-stroke-sharp IconBetaStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBetaSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="beta-solid-sharp IconBetaSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBeta: TheIconSelfPack = {
  name: 'Beta',
  StrokeRounded: IconBetaStrokeRounded,
  DuotoneRounded: IconBetaDuotoneRounded,
  TwotoneRounded: IconBetaTwotoneRounded,
  SolidRounded: IconBetaSolidRounded,
  BulkRounded: IconBetaBulkRounded,
  StrokeSharp: IconBetaStrokeSharp,
  SolidSharp: IconBetaSolidSharp,
};