import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21.8966 6.63081C22.2168 7.52828 21.7678 8.14274 20.8986 8.748C20.1973 9.23636 19.3039 9.76542 18.3572 10.6699C17.4291 11.5566 16.5234 12.6246 15.7184 13.6758C14.743 14.9496 13.8206 16.2801 13.0087 17.6655C12.7026 18.1902 12.1521 18.5078 11.5619 18.4999C10.9716 18.4919 10.4293 18.1597 10.1364 17.6267C9.38765 16.264 8.80986 15.7259 8.5443 15.5326C7.8075 14.9963 7 14.9035 7 13.7335C7 12.7762 7.74623 12.0002 8.66675 12.0002C9.32548 12.0266 9.92854 12.3088 10.4559 12.6927C10.7981 12.9418 11.1605 13.2711 11.5375 13.7047C11.9799 13.051 12.5131 12.2968 13.1107 11.5163C13.9787 10.3829 15.0032 9.16689 16.1019 8.11719C17.1819 7.08531 18.4306 6.11941 19.7542 5.60872C20.6172 5.27573 21.5764 5.73333 21.8966 6.63081Z',
  d2: 'M4.43961 12.0755C4.28117 12.0236 4.13796 11.9909 4.01252 11.9713C3.94995 11.9615 3.89226 11.955 3.83976 11.951L3.69887 11.9454C2.76061 11.9454 2 12.728 2 13.6933C2 14.5669 2.62294 15.2908 3.43675 15.4205C3.4652 15.4355 3.51137 15.4624 3.57407 15.5076C3.84474 15.7025 4.43367 16.2452 5.19686 17.6193C5.49542 18.1569 6.04811 18.4918 6.64983 18.4999C7.06202 18.5054 7.45518 18.3567 7.76226 18.0924M15 5.5C13.6509 6.015 12.3781 6.98904 11.2773 8.02963C10.8929 8.39299 10.5174 8.77611 10.1542 9.16884',
  d3: 'M19.6092 4.90997C20.8859 4.41739 22.2735 5.10576 22.728 6.37975C22.9524 7.00872 22.9194 7.60732 22.6314 8.15104C22.3663 8.65159 21.9186 9.03969 21.4522 9.36445C21.2922 9.47586 21.1292 9.58532 20.9629 9.69691C20.3532 10.1061 19.7007 10.544 19.0003 11.2132C18.1099 12.0639 17.2302 13.0993 16.4389 14.1327L16.4297 14.1445C15.7587 14.9853 14.3927 17.0816 13.7739 18.0574C13.3349 18.7994 12.5422 19.2625 11.6768 19.2508C10.8065 19.239 10.0222 18.7495 9.60411 17.9887C8.91899 16.7419 8.41957 16.2858 8.24727 16.1543C7.15677 15.8968 6.375 14.8942 6.375 13.7344C6.375 12.3908 7.42962 11.2511 8.79175 11.2511C8.96774 11.2491 9.4066 11.2798 9.75408 11.418C10.1453 11.5475 10.5734 11.7604 11.0223 12.0872C11.2006 12.2169 11.381 12.3638 11.5631 12.5294C11.8905 12.0645 12.2518 11.5686 12.6402 11.0613C13.5218 9.91004 14.5724 8.66158 15.7088 7.57589C16.8177 6.51639 18.1509 5.47266 19.6092 4.90997Z',
  d4: 'M16.0592 5.14363C16.2562 5.6596 15.9976 6.23755 15.4816 6.43451C14.3113 6.88126 13.1511 7.75288 12.0892 8.75662C11.7233 9.10248 11.3636 9.46935 11.0134 9.84807C10.6384 10.2535 10.0057 10.2783 9.60022 9.90329C9.19475 9.52831 9.17003 8.89563 9.54501 8.49015C9.92116 8.08341 10.3124 7.68405 10.7153 7.30318C11.8552 6.22574 13.2405 5.14927 14.7684 4.56603C15.2843 4.36906 15.8623 4.62767 16.0592 5.14363ZM1.125 13.6936C1.125 12.203 2.3067 10.9457 3.82387 10.9457C3.83705 10.9457 3.85023 10.9459 3.8634 10.9465L4.00429 10.952C4.01659 10.9525 4.02888 10.9532 4.04115 10.9542C4.11952 10.9602 4.20334 10.9697 4.2922 10.9836C4.47041 11.0115 4.66595 11.0567 4.87572 11.1254C5.4006 11.2972 5.6868 11.862 5.51498 12.3869C5.34315 12.9118 4.77837 13.198 4.25349 13.0261C4.14639 12.9911 4.05551 12.9709 3.98284 12.9595C3.95331 12.9549 3.92689 12.9517 3.90372 12.9496L3.80871 12.9459C3.45503 12.9544 3.125 13.2597 3.125 13.6936C3.125 14.089 3.40373 14.383 3.71911 14.4332C3.82661 14.4504 3.9306 14.4849 4.02696 14.5356C4.09916 14.5735 4.18502 14.6255 4.28348 14.6964C4.70661 15.0011 5.38428 15.6724 6.19608 17.134C6.32531 17.3667 6.55446 17.4971 6.78819 17.5002C6.94913 17.5024 7.10717 17.4447 7.23486 17.3348C7.65342 16.9745 8.28482 17.0217 8.64513 17.4403C9.00545 17.8588 8.95822 18.4902 8.53966 18.8505C8.05318 19.2693 7.42491 19.5089 6.76146 19.5C5.79176 19.4871 4.91554 18.9475 4.44765 18.1051C3.81035 16.9577 3.34358 16.5042 3.16621 16.3592C1.97679 16.0565 1.125 14.9622 1.125 13.6936Z',
  d5: 'M8.00195 17.5L7.00195 18.5L2.00195 14L4.50195 11L6.00195 12.25M11.002 9.5L14.502 5.5L16.502 7.5',
  d6: 'M21.9949 8.49244L19.0093 5.50683C19.0053 5.50283 18.9988 5.50295 18.995 5.50708L12.002 12.9995L9.50967 11.0056C9.50542 11.0022 9.49923 11.0029 9.49574 11.007L7.00818 13.9921C7.00474 13.9962 7.00517 14.0024 7.00917 14.006L11.995 18.4932C11.9989 18.4967 12.005 18.4966 12.0087 18.4928L21.9949 8.50659C21.9988 8.50268 21.9988 8.49635 21.9949 8.49244Z',
  d7: 'M18.9871 4.75011C19.1905 4.74661 19.3865 4.82585 19.5303 4.96967L22.5303 7.96967C22.8232 8.26256 22.8232 8.73744 22.5303 9.03033L12.5303 19.0303C12.2483 19.3124 11.7948 19.3243 11.4983 19.0575L6.49829 14.5575C6.19866 14.2878 6.16578 13.8295 6.42384 13.5199L8.92384 10.5199C9.18528 10.2061 9.64965 10.1592 9.96853 10.4143L11.9259 11.9802L18.4517 4.98826C18.5905 4.83957 18.7837 4.75362 18.9871 4.75011Z',
  d8: 'M14.4751 4.75042C14.6825 4.74351 14.8836 4.82289 15.0303 4.96967L17.0303 6.96967L15.9697 8.03033L14.5365 6.59719L11.5644 9.99388L10.4356 9.00612L13.9356 5.00612C14.0723 4.8499 14.2676 4.75732 14.4751 4.75042ZM3.92384 10.5199C4.18902 10.2017 4.66194 10.1587 4.98015 10.4238L6.48015 11.6738L5.51987 12.8262L4.59604 12.0563L3.03837 13.9255L6.97283 17.4665L7.46968 16.9697L8.53034 18.0303L7.53034 19.0303C7.24828 19.3124 6.79478 19.3243 6.49829 19.0575L1.49829 14.5575C1.19866 14.2878 1.16578 13.8295 1.42384 13.5199L3.92384 10.5199Z',
} as const;

export const IconTickDouble04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-double-04-stroke-rounded IconTickDouble04StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconTickDouble04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-double-04-duotone-rounded IconTickDouble04DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconTickDouble04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-double-04-twotone-rounded IconTickDouble04TwotoneRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconTickDouble04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-double-04-solid-rounded IconTickDouble04SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTickDouble04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-double-04-bulk-rounded IconTickDouble04BulkRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTickDouble04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-double-04-stroke-sharp IconTickDouble04StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTickDouble04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-double-04-solid-sharp IconTickDouble04SolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTickDouble04: TheIconSelfPack = {
  name: 'TickDouble04',
  StrokeRounded: IconTickDouble04StrokeRounded,
  DuotoneRounded: IconTickDouble04DuotoneRounded,
  TwotoneRounded: IconTickDouble04TwotoneRounded,
  SolidRounded: IconTickDouble04SolidRounded,
  BulkRounded: IconTickDouble04BulkRounded,
  StrokeSharp: IconTickDouble04StrokeSharp,
  SolidSharp: IconTickDouble04SolidSharp,
};