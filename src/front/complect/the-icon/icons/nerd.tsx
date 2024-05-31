import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15',
  d2: 'M10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9ZM10 9C10.5602 8.43978 11.1643 8 12 8C12.8357 8 13.4398 8.43978 14 9M21 8H17.7324M6.26756 8H3M14 9C14 10.1046 14.8954 11 16 11C17.1046 11 18 10.1046 18 9C18 7.89543 17.1046 7 16 7C14.8954 7 14 7.89543 14 9Z',
  d3: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9ZM16 11C17.1046 11 18 10.1046 18 9C18 7.89543 17.1046 7 16 7C14.8954 7 14 7.89543 14 9C14 10.1046 14.8954 11 16 11Z',
  d4: 'M3.31873 7.25C2.88087 7.25 2.66193 7.25 2.57598 7.09678C2.49002 6.94357 2.5997 6.76398 2.81906 6.40481C4.70708 3.31344 8.11257 1.25 12 1.25C15.8874 1.25 19.2929 3.31344 21.1809 6.40481C21.4003 6.76398 21.51 6.94357 21.424 7.09678C21.3381 7.25 21.1191 7.25 20.6813 7.25H18.4041C18.2719 7.25 18.2059 7.25 18.1512 7.22757C18.0965 7.20514 18.0412 7.15063 17.9306 7.04163C17.4341 6.55211 16.7523 6.25 16 6.25C15.178 6.25 14.4402 6.61065 13.9363 7.18235C13.7279 7.41876 13.6237 7.53697 13.5342 7.55988C13.4446 7.58279 13.3 7.53043 13.0108 7.4257C12.7076 7.3159 12.3726 7.25 12 7.25C11.6274 7.25 11.2924 7.3159 10.9892 7.4257C10.7 7.53043 10.5554 7.58279 10.4658 7.55988C10.3763 7.53697 10.2721 7.41876 10.0637 7.18235C9.55976 6.61065 8.822 6.25 8 6.25C7.24767 6.25 6.5659 6.55211 6.06938 7.04163C5.95882 7.15063 5.90354 7.20514 5.84884 7.22757C5.79414 7.25 5.72807 7.25 5.59594 7.25H3.31873ZM2.18934 8.75C1.9754 8.75 1.86843 8.75 1.78777 8.81165C1.70711 8.8733 1.68008 8.97267 1.62602 9.17141C1.38085 10.0727 1.25 11.0211 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 11.0211 22.6191 10.0727 22.374 9.17141C22.3199 8.97267 22.2929 8.8733 22.2122 8.81165C22.1316 8.75 22.0246 8.75 21.8107 8.75H18.9891C18.8547 8.75 18.75 8.86554 18.75 9C18.75 10.5188 17.5188 11.75 16 11.75C14.673 11.75 13.5655 10.8101 13.307 9.55968C13.2815 9.43648 13.2688 9.37487 13.2418 9.33055C13.2149 9.28622 13.1773 9.25574 13.1023 9.19478C12.7388 8.89963 12.4009 8.75 12 8.75C11.5991 8.75 11.2612 8.89963 10.8977 9.19478C10.8227 9.25574 10.7851 9.28622 10.7582 9.33055C10.7312 9.37487 10.7185 9.43648 10.693 9.55968C10.4345 10.8101 9.327 11.75 8 11.75C6.48122 11.75 5.25 10.5188 5.25 9C5.25 8.86554 5.14534 8.75 5.01088 8.75H2.18934ZM7.54964 14.4003C7.88084 14.1515 8.35099 14.2184 8.59974 14.5496C9.37631 15.5835 10.6103 16.25 12 16.25C13.3898 16.25 14.6238 15.5835 15.4003 14.5496C15.6491 14.2184 16.1192 14.1515 16.4505 14.4003C16.7817 14.649 16.8485 15.1192 16.5997 15.4504C15.5521 16.8453 13.8816 17.75 12 17.75C10.1185 17.75 8.44802 16.8453 7.40035 15.4504C7.1516 15.1192 7.21843 14.649 7.54964 14.4003ZM6.75 9C6.75 8.30964 7.30964 7.75 8 7.75C8.69036 7.75 9.25 8.30964 9.25 9C9.25 9.69036 8.69036 10.25 8 10.25C7.30964 10.25 6.75 9.69036 6.75 9ZM14.75 9C14.75 8.30964 15.3096 7.75 16 7.75C16.6904 7.75 17.25 8.30964 17.25 9C17.25 9.69036 16.6904 10.25 16 10.25C15.3096 10.25 14.75 9.69036 14.75 9Z',
  d5: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d6: 'M7.54964 14.4003C7.88084 14.1516 8.35099 14.2184 8.59974 14.5496C9.37631 15.5836 10.6103 16.25 12 16.25C13.3898 16.25 14.6238 15.5836 15.4003 14.5496C15.6491 14.2184 16.1192 14.1516 16.4505 14.4003C16.7817 14.6491 16.8485 15.1192 16.5997 15.4505C15.5521 16.8454 13.8816 17.75 12 17.75C10.1185 17.75 8.44802 16.8454 7.40035 15.4505C7.1516 15.1192 7.21843 14.6491 7.54964 14.4003Z',
  d7: 'M22.25 8.75L18.7388 8.75C18.7462 8.83234 18.75 8.91573 18.75 9C18.75 10.5188 17.5188 11.75 16 11.75C14.5963 11.75 13.4383 10.6984 13.2708 9.34009C12.8404 8.94879 12.4621 8.75 12 8.75C11.5378 8.75 11.1596 8.94879 10.7292 9.34009C10.5616 10.6984 9.40361 11.75 7.99998 11.75C6.48119 11.75 5.24998 10.5188 5.24998 9C5.24998 8.91573 5.25377 8.83234 5.26119 8.75H1.75C1.91412 8.23191 2.11644 7.73081 2.35365 7.25L5.87856 7.25C6.38295 6.63925 7.14601 6.25 7.99998 6.25C9.04761 6.25 9.95842 6.83582 10.4227 7.69774C10.8619 7.43325 11.3786 7.25 12 7.25C12.6213 7.25 13.138 7.43325 13.5773 7.69774C14.0415 6.83582 14.9523 6.25 16 6.25C16.8539 6.25 17.617 6.63925 18.1214 7.25L21.6463 7.25C21.8835 7.73081 22.0858 8.23191 22.25 8.75ZM6.74998 9C6.74998 8.30964 7.30962 7.75 7.99998 7.75C8.69033 7.75 9.24998 8.30964 9.24998 9C9.24998 9.69036 8.69033 10.25 7.99998 10.25C7.30962 10.25 6.74998 9.69036 6.74998 9ZM14.75 9C14.75 8.30964 15.3096 7.75 16 7.75C16.6903 7.75 17.25 8.30964 17.25 9C17.25 9.69036 16.6903 10.25 16 10.25C15.3096 10.25 14.75 9.69036 14.75 9Z',
  d8: 'M2.35367 7.25C4.1074 3.69529 7.76813 1.25 12 1.25C16.2319 1.25 19.8926 3.69529 21.6463 7.25H18.1214C17.617 6.63925 16.854 6.25 16 6.25C14.9524 6.25 14.0416 6.83582 13.5773 7.69774C13.138 7.43325 12.6214 7.25 12 7.25C11.3786 7.25 10.862 7.43325 10.4227 7.69774C9.95844 6.83582 9.04763 6.25 8 6.25C7.14603 6.25 6.38298 6.63925 5.87858 7.25H2.35367ZM1.75002 8.75C1.42522 9.77533 1.25 10.8672 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 10.8672 22.5748 9.77533 22.25 8.75H18.7388C18.7462 8.83234 18.75 8.91573 18.75 9C18.75 10.5188 17.5188 11.75 16 11.75C14.5964 11.75 13.4384 10.6984 13.2708 9.34009C12.8404 8.94879 12.4621 8.75 12 8.75C11.5379 8.75 11.1596 8.94879 10.7292 9.34009C10.5616 10.6984 9.40363 11.75 8 11.75C6.48122 11.75 5.25 10.5188 5.25 9C5.25 8.91573 5.25379 8.83234 5.26121 8.75H1.75002ZM12.0001 16.2502C13.3899 16.2502 14.6238 15.5838 15.4004 14.5498L16.5998 15.4506C15.5521 16.8455 13.8816 17.7502 12.0001 17.7502C10.1185 17.7502 8.44806 16.8455 7.40039 15.4506L8.59978 14.5498C9.37635 15.5838 10.6103 16.2502 12.0001 16.2502ZM6.75 9C6.75 8.30964 7.30964 7.75 8 7.75C8.69036 7.75 9.25 8.30964 9.25 9C9.25 9.69036 8.69036 10.25 8 10.25C7.30964 10.25 6.75 9.69036 6.75 9ZM14.75 9C14.75 8.30964 15.3096 7.75 16 7.75C16.6904 7.75 17.25 8.30964 17.25 9C17.25 9.69036 16.6904 10.25 16 10.25C15.3096 10.25 14.75 9.69036 14.75 9Z',
} as const;

export const IconNerdStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="nerd-stroke-rounded IconNerdStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconNerdDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="nerd-duotone-rounded IconNerdDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconNerdTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="nerd-twotone-rounded IconNerdTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconNerdSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="nerd-solid-rounded IconNerdSolidRounded"
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

export const IconNerdBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="nerd-bulk-rounded IconNerdBulkRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNerdStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="nerd-stroke-sharp IconNerdStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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

export const IconNerdSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="nerd-solid-sharp IconNerdSolidSharp"
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

export const iconPackOfNerd: TheIconSelfPack = {
  name: 'Nerd',
  StrokeRounded: IconNerdStrokeRounded,
  DuotoneRounded: IconNerdDuotoneRounded,
  TwotoneRounded: IconNerdTwotoneRounded,
  SolidRounded: IconNerdSolidRounded,
  BulkRounded: IconNerdBulkRounded,
  StrokeSharp: IconNerdStrokeSharp,
  SolidSharp: IconNerdSolidSharp,
};