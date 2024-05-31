import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.66667 3.86984C9.998 2.62328 10.9234 2 12 2C13.4966 2 14.7009 3.20434 17.1096 5.61302L18.387 6.89042C20.7957 9.2991 22 10.5034 22 12C22 13.4966 20.7957 14.7009 18.387 17.1096L17.1096 18.387C14.7009 20.7957 13.4966 22 12 22C10.5034 22 9.2991 20.7957 6.89042 18.387L5.61302 17.1096C3.20434 14.7009 2 13.4966 2 12C2 10.8912 2.87352 9.7285 4.3058 8.22081C5.01214 7.47727 5.36531 7.1055 5.23534 6.80275C5.10536 6.5 4.59884 6.5 3.58579 6.5H2.5',
  d2: 'M18.387 6.89042L17.1096 5.61302C14.7009 3.20434 13.4966 2 12 2C10.9234 2 9.998 2.62328 8.66667 3.86984L5.18722 7.18352C5.05478 7.43239 4.75018 7.75302 4.3058 8.22081C2.87352 9.7285 2 10.8912 2 12C2 13.4966 3.20434 14.7009 5.61302 17.1096L6.89042 18.387C9.2991 20.7957 10.5034 22 12 22C13.4966 22 14.7009 20.7957 17.1096 18.387L18.387 17.1096C20.7957 14.7009 22 13.4966 22 12C22 10.5034 20.7957 9.2991 18.387 6.89042Z',
  d3: 'M12 22C10.5034 22 9.2991 20.7957 6.89042 18.387L5.61302 17.1096C3.20434 14.7009 2 13.4966 2 12C2 10.8912 2.87352 9.7285 4.3058 8.22081C5.01214 7.47727 5.36531 7.1055 5.23534 6.80275C5.10536 6.5 4.59884 6.5 3.58579 6.5H2.5M12 2C10.9234 2 9.998 2.62328 8.66667 3.86984',
  d4: 'M12 3C11.3536 3 10.6871 3.34795 9.35015 4.5998C8.947 4.97728 8.31418 4.95647 7.9367 4.55332C7.55922 4.15017 7.58003 3.51735 7.98318 3.13987C9.30886 1.89861 10.4931 1 12 1C13.0548 1 13.9411 1.4382 14.8193 2.10823C15.6621 2.75125 16.6047 3.6939 17.7656 4.85478L19.1452 6.23446C20.3061 7.39529 21.2488 8.3379 21.8918 9.18067C22.5618 10.0589 23 10.9452 23 12C23 13.0548 22.5618 13.9411 21.8918 14.8193C21.2488 15.6621 20.3061 16.6047 19.1453 17.7655L19.1452 17.7655L17.7655 19.1453C16.6047 20.3061 15.6621 21.2488 14.8193 21.8918C13.9411 22.5618 13.0548 23 12 23C10.9452 23 10.0589 22.5618 9.18067 21.8918C8.33791 21.2488 7.39532 20.3061 6.23451 19.1453L6.23445 19.1452L6.18331 19.0941L4.85477 17.7655L4.85475 17.7655C3.69388 16.6047 2.75125 15.6621 2.10824 14.8193C1.4382 13.9411 1 13.0548 1 12C1 11.1778 1.32417 10.4194 1.7748 9.71894C2.10001 9.21344 2.51899 8.69585 3 8.15957L2.00864 7.37116C1.7748 7.15957 1.5 6.8737 1.5 6.5C1.5 5.94772 1.94772 5.5 2.5 5.5H3.58579L3.64869 5.49999C4.10017 5.49989 4.54056 5.49979 4.88077 5.54756C5.19848 5.59217 5.86404 5.7323 6.15424 6.40825C6.446 7.08785 6.08241 7.6703 5.89701 7.929C5.69556 8.21008 5.3895 8.53213 5.07407 8.86402L5.03081 8.90955C4.32413 9.65343 3.80131 10.2655 3.45679 10.801C3.11259 11.336 3 11.7134 3 12C3 12.4417 3.16398 12.9059 3.69828 13.6062C4.25019 14.3295 5.0958 15.1781 6.32013 16.4025L7.59753 17.6799C8.82185 18.9042 9.67047 19.7498 10.3938 20.3017C11.0941 20.836 11.5583 21 12 21C12.4417 21 12.9059 20.836 13.6062 20.3017C14.3295 19.7498 15.1782 18.9042 16.4025 17.6799L17.6799 16.4025C18.9042 15.1781 19.7498 14.3295 20.3017 13.6062C20.836 12.9059 21 12.4417 21 12C21 11.5583 20.836 11.0941 20.3017 10.3938C19.7498 9.67047 18.9042 8.82185 17.6799 7.59752L16.4025 6.32013C15.1782 5.0958 14.3295 4.25019 13.6062 3.69828C12.9059 3.16397 12.4417 3 12 3Z',
  d5: 'M17.7655 19.1453C16.6047 20.3061 15.6621 21.2488 14.8193 21.8918C13.9411 22.5618 13.0548 23 12 23C10.9452 23 10.0589 22.5618 9.18067 21.8918C8.33791 21.2488 7.39532 20.3062 6.23451 19.1453L6.23445 19.1453L6.18331 19.0941L4.85477 17.7656L4.85475 17.7655C3.69388 16.6047 2.75125 15.6621 2.10824 14.8193C1.4382 13.9412 1 13.0549 1 12C1 11.1778 1.32417 10.4194 1.7748 9.71896C2.10001 9.21346 2.51899 8.69587 3 8.15959L2.00864 7.37118C1.7748 7.15959 1.5 6.87371 1.5 6.50002C1.5 5.94773 1.94772 5.50002 2.5 5.50002H3.58579L3.64869 5.50001C4.10017 5.49991 4.54056 5.49981 4.88077 5.54758C5.19848 5.59219 5.86404 5.73232 6.15424 6.40827C6.446 7.08787 6.08241 7.67031 5.89701 7.92902C5.69556 8.2101 5.3895 8.53215 5.07407 8.86404L5.03081 8.90957C4.32413 9.65345 3.80131 10.2655 3.45679 10.8011C3.11259 11.3361 3 11.7134 3 12C3 12.4417 3.16398 12.9059 3.69828 13.6062C4.25019 14.3296 5.0958 15.1782 6.32013 16.4025L7.59753 17.6799C8.82185 18.9042 9.67047 19.7498 10.3938 20.3017C11.0941 20.836 11.5583 21 12 21C12.4417 21 12.9059 20.836 13.6062 20.3017C14.3295 19.7498 15.1782 18.9042 16.4025 17.6799L17.0412 17.0412L18.4554 18.4554L17.7655 19.1453Z',
  d6: 'M2.5 7.5L6 7.99527L2 12L12 22L22 12L12 2L8.5 5.5',
  d7: 'M11.309 1.53624C11.6906 1.15459 12.3094 1.15459 12.691 1.53624L22.4638 11.309C22.8454 11.6906 22.8454 12.3094 22.4638 12.691L12.691 22.4638C12.3094 22.8454 11.6906 22.8454 11.309 22.4638L1.53624 12.691C1.15475 12.3095 1.15456 11.6911 1.53583 11.3094L4.0624 8.77982L2.57898 8.56991L2.85284 6.63464L6.27329 7.11866C6.63993 7.17054 6.94576 7.42518 7.06319 7.77636C7.18062 8.12754 7.08949 8.51493 6.82781 8.77692L3.60894 11.9996L12 20.3907L20.3907 12L12 3.60934L9.27058 6.33876L7.88851 4.95669L11.309 1.53624Z',
} as const;

export const IconRotateSquareStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-square-stroke-rounded IconRotateSquareStrokeRounded"
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

export const IconRotateSquareDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-square-duotone-rounded IconRotateSquareDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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

export const IconRotateSquareTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-square-twotone-rounded IconRotateSquareTwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRotateSquareSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-square-solid-rounded IconRotateSquareSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRotateSquareBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-square-bulk-rounded IconRotateSquareBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRotateSquareStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-square-stroke-sharp IconRotateSquareStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRotateSquareSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-square-solid-sharp IconRotateSquareSolidSharp"
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

export const iconPackOfRotateSquare: TheIconSelfPack = {
  name: 'RotateSquare',
  StrokeRounded: IconRotateSquareStrokeRounded,
  DuotoneRounded: IconRotateSquareDuotoneRounded,
  TwotoneRounded: IconRotateSquareTwotoneRounded,
  SolidRounded: IconRotateSquareSolidRounded,
  BulkRounded: IconRotateSquareBulkRounded,
  StrokeSharp: IconRotateSquareStrokeSharp,
  SolidSharp: IconRotateSquareSolidSharp,
};