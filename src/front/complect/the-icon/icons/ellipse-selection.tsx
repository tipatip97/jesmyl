import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.9999 4.25195C16.8111 4.97551 19.0243 7.1887 19.7479 9.99992M9.99992 4.25195C7.1887 4.97551 4.97551 7.1887 4.25195 9.99992M4.25195 13.9999C4.97551 16.8111 7.1887 19.0243 9.99992 19.7479M13.9999 19.7479C16.8111 19.0243 19.0243 16.8111 19.7479 13.9999',
  d2: 'M10.2929 5.70711C10.5858 6 11.0572 6 12 6C12.9428 6 13.4142 6 13.7071 5.70711M10.2929 5.70711C10 5.41421 10 4.94281 10 4C10 3.05719 10 2.58579 10.2929 2.29289M10.2929 5.70711C10.2929 5.70711 10.2929 5.70711 10.2929 5.70711ZM13.7071 5.70711C14 5.41421 14 4.94281 14 4C14 3.05719 14 2.58579 13.7071 2.29289M13.7071 5.70711C13.7071 5.70711 13.7071 5.70711 13.7071 5.70711ZM13.7071 2.29289C13.4142 2 12.9428 2 12 2C11.0572 2 10.5858 2 10.2929 2.29289M13.7071 2.29289C13.7071 2.29289 13.7071 2.29289 13.7071 2.29289ZM10.2929 2.29289C10.2929 2.29289 10.2929 2.29289 10.2929 2.29289Z',
  d3: 'M10.2929 21.7071C10.5858 22 11.0572 22 12 22C12.9428 22 13.4142 22 13.7071 21.7071M10.2929 21.7071C10 21.4142 10 20.9428 10 20C10 19.0572 10 18.5858 10.2929 18.2929M10.2929 21.7071C10.2929 21.7071 10.2929 21.7071 10.2929 21.7071ZM13.7071 21.7071C14 21.4142 14 20.9428 14 20C14 19.0572 14 18.5858 13.7071 18.2929M13.7071 21.7071C13.7071 21.7071 13.7071 21.7071 13.7071 21.7071ZM13.7071 18.2929C13.4142 18 12.9428 18 12 18C11.0572 18 10.5858 18 10.2929 18.2929M13.7071 18.2929C13.7071 18.2929 13.7071 18.2929 13.7071 18.2929ZM10.2929 18.2929C10.2929 18.2929 10.2929 18.2929 10.2929 18.2929Z',
  d4: 'M18.2929 10.2929C18 10.5858 18 11.0572 18 12C18 12.9428 18 13.4142 18.2929 13.7071M18.2929 10.2929C18.5858 10 19.0572 10 20 10C20.9428 10 21.4142 10 21.7071 10.2929M18.2929 10.2929C18.2929 10.2929 18.2929 10.2929 18.2929 10.2929ZM18.2929 13.7071C18.5858 14 19.0572 14 20 14C20.9428 14 21.4142 14 21.7071 13.7071M18.2929 13.7071C18.2929 13.7071 18.2929 13.7071 18.2929 13.7071ZM21.7071 13.7071C22 13.4142 22 12.9428 22 12C22 11.0572 22 10.5858 21.7071 10.2929M21.7071 13.7071C21.7071 13.7071 21.7071 13.7071 21.7071 13.7071ZM21.7071 10.2929C21.7071 10.2929 21.7071 10.2929 21.7071 10.2929Z',
  d5: 'M2.29289 10.2929C2 10.5858 2 11.0572 2 12C2 12.9428 2 13.4142 2.29289 13.7071M2.29289 10.2929C2.58579 10 3.05719 10 4 10C4.94281 10 5.41421 10 5.70711 10.2929M2.29289 10.2929C2.29289 10.2929 2.29289 10.2929 2.29289 10.2929ZM2.29289 13.7071C2.58579 14 3.05719 14 4 14C4.94281 14 5.41421 14 5.70711 13.7071M2.29289 13.7071C2.29289 13.7071 2.29289 13.7071 2.29289 13.7071ZM5.70711 13.7071C6 13.4142 6 12.9428 6 12C6 11.0572 6 10.5858 5.70711 10.2929M5.70711 13.7071C5.70711 13.7071 5.70711 13.7071 5.70711 13.7071ZM5.70711 10.2929C5.70711 10.2929 5.70711 10.2929 5.70711 10.2929Z',
  d6: 'M10.0019 4.25C7.19066 4.97356 4.97746 7.18675 4.25391 9.99796L6 10.5V13.5L4.25391 13.998C4.97746 16.8092 7.19066 19.0224 10.0019 19.7459L10.5 18H13.5L14.0019 19.7459C16.8131 19.0224 19.0263 16.8092 19.7498 13.998L18 13.5V10.5L19.7498 9.99796C19.0263 7.18675 16.8131 4.97356 14.0019 4.25L13.5 6H10.5L10.0019 4.25Z',
  d7: 'M4 10C4.94281 10 5.41421 10 5.70711 10.2929C6 10.5858 6 11.0572 6 12C6 12.9428 6 13.4142 5.70711 13.7071C5.41421 14 4.94281 14 4 14C3.05719 14 2.58579 14 2.29289 13.7071C2 13.4142 2 12.9428 2 12C2 11.0572 2 10.5858 2.29289 10.2929C2.58579 10 3.05719 10 4 10Z',
  d8: 'M10.9686 4.00098C11.1063 4.53584 10.7843 5.08102 10.2494 5.21868C7.79104 5.85142 5.85337 7.78909 5.22063 10.2475C5.08297 10.7823 4.53779 11.1043 4.00294 10.9666C3.46808 10.829 3.1461 10.2838 3.28376 9.74895C4.09813 6.58489 6.58685 4.09618 9.7509 3.2818C10.2858 3.14414 10.8309 3.46613 10.9686 4.00098ZM13.0317 4.00098C13.1694 3.46613 13.7146 3.14414 14.2494 3.2818C17.4135 4.09618 19.9022 6.58489 20.7166 9.74895C20.8542 10.2838 20.5322 10.829 19.9974 10.9666C19.4625 11.1043 18.9173 10.7823 18.7797 10.2475C18.1469 7.78909 16.2093 5.85142 13.7509 5.21868C13.216 5.08102 12.8941 4.53584 13.0317 4.00098ZM4.00294 13.0298C4.53779 12.8921 5.08297 13.2141 5.22063 13.7489C5.85337 16.2073 7.79104 18.145 10.2494 18.7777C10.7843 18.9154 11.1063 19.4606 10.9686 19.9954C10.8309 20.5303 10.2858 20.8523 9.7509 20.7146C6.58685 19.9002 4.09813 17.4115 3.28376 14.2475C3.1461 13.7126 3.46808 13.1674 4.00294 13.0298ZM19.9974 13.0298C20.5322 13.1674 20.8542 13.7126 20.7166 14.2475C19.9022 17.4115 17.4135 19.9002 14.2494 20.7146C13.7146 20.8523 13.1694 20.5303 13.0317 19.9954C12.8941 19.4606 13.216 18.9154 13.7509 18.7777C16.2093 18.145 18.1469 16.2073 18.7797 13.7489C18.9173 13.2141 19.4625 12.8921 19.9974 13.0298Z',
  d9: 'M11.9553 1.25L12 1.25001L12.0448 1.25C12.4776 1.24995 12.8744 1.24991 13.1972 1.29331C13.5527 1.3411 13.9284 1.45355 14.2374 1.76257C14.5465 2.07159 14.6589 2.44732 14.7067 2.8028C14.7501 3.12561 14.7501 3.52244 14.75 3.95525V3.95526L14.75 4.00001L14.75 4.04475V4.04476C14.7501 4.47758 14.7501 4.8744 14.7067 5.19721C14.6589 5.55269 14.5465 5.92842 14.2374 6.23744C13.9284 6.54647 13.5527 6.65891 13.1972 6.70671C12.8744 6.75011 12.4776 6.75006 12.0448 6.75001H12.0447L12 6.75001L11.9553 6.75001H11.9552C11.5224 6.75006 11.1256 6.75011 10.8028 6.70671C10.4473 6.65891 10.0716 6.54647 9.76257 6.23744C9.45355 5.92842 9.3411 5.55269 9.29331 5.19721C9.24991 4.8744 9.24995 4.47757 9.25 4.04475L9.25001 4.00001L9.25 3.95526C9.24995 3.52244 9.24991 3.12561 9.29331 2.8028C9.3411 2.44732 9.45355 2.07159 9.76257 1.76257C10.0716 1.45355 10.4473 1.3411 10.8028 1.29331C11.1256 1.24991 11.5224 1.24995 11.9553 1.25Z',
  d10: 'M11.9553 17.25L12 17.25L12.0448 17.25C12.4776 17.25 12.8744 17.2499 13.1972 17.2933C13.5527 17.3411 13.9284 17.4535 14.2374 17.7626C14.5465 18.0716 14.6589 18.4473 14.7067 18.8028C14.7501 19.1256 14.7501 19.5224 14.75 19.9553V19.9553L14.75 20L14.75 20.0448V20.0448C14.7501 20.4776 14.7501 20.8744 14.7067 21.1972C14.6589 21.5527 14.5465 21.9284 14.2374 22.2374C13.9284 22.5465 13.5527 22.6589 13.1972 22.7067C12.8744 22.7501 12.4776 22.7501 12.0448 22.75H12.0447L12 22.75L11.9553 22.75H11.9552C11.5224 22.7501 11.1256 22.7501 10.8028 22.7067C10.4473 22.6589 10.0716 22.5465 9.76257 22.2374C9.45355 21.9284 9.3411 21.5527 9.29331 21.1972C9.24991 20.8744 9.24995 20.4776 9.25 20.0448L9.25001 20L9.25 19.9553C9.24995 19.5224 9.24991 19.1256 9.29331 18.8028C9.3411 18.4473 9.45355 18.0716 9.76257 17.7626C10.0716 17.4535 10.4473 17.3411 10.8028 17.2933C11.1256 17.2499 11.5224 17.25 11.9553 17.25Z',
  d11: 'M19.9553 9.25L20 9.25001L20.0448 9.25C20.4776 9.24995 20.8744 9.24991 21.1972 9.29331C21.5527 9.3411 21.9284 9.45355 22.2374 9.76257C22.5465 10.0716 22.6589 10.4473 22.7067 10.8028C22.7501 11.1256 22.7501 11.5224 22.75 11.9553V11.9553L22.75 12L22.75 12.0448V12.0448C22.7501 12.4776 22.7501 12.8744 22.7067 13.1972C22.6589 13.5527 22.5465 13.9284 22.2374 14.2374C21.9284 14.5465 21.5527 14.6589 21.1972 14.7067C20.8744 14.7501 20.4776 14.7501 20.0448 14.75H20.0447L20 14.75L19.9553 14.75H19.9553C19.5224 14.7501 19.1256 14.7501 18.8028 14.7067C18.4473 14.6589 18.0716 14.5465 17.7626 14.2374C17.4535 13.9284 17.3411 13.5527 17.2933 13.1972C17.2499 12.8744 17.25 12.4776 17.25 12.0448L17.25 12L17.25 11.9553C17.25 11.5224 17.2499 11.1256 17.2933 10.8028C17.3411 10.4473 17.4535 10.0716 17.7626 9.76257C18.0716 9.45355 18.4473 9.3411 18.8028 9.29331C19.1256 9.24991 19.5224 9.24995 19.9553 9.25Z',
  d12: 'M3.95526 9.25L4.00001 9.25001L4.04475 9.25C4.47757 9.24995 4.8744 9.24991 5.19721 9.29331C5.55269 9.3411 5.92842 9.45355 6.23744 9.76257C6.54647 10.0716 6.65891 10.4473 6.70671 10.8028C6.75011 11.1256 6.75006 11.5224 6.75001 11.9553V11.9553L6.75001 12L6.75001 12.0448V12.0448C6.75006 12.4776 6.75011 12.8744 6.70671 13.1972C6.65891 13.5527 6.54647 13.9284 6.23744 14.2374C5.92842 14.5465 5.55269 14.6589 5.19721 14.7067C4.8744 14.7501 4.47758 14.7501 4.04476 14.75H4.04475L4.00001 14.75L3.95526 14.75H3.95525C3.52244 14.7501 3.12561 14.7501 2.8028 14.7067C2.44732 14.6589 2.07159 14.5465 1.76257 14.2374C1.45355 13.9284 1.3411 13.5527 1.29331 13.1972C1.24991 12.8744 1.24995 12.4776 1.25 12.0448L1.25001 12L1.25 11.9553C1.24995 11.5224 1.24991 11.1256 1.29331 10.8028C1.3411 10.4473 1.45355 10.0716 1.76257 9.76257C2.07159 9.45355 2.44732 9.3411 2.8028 9.29331C3.12561 9.24991 3.52244 9.24995 3.95526 9.25Z',
  d13: 'M9.25373 3.42588C6.49182 4.31015 4.31193 6.49009 3.42773 9.25204C3.59534 9.24875 3.77231 9.24877 3.95574 9.24879H4.04523C4.47805 9.24874 4.87488 9.24869 5.19769 9.2921C5.30303 9.30626 5.41015 9.3261 5.51679 9.35505C6.22682 7.61575 7.61744 6.22508 9.3567 5.51497C9.32777 5.40838 9.30794 5.3013 9.29378 5.196C9.25038 4.87319 9.25043 4.47637 9.25048 4.04355V3.95405C9.25046 3.77057 9.25044 3.59352 9.25373 3.42588Z',
  d14: 'M14.6443 5.51486C16.3837 6.22492 17.7744 7.61562 18.4845 9.35497C18.591 9.32606 18.698 9.30625 18.8033 9.2921C19.1261 9.24869 19.5229 9.24874 19.9557 9.24879H20.0452C20.2288 9.24877 20.4058 9.24875 20.5735 9.25204C19.6893 6.48999 17.5093 4.30999 14.7472 3.42578C14.7505 3.59345 14.7505 3.77049 14.7505 3.95399V4.04354C14.7505 4.47633 14.7506 4.87321 14.7072 5.196C14.693 5.30126 14.6732 5.4083 14.6443 5.51486Z',
  d15: 'M18.4844 14.6426C18.591 14.6715 18.698 14.6913 18.8033 14.7055C19.1261 14.7489 19.5229 14.7489 19.9557 14.7488H20.0452C20.2287 14.7488 20.4058 14.7488 20.5735 14.7456C19.6892 17.5075 17.5092 19.6874 14.7472 20.5716C14.7505 20.404 14.7505 20.227 14.7505 20.0435V19.9541C14.7505 19.5212 14.7506 19.1244 14.7072 18.8016C14.693 18.6963 14.6732 18.5892 14.6443 18.4826C16.3836 17.7725 17.7743 16.3819 18.4844 14.6426Z',
  d16: 'M9.35675 18.4825C7.61752 17.7724 6.22692 16.3818 5.51685 14.6425C5.4102 14.6715 5.30305 14.6913 5.19769 14.7055C4.87488 14.7489 4.47804 14.7489 4.04523 14.7488H3.95574C3.77233 14.7488 3.59539 14.7488 3.42779 14.7456C4.31203 17.5074 6.49188 19.6873 9.25372 20.5715C9.25044 20.4039 9.25046 20.227 9.25048 20.0435V19.954C9.25043 19.5212 9.25038 19.1244 9.29378 18.8016C9.30795 18.6962 9.32779 18.5891 9.35675 18.4825Z',
  d17: 'M10 6L10 2L14 2.0026L14 6H10Z',
  d18: 'M2 14L2 10L6 10.0026L6 14H2Z',
  d19: 'M18 14L18 10L22 10.0026L22 14H18Z',
  d20: 'M10 22L10 18L14 18.0026L14 22H10Z',
  d21: 'M9.46984 1.4695C9.6106 1.32883 9.80149 1.24987 10.0005 1.25L14.0005 1.2526C14.4145 1.25287 14.75 1.58858 14.75 2.0026L14.75 6C14.75 6.41421 14.4142 6.75 14 6.75H10C9.80109 6.75 9.61032 6.67098 9.46967 6.53033C9.32902 6.38968 9.25 6.19891 9.25 6V2C9.25 1.801 9.32908 1.61016 9.46984 1.4695Z',
  d22: 'M1.46984 9.4695C1.6106 9.32883 1.80149 9.24987 2.00049 9.25L6.00049 9.2526C6.41451 9.25287 6.75 9.58858 6.75 10.0026L6.75 14C6.75 14.4142 6.41421 14.75 6 14.75H2C1.80109 14.75 1.61032 14.671 1.46967 14.5303C1.32902 14.3897 1.25 14.1989 1.25 14V10C1.25 9.801 1.32908 9.61016 1.46984 9.4695Z',
  d23: 'M17.4698 9.4695C17.6106 9.32883 17.8015 9.24987 18.0005 9.25L22.0005 9.2526C22.4145 9.25287 22.75 9.58858 22.75 10.0026L22.75 14C22.75 14.4142 22.4142 14.75 22 14.75H18C17.8011 14.75 17.6103 14.671 17.4697 14.5303C17.329 14.3897 17.25 14.1989 17.25 14V10C17.25 9.801 17.3291 9.61016 17.4698 9.4695Z',
  d24: 'M9.46984 17.4695C9.6106 17.3288 9.80149 17.2499 10.0005 17.25L14.0005 17.2526C14.4145 17.2529 14.75 17.5886 14.75 18.0026L14.75 22C14.75 22.4142 14.4142 22.75 14 22.75H10C9.80109 22.75 9.61032 22.671 9.46967 22.5303C9.32902 22.3897 9.25 22.1989 9.25 22V18C9.25 17.801 9.32908 17.6102 9.46984 17.4695Z',
  d25: 'M10.2489 5.22057C7.79049 5.85331 5.85282 7.79098 5.22008 10.2494L3.2832 9.75083C4.09757 6.58678 6.58629 4.09806 9.75035 3.28369L10.2489 5.22057ZM18.7791 10.2494C18.1464 7.79098 16.2087 5.85331 13.7503 5.22057L14.2489 3.28369C17.4129 4.09806 19.9016 6.58678 20.716 9.75083L18.7791 10.2494ZM5.22008 13.7508C5.85282 16.2092 7.79049 18.1469 10.2489 18.7796L9.75035 20.7165C6.58629 19.9021 4.09757 17.4134 3.2832 14.2494L5.22008 13.7508ZM13.7503 18.7796C16.2087 18.1469 18.1464 16.2092 18.7791 13.7508L20.716 14.2494C19.9016 17.4134 17.4129 19.9021 14.2489 20.7165L13.7503 18.7796Z',
};

