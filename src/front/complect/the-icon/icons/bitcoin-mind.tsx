import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15.5 22V21.5C15.5 20.3954 16.4321 19.5005 17.4223 19.011C18.3846 18.5354 19.1943 17.7511 19.2965 16.8313L19.5 15L21.5 14L19 10.25C19 5.69365 15.3063 2 10.75 2C6.19365 2 2.5 5.69365 2.5 10.25C2.5 13.0379 3.88283 15.5028 6 16.9962M6 16.9962V22M6 16.9962C6.75065 17.5257 7.59362 17.9331 8.5 18.1895',
  d2: 'M8.9375 12.6667L8.9375 7.33333M10.5 7.33333V6M10.5 14V12.6667M8.9375 10H12.0625M12.0625 10C12.5803 10 13 10.4477 13 11V11.6667C13 12.219 12.5803 12.6667 12.0625 12.6667H8M12.0625 10C12.5803 10 13 9.55228 13 9V8.33333C13 7.78105 12.5803 7.33333 12.0625 7.33333H8',
  d3: 'M10.75 2C6.19365 2 2.5 5.69365 2.5 10.25C2.5 13.0379 3.88283 15.5028 6 16.9962V22H15.5V21.5C15.5 20.3954 16.4321 19.5005 17.4223 19.011C18.3846 18.5354 19.1943 17.7511 19.2965 16.8313L19.5 15L21.5 14L19 10.25C19 5.69365 15.3063 2 10.75 2Z',
  d4: 'M1.75 10.25C1.75 13.15 3.12228 15.7295 5.25 17.3744V22C5.25 22.4142 5.58579 22.75 6 22.75H15.5C15.9142 22.75 16.25 22.4142 16.25 22C16.25 21.3308 16.8501 20.1305 17.7546 19.6834C18.8045 19.1644 19.8976 18.2128 20.0419 16.9141L20.2004 15.4883L21.8354 14.6708C22.0278 14.5746 22.1697 14.4004 22.2249 14.1925C22.2801 13.9846 22.2434 13.763 22.124 13.584L19.7471 10.0185C19.6243 5.15495 15.6432 1.25 10.75 1.25C5.77944 1.25 1.75 5.27944 1.75 10.25ZM11.25 6C11.25 5.58579 10.9142 5.25 10.5 5.25C10.0858 5.25 9.75 5.58579 9.75 6V6.58333H8C7.58579 6.58333 7.25 6.91912 7.25 7.33333C7.25 7.74755 7.58579 8.08333 8 8.08333H8.1875V11.9167H8C7.58579 11.9167 7.25 12.2525 7.25 12.6667C7.25 13.0809 7.58579 13.4167 8 13.4167H9.75V14C9.75 14.4142 10.0858 14.75 10.5 14.75C10.9142 14.75 11.25 14.4142 11.25 14V13.4167H12.0625C13.0393 13.4167 13.75 12.5868 13.75 11.6667V11C13.75 10.6376 13.6398 10.2892 13.4465 10C13.6398 9.7108 13.75 9.3624 13.75 9V8.33333C13.75 7.41317 13.0393 6.58333 12.0625 6.58333H11.25V6ZM9.6875 9.25V8.08333H12.0625C12.1212 8.08333 12.25 8.14893 12.25 8.33333V9C12.25 9.1844 12.1212 9.25 12.0625 9.25H9.6875ZM9.6875 10.75H12.0625C12.1212 10.75 12.25 10.8156 12.25 11V11.6667C12.25 11.8511 12.1212 11.9167 12.0625 11.9167H9.6875V10.75Z',
  d5: 'M5.25 17.3744C3.12228 15.7295 1.75 13.15 1.75 10.25C1.75 5.27944 5.77944 1.25 10.75 1.25C15.6432 1.25 19.6243 5.15495 19.7471 10.0185L22.124 13.584C22.2434 13.763 22.2801 13.9846 22.2249 14.1925C22.1697 14.4004 22.0278 14.5746 21.8354 14.6708L20.2004 15.4883L20.0419 16.9141C19.8976 18.2128 18.8045 19.1644 17.7546 19.6834C16.8501 20.1305 16.25 21.3308 16.25 22C16.25 22.4142 15.9142 22.75 15.5 22.75H6C5.58579 22.75 5.25 22.4142 5.25 22V17.3744Z',
  d6: 'M10.5 5.25C10.9142 5.25 11.25 5.58579 11.25 6V6.58333H12.0625C13.0393 6.58333 13.75 7.41317 13.75 8.33333V9C13.75 9.3624 13.6398 9.7108 13.4465 10C13.6398 10.2892 13.75 10.6376 13.75 11V11.6667C13.75 12.5868 13.0393 13.4167 12.0625 13.4167H11.25V14C11.25 14.4142 10.9142 14.75 10.5 14.75C10.0858 14.75 9.75 14.4142 9.75 14V13.4167H8C7.58579 13.4167 7.25 13.0809 7.25 12.6667C7.25 12.2525 7.58579 11.9167 8 11.9167H8.1875L8.1875 8.08333H8C7.58579 8.08333 7.25 7.74755 7.25 7.33333C7.25 6.91912 7.58579 6.58333 8 6.58333H9.75V6C9.75 5.58579 10.0858 5.25 10.5 5.25ZM9.6875 8.08333V9.25H12.0625C12.1212 9.25 12.25 9.1844 12.25 9V8.33333C12.25 8.14893 12.1212 8.08333 12.0625 8.08333H9.6875ZM12.0625 10.75H9.6875L9.6875 11.9167H12.0625C12.1212 11.9167 12.25 11.8511 12.25 11.6667V11C12.25 10.8156 12.1212 10.75 12.0625 10.75Z',
  d7: 'M8.9375 12.6578V7.32882M10.5 7.32882V5.99658M10.5 13.99V12.6578M8.9375 9.9933H12.0625M12.0625 9.9933C12.5803 9.9933 13 10.4406 13 10.9925V11.6586C13 12.2105 12.5803 12.6578 12.0625 12.6578H8M12.0625 9.9933C12.5803 9.9933 13 9.54595 13 8.99412V8.328C13 7.77617 12.5803 7.32882 12.0625 7.32882H8',
  d8: 'M6.04577 22.0049V16.6738M8.0821 17.6163C4.92641 16.4416 2.66133 13.9184 2.5 10.3085C2.5 5.40143 5.85168 2.27012 10.6445 2C15.2684 2 18.8516 5.93337 18.7033 9.97353C18.7025 9.99582 18.709 10.0178 18.722 10.036L21.4433 13.8388C21.4777 13.8883 21.5354 13.9007 21.4818 13.9284L19.7689 14.979C19.7689 14.979 19.6287 15.6705 19.1284 17.9649C18.3849 19.9284 16.654 20.0911 15.5116 20.0662M14.7571 20.0054C14.929 20.0054 15.2428 20.0604 15.5116 20.0662M15.5116 22.0049V20.0662',
  d9: 'M1.75 10C1.75 12.868 3.14763 15.4102 5.29911 17.0037V22.75H16.25V20.7499H16.2552L16.261 20.7499C18.038 20.7358 19.5762 19.5006 19.9425 17.7671L20.4084 15.4706L21.8794 14.5765C22.0573 14.4684 22.1823 14.2912 22.2244 14.0873C22.2665 13.8835 22.222 13.6713 22.1015 13.5015L19.4468 9.7609C19.4657 9.56392 19.4564 9.44663 19.4494 9.35836C19.4469 9.32621 19.4446 9.29792 19.4441 9.27103C19.0678 4.77057 15.2495 1.25 10.6123 1.25C5.72765 1.25 1.75 5.15769 1.75 10ZM11.25 6.58333V5.25H9.75V6.58333H7.25V8.08333H8.1875V11.9167H7.25V13.4167H9.75V14.75H11.25V13.4167H12.0625C13.0393 13.4167 13.75 12.5868 13.75 11.6667V11C13.75 10.6376 13.6398 10.2892 13.4465 10C13.6398 9.7108 13.75 9.3624 13.75 9V8.33333C13.75 7.41317 13.0393 6.58333 12.0625 6.58333H11.25ZM9.6875 9.25V8.08333H12.0625C12.1212 8.08333 12.25 8.14893 12.25 8.33333V9C12.25 9.1844 12.1212 9.25 12.0625 9.25H9.6875ZM9.6875 10.75H12.0625C12.1212 10.75 12.25 10.8156 12.25 11V11.6667C12.25 11.8511 12.1212 11.9167 12.0625 11.9167H9.6875V10.75Z',
};

export const IconBitcoinMindStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-mind-stroke-rounded IconBitcoinMindStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBitcoinMindDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-mind-duotone-rounded IconBitcoinMindDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconBitcoinMindTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-mind-twotone-rounded IconBitcoinMindTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconBitcoinMindSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-mind-solid-rounded IconBitcoinMindSolidRounded"
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

export const IconBitcoinMindBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-mind-bulk-rounded IconBitcoinMindBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBitcoinMindStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-mind-stroke-sharp IconBitcoinMindStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinMindSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-mind-solid-sharp IconBitcoinMindSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBitcoinMind: TheIconSelfPack = {
  name: 'BitcoinMind',
  StrokeRounded: IconBitcoinMindStrokeRounded,
  DuotoneRounded: IconBitcoinMindDuotoneRounded,
  TwotoneRounded: IconBitcoinMindTwotoneRounded,
  SolidRounded: IconBitcoinMindSolidRounded,
  BulkRounded: IconBitcoinMindBulkRounded,
  StrokeSharp: IconBitcoinMindStrokeSharp,
  SolidSharp: IconBitcoinMindSolidSharp,
};