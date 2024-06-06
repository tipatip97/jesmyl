import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.37726 16H5.08354C3.22665 16 2.84168 15.6255 3.05142 13.7791L3.41559 10.5731C3.75345 7.59878 4.43808 6.75874 7.23391 5.66482L8.93305 5V2C9.90622 2.31731 10.9677 2.83772 12 2.83772C13.0323 2.83772 14.0938 2.31731 15.067 2V5L16.7661 5.66482C19.5619 6.75874 20.2466 7.59878 20.5844 10.5731L20.9486 13.7791C21.1583 15.6255 20.7734 16 18.9165 16H17.6227',
  d2: 'M9 5L11.0513 5.68377C11.6671 5.88904 12.3329 5.88904 12.9487 5.68377L15 5',
  d3: 'M6.9642 10L6.50433 20.9584C6.4681 21.8215 6.64698 22 7.51062 22H16.4894C17.353 22 17.5319 21.8215 17.4957 20.9584L17.0358 10',
  d4: 'M12 13L12 6',
  d5: 'M12 9H13M12 11.5H13',
  d6: 'M7.23391 5.66482L8.93305 5L12 6L15.067 5L16.7661 5.66482C19.5619 6.75874 20.2466 7.59878 20.5844 10.5731L20.9486 13.7791C21.1583 15.6255 20.7734 16 18.9165 16H17.6227L17.5 22H6.37726V16H5.08354C3.22665 16 2.84168 15.6255 3.05142 13.7791L3.41559 10.5731C3.75345 7.59878 4.43808 6.75874 7.23391 5.66482Z',
  d7: 'M12 13L12 6M12 9H13M12 11.5H13',
  d8: 'M9.16609 1.28695C8.93771 1.21249 8.68748 1.25192 8.49307 1.39302C8.29866 1.53411 8.18359 1.75979 8.18359 2.00001V4.48806L6.9606 4.96658C5.54769 5.51941 4.509 6.06247 3.81257 6.95151C3.11344 7.84399 2.8419 8.97847 2.67035 10.4886L2.30618 13.6947C2.25175 14.1738 2.22848 14.6126 2.27471 14.9953C2.32204 15.387 2.44912 15.7771 2.74362 16.0933C3.03564 16.4069 3.41361 16.563 3.79367 16.6457C4.16781 16.7271 4.60467 16.7502 5.08351 16.7502H5.93024L5.75496 20.9271C5.7452 21.1596 5.74666 21.3989 5.78695 21.6199C5.82882 21.8497 5.92138 22.1088 6.13202 22.3256C6.34196 22.5418 6.59729 22.6418 6.82309 22.6914C7.04114 22.7393 7.279 22.7502 7.51058 22.7502H16.4894C16.7209 22.7502 16.9588 22.7393 17.1768 22.6914C17.4027 22.6418 17.658 22.5418 17.8679 22.3256C18.0786 22.1088 18.1711 21.8497 18.213 21.6199C18.2533 21.3989 18.2547 21.1596 18.245 20.9271L18.0697 16.7502H18.9164C19.3953 16.7502 19.8321 16.7271 20.2063 16.6457C20.5863 16.563 20.9643 16.4069 21.2563 16.0933C21.5508 15.7771 21.6779 15.387 21.7252 14.9953C21.7715 14.6126 21.7482 14.1738 21.6938 13.6947L21.3296 10.4886C21.158 8.97847 20.8865 7.84399 20.1874 6.95151C19.4909 6.06247 18.4523 5.51941 17.0393 4.96658L15.8175 4.48851V2.00001C15.8175 1.75979 15.7024 1.53411 15.508 1.39302C15.3136 1.25192 15.0634 1.21249 14.835 1.28695C14.5771 1.37103 14.3162 1.46756 14.0679 1.55941L14.0627 1.56136C13.808 1.65558 13.5646 1.74553 13.3218 1.82542C12.832 1.98655 12.3979 2.08773 12.0005 2.08773C11.6032 2.08773 11.1691 1.98655 10.6793 1.82542C10.4365 1.74553 10.1931 1.65558 9.93842 1.56136L9.93316 1.55941C9.68488 1.46756 9.42396 1.37103 9.16609 1.28695ZM14.3175 4.43712V3.06601C14.1464 3.12848 13.9694 3.19148 13.7905 3.2503C13.2482 3.4287 12.6355 3.58773 12.0005 3.58773C11.3656 3.58773 10.7529 3.4287 10.2105 3.2503C10.0317 3.19148 9.85473 3.12848 9.68359 3.06601V4.43751L11.25 4.95964V9.00057V9.00165V11.5004V11.5018V13.0011C11.25 13.4153 11.5858 13.7511 12 13.7511C12.4142 13.7511 12.75 13.4153 12.75 13.0011V12.2511H13C13.4142 12.2511 13.75 11.9153 13.75 11.5011C13.75 11.0869 13.4142 10.7511 13 10.7511H12.75V8.75111H13C13.4142 8.75111 13.75 8.41533 13.75 8.00111C13.75 7.5869 13.4142 7.25111 13 7.25111H12.75V4.95962L14.3175 4.43712Z',
  d9: 'M8.96633 4.25076C9.05566 4.24673 9.14723 4.25872 9.23714 4.28869L12 5.20963L14.7628 4.28869C14.8527 4.25872 14.9443 4.24673 15.0336 4.25076C15.1352 4.24618 15.2394 4.26232 15.3402 4.30176L17.0393 4.96658C18.4523 5.51941 19.4909 6.06247 20.1874 6.95151C20.8865 7.84399 21.158 8.97847 21.3296 10.4886L21.6938 13.6947C21.7482 14.1738 21.7715 14.6126 21.7252 14.9953C21.6779 15.387 21.5508 15.7771 21.2563 16.0933C20.9643 16.4069 20.5863 16.563 20.2063 16.6457C19.8321 16.7271 19.3953 16.7502 18.9164 16.7502H18.0697L18.245 20.9271C18.2547 21.1596 18.2533 21.3989 18.213 21.6199C18.1711 21.8497 18.0786 22.1088 17.8679 22.3256C17.658 22.5418 17.4027 22.6418 17.1768 22.6914C16.9588 22.7393 16.7209 22.7502 16.4894 22.7502H7.51058C7.279 22.7502 7.04114 22.7393 6.82309 22.6914C6.59729 22.6418 6.34196 22.5418 6.13202 22.3256C5.92138 22.1088 5.82882 21.8497 5.78695 21.6199C5.74666 21.3989 5.7452 21.1596 5.75496 20.9271L5.93024 16.7502H5.08351C4.60467 16.7502 4.16781 16.7271 3.79367 16.6457C3.41361 16.563 3.03564 16.4069 2.74362 16.0933C2.44912 15.7771 2.32204 15.387 2.27471 14.9953C2.22848 14.6126 2.25175 14.1738 2.30618 13.6947L2.67035 10.4886C2.8419 8.97847 3.11344 7.84399 3.81257 6.95151C4.509 6.06247 5.54769 5.51941 6.9606 4.96658L8.65974 4.30176C8.76055 4.26232 8.86473 4.24618 8.96633 4.25076Z',
  d10: 'M8.49307 1.39302C8.68748 1.25192 8.93771 1.21249 9.16609 1.28695C9.42396 1.37103 9.68488 1.46756 9.93316 1.55941L9.93842 1.56136C10.1931 1.65558 10.4365 1.74553 10.6793 1.82542C11.1691 1.98655 11.6032 2.08773 12.0005 2.08773C12.3979 2.08773 12.832 1.98655 13.3218 1.82542C13.5646 1.74553 13.808 1.65558 14.0627 1.56136L14.0679 1.55941C14.3162 1.46756 14.5771 1.37103 14.835 1.28695C15.0634 1.21249 15.3136 1.25192 15.508 1.39302C15.7024 1.53411 15.8175 1.75979 15.8175 2.00001V4.48851L15.3402 4.30176C15.2394 4.26232 15.1352 4.24618 15.0336 4.25076C14.9443 4.24673 14.8527 4.25872 14.7628 4.28869L14.3175 4.43712V3.06601C14.1464 3.12848 13.9694 3.19148 13.7905 3.2503C13.2482 3.4287 12.6355 3.58773 12.0005 3.58773C11.3656 3.58773 10.7529 3.4287 10.2105 3.2503C10.0317 3.19148 9.85473 3.12848 9.68359 3.06601V4.43751L9.23714 4.28869C9.14723 4.25872 9.05566 4.24673 8.96633 4.25076C8.86473 4.24618 8.76055 4.26232 8.65974 4.30176L8.18359 4.48806V2.00001C8.18359 1.75979 8.29866 1.53411 8.49307 1.39302ZM12.75 7.24721V4.95572L12 5.20573L11.25 4.95574V8.99667V8.99775V11.4965V11.4979V12.9972C11.25 13.4114 11.5858 13.7472 12 13.7472C12.4142 13.7472 12.75 13.4114 12.75 12.9972L12.75 12.2472H13C13.4142 12.2472 13.75 11.9114 13.75 11.4972C13.75 11.083 13.4142 10.7472 13 10.7472H12.75V8.74721H13C13.4142 8.74721 13.75 8.41142 13.75 7.99721C13.75 7.58299 13.4142 7.24721 13 7.24721H12.75Z',
  d11: 'M6.37726 16H3L4.5 6.5L9 5V2C9 2 10.5 2.5 12 2.5C13.5 2.5 15 2 15 2V5L19.5 6.5L21 16H17.6227',
  d12: 'M7.50527 10L6.5 22H17.5L16.501 10',
  d13: 'M12 14L12 6',
  d14: 'M12 9H14M12 11.5H14',
  d15: 'M10.1002 1.51772C9.83586 1.45898 9.38943 1.33185 9.23718 1.28835C9.00862 1.21237 8.75688 1.25059 8.56147 1.39143C8.3659 1.53239 8.25001 1.75878 8.25001 1.99986V4.45929L4.26283 5.78835C3.9971 5.87693 3.80287 6.10621 3.75918 6.38289L2.25918 15.8829C2.22497 16.0996 2.28732 16.3203 2.42982 16.4871C2.57231 16.6538 2.78066 16.7499 3.00001 16.7499H6.18624L5.68359 22.75H18.3141L17.8146 16.75H21C21.2193 16.75 21.4277 16.654 21.5702 16.4872C21.7127 16.3204 21.775 16.0997 21.7408 15.883L20.2408 6.38301C20.1971 6.10633 20.0029 5.87705 19.7372 5.78847L15.75 4.45941V1.99998C15.75 1.7589 15.6341 1.53252 15.4385 1.39155C15.2431 1.25071 14.9914 1.2125 14.7628 1.28847C14.7628 1.28847 14.1641 1.4591 13.8998 1.51784C13.3655 1.63657 12.6744 1.74998 12 1.74998C11.3256 1.74998 10.6345 1.63645 10.1002 1.51772ZM14.25 2.97656C13.6593 3.10783 12.8256 3.24984 12 3.24984C11.1744 3.24984 10.3407 3.10771 9.75 2.97644V5.24998L11.0513 5.68375C11.117 5.70565 11.1833 5.72521 11.25 5.74244V14H12.75V12.25H14V10.75H12.75V9.75H14V8.25H12.75V5.74244C12.8167 5.72521 12.883 5.70565 12.9487 5.68375L14.25 5.24998V2.97656Z',
};

export const IconKurtaStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kurta-stroke-rounded IconKurtaStrokeRounded"
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKurtaDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kurta-duotone-rounded IconKurtaDuotoneRounded"
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKurtaTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kurta-twotone-rounded IconKurtaTwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKurtaSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kurta-solid-rounded IconKurtaSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKurtaBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kurta-bulk-rounded IconKurtaBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKurtaStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kurta-stroke-sharp IconKurtaStrokeSharp"
    >
      <path 
        d={d.d11} 
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
    </TheIconWrapper>
  );
};

export const IconKurtaSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kurta-solid-sharp IconKurtaSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfKurta: TheIconSelfPack = {
  name: 'Kurta',
  StrokeRounded: IconKurtaStrokeRounded,
  DuotoneRounded: IconKurtaDuotoneRounded,
  TwotoneRounded: IconKurtaTwotoneRounded,
  SolidRounded: IconKurtaSolidRounded,
  BulkRounded: IconKurtaBulkRounded,
  StrokeSharp: IconKurtaStrokeSharp,
  SolidSharp: IconKurtaSolidSharp,
};