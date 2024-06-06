import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 3.5L16.5 2.5L21.5 5.5M2.5 3.5L6.5 6.5M2.5 3.5V16.5L6.5 21.5M21.5 5.5L6.5 6.5M21.5 5.5V19.5L6.5 21.5M6.5 6.5V21.5',
  d2: 'M12.4704 17.7039L9.5 18.1M18.5 8.69995L16.2654 8.84892M17.5 8.76662V17L11.7148 9.1523L9.5 9.29995M11 9.19995V17.7',
  d3: 'M6.5 6.5L21.5 5.5V19.5L6.5 21.5V6.5Z',
  d4: 'M16.4466 1.75191C16.6003 1.74092 16.7537 1.77758 16.8859 1.85688L21.8859 4.85688C22.1118 4.99242 22.25 5.23655 22.25 5.5L22.25 19.5C22.25 19.8759 21.9717 20.1937 21.5991 20.2434L6.59912 22.2434C6.33846 22.2782 6.07863 22.1739 5.91435 21.9685L1.91435 16.9685C1.80796 16.8355 1.75 16.6703 1.75 16.5L1.75 3.5C1.75 3.10652 2.05409 2.77994 2.44656 2.75191L16.4466 1.75191ZM6.72755 5.73333L19.0605 4.91114L16.3172 3.26514L4.55667 4.10517L6.72755 5.73333ZM5.75 6.87517L3.25 5.00017L3.25 16.2371L5.75 19.3621L5.75 6.87517ZM18.55 9.44856C18.9633 9.42101 19.276 9.06363 19.2484 8.65033C19.2209 8.23704 18.8635 7.92433 18.4502 7.95188L17.456 8.01816L17.4429 8.01904L16.2156 8.10086C15.8023 8.12841 15.4896 8.48579 15.5171 8.89909C15.5447 9.31238 15.9021 9.62509 16.3154 9.59754L16.7501 9.56856L16.7501 14.7189L12.3185 8.70754C12.1667 8.50155 11.9203 8.38721 11.665 8.40423L10.956 8.4515L10.9429 8.45237L9.4502 8.55188C9.0369 8.57944 8.72419 8.93682 8.75175 9.35011C8.7793 9.76341 9.13668 10.0761 9.54998 10.0486L10.2501 10.0019L10.2501 17.2436L9.40096 17.3568C8.99038 17.4115 8.70192 17.7888 8.75667 18.1993C8.81141 18.6099 9.18863 18.8984 9.59921 18.8436L12.5696 18.4476C12.9802 18.3928 13.2687 18.0156 13.2139 17.605C13.1592 17.1945 12.782 16.906 12.3714 16.9607L11.7501 17.0436L11.7501 10.4643L16.8964 17.4453C17.0886 17.706 17.4266 17.8139 17.7343 17.7127C18.0421 17.6115 18.2501 17.3242 18.2501 17.0002V9.46856L18.55 9.44856Z',
  d5: 'M16.8859 1.85688C16.7537 1.77758 16.6003 1.74092 16.4466 1.75191L2.44656 2.75191C2.05409 2.77994 1.75 3.10652 1.75 3.5V16.5C1.75 16.6703 1.80796 16.8355 1.91435 16.9685L5.91435 21.9685C6.07863 22.1739 6.33846 22.2782 6.59912 22.2434L21.5991 20.2434C21.9717 20.1937 22.25 19.8759 22.25 19.5V5.5C22.25 5.23655 22.1118 4.99242 21.8859 4.85688L16.8859 1.85688ZM19.0605 4.91114L6.72755 5.73333L4.55667 4.10517L16.3172 3.26514L19.0605 4.91114ZM3.25 5.00017L5.75 6.87517V19.3621L3.25 16.2371V5.00017Z',
  d6: 'M19.2484 8.65033C19.276 9.06363 18.9633 9.42101 18.55 9.44856L18.2501 9.46856V17.0002C18.2501 17.3242 18.0421 17.6115 17.7343 17.7127C17.4266 17.8139 17.0886 17.706 16.8964 17.4453L11.7501 10.4643V17.0436L12.3714 16.9607C12.782 16.906 13.1592 17.1945 13.2139 17.605C13.2687 18.0156 12.9802 18.3928 12.5696 18.4476L9.59921 18.8436C9.18863 18.8984 8.81141 18.6099 8.75667 18.1993C8.70192 17.7888 8.99038 17.4115 9.40096 17.3568L10.2501 17.2436V10.0019L9.54998 10.0486C9.13668 10.0761 8.7793 9.76341 8.75175 9.35011C8.72419 8.93682 9.0369 8.57944 9.4502 8.55188L10.9429 8.45237C10.9473 8.45204 10.9516 8.45175 10.956 8.4515L11.665 8.40423C11.9203 8.38721 12.1667 8.50155 12.3185 8.70754L16.7501 14.7189V9.56856L16.3154 9.59754C15.9021 9.62509 15.5447 9.31238 15.5171 8.89909C15.4896 8.48579 15.8023 8.12841 16.2156 8.10086L17.4429 8.01904C17.4473 8.01871 17.4516 8.01842 17.456 8.01816L18.4502 7.95188C18.8635 7.92433 19.2209 8.23704 19.2484 8.65033Z',
  d7: 'M12.4704 17.7039L9.5 18.1M18.5 8.69995L16.2654 8.84892M17.5 8.76662V16.9998H17L11.7148 9.1523L9.5 9.29995M11 9.19995V17.7',
  d8: 'M16.6828 1.75L22.25 5.07986L22.25 20.1139L6.17907 22.25L1.75 16.731L1.75 2.81329L16.6828 1.75ZM6.72755 5.73586L19.0605 4.91623L16.3172 3.27539L4.55667 4.1128L6.72755 5.73586ZM5.75 6.87412L3.25 5.00499L3.25 16.2067L5.75 19.3219L5.75 6.87412ZM11.7498 17.0104L11.7498 10.5347L16.6007 17.7147H18.2498V9.45912L19.298 9.38945L19.1982 7.89746L15.4669 8.14543L15.5667 9.63743L16.7498 9.5588L16.7498 15.2586L12.0954 8.3695L8.70154 8.59505L8.80132 10.087L10.2498 9.99078L10.2498 17.2098L8.65723 17.4215L8.85547 18.9037L13.3127 18.3112L13.1145 16.829L11.7498 17.0104Z',
} as const;

export const IconNotion02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notion-02-stroke-rounded IconNotion02StrokeRounded"
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

export const IconNotion02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notion-02-duotone-rounded IconNotion02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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

export const IconNotion02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notion-02-twotone-rounded IconNotion02TwotoneRounded"
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

export const IconNotion02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notion-02-solid-rounded IconNotion02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNotion02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notion-02-bulk-rounded IconNotion02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconNotion02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notion-02-stroke-sharp IconNotion02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconNotion02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notion-02-solid-sharp IconNotion02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNotion02: TheIconSelfPack = {
  name: 'Notion02',
  StrokeRounded: IconNotion02StrokeRounded,
  DuotoneRounded: IconNotion02DuotoneRounded,
  TwotoneRounded: IconNotion02TwotoneRounded,
  SolidRounded: IconNotion02SolidRounded,
  BulkRounded: IconNotion02BulkRounded,
  StrokeSharp: IconNotion02StrokeSharp,
  SolidSharp: IconNotion02SolidSharp,
};