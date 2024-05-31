import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 12.5C14 13.6046 13.1046 14.5 12 14.5C10.8954 14.5 10 13.6046 10 12.5C10 11.3954 10.8954 10.5 12 10.5C13.1046 10.5 14 11.3954 14 12.5Z',
  d2: 'M14.9111 8.43439L15.8552 6.65198C16.5358 5.36682 16.8762 4.72424 16.5862 4.02175C16.2963 3.31926 15.7303 3.16307 14.5984 2.8507C13.7693 2.62192 12.8984 2.5 12 2.5C11.1016 2.5 10.2307 2.62192 9.40163 2.8507C8.26967 3.16307 7.70368 3.31926 7.41376 4.02175C7.12384 4.72424 7.46418 5.36682 8.14485 6.65198L9.08888 8.43439M16.9973 12.6649H19.0632C20.5386 12.6649 21.2763 12.6649 21.73 13.3019C22.1838 13.9388 22.0038 14.5449 21.6438 15.7571C21.1143 17.5399 20.1389 19.1197 18.853 20.3559C17.9893 21.1862 17.5575 21.6013 16.8282 21.4789C16.0989 21.3565 15.7574 20.7117 15.0743 19.4221L13.8658 17.1403M10.1342 17.1403L8.92566 19.4221C8.24263 20.7117 7.90112 21.3565 7.17181 21.4789C6.44249 21.6013 6.01067 21.1862 5.14702 20.3559C3.86105 19.1197 2.88572 17.5399 2.35623 15.7571C1.99622 14.5449 1.81621 13.9388 2.26995 13.3019C2.72369 12.6649 3.46138 12.6649 4.93677 12.6649H7.00267',
  d3: 'M12 2.5C12.8984 2.5 13.7693 2.62192 14.5984 2.8507C15.7303 3.16307 16.2963 3.31926 16.5862 4.02175C16.8762 4.72424 16.5358 5.36682 15.8552 6.65198L14.9111 8.43439L13.4051 11.0768C13.044 10.7201 12.5477 10.5 12 10.5C11.4523 10.5 10.956 10.7201 10.5949 11.0768L9.08888 8.43439L8.14485 6.65198C7.46418 5.36682 7.12384 4.72424 7.41376 4.02175C7.70368 3.31926 8.26967 3.16307 9.40163 2.8507C10.2307 2.62192 11.1016 2.5 12 2.5Z',
  d4: 'M10.0067 12.6649H4.93677C3.46138 12.6649 2.72369 12.6649 2.26995 13.3019C1.81621 13.9388 1.99622 14.5449 2.35623 15.7571C2.88572 17.5399 3.86105 19.1197 5.14702 20.3559C6.01067 21.1862 6.44249 21.6013 7.17181 21.4789C7.90112 21.3565 8.24263 20.7117 8.92566 19.4221L11.5561 14.4506C10.7171 14.2604 10.0784 13.5429 10.0067 12.6649Z',
  d5: 'M12.4439 14.4506L15.0743 19.4221C15.7574 20.7117 16.0989 21.3565 16.8282 21.4789C17.5575 21.6013 17.9893 21.1862 18.853 20.3559C20.1389 19.1197 21.1143 17.5399 21.6438 15.7571C22.0038 14.5449 22.1838 13.9388 21.73 13.3019C21.2763 12.6649 20.5386 12.6649 19.0632 12.6649H13.9933C13.9216 13.5429 13.2829 14.2604 12.4439 14.4506Z',
  d6: 'M9.25 12.5C9.25 10.9812 10.4812 9.75 12 9.75C13.5188 9.75 14.75 10.9812 14.75 12.5C14.75 14.0188 13.5188 15.25 12 15.25C10.4812 15.25 9.25 14.0188 9.25 12.5Z',
  d7: 'M9.20203 2.12772C10.0953 1.88122 11.0333 1.75 11.9999 1.75C12.9665 1.75 13.9045 1.88122 14.7978 2.12772C15.3124 2.26959 15.8633 2.42147 16.2538 2.62443C16.7161 2.86468 17.0613 3.20704 17.2794 3.73563C17.5106 4.29587 17.4702 4.82376 17.2974 5.3517C17.1432 5.82255 16.8621 6.35314 16.5454 6.95097L16.5454 6.95099L15.5005 8.76681C15.3955 8.94857 15.2193 9.07807 15.0145 9.12384C14.8097 9.16962 14.595 9.12749 14.4227 9.00769C13.7356 8.52996 12.9016 8.25 11.9999 8.25C11.0982 8.25 10.2642 8.52995 9.5771 9.00769C9.40479 9.12749 9.19017 9.16962 8.98536 9.12384C8.78055 9.07807 8.60428 8.94857 8.49938 8.7668L7.45441 6.95097C7.1377 6.35313 6.85661 5.82255 6.70247 5.3517C6.52964 4.82376 6.48918 4.29587 6.7204 3.73563C6.93855 3.20704 7.28371 2.86468 7.74599 2.62443C8.13653 2.42147 8.68741 2.26959 9.20203 2.12772Z',
  d8: 'M4.87314 11.9149L7.00258 11.9149C7.40734 11.9149 7.73908 12.2361 7.75219 12.6406C7.80825 14.3705 8.89914 15.8413 10.4287 16.4503C10.6275 16.5295 10.783 16.6897 10.8561 16.8908C10.9292 17.0918 10.913 17.3145 10.8115 17.5029L9.56013 19.8265L9.56012 19.8265C9.24295 20.4255 8.96084 20.9582 8.65865 21.3479C8.31921 21.7855 7.89946 22.1173 7.29584 22.2186C6.72829 22.3138 6.25425 22.1874 5.8117 21.9103C5.43773 21.6762 5.02003 21.2745 4.62716 20.8966C3.24798 19.5707 2.20379 17.8784 1.63719 15.9706C1.47232 15.4159 1.30065 14.8383 1.26067 14.3788C1.21396 13.8417 1.31592 13.3484 1.65901 12.8667C2.0263 12.3511 2.51884 12.1127 3.08223 12.0073C3.57708 11.9148 4.19017 11.9148 4.87314 11.9149H4.87314Z',
  d9: 'M20.9176 12.0073C21.481 12.1127 21.9735 12.3511 22.3408 12.8667C22.6839 13.3484 22.7859 13.8417 22.7392 14.3788C22.6992 14.8383 22.5275 15.4159 22.3626 15.9706C21.796 17.8784 20.7519 19.5707 19.3727 20.8966C18.9798 21.2745 18.5621 21.6762 18.1881 21.9103C17.7456 22.1874 17.2715 22.3138 16.704 22.2186C16.1004 22.1173 15.6806 21.7855 15.3412 21.3479C15.039 20.9582 14.7569 20.4255 14.4397 19.8265L13.1883 17.5029C13.0868 17.3145 13.0706 17.0918 13.1437 16.8908C13.2169 16.6897 13.3724 16.5295 13.5711 16.4503C15.1007 15.8413 16.1916 14.3705 16.2476 12.6406C16.2608 12.2361 16.5925 11.9149 16.9972 11.9149L19.1267 11.9149C19.8097 11.9148 20.4227 11.9148 20.9176 12.0073Z',
  d10: 'M14.032 7.93014L16.5418 3.52199C16.5418 3.52199 14.8827 2.00024 11.9993 2.00024C9.11585 2.00024 7.54182 3.52199 7.54182 3.52199L9.9974 7.91718M16.9745 13.0078L21.9264 13.0174C21.9264 13.0174 22.3923 15.2399 20.9804 17.7733C19.5685 20.3068 17.4777 21 17.4777 21L14.9712 16.5218M9.02879 16.5218L6.52227 21C6.52227 21 4.43152 20.3068 3.01963 17.7733C1.60774 15.2399 2.07365 13.0174 2.07365 13.0174L7.02547 13.0078',
  d11: 'M8.35155 2.59178C9.19266 2.16752 10.4226 1.75049 12.0008 1.75049C13.5782 1.75049 14.827 2.16704 15.6853 2.58807C16.114 2.79841 16.5032 3.00049 17.0523 3.46951C17.3103 3.70598 17.3704 4.0893 17.1972 4.39333L14.5266 9.08199C13.8205 8.55946 12.9468 8.25049 12.001 8.25049C11.0661 8.25049 10.2018 8.55232 9.50006 9.06386L6.88666 4.38804C6.72065 4.09102 6.77545 3.71951 7.02016 3.48302C7.38828 3.12727 7.93172 2.80354 8.35155 2.59178Z',
  d12: 'M7.75857 12.7566L2.06988 12.7677C1.71538 12.7684 1.40999 13.017 1.33725 13.3638C1.25206 13.7691 1.2333 14.5172 1.26633 14.9971C1.33241 15.9572 1.59241 17.2577 2.36231 18.6387C3.13264 20.0204 4.0929 20.9077 4.86877 21.4512C4.9344 21.4972 4.99454 21.5415 5.05322 21.5847C5.34096 21.7967 5.59355 21.9828 6.28559 22.2122C6.62701 22.3253 7.00074 22.1803 7.17643 21.8666L10.2515 16.3748C8.8505 15.7412 7.85447 14.3701 7.75857 12.7566Z',
  d13: 'M13.7515 16.3744L16.8268 21.8666C17.0024 22.1803 17.3762 22.3253 17.7176 22.2122C18.1845 22.0574 18.747 21.7226 19.1344 21.4512C19.9103 20.9077 20.8705 20.0204 21.6409 18.6387C22.4108 17.2577 22.6708 15.9572 22.7369 14.9971C22.7699 14.5172 22.7444 13.737 22.6662 13.3638C22.5934 13.017 22.2878 12.7684 21.9333 12.7677L16.2434 12.7566C16.1475 14.3697 15.1519 15.7406 13.7515 16.3744Z',
} as const;

export const IconNuclearPowerStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="nuclear-power-stroke-rounded IconNuclearPowerStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNuclearPowerDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="nuclear-power-duotone-rounded IconNuclearPowerDuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconNuclearPowerTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="nuclear-power-twotone-rounded IconNuclearPowerTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconNuclearPowerSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="nuclear-power-solid-rounded IconNuclearPowerSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNuclearPowerBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="nuclear-power-bulk-rounded IconNuclearPowerBulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconNuclearPowerStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="nuclear-power-stroke-sharp IconNuclearPowerStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNuclearPowerSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="nuclear-power-solid-sharp IconNuclearPowerSolidSharp"
    >
      <path 
        d={d.d6} 
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
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNuclearPower: TheIconSelfPack = {
  name: 'NuclearPower',
  StrokeRounded: IconNuclearPowerStrokeRounded,
  DuotoneRounded: IconNuclearPowerDuotoneRounded,
  TwotoneRounded: IconNuclearPowerTwotoneRounded,
  SolidRounded: IconNuclearPowerSolidRounded,
  BulkRounded: IconNuclearPowerBulkRounded,
  StrokeSharp: IconNuclearPowerStrokeSharp,
  SolidSharp: IconNuclearPowerSolidSharp,
};