import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.4956 10.106C21.0362 15.5278 18.9292 20.7711 14.7894 21.8171C10.6497 22.8631 6.04495 19.3158 4.50438 13.894C2.96382 8.47215 5.07084 3.22891 9.21056 2.18289C13.3503 1.13686 17.9551 4.68416 19.4956 10.106Z',
  d2: 'M13.3187 15.9425L11.5 7L16.1503 14.774C16.4156 15.2176 16.5483 15.4394 16.484 15.653C16.4197 15.8667 16.1856 15.9817 15.7176 16.2119L14.8084 16.6589C14.2473 16.9348 13.9667 17.0728 13.735 16.9613C13.5033 16.8498 13.4417 16.5474 13.3187 15.9425Z',
  d3: 'M14.7894 21.8171C18.9292 20.7711 21.0362 15.5278 19.4956 10.106C17.9551 4.68416 13.3503 1.13686 9.21056 2.18289C5.07084 3.22891 2.96382 8.47215 4.50438 13.894C6.04495 19.3158 10.6497 22.8631 14.7894 21.8171ZM11.5 7L13.3187 15.9425C13.4417 16.5474 13.5033 16.8498 13.735 16.9613C13.9667 17.0728 14.2473 16.9348 14.8084 16.6589L15.7176 16.2119C16.1856 15.9817 16.4197 15.8667 16.484 15.653C16.5483 15.4394 16.4156 15.2176 16.1503 14.774L11.5 7ZM8.5 12C9.05228 12 9.5 11.5523 9.5 11C9.5 10.4477 9.05228 10 8.5 10C7.94772 10 7.5 10.4477 7.5 11C7.5 11.5523 7.94772 12 8.5 12Z',
  d4: 'M15.7855 3.12524C17.7835 4.66443 19.4062 7.04774 20.217 9.90141C21.0278 12.7548 20.8886 15.5929 19.9685 17.8825C19.0474 20.1748 17.3227 21.951 14.9732 22.5447C12.6291 23.1369 10.2114 22.4138 8.21451 20.8755C6.21648 19.3364 4.59377 16.953 3.78292 14.0994C2.97216 11.246 3.11135 8.40783 4.03143 6.11824C4.95259 3.82598 6.67724 2.04982 9.0268 1.45613C11.3708 0.863838 13.7886 1.58694 15.7855 3.12524ZM13.8187 15.9425L12 7L16.6503 14.774C16.9156 15.2176 17.0483 15.4394 16.984 15.653C16.9197 15.8667 16.6856 15.9817 16.2176 16.2119L15.3084 16.6589C14.7473 16.9348 14.4667 17.0728 14.235 16.9613C14.0033 16.8498 13.9417 16.5474 13.8187 15.9425ZM8.5 9C7.67157 9 7 9.67157 7 10.5C7 11.3284 7.67157 12 8.5 12C9.32843 12 10 11.3284 10 10.5C10 9.67157 9.32843 9 8.5 9Z',
  d5: 'M15.7855 3.12524C17.7835 4.66443 19.4062 7.04774 20.217 9.90141C21.0278 12.7548 20.8886 15.5929 19.9685 17.8825C19.0474 20.1748 17.3227 21.951 14.9732 22.5447C12.6291 23.1369 10.2114 22.4138 8.21451 20.8755C6.21648 19.3364 4.59377 16.953 3.78292 14.0994C2.97216 11.246 3.11135 8.40783 4.03143 6.11824C4.95259 3.82598 6.67724 2.04982 9.0268 1.45613C11.3708 0.863838 13.7886 1.58694 15.7855 3.12524Z',
  d6: 'M13.8187 15.9425L12 7L16.6503 14.774C16.9156 15.2176 17.0483 15.4394 16.984 15.653C16.9197 15.8667 16.6856 15.9817 16.2176 16.2119L15.3084 16.6589C14.7473 16.9348 14.4667 17.0728 14.235 16.9613C14.0033 16.8498 13.9417 16.5474 13.8187 15.9425Z',
  d7: 'M7 10.5C7 9.67157 7.67157 9 8.5 9C9.32843 9 10 9.67157 10 10.5C10 11.3284 9.32843 12 8.5 12C7.67157 12 7 11.3284 7 10.5Z',
  d8: 'M13.5 17L11.5 7L16.5 15.5L13.5 17Z',
  d9: 'M15.7855 3.12475C17.7835 4.66394 19.4062 7.04725 20.2171 9.90092C21.0278 12.7543 20.8886 15.5925 19.9685 17.882C19.0474 20.1743 17.3227 21.9505 14.9732 22.5442C12.6291 23.1365 10.2114 22.4134 8.21453 20.8751C6.2165 19.3359 4.59378 16.9526 3.78294 14.0989C2.97218 11.2455 3.11137 8.40734 4.03145 6.11776C4.95261 3.82549 6.67726 2.04933 9.02682 1.45564C11.3709 0.86335 13.7886 1.58645 15.7855 3.12475ZM13.5 16.9999L11.5 6.99988L16.5 15.4999L13.5 16.9999ZM8.50002 9.24988C7.53352 9.24988 6.75002 10.0334 6.75002 10.9999C6.75002 11.9664 7.53352 12.7499 8.50002 12.7499C9.46651 12.7499 10.25 11.9664 10.25 10.9999C10.25 10.0334 9.46651 9.24988 8.50002 9.24988Z',
};

export const IconMymindStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mymind-stroke-rounded IconMymindStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="8.5" 
        cy="11" 
        r="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconMymindDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mymind-duotone-rounded IconMymindDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="8.5" 
        cy="11" 
        r="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconMymindTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mymind-twotone-rounded IconMymindTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <circle 
        opacity="var(--icon-opacity)" 
        cx="8.5" 
        cy="11" 
        r="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconMymindSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mymind-solid-rounded IconMymindSolidRounded"
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

export const IconMymindBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mymind-bulk-rounded IconMymindBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMymindStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mymind-stroke-sharp IconMymindStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="8.5" 
        cy="11" 
        r="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconMymindSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mymind-solid-sharp IconMymindSolidSharp"
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

export const iconPackOfMymind: TheIconSelfPack = {
  name: 'Mymind',
  StrokeRounded: IconMymindStrokeRounded,
  DuotoneRounded: IconMymindDuotoneRounded,
  TwotoneRounded: IconMymindTwotoneRounded,
  SolidRounded: IconMymindSolidRounded,
  BulkRounded: IconMymindBulkRounded,
  StrokeSharp: IconMymindStrokeSharp,
  SolidSharp: IconMymindSolidSharp,
};