import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.77027 2.5 5.6554 3.69797 4.25276C3.86808 4.05358 4.05358 3.86808 4.25276 3.69797C5.6554 2.5 7.77027 2.5 12 2.5C16.2297 2.5 18.3446 2.5 19.7472 3.69797C19.9464 3.86808 20.1319 4.05358 20.302 4.25276C21.5 5.6554 21.5 7.77027 21.5 12C21.5 16.2297 21.5 18.3446 20.302 19.7472C20.1319 19.9464 19.9464 20.1319 19.7472 20.302C18.3446 21.5 16.2297 21.5 12 21.5C7.77027 21.5 5.6554 21.5 4.25276 20.302C4.05358 20.1319 3.86808 19.9464 3.69797 19.7472C2.5 18.3446 2.5 16.2297 2.5 12Z',
  d2: 'M8 17.5L16 7.5',
  d3: 'M17.0242 1.90522C15.7462 1.74998 14.1227 1.74999 12.0513 1.75C9.97982 1.74999 8.25376 1.74998 6.97578 1.90522C5.66982 2.06386 4.62456 2.39411 3.76567 3.12767C3.53662 3.3233 3.3233 3.53662 3.12767 3.76567C2.39411 4.62456 2.06386 5.66982 1.90522 6.97578C1.74998 8.25376 1.74999 9.97982 1.75 12.0513C1.74999 14.1227 1.74998 15.7462 1.90522 17.0242C2.06386 18.3302 2.39411 19.3754 3.12767 20.2343C3.32329 20.4634 3.53662 20.6767 3.76567 20.8723C4.62456 21.6059 5.66982 21.9361 6.97578 22.0948C8.25376 22.25 9.87731 22.25 11.9487 22.25C14.0202 22.25 15.7462 22.25 17.0242 22.0948C18.3302 21.9361 19.3754 21.6059 20.2343 20.8723C20.4634 20.6767 20.6767 20.4634 20.8723 20.2343C21.6059 19.3754 21.9361 18.3302 22.0948 17.0242C22.25 15.7462 22.25 14.1227 22.25 12.0513C22.25 9.97982 22.25 8.25376 22.0948 6.97578C21.9361 5.66982 21.6059 4.62456 20.8723 3.76567C20.6767 3.53662 20.4634 3.32329 20.2343 3.12767C19.3754 2.39411 18.3302 2.06386 17.0242 1.90522ZM16.7809 8.12473C17.1259 7.69347 17.056 7.06418 16.6247 6.71917C16.1935 6.37416 15.5642 6.44408 15.2192 6.87534L7.21917 16.8753C6.87416 17.3066 6.94408 17.9359 7.37534 18.2809C7.8066 18.6259 8.4359 18.556 8.78091 18.1247L16.7809 8.12473Z',
  d4: 'M12.0513 1.75C14.1227 1.74999 15.7462 1.74998 17.0242 1.90522C18.3302 2.06386 19.3754 2.39411 20.2343 3.12767C20.4634 3.32329 20.6767 3.53662 20.8723 3.76567C21.6059 4.62456 21.9361 5.66982 22.0948 6.97578C22.25 8.25376 22.25 9.97982 22.25 12.0513C22.25 14.1227 22.25 15.7462 22.0948 17.0242C21.9361 18.3302 21.6059 19.3754 20.8723 20.2343C20.6767 20.4634 20.4634 20.6767 20.2343 20.8723C19.3754 21.6059 18.3302 21.9361 17.0242 22.0948C15.7462 22.25 14.0202 22.25 11.9487 22.25C9.87731 22.25 8.25376 22.25 6.97578 22.0948C5.66982 21.9361 4.62456 21.6059 3.76567 20.8723C3.53662 20.6767 3.32329 20.4634 3.12767 20.2343C2.39411 19.3754 2.06386 18.3302 1.90522 17.0242C1.74998 15.7462 1.74999 14.1227 1.75 12.0513C1.74999 9.97982 1.74998 8.25376 1.90522 6.97578C2.06386 5.66982 2.39411 4.62456 3.12767 3.76567C3.3233 3.53662 3.53662 3.3233 3.76567 3.12767C4.62456 2.39411 5.66982 2.06386 6.97578 1.90522C8.25376 1.74998 9.97982 1.74999 12.0513 1.75Z',
  d5: 'M16.6247 6.71917C17.056 7.06418 17.1259 7.69347 16.7809 8.12473L8.78091 18.1247C8.4359 18.556 7.8066 18.6259 7.37534 18.2809C6.94408 17.9359 6.87416 17.3066 7.21917 16.8753L15.2192 6.87534C15.5642 6.44408 16.1935 6.37416 16.6247 6.71917Z',
  d6: 'M3 3H21V21H3V3Z',
  d7: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM14.8446 7.34375L6.59473 17.6561H9.15598L17.4059 7.34375H14.8446Z',
};

export const IconGrokStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="grok-stroke-rounded IconGrokStrokeRounded"
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

export const IconGrokDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="grok-duotone-rounded IconGrokDuotoneRounded"
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

export const IconGrokTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="grok-twotone-rounded IconGrokTwotoneRounded"
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

export const IconGrokSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="grok-solid-rounded IconGrokSolidRounded"
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

export const IconGrokBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="grok-bulk-rounded IconGrokBulkRounded"
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

export const IconGrokStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="grok-stroke-sharp IconGrokStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconGrokSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="grok-solid-sharp IconGrokSolidSharp"
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

export const iconPackOfGrok: TheIconSelfPack = {
  name: 'Grok',
  StrokeRounded: IconGrokStrokeRounded,
  DuotoneRounded: IconGrokDuotoneRounded,
  TwotoneRounded: IconGrokTwotoneRounded,
  SolidRounded: IconGrokSolidRounded,
  BulkRounded: IconGrokBulkRounded,
  StrokeSharp: IconGrokStrokeSharp,
  SolidSharp: IconGrokSolidSharp,
};