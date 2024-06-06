import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z',
  d2: 'M15 14C15 15.1046 14.1046 16 13 16H12C11.0681 16 10.6022 16 10.2346 15.8478C9.74458 15.6448 9.35523 15.2554 9.15224 14.7654C9 14.3978 9 13.9319 9 13V11C9 10.0681 9 9.60218 9.15224 9.23463C9.35523 8.74458 9.74458 8.35523 10.2346 8.15224C10.6022 8 11.0681 8 12 8H13C14.1046 8 15 8.89543 15 10',
  d3: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM13 7L11.968 7C11.5294 6.99999 11.1509 6.99998 10.8376 7.02135C10.5078 7.04386 10.1779 7.09336 9.85195 7.22836C9.11687 7.53284 8.53284 8.11687 8.22836 8.85195C8.09336 9.17788 8.04386 9.50779 8.02135 9.83762C7.99998 10.1509 7.99999 10.5294 8 10.968V13.032C7.99999 13.4706 7.99998 13.8491 8.02135 14.1624C8.04386 14.4922 8.09336 14.8221 8.22836 15.1481C8.53284 15.8831 9.11687 16.4672 9.85195 16.7716C10.1779 16.9066 10.5078 16.9561 10.8376 16.9787C11.1509 17 11.5293 17 11.968 17H11.968H13C14.6569 17 16 15.6569 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14C14 14.5523 13.5523 15 13 15H12C11.5204 15 11.2107 14.9995 10.9738 14.9833C10.7458 14.9677 10.6589 14.9411 10.6173 14.9239C10.3723 14.8224 10.1776 14.6277 10.0761 14.3827C10.0589 14.3411 10.0323 14.2542 10.0167 14.0262C10.0005 13.7893 10 13.4796 10 13V11C10 10.5204 10.0005 10.2107 10.0167 9.97376C10.0323 9.74576 10.0589 9.65893 10.0761 9.61732C10.1776 9.37229 10.3723 9.17762 10.6173 9.07612C10.6589 9.05888 10.7458 9.03227 10.9738 9.01671C11.2107 9.00054 11.5204 9 12 9H13C13.5523 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11C15.5523 11 16 10.5523 16 10C16 8.34315 14.6569 7 13 7Z',
  d4: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d5: 'M11.968 7L13 7C14.6569 7 16 8.34315 16 10C16 10.5523 15.5523 11 15 11C14.4477 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H12C11.5204 9 11.2107 9.00054 10.9738 9.01671C10.7458 9.03227 10.6589 9.05888 10.6173 9.07612C10.3723 9.17762 10.1776 9.37229 10.0761 9.61732C10.0589 9.65893 10.0323 9.74576 10.0167 9.97376C10.0005 10.2107 10 10.5204 10 11V13C10 13.4796 10.0005 13.7893 10.0167 14.0262C10.0323 14.2542 10.0589 14.3411 10.0761 14.3827C10.1776 14.6277 10.3723 14.8224 10.6173 14.9239C10.6589 14.9411 10.7458 14.9677 10.9738 14.9833C11.2107 14.9995 11.5204 15 12 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 14.4477 13 15 13C15.5523 13 16 13.4477 16 14C16 15.6569 14.6569 17 13 17H11.968C11.5294 17 11.1509 17 10.8376 16.9787C10.5078 16.9561 10.1779 16.9066 9.85195 16.7716C9.11687 16.4672 8.53284 15.8831 8.22836 15.1481C8.09336 14.8221 8.04386 14.4922 8.02135 14.1624C7.99998 13.8491 7.99999 13.4706 8 13.032V10.968C7.99999 10.5294 7.99998 10.1509 8.02135 9.83762C8.04386 9.50779 8.09336 9.17788 8.22836 8.85195C8.53284 8.11687 9.11687 7.53284 9.85195 7.22836C10.1779 7.09336 10.5078 7.04386 10.8376 7.02135C11.1509 6.99998 11.5294 6.99999 11.968 7Z',
  d6: 'M15.0002 13.5L15 16H9L9.00024 8H15.0002L15 10.5',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM9.00024 7C8.44796 7 8.00025 7.4477 8.00024 7.99997L8 16C7.99999 16.2652 8.10535 16.5196 8.29288 16.7071C8.48042 16.8946 8.73478 17 9 17H15C15.5522 17 15.9999 16.5523 16 16.0001L16.0002 13.5001L14.0002 13.4999L14.0001 15H10L10.0002 9H14.0001L14 10.4999L16 10.5001L16.0002 8.00009C16.0003 7.73486 15.8949 7.48048 15.7074 7.29293C15.5198 7.10537 15.2655 7 15.0002 7H9.00024Z',
};

export const IconCopyrightStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="copyright-stroke-rounded IconCopyrightStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCopyrightDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="copyright-duotone-rounded IconCopyrightDuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCopyrightTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="copyright-twotone-rounded IconCopyrightTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCopyrightSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="copyright-solid-rounded IconCopyrightSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCopyrightBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="copyright-bulk-rounded IconCopyrightBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCopyrightStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="copyright-stroke-sharp IconCopyrightStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCopyrightSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="copyright-solid-sharp IconCopyrightSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCopyright: TheIconSelfPack = {
  name: 'Copyright',
  StrokeRounded: IconCopyrightStrokeRounded,
  DuotoneRounded: IconCopyrightDuotoneRounded,
  TwotoneRounded: IconCopyrightTwotoneRounded,
  SolidRounded: IconCopyrightSolidRounded,
  BulkRounded: IconCopyrightBulkRounded,
  StrokeSharp: IconCopyrightStrokeSharp,
  SolidSharp: IconCopyrightSolidSharp,
};