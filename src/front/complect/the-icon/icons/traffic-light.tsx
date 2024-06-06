import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.5 6.5C13.5 7.32843 12.8284 8 12 8C11.1716 8 10.5 7.32843 10.5 6.5C10.5 5.67157 11.1716 5 12 5C12.8284 5 13.5 5.67157 13.5 6.5Z',
  d2: 'M13.5 12.5C13.5 13.3284 12.8284 14 12 14C11.1716 14 10.5 13.3284 10.5 12.5C10.5 11.6716 11.1716 11 12 11C12.8284 11 13.5 11.6716 13.5 12.5Z',
  d3: 'M12 17C10.1308 17 9.19615 17 8.5 16.5981C8.04394 16.3348 7.66523 15.9561 7.40192 15.5C7 14.8038 7 13.8692 7 12L7 7C7 5.13077 7 4.19615 7.40192 3.5C7.66523 3.04394 8.04394 2.66523 8.5 2.40192C9.19615 2 10.1308 2 12 2C13.8692 2 14.8038 2 15.5 2.40192C15.9561 2.66523 16.3348 3.04394 16.5981 3.5C17 4.19615 17 5.13077 17 7V12C17 13.8692 17 14.8038 16.5981 15.5C16.3348 15.9561 15.9561 16.3348 15.5 16.5981C14.8038 17 13.8692 17 12 17Z',
  d4: 'M12 17V22',
  d5: 'M7 8L5.95617 7.12348C4.64147 6.0195 3.98413 5.46751 4.00029 4.96618C4.00686 4.76236 4.07264 4.56553 4.18881 4.40207C4.47455 4 5.31637 4 7 4',
  d6: 'M17 8L18.0438 7.12348C19.3585 6.0195 20.0159 5.46751 19.9997 4.96618C19.9931 4.76236 19.9274 4.56553 19.8112 4.40207C19.5254 4 18.6836 4 17 4',
  d7: 'M17 15L18.0438 14.1235C19.3585 13.0195 20.0159 12.4675 19.9997 11.9662C19.9931 11.7624 19.9274 11.5655 19.8112 11.4021C19.5254 11 18.6836 11 17 11',
  d8: 'M7 15L5.95617 14.1235C4.64147 13.0195 3.98413 12.4675 4.00029 11.9662C4.00686 11.7624 4.07264 11.5655 4.18881 11.4021C4.47455 11 5.31637 11 7 11',
  d9: 'M12 17C10.1308 17 9.19615 17 8.5 16.5981C8.04394 16.3348 7.66523 15.9561 7.40192 15.5C7 14.8038 7 13.8692 7 12V7C7 5.13077 7 4.19615 7.40192 3.5C7.66523 3.04394 8.04394 2.66523 8.5 2.40192C9.19615 2 10.1308 2 12 2C13.8692 2 14.8038 2 15.5 2.40192C15.9561 2.66523 16.3348 3.04394 16.5981 3.5C17 4.19615 17 5.13077 17 7V12C17 13.8692 17 14.8038 16.5981 15.5C16.3348 15.9561 15.9561 16.3348 15.5 16.5981C14.8038 17 13.8692 17 12 17ZM13.5 6.5C13.5 7.32843 12.8284 8 12 8C11.1716 8 10.5 7.32843 10.5 6.5C10.5 5.67157 11.1716 5 12 5C12.8284 5 13.5 5.67157 13.5 6.5ZM12 14C12.8284 14 13.5 13.3284 13.5 12.5C13.5 11.6716 12.8284 11 12 11C11.1716 11 10.5 11.6716 10.5 12.5C10.5 13.3284 11.1716 14 12 14Z',
  d10: 'M12 15.875C12.5523 15.875 13 16.3227 13 16.875V21.875C13 22.4273 12.5523 22.875 12 22.875C11.4477 22.875 11 22.4273 11 21.875V16.875C11 16.3227 11.4477 15.875 12 15.875Z',
  d11: 'M12.0358 1.125C12.94 1.12499 13.6693 1.12498 14.2576 1.1783C14.8639 1.23326 15.3938 1.34955 15.875 1.62741C16.4451 1.95654 16.9185 2.42993 17.2476 3C17.5254 3.48125 17.6417 4.01105 17.6967 4.6174C17.75 5.2057 17.75 5.93498 17.75 6.83923V11.9108C17.75 12.815 17.75 13.5443 17.6967 14.1326C17.6417 14.7389 17.5254 15.2688 17.2476 15.75C16.9185 16.3201 16.4451 16.7935 15.875 17.1226C15.3938 17.4004 14.864 17.5167 14.2576 17.5717C13.6693 17.625 12.9401 17.625 12.0359 17.625H12.0358H11.9642H11.9641C11.0599 17.625 10.3307 17.625 9.7424 17.5717C9.13605 17.5167 8.60625 17.4004 8.125 17.1226C7.55493 16.7935 7.08154 16.3201 6.75241 15.75C6.47456 15.2688 6.35826 14.7389 6.3033 14.1326C6.24998 13.5443 6.24999 12.815 6.25 11.9108V11.9108V6.83921V6.8392C6.24999 5.93497 6.24998 5.20569 6.3033 4.6174C6.35826 4.01105 6.47455 3.48125 6.75241 3C7.08154 2.42993 7.55493 1.95654 8.125 1.62741C8.60625 1.34956 9.13605 1.23326 9.7424 1.1783C10.3307 1.12498 11.06 1.12499 11.9642 1.125H11.9642H12.0358H12.0358ZM13.5 6.375C13.5 7.20343 12.8284 7.875 12 7.875C11.1716 7.875 10.5 7.20343 10.5 6.375C10.5 5.54657 11.1716 4.875 12 4.875C12.8284 4.875 13.5 5.54657 13.5 6.375ZM12 13.875C12.8284 13.875 13.5 13.2034 13.5 12.375C13.5 11.5466 12.8284 10.875 12 10.875C11.1716 10.875 10.5 11.5466 10.5 12.375C10.5 13.2034 11.1716 13.875 12 13.875Z',
  d12: 'M6.95262 3.125H7.00001C7.41422 3.125 7.75001 3.46079 7.75001 3.875C7.75001 4.28922 7.41422 4.625 7.00001 4.625C6.13907 4.625 5.55784 4.62612 5.15226 4.67076C4.92052 4.69627 4.81705 4.73042 4.78002 4.74506C4.7661 4.77272 4.7563 4.8041 4.75208 4.83776C4.76577 4.86546 4.82074 4.96763 5.01898 5.17316C5.31153 5.47646 5.7672 5.86043 6.43848 6.42412L7.48231 7.30064C7.79952 7.56701 7.84073 8.04009 7.57437 8.3573C7.308 8.67451 6.83492 8.71573 6.51771 8.44936L5.43901 7.54356L5.43901 7.54355C4.8113 7.01647 4.29358 6.58175 3.93935 6.21451C3.60731 5.87026 3.23172 5.40524 3.25069 4.81701C3.26193 4.46846 3.37437 4.12841 3.57747 3.84261C3.92756 3.34999 4.52402 3.23085 4.98815 3.17976C5.48603 3.12496 6.15111 3.12498 6.95259 3.125H6.95262Z',
  d13: 'M6.95262 10.125L7.00001 10.125C7.41422 10.125 7.75001 10.4608 7.75001 10.875C7.75001 11.2892 7.41422 11.625 7.00001 11.625C6.13907 11.625 5.55784 11.6261 5.15226 11.6708C4.92052 11.6963 4.81705 11.7304 4.78002 11.7451C4.7661 11.7727 4.7563 11.8041 4.75208 11.8378C4.76577 11.8655 4.82074 11.9676 5.01898 12.1732C5.31153 12.4765 5.7672 12.8604 6.43848 13.4241L7.48231 14.3006C7.79952 14.567 7.84073 15.0401 7.57437 15.3573C7.308 15.6745 6.83492 15.7157 6.51771 15.4494L5.43904 14.5436C4.81131 14.0165 4.29358 13.5818 3.93935 13.2145C3.60731 12.8703 3.23172 12.4052 3.25069 11.817C3.26193 11.4685 3.37437 11.1284 3.57747 10.8426C3.92756 10.35 4.52402 10.2308 4.98815 10.1798C5.48604 10.125 6.15112 10.125 6.95262 10.125Z',
  d14: 'M18.8478 4.67076C18.4422 4.62612 17.861 4.625 17 4.625C16.5858 4.625 16.25 4.28922 16.25 3.875C16.25 3.46079 16.5858 3.125 17 3.125H17.0474H17.0474C17.8489 3.12498 18.514 3.12496 19.0119 3.17976C19.476 3.23085 20.0725 3.34999 20.4226 3.84261C20.6257 4.12841 20.7381 4.46846 20.7493 4.81701C20.7683 5.40524 20.3927 5.87026 20.0607 6.21451C19.7065 6.58175 19.1887 7.01647 18.561 7.54355L18.561 7.54357L17.4823 8.44936C17.1651 8.71573 16.692 8.67451 16.4257 8.3573C16.1593 8.04009 16.2005 7.56701 16.5177 7.30064L17.5615 6.42412C18.2328 5.86043 18.6885 5.47646 18.981 5.17316C19.1793 4.96763 19.2343 4.86546 19.2479 4.83776C19.2437 4.8041 19.2339 4.77272 19.22 4.74506C19.183 4.73042 19.0795 4.69627 18.8478 4.67076Z',
  d15: 'M18.8478 11.6708C18.4422 11.6261 17.861 11.625 17 11.625C16.5858 11.625 16.25 11.2892 16.25 10.875C16.25 10.4608 16.5858 10.125 17 10.125L17.0474 10.125C17.8489 10.125 18.514 10.125 19.0119 10.1798C19.476 10.2308 20.0725 10.35 20.4226 10.8426C20.6257 11.1284 20.7381 11.4685 20.7493 11.817C20.7683 12.4052 20.3927 12.8703 20.0607 13.2145C19.7064 13.5818 19.1887 14.0165 18.561 14.5436L18.561 14.5436L17.4823 15.4494C17.1651 15.7157 16.692 15.6745 16.4257 15.3573C16.1593 15.0401 16.2005 14.567 16.5177 14.3006L17.5615 13.4241C18.2328 12.8604 18.6885 12.4765 18.981 12.1732C19.1793 11.9676 19.2343 11.8655 19.2479 11.8378C19.2437 11.8041 19.2339 11.7727 19.22 11.7451C19.183 11.7304 19.0795 11.6963 18.8478 11.6708Z',
  d16: 'M12.0358 1.125C12.94 1.12499 13.6693 1.12498 14.2576 1.1783C14.8639 1.23326 15.3938 1.34955 15.875 1.62741C16.4451 1.95654 16.9185 2.42993 17.2476 3C17.5254 3.48125 17.6417 4.01105 17.6967 4.6174C17.75 5.2057 17.75 5.93498 17.75 6.83923V11.9108C17.75 12.815 17.75 13.5443 17.6967 14.1326C17.6417 14.7389 17.5254 15.2688 17.2476 15.75C16.9185 16.3201 16.4451 16.7935 15.875 17.1226C15.3938 17.4004 14.864 17.5167 14.2576 17.5717C13.6693 17.625 12.9401 17.625 12.0359 17.625H12.0358H11.9642H11.9641C11.0599 17.625 10.3307 17.625 9.7424 17.5717C9.13605 17.5167 8.60625 17.4004 8.125 17.1226C7.55493 16.7935 7.08154 16.3201 6.75241 15.75C6.47456 15.2688 6.35826 14.7389 6.3033 14.1326C6.24998 13.5443 6.24999 12.815 6.25 11.9108V11.9108V6.83921V6.8392C6.24999 5.93497 6.24998 5.20569 6.3033 4.6174C6.35826 4.01105 6.47455 3.48125 6.75241 3C7.08154 2.42993 7.55493 1.95654 8.125 1.62741C8.60625 1.34956 9.13605 1.23326 9.7424 1.1783C10.3307 1.12498 11.06 1.12499 11.9642 1.125H11.9642H12.0358H12.0358Z',
  d17: 'M17.6967 4.61732C17.6465 4.06305 17.545 3.57273 17.3157 3.125C17.9981 3.12561 18.5706 3.13112 19.0119 3.17969C19.476 3.23078 20.0725 3.34992 20.4226 3.84254C20.6257 4.12833 20.7381 4.46838 20.7493 4.81693C20.7683 5.40517 20.3927 5.87018 20.0607 6.21444C19.7065 6.58168 19.1887 7.0164 18.561 7.54348L18.561 7.54349L17.75 8.22451V6.83915C17.75 6.63978 17.75 6.44891 17.7494 6.26618C18.319 5.78719 18.7167 5.4472 18.981 5.17309C19.1793 4.96756 19.2343 4.86538 19.2479 4.83769C19.2437 4.80403 19.2339 4.77265 19.22 4.74498C19.183 4.73034 19.0795 4.69619 18.8478 4.67069C18.563 4.63934 18.1916 4.62945 17.6975 4.62635C17.6972 4.62333 17.697 4.62033 17.6967 4.61732ZM17.75 11.6267V10.1265C18.2437 10.1301 18.6677 10.1418 19.0119 10.1797C19.476 10.2308 20.0725 10.3499 20.4226 10.8425C20.6257 11.1283 20.7381 11.4684 20.7493 11.8169C20.7683 12.4052 20.3927 12.8702 20.0607 13.2144C19.7064 13.5817 19.1887 14.0164 18.561 14.5435L18.561 14.5435L17.4823 15.4493C17.4439 15.4815 17.4032 15.5093 17.3609 15.5326C17.5586 15.1099 17.6499 14.649 17.6967 14.1325C17.7201 13.8743 17.7332 13.589 17.7406 13.2736C18.3149 12.7907 18.7153 12.4486 18.981 12.1731C19.1793 11.9676 19.2343 11.8654 19.2479 11.8377C19.2437 11.804 19.2339 11.7727 19.22 11.745C19.183 11.7303 19.0795 11.6962 18.8478 11.6707C18.5731 11.6405 18.218 11.6302 17.75 11.6267ZM11 17.6219C11.297 17.6249 11.6177 17.6249 11.9641 17.6249H11.9642H12.0358H12.0359C12.3823 17.6249 12.703 17.6249 13 17.6219V21.8749C13 22.4272 12.5523 22.8749 12 22.8749C11.4477 22.8749 11 22.4272 11 21.8749V17.6219ZM6.25941 13.2736C6.26677 13.589 6.2799 13.8743 6.3033 14.1325C6.35011 14.649 6.44142 15.1099 6.63914 15.5326C6.59681 15.5093 6.55612 15.4815 6.51771 15.4493L5.43904 14.5435C4.81131 14.0164 4.29358 13.5817 3.93935 13.2144C3.60731 12.8702 3.23172 12.4052 3.25069 11.8169C3.26193 11.4684 3.37437 11.1283 3.57747 10.8425C3.92756 10.3499 4.52402 10.2308 4.98815 10.1797C5.33228 10.1418 5.75629 10.1301 6.25 10.1265V11.6267C5.78202 11.6302 5.42688 11.6405 5.15226 11.6707C4.92052 11.6962 4.81705 11.7303 4.78002 11.745C4.7661 11.7727 4.7563 11.804 4.75208 11.8377C4.76577 11.8654 4.82074 11.9676 5.01898 12.1731C5.28473 12.4486 5.68509 12.7907 6.25941 13.2736ZM6.25 8.22448L5.43901 7.54348L5.43901 7.54348L5.439 7.54348L5.43899 7.54347L5.43897 7.54345L5.43896 7.54344L5.43896 7.54344C4.81127 7.01637 4.29357 6.58167 3.93935 6.21444C3.60731 5.87018 3.23172 5.40517 3.25069 4.81693C3.26193 4.46838 3.37437 4.12833 3.57747 3.84254C3.92756 3.34992 4.52402 3.23078 4.98815 3.17969C5.42938 3.13113 6.00192 3.12561 6.68433 3.125C6.45503 3.57273 6.35354 4.06305 6.3033 4.61732C6.30303 4.62033 6.30276 4.62333 6.30249 4.62635C5.80845 4.62945 5.43706 4.63934 5.15226 4.67069C4.92052 4.69619 4.81705 4.73034 4.78002 4.74498C4.7661 4.77265 4.7563 4.80403 4.75208 4.83769C4.76577 4.86538 4.82074 4.96756 5.01898 5.17309C5.28337 5.44719 5.68098 5.78718 6.25057 6.26616C6.25 6.44889 6.25 6.63975 6.25 6.83913V6.83913V6.83913V8.22448Z',
  d18: 'M13.5 6.375C13.5 7.20343 12.8284 7.875 12 7.875C11.1716 7.875 10.5 7.20343 10.5 6.375C10.5 5.54657 11.1716 4.875 12 4.875C12.8284 4.875 13.5 5.54657 13.5 6.375Z',
  d19: 'M13.5 12.375C13.5 13.2034 12.8284 13.875 12 13.875C11.1716 13.875 10.5 13.2034 10.5 12.375C10.5 11.5466 11.1716 10.875 12 10.875C12.8284 10.875 13.5 11.5466 13.5 12.375Z',
  d20: 'M17 17V2H7V17H17Z',
  d21: 'M17 4L20.0014 4.00003V6L17 8',
  d22: 'M17 11L20.0014 11V13L17 15',
  d23: 'M6.99851 4L3.99707 4.00003V6L6.99851 8',
  d24: 'M7.00144 11L4 11V13L7.00144 15',
  d25: 'M6.25391 2.5C6.25391 2.08579 6.58969 1.75 7.00391 1.75H17.0039C17.4181 1.75 17.7539 2.08579 17.7539 2.5V17.5C17.7539 17.9142 17.4181 18.25 17.0039 18.25H7.00391C6.58969 18.25 6.25391 17.9142 6.25391 17.5V2.5ZM9.75391 7C9.75391 5.75736 10.7613 4.75 12.0039 4.75C13.2465 4.75 14.2539 5.75736 14.2539 7C14.2539 8.24264 13.2465 9.25 12.0039 9.25C10.7613 9.25 9.75391 8.24264 9.75391 7ZM12.0039 10.75C10.7613 10.75 9.75391 11.7574 9.75391 13C9.75391 14.2426 10.7613 15.25 12.0039 15.25C13.2465 15.25 14.2539 14.2426 14.2539 13C14.2539 11.7574 13.2465 10.75 12.0039 10.75Z',
  d26: 'M11.002 22.25V17.25H13.002V22.25H11.002Z',
  d27: 'M19.2523 5.25002L17.0008 5.25L17.0009 3.75L20.0023 3.75003C20.4165 3.75003 20.7523 4.08582 20.7523 4.50003V6.5C20.7523 6.75082 20.6269 6.98504 20.4182 7.12413L17.4167 9.12413L16.585 7.87587L19.2523 6.09851V5.25002Z',
  d28: 'M19.2523 12.25L17.0008 12.25L17.0009 10.75L20.0023 10.75C20.4165 10.75 20.7523 11.0858 20.7523 11.5V13.5C20.7523 13.7508 20.6269 13.985 20.4182 14.1241L17.4167 16.1241L16.585 14.8759L19.2523 13.0985V12.25Z',
  d29: 'M3.99804 3.75003L6.99948 3.75L6.9995 5.25L4.74805 5.25002V6.09851L7.41537 7.87587L6.5836 9.12413L3.58216 7.12413C3.37343 6.98504 3.24805 6.75082 3.24805 6.5V4.50003C3.24805 4.08582 3.58383 3.75003 3.99804 3.75003Z',
  d30: 'M4.00097 10.75L7.00241 10.75L7.00242 12.25L4.75098 12.25V13.0985L7.4183 14.8759L6.58653 16.1241L3.58509 14.1241C3.37636 13.985 3.25098 13.7508 3.25098 13.5V11.5C3.25098 11.0858 3.58676 10.75 4.00097 10.75Z',
};

export const IconTrafficLightStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="traffic-light-stroke-rounded IconTrafficLightStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconTrafficLightDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="traffic-light-duotone-rounded IconTrafficLightDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconTrafficLightTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="traffic-light-twotone-rounded IconTrafficLightTwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTrafficLightSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="traffic-light-solid-rounded IconTrafficLightSolidRounded"
    >
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
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTrafficLightBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="traffic-light-bulk-rounded IconTrafficLightBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTrafficLightStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="traffic-light-stroke-sharp IconTrafficLightStrokeSharp"
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
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTrafficLightSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="traffic-light-solid-sharp IconTrafficLightSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTrafficLight: TheIconSelfPack = {
  name: 'TrafficLight',
  StrokeRounded: IconTrafficLightStrokeRounded,
  DuotoneRounded: IconTrafficLightDuotoneRounded,
  TwotoneRounded: IconTrafficLightTwotoneRounded,
  SolidRounded: IconTrafficLightSolidRounded,
  BulkRounded: IconTrafficLightBulkRounded,
  StrokeSharp: IconTrafficLightStrokeSharp,
  SolidSharp: IconTrafficLightSolidSharp,
};