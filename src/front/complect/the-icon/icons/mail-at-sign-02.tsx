import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 7.5L9.94202 9.23943C11.6572 10.2535 12.3428 10.2535 14.058 9.23943L17 7.5',
  d2: 'M10.5 19.5C10.0337 19.4939 9.56682 19.485 9.09883 19.4732C5.95033 19.3941 4.37608 19.3545 3.24496 18.2184C2.11383 17.0823 2.08114 15.5487 2.01577 12.4814C1.99475 11.4951 1.99474 10.5147 2.01576 9.52843C2.08114 6.46113 2.11382 4.92748 3.24495 3.79139C4.37608 2.6553 5.95033 2.61573 9.09882 2.53658C11.0393 2.4878 12.9607 2.48781 14.9012 2.53659C18.0497 2.61574 19.6239 2.65532 20.755 3.79141C21.8862 4.92749 21.9189 6.46114 21.9842 9.52844C21.9939 9.98251 21.9991 10.1965 21.9999 10.5',
  d3: 'M19 17C19 17.8284 18.3284 18.5 17.5 18.5C16.6716 18.5 16 17.8284 16 17C16 16.1716 16.6716 15.5 17.5 15.5C18.3284 15.5 19 16.1716 19 17ZM19 17V17.5C19 18.3284 19.6716 19 20.5 19C21.3284 19 22 18.3284 22 17.5V17C22 14.5147 19.9853 12.5 17.5 12.5C15.0147 12.5 13 14.5147 13 17C13 19.4853 15.0147 21.5 17.5 21.5',
  d4: 'M2.01577 12.4756C2.08114 15.5412 2.11383 17.0739 3.24496 18.2094C4.37608 19.3448 5.95033 19.3843 9.09883 19.4634C11.0393 19.5122 12.9607 19.5122 14.9012 19.4634C18.0497 19.3843 19.6239 19.3448 20.7551 18.2094C21.8862 17.0739 21.9189 15.5412 21.9842 12.4756C22.0053 11.4899 22.0053 10.5101 21.9842 9.52439C21.9189 6.45886 21.8862 4.92609 20.7551 3.79066C19.6239 2.65523 18.0497 2.61568 14.9012 2.53657C12.9607 2.48781 11.0393 2.48781 9.09882 2.53656C5.95033 2.61566 4.37608 2.65521 3.24495 3.79065C2.11382 4.92608 2.08114 6.45885 2.01576 9.52438C1.99474 10.5101 1.99475 11.4899 2.01577 12.4756Z',
  d5: 'M8.95499 1.6618C10.908 1.61273 12.842 1.61273 14.795 1.66181L14.8532 1.66327C16.378 1.70156 17.605 1.73237 18.5883 1.90362C19.6178 2.08291 20.4545 2.42679 21.1614 3.13634C21.8653 3.84292 22.2074 4.66761 22.3832 5.68042C22.5507 6.64479 22.5762 7.84183 22.6078 9.32467L22.6091 9.3834C22.6184 9.82148 22.6236 10.2584 22.6248 10.6952C22.6264 11.3186 22.6272 11.6303 22.4635 11.7142C22.2997 11.798 22.0253 11.5993 21.4764 11.2018C20.3238 10.3671 18.9069 9.875 17.375 9.875C13.509 9.875 10.375 13.009 10.375 16.875C10.375 17.693 10.5153 18.4781 10.7731 19.2078C10.9285 19.6476 11.0063 19.8675 10.9148 19.9948C10.8234 20.122 10.6067 20.1189 10.1733 20.1125C9.76778 20.1065 9.3618 20.0984 8.95499 20.0882L8.89677 20.0867C7.37197 20.0485 6.14501 20.0176 5.1617 19.8464C4.1322 19.6671 3.29548 19.3232 2.58862 18.6137C1.88472 17.9071 1.54264 17.0824 1.36676 16.0696C1.19929 15.1052 1.17379 13.9082 1.14219 12.4254L1.14094 12.3666C1.11969 11.3703 1.11969 10.3797 1.14093 9.38339L1.14219 9.32465C1.17378 7.8418 1.19929 6.64478 1.36676 5.6804C1.54264 4.6676 1.88471 3.8429 2.58862 3.13632C3.29548 2.42677 4.1322 2.08289 5.1617 1.9036C6.14502 1.73235 7.372 1.70155 8.89682 1.66326L8.95499 1.6618ZM7.25682 6.01467C6.90027 5.80386 6.44033 5.92201 6.22952 6.27857C6.01871 6.63513 6.13686 7.09507 6.49341 7.30588L9.43543 9.04531C10.3063 9.56019 11.0577 9.91027 11.8751 9.91027C12.6925 9.91027 13.444 9.56019 14.3148 9.04531L17.2568 7.30588C17.6134 7.09507 17.7315 6.63513 17.5207 6.27857C17.3099 5.92201 16.85 5.80386 16.4934 6.01467L13.5514 7.7541C12.707 8.25332 12.2581 8.41027 11.8751 8.41027C11.4921 8.41027 11.0432 8.25332 10.1988 7.7541L7.25682 6.01467Z',
  d6: 'M17.375 13.375C15.442 13.375 13.875 14.942 13.875 16.875C13.875 18.808 15.442 20.375 17.375 20.375C17.9273 20.375 18.375 20.8227 18.375 21.375C18.375 21.9273 17.9273 22.375 17.375 22.375C14.3374 22.375 11.875 19.9126 11.875 16.875C11.875 13.8374 14.3374 11.375 17.375 11.375C20.4126 11.375 22.875 13.8374 22.875 16.875V17.375C22.875 18.7557 21.7557 19.875 20.375 19.875C19.6546 19.875 19.0053 19.5703 18.5491 19.0827C18.1991 19.2693 17.7994 19.375 17.375 19.375C15.9943 19.375 14.875 18.2557 14.875 16.875C14.875 15.4943 15.9943 14.375 17.375 14.375C18.7557 14.375 19.875 15.4943 19.875 16.875V17.375C19.875 17.6511 20.0989 17.875 20.375 17.875C20.6511 17.875 20.875 17.6511 20.875 17.375V16.875C20.875 14.942 19.308 13.375 17.375 13.375ZM17.875 16.875C17.875 16.5989 17.6511 16.375 17.375 16.375C17.0989 16.375 16.875 16.5989 16.875 16.875C16.875 17.1511 17.0989 17.375 17.375 17.375C17.6511 17.375 17.875 17.1511 17.875 16.875Z',
  d7: 'M14.795 1.66181C12.842 1.61273 10.908 1.61273 8.95499 1.6618L8.89682 1.66326C7.372 1.70155 6.14502 1.73235 5.1617 1.9036C4.1322 2.08289 3.29548 2.42677 2.58862 3.13632C1.88471 3.8429 1.54264 4.6676 1.36676 5.6804C1.19929 6.64478 1.17378 7.8418 1.14219 9.32465L1.14093 9.38339C1.11969 10.3797 1.11969 11.3703 1.14094 12.3666L1.14219 12.4254C1.17379 13.9082 1.19929 15.1052 1.36676 16.0696C1.54264 17.0824 1.88472 17.9071 2.58862 18.6137C3.29548 19.3232 4.1322 19.6671 5.1617 19.8464C6.14501 20.0176 7.37197 20.0485 8.89677 20.0867L8.95499 20.0882C9.3618 20.0984 9.76778 20.1065 10.1733 20.1125C10.6067 20.1189 10.8234 20.122 10.9148 19.9948C11.0063 19.8675 10.9285 19.6476 10.7731 19.2078C10.5153 18.4781 10.375 17.693 10.375 16.875C10.375 13.009 13.509 9.875 17.375 9.875C18.9069 9.875 20.3238 10.3671 21.4764 11.2018C22.0253 11.5993 22.2997 11.798 22.4635 11.7142C22.6272 11.6303 22.6264 11.3186 22.6248 10.6952C22.6236 10.2584 22.6184 9.82148 22.6091 9.3834L22.6078 9.32467C22.5762 7.84183 22.5507 6.64479 22.3832 5.68042C22.2074 4.66761 21.8653 3.84292 21.1614 3.13634C20.4545 2.42679 19.6178 2.08291 18.5883 1.90362C17.605 1.73237 16.378 1.70156 14.8532 1.66327L14.795 1.66181Z',
  d8: 'M6.01435 6.15137C6.29543 5.67597 6.90869 5.51843 7.3841 5.79951L10.3261 7.53894C11.1664 8.03578 11.5648 8.16031 11.8752 8.16031C12.1855 8.16031 12.5839 8.03578 13.4242 7.53894L16.3662 5.79951C16.8416 5.51843 17.4549 5.67597 17.736 6.15137C18.017 6.62678 17.8595 7.24004 17.3841 7.52112L14.4421 9.26055C13.5666 9.77819 12.7648 10.1603 11.8752 10.1603C10.9855 10.1603 10.1838 9.77819 9.30823 9.26055L6.36622 7.52112C5.89081 7.24004 5.73328 6.62678 6.01435 6.15137Z',
  d9: 'M22 11V2.5H2V19.5H10',
  d10: 'M6 7L12 11L18 7',
  d11: 'M1.25 2.5C1.25 2.08579 1.58579 1.75 2 1.75H22C22.4142 1.75 22.75 2.08579 22.75 2.5V14.1668C21.5676 12.5501 19.6564 11.5 17.5 11.5C13.9101 11.5 11 14.4101 11 18C11 18.7909 11.1413 19.5489 11.4 20.25H2C1.58579 20.25 1.25 19.9142 1.25 19.5V2.5ZM6.41603 5.37598L5.58398 6.62405L12 10.9014L18.416 6.62405L17.584 5.37598L12 9.09863L6.41603 5.37598Z',
  d12: 'M17.5 14.6591C15.6549 14.6591 14.1591 16.1549 14.1591 18C14.1591 19.8451 15.6549 21.3409 17.5 21.3409V23.25C14.6005 23.25 12.25 20.8995 12.25 18C12.25 15.1005 14.6005 12.75 17.5 12.75C20.3995 12.75 22.75 15.1005 22.75 18V18.4773C22.75 19.7952 21.6816 20.8636 20.3636 20.8636C19.676 20.8636 19.0562 20.5728 18.6208 20.1073C18.2866 20.2854 17.9051 20.3864 17.5 20.3864C16.182 20.3864 15.1136 19.318 15.1136 18C15.1136 16.682 16.182 15.6136 17.5 15.6136C18.818 15.6136 19.8864 16.682 19.8864 18V18.4773C19.8864 18.7409 20.1 18.9545 20.3636 18.9545C20.6272 18.9545 20.8409 18.7409 20.8409 18.4773V18C20.8409 16.1549 19.3451 14.6591 17.5 14.6591ZM17.9773 18C17.9773 17.7364 17.7636 17.5227 17.5 17.5227C17.2364 17.5227 17.0227 17.7364 17.0227 18C17.0227 18.2636 17.2364 18.4773 17.5 18.4773C17.7636 18.4773 17.9773 18.2636 17.9773 18Z',
} as const;

export const IconMailAtSign02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-at-sign-02-stroke-rounded IconMailAtSign02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMailAtSign02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-at-sign-02-duotone-rounded IconMailAtSign02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
        strokeLinejoin="round" 
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

export const IconMailAtSign02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-at-sign-02-twotone-rounded IconMailAtSign02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailAtSign02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-at-sign-02-solid-rounded IconMailAtSign02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailAtSign02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-at-sign-02-bulk-rounded IconMailAtSign02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailAtSign02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-at-sign-02-stroke-sharp IconMailAtSign02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailAtSign02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-at-sign-02-solid-sharp IconMailAtSign02SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfMailAtSign02: TheIconSelfPack = {
  name: 'MailAtSign02',
  StrokeRounded: IconMailAtSign02StrokeRounded,
  DuotoneRounded: IconMailAtSign02DuotoneRounded,
  TwotoneRounded: IconMailAtSign02TwotoneRounded,
  SolidRounded: IconMailAtSign02SolidRounded,
  BulkRounded: IconMailAtSign02BulkRounded,
  StrokeSharp: IconMailAtSign02StrokeSharp,
  SolidSharp: IconMailAtSign02SolidSharp,
};