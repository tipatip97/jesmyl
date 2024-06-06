import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.9994 2C7.69953 2 6.04961 2 5.02449 3.02513C3.99936 4.05025 3.99936 5.70017 3.99936 9V15C3.99936 18.2998 3.99936 19.9497 5.02449 20.9749C6.04961 22 7.69953 22 10.9994 22C14.2992 22 15.9491 22 16.9743 20.9749C17.9994 19.9497 17.9994 18.2998 17.9994 15V14',
  d2: 'M9.99936 19H11.9994',
  d3: 'M14.8365 5.37988C13.7565 5.37988 13.2165 6.15988 13.0965 6.63988C12.9765 7.11988 12.9765 8.85988 13.0485 9.57988C13.2885 10.4799 13.8885 10.8519 14.4765 10.9719C15.0165 11.0199 17.2965 11.0019 17.9565 11.0019C18.9165 11.0199 19.6365 10.6599 19.9365 9.57988C19.9965 9.21988 20.0565 7.23988 19.9065 6.63988C19.5885 5.67988 18.7965 5.37988 18.1965 5.37988H14.8365Z',
  d4: 'M14.7494 4.95854C14.7494 4.89854 14.7576 4.55312 14.759 4.11854C14.7602 3.72145 14.7254 3.33854 14.915 2.98814C15.6254 1.57454 17.6654 1.71854 18.1694 3.15854C18.2567 3.39562 18.2619 3.77146 18.2594 4.11854C18.2561 4.56203 18.2654 4.95854 18.2654 4.95854',
  d5: 'M6.27611 2.52806C5.25098 3.55318 5.25098 5.2031 5.25098 8.50293V14.5029C5.25098 17.8027 5.25098 19.4526 6.27611 20.4778C7.30123 21.5029 8.95115 21.5029 12.251 21.5029C15.5508 21.5029 17.2007 21.5029 18.2259 20.4778C19.251 19.4526 19.251 17.8027 19.251 14.5029V10.6242C19.0728 10.6279 18.8672 10.6279 18.626 10.6279H16.876C16.0606 10.6279 15.6529 10.6279 15.3313 10.4852C14.9025 10.2949 14.5618 9.92993 14.3842 9.47046C14.251 9.12589 14.251 8.68907 14.251 7.81543C14.251 6.94179 14.251 6.50497 14.3842 6.1604C14.5618 5.70097 14.9025 5.33596 15.3313 5.14566C15.6529 5.00293 16.0606 5.00293 16.876 5.00293H18.626C18.8282 5.00293 19.0054 5.00293 19.1624 5.00511C19.0506 3.86631 18.7978 3.09996 18.2259 2.52806C17.2007 1.50293 15.5508 1.50293 12.251 1.50293C8.95115 1.50293 7.30123 1.50293 6.27611 2.52806Z',
  d6: 'M12.251 1.50293C8.95115 1.50293 7.30123 1.50293 6.27611 2.52806C5.25098 3.55318 5.25098 5.2031 5.25098 8.50293V14.5029C5.25098 17.8027 5.25098 19.4526 6.27611 20.4778C7.30123 21.5029 8.95115 21.5029 12.251 21.5029C15.5508 21.5029 17.2007 21.5029 18.2259 20.4778C19.251 19.4526 19.251 17.8027 19.251 14.5029V13.5029',
  d7: 'M11.251 18.5029H13.251',
  d8: 'M16.0871 4.88281C15.0071 4.88281 14.4671 5.66281 14.3471 6.14281C14.2271 6.62281 14.2271 8.36281 14.2991 9.08281C14.5391 9.98281 15.1391 10.3548 15.7271 10.4748C16.2671 10.5228 18.5471 10.5048 19.2071 10.5048C20.1671 10.5228 20.8871 10.1628 21.1871 9.08281C21.2471 8.72281 21.3071 6.74281 21.1571 6.14281C20.8391 5.18281 20.0471 4.88281 19.4471 4.88281H16.0871Z',
  d9: 'M16 4.46143C16 4.40143 16.0082 4.05603 16.0096 3.62147C16.0108 3.22438 15.976 2.84147 16.1656 2.49107C16.876 1.07747 18.916 1.22147 19.42 2.66147C19.5073 2.89855 19.5125 3.27439 19.51 3.62147C19.5067 4.06493 19.516 4.46143 19.516 4.46143',
  d10: 'M12 2C8.70017 2 7.05025 2 6.02513 3.02513C5 4.05025 5 5.70017 5 9V15C5 18.2998 5 19.9497 6.02513 20.9749C7.05025 22 8.70017 22 12 22C15.2998 22 16.9497 22 17.9749 20.9749C19 19.9497 19 18.2998 19 15V14',
  d11: 'M11 19H13',
  d12: 'M15.7491 4.95854C15.7491 4.89854 15.7573 4.55312 15.7587 4.11854C15.7599 3.72145 15.7251 3.33854 15.9147 2.98814C16.6251 1.57454 18.6651 1.71854 19.1691 3.15854C19.2564 3.39562 19.2616 3.77146 19.2591 4.11854C19.2558 4.56203 19.2651 4.95854 19.2651 4.95854M15.8362 5.37988C14.7562 5.37988 14.2162 6.15988 14.0962 6.63988C13.9762 7.11988 13.9762 8.85988 14.0482 9.57988C14.2882 10.4799 14.8882 10.8519 15.4762 10.9719C16.0162 11.0199 18.2962 11.0019 18.9562 11.0019C19.9162 11.0199 20.6362 10.6599 20.9362 9.57988C20.9962 9.21988 21.0562 7.23988 20.9062 6.63988C20.5882 5.67988 19.7962 5.37988 19.1962 5.37988H15.8362Z',
  d13: 'M19.7188 4.61063V4.025C19.7188 2.51247 18.5213 1.25 17 1.25C15.4787 1.25 14.2813 2.51247 14.2813 4.025V4.61063C13.5256 4.92366 12.9824 5.64097 12.8735 6.47252C12.808 6.97311 12.75 7.51394 12.75 8.075C12.75 8.63606 12.808 9.17688 12.8735 9.67748C13.0154 10.7614 13.8954 11.6513 15.0219 11.7046C15.6538 11.7345 16.2952 11.75 17 11.75C17.7048 11.75 18.3462 11.7345 18.9781 11.7046C20.1046 11.6513 20.9846 10.7615 21.1265 9.67748C21.192 9.17688 21.25 8.63606 21.25 8.075C21.25 7.51394 21.192 6.97311 21.1265 6.47252C21.0176 5.64097 20.4744 4.92366 19.7188 4.61063ZM15.7812 4.025C15.7812 3.30078 16.3467 2.75 17 2.75C17.6533 2.75 18.2188 3.30078 18.2188 4.025V4.41673C17.8277 4.40566 17.4254 4.4 17 4.4C16.5746 4.4 16.1723 4.40566 15.7812 4.41673V4.025Z',
  d14: 'M18.1607 13.3279C18.25 13.416 18.25 13.5607 18.25 13.85V15.0557C18.25 16.6583 18.25 17.9373 18.1152 18.9404C17.9759 19.9767 17.6803 20.8301 17.0052 21.5052C16.3301 22.1803 15.4767 22.4758 14.4404 22.6152C13.4373 22.75 12.1583 22.75 10.5557 22.75H10.4443C8.84166 22.75 7.5627 22.75 6.55961 22.6152C5.52335 22.4758 4.66994 22.1803 3.9948 21.5052C3.31966 20.8301 3.02415 19.9767 2.88483 18.9404C2.74997 17.9373 2.74998 16.6583 2.75 15.0558V15.0557V8.94424V8.94422C2.74998 7.34165 2.74997 6.06269 2.88483 5.05961C3.02415 4.02335 3.31966 3.16994 3.9948 2.4948C4.66994 1.81966 5.52335 1.52415 6.55961 1.38483C7.56269 1.24997 8.84167 1.24998 10.4442 1.25H10.4443H10.5558H10.5558C11.3042 1.24999 11.9821 1.24999 12.5942 1.26372C13.0636 1.27425 13.2983 1.27951 13.3844 1.41464C13.4705 1.54976 13.3621 1.79664 13.1453 2.29041C12.9778 2.67203 12.8639 3.08108 12.8125 3.50621V3.50622C12.7962 3.64125 12.788 3.70876 12.7638 3.75614C12.7397 3.80351 12.6892 3.85047 12.5881 3.94438C11.9365 4.54983 11.5042 5.37638 11.3862 6.27783C11.318 6.79869 11.25 7.41574 11.25 8.075C11.25 8.73426 11.318 9.35131 11.3862 9.87217C11.6146 11.6168 13.0407 13.1126 14.9511 13.2029C15.6073 13.2339 16.2723 13.25 17 13.25C17.2161 13.25 17.4267 13.2486 17.6331 13.2458C17.9253 13.2418 18.0714 13.2398 18.1607 13.3279ZM9.5 18C8.94772 18 8.5 18.4477 8.5 19C8.5 19.5523 8.94772 20 9.5 20H11.5C12.0523 20 12.5 19.5523 12.5 19C12.5 18.4477 12.0523 18 11.5 18H9.5Z',
  d15: 'M18.25 13.85C18.25 13.5607 18.25 13.416 18.1607 13.3279C18.0714 13.2398 17.9253 13.2418 17.6331 13.2458C17.4267 13.2486 17.2161 13.25 17 13.25C16.2723 13.25 15.6073 13.2339 14.9511 13.2029C13.0407 13.1126 11.6146 11.6168 11.3862 9.87217C11.318 9.35131 11.25 8.73426 11.25 8.075C11.25 7.41574 11.318 6.79869 11.3862 6.27783C11.5042 5.37638 11.9365 4.54983 12.5881 3.94438C12.6892 3.85047 12.7397 3.80351 12.7638 3.75614C12.788 3.70876 12.7962 3.64124 12.8125 3.50621C12.8639 3.08108 12.9778 2.67203 13.1453 2.29041C13.3621 1.79664 13.4705 1.54976 13.3844 1.41464C13.2983 1.27951 13.0636 1.27425 12.5942 1.26372C11.9821 1.24999 11.3042 1.24999 10.5558 1.25H10.4443C8.84167 1.24998 7.5627 1.24997 6.55961 1.38483C5.52335 1.52415 4.66994 1.81966 3.9948 2.4948C3.31966 3.16994 3.02415 4.02335 2.88483 5.05961C2.74997 6.0627 2.74998 7.34165 2.75 8.94424V15.0557C2.74998 16.6583 2.74997 17.9373 2.88483 18.9404C3.02415 19.9767 3.31966 20.8301 3.9948 21.5052C4.66994 22.1803 5.52335 22.4758 6.55961 22.6152C7.5627 22.75 8.84166 22.75 10.4443 22.75H10.5557C12.1583 22.75 13.4373 22.75 14.4404 22.6152C15.4767 22.4758 16.3301 22.1803 17.0052 21.5052C17.6803 20.8301 17.9759 19.9767 18.1152 18.9404C18.25 17.9373 18.25 16.6583 18.25 15.0557V13.85Z',
  d16: 'M8.5 19C8.5 18.4477 8.94772 18 9.5 18H11.5C12.0523 18 12.5 18.4477 12.5 19C12.5 19.5523 12.0523 20 11.5 20H9.5C8.94772 20 8.5 19.5523 8.5 19Z',
  d17: 'M12 2H5V22H19V14',
  d18: 'M19.5 5.5V4C19.5 2.89543 18.6046 2 17.5 2C16.3954 2 15.5 2.89543 15.5 4V5.5M14 5.5H21V11H14V5.5Z',
  d19: 'M10.5 19H13.5',
  d20: 'M16.5 1.25C14.9812 1.25 13.75 2.48122 13.75 4V4.75H12.25V11.75H20.75V4.75H19.25V4C19.25 2.48122 18.0188 1.25 16.5 1.25ZM15.25 4V4.75H17.75V4C17.75 3.30964 17.1904 2.75 16.5 2.75C15.8096 2.75 15.25 3.30964 15.25 4Z',
  d21: 'M12.316 3.25C12.4503 2.49575 12.7835 1.81035 13.2595 1.25H4C3.58579 1.25 3.25 1.58579 3.25 2V22C3.25 22.4142 3.58579 22.75 4 22.75H18C18.4142 22.75 18.75 22.4142 18.75 22V13.25H10.75V3.25H12.316ZM9.5 20H12.5V18H9.5V20Z',
};

export const IconMobileSecurityStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-security-stroke-rounded IconMobileSecurityStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMobileSecurityDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-security-duotone-rounded IconMobileSecurityDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMobileSecurityTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-security-twotone-rounded IconMobileSecurityTwotoneRounded"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMobileSecuritySolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-security-solid-rounded IconMobileSecuritySolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMobileSecurityBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-security-bulk-rounded IconMobileSecurityBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMobileSecurityStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-security-stroke-sharp IconMobileSecurityStrokeSharp"
    >
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMobileSecuritySolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-security-solid-sharp IconMobileSecuritySolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMobileSecurity: TheIconSelfPack = {
  name: 'MobileSecurity',
  StrokeRounded: IconMobileSecurityStrokeRounded,
  DuotoneRounded: IconMobileSecurityDuotoneRounded,
  TwotoneRounded: IconMobileSecurityTwotoneRounded,
  SolidRounded: IconMobileSecuritySolidRounded,
  BulkRounded: IconMobileSecurityBulkRounded,
  StrokeSharp: IconMobileSecurityStrokeSharp,
  SolidSharp: IconMobileSecuritySolidSharp,
};