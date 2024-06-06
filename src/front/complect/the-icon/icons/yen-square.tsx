import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.77027 2.5 5.6554 3.69797 4.25276C3.86808 4.05358 4.05358 3.86808 4.25276 3.69797C5.6554 2.5 7.77027 2.5 12 2.5C16.2297 2.5 18.3446 2.5 19.7472 3.69797C19.9464 3.86808 20.1319 4.05358 20.302 4.25276C21.5 5.6554 21.5 7.77027 21.5 12C21.5 16.2297 21.5 18.3446 20.302 19.7472C20.1319 19.9464 19.9464 20.1319 19.7472 20.302C18.3446 21.5 16.2297 21.5 12 21.5C7.77027 21.5 5.6554 21.5 4.25276 20.302C4.05358 20.1319 3.86808 19.9464 3.69797 19.7472C2.5 18.3446 2.5 16.2297 2.5 12Z',
  d2: 'M9 7.5C9.2 8.41667 10.08 10.5 12 11.5M12 11.5C13.92 10.5 14.8 8.41667 15 7.5M12 11.5V16.5M14.5 13.5H9.5',
  d3: 'M17.0242 1.90522C15.7462 1.74998 14.1227 1.74999 12.0513 1.75H11.9487C9.87731 1.74999 8.25376 1.74998 6.97578 1.90522C5.66982 2.06386 4.62456 2.39411 3.76567 3.12767C3.53662 3.3233 3.3233 3.53662 3.12767 3.76567C2.39411 4.62456 2.06386 5.66982 1.90522 6.97578C1.74998 8.25376 1.74999 9.87731 1.75 11.9487V12.0513C1.74999 14.1227 1.74998 15.7462 1.90522 17.0242C2.06386 18.3302 2.39411 19.3754 3.12767 20.2343C3.3233 20.4634 3.53662 20.6767 3.76567 20.8723C4.62456 21.6059 5.66982 21.9361 6.97578 22.0948C8.25376 22.25 9.87731 22.25 11.9487 22.25H12.0513C14.1227 22.25 15.7462 22.25 17.0242 22.0948C18.3302 21.9361 19.3754 21.6059 20.2343 20.8723C20.4634 20.6767 20.6767 20.4634 20.8723 20.2343C21.6059 19.3754 21.9361 18.3302 22.0948 17.0242C22.25 15.7462 22.25 14.1227 22.25 12.0513V11.9487C22.25 9.87731 22.25 8.25376 22.0948 6.97578C21.9361 5.66982 21.6059 4.62456 20.8723 3.76567C20.6767 3.53662 20.4634 3.3233 20.2343 3.12767C19.3754 2.39411 18.3302 2.06386 17.0242 1.90522ZM9.73292 7.34028C9.64462 6.93559 9.24498 6.6791 8.84028 6.7674C8.43559 6.85569 8.1791 7.25534 8.2674 7.66003C8.4787 8.62849 9.34073 10.7323 11.2502 11.9337V12.7502H9.50016C9.08594 12.7502 8.75016 13.0859 8.75016 13.5002C8.75016 13.9144 9.08594 14.2502 9.50016 14.2502H11.2502V16.5002C11.2502 16.9144 11.5859 17.2502 12.0002 17.2502C12.4144 17.2502 12.7502 16.9144 12.7502 16.5002V14.2502H14.5002C14.9144 14.2502 15.2502 13.9144 15.2502 13.5002C15.2502 13.0859 14.9144 12.7502 14.5002 12.7502H12.7502V11.9337C14.6596 10.7323 15.5216 8.62849 15.7329 7.66003C15.8212 7.25534 15.5647 6.85569 15.16 6.7674C14.7553 6.6791 14.3557 6.93559 14.2674 7.34028C14.1057 8.08119 13.4129 9.71487 12.0002 10.6327C10.5874 9.71487 9.89457 8.08119 9.73292 7.34028Z',
  d4: 'M12.0513 1.75C14.1227 1.74999 15.7462 1.74998 17.0242 1.90522C18.3302 2.06386 19.3754 2.39411 20.2343 3.12767C20.4634 3.3233 20.6767 3.53662 20.8723 3.76567C21.6059 4.62456 21.9361 5.66982 22.0948 6.97578C22.25 8.25376 22.25 9.87731 22.25 11.9487V12.0513C22.25 14.1227 22.25 15.7462 22.0948 17.0242C21.9361 18.3302 21.6059 19.3754 20.8723 20.2343C20.6767 20.4634 20.4634 20.6767 20.2343 20.8723C19.3754 21.6059 18.3302 21.9361 17.0242 22.0948C15.7462 22.25 14.1227 22.25 12.0513 22.25H11.9487C9.87731 22.25 8.25376 22.25 6.97578 22.0948C5.66982 21.9361 4.62456 21.6059 3.76567 20.8723C3.53662 20.6767 3.3233 20.4634 3.12767 20.2343C2.39411 19.3754 2.06386 18.3302 1.90522 17.0242C1.74998 15.7462 1.74999 14.1227 1.75 12.0513V11.9487C1.74999 9.87731 1.74998 8.25376 1.90522 6.97578C2.06386 5.66982 2.39411 4.62456 3.12767 3.76567C3.3233 3.53662 3.53662 3.3233 3.76567 3.12767C4.62456 2.39411 5.66982 2.06386 6.97578 1.90522C8.25376 1.74998 9.87731 1.74999 11.9487 1.75H12.0513Z',
  d5: 'M8.84028 6.7674C9.24498 6.6791 9.64462 6.93559 9.73292 7.34028C9.89457 8.08119 10.5874 9.71487 12.0002 10.6327C13.4129 9.71487 14.1057 8.08119 14.2674 7.34028C14.3557 6.93559 14.7553 6.6791 15.16 6.7674C15.5647 6.85569 15.8212 7.25534 15.7329 7.66003C15.5216 8.62849 14.6596 10.7323 12.7502 11.9337V12.7502H14.5002C14.9144 12.7502 15.2502 13.0859 15.2502 13.5002C15.2502 13.9144 14.9144 14.2502 14.5002 14.2502H12.7502V16.5002C12.7502 16.9144 12.4144 17.2502 12.0002 17.2502C11.5859 17.2502 11.2502 16.9144 11.2502 16.5002V14.2502H9.50016C9.08594 14.2502 8.75016 13.9144 8.75016 13.5002C8.75016 13.0859 9.08594 12.7502 9.50016 12.7502H11.2502V11.9337C9.34073 10.7323 8.4787 8.62849 8.2674 7.66003C8.1791 7.25534 8.43559 6.85569 8.84028 6.7674Z',
  d6: 'M21 3V21H3V3H21Z',
  d7: 'M9 7.5L12 11.5M12 11.5L15 7.5M12 11.5V16.5M15 13.5H9',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM8.40039 7.95L11.2504 11.75V12.75H9.00039V14.25H11.2504V16.5H12.7504V14.25H15.0004V12.75H12.7504V11.75L15.6004 7.95L14.4004 7.05L12.0004 10.25L9.60039 7.05L8.40039 7.95Z',
} as const;

