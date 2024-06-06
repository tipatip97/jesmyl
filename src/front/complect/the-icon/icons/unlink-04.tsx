import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10 13.229C10.1416 13.4609 10.3097 13.6804 10.5042 13.8828C11.7117 15.1395 13.5522 15.336 14.9576 14.4722C15.218 14.3121 15.4634 14.1157 15.6872 13.8828L18.9266 10.5114C20.3578 9.02184 20.3578 6.60676 18.9266 5.11718C17.4953 3.6276 15.1748 3.62761 13.7435 5.11718L13.03 5.85978',
  d2: 'M10.9703 18.14L10.2565 18.8828C8.82526 20.3724 6.50471 20.3724 5.07345 18.8828C3.64218 17.3932 3.64218 14.9782 5.07345 13.4886L8.31287 10.1172C9.74413 8.62761 12.0647 8.6276 13.4959 10.1172C13.6904 10.3195 13.8584 10.539 14 10.7708',
  d3: 'M21 16H18.9211M16 21L16 18.9211',
  d4: 'M3 8H5.07889M8 3L8 5.07889',
  d5: 'M9.99738 9.11804C9.07987 10.5955 9.24293 12.5885 10.4865 13.8828C11.2044 14.63 12.1461 15.0024 13.087 15C13.3948 15.0008 13.7027 14.9614 14.0028 14.882C13.8643 15.1049 13.7013 15.3161 13.5136 15.5114L10.2742 18.8828C10.0505 19.1157 9.80503 19.3121 9.54463 19.4722C8.96952 19.8257 8.32154 20.0016 7.6739 20C6.73298 20.0024 5.79135 19.63 5.07345 18.8828C3.64218 17.3932 3.64218 14.9782 5.07345 13.4886L8.31287 10.1172C8.79588 9.61449 9.38017 9.28145 9.99738 9.11804Z',
  d6: 'M13.0226 4.42434C14.8474 2.52522 17.823 2.52522 19.6478 4.42433C21.4509 6.30095 21.4509 9.32764 19.6478 11.2043L16.4084 14.5757C16.126 14.8696 15.8142 15.1196 15.4814 15.3241C13.6795 16.4316 11.3201 16.1751 9.78322 14.5757C9.53777 14.3202 9.32551 14.043 9.14668 13.7501C8.85886 13.2788 9.00764 12.6633 9.479 12.3755C9.95035 12.0877 10.5658 12.2365 10.8536 12.7078C11.5911 13.9156 13.1992 14.3793 14.4341 13.6202C14.6221 13.5047 14.8012 13.3617 14.9662 13.19L18.2056 9.81857C19.265 8.71604 19.265 6.91256 18.2056 5.81003C17.1679 4.72999 15.5025 4.72999 14.4648 5.81003L13.7513 6.55263C13.3686 6.95087 12.7356 6.96352 12.3373 6.58087C11.9391 6.19822 11.9264 5.56518 12.3091 5.16693L13.0226 4.42434Z',
  d7: 'M7.59179 9.42433C9.41655 7.52522 12.3923 7.52522 14.217 9.42433C14.4624 9.67972 14.6746 9.95686 14.8534 10.2496C15.1413 10.721 14.9925 11.3364 14.5212 11.6243C14.0499 11.9121 13.4344 11.7634 13.1466 11.292C13.0422 11.1211 12.9183 10.9594 12.7749 10.81C11.7371 9.72999 10.0717 9.72999 9.03395 10.81L5.79453 14.1814C4.73516 15.284 4.73516 17.0874 5.79453 18.19C6.83229 19.27 8.49768 19.27 9.53544 18.19L10.2492 17.4471C10.6319 17.0489 11.2649 17.0362 11.6632 17.4189C12.0614 17.8015 12.074 18.4346 11.6914 18.8328L10.9776 19.5757C9.15284 21.4748 6.17713 21.4748 4.35237 19.5757C2.54921 17.699 2.54921 14.6724 4.35237 12.7957L7.59179 9.42433Z',
  d8: 'M17.9211 16C17.9211 15.4477 18.3688 15 18.9211 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H18.9211C18.3688 17 17.9211 16.5523 17.9211 16ZM16 17.9211C16.5523 17.9211 17 18.3688 17 18.9211L17 21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21L15 18.9211C15 18.3688 15.4477 17.9211 16 17.9211Z',
  d9: 'M8 2C8.55228 2 9 2.44772 9 3L9 5.07889C9 5.63117 8.55228 6.07889 8 6.07889C7.44771 6.07889 7 5.63117 7 5.07889L7 3C7 2.44772 7.44771 2 8 2ZM2 8C2 7.44771 2.44772 7 3 7H5.07889C5.63117 7 6.07889 7.44771 6.07889 8C6.07889 8.55228 5.63117 9 5.07889 9H3C2.44772 9 2 8.55228 2 8Z',
  d10: 'M21 16H17.9211M16 21L16 17.9211',
  d11: 'M3 8H6.07889M8 3L8 6.07889',
  d12: 'M13.0224 4.42434C14.8472 2.52522 17.8228 2.52522 19.6476 4.42433C21.4507 6.30095 21.4507 9.32764 19.6476 11.2043L16.4082 14.5757C16.1258 14.8696 15.814 15.1196 15.4812 15.3241C13.6793 16.4316 11.3199 16.1751 9.78303 14.5757C9.53757 14.3202 9.32531 14.043 9.14648 13.7501L10.8534 12.7078C10.9578 12.8788 11.0817 13.0406 11.2252 13.19C12.1034 14.104 13.4249 14.2404 14.4339 13.6202C14.6219 13.5047 14.801 13.3617 14.966 13.19L18.2054 9.81857C19.2648 8.71604 19.2648 6.91256 18.2054 5.81003C17.1677 4.72999 15.5023 4.72999 14.4646 5.81003L13.7511 6.55263L12.3089 5.16693L13.0224 4.42434Z',
  d13: 'M7.59179 9.42433C9.41655 7.52522 12.3923 7.52522 14.217 9.42433C14.4624 9.67972 14.6746 9.95686 14.8534 10.2496L13.1466 11.292C13.0422 11.1211 12.9183 10.9594 12.7749 10.81C11.7371 9.72999 10.0717 9.72999 9.03395 10.81L5.79453 14.1814C4.73516 15.284 4.73516 17.0874 5.79453 18.19C6.83229 19.27 8.49768 19.27 9.53544 18.19L10.2492 17.4471L11.6914 18.8328L10.9776 19.5757C9.15284 21.4748 6.17713 21.4748 4.35237 19.5757C2.54921 17.699 2.54921 14.6724 4.35237 12.7957L7.59179 9.42433Z',
  d14: 'M17.9211 15H21V17H17.9211V15ZM17 17.9211L17 21L15 21L15 17.9211L17 17.9211Z',
  d15: 'M7 6.07889L7 3H9L9 6.07889L7 6.07889ZM6.07889 9H3V7H6.07889V9Z',
};

export const IconUnlink04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unlink-04-stroke-rounded IconUnlink04StrokeRounded"
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
        strokeLinejoin="round" 
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

export const IconUnlink04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unlink-04-duotone-rounded IconUnlink04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        strokeLinejoin="round" 
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

export const IconUnlink04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unlink-04-twotone-rounded IconUnlink04TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
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

export const IconUnlink04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unlink-04-solid-rounded IconUnlink04SolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUnlink04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unlink-04-bulk-rounded IconUnlink04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUnlink04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unlink-04-stroke-sharp IconUnlink04StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUnlink04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unlink-04-solid-sharp IconUnlink04SolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUnlink04: TheIconSelfPack = {
  name: 'Unlink04',
  StrokeRounded: IconUnlink04StrokeRounded,
  DuotoneRounded: IconUnlink04DuotoneRounded,
  TwotoneRounded: IconUnlink04TwotoneRounded,
  SolidRounded: IconUnlink04SolidRounded,
  BulkRounded: IconUnlink04BulkRounded,
  StrokeSharp: IconUnlink04StrokeSharp,
  SolidSharp: IconUnlink04SolidSharp,
};