import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16.5 17L17.4989 18M17.4989 18L18.5 19M17.4989 18L18.5 17M17.4989 18L16.5 19M21.5 18C21.5 20.2091 19.7091 22 17.5 22C15.2909 22 13.5 20.2091 13.5 18C13.5 15.7909 15.2909 14 17.5 14C19.7091 14 21.5 15.7909 21.5 18Z',
  d2: 'M6.95309 17.4868C6.66965 17.7888 6.68474 18.2635 6.98679 18.5469C7.28884 18.8304 7.76348 18.8153 8.04691 18.5132L6.95309 17.4868ZM10.5791 17.2458C10.991 17.2021 11.2895 16.8328 11.2458 16.4209C11.2021 16.009 10.8328 15.7105 10.4209 15.7542L10.5791 17.2458ZM3.52513 21.0288L3.00932 21.5733L3.52513 21.0288ZM18.4749 4.97116L17.9591 5.51562L18.4749 4.97116ZM3.52513 4.97116L4.04093 5.51562L3.52513 4.97116ZM8.50279 4.75115C8.91701 4.74961 9.25154 4.41258 9.24999 3.99836C9.24845 3.58415 8.91142 3.24962 8.49721 3.25116L8.50279 4.75115ZM13.5028 3.25116C13.0886 3.24962 12.7515 3.58415 12.75 3.99836C12.7485 4.41258 13.083 4.74961 13.4972 4.75115L13.5028 3.25116ZM18.75 12C18.75 12.4142 19.0858 12.75 19.5 12.75C19.9142 12.75 20.25 12.4142 20.25 12H18.75ZM10.5 22.75C10.9142 22.75 11.25 22.4142 11.25 22C11.25 21.5858 10.9142 21.25 10.5 21.25V22.75ZM8.96901 5.82911L9.35835 5.18808L8.96901 5.82911ZM8.68886 3.99176L7.95815 3.82274V3.82274L8.68886 3.99176ZM8.56197 5.37824L7.87896 5.68808L8.56197 5.37824ZM13.3111 3.99176L14.0418 3.82274L13.3111 3.99176ZM13.438 5.37824L14.121 5.68808L13.438 5.37824ZM13.031 5.82911L13.4203 6.47014L13.031 5.82911ZM11.9086 2.0467L11.7403 2.77759L11.9086 2.0467ZM13.2278 3.63163L12.4971 3.80065L13.2278 3.63163ZM12.9918 2.84004L12.333 3.19842L12.9918 2.84004ZM10.0914 2.0467L10.2597 2.77759L10.0914 2.0467ZM8.77216 3.63163L9.50286 3.80065V3.80065L8.77216 3.63163ZM9.00821 2.84004L9.66705 3.19842L9.00821 2.84004ZM12.25 12C12.25 12.7016 11.6933 13.25 11.0315 13.25V14.75C12.5441 14.75 13.75 13.5075 13.75 12H12.25ZM11.0315 13.25C10.3698 13.25 9.81307 12.7016 9.81307 12H8.31307C8.31307 13.5075 9.51898 14.75 11.0315 14.75V13.25ZM9.81307 12C9.81307 11.2984 10.3698 10.75 11.0315 10.75V9.25C9.51898 9.25 8.31307 10.4925 8.31307 12H9.81307ZM11.0315 10.75C11.6933 10.75 12.25 11.2984 12.25 12H13.75C13.75 10.4925 12.5441 9.25 11.0315 9.25V10.75ZM8.04691 18.5132C8.72491 17.7907 9.62319 17.3472 10.5791 17.2458L10.4209 15.7542C9.10487 15.8938 7.87535 16.504 6.95309 17.4868L8.04691 18.5132ZM3.25 15.3684V10.6316H1.75V15.3684H3.25ZM9.5 21.25C7.82998 21.25 6.64898 21.2486 5.75431 21.1346C4.87725 21.0229 4.38967 20.8147 4.04093 20.4844L3.00932 21.5733C3.68571 22.2141 4.53565 22.4915 5.56479 22.6226C6.57633 22.7514 7.8702 22.75 9.5 22.75V21.25ZM1.75 15.3684C1.75 16.9091 1.74823 18.1443 1.88558 19.1121C2.02661 20.1059 2.32721 20.9271 3.00932 21.5733L4.04093 20.4844C3.69792 20.1594 3.48595 19.7135 3.3707 18.9013C3.25177 18.0633 3.25 16.9538 3.25 15.3684H1.75ZM20.25 10.6316C20.25 9.09083 20.2518 7.8557 20.1144 6.88786C19.9734 5.8941 19.6728 5.0729 18.9907 4.42669L17.9591 5.51562C18.3021 5.84058 18.514 6.28651 18.6293 7.09862C18.7482 7.93665 18.75 9.04614 18.75 10.6316H20.25ZM3.25 10.6316C3.25 9.04614 3.25177 7.93665 3.3707 7.09862C3.48595 6.28651 3.69792 5.84058 4.04093 5.51562L3.00932 4.42669C2.32721 5.0729 2.02661 5.8941 1.88558 6.88786C1.74823 7.8557 1.75 9.09083 1.75 10.6316H3.25ZM8.49721 3.25116C7.18295 3.25606 6.10891 3.28037 5.24135 3.42463C4.35533 3.57196 3.61291 3.85487 3.00932 4.42669L4.04093 5.51562C4.35322 5.21977 4.77604 5.0226 5.48739 4.90432C6.2172 4.78296 7.17265 4.75611 8.50279 4.75115L8.49721 3.25116ZM13.4972 4.75115C14.8273 4.75611 15.7828 4.78296 16.5126 4.90432C17.224 5.0226 17.6468 5.21977 17.9591 5.51562L18.9907 4.42669C18.3871 3.85487 17.6447 3.57196 16.7587 3.42463C15.8911 3.28037 14.817 3.25606 13.5028 3.25116L13.4972 4.75115ZM18.75 10.6316V12H20.25V10.6316H18.75ZM10.5 21.25H9.5V22.75H10.5V21.25ZM12.4971 3.80065L12.5804 4.16077L14.0418 3.82274L13.9586 3.46262L12.4971 3.80065ZM11.4981 5.25H10.5019V6.75H11.4981V5.25ZM9.41957 4.16077L9.50286 3.80065L8.04145 3.46262L7.95815 3.82274L9.41957 4.16077ZM10.5019 5.25C10.071 5.25 9.7969 5.24932 9.59356 5.2315C9.49716 5.22305 9.43739 5.2122 9.4 5.2024C9.38224 5.19774 9.37137 5.19379 9.3655 5.19139C9.36256 5.19019 9.36069 5.1893 9.35969 5.1888C9.35918 5.18854 9.35883 5.18835 9.35863 5.18824C9.35844 5.18813 9.35835 5.18808 9.35835 5.18808L8.57968 6.47014C8.86483 6.64332 9.17387 6.70047 9.46262 6.72578C9.74679 6.75068 10.0984 6.75 10.5019 6.75V5.25ZM7.95815 3.82274C7.87686 4.17417 7.80134 4.49614 7.76888 4.7648C7.73518 5.04374 7.73287 5.36605 7.87896 5.68808L9.24497 5.06839C9.2627 5.10747 9.23876 5.10438 9.25805 4.94474C9.27858 4.77482 9.33069 4.54503 9.41957 4.16077L7.95815 3.82274ZM9.35835 5.18808C9.29699 5.15081 9.26197 5.10585 9.24497 5.06839L7.87896 5.68808C8.02824 6.01716 8.27656 6.28603 8.57968 6.47014L9.35835 5.18808ZM12.5804 4.16077C12.6693 4.54503 12.7214 4.77482 12.742 4.94474C12.7612 5.10438 12.7373 5.10747 12.755 5.06839L14.121 5.68808C14.2671 5.36605 14.2648 5.04374 14.2311 4.7648C14.1987 4.49614 14.1231 4.17417 14.0418 3.82274L12.5804 4.16077ZM11.4981 6.75C11.9016 6.75 12.2532 6.75068 12.5374 6.72578C12.8261 6.70047 13.1352 6.64332 13.4203 6.47014L12.6417 5.18808C12.6417 5.18808 12.6416 5.18813 12.6414 5.18824C12.6412 5.18835 12.6408 5.18854 12.6403 5.1888C12.6393 5.1893 12.6374 5.19019 12.6345 5.19139C12.6286 5.19379 12.6178 5.19774 12.6 5.2024C12.5626 5.2122 12.5028 5.22305 12.4064 5.2315C12.2031 5.24932 11.929 5.25 11.4981 5.25V6.75ZM12.755 5.06839C12.738 5.10585 12.703 5.15081 12.6417 5.18808L13.4203 6.47014C13.7234 6.28604 13.9718 6.01716 14.121 5.68808L12.755 5.06839ZM11 2.75C11.5097 2.75 11.6409 2.7547 11.7403 2.77759L12.0768 1.3158C11.7704 1.2453 11.4312 1.25 11 1.25V2.75ZM13.9586 3.46262C13.8729 3.09244 13.8035 2.76264 13.6506 2.48165L12.333 3.19842C12.3644 3.25619 12.3909 3.3412 12.4971 3.80065L13.9586 3.46262ZM11.7403 2.77759C12.0225 2.84252 12.2298 3.00886 12.333 3.19842L13.6506 2.48165C13.3245 1.88205 12.74 1.46844 12.0768 1.3158L11.7403 2.77759ZM11 1.25C10.5688 1.25 10.2296 1.2453 9.92323 1.3158L10.2597 2.77759C10.3591 2.7547 10.4903 2.75 11 2.75V1.25ZM9.50286 3.80065C9.60914 3.3412 9.63562 3.25619 9.66705 3.19842L8.34938 2.48165C8.19653 2.76264 8.12707 3.09244 8.04145 3.46262L9.50286 3.80065ZM9.92323 1.3158C9.26005 1.46844 8.67555 1.88205 8.34938 2.48165L9.66705 3.19842C9.77016 3.00886 9.97753 2.84252 10.2597 2.77759L9.92323 1.3158Z',
  d3: 'M7.5 18C8.41684 17.0229 9.72299 16.5115 11.0315 16.5002M13 12C13 13.1046 12.1187 14 11.0315 14C9.94438 14 9.06307 13.1046 9.06307 12C9.06307 10.8954 9.94438 10 11.0315 10C12.1187 10 13 10.8954 13 12Z',
  d4: 'M8.5 4.00195C5.85561 4.01181 4.44101 4.10427 3.52513 4.97195C2.5 5.94312 2.5 7.5062 2.5 10.6324V15.3692C2.5 18.4954 2.5 20.0584 3.52513 21.0296C4.55025 22.0008 6.20017 22.0008 9.5 22.0008H11.5M13.5 4.00195C16.1444 4.01181 17.559 4.10427 18.4749 4.97195C19.5 5.94312 19.5 7.5062 19.5 10.6324V11.5008',
  d5: 'M8.77216 3.63163C8.8681 3.21682 8.91608 3.00942 9.00821 2.84004C9.22285 2.44546 9.61879 2.15548 10.0914 2.0467C10.2943 2 10.5296 2 11 2C11.4704 2 11.7057 2 11.9086 2.0467C12.3812 2.15548 12.7771 2.44545 12.9918 2.84004C13.0839 3.00942 13.1319 3.21682 13.2278 3.63163L13.3111 3.99176C13.4813 4.72744 13.5664 5.09528 13.438 5.37824C13.3549 5.5615 13.2132 5.71842 13.031 5.82911C12.7496 6 12.3324 6 11.4981 6H10.5019C9.66755 6 9.25038 6 8.96901 5.82911C8.78677 5.71842 8.6451 5.5615 8.56197 5.37824C8.43361 5.09528 8.51869 4.72744 8.68886 3.99176L8.77216 3.63163Z',
  d6: 'M8.93793 4.00098H8.75098C6.10659 4.01083 4.69199 4.1033 3.77611 4.97098C2.75098 5.94215 2.75098 7.50523 2.75098 10.6314V15.3682C2.75098 18.4944 2.75098 20.0575 3.77611 21.0287C4.80123 21.9998 6.45114 21.9998 9.75096 21.9998H12.751C14.4677 21.9998 15.7379 21.9998 16.7058 21.8631C15.0036 21.4035 13.751 19.8485 13.751 18.001C13.751 15.7919 15.5419 14.001 17.751 14.001C18.4796 14.001 19.1627 14.1958 19.751 14.5361V10.6314C19.751 7.50523 19.751 5.94215 18.7259 4.97098C17.81 4.1033 16.3954 4.01083 13.751 4.00098H13.564C13.7329 4.73117 13.8169 5.09732 13.689 5.37922C13.6059 5.56248 13.4642 5.7194 13.282 5.83009C13.0006 6.00098 12.5834 6.00098 11.7491 6.00098H10.7529C9.91853 6.00098 9.50136 6.00098 9.21999 5.83009C9.03775 5.7194 8.89608 5.56248 8.81295 5.37922C8.68507 5.09732 8.76904 4.73117 8.93793 4.00098ZM11.2825 14.001C12.3697 14.001 13.251 13.1056 13.251 12.001C13.251 10.8964 12.3697 10.001 11.2825 10.001C10.1954 10.001 9.31405 10.8964 9.31405 12.001C9.31405 13.1056 10.1954 14.001 11.2825 14.001Z',
  d7: 'M16.751 17.001L17.7499 18.001M17.7499 18.001L18.751 19.001M17.7499 18.001L18.751 17.001M17.7499 18.001L16.751 19.001M21.751 18.001C21.751 20.2101 19.9601 22.001 17.751 22.001C15.5419 22.001 13.751 20.2101 13.751 18.001C13.751 15.7919 15.5419 14.001 17.751 14.001C19.9601 14.001 21.751 15.7919 21.751 18.001Z',
  d8: 'M7.75098 18.001C8.66782 17.0239 9.97397 16.5125 11.2825 16.5012M13.251 12.001C13.251 13.1056 12.3697 14.001 11.2825 14.001C10.1954 14.001 9.31405 13.1056 9.31405 12.001C9.31405 10.8964 10.1954 10.001 11.2825 10.001C12.3697 10.001 13.251 10.8964 13.251 12.001Z',
  d9: 'M8.75098 4.00293C6.10659 4.01279 4.69199 4.10525 3.77611 4.97293C2.75098 5.9441 2.75098 7.50718 2.75098 10.6334V15.3702C2.75098 18.4964 2.75098 20.0594 3.77611 21.0306C4.80123 22.0018 6.45115 22.0018 9.75098 22.0018H11.751M13.751 4.00293C16.3954 4.01279 17.81 4.10525 18.7259 4.97293C19.751 5.9441 19.751 7.50718 19.751 10.6334V11.5018',
  d10: 'M9.02314 3.63261C9.11908 3.2178 9.16706 3.0104 9.25919 2.84102C9.47383 2.44644 9.86977 2.15646 10.3424 2.04768C10.5453 2.00098 10.7806 2.00098 11.251 2.00098C11.7214 2.00098 11.9567 2.00098 12.1596 2.04768C12.6322 2.15646 13.0281 2.44643 13.2428 2.84102C13.3349 3.0104 13.3829 3.2178 13.4788 3.63261L13.5621 3.99274C13.7323 4.72842 13.8174 5.09626 13.689 5.37922C13.6059 5.56248 13.4642 5.7194 13.282 5.83009C13.0006 6.00098 12.5834 6.00098 11.7491 6.00098H10.7529C9.91853 6.00098 9.50136 6.00098 9.21999 5.83009C9.03775 5.7194 8.89608 5.56248 8.81295 5.37922C8.68459 5.09626 8.76967 4.72842 8.93984 3.99274L9.02314 3.63261Z',
  d11: 'M10.9239 1.25003C10.949 1.25005 10.9743 1.25007 11 1.25007C11.0257 1.25007 11.0511 1.25005 11.0762 1.25003C11.4715 1.24977 11.7887 1.24956 12.0768 1.31587C12.74 1.4685 13.3245 1.88211 13.6506 2.48172C13.7931 2.74368 13.8632 3.04806 13.9414 3.38803C13.9471 3.41273 13.9528 3.43761 13.9586 3.46268L14.0419 3.8228C14.0446 3.83442 14.0472 3.846 14.0499 3.85754C14.1281 4.19545 14.1998 4.50508 14.2311 4.76487C14.2648 5.04381 14.2671 5.36611 14.1211 5.68814C13.9718 6.01722 13.7235 6.2861 13.4203 6.4702C13.1352 6.64339 12.8262 6.70054 12.5374 6.72584C12.2606 6.7501 11.9198 6.75008 11.5294 6.75007H10.4706C10.0802 6.75008 9.73945 6.7501 9.46264 6.72584C9.17389 6.70054 8.86485 6.64339 8.57971 6.4702C8.27658 6.2861 8.02827 6.01722 7.87898 5.68814C7.7329 5.36611 7.7352 5.04381 7.7689 4.76487C7.80029 4.50508 7.87194 4.19545 7.95014 3.85754C7.95281 3.846 7.95549 3.83442 7.95817 3.8228L8.04147 3.46268C8.04727 3.43761 8.053 3.41273 8.05868 3.38803C8.13689 3.04806 8.20691 2.74368 8.34941 2.48172C8.67557 1.88211 9.26007 1.4685 9.92326 1.31587C10.2114 1.24956 10.5285 1.24977 10.9239 1.25003ZM11 2.75007C10.4903 2.75007 10.3591 2.75477 10.2597 2.77765C9.97755 2.84259 9.77019 3.00893 9.66707 3.19849C9.63565 3.25626 9.60916 3.34127 9.50289 3.80072L9.41959 4.16084C9.33071 4.54509 9.2786 4.77488 9.25807 4.9448C9.24859 5.02332 9.24956 5.06396 9.25088 5.08035C9.26955 5.11517 9.30338 5.15474 9.35837 5.18814L9.35972 5.18886C9.36072 5.18936 9.36259 5.19025 9.36553 5.19146C9.3714 5.19386 9.38227 5.19781 9.40003 5.20246C9.43742 5.21226 9.49718 5.22312 9.59359 5.23157C9.79692 5.24939 10.0711 5.25007 10.5019 5.25007H11.4981C11.929 5.25007 12.2031 5.24939 12.4065 5.23157C12.5029 5.22312 12.5626 5.21226 12.6 5.20246C12.6178 5.19781 12.6287 5.19386 12.6345 5.19146C12.6375 5.19025 12.6393 5.18936 12.6403 5.18886L12.6414 5.18831C12.6964 5.15491 12.7305 5.11517 12.7492 5.08035C12.7505 5.06396 12.7515 5.02332 12.742 4.9448C12.7214 4.77488 12.6693 4.54509 12.5805 4.16084L12.4972 3.80072C12.3909 3.34127 12.3644 3.25626 12.333 3.19849C12.2299 3.00893 12.0225 2.84259 11.7404 2.77765C11.6409 2.75477 11.5097 2.75007 11 2.75007ZM12.7481 5.08927C12.748 5.08924 12.7481 5.0885 12.7484 5.08715L12.7481 5.08927ZM9.252 5.08927C9.25197 5.0893 9.25182 5.08863 9.25161 5.08715L9.252 5.08927Z',
  d12: 'M17.5 13.25C14.8766 13.25 12.75 15.3766 12.75 18C12.75 20.6234 14.8766 22.75 17.5 22.75C20.1234 22.75 22.25 20.6234 22.25 18C22.25 15.3766 20.1234 13.25 17.5 13.25ZM17.0306 16.47C16.7379 16.1769 16.263 16.1766 15.97 16.4694C15.6769 16.7621 15.6766 17.237 15.9694 17.53L16.4388 18L15.9694 18.47C15.6766 18.763 15.6769 19.2379 15.97 19.5306C16.263 19.8234 16.7379 19.8231 17.0306 19.53L17.4995 19.0606L17.97 19.5306C18.263 19.8234 18.7379 19.8231 19.0306 19.53C19.3234 19.237 19.3231 18.7621 19.03 18.4694L18.5601 18L19.03 17.5306C19.3231 17.2379 19.3234 16.763 19.0306 16.47C18.7379 16.1769 18.263 16.1766 17.97 16.4694L17.4995 16.9393L17.0306 16.47Z',
  d13: 'M12.75 3.99721C12.7516 3.58299 13.0886 3.24846 13.5028 3.25001C14.8171 3.2549 15.8911 3.27921 16.7587 3.42347C17.6447 3.5708 18.3871 3.85371 18.9907 4.42553C19.6728 5.07174 19.9734 5.89294 20.1144 6.8867C20.25 7.84235 20.25 9.0586 20.25 10.5723V12.3845C19.4202 11.9772 18.4868 11.7485 17.5 11.7485C15.9135 11.7485 14.465 12.3397 13.3628 13.3137C13.5723 12.9216 13.6906 12.4732 13.6906 12C13.6906 10.5003 12.5018 9.25 10.9934 9.25C9.485 9.25 8.2962 10.5003 8.2962 12C8.2962 13.4997 9.485 14.75 10.9934 14.75C11.533 14.75 12.0317 14.59 12.4497 14.3159C12.1228 14.7634 11.8539 15.2561 11.6542 15.7828C10.0492 15.6102 8.37641 16.1216 7.1819 17.2556C6.88358 17.5388 6.75 17.9208 6.75 18.2819C6.75 19.0927 7.40729 19.75 8.21809 19.75H11.4983C11.3367 19.1947 11.25 18.6075 11.25 18C11.25 17.995 11.25 17.99 11.25 17.9851C11.25 17.9896 11.25 17.994 11.25 17.9985C11.25 19.8992 12.0984 21.6016 13.4371 22.7479C13.1542 22.7488 12.8597 22.7488 12.5532 22.7488H9.44678C7.84201 22.7488 6.56529 22.7489 5.56479 22.6214C4.53566 22.4903 3.68571 22.2129 3.00932 21.5721C2.32721 20.9259 2.02661 20.1047 1.88558 19.111C1.74996 18.1553 1.74998 16.9391 1.75 15.4254V15.4253V10.5723V10.5722C1.74998 9.05856 1.74996 7.84234 1.88558 6.8867C2.02661 5.89294 2.32721 5.07174 3.00932 4.42553C3.61291 3.85371 4.35533 3.5708 5.24135 3.42347C6.10892 3.27921 7.18295 3.2549 8.49721 3.25001C8.91142 3.24846 9.24845 3.58299 9.25 3.99721L8.5028 5.79816H13.4972L12.75 3.99721Z',
  d14: 'M13.5028 3.25001C13.0886 3.24846 12.7516 3.58299 12.75 3.99721L13.4972 5.79816H8.5028L9.25 3.99721C9.24845 3.58299 8.91142 3.24846 8.49721 3.25001C7.18295 3.2549 6.10892 3.27921 5.24135 3.42347C4.35533 3.5708 3.61291 3.85371 3.00932 4.42553C2.32721 5.07174 2.02661 5.89294 1.88558 6.8867C1.74996 7.84234 1.74998 9.05857 1.75 10.5723V15.4253C1.74998 16.939 1.74996 18.1553 1.88558 19.111C2.02661 20.1047 2.32721 20.9259 3.00932 21.5721C3.68571 22.2129 4.53566 22.4903 5.56479 22.6214C6.56529 22.7489 7.84201 22.7488 9.44678 22.7488H12.5532C12.8597 22.7488 13.1542 22.7488 13.4371 22.7479C12.0984 21.6016 11.25 19.8992 11.25 17.9985C11.25 14.5468 14.0482 11.7485 17.5 11.7485C18.4868 11.7485 19.4202 11.9772 20.25 12.3845V10.5723C20.25 9.0586 20.25 7.84235 20.1144 6.8867C19.9734 5.89294 19.6728 5.07174 18.9907 4.42553C18.3871 3.85371 17.6447 3.5708 16.7587 3.42347C15.8911 3.27921 14.8171 3.2549 13.5028 3.25001Z',
  d15: 'M10.9934 9.25C9.485 9.25 8.2962 10.5003 8.2962 12C8.2962 13.4997 9.485 14.75 10.9934 14.75C11.5339 14.75 12.0333 14.5895 12.4517 14.3145C12.7184 13.9499 13.0236 13.6152 13.3614 13.3165C13.5717 12.9237 13.6906 12.4744 13.6906 12C13.6906 10.5003 12.5018 9.25 10.9934 9.25Z',
  d16: 'M11.6547 15.7828C11.3932 16.4719 11.25 17.2192 11.25 18C11.25 18.6075 11.3367 19.1947 11.4983 19.75H8.21809C7.40729 19.75 6.75 19.0927 6.75 18.2819C6.75 17.9208 6.88358 17.5388 7.1819 17.2556C8.37654 16.1214 10.0496 15.6101 11.6547 15.7828Z',
  d17: 'M16 16.5L17.4983 18M17.4983 18L19 19.5M17.4983 18L19 16.5M17.4983 18L16 19.5M21.5 18C21.5 20.2091 19.7091 22 17.5 22C15.2909 22 13.5 20.2091 13.5 18C13.5 15.7909 15.2909 14 17.5 14C19.7091 14 21.5 15.7909 21.5 18Z',
  d18: 'M12 22H2.5L2.5 4H8.5M13.5 4H19.5V12',
  d19: 'M13 2H9L8 6H14L13 2Z',
  d20: 'M18 13.25C15.3766 13.25 13.25 15.3766 13.25 18C13.25 20.6234 15.3766 22.75 18 22.75C20.6234 22.75 22.75 20.6234 22.75 18C22.75 15.3766 20.6234 13.25 18 13.25ZM18.9694 15.9697L17.9983 16.9397L17.03 15.9703L15.9688 17.0304L16.9376 18.0003L15.9688 18.9703L17.03 20.0304L17.9983 19.061L18.9694 20.031L20.0294 18.9697L19.0589 18.0003L20.0294 17.031L18.9694 15.9697Z',
  d21: 'M8.50001 1.25C8.15586 1.25 7.85587 1.48422 7.7724 1.8181L7.41442 3.25H2C1.58579 3.25 1.25 3.58579 1.25 4V22C1.25 22.1989 1.32902 22.3897 1.46967 22.5303C1.61032 22.671 1.80109 22.75 2 22.75H13.9378C13.0266 21.97 12.3425 20.9324 11.9983 19.75H6.25V17.7056L6.45031 17.4898C7.87655 15.9533 10.1232 15.4039 12.0891 15.9641C12.9336 13.5119 15.261 11.75 18 11.75C18.6075 11.75 19.1947 11.8367 19.75 11.9983V4C19.75 3.80109 19.671 3.61032 19.5303 3.46967C19.3897 3.32902 19.1989 3.25 19 3.25H13.5856L13.2276 1.8181C13.1441 1.48422 12.8442 1.25 12.5 1.25H8.50001ZM12.5394 5.25H8.46059L9.08559 2.75H11.9144L12.5394 5.25ZM7.7962 12C7.7962 10.5003 8.985 9.25 10.4934 9.25C12.0018 9.25 13.1906 10.5003 13.1906 12C13.1906 13.4997 12.0018 14.75 10.4934 14.75C8.985 14.75 7.7962 13.4997 7.7962 12Z',
};

