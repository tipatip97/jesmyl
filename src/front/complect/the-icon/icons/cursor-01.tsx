import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.03497 19.6912C8.74124 19.5189 9.93225 16.7787 11.3342 15.9228C11.8865 15.5856 12.3761 15.9281 12.722 16.3784L16.069 20.7348C16.6521 21.4939 17.0628 21.7198 17.9421 21.2696C19.2939 20.5775 20.5785 19.2911 21.2696 17.9418C21.7198 17.0628 21.4939 16.652 20.735 16.069L16.3784 12.722C15.9281 12.376 15.5857 11.8865 15.9229 11.3342C16.7787 9.93222 19.519 8.74121 19.6912 7.03495C19.9941 3.92489 5.43696 1.09287 3.26477 3.26477C1.09286 5.43695 3.92489 19.994 7.03497 19.6912Z',
  d2: 'M3.26477 3.26562C1.09286 5.4378 3.92489 19.9949 7.03497 19.692C8.74124 19.5198 9.93225 16.7795 11.3342 15.9237C11.8865 15.5865 12.3761 15.9289 12.722 16.3792L16.069 20.7357C16.6521 21.4948 17.0628 21.7206 17.9421 21.2705C18.6178 20.9245 19.2767 20.4301 19.8531 19.8536',
  d3: 'M19.69 5.35886C20.1396 5.80545 20.5067 6.39938 20.4377 7.10765L20.4374 7.11028C20.3749 7.72973 20.0838 8.25657 19.7391 8.69375C19.3957 9.12929 18.9621 9.52177 18.547 9.87195C18.3652 10.0253 18.1943 10.1649 18.0299 10.2991C17.7924 10.4929 17.5685 10.6757 17.3449 10.8731C16.9788 11.1964 16.7166 11.4734 16.563 11.7249C16.524 11.7593 16.5237 11.8878 16.8353 12.1272L21.1919 15.4742C21.5776 15.7705 21.9943 16.1379 22.1673 16.6574C22.3559 17.2237 22.1993 17.7717 21.9371 18.2837C21.1745 19.7728 19.776 21.1733 18.2838 21.9372C17.7718 22.1994 17.2237 22.3559 16.6575 22.1673C16.1379 21.9942 15.7706 21.5775 15.4742 21.1918L12.1273 16.8353C11.8969 16.5354 11.7631 16.5288 11.725 16.563C11.4735 16.7165 11.1964 16.9788 10.8732 17.3449C10.6757 17.5685 10.493 17.7923 10.2991 18.0297L10.2991 18.0298L10.299 18.0299C10.1648 18.1943 10.0253 18.3651 9.87198 18.5469C9.5218 18.9621 9.12932 19.3956 8.69377 19.739C8.25659 20.0837 7.72975 20.3748 7.1103 20.4374L7.10768 20.4376C6.3994 20.5066 5.80547 20.1395 5.35888 19.69C4.907 19.2351 4.50723 18.6021 4.15577 17.8896C3.44924 16.4572 2.85535 14.5323 2.43559 12.5624C2.01493 10.5883 1.75924 8.5223 1.75025 6.79428C1.74575 5.93167 1.8025 5.12989 1.94097 4.45576C2.07439 3.80625 2.30522 3.16371 2.73441 2.73447C3.16365 2.30529 3.80626 2.07439 4.45577 1.94097C5.12991 1.8025 5.93169 1.74575 6.7943 1.75025C8.52232 1.75924 10.5883 2.01493 12.5625 2.43559C14.5323 2.85535 16.4573 3.44923 17.8896 4.15576C18.6021 4.50722 19.2352 4.90698 19.69 5.35886Z',
  d4: 'M18.2838 21.9371C17.7718 22.1993 17.2237 22.3558 16.6575 22.1672C16.1379 21.9941 15.7706 21.5774 15.4742 21.1917L12.1273 16.8352C11.8969 16.5354 11.7631 16.5287 11.725 16.5629C11.4735 16.7164 11.1964 16.9787 10.8732 17.3448C10.6758 17.5683 10.493 17.7922 10.2992 18.0296L10.2991 18.0297C10.1649 18.1941 10.0254 18.365 9.87198 18.5468C9.5218 18.962 9.12932 19.3955 8.69377 19.7389C8.25659 20.0836 7.72975 20.3747 7.1103 20.4373L7.10768 20.4375C6.3994 20.5065 5.80547 20.1394 5.35888 19.6899C4.907 19.235 4.50723 18.602 4.15577 17.8895C3.44924 16.4571 2.85535 14.5322 2.43559 12.5623C2.01493 10.5882 1.75924 8.5222 1.75025 6.79418C1.74575 5.93158 1.8025 5.1298 1.94097 4.45566C2.07439 3.80615 2.30522 3.16361 2.73441 2.73438L20.3832 20.3832C19.7519 21.0145 19.0296 21.5553 18.2838 21.9371Z',
  d5: 'M20.9998 6.59993L3 3L6.59999 20.9993L12.0001 15.5996L17.4005 21L21 17.3996L15.5999 11.9994L20.9998 6.59993Z',
  d6: 'M2.46968 2.46968C2.647 2.29237 2.9012 2.2154 3.1471 2.26458L21.1469 5.8645C21.4181 5.91875 21.6375 6.11788 21.7176 6.38261C21.7978 6.64735 21.7257 6.93471 21.5301 7.13029L16.6606 11.9995L21.5303 16.8692C21.8232 17.1621 21.8232 17.6369 21.5304 17.9298L17.931 21.5303C17.7903 21.671 17.5995 21.75 17.4006 21.75C17.2017 21.75 17.0109 21.671 16.8702 21.5303L12.0001 16.6602L7.13031 21.5297C6.93473 21.7252 6.64738 21.7973 6.38265 21.7171C6.11793 21.637 5.91881 21.4176 5.86457 21.1464L2.26458 3.1471C2.2154 2.90121 2.29236 2.647 2.46968 2.46968Z',
};

export const IconCursor01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-01-stroke-rounded IconCursor01StrokeRounded"
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

export const IconCursor01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-01-duotone-rounded IconCursor01DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCursor01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-01-twotone-rounded IconCursor01TwotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCursor01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-01-solid-rounded IconCursor01SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursor01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-01-bulk-rounded IconCursor01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursor01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-01-stroke-sharp IconCursor01StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCursor01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-01-solid-sharp IconCursor01SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCursor01: TheIconSelfPack = {
  name: 'Cursor01',
  StrokeRounded: IconCursor01StrokeRounded,
  DuotoneRounded: IconCursor01DuotoneRounded,
  TwotoneRounded: IconCursor01TwotoneRounded,
  SolidRounded: IconCursor01SolidRounded,
  BulkRounded: IconCursor01BulkRounded,
  StrokeSharp: IconCursor01StrokeSharp,
  SolidSharp: IconCursor01SolidSharp,
};