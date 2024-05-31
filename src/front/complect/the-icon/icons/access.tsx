import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 2C4.23858 2 2 4.23858 2 7C2 8.85071 3.0055 10.4666 4.5 11.3311V17.8431C4.5 18.6606 4.5 19.0694 4.65224 19.4369C4.80448 19.8045 5.09351 20.0935 5.67157 20.6716L7 22L9.10819 19.8918C9.20542 19.7946 9.25407 19.7459 9.2944 19.6932C9.40031 19.5547 9.46816 19.3909 9.49122 19.218C9.5 19.1522 9.5 19.0834 9.5 18.9459C9.5 18.8346 9.5 18.779 9.4941 18.7249C9.47864 18.5831 9.43303 18.4463 9.36035 18.3236C9.33263 18.2768 9.29924 18.2323 9.23246 18.1433L8 16.5L8.7 15.5667C9.09649 15.038 9.29473 14.7737 9.39737 14.4658C9.5 14.1579 9.5 13.8275 9.5 13.1667V11.3311C10.9945 10.4666 12 8.85071 12 7C12 4.23858 9.76142 2 7 2Z',
  d2: 'M7 7H7.00898',
  d3: 'M13 14H19C19.9319 14 20.3978 14 20.7654 14.1522C21.2554 14.3552 21.6448 14.7446 21.8478 15.2346C22 15.6022 22 16.0681 22 17C22 17.9319 22 18.3978 21.8478 18.7654C21.6448 19.2554 21.2554 19.6448 20.7654 19.8478C20.3978 20 19.9319 20 19 20H13',
  d4: 'M15 5H19C19.9319 5 20.3978 5 20.7654 5.15224C21.2554 5.35523 21.6448 5.74458 21.8478 6.23463C22 6.60218 22 7.06812 22 8C22 8.93188 22 9.39782 21.8478 9.76537C21.6448 10.2554 21.2554 10.6448 20.7654 10.8478C20.3978 11 19.9319 11 19 11H15',
  d5: 'M7 1.25C3.82436 1.25 1.25 3.82436 1.25 7C1.25 8.97049 2.24152 10.7086 3.75 11.744L3.74992 17.964C3.74925 18.6626 3.74872 19.2155 3.95933 19.724C4.16994 20.2324 4.56127 20.623 5.05573 21.1165L6.46967 22.5303C6.76256 22.8232 7.23744 22.8232 7.53033 22.5303L9.63852 20.4221L9.65768 20.403C9.73549 20.3254 9.8185 20.2425 9.8902 20.1487C10.0755 19.9063 10.1943 19.6197 10.2346 19.3172C10.2502 19.2002 10.2501 19.034 10.25 18.9241C10.2501 18.8349 10.2502 18.7396 10.2397 18.6436C10.2126 18.3955 10.1328 18.1561 10.0056 17.9413C9.95635 17.8582 9.89913 17.782 9.84556 17.7107L9.84555 17.7107L8.9375 16.5L9.35833 15.939C9.69822 15.4865 9.96691 15.1289 10.1089 14.703C10.2508 14.2771 10.2505 13.8297 10.2501 13.2638L10.25 11.744C11.7585 10.7086 12.75 8.97049 12.75 7C12.75 3.82436 10.1756 1.25 7 1.25ZM6.99329 5.5C6.16857 5.5 5.5 6.17157 5.5 7C5.5 7.82843 6.16857 8.5 6.99329 8.5H7.00671C7.83143 8.5 8.5 7.82843 8.5 7C8.5 6.17157 7.83143 5.5 7.00671 5.5H6.99329Z',
  d6: 'M13.7969 10.7269C13.5299 11.2126 13.3964 11.4555 13.4835 11.6027C13.5707 11.75 13.8304 11.75 14.35 11.75L19.026 11.75C19.4705 11.75 19.8415 11.75 20.1461 11.7292C20.4632 11.7076 20.7628 11.661 21.0532 11.5407C21.727 11.2616 22.2623 10.7262 22.5414 10.0524C22.6617 9.76199 22.7084 9.46247 22.73 9.14537C22.7508 8.84076 22.7508 8.46974 22.7508 8.0253V7.97474C22.7508 7.5303 22.7508 7.15924 22.73 6.85464C22.7084 6.53754 22.6617 6.23801 22.5414 5.94762C22.2623 5.2738 21.727 4.73844 21.0532 4.45933C20.7628 4.33905 20.4632 4.29241 20.1461 4.27077C19.8415 4.24999 19.4705 4.24999 19.0261 4.25L15.1182 4.25C14.7318 4.25 14.5386 4.25 14.4486 4.36594C14.3585 4.48188 14.4092 4.6808 14.5107 5.07864C14.6674 5.69304 14.7507 6.33679 14.7507 6.99999C14.7507 8.35157 14.4042 9.62175 13.7969 10.7269Z',
  d7: 'M19.0254 13.25C19.4698 13.25 19.8408 13.25 20.1454 13.2708C20.4625 13.2924 20.7621 13.3391 21.0524 13.4593C21.7263 13.7384 22.2616 14.2738 22.5407 14.9476C22.661 15.238 22.7077 15.5375 22.7293 15.8546C22.7501 16.1592 22.7501 16.5304 22.7501 16.9747V17.0254C22.7501 17.4698 22.7501 17.8408 22.7293 18.1454C22.7077 18.4625 22.661 18.762 22.5407 19.0524C22.2616 19.7262 21.7263 20.2616 21.0524 20.5407C20.7621 20.661 20.4625 20.7076 20.1454 20.7292C19.8408 20.75 19.4698 20.75 19.0253 20.75L12.8501 20.75C12.5672 20.75 12.4258 20.75 12.3379 20.6621C12.2501 20.5743 12.2501 20.4328 12.2501 20.15V13.85C12.2501 13.5672 12.2501 13.4257 12.3379 13.3379C12.4258 13.25 12.5672 13.25 12.8501 13.25L19.0254 13.25Z',
  d8: 'M6.98079 6.99316H6.98977',
  d9: 'M11.991 14.1152H22.0012V20.1766H11.991',
  d10: 'M14.994 5.02344H22.001V11.0848H14.994',
  d11: 'M7.00391 2.00195C4.2397 2.00195 1.99886 4.26086 1.99886 7.04736C1.99886 8.89522 2.98429 10.5111 4.45431 11.39V19.6419L6.6505 21.8509C6.84583 22.0473 7.16171 22.0471 7.35669 21.8502L9.54452 19.6418V18.1362L8.29534 16.4493C8.1473 16.2494 8.16605 15.9702 8.33948 15.7923L9.54452 14.5563V11.3954C11.0203 10.4649 12.009 9.01115 12.009 7.04736C12.009 4.26086 9.76813 2.00195 7.00391 2.00195Z',
  d12: 'M7 1.25C3.82436 1.25 1.25 3.82436 1.25 7C1.25 8.97049 2.24152 10.7086 3.75 11.744V19.8107L6.46967 22.5303C6.76256 22.8232 7.23744 22.8232 7.53033 22.5303L10.25 19.8107V18C10.25 17.8377 10.1974 17.6798 10.1 17.55L8.99028 16.0704L10.0303 15.0303C10.171 14.8897 10.25 14.6989 10.25 14.5V11.744C11.7585 10.7086 12.75 8.97049 12.75 7C12.75 3.82436 10.1756 1.25 7 1.25ZM6.99218 5.25C6.03 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.03 8.75 6.99218 8.75H7.00782C7.97 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.97 5.25 7.00782 5.25H6.99218Z',
  d13: 'M11.75 19.25H22C22.4142 19.25 22.75 18.9142 22.75 18.5V13.5C22.75 13.0858 22.4142 12.75 22 12.75H11.75V14.5C11.75 15.0967 11.513 15.669 11.091 16.091L10.9709 16.2111L11.3 16.65C11.5921 17.0395 11.75 17.5132 11.75 18V19.25Z',
  d14: 'M12.8739 11.25H22C22.4142 11.25 22.75 10.9142 22.75 10.5V5.5C22.75 5.08579 22.4142 4.75 22 4.75H13.8941C14.1251 5.45831 14.25 6.21457 14.25 7C14.25 8.58849 13.7385 10.0569 12.8739 11.25Z',
} as const;

export const IconAccessStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="access-stroke-rounded IconAccessStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAccessDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="access-duotone-rounded IconAccessDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAccessTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="access-twotone-rounded IconAccessTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAccessSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="access-solid-rounded IconAccessSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAccessBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="access-bulk-rounded IconAccessBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAccessStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="access-stroke-sharp IconAccessStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAccessSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="access-solid-sharp IconAccessSolidSharp"
    >
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
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAccess: TheIconSelfPack = {
  name: 'Access',
  StrokeRounded: IconAccessStrokeRounded,
  DuotoneRounded: IconAccessDuotoneRounded,
  TwotoneRounded: IconAccessTwotoneRounded,
  SolidRounded: IconAccessSolidRounded,
  BulkRounded: IconAccessBulkRounded,
  StrokeSharp: IconAccessStrokeSharp,
  SolidSharp: IconAccessSolidSharp,
};