export const IconEllipseSelectionStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ellipse-selection-stroke-rounded IconEllipseSelectionStrokeRounded"
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

export const IconEllipseSelectionDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ellipse-selection-duotone-rounded IconEllipseSelectionDuotoneRounded"
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEllipseSelectionTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ellipse-selection-twotone-rounded IconEllipseSelectionTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconEllipseSelectionSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ellipse-selection-solid-rounded IconEllipseSelectionSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEllipseSelectionBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ellipse-selection-bulk-rounded IconEllipseSelectionBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEllipseSelectionStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ellipse-selection-stroke-sharp IconEllipseSelectionStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEllipseSelectionSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ellipse-selection-solid-sharp IconEllipseSelectionSolidSharp"
    >
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfEllipseSelection: TheIconSelfPack = {
  name: 'EllipseSelection',
  StrokeRounded: IconEllipseSelectionStrokeRounded,
  DuotoneRounded: IconEllipseSelectionDuotoneRounded,
  TwotoneRounded: IconEllipseSelectionTwotoneRounded,
  SolidRounded: IconEllipseSelectionSolidRounded,
  BulkRounded: IconEllipseSelectionBulkRounded,
  StrokeSharp: IconEllipseSelectionStrokeSharp,
  SolidSharp: IconEllipseSelectionSolidSharp,
};