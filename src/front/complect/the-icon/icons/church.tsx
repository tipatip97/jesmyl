import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 2V6M14 4L10 4',
  d2: 'M8.50122 8.79902L12 6L15.4988 8.79902C16.7171 9.77367 17 10.3623 17 11.9225V22H7V11.9225C7 10.3623 7.28291 9.77367 8.50122 8.79902Z',
  d3: 'M17 12L18.7889 12.8944C19.8647 13.4323 20.4026 13.7013 20.7013 14.1846C21 14.6679 21 15.2693 21 16.4721V20C21 20.9428 21 21.4142 20.7071 21.7071C20.4142 22 19.9428 22 19 22H17',
  d4: 'M7 12L5.21114 12.8944C4.13531 13.4323 3.5974 13.7013 3.2987 14.1846C3 14.6679 3 15.2693 3 16.4721V20C3 20.9428 3 21.4142 3.29289 21.7071C3.58579 22 4.05719 22 5 22H7',
  d5: 'M10 22V18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18V22',
  d6: 'M12.008 11L11.999 11',
  d7: 'M12 6L8.50122 8.79902C7.28291 9.77367 7 10.3623 7 11.9225V22H10V18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18V22H17V11.9225C17 10.3623 16.7171 9.77367 15.4988 8.79902L12 6Z',
  d8: 'M20.1573 12.2377C20.6671 12.4926 21.1 12.709 21.4392 12.9249C21.8004 13.1547 22.1096 13.4162 22.3394 13.788C22.5691 14.1597 22.6647 14.5533 22.7087 14.9791C22.7501 15.379 22.7501 15.8629 22.7501 16.4329L22.7501 20.0424C22.7501 20.4752 22.7502 20.872 22.7068 21.1949C22.659 21.5503 22.5465 21.9261 22.2375 22.2351C21.9285 22.5441 21.5527 22.6566 21.1973 22.7044C20.8745 22.7478 20.4776 22.7477 20.0448 22.7477L19.4049 22.7477C19.2793 22.7477 19.2165 22.7477 19.1865 22.7104C19.1565 22.6732 19.1707 22.6074 19.1992 22.4758C19.2325 22.3217 19.2501 22.1618 19.2501 21.9978L19.2466 12.4298C19.2465 12.1396 19.2465 11.9945 19.3413 11.9358C19.4362 11.8772 19.566 11.9421 19.8255 12.0718L20.1573 12.2377Z',
  d9: 'M3.84275 12.2377C3.33294 12.4926 2.9001 12.709 2.56088 12.9248C2.19971 13.1546 1.89048 13.4161 1.66072 13.7879C1.43095 14.1597 1.33535 14.5532 1.29132 14.979C1.24997 15.3789 1.24999 15.8629 1.25001 16.4329L1.25 20.0424C1.24995 20.4752 1.24991 20.872 1.29331 21.1948C1.3411 21.5503 1.45355 21.926 1.76257 22.2351C2.07159 22.5441 2.44732 22.6565 2.8028 22.7043C3.1256 22.7477 3.52247 22.7477 3.95526 22.7476L4.5952 22.7476C4.72078 22.7476 4.78357 22.7476 4.81359 22.7104C4.84361 22.6732 4.82937 22.6074 4.80089 22.4757C4.76756 22.3217 4.75001 22.1618 4.75001 21.9977L4.75344 12.4297C4.75355 12.1395 4.7536 11.9945 4.65874 11.9358C4.56387 11.8772 4.4341 11.942 4.17456 12.0718L3.84275 12.2377Z',
  d10: 'M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3.25H14C14.4142 3.25 14.75 3.58579 14.75 4C14.75 4.41421 14.4142 4.75 14 4.75H12.75V5.44728C12.75 5.54174 12.75 5.58897 12.7697 5.63004C12.7895 5.67111 12.8264 5.70062 12.9001 5.75963L15.9673 8.21337C16.6016 8.72085 17.0848 9.19741 17.3822 9.81629C17.6797 10.4352 17.75 11.1101 17.75 11.9225V22C17.75 22.4142 17.4142 22.75 17 22.75H14.75V18.75C14.75 17.2312 13.5188 16 12 16C10.4812 16 9.25 17.2312 9.25 18.75V22.75H7C6.58579 22.75 6.25 22.4142 6.25 22L6.25 11.9225C6.25 11.1101 6.32032 10.4352 6.61777 9.81629C6.91522 9.19741 7.39835 8.72085 8.0327 8.21337L11.0999 5.75963C11.1736 5.70062 11.2105 5.67111 11.2303 5.63004C11.25 5.58897 11.25 5.54174 11.25 5.44728V4.75H10C9.58579 4.75 9.25 4.41421 9.25 4C9.25 3.58579 9.58579 3.25 10 3.25H11.25V2C11.25 1.58579 11.5858 1.25 12 1.25ZM10.75 22.75H13.25V18.75C13.25 18.0596 12.6904 17.5 12 17.5C11.3096 17.5 10.75 18.0596 10.75 18.75V22.75ZM12.0056 11.7852C12.6929 11.7852 13.25 11.2255 13.25 10.5352C13.25 9.8448 12.6929 9.28516 12.0056 9.28516H11.9944C11.3071 9.28516 10.75 9.8448 10.75 10.5352C10.75 11.2255 11.3071 11.7852 11.9944 11.7852H12.0056Z',
  d11: 'M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3.25H14C14.4142 3.25 14.75 3.58579 14.75 4C14.75 4.41421 14.4142 4.75 14 4.75H12.75V5.44728C12.75 5.54174 12.75 5.58897 12.7697 5.63004C12.7895 5.67111 12.8264 5.70062 12.9001 5.75963L15.9673 8.21337C16.6016 8.72085 17.0848 9.19741 17.3822 9.81629C17.6797 10.4352 17.75 11.1101 17.75 11.9225V22C17.75 22.4142 17.4142 22.75 17 22.75H7C6.58579 22.75 6.25 22.4142 6.25 22V11.9225C6.25 11.1101 6.32032 10.4352 6.61777 9.81629C6.91522 9.19741 7.39835 8.72085 8.0327 8.21337L11.0999 5.75963C11.1736 5.70062 11.2105 5.67111 11.2303 5.63004C11.25 5.58897 11.25 5.54174 11.25 5.44728V4.75L10 4.75C9.58579 4.75 9.25 4.41421 9.25 4C9.25 3.58579 9.58579 3.25 10 3.25L11.25 3.25V2C11.25 1.58579 11.5858 1.25 12 1.25Z',
  d12: 'M12 17.5C11.3096 17.5 10.75 18.0596 10.75 18.75V22.75H9.25V18.75C9.25 17.2312 10.4812 16 12 16C13.5188 16 14.75 17.2312 14.75 18.75V22.75H13.25V18.75C13.25 18.0596 12.6904 17.5 12 17.5Z',
  d13: 'M13.25 10.5352C13.25 11.2255 12.6929 11.7852 12.0056 11.7852L11.9944 11.7852C11.3071 11.7852 10.75 11.2255 10.75 10.5352C10.75 9.8448 11.3071 9.28516 11.9944 9.28516L12.0056 9.28516C12.6929 9.28516 13.25 9.8448 13.25 10.5352Z',
  d14: 'M12 2V5.99652M14 3.99826H10',
  d15: 'M17 11.9912L21 13.9895V21.9825H17',
  d16: 'M7 11.9912L3 13.9895V21.9825H7',
  d17: 'M10 21.9826V15.9878H14V21.9826',
  d18: 'M12.008 10.9922H11.999',
  d19: 'M6.98828 9.00099V22.0001H17.0199V9.00097C17.0199 8.99746 17.0181 8.9942 17.0151 8.9924L12.0136 5.99463L6.99315 8.9924C6.99013 8.9942 6.98828 8.99747 6.98828 9.00099Z',
  d20: 'M9.25 15.75C9.25 15.3358 9.58579 15 10 15H14C14.4142 15 14.75 15.3358 14.75 15.75V22.5H17.75V8.32536L12 4.87536L6.25 8.32536L6.25 22.5H9.25V15.75ZM10.75 22.5H13.25V16.5H10.75V22.5ZM10.9988 11.75H13.0078L13.0078 9.74999H10.9988L10.9988 11.75Z',
  d21: 'M19 11.9116V22.5001H21.75V13.2866L19 11.9116Z',
  d22: 'M5 22.5001V11.9116L2.25 13.2866V22.5001H5Z',
  d23: 'M11.25 2.75V1.5H12.75V2.75H14V4.25H12.75V5.5H11.25V4.25H10V2.75H11.25Z',
} as const;

export const IconChurchStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="church-stroke-rounded IconChurchStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconChurchDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="church-duotone-rounded IconChurchDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
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
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconChurchTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="church-twotone-rounded IconChurchTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconChurchSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="church-solid-rounded IconChurchSolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChurchBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="church-bulk-rounded IconChurchBulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="0.5" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconChurchStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="church-stroke-sharp IconChurchStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconChurchSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="church-solid-sharp IconChurchSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfChurch: TheIconSelfPack = {
  name: 'Church',
  StrokeRounded: IconChurchStrokeRounded,
  DuotoneRounded: IconChurchDuotoneRounded,
  TwotoneRounded: IconChurchTwotoneRounded,
  SolidRounded: IconChurchSolidRounded,
  BulkRounded: IconChurchBulkRounded,
  StrokeSharp: IconChurchStrokeSharp,
  SolidSharp: IconChurchSolidSharp,
};