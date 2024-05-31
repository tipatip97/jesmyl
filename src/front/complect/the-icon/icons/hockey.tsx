import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.8614 19.224L20.8481 3.72126C21.1689 3.16783 20.9654 2.47169 20.3905 2.15561C19.8259 1.8452 19.1047 2.01295 18.754 2.53628L8.61227 17.6689C8.23552 18.2311 7.46084 18.4113 6.85433 18.0778C6.04998 17.6356 6.17032 16.8476 6.44582 16.1473C6.70887 15.4787 6.42574 14.727 5.77639 14.37C4.91469 13.8963 4.03029 14.3288 3.57111 15.0861C2.25235 17.2611 3.35339 20.3548 5.48365 21.526C7.75091 22.7724 10.5962 21.4065 11.8614 19.224Z',
  d2: 'M16 7L18 8.5',
  d3: 'M15.8123 6.92566L8.61227 17.6689C8.23552 18.2311 7.46084 18.4113 6.85433 18.0778C6.04998 17.6356 6.17032 16.8476 6.44582 16.1473C6.70887 15.4787 6.42574 14.727 5.77639 14.37C4.91469 13.8963 4.03029 14.3288 3.57111 15.0861C2.25235 17.2611 3.35339 20.3548 5.48365 21.526C7.75091 22.7724 10.5962 21.4065 11.8614 19.224L18.0649 8.5224L15.8123 6.92566Z',
  d4: 'M20.3907 2.15561C19.8261 1.8452 19.1049 2.01295 18.7542 2.53628L15.8125 6.92564L18.0666 8.52344L20.8483 3.72126C21.1691 3.16783 20.9656 2.47169 20.3907 2.15561Z',
  d5: 'M20.029 2.81254C19.7928 2.68264 19.5034 2.76465 19.3769 2.95353L16.8607 6.70787L17.8287 7.43384L20.199 3.34483C20.2996 3.17142 20.2515 2.93482 20.029 2.81254ZM18.1308 2.11844C18.7057 1.26066 19.8587 1.00716 20.7517 1.49808C21.6791 2.00795 22.0379 3.16364 21.4968 4.0971L12.5101 19.5998C11.7938 20.8354 10.6359 21.8362 9.3253 22.3574C8.00761 22.8815 6.48949 22.9346 5.12218 22.1829C3.86658 21.4926 2.9457 20.259 2.51873 18.9082C2.09069 17.5541 2.13651 16.005 2.92963 14.6969C3.52616 13.7131 4.81498 12.9854 6.13757 13.7125C7.10153 14.2425 7.55133 15.3852 7.1436 16.4216C7.01924 16.7377 6.97412 16.9725 6.99081 17.13C6.99792 17.1971 7.01532 17.2401 7.03726 17.2732C7.0592 17.3063 7.10611 17.3602 7.2155 17.4203C7.49367 17.5732 7.8365 17.4788 7.9891 17.2511L18.1308 2.11844Z',
  d6: 'M15.25 19.5C15.25 17.7051 16.7051 16.25 18.5 16.25C20.2949 16.25 21.75 17.7051 21.75 19.5C21.75 21.2949 20.2949 22.75 18.5 22.75C16.7051 22.75 15.25 21.2949 15.25 19.5Z',
  d7: 'M15.2495 19.4999C15.2495 17.705 16.7046 16.2499 18.4995 16.2499C20.2944 16.2499 21.7495 17.705 21.7495 19.4999C21.7495 21.2948 20.2944 22.7499 18.4995 22.7499C16.7046 22.7499 15.2495 21.2948 15.2495 19.4999Z',
  d8: 'M18.1306 2.11832C18.7055 1.26054 19.8585 1.00704 20.7514 1.49796C21.6789 2.00783 22.0376 3.16352 21.4965 4.09698L12.5098 19.5997C11.7936 20.8353 10.6357 21.8361 9.32505 22.3573C8.00737 22.8814 6.48924 22.9345 5.12194 22.1828C3.86633 21.4925 2.94546 20.2589 2.51848 18.9081C2.09045 17.554 2.13626 16.0049 2.92939 14.6968C3.52592 13.713 4.81474 12.9853 6.13732 13.7124C7.10129 14.2423 7.55109 15.3851 7.14336 16.4215C7.019 16.7376 6.97388 16.9724 6.99056 17.1299C6.99768 17.197 7.01508 17.24 7.03701 17.2731C7.05895 17.3062 7.10586 17.36 7.21526 17.4202C7.49342 17.5731 7.83625 17.4787 7.98886 17.2509L18.1306 2.11832ZM20.0292 2.81254C19.7929 2.68264 19.5036 2.76466 19.377 2.95353L16.8611 6.70755L17.829 7.4335L20.1992 3.34483C20.2997 3.17142 20.2516 2.93483 20.0292 2.81254Z',
} as const;

export const IconHockeyStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hockey-stroke-rounded IconHockeyStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="18.5" 
        cy="19.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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

export const IconHockeyDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hockey-duotone-rounded IconHockeyDuotoneRounded"
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
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="18.5" 
        cy="19.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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

export const IconHockeyTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hockey-twotone-rounded IconHockeyTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="18.5" 
        cy="19.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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

export const IconHockeySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hockey-solid-rounded IconHockeySolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="18.5" 
        cy="19.5" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHockeyBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hockey-bulk-rounded IconHockeyBulkRounded"
    >
      <circle 
        cx="18.5" 
        cy="19.5" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHockeyStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hockey-stroke-sharp IconHockeyStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="18.5" 
        cy="19.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHockeySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hockey-solid-sharp IconHockeySolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfHockey: TheIconSelfPack = {
  name: 'Hockey',
  StrokeRounded: IconHockeyStrokeRounded,
  DuotoneRounded: IconHockeyDuotoneRounded,
  TwotoneRounded: IconHockeyTwotoneRounded,
  SolidRounded: IconHockeySolidRounded,
  BulkRounded: IconHockeyBulkRounded,
  StrokeSharp: IconHockeyStrokeSharp,
  SolidSharp: IconHockeySolidSharp,
};