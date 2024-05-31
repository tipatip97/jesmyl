import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.17911 15.9319L5.26287 19.3081C5.6795 20.6061 5.88782 21.255 6.40449 21.6275C6.92116 22.0001 7.61293 22.0001 8.99648 22.0001H15.0035C16.3871 22.0001 17.0788 22.0001 17.5955 21.6275C18.1122 21.255 18.3205 20.6061 18.7371 19.3081L19.8209 15.9319C20.3904 14.1577 19.5645 12.2395 17.873 11.4075C18.6821 10.91 19.0866 10.6613 19.2065 10.4717C19.5127 9.98757 19.3266 9.34921 18.8061 9.09831C18.6023 9.00006 18.1253 9.00006 17.1712 9.00006C16.2171 9.00009 14.9135 9.33644 15.7906 12.1645C16.9592 15.9319 15.9104 17.079 14.4226 17.2488C12.9348 17.4185 10.9873 15.9919 12.337 13.5034C13.8777 10.6627 11.7545 9.00012 10.6272 9.00012L6.82879 9.00006C5.87472 9.00006 5.39768 9.00006 5.19389 9.09831C4.67345 9.34921 4.48735 9.98757 4.79351 10.4717C4.91339 10.6613 5.31792 10.91 6.12697 11.4075C4.43546 12.2395 3.60962 14.1577 4.17911 15.9319Z',
  d2: 'M13.9987 3.02603C13.9987 2.17604 12.8279 2 12 2C11.1721 2 10.0013 2.17604 10.0013 3.02603C10.0013 3.52211 10.4001 4.13811 10.8968 4.56508H8.03364C6.80772 4.56508 5.4553 5.83138 5 7H19C18.5447 5.83138 17.1923 4.56508 15.9664 4.56508H13.1032C13.5999 4.13811 13.9987 3.52211 13.9987 3.02603Z',
  d3: 'M10.6274 8.25007C11.4874 8.25007 12.5246 8.83307 13.1198 9.7905C13.7589 10.8185 13.8787 12.2345 12.9965 13.8609C12.4347 14.8968 12.6216 15.5451 12.9074 15.9117C13.2399 16.3381 13.8352 16.5609 14.3379 16.5035C14.8977 16.4397 15.2323 16.2266 15.4038 15.7845C15.6116 15.2487 15.645 14.2258 15.0746 12.3866C14.6187 10.9168 14.6308 9.8068 15.1993 9.06535C15.7654 8.32702 16.6617 8.25002 17.1715 8.25H17.1715C17.6312 8.25 18.0236 8.25 18.3051 8.26309C18.5543 8.27468 18.8735 8.29798 19.1321 8.42266C20.0497 8.86506 20.3902 10.0034 19.8406 10.8725C19.6908 11.1094 19.4408 11.2932 19.2393 11.4312C20.5415 12.5946 21.0904 14.4317 20.5353 16.161L19.4386 19.5775L19.4386 19.5775C19.2413 20.1922 19.0738 20.7142 18.8868 21.1253C18.6874 21.5638 18.4366 21.9459 18.0344 22.2358C17.6333 22.525 17.1905 22.6441 16.7094 22.6987C16.2564 22.75 15.7017 22.75 15.0452 22.75H8.95534C8.29888 22.75 7.74412 22.75 7.29114 22.6987C6.81006 22.6441 6.36724 22.525 5.96613 22.2358C5.56398 21.9459 5.31315 21.5638 5.11372 21.1253C4.92675 20.7142 4.75922 20.1922 4.56193 19.5775L3.46527 16.161C2.91017 14.4317 3.45906 12.5946 4.76123 11.4312C4.55978 11.2932 4.30972 11.1094 4.1599 10.8725C3.61031 10.0034 3.95082 8.86506 4.86846 8.42266C5.12709 8.29798 5.4462 8.27468 5.6954 8.26309C5.97693 8.24999 6.34891 8.25 6.8086 8.25H6.80861L10.6274 8.25007Z',
  d4: 'M12.0007 1.25C13 1.25 14 1.89501 14 2.77405C14 3.05071 13.6812 3.57081 13.58 3.81508H15.9671C16.7061 3.81508 17.4079 4.13659 17.9756 4.55041C18.5505 4.96953 19.0539 5.53005 19.4013 6.11893C19.5381 6.3508 19.5401 6.63819 19.4066 6.87195C19.2731 7.10572 19.0245 7.25 18.7553 7.25H5.24609C4.97689 7.25 4.72834 7.10572 4.59483 6.87195C4.46132 6.63819 4.46334 6.3508 4.60011 6.11893C4.9475 5.53005 5.45087 4.96953 6.02585 4.55041C6.59355 4.13659 7.29534 3.81508 8.03435 3.81508H10.4214C10.3202 3.57081 10 3.05071 10 2.77405C10 1.89501 11.0014 1.25 12.0007 1.25Z',
  d5: 'M19.9976 5.50656H14.0009V4.50427C14.0009 3.39761 13.1061 2.50049 12.0024 2.50049C10.8987 2.50049 10.004 3.39761 10.004 4.50427V5.50656H4.00781',
  d6: 'M4.13039 8.51719H10.9555C11.4443 8.97658 12.5813 10.4971 11.2667 13.1086C10.5 14.6318 10.5324 16.7736 12.5813 16.9274C14.2191 16.9274 14.9856 15.1286 15.137 13.9489C15.4609 11.4263 14.6566 9.21325 14.3735 8.51709H19.8696C19.8778 8.51709 19.8825 8.52649 19.8776 8.5331L18.4218 10.4893C18.4186 10.4936 18.4195 10.4998 18.4237 10.5032C21.0798 12.6853 20.1144 14.4383 17.4596 21.499L12.6687 21.4991H6.54041C3.88565 14.4384 2.92019 12.6854 5.57634 10.5033C5.58047 10.4999 5.58142 10.4937 5.57822 10.4894L4.12238 8.5332C4.11746 8.52659 4.12216 8.51719 4.13039 8.51719Z',
  d7: 'M19.715 15.4318L17.4097 21.5L6.59034 21.5L4.28502 15.4318C3.71935 13.6577 3.91688 11.332 5.59705 10.5L4.10712 8.5L10.9466 8.50009C10.9466 8.50009 12.8117 10.1627 11.2813 13.0034C9.94062 15.4918 11.4432 17.5 13.3529 16.7487C15.2626 15.9975 15.8604 12.5 14.3704 8.50009L19.8929 8.50001L18.4029 10.5C20.0831 11.332 20.2806 13.6577 19.715 15.4318Z',
  d8: 'M9.25 5.24973C9.25 3.7311 10.4811 2.5 11.9997 2.5C13.5184 2.5 14.7495 3.7311 14.7495 5.24973V5.5H20V7H4V5.5H9.25V5.24973Z',
} as const;

export const IconIconjarStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="iconjar-stroke-rounded IconIconjarStrokeRounded"
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

export const IconIconjarDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="iconjar-duotone-rounded IconIconjarDuotoneRounded"
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

export const IconIconjarTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="iconjar-twotone-rounded IconIconjarTwotoneRounded"
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

export const IconIconjarSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="iconjar-solid-rounded IconIconjarSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconIconjarBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="iconjar-bulk-rounded IconIconjarBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconIconjarStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="iconjar-stroke-sharp IconIconjarStrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconIconjarSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="iconjar-solid-sharp IconIconjarSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfIconjar: TheIconSelfPack = {
  name: 'Iconjar',
  StrokeRounded: IconIconjarStrokeRounded,
  DuotoneRounded: IconIconjarDuotoneRounded,
  TwotoneRounded: IconIconjarTwotoneRounded,
  SolidRounded: IconIconjarSolidRounded,
  BulkRounded: IconIconjarBulkRounded,
  StrokeSharp: IconIconjarStrokeSharp,
  SolidSharp: IconIconjarSolidSharp,
};