export const IconIdNotVerifiedStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="id-not-verified-stroke-rounded IconIdNotVerifiedStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        fill="var(--icon-fill)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconIdNotVerifiedDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="id-not-verified-duotone-rounded IconIdNotVerifiedDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconIdNotVerifiedTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="id-not-verified-twotone-rounded IconIdNotVerifiedTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconIdNotVerifiedSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="id-not-verified-solid-rounded IconIdNotVerifiedSolidRounded"
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

export const IconIdNotVerifiedBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="id-not-verified-bulk-rounded IconIdNotVerifiedBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
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

export const IconIdNotVerifiedStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="id-not-verified-stroke-sharp IconIdNotVerifiedStrokeSharp"
    >
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconIdNotVerifiedSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="id-not-verified-solid-sharp IconIdNotVerifiedSolidSharp"
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

export const iconPackOfIdNotVerified: TheIconSelfPack = {
  name: 'IdNotVerified',
  StrokeRounded: IconIdNotVerifiedStrokeRounded,
  DuotoneRounded: IconIdNotVerifiedDuotoneRounded,
  TwotoneRounded: IconIdNotVerifiedTwotoneRounded,
  SolidRounded: IconIdNotVerifiedSolidRounded,
  BulkRounded: IconIdNotVerifiedBulkRounded,
  StrokeSharp: IconIdNotVerifiedStrokeSharp,
  SolidSharp: IconIdNotVerifiedSolidSharp,
};