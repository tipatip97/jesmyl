import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20 10C19.9641 7.52043 19.7801 6.11466 18.8365 5.17157C17.6643 4 15.7776 4 12.0043 4C8.23106 4 6.34442 4 5.17221 5.17157C4 6.34315 4 8.22876 4 12C4 15.7712 4 17.6569 5.17221 18.8284C6.23545 19.8911 7.88646 19.9899 11 19.9991',
  d2: 'M18 19.7143V21M18 19.7143C16.8432 19.7143 15.8241 19.1461 15.2263 18.2833M18 19.7143C19.1568 19.7143 20.1759 19.1461 20.7737 18.2833M18 13.2857C19.1569 13.2857 20.1761 13.854 20.7738 14.7169M18 13.2857C16.8431 13.2857 15.8239 13.854 15.2262 14.7169M18 13.2857V12M22 13.9286L20.7738 14.7169M14.0004 19.0714L15.2263 18.2833M14 13.9286L15.2262 14.7169M21.9996 19.0714L20.7737 18.2833M20.7738 14.7169C21.1273 15.2271 21.3333 15.8403 21.3333 16.5C21.3333 17.1597 21.1272 17.773 20.7737 18.2833M15.2262 14.7169C14.8727 15.2271 14.6667 15.8403 14.6667 16.5C14.6667 17.1597 14.8728 17.773 15.2263 18.2833',
  d3: 'M9.5 2V4',
  d4: 'M14.5 2V4',
  d5: 'M9.5 20V22',
  d6: 'M4 9.5L2 9.5',
  d7: 'M4 14.5L2 14.5',
  d8: 'M22 9.5L20 9.5',
  d9: 'M12 8H8',
  d10: 'M5.17157 5.17157C4 6.34315 4 8.22876 4 12C4 15.7712 4 17.6569 5.17157 18.8284C6.34315 20 8.22876 20 12 20C14.5073 20 16.1811 20 17.3657 19.6557C16.4756 19.4905 15.7114 18.9839 15.2257 18.2828C14.8721 17.7725 14.666 17.1592 14.666 16.4994C14.666 15.8398 14.8721 15.2266 15.2255 14.7163C15.8233 13.8534 16.8425 13.2852 17.9993 13.2852C18.7466 13.2852 19.4365 13.5223 19.9924 13.9227C20 13.3425 20 12.7041 20 12C20 8.22876 20 6.34315 18.8284 5.17157C17.6569 4 15.7712 4 12 4C8.22876 4 6.34315 4 5.17157 5.17157Z',
  d11: 'M18.5001 13C19.0524 13 19.5001 13.4477 19.5001 14V14.2699C20.0994 14.4254 20.6436 14.7174 21.0951 15.1109L21.4533 14.877C21.9157 14.575 22.5354 14.7051 22.8374 15.1675C23.1394 15.6299 23.0093 16.2495 22.5469 16.5515L22.213 16.7696C22.345 17.1561 22.4168 17.5701 22.4168 18C22.4168 18.43 22.345 18.844 22.2129 19.2306L22.5466 19.4485C23.009 19.7505 23.139 20.3701 22.837 20.8325C22.535 21.2949 21.9153 21.425 21.4529 21.123L21.095 20.8892C20.6434 21.2827 20.0994 21.5746 19.5001 21.7301V22C19.5001 22.5523 19.0524 23 18.5001 23C17.9478 23 17.5001 22.5523 17.5001 22V21.7301C16.9009 21.5746 16.3568 21.2827 15.9053 20.8892L15.5473 21.123C15.0849 21.425 14.4652 21.2949 14.1632 20.8325C13.8612 20.3701 13.9913 19.7505 14.4537 19.4485L14.7873 19.2306C14.6552 18.844 14.5834 18.43 14.5834 18C14.5834 17.5701 14.6552 17.1561 14.7872 16.7696L14.4533 16.5515C13.9909 16.2495 13.8609 15.6299 14.1629 15.1675C14.4649 14.7051 15.0845 14.575 15.5469 14.877L15.9051 15.1109C16.3567 14.7174 16.9008 14.4254 17.5001 14.2699V14C17.5001 13.4477 17.9478 13 18.5001 13ZM18.5001 16.1429C17.8267 16.1429 17.2406 16.4777 16.8992 16.9784C16.6989 17.2722 16.5834 17.6222 16.5834 18C16.5834 18.3779 16.6989 18.7279 16.8993 19.0217C17.2407 19.5224 17.8268 19.8571 18.5001 19.8571C19.1735 19.8571 19.7595 19.5224 20.1009 19.0217C20.3013 18.7279 20.4168 18.3779 20.4168 18C20.4168 17.6222 20.3014 17.2722 20.101 16.9784C19.7596 16.4777 19.1735 16.1429 18.5001 16.1429Z',
  d12: 'M12.0564 3.25H11.9436H11.9436C10.1058 3.24999 8.65018 3.24998 7.51098 3.40314C6.33856 3.56077 5.38961 3.89288 4.64125 4.64125C3.89288 5.38961 3.56077 6.33856 3.40314 7.51098C3.24998 8.65018 3.24999 10.1058 3.25 11.9435V11.9436V11.9436V12.0564V12.0565C3.24999 13.8942 3.24998 15.3498 3.40314 16.489C3.56077 17.6614 3.89288 18.6104 4.64125 19.3588C5.38961 20.1071 6.33856 20.4392 7.51098 20.5969C8.65019 20.75 10.1059 20.75 11.9436 20.75C12.1571 20.75 12.2638 20.7499 12.3309 20.7134C12.3841 20.6844 12.4109 20.659 12.4427 20.6075C12.4828 20.5424 12.4898 20.4126 12.5038 20.1529C12.529 19.6876 12.6835 19.2331 12.9556 18.8464C13.0399 18.7265 13.0821 18.6665 13.096 18.6167C13.1099 18.5669 13.1053 18.5009 13.0962 18.3688C13.0877 18.2468 13.0834 18.1239 13.0834 18C13.0834 17.8763 13.0877 17.7534 13.0961 17.6316C13.1053 17.4995 13.1098 17.4334 13.096 17.3837C13.0821 17.3339 13.0399 17.2739 12.9554 17.1539C12.3837 16.3414 12.3306 15.2298 12.907 14.3473C13.5093 13.425 14.6172 13.0316 15.6276 13.2936C15.6939 13.3108 15.727 13.3194 15.7501 13.3217C15.7992 13.3266 15.8292 13.3232 15.876 13.3074C15.8979 13.3 15.9252 13.2858 15.9797 13.2574C16.0303 13.2311 16.0556 13.2179 16.0732 13.2053C16.1105 13.1785 16.1297 13.1577 16.1537 13.1186C16.165 13.1001 16.1775 13.0711 16.2025 13.0129C16.5854 12.1231 17.47 11.5 18.5001 11.5C19.1784 11.5 19.7935 11.7701 20.2439 12.2086C20.4996 12.4575 20.6274 12.582 20.6885 12.5562C20.7496 12.5304 20.7497 12.3672 20.7499 12.0407L20.75 11.9435C20.75 10.1058 20.75 8.65019 20.5969 7.51098C20.4392 6.33856 20.1071 5.38961 19.3588 4.64125C18.6104 3.89288 17.6614 3.56077 16.489 3.40314C15.3498 3.24998 13.8942 3.24999 12.0565 3.25H12.0565H12.0564ZM7.24976 7.99976C7.24976 7.58554 7.58554 7.24976 7.99976 7.24976H11.9998C12.414 7.24976 12.7498 7.58554 12.7498 7.99976C12.7498 8.41397 12.414 8.74976 11.9998 8.74976H7.99976C7.58554 8.74976 7.24976 8.41397 7.24976 7.99976Z',
  d13: 'M9.5 1C10.0523 1 10.5 1.44772 10.5 2V4C10.5 4.55228 10.0523 5 9.5 5C8.94772 5 8.5 4.55228 8.5 4V2C8.5 1.44772 8.94772 1 9.5 1ZM14.5 1C15.0523 1 15.5 1.44772 15.5 2V4C15.5 4.55228 15.0523 5 14.5 5C13.9477 5 13.5 4.55228 13.5 4V2C13.5 1.44772 13.9477 1 14.5 1ZM1 9.5C1 8.94772 1.44772 8.5 2 8.5H4C4.55228 8.5 5 8.94772 5 9.5C5 10.0523 4.55228 10.5 4 10.5H2C1.44772 10.5 1 10.0523 1 9.5ZM19 9.5C19 8.94772 19.4477 8.5 20 8.5H22C22.5523 8.5 23 8.94772 23 9.5C23 10.0523 22.5523 10.5 22 10.5H20C19.4477 10.5 19 10.0523 19 9.5ZM1 14.5C1 13.9477 1.44772 13.5 2 13.5H4C4.55228 13.5 5 13.9477 5 14.5C5 15.0523 4.55228 15.5 4 15.5H2C1.44772 15.5 1 15.0523 1 14.5ZM9.5 19C10.0523 19 10.5 19.4477 10.5 20V22C10.5 22.5523 10.0523 23 9.5 23C8.94772 23 8.5 22.5523 8.5 22V20C8.5 19.4477 8.94772 19 9.5 19Z',
  d14: 'M10.5 2C10.5 1.44772 10.0523 1 9.5 1C8.94772 1 8.5 1.44772 8.5 2V3.30982C9.09593 3.27271 9.76055 3.25861 10.5 3.25327V2ZM15.5 3.30982C14.9041 3.2727 14.2394 3.25861 13.5 3.25327V2C13.5 1.44772 13.9477 1 14.5 1C15.0523 1 15.5 1.44772 15.5 2V3.30982ZM20.7467 10.5C20.7414 9.76055 20.7273 9.09592 20.6902 8.5H22C22.5523 8.5 23 8.94772 23 9.5C23 10.0523 22.5523 10.5 22 10.5H20.7467ZM8.5 20.6902C9.09593 20.7273 9.76055 20.7414 10.5 20.7467V22C10.5 22.5523 10.0523 23 9.5 23C8.94772 23 8.5 22.5523 8.5 22V20.6902ZM3.25327 13.5C3.25861 14.2394 3.2727 14.9041 3.30982 15.5H2C1.44772 15.5 1 15.0523 1 14.5C1 13.9477 1.44772 13.5 2 13.5H3.25327ZM3.30982 8.5C3.27271 9.09593 3.25861 9.76055 3.25327 10.5H2C1.44772 10.5 1 10.0523 1 9.5C1 8.94772 1.44772 8.5 2 8.5H3.30982Z',
  d15: 'M11.9436 3.25H12.0564H12.0565C13.8942 3.24999 15.3498 3.24998 16.489 3.40314C17.6614 3.56077 18.6104 3.89288 19.3588 4.64125C20.1071 5.38961 20.4392 6.33856 20.5969 7.51098C20.75 8.65019 20.75 10.1058 20.75 11.9435L20.7499 12.0407C20.7497 12.3672 20.7496 12.5304 20.6885 12.5562C20.6274 12.582 20.4996 12.4575 20.2439 12.2086C19.7935 11.7701 19.1784 11.5 18.5001 11.5C17.47 11.5 16.5854 12.1231 16.2025 13.0129C16.1775 13.0711 16.165 13.1001 16.1537 13.1186C16.1297 13.1577 16.1105 13.1785 16.0732 13.2053C16.0556 13.2179 16.0303 13.2311 15.9797 13.2574C15.9252 13.2858 15.8979 13.3 15.876 13.3074C15.8292 13.3232 15.7992 13.3266 15.7501 13.3217C15.727 13.3194 15.6939 13.3108 15.6276 13.2936C14.6172 13.0316 13.5093 13.425 12.907 14.3473C12.3306 15.2298 12.3837 16.3414 12.9554 17.1539C13.0399 17.2739 13.0821 17.3339 13.096 17.3837C13.1098 17.4334 13.1053 17.4995 13.0961 17.6316C13.0877 17.7534 13.0834 17.8763 13.0834 18C13.0834 18.1239 13.0877 18.2468 13.0962 18.3688C13.1053 18.5009 13.1099 18.5669 13.096 18.6167C13.0821 18.6665 13.0399 18.7265 12.9556 18.8464C12.6835 19.2331 12.529 19.6876 12.5038 20.1529C12.4898 20.4126 12.4828 20.5424 12.4427 20.6075C12.4109 20.659 12.3841 20.6844 12.3309 20.7134C12.2638 20.7499 12.1571 20.75 11.9436 20.75C10.1059 20.75 8.65019 20.75 7.51098 20.5969C6.33856 20.4392 5.38961 20.1071 4.64125 19.3588C3.89288 18.6104 3.56077 17.6614 3.40314 16.489C3.24998 15.3498 3.24999 13.8942 3.25 12.0565V12.0564V11.9436V11.9436C3.24999 10.1058 3.24998 8.65018 3.40314 7.51098C3.56077 6.33856 3.89288 5.38961 4.64125 4.64125C5.38961 3.89288 6.33856 3.56077 7.51098 3.40314C8.65018 3.24998 10.1058 3.24999 11.9436 3.25H11.9436Z',
  d16: 'M8 7.25C7.58579 7.25 7.25 7.58579 7.25 8C7.25 8.41421 7.58579 8.75 8 8.75H12C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25H8Z',
  d17: 'M9.49219 2V4.5M14.4883 2V4.5',
  d18: 'M9.49805 19.5V22',
  d19: 'M4.49611 9.5H1.99805M4.49611 14.5H1.99805',
  d20: 'M17.4858 20.2143V22M17.4858 20.2143C16.3299 20.2143 15.3116 19.6461 14.7142 18.7833M17.4858 20.2143C18.6417 20.2143 19.66 19.6461 20.2573 18.7833M14.7142 18.7833L12.9893 20M14.7142 18.7833C14.361 18.273 14.1551 17.6597 14.1551 17C14.1551 16.3403 14.3609 15.7271 14.7141 15.2169M20.2573 18.7833L21.9823 20M20.2573 18.7833C20.6105 18.273 20.8165 17.6597 20.8165 17C20.8165 16.3403 20.6106 15.7271 20.2574 15.2169M17.4858 13.7857C18.6418 13.7857 19.6602 14.354 20.2574 15.2169M17.4858 13.7857C16.3298 13.7857 15.3114 14.354 14.7141 15.2169M17.4858 13.7857V12M20.2574 15.2169L21.9823 14M14.7141 15.2169L12.9893 14',
  d21: 'M11.9901 8H7.99316',
  d22: 'M11.058 19.5H4.59602C4.54083 19.5 4.49609 19.4552 4.49609 19.4V4.6C4.49609 4.54477 4.54083 4.5 4.59602 4.5L19.3919 4.50027C19.4471 4.50028 19.4919 4.54505 19.4919 4.60027V9.48529L22.0027 9.48529',
  d23: 'M8.5 4.5V2H10.5V4.5H8.5ZM13.5 4.5V2H15.5V4.5H13.5ZM2 8.5H4.5V10.5H2V8.5ZM19.5 8.5H22V10.5H19.5V8.5ZM2 13.5H4.5V15.5H2V13.5ZM8.5 22V19.5H10.5V22H8.5Z',
  d24: 'M16.3143 13.3537C15.6336 13.5126 15.017 13.8411 14.5151 14.294L13.5783 13.6235L12.5 15.1765L13.4482 15.8551C13.2848 16.2892 13.1951 16.7594 13.1951 17.25C13.1951 17.7407 13.2848 18.2109 13.4483 18.645L12.5001 19.3235L13.5782 20.8765L14.5152 20.2061C15.0171 20.6589 15.6336 20.9874 16.3143 21.1463V22H18.1857V21.1463C18.8664 20.9874 19.4829 20.6589 19.9848 20.2061L20.9218 20.8765L21.9999 19.3235L21.0517 18.645C21.2152 18.2109 21.3049 17.7407 21.3049 17.25C21.3049 16.7594 21.2152 16.2892 21.0518 15.8551L22 15.1765L20.9217 13.6235L19.9849 14.294C19.483 13.8411 18.8664 13.5126 18.1857 13.3537V12.5H16.3143V13.3537ZM17.25 15.1464C16.4781 15.1464 15.8103 15.5303 15.4236 16.097C15.1966 16.4298 15.0666 16.825 15.0666 17.25C15.0666 17.6751 15.1966 18.0703 15.4237 18.4031C15.8104 18.9697 16.4782 19.3536 17.25 19.3536C18.0218 19.3536 18.6896 18.9697 19.0763 18.4031C19.3034 18.0703 19.4334 17.6751 19.4334 17.25C19.4334 16.825 19.3034 16.4298 19.0764 16.097C18.6897 15.5303 18.0219 15.1464 17.25 15.1464Z',
  d25: 'M3.75 4.5C3.75 4.08579 4.08579 3.75 4.5 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5V12.5665L19.9909 12.7519C19.8121 12.6449 19.6265 12.548 19.4349 12.4622V11.25H15.0634V12.4622C14.8718 12.548 14.6862 12.6449 14.5073 12.7519L13.2739 11.8691L10.7695 15.4757L12.0187 16.3698C11.9698 16.6563 11.9443 16.9505 11.9443 17.25C11.9443 17.5495 11.9698 17.8437 12.0187 18.1303L10.7696 19.024L11.6207 20.25H4.5C4.08579 20.25 3.75 19.9142 3.75 19.5V4.5ZM12 7H8V9H12V7Z',
};

export const IconCpuSettingsStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cpu-settings-stroke-rounded IconCpuSettingsStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCpuSettingsDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cpu-settings-duotone-rounded IconCpuSettingsDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCpuSettingsTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cpu-settings-twotone-rounded IconCpuSettingsTwotoneRounded"
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCpuSettingsSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cpu-settings-solid-rounded IconCpuSettingsSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCpuSettingsBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cpu-settings-bulk-rounded IconCpuSettingsBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
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

export const IconCpuSettingsStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cpu-settings-stroke-sharp IconCpuSettingsStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCpuSettingsSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cpu-settings-solid-sharp IconCpuSettingsSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCpuSettings: TheIconSelfPack = {
  name: 'CpuSettings',
  StrokeRounded: IconCpuSettingsStrokeRounded,
  DuotoneRounded: IconCpuSettingsDuotoneRounded,
  TwotoneRounded: IconCpuSettingsTwotoneRounded,
  SolidRounded: IconCpuSettingsSolidRounded,
  BulkRounded: IconCpuSettingsBulkRounded,
  StrokeSharp: IconCpuSettingsStrokeSharp,
  SolidSharp: IconCpuSettingsSolidSharp,
};