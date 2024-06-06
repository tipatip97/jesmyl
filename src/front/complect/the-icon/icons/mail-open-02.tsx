import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.01592 14.551C2.08186 17.5843 2.11484 19.1009 3.24611 20.2241C4.37738 21.3473 5.95183 21.3862 9.10072 21.4641C11.0393 21.512 12.9607 21.512 14.8993 21.4641C18.0482 21.3862 19.6226 21.3473 20.7539 20.2241C21.8852 19.1009 21.9181 17.5843 21.9841 14.551C22.0164 13.0649 21.9995 11.5934 21.9334 10.0921C21.8924 9.15964 21.8719 8.69341 21.6354 8.27984C21.3989 7.86628 20.9913 7.59935 20.176 7.0655L16.4152 4.60286C14.2742 3.20096 13.2038 2.5 12 2.5C10.7962 2.5 9.72577 3.20095 7.58483 4.60286L3.82397 7.0655C3.00869 7.59935 2.60106 7.86628 2.36459 8.27984C2.12812 8.69341 2.1076 9.15965 2.06656 10.0921C2.00049 11.5934 1.98361 13.0649 2.01592 14.551Z',
  d2: 'M2 9.5L6.26537 12.5896C6.73556 12.9302 7.16587 13.2419 7.564 13.5247C8.6401 14.2891 9.41661 14.5 10.7362 14.5H13.2638C14.5834 14.5 15.3599 14.2891 16.436 13.5247C16.8341 13.2419 17.2644 12.9302 17.7346 12.5896L22 9.5',
  d3: 'M9.10072 21.4657C11.0393 21.5136 12.9607 21.5136 14.8993 21.4657C18.0482 21.3878 19.6226 21.3489 20.7539 20.2257C21.8852 19.1025 21.9181 17.5859 21.9841 14.5526C22.0164 13.0665 21.9995 11.5951 21.9334 10.0938L15 14.5016H9L2.06656 10.0938C2.00049 11.5951 1.98361 13.0665 2.01592 14.5526C2.08186 17.5859 2.11484 19.1025 3.24611 20.2257C4.37738 21.3489 5.95183 21.3878 9.10072 21.4657Z',
  d4: 'M9.8001 2.35789C10.5475 1.97652 11.2373 1.75 12.0011 1.75C12.765 1.75 13.4548 1.97652 14.2022 2.35789C14.9251 2.72678 15.7574 3.27092 16.7994 3.95218L20.723 6.5171C21.4202 6.97169 21.9758 7.33403 22.3043 7.90757C22.3474 7.98277 22.3689 8.02037 22.3773 8.07591C22.3867 8.13845 22.3694 8.22372 22.3363 8.27763C22.307 8.3255 22.2643 8.35796 22.1789 8.42288L21.5545 8.89785L17.2961 11.9824C16.8253 12.3235 16.3979 12.633 16.0031 12.9134C15.5096 13.264 15.1201 13.4628 14.7269 13.5809C14.3303 13.7 13.8868 13.7501 13.2653 13.7501H10.7377C10.1161 13.7501 9.67267 13.7 9.27604 13.5809C8.88288 13.4628 8.49334 13.264 7.99983 12.9134C7.60507 12.633 7.17772 12.3235 6.70683 11.9824L2.44505 8.89534L1.83149 8.43972C1.73584 8.36869 1.68801 8.33318 1.65696 8.27945C1.62834 8.22994 1.61218 8.15258 1.61858 8.09576C1.62552 8.03409 1.64967 7.99191 1.69798 7.90757C2.02645 7.33403 2.5821 6.97169 3.27923 6.5171L7.20283 3.95217L7.20284 3.95217C8.24489 3.27091 9.07721 2.72677 9.8001 2.35789ZM18.173 13.1974C17.7042 13.5369 17.2716 13.8503 16.8707 14.1351C16.2881 14.549 15.7513 14.8378 15.1573 15.0163C14.5668 15.1937 13.9622 15.2489 13.2641 15.2489H10.7366C10.0385 15.2489 9.43394 15.1937 8.84338 15.0163C8.24936 14.8378 7.7126 14.549 7.13001 14.1351C6.72907 13.8503 6.29643 13.5369 5.82769 13.1974L2.24399 10.6019C1.83276 10.3041 1.62715 10.1552 1.46415 10.2372C1.30114 10.3192 1.29813 10.573 1.2921 11.0807L1.25 14.6253C1.2819 16.0916 1.3077 17.2771 1.47581 18.2324C1.65261 19.2371 1.99644 20.0551 2.70265 20.7551C3.41116 21.4574 4.24887 21.797 5.2787 21.974C6.26317 22.1432 7.49178 22.1735 9.01972 22.2112L9.07746 22.2126C11.0316 22.2609 12.9684 22.2609 14.9225 22.2126L14.9803 22.2112C16.5082 22.1735 17.7368 22.1432 18.7213 21.974C19.7511 21.797 20.5889 21.4574 21.2974 20.7551C22.0036 20.0551 22.3474 19.2371 22.5242 18.2324C22.6923 17.2771 22.7181 16.0916 22.75 14.6253L22.7079 11.0808C22.7019 10.5731 22.6989 10.3192 22.5358 10.2372C22.3728 10.1552 22.1672 10.3042 21.756 10.602L18.173 13.1974Z',
  d5: 'M12.0011 1.75C11.2373 1.75 10.5475 1.97652 9.8001 2.35789C9.07721 2.72677 8.24489 3.27092 7.20283 3.95217L3.27923 6.5171C2.5821 6.97169 2.02645 7.33403 1.69798 7.90757C1.64967 7.99191 1.62552 8.03409 1.61858 8.09576C1.61218 8.15258 1.62834 8.22994 1.65696 8.27945C1.68801 8.33318 1.73584 8.36869 1.83149 8.43972L2.44505 8.89534L6.70683 11.9824C7.17772 12.3235 7.60507 12.633 7.99983 12.9134C8.49334 13.264 8.88288 13.4628 9.27605 13.5809C9.67267 13.7 10.1161 13.7501 10.7377 13.7501H13.2653C13.8868 13.7501 14.3303 13.7 14.7269 13.5809C15.1201 13.4628 15.5096 13.264 16.0031 12.9134C16.3979 12.633 16.8253 12.3235 17.2961 11.9824L21.5545 8.89785L22.1789 8.42288C22.2643 8.35796 22.307 8.3255 22.3363 8.27763C22.3694 8.22372 22.3867 8.13845 22.3773 8.07591C22.3689 8.02037 22.3474 7.98277 22.3043 7.90757C21.9758 7.33403 21.4202 6.97169 20.723 6.5171L16.7994 3.95218C15.7574 3.27092 14.9251 2.72678 14.2022 2.35789C13.4548 1.97652 12.765 1.75 12.0011 1.75Z',
  d6: 'M16.8707 14.1351C17.2716 13.8503 17.7042 13.5369 18.173 13.1974L21.756 10.602C22.1672 10.3042 22.3728 10.1552 22.5358 10.2372C22.6989 10.3192 22.7019 10.5731 22.7079 11.0808L22.75 14.6253C22.7181 16.0916 22.6923 17.2771 22.5242 18.2324C22.3474 19.2371 22.0036 20.0551 21.2974 20.7551C20.5889 21.4574 19.7511 21.797 18.7213 21.974C17.7368 22.1432 16.5082 22.1735 14.9803 22.2112L14.9225 22.2126C12.9684 22.2609 11.0316 22.2609 9.07746 22.2126L9.01972 22.2112C7.49178 22.1735 6.26317 22.1432 5.2787 21.974C4.24887 21.797 3.41116 21.4574 2.70265 20.7551C1.99644 20.0551 1.65261 19.2371 1.47581 18.2324C1.3077 17.2771 1.2819 16.0916 1.25 14.6253L1.2921 11.0807C1.29813 10.573 1.30114 10.3192 1.46415 10.2372C1.62715 10.1552 1.83276 10.3041 2.24399 10.6019L5.82769 13.1974C6.29643 13.5369 6.72907 13.8503 7.13001 14.1351C7.7126 14.549 8.24936 14.8378 8.84338 15.0163C9.43394 15.1937 10.0385 15.2489 10.7366 15.2489H13.2641C13.9622 15.2489 14.5668 15.1937 15.1573 15.0163C15.7513 14.8378 16.2881 14.549 16.8707 14.1351Z',
  d7: 'M2 8.50702L7.5 14.0135H16.5L22 8.50702',
  d8: 'M2 8.49901L11.9481 2.51315C11.9513 2.51124 11.9552 2.51124 11.9584 2.51314L21.9678 8.51569V21.5017C21.9678 21.5072 21.9634 21.5117 21.9578 21.5117H2.01C2.00448 21.5117 2 21.5072 2 21.5017V8.49901Z',
  d9: 'M12.3856 1.85688C12.1481 1.71437 11.8513 1.71438 11.6138 1.85689L2.11631 7.55556L7.81065 13.25H16.1893L21.8837 7.55559L12.3856 1.85688Z',
  d10: 'M22.75 8.81063L16.8106 14.75H7.18932L1.25 8.81057V21.5C1.25 21.9142 1.58579 22.25 2 22.25H22C22.4142 22.25 22.75 21.9142 22.75 21.5V8.81063Z',
};

export const IconMailOpen02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-open-02-stroke-rounded IconMailOpen02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMailOpen02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-open-02-duotone-rounded IconMailOpen02DuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailOpen02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-open-02-twotone-rounded IconMailOpen02TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailOpen02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-open-02-solid-rounded IconMailOpen02SolidRounded"
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

export const IconMailOpen02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-open-02-bulk-rounded IconMailOpen02BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailOpen02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-open-02-stroke-sharp IconMailOpen02StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailOpen02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-open-02-solid-sharp IconMailOpen02SolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMailOpen02: TheIconSelfPack = {
  name: 'MailOpen02',
  StrokeRounded: IconMailOpen02StrokeRounded,
  DuotoneRounded: IconMailOpen02DuotoneRounded,
  TwotoneRounded: IconMailOpen02TwotoneRounded,
  SolidRounded: IconMailOpen02SolidRounded,
  BulkRounded: IconMailOpen02BulkRounded,
  StrokeSharp: IconMailOpen02StrokeSharp,
  SolidSharp: IconMailOpen02SolidSharp,
};