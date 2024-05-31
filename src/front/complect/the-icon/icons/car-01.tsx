import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12L4.5 13',
  d2: 'M21.5 12.5L19.5 13',
  d3: 'M8 17.5L8.24567 16.8858C8.61101 15.9725 8.79368 15.5158 9.17461 15.2579C9.55553 15 10.0474 15 11.0311 15H12.9689C13.9526 15 14.4445 15 14.8254 15.2579C15.2063 15.5158 15.389 15.9725 15.7543 16.8858L16 17.5',
  d4: 'M2 17V19.882C2 20.2607 2.24075 20.607 2.62188 20.7764C2.86918 20.8863 3.10538 21 3.39058 21H5.10942C5.39462 21 5.63082 20.8863 5.87812 20.7764C6.25925 20.607 6.5 20.2607 6.5 19.882V18',
  d5: 'M17.5 18V19.882C17.5 20.2607 17.7408 20.607 18.1219 20.7764C18.3692 20.8863 18.6054 21 18.8906 21H20.6094C20.8946 21 21.1308 20.8863 21.3781 20.7764C21.7592 20.607 22 20.2607 22 19.882V17',
  d6: 'M20 8.5L21 8',
  d7: 'M4 8.5L3 8',
  d8: 'M4.5 9L5.5883 5.73509C6.02832 4.41505 6.24832 3.75503 6.7721 3.37752C7.29587 3 7.99159 3 9.38304 3H14.617C16.0084 3 16.7041 3 17.2279 3.37752C17.7517 3.75503 17.9717 4.41505 18.4117 5.73509L19.5 9',
  d9: 'M4.5 9H19.5C20.4572 10.0135 22 11.4249 22 12.9996V16.4702C22 17.0407 21.6205 17.5208 21.1168 17.5875L18 18H6L2.88316 17.5875C2.37955 17.5208 2 17.0407 2 16.4702V12.9996C2 11.4249 3.54279 10.0135 4.5 9Z',
  d10: 'M2 19.882C2 20.2607 2.24075 20.607 2.62188 20.7764L2.66671 20.7964C2.89797 20.8997 3.12266 21 3.39058 21H5.10942C5.37734 21 5.60202 20.8997 5.83328 20.7964L5.87812 20.7764C6.25925 20.607 6.5 20.2607 6.5 19.882V18H17.5V19.882C17.5 20.2607 17.7408 20.607 18.1219 20.7764L18.1667 20.7964C18.398 20.8997 18.6227 21 18.8906 21H20.6094C20.8773 21 21.102 20.8997 21.3333 20.7964L21.3781 20.7764C21.7592 20.607 22 20.2607 22 19.882V12.9996C22 11.5917 20.7667 10.3143 19.8213 9.3351C19.7094 9.21925 19.6013 9.10723 19.5 9H4.5C4.39864 9.10733 4.29071 9.21912 4.17874 9.33509C3.23334 10.3143 2 11.5917 2 12.9996V19.882ZM8 17.5L8.24567 16.8858C8.61101 15.9725 8.79368 15.5158 9.17461 15.2579C9.55553 15 10.0474 15 11.0311 15H12.9689C13.9526 15 14.4445 15 14.8254 15.2579C15.2063 15.5158 15.389 15.9725 15.7543 16.8858L16 17.5H8Z',
  d11: 'M5.5883 5.73509L4.5 9H19.5L18.4117 5.73509C17.9717 4.41505 17.7517 3.75503 17.2279 3.37752C16.7041 3 16.0084 3 14.617 3H9.38304C7.99159 3 7.29587 3 6.7721 3.37752C6.24832 3.75503 6.02832 4.41505 5.5883 5.73509Z',
  d12: 'M17.9 19.7517C17.7114 19.7517 17.6172 19.7517 17.5586 19.8103C17.5 19.8688 17.5 19.9631 17.5 20.1517V20.6336C17.5 21.0124 17.7407 21.3587 18.1219 21.5281C18.1369 21.5347 18.1518 21.5414 18.1667 21.5481C18.398 21.6513 18.6227 21.7517 18.8906 21.7517H20.6094C20.8773 21.7517 21.102 21.6513 21.3333 21.5481C21.3482 21.5414 21.3631 21.5347 21.3781 21.5281C21.7592 21.3587 22 21.0124 22 20.6336V19.7449C22 19.4893 22 19.3614 21.9295 19.3015C21.859 19.2416 21.7167 19.2649 21.432 19.3114C21.4037 19.316 21.3752 19.3202 21.3465 19.324L18.2296 19.7365C18.1535 19.7466 18.0768 19.7517 18 19.7517H17.9Z',
  d13: 'M6.1 19.7519C6.28856 19.7519 6.38284 19.7519 6.44142 19.8105C6.5 19.869 6.5 19.9633 6.5 20.1519V20.6338C6.5 21.0126 6.25925 21.3589 5.87812 21.5283C5.86314 21.5349 5.8482 21.5416 5.83329 21.5483C5.60202 21.6515 5.37734 21.7519 5.10942 21.7519H3.39058C3.12266 21.7519 2.89798 21.6515 2.66671 21.5483C2.6518 21.5416 2.63686 21.5349 2.62188 21.5283C2.24075 21.3589 2 21.0126 2 20.6338V19.7451C2 19.4894 2 19.3616 2.07048 19.3017C2.14095 19.2418 2.28329 19.2651 2.56797 19.3116C2.59626 19.3162 2.62479 19.3204 2.65355 19.3242L5.77037 19.7367C5.84651 19.7468 5.92322 19.7519 6 19.7519H6.1Z',
  d14: 'M2.10579 7.55301C2.35278 7.05903 2.95345 6.8588 3.44743 7.10579L4.44743 7.60579C4.94141 7.85278 5.14164 8.45345 4.89465 8.94743C4.64766 9.44141 4.04698 9.64164 3.55301 9.39465L2.55301 8.89465C2.05903 8.64766 1.8588 8.04698 2.10579 7.55301ZM21.8946 7.55301C22.1416 8.04698 21.9414 8.64766 21.4474 8.89465L20.4474 9.39465C19.9535 9.64164 19.3528 9.44141 19.1058 8.94743C18.8588 8.45345 19.059 7.85278 19.553 7.60579L20.553 7.10579C21.047 6.8588 21.6477 7.05903 21.8946 7.55301Z',
  d15: 'M20.3433 8.79564C20.7622 9.22922 21.2798 9.76497 21.7098 10.3405C22.2502 11.0638 22.75 11.9711 22.75 12.9996V16.4702C22.75 17.3475 22.1567 18.2064 21.2152 18.331L18.0984 18.7435C18.0658 18.7478 18.0329 18.75 18 18.75H6C5.96709 18.75 5.93422 18.7478 5.90159 18.7435L2.78475 18.331C1.84332 18.2064 1.25 17.3475 1.25 16.4702V12.9996C1.25 11.9711 1.74984 11.0638 2.29022 10.3405C2.7202 9.76497 3.23763 9.22942 3.65654 8.79585C3.74162 8.70778 3.7604 8.63077 3.80007 8.51582L4.87241 5.40846C5.07214 4.8296 5.2472 4.32221 5.44107 3.91969C5.65065 3.48453 5.92061 3.08574 6.35853 2.78087C6.79644 2.47599 7.2735 2.35473 7.76717 2.30029C8.22382 2.24994 8.77751 2.24997 9.40922 2.25H14.5908C15.2225 2.24997 15.7762 2.24994 16.2328 2.30029C16.7265 2.35473 17.2036 2.47599 17.6415 2.78087C18.0794 3.08574 18.3493 3.48453 18.5589 3.91969C18.7528 4.32221 18.9278 4.82957 19.1276 5.40843L20.1999 8.51582C20.2373 8.62416 20.2632 8.71279 20.3433 8.79564ZM6.7797 8.25C6.39606 8.25 6.20424 8.25 6.11452 8.12413C6.0248 7.99825 6.08737 7.81693 6.21253 7.45427L6.69783 6.04798C6.91843 5.40875 7.0595 5.00446 7.20106 4.71053C7.38093 4.33706 7.57661 4.20842 7.98735 4.16313C8.3208 4.12636 8.7625 4.12494 9.46009 4.12494H14.5399C15.2375 4.12494 15.6792 4.12636 16.0126 4.16313C16.4234 4.20842 16.6191 4.33706 16.7989 4.71053C16.9405 5.00446 17.0816 5.40875 17.3022 6.04798L17.7875 7.45427C17.9126 7.81693 17.9752 7.99825 17.8855 8.12413C17.7958 8.25 17.6039 8.25 17.2203 8.25H6.7797ZM3.33557 11.5793C2.96509 11.3941 2.51459 11.5443 2.32934 11.9148C2.1441 12.2852 2.29427 12.7357 2.66475 12.921L4.16475 13.671C4.53524 13.8562 4.98574 13.7061 5.17098 13.3356C5.35623 12.9651 5.20606 12.5146 4.83557 12.3293L3.33557 11.5793ZM21.3356 12.921C21.7061 12.7357 21.8562 12.2852 21.671 11.9148C21.4857 11.5443 21.0352 11.3941 20.6648 11.5793L19.1648 12.3293C18.7943 12.5146 18.6441 12.9651 18.8293 13.3356C19.0146 13.7061 19.4651 13.8562 19.8356 13.671L21.3356 12.921ZM12.9692 15H11.0314C10.0477 15 9.55587 15 9.17494 15.2735C8.87929 15.4858 8.70306 15.8251 8.46817 16.4192C8.36499 16.6802 8.3134 16.8107 8.37275 16.9054C8.4321 17 8.56701 17 8.83682 17H15.1639C15.4337 17 15.5686 17 15.6279 16.9054C15.6873 16.8107 15.6357 16.6802 15.5325 16.4192C15.2976 15.8251 15.1214 15.4858 14.8257 15.2735C14.4448 15 13.9529 15 12.9692 15Z',
  d16: 'M21.7098 10.3405C21.2798 9.76497 20.7622 9.22922 20.3433 8.79564C20.2632 8.71279 20.2373 8.62416 20.1999 8.51582L19.1276 5.40843C18.9278 4.82957 18.7528 4.32221 18.5589 3.91969C18.3493 3.48453 18.0794 3.08574 17.6415 2.78087C17.2036 2.47599 16.7265 2.35473 16.2328 2.30029C15.7762 2.24994 15.2225 2.24997 14.5908 2.25H9.40922C8.77751 2.24997 8.22382 2.24994 7.76717 2.30029C7.2735 2.35473 6.79644 2.47599 6.35853 2.78087C5.92061 3.08574 5.65065 3.48453 5.44107 3.91969C5.24721 4.32221 5.07214 4.82959 4.87242 5.40845L4.87241 5.40846L3.80007 8.51582C3.7604 8.63077 3.74162 8.70778 3.65654 8.79585C3.23763 9.22942 2.7202 9.76497 2.29022 10.3405C1.74984 11.0638 1.25 11.9711 1.25 12.9996V16.4702C1.25 17.3475 1.84332 18.2064 2.78475 18.331L5.90159 18.7435C5.93422 18.7478 5.96709 18.75 6 18.75H18C18.0329 18.75 18.0658 18.7478 18.0984 18.7435L21.2152 18.331C22.1567 18.2064 22.75 17.3475 22.75 16.4702V12.9996C22.75 11.9711 22.2502 11.0638 21.7098 10.3405Z',
  d17: 'M20.7647 9.23633C20.6183 9.08063 20.4758 8.93318 20.3433 8.79597C20.2695 8.71959 20.2417 8.6383 20.2085 8.5412C20.2057 8.53296 20.2029 8.52462 20.1999 8.51615L19.8369 7.46418L20.553 7.10612C21.047 6.85913 21.6477 7.05936 21.8946 7.55334C22.1416 8.04731 21.9414 8.64799 21.4474 8.89498L20.7647 9.23633ZM3.23541 9.23618L2.55301 8.89498C2.05903 8.64799 1.8588 8.04731 2.10579 7.55334C2.35278 7.05936 2.95345 6.85913 3.44743 7.10612L4.16317 7.46399L3.80007 8.51615C3.79552 8.52933 3.79125 8.54201 3.78712 8.55427C3.75522 8.6489 3.73187 8.71821 3.65654 8.79618C3.52405 8.9333 3.38172 9.08062 3.23541 9.23618Z',
  d18: 'M6.7797 8.25006C6.39606 8.25006 6.20423 8.25006 6.11452 8.12419C6.0248 7.99831 6.08737 7.81699 6.21253 7.45433L6.69783 6.04804C6.91843 5.40881 7.0595 5.00452 7.20106 4.71059C7.38093 4.33712 7.57661 4.20848 7.98735 4.16319C8.3208 4.12642 8.7625 4.125 9.46009 4.125H14.5399C15.2375 4.125 15.6792 4.12642 16.0126 4.16319C16.4234 4.20848 16.6191 4.33712 16.7989 4.71059C16.9405 5.00452 17.0816 5.40881 17.3022 6.04804L17.7875 7.45433C17.9126 7.81699 17.9752 7.99831 17.8855 8.12419C17.7958 8.25006 17.6039 8.25006 17.2203 8.25006H6.7797ZM3.33557 11.5794C2.96509 11.3942 2.51459 11.5443 2.32934 11.9148C2.1441 12.2853 2.29427 12.7358 2.66475 12.921L4.16475 13.671C4.53524 13.8563 4.98574 13.7061 5.17098 13.3356C5.35623 12.9652 5.20606 12.5146 4.83557 12.3294L3.33557 11.5794ZM21.3356 12.921C21.7061 12.7358 21.8562 12.2853 21.671 11.9148C21.4857 11.5443 21.0352 11.3942 20.6648 11.5794L19.1648 12.3294C18.7943 12.5146 18.6441 12.9652 18.8293 13.3356C19.0146 13.7061 19.4651 13.8563 19.8356 13.671L21.3356 12.921ZM12.9692 15.0001H11.0314C10.0477 15.0001 9.55587 15.0001 9.17494 15.2736C8.87929 15.4859 8.70306 15.8251 8.46817 16.4193C8.36499 16.6803 8.3134 16.8108 8.37275 16.9054C8.4321 17.0001 8.56701 17.0001 8.83682 17.0001H15.1639C15.4337 17.0001 15.5686 17.0001 15.6279 16.9054C15.6873 16.8108 15.6357 16.6803 15.5325 16.4193C15.2976 15.8251 15.1214 15.4859 14.8257 15.2736C14.4448 15.0001 13.9529 15.0001 12.9692 15.0001Z',
  d19: 'M2 13H5',
  d20: 'M22 13H19',
  d21: 'M2 17V20H6.5V17',
  d22: 'M17.5 17V20H22V17',
  d23: 'M19.5 10L22 8',
  d24: 'M4.5 10L2 8',
  d25: 'M4 10L6 4H18L20 10',
  d26: 'M2 17V12.9996L4 10H20L22 12.9996V17H2Z',
  d27: 'M16 17L14.5028 14.0055C14.5011 14.0021 14.4976 14 14.4938 14H9.50618C9.50239 14 9.49893 14.0021 9.49724 14.0055L8 17',
  d28: 'M6.13734 3.25C5.71669 3.25 5.34324 3.51625 5.21022 3.91098L3.29707 9.58814L1.41514 12.38C1.3081 12.5388 1.25098 12.7254 1.25098 12.9163V16.7833C1.25098 17.3172 1.68852 17.75 2.22825 17.75H21.7737C22.3134 17.75 22.751 17.3172 22.751 16.7833V12.9163C22.751 12.7254 22.6939 12.5388 22.5868 12.38L20.7049 9.58814L18.7917 3.91098C18.6587 3.51625 18.2853 3.25 17.8646 3.25H6.13734ZM17.1616 5.18359L18.4646 9.05026L5.54004 9.05026L6.84307 5.18359H17.1616ZM6.00098 13.75H3.50098V12.25H6.00098V13.75ZM18.001 12.25H20.501V13.75H18.001V12.25ZM9.49953 14H14.4995L15.5645 16.1299H8.43457L9.49953 14Z',
  d29: 'M3.00098 20.75V18.75H7.00098V20.75H3.00098Z',
  d30: 'M17.001 20.75V18.75H21.001V20.75H17.001Z',
  d31: 'M2.49939 7.21875L4.99939 9.21875L3.75 10.7805L1.25 8.78049L2.49939 7.21875ZM22.75 8.78049L20.25 10.7805L19.0006 9.21875L21.5006 7.21875L22.75 8.78049Z',
} as const;

export const IconCar01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="car-01-stroke-rounded IconCar01StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCar01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="car-01-duotone-rounded IconCar01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
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
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCar01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="car-01-twotone-rounded IconCar01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCar01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="car-01-solid-rounded IconCar01SolidRounded"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCar01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="car-01-bulk-rounded IconCar01BulkRounded"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCar01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="car-01-stroke-sharp IconCar01StrokeSharp"
    >
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
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCar01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="car-01-solid-sharp IconCar01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCar01: TheIconSelfPack = {
  name: 'Car01',
  StrokeRounded: IconCar01StrokeRounded,
  DuotoneRounded: IconCar01DuotoneRounded,
  TwotoneRounded: IconCar01TwotoneRounded,
  SolidRounded: IconCar01SolidRounded,
  BulkRounded: IconCar01BulkRounded,
  StrokeSharp: IconCar01StrokeSharp,
  SolidSharp: IconCar01SolidSharp,
};