import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 7C9.23858 7 7 9.23857 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7Z',
  d2: 'M17.7366 6.26337L21.5 2.5M17.7366 6.26337C17.297 5.82377 17.5833 4.02148 17.6966 3M17.7366 6.26337C18.1762 6.70297 19.9785 6.41666 21 6.30336',
  d3: 'M6.26337 17.7366L2.5 21.5M6.26337 17.7366C5.82377 17.297 4.02148 17.5833 3 17.6966M6.26337 17.7366C6.70297 18.1762 6.41666 19.9785 6.30336 21',
  d4: 'M17.7366 17.7366L21.5 21.5M17.7366 17.7366C18.1762 17.297 19.9785 17.5833 21 17.6966M17.7366 17.7366C17.297 18.1762 17.5833 19.9785 17.6966 21',
  d5: 'M6.26337 6.26337L2.5 2.5M6.26337 6.26337C6.70297 5.82377 6.41666 4.02148 6.30336 3M6.26337 6.26337C5.82377 6.70297 4.02148 6.41666 3 6.30336',
  d6: 'M12 7C9.23858 7 7 9.23857 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23857 14.7614 7 12 7Z',
  d7: 'M6.25 12C6.25 8.82436 8.82437 6.25 12 6.25C15.1756 6.25 17.75 8.82436 17.75 12C17.75 15.1756 15.1756 17.75 12 17.75C8.82436 17.75 6.25 15.1756 6.25 12Z',
  d8: 'M21.9566 2.04338C22.3472 2.43391 22.3472 3.06707 21.9566 3.4576L19.7497 5.6645C19.8985 5.64774 20.0462 5.62996 20.1909 5.61254C20.3446 5.59405 20.4948 5.57597 20.6393 5.55995C21.1882 5.49907 21.6825 5.8947 21.7434 6.44362C21.8043 6.99254 21.4087 7.48688 20.8598 7.54776C20.751 7.55982 20.6255 7.57495 20.4885 7.59147C20.0389 7.64568 19.4651 7.71488 18.9482 7.74001C18.6071 7.7566 18.2392 7.75761 17.9045 7.71256C17.6188 7.67411 17.1354 7.57733 16.779 7.22097C16.4227 6.8646 16.3259 6.38122 16.2875 6.09552C16.2424 5.76083 16.2434 5.39287 16.26 5.05181C16.2851 4.53493 16.3543 3.96107 16.4085 3.51148C16.4251 3.37449 16.4402 3.24904 16.4523 3.14025C16.5131 2.59133 17.0075 2.1957 17.5564 2.25658C18.1053 2.31746 18.5009 2.8118 18.4401 3.36072C18.424 3.50522 18.406 3.65545 18.3875 3.80907C18.3701 3.95379 18.3523 4.10151 18.3355 4.25029L20.5424 2.04338C20.9329 1.65286 21.5661 1.65286 21.9566 2.04338Z',
  d9: 'M2.04241 2.04338C1.65188 2.43391 1.65188 3.06707 2.04241 3.4576L4.24931 5.6645C4.10054 5.64774 3.95281 5.62996 3.8081 5.61254C3.65447 5.59405 3.50424 5.57597 3.35975 5.55995C2.81083 5.49907 2.31649 5.8947 2.25561 6.44362C2.19472 6.99254 2.59036 7.48688 3.13928 7.54776C3.24806 7.55982 3.37352 7.57495 3.5105 7.59147C3.96009 7.64568 4.53395 7.71488 5.05083 7.74001C5.39189 7.7566 5.75985 7.75761 6.09455 7.71256C6.38024 7.67411 6.86362 7.57733 7.21999 7.22097C7.57636 6.8646 7.67314 6.38122 7.71159 6.09552C7.75663 5.76083 7.75562 5.39287 7.73903 5.05181C7.7139 4.53493 7.6447 3.96107 7.59049 3.51148C7.57397 3.37449 7.55885 3.24904 7.54678 3.14025C7.4859 2.59133 6.99156 2.1957 6.44264 2.25658C5.89372 2.31746 5.49809 2.8118 5.55897 3.36072C5.575 3.50522 5.59308 3.65545 5.61156 3.80907C5.62898 3.95379 5.64676 4.10151 5.66352 4.25029L3.45662 2.04338C3.06609 1.65286 2.43293 1.65286 2.04241 2.04338Z',
  d10: 'M21.9571 21.9581C22.3476 21.5676 22.3476 20.9344 21.9571 20.5439L19.7502 18.337C19.899 18.3537 20.0467 18.3715 20.1914 18.3889C20.3451 18.4074 20.4953 18.4255 20.6398 18.4415C21.1887 18.5024 21.683 18.1068 21.7439 17.5579C21.8048 17.0089 21.4092 16.5146 20.8602 16.4537C20.7515 16.4417 20.626 16.4265 20.489 16.41C20.0394 16.3558 19.4656 16.2866 18.9487 16.2615C18.6076 16.2449 18.2397 16.2439 17.905 16.2889C17.6193 16.3274 17.1359 16.4241 16.7795 16.7805C16.4232 17.1369 16.3264 17.6203 16.2879 17.906C16.2429 18.2406 16.2439 18.6086 16.2605 18.9497C16.2856 19.4666 16.3548 20.0404 16.409 20.49C16.4256 20.627 16.4407 20.7524 16.4527 20.8612C16.5136 21.4101 17.008 21.8058 17.5569 21.7449C18.1058 21.684 18.5014 21.1897 18.4406 20.6408C18.4245 20.4963 18.4064 20.346 18.388 20.1924C18.3705 20.0477 18.3528 19.9 18.336 19.7512L20.5429 21.9581C20.9334 22.3486 21.5666 22.3486 21.9571 21.9581Z',
  d11: 'M2.04289 21.9581C1.65237 21.5676 1.65237 20.9344 2.04289 20.5439L4.2498 18.337C4.10102 18.3537 3.9533 18.3715 3.80859 18.3889C3.65496 18.4074 3.50473 18.4255 3.36023 18.4415C2.81132 18.5024 2.31697 18.1068 2.25609 17.5579C2.19521 17.0089 2.59085 16.5146 3.13977 16.4537C3.24855 16.4417 3.374 16.4265 3.51099 16.41C3.96058 16.3558 4.53444 16.2866 5.05132 16.2615C5.39238 16.2449 5.76034 16.2439 6.09504 16.2889C6.38073 16.3274 6.86411 16.4241 7.22048 16.7805C7.57685 17.1369 7.67363 17.6203 7.71207 17.906C7.75712 18.2406 7.75611 18.6086 7.73952 18.9497C7.71439 19.4666 7.64519 20.0404 7.59098 20.49C7.57446 20.627 7.55934 20.7524 7.54727 20.8612C7.48639 21.4101 6.99205 21.8058 6.44313 21.7449C5.89421 21.684 5.49858 21.1897 5.55946 20.6408C5.57548 20.4963 5.59356 20.346 5.61205 20.1924C5.62947 20.0477 5.64725 19.9 5.66401 19.7512L3.45711 21.9581C3.06658 22.3486 2.43342 22.3486 2.04289 21.9581Z',
  d12: 'M21.5003 2.5L17.8765 6.12357M17.5006 2.5L17.5 6.5H21.5003',
  d13: 'M2.5 2.49971L6.22939 6.22937M2.5 6.49944L6.5 6.5V2.49971',
  d14: 'M2.5 21.5L6.20533 17.7949M6.49973 21.5L6.50029 17.5L2.5 17.5',
  d15: 'M21.5 21.4997L17.7351 17.7345M21.5 17.5L17.5 17.4994L17.5 21.4997',
  d16: 'M17.75 12C17.75 15.1756 15.1756 17.75 12 17.75C8.82436 17.75 6.25 15.1756 6.25 12C6.25 8.82436 8.82436 6.25 12 6.25C15.1756 6.25 17.75 8.82436 17.75 12Z',
  d17: 'M22.75 2.66475L20.457 4.95762H22.0429V6.95762H17.0425L17.0432 1.95748L19.0432 1.95776L19.043 3.54319L21.3358 1.25049L22.75 2.66475Z',
  d18: 'M2.66378 1.25049L4.95664 3.54352V1.95757H6.95664V6.958L1.9565 6.9573L1.95678 4.9573L3.54221 4.95752L1.24951 2.66465L2.66378 1.25049Z',
  d19: 'M1.95659 17.0435L6.95702 17.0435L6.95632 22.0436L4.95632 22.0433L4.95654 20.4579L2.66367 22.7506L1.24951 21.3363L3.54254 19.0435H1.95659V17.0435Z',
  d20: 'M17.0424 17.0435L22.0425 17.0442L22.0422 19.0442L20.4568 19.0439L22.7495 21.3368L21.3352 22.751L19.0424 20.4579V22.0439H17.0424L17.0424 17.0435Z',
};

export const IconCentralizedStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="centralized-stroke-rounded IconCentralizedStrokeRounded"
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

export const IconCentralizedDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="centralized-duotone-rounded IconCentralizedDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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

export const IconCentralizedTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="centralized-twotone-rounded IconCentralizedTwotoneRounded"
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

export const IconCentralizedSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="centralized-solid-rounded IconCentralizedSolidRounded"
    >
      <path 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCentralizedBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="centralized-bulk-rounded IconCentralizedBulkRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCentralizedStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="centralized-stroke-sharp IconCentralizedStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCentralizedSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="centralized-solid-sharp IconCentralizedSolidSharp"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCentralized: TheIconSelfPack = {
  name: 'Centralized',
  StrokeRounded: IconCentralizedStrokeRounded,
  DuotoneRounded: IconCentralizedDuotoneRounded,
  TwotoneRounded: IconCentralizedTwotoneRounded,
  SolidRounded: IconCentralizedSolidRounded,
  BulkRounded: IconCentralizedBulkRounded,
  StrokeSharp: IconCentralizedStrokeSharp,
  SolidSharp: IconCentralizedSolidSharp,
};