export const IconYenSquareStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yen-square-stroke-rounded IconYenSquareStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconYenSquareDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yen-square-duotone-rounded IconYenSquareDuotoneRounded"
    >
      <rect 
        opacity="var(--icon-opacity)" 
        x="2.5" 
        y="2.5" 
        width="19" 
        height="19" 
        rx="5" 
        fill="var(--icon-fill)"></rect>
      <rect 
        x="2.5" 
        y="2.5" 
        width="19" 
        height="19" 
        rx="5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
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

export const IconYenSquareTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yen-square-twotone-rounded IconYenSquareTwotoneRounded"
    >
      <rect 
        x="2.5" 
        y="2.5" 
        width="19" 
        height="19" 
        rx="5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></rect>
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

export const IconYenSquareSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yen-square-solid-rounded IconYenSquareSolidRounded"
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

export const IconYenSquareBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yen-square-bulk-rounded IconYenSquareBulkRounded"
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

export const IconYenSquareStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yen-square-stroke-sharp IconYenSquareStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconYenSquareSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yen-square-solid-sharp IconYenSquareSolidSharp"
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

export const iconPackOfYenSquare: TheIconSelfPack = {
  name: 'YenSquare',
  StrokeRounded: IconYenSquareStrokeRounded,
  DuotoneRounded: IconYenSquareDuotoneRounded,
  TwotoneRounded: IconYenSquareTwotoneRounded,
  SolidRounded: IconYenSquareSolidRounded,
  BulkRounded: IconYenSquareBulkRounded,
  StrokeSharp: IconYenSquareStrokeSharp,
  SolidSharp: IconYenSquareSolidSharp,
};