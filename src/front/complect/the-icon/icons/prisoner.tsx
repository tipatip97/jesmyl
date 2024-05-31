import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 7C16.3288 6.37209 14.2513 6 12 6C9.74872 6 7.67122 6.37209 6 7',
  d2: 'M7 7V8.72517C7 10.5184 7.92149 12.1802 9.42752 13.1028L9.94202 13.418C11.2087 14.194 12.7913 14.194 14.058 13.418L14.5725 13.1028C16.0785 12.1802 17 10.5184 17 8.72517V7',
  d3: 'M7 8V5.95612C7 4.61118 7.92149 3.36487 9.42752 2.6729L9.94202 2.43651C11.2087 1.8545 12.7913 1.8545 14.058 2.43651L14.5725 2.6729C16.0785 3.36487 17 4.61118 17 5.95612V8',
  d4: 'M15 13L16 16M16 16L14.6312 17.1954C13.3773 18.2905 12.7504 18.838 12 18.838C11.2496 18.838 10.6227 18.2905 9.36884 17.1954L8 16M16 16L17.7341 16.578C18.7322 16.9107 19.2312 17.0771 19.6742 17.3342C20.1079 17.5859 20.5012 17.9014 20.841 18.2701C21.1881 18.6468 22 20 22 22M9 13L8 16M8 16L6.26586 16.578C5.2678 16.9107 4.76877 17.0771 4.32577 17.3342C3.89213 17.5859 3.49882 17.9014 3.15903 18.2701C2.81191 18.6468 2 20 2 22',
  d5: 'M9.94202 2.43651L9.42752 2.6729C7.92149 3.36487 7 4.61119 7 5.95612V6.66915C8.47081 6.24358 10.1785 6 12 6C13.8215 6 15.5292 6.24358 17 6.66915V5.95612C17 4.61119 16.0785 3.36487 14.5725 2.6729L14.058 2.43651C12.7913 1.8545 11.2087 1.8545 9.94202 2.43651Z',
  d6: 'M14.6312 17.1954L15.1379 16.7529L15.1379 16.7529C15.5588 16.3853 15.7692 16.2015 16.0299 16.1492C16.2907 16.0969 16.5557 16.1852 17.0859 16.362L17.7341 16.578L17.7341 16.578C18.7322 16.9107 19.2312 17.0771 19.6742 17.3342C20.1079 17.5859 20.5012 17.9014 20.841 18.2701C21.1881 18.6468 22 20 22 22H2C2 20 2.81191 18.6468 3.15903 18.2701C3.49882 17.9014 3.89213 17.5859 4.32577 17.3342C4.76877 17.0771 5.2678 16.9107 6.26586 16.578L6.9141 16.362C7.44425 16.1852 7.70933 16.0969 7.97005 16.1492C8.23078 16.2015 8.44123 16.3853 8.86214 16.7529L9.36884 17.1954C10.6227 18.2905 11.2496 18.838 12 18.838C12.7504 18.838 13.3773 18.2905 14.6312 17.1954Z',
  d7: 'M14.3721 1.755C12.9066 1.08166 11.0954 1.08167 9.62987 1.755L9.11537 1.9914C7.41868 2.77096 6.25098 4.24322 6.25098 5.95612V6.1166C6.0763 6.17446 5.90503 6.23493 5.73739 6.29792C5.34965 6.4436 5.15341 6.87604 5.2991 7.26379C5.44303 7.64688 5.86687 7.84302 6.25098 7.70718V8.72517C6.25098 10.4023 6.95626 11.9837 8.16221 13.0846L7.38413 15.4073L5.91797 15.8936L5.91795 15.8936C4.99195 16.2006 4.42173 16.3897 3.90905 16.6858C3.40787 16.9752 2.9533 17.3381 2.56059 17.7621C2.25094 18.0964 1.8035 18.8163 1.50777 19.8144C1.40532 20.1596 1.28351 20.57 1.25688 20.8941C1.22372 21.2976 1.30693 21.6828 1.58148 22.0482C1.87848 22.4434 2.27304 22.6155 2.68524 22.6885C3.0352 22.7504 3.46175 22.7503 3.90536 22.7502H20.0946C20.5382 22.7503 20.9648 22.7504 21.3148 22.6885C21.727 22.6155 22.1215 22.4434 22.4185 22.0482C22.6931 21.6828 22.7763 21.2976 22.7431 20.8941C22.7165 20.57 22.5947 20.1596 22.4922 19.8144C22.1965 18.8163 21.7491 18.0964 21.4394 17.7621C21.0467 17.3381 20.5921 16.9752 20.091 16.6858C19.5783 16.3897 19.008 16.2006 18.082 15.8936L16.6159 15.4073L15.8383 13.086C17.0451 11.985 17.751 10.403 17.751 8.72517V7.70704C18.1352 7.84316 18.5593 7.64701 18.7033 7.26379C18.8489 6.87604 18.6527 6.4436 18.265 6.29792C18.0972 6.23489 17.9258 6.17437 17.751 6.11647V5.95612C17.751 4.24322 16.5833 2.77096 14.8866 1.9914L14.3721 1.755ZM14.5536 13.9945L14.4507 14.0575C12.9436 14.9808 11.0584 14.9808 9.5512 14.0575L9.44677 13.9935L8.85376 15.7637L9.8515 16.6307C10.4964 17.1912 10.9276 17.564 11.2881 17.8051C11.6309 18.0344 11.8298 18.0882 12 18.0882C12.1702 18.0882 12.3691 18.0344 12.7119 17.8051C13.0724 17.564 13.5036 17.1912 14.1485 16.6307L15.1462 15.7637L14.5536 13.9945ZM7.75098 8.72517V7.24458C8.9892 6.93796 10.3895 6.75973 11.8783 6.75039C11.9192 6.75013 11.9602 6.75 12.0012 6.75C13.5373 6.75 14.9803 6.92978 16.251 7.24436V8.72517C16.251 10.2623 15.461 11.6795 14.1817 12.4633L13.6672 12.7785C12.6409 13.4072 11.3611 13.4072 10.3348 12.7785L9.82029 12.4633C8.54095 11.6795 7.75098 10.2623 7.75098 8.72517Z',
  d8: 'M9.22337 12.2887C9.61829 12.4197 9.83172 12.8444 9.70008 13.2374L8.85376 15.7637L9.8515 16.6307C10.4964 17.1912 10.9276 17.564 11.2881 17.8051C11.6309 18.0344 11.8298 18.0882 12 18.0882C12.1702 18.0882 12.3691 18.0344 12.7119 17.8051C13.0724 17.564 13.5036 17.1912 14.1485 16.6307L15.1462 15.7637L14.2999 13.2374C14.1683 12.8444 14.3817 12.4197 14.7766 12.2887C15.1716 12.1577 15.5984 12.3701 15.7301 12.763L16.6159 15.4073L18.082 15.8936C19.008 16.2006 19.5783 16.3897 20.091 16.6858C20.5921 16.9752 21.0467 17.3381 21.4394 17.7621C21.7491 18.0964 22.1965 18.8163 22.4922 19.8144C22.5947 20.1596 22.7165 20.57 22.7431 20.8941C22.7763 21.2976 22.6931 21.6828 22.4185 22.0482C22.1215 22.4434 21.727 22.6155 21.3148 22.6885C20.9648 22.7504 20.5382 22.7503 20.0946 22.7502H3.90536C3.46175 22.7503 3.0352 22.7504 2.68524 22.6885C2.27304 22.6155 1.87848 22.4434 1.58148 22.0482C1.30693 21.6828 1.22372 21.2976 1.25688 20.8941C1.28351 20.57 1.40532 20.1596 1.50777 19.8144C1.8035 18.8163 2.25094 18.0964 2.56059 17.7621C2.9533 17.3381 3.40787 16.9752 3.90905 16.6858C4.42173 16.3897 4.99196 16.2006 5.91797 15.8936L5.91798 15.8936L7.38413 15.4073L8.26995 12.763C8.40159 12.3701 8.82845 12.1577 9.22337 12.2887Z',
  d9: 'M7.00098 6.25C7.41519 6.25 7.75098 6.58579 7.75098 7V8.72517C7.75098 10.2623 8.54095 11.6795 9.82029 12.4633L10.3348 12.7785C11.3611 13.4072 12.6409 13.4072 13.6672 12.7785L14.1817 12.4633C15.461 11.6795 16.251 10.2623 16.251 8.72517V7C16.251 6.58579 16.5868 6.25 17.001 6.25C17.4152 6.25 17.751 6.58579 17.751 7V8.72517C17.751 10.7745 16.698 12.6808 14.9652 13.7423L14.4507 14.0575C12.9436 14.9808 11.0584 14.9808 9.5512 14.0575L9.03671 13.7423C7.30399 12.6808 6.25098 10.7745 6.25098 8.72517V7C6.25098 6.58579 6.58676 6.25 7.00098 6.25Z',
  d10: 'M14.3721 1.755C12.9066 1.08166 11.0954 1.08167 9.62987 1.755L9.11537 1.9914C7.41868 2.77096 6.25098 4.24322 6.25098 5.95612V6.1166C6.0763 6.17446 5.90503 6.23493 5.73739 6.29792C5.34965 6.4436 5.15341 6.87604 5.2991 7.26379C5.44478 7.65153 5.87722 7.84777 6.26497 7.70208C6.54731 7.596 6.90208 7.48022 7.20947 7.38979C8.5746 6.99472 10.1681 6.76112 11.8783 6.75039C11.9192 6.75013 11.9602 6.75 12.0012 6.75C14.1744 6.75 16.1611 7.10982 17.7374 7.70208C18.1251 7.84777 18.5576 7.65153 18.7033 7.26379C18.8489 6.87604 18.6527 6.4436 18.265 6.29792C18.0972 6.23489 17.9258 6.17437 17.751 6.11647V5.95612C17.751 4.24322 16.5833 2.77096 14.8866 1.9914L14.3721 1.755Z',
  d11: 'M18.9709 7H4.99512',
  d12: 'M16.9739 7V9C16.9739 11.7614 14.7392 14 11.9826 14C9.22592 14 6.99121 11.7614 6.99121 9V7',
  d13: 'M6.99121 8V5.95612C6.99121 4.61118 7.91111 3.36487 9.41454 2.6729L9.92815 2.43651C11.1926 1.8545 12.7725 1.8545 14.037 2.43651L14.5506 2.6729C16.054 3.36487 16.9739 4.61118 16.9739 5.95612V8',
  d14: 'M8.98808 13.0014V16.0454M8.98808 16.0454L11.9818 18.0086L14.9741 15.9996M8.98808 16.0454L2.3279 17.9066C2.11213 17.9669 1.96289 18.1638 1.96289 18.3882V22.0014M14.9741 15.9996V12.9961M14.9741 15.9996L21.6005 17.9047C21.8145 17.9662 21.9619 18.1623 21.9619 18.3853V22.0014',
  d15: 'M7.75 7V9C7.75 11.3472 9.65279 13.25 12 13.25C14.3472 13.25 16.25 11.3472 16.25 9V7H17.75V9C17.75 12.1756 15.1756 14.75 12 14.75C8.82436 14.75 6.25 12.1756 6.25 9V7H7.75Z',
  d16: 'M5 6.25V7.75H19V6.25H17.75V5.95612C17.75 4.24322 16.5823 2.77096 14.8856 1.9914L14.3711 1.755C12.9056 1.08166 11.0944 1.08167 9.62889 1.755L9.11439 1.9914C7.4177 2.77096 6.25 4.24322 6.25 5.95612V6.25H5Z',
  d17: 'M9.75 15.5986L12 17.0986L14.25 15.5986V13H15.75V15.4343L22.206 17.2789C22.528 17.3709 22.75 17.6651 22.75 18V22C22.75 22.4142 22.4142 22.75 22 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V18C1.25 17.6651 1.47198 17.3709 1.79396 17.2789L8.25 15.4343V13H9.75V15.5986Z',
} as const;

export const IconPrisonerStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="prisoner-stroke-rounded IconPrisonerStrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPrisonerDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="prisoner-duotone-rounded IconPrisonerDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconPrisonerTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="prisoner-twotone-rounded IconPrisonerTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPrisonerSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="prisoner-solid-rounded IconPrisonerSolidRounded"
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

export const IconPrisonerBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="prisoner-bulk-rounded IconPrisonerBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPrisonerStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="prisoner-stroke-sharp IconPrisonerStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPrisonerSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="prisoner-solid-sharp IconPrisonerSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPrisoner: TheIconSelfPack = {
  name: 'Prisoner',
  StrokeRounded: IconPrisonerStrokeRounded,
  DuotoneRounded: IconPrisonerDuotoneRounded,
  TwotoneRounded: IconPrisonerTwotoneRounded,
  SolidRounded: IconPrisonerSolidRounded,
  BulkRounded: IconPrisonerBulkRounded,
  StrokeSharp: IconPrisonerStrokeSharp,
  SolidSharp: IconPrisonerSolidSharp,
};