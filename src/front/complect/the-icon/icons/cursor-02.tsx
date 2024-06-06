import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.42847 3.52383C5.4919 1.30171 21.0128 6.74513 21 8.73253C20.9855 10.9862 14.9387 11.6795 13.2626 12.1497C12.2548 12.4325 11.9848 12.7223 11.7524 13.7792C10.6999 18.5657 10.1715 20.9464 8.96711 20.9997C7.04737 21.0845 1.41472 5.69242 3.42847 3.52383Z',
  d2: 'M13 12.2294C12.2049 12.493 11.9632 12.8206 11.7524 13.7792C10.6999 18.5657 10.1715 20.9464 8.96711 20.9996C7.15352 21.0798 2.0263 7.34733 3.16263 4',
  d3: 'M21.4233 7.8667C21.582 8.07437 21.7523 8.37392 21.75 8.73735C21.7439 9.67812 21.1031 10.3392 20.4311 10.7787C19.7446 11.2278 18.8525 11.5651 17.9687 11.8286C17.0749 12.0952 16.1354 12.3016 15.3288 12.4687C14.7631 12.584 13.7601 12.7891 13.4652 12.8718C12.9855 13.0064 12.8401 13.1049 12.7666 13.1842C12.6896 13.2673 12.5968 13.4313 12.4849 13.9403L12.4842 13.9433C11.9628 16.3145 11.5575 18.158 11.1257 19.4091C10.9103 20.0332 10.6667 20.5772 10.3565 20.9798C10.0321 21.4008 9.58758 21.723 9.0002 21.7489C8.63079 21.7652 8.32556 21.5965 8.1192 21.4433C7.90134 21.2814 7.6976 21.0653 7.50983 20.8307C7.13231 20.3591 6.73677 19.7079 6.34409 18.9575C5.55467 17.4489 4.71927 15.4272 4.01261 13.3481C3.30627 11.2699 2.71729 9.10127 2.43347 7.29781C2.29195 6.39853 2.22162 5.56157 2.2607 4.85917C2.29766 4.19486 2.43924 3.4869 2.87887 3.01347C3.33198 2.52551 4.03887 2.34573 4.70448 2.28158C5.40563 2.214 6.24371 2.25904 7.14386 2.37711C8.94949 2.61394 11.1295 3.16192 13.2226 3.83567C15.3171 4.50987 17.3595 5.32128 18.8898 6.09915C19.6513 6.48618 20.3134 6.87864 20.7958 7.25658C21.036 7.44474 21.2567 7.64857 21.4233 7.8667Z',
  d4: 'M12.7666 13.1824C12.6896 13.2655 12.5968 13.4295 12.4849 13.9385L12.4842 13.9416C11.9628 16.3127 11.5575 18.1562 11.1257 19.4073C10.9103 20.0314 10.6667 20.5754 10.3565 20.9781C10.0321 21.3991 9.58758 21.7212 9.0002 21.7472C8.63079 21.7635 8.32556 21.5948 8.1192 21.4415C7.90134 21.2797 7.6976 21.0635 7.50983 20.829C7.13231 20.3574 6.73677 19.7062 6.34409 18.9558C5.55467 17.4471 4.71927 15.4255 4.01261 13.3464C3.30627 11.2682 2.71729 9.09953 2.43347 7.29606C2.29195 6.39678 2.22162 5.55982 2.2607 4.85742C2.29766 4.19311 2.43924 3.48515 2.87887 3.01172L12.7666 13.1824Z',
  d5: 'M21 9L3 3L9 21L12 12L21 9Z',
  d6: 'M2.46969 2.46969C2.67056 2.26882 2.96769 2.19867 3.23719 2.28851L21.2372 8.28851C21.5434 8.39059 21.75 8.6772 21.75 9.00002C21.75 9.32284 21.5434 9.60945 21.2372 9.71153L12.5929 12.5929L9.71153 21.2372C9.60945 21.5434 9.32284 21.75 9.00002 21.75C8.6772 21.75 8.39059 21.5434 8.28851 21.2372L2.28851 3.23719C2.19867 2.96769 2.26882 2.67056 2.46969 2.46969Z',
};

export const IconCursor02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-02-stroke-rounded IconCursor02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursor02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-02-duotone-rounded IconCursor02DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconCursor02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-02-twotone-rounded IconCursor02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCursor02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-02-solid-rounded IconCursor02SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCursor02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-02-bulk-rounded IconCursor02BulkRounded"
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

export const IconCursor02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-02-stroke-sharp IconCursor02StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCursor02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cursor-02-solid-sharp IconCursor02SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCursor02: TheIconSelfPack = {
  name: 'Cursor02',
  StrokeRounded: IconCursor02StrokeRounded,
  DuotoneRounded: IconCursor02DuotoneRounded,
  TwotoneRounded: IconCursor02TwotoneRounded,
  SolidRounded: IconCursor02SolidRounded,
  BulkRounded: IconCursor02BulkRounded,
  StrokeSharp: IconCursor02StrokeSharp,
  SolidSharp: IconCursor02SolidSharp,
};