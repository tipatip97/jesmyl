import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.0066 10.005V6.5038C19.0066 4.01763 16.9837 2.0022 14.4884 2.0022C11.9931 2.0022 9.97021 4.01763 9.97021 6.5038V10.005',
  d2: 'M14.4883 9.00468V7.50415',
  d3: 'M2.16983 11.1284L6.65262 16.9028C6.69107 16.9524 6.713 17.0126 6.71536 17.0752L6.80516 19.4595C6.83637 20.2883 7.41257 20.9973 8.21978 21.2001L8.46733 21.2623C12.449 22.2627 16.62 22.2419 20.5914 21.2019C21.3688 20.9983 21.9167 20.306 21.934 19.5053L21.9944 16.7138C22.0799 12.7813 20.8067 11.9341 20.1838 11.3631C18.7424 10.0415 16.5971 9.7237 14.5372 9.7237C10.9647 9.7237 9.24485 10.7393 8.4464 11.4299C8.27109 11.5816 8.01814 11.6179 7.81832 11.5002L3.84401 9.15815C3.49843 8.9545 3.05501 9.03637 2.80562 9.34987L2.1757 10.1417C1.94625 10.4301 1.94382 10.8373 2.16983 11.1284Z',
  d4: 'M4.32238 9.34852L7.54206 11.3236C7.86181 11.5197 8.02169 11.6178 8.17825 11.6093C8.3348 11.6008 8.50785 11.467 8.85394 11.1994C10.304 10.0784 12.3419 9.70517 14.3926 9.70517C17.754 9.70517 21.0808 10.7081 21.8412 14.3631C22.1111 15.6607 21.9575 17.0652 21.9575 18.3854C21.9575 19.4853 21.9529 20.6406 20.7121 21.132C17.7218 22.3164 10.9257 22.2619 8.07299 21.132C6.83228 20.6406 6.82768 19.4853 6.82768 18.3854C6.82768 18.1193 6.81876 17.8498 6.80854 17.5784C6.79528 17.2266 6.78865 17.0508 6.73007 16.8944C6.67149 16.738 6.56249 16.6033 6.34449 16.3339L2.45085 11.5224C2.2412 11.2633 2.13637 11.1338 2.07937 10.996C1.97653 10.7473 1.97481 10.4678 2.07461 10.2179C2.12991 10.0793 2.23314 9.94851 2.43961 9.68683C2.66319 9.40346 2.77499 9.26177 2.90573 9.17332C3.1418 9.01362 3.43337 8.96123 3.70949 9.0289C3.86242 9.06637 4.01574 9.16042 4.32238 9.34852Z',
  d5: 'M19.001 10V6.5C19.001 4.01472 16.9863 2 14.501 2C12.0157 2 10.001 4.01472 10.001 6.5V10',
  d6: 'M2.17081 11.1286L6.6536 16.903C6.69205 16.9526 6.71398 17.0128 6.71634 17.0754L6.80614 19.4597C6.83735 20.2885 7.41355 20.9975 8.22076 21.2003L8.46831 21.2625C12.45 22.2629 16.621 22.2421 20.5924 21.2021C21.3698 20.9985 21.9177 20.3062 21.935 19.5055L21.9954 16.714C22.0809 12.7815 20.8077 11.9343 20.1848 11.3633C18.7434 10.0417 16.5981 9.72394 14.5382 9.72394C10.9657 9.72394 9.24583 10.7395 8.44738 11.4301C8.27207 11.5818 8.01912 11.6181 7.8193 11.5004L3.84499 9.15839C3.49941 8.95474 3.05599 9.03661 2.8066 9.35011L2.17668 10.1419C1.94723 10.4303 1.9448 10.8375 2.17081 11.1286Z',
  d7: 'M14.501 9V7.5',
  d8: 'M18.9835 9.99529V6.49778C18.9835 4.01426 16.9683 2.00098 14.4825 2.00098C11.9966 2.00098 9.98145 4.01426 9.98145 6.49778V9.99529',
  d9: 'M14.4824 8.996V7.49707',
  d10: 'M2.25188 11.279L6.70295 16.8223C6.7414 16.8718 6.76334 16.932 6.7657 16.9945L6.87754 19.4753C6.90877 20.3036 7.31056 20.9851 8.11794 21.1878L8.36555 21.25C12.3481 22.2496 16.588 22.2486 20.4051 21.25C21.1826 21.0465 21.9165 20.2754 21.9338 19.4753L21.9942 16.6858C22.0797 12.7561 20.7077 11.9284 20.0847 11.3577C18.6429 10.0371 16.4972 9.71954 14.4368 9.71954C10.8635 9.71954 9.29751 10.7582 8.49888 11.4484C8.32353 11.5999 8.06178 11.6832 7.86191 11.5656L3.85318 9.08427C3.50752 8.88077 2.95201 9.0327 2.70256 9.34598L2.12112 10.1891C1.89161 10.4773 2.02582 10.9881 2.25188 11.279Z',
  d11: 'M9 6.75C9 3.71243 11.4624 1.25 14.5 1.25C17.5376 1.25 20 3.71243 20 6.75V10.25C20 10.8023 19.5523 11.25 19 11.25C18.4477 11.25 18 10.8023 18 10.25V6.75C18 4.817 16.433 3.25 14.5 3.25C12.567 3.25 11 4.817 11 6.75V10.25C11 10.8023 10.5523 11.25 10 11.25C9.44772 11.25 9 10.8023 9 10.25V6.75Z',
  d12: 'M14.5 6.5C15.0523 6.5 15.5 6.94772 15.5 7.5V9C15.5 9.55228 15.0523 10 14.5 10C13.9477 10 13.5 9.55228 13.5 9V7.5C13.5 6.94772 13.9477 6.5 14.5 6.5Z',
  d13: 'M2.4845 8.55212C2.89555 8.27406 3.40453 8.18222 3.88703 8.30046C4.15837 8.36695 4.41046 8.52239 4.65104 8.67074L8.13275 10.8052C8.13275 10.8052 8.30627 10.6741 8.39425 10.6061C10.0393 9.33436 12.2788 8.95518 14.3916 8.95518C16.1317 8.95518 17.9415 9.21228 19.4401 9.99955C20.9722 10.8044 22.1457 12.1491 22.5744 14.2103C22.7253 14.9356 22.7543 15.6725 22.7495 16.371C22.7473 16.6997 22.716 18.1097 22.7065 18.4261V18.4262C22.7066 18.9438 22.7068 19.6118 22.5133 20.2157C22.2954 20.8961 21.8363 21.4931 20.9873 21.8293C19.3573 22.4749 16.7953 22.7568 14.3379 22.7499C11.8809 22.743 9.35502 22.4469 7.79583 21.8293C6.94683 21.4931 6.4878 20.8961 6.26984 20.2157C6.07638 19.6117 6.07656 18.9438 6.07669 18.4261C6.07669 18.1753 6.06829 17.8772 6.05809 17.6066C6.04601 17.2019 5.85466 16.904 5.7605 16.8057L1.82456 11.9421C1.65848 11.7377 1.48556 11.525 1.38534 11.2826C1.20778 10.8534 1.20483 10.3712 1.3771 9.93974C1.47434 9.69622 1.73171 9.37091 1.89528 9.16449C2.07061 8.94124 2.25342 8.70845 2.4845 8.55212Z',
  d14: 'M18 9.42164C18.5016 9.57055 18.9852 9.76068 19.4401 9.99966C19.6316 10.1003 19.8175 10.2093 19.9971 10.3271C19.999 10.3017 20 10.276 20 10.2501V6.75012C20 3.71255 17.5376 1.25012 14.5 1.25012C11.4624 1.25012 9 3.71255 9 6.75012V10.1926C9.61545 9.82222 10.2921 9.55185 11 9.36009V6.75012C11 4.81712 12.567 3.25012 14.5 3.25012C16.433 3.25012 18 4.81712 18 6.75012V9.42164ZM13.5 8.97893C13.7984 8.9627 14.0962 8.95529 14.3916 8.95529C14.7591 8.95529 15.1298 8.96676 15.5 8.99228V7.50012C15.5 6.94783 15.0523 6.50012 14.5 6.50012C13.9477 6.50012 13.5 6.94783 13.5 7.50012V8.97893Z',
  d15: 'M19.0507 10.3556V6.44756C19.0507 3.99097 17.038 1.99951 14.5551 1.99951C12.0723 1.99951 10.0596 3.99097 10.0596 6.44756V10.2095',
  d16: 'M14.4561 9.63463V7.65771',
  d17: 'M2.0221 11.1945L6.79999 16.882C6.8384 16.931 6.96269 17.1 6.96504 17.1619V21.9004C6.96504 21.9557 7.00981 22.0004 7.06504 22.0004H21.8552C21.9102 22.0004 21.9548 21.9561 21.9552 21.9011L22.0005 15.1518C22.0005 13.6392 21.8655 12.8887 20.4586 11.6125C19.0517 10.3363 16.4681 9.88324 14.4104 9.85654C10.7792 9.80943 8.48673 11.2446 8.15045 11.5324C7.97531 11.6823 7.47939 11.3671 7.27977 11.2508L3.46189 9.146L2.01867 11.0724C1.99125 11.109 1.99266 11.1594 2.0221 11.1945Z',
  d18: 'M9.25049 6.5C9.25049 3.60051 11.601 1.25 14.5005 1.25C17.4 1.25 19.7505 3.60051 19.7505 6.5V10.5H18.2505V6.5C18.2505 4.42893 16.5716 2.75 14.5005 2.75C12.4294 2.75 10.7505 4.42893 10.7505 6.5V10H9.25049V6.5Z',
  d19: 'M2.9 8.55006C3.12488 8.25022 3.53659 8.16242 3.86423 8.34444L7.78826 10.5245C7.85438 10.5612 7.90553 10.5896 7.94983 10.6133L7.97832 10.5974C8.03159 10.5675 8.09296 10.5319 8.17057 10.4868C9.86159 9.50383 12.4775 8.95525 14.3922 8.95525C16.1492 8.95525 18.1903 9.29062 19.821 10.1971C21.487 11.1232 22.75 12.6713 22.75 15.0001V22.0001C22.75 22.4143 22.4142 22.7501 22 22.7501H7C6.58579 22.7501 6.25 22.4143 6.25 22.0001V17.7242C6.25 17.5353 6.24961 17.4302 6.24425 17.3511C6.24187 17.3159 6.23906 17.2965 6.23721 17.2865C6.23634 17.2818 6.23542 17.2782 6.23542 17.2782L6.23507 17.277L6.23458 17.2759C6.23458 17.2759 6.233 17.2725 6.23062 17.2683C6.22562 17.2594 6.21538 17.2428 6.19468 17.2142C6.14817 17.15 6.0812 17.069 5.96028 16.9239L1.42384 11.4802C1.20129 11.2132 1.19142 10.8282 1.4 10.5501L2.9 8.55006Z',
  d20: 'M15.2505 7.5V9.5H13.7505V7.5H15.2505Z',
} as const;

export const IconTeaPodStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tea-pod-stroke-rounded IconTeaPodStrokeRounded"
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

export const IconTeaPodDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tea-pod-duotone-rounded IconTeaPodDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconTeaPodTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tea-pod-twotone-rounded IconTeaPodTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTeaPodSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tea-pod-solid-rounded IconTeaPodSolidRounded"
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
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTeaPodBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tea-pod-bulk-rounded IconTeaPodBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTeaPodStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tea-pod-stroke-sharp IconTeaPodStrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTeaPodSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tea-pod-solid-sharp IconTeaPodSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTeaPod: TheIconSelfPack = {
  name: 'TeaPod',
  StrokeRounded: IconTeaPodStrokeRounded,
  DuotoneRounded: IconTeaPodDuotoneRounded,
  TwotoneRounded: IconTeaPodTwotoneRounded,
  SolidRounded: IconTeaPodSolidRounded,
  BulkRounded: IconTeaPodBulkRounded,
  StrokeSharp: IconTeaPodStrokeSharp,
  SolidSharp: IconTeaPodSolidSharp,
};