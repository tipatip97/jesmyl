import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.2946 16.5969L17.6443 19.3752C16.41 20.669 15.7928 21.316 15.1135 21.6339C14.0746 22.1201 12.8892 22.1221 11.8518 21.6393C11.1734 21.3236 10.5581 20.6787 9.32771 19.3889C8.68241 18.7124 8.35976 18.3742 8.12569 17.99C7.7686 17.4039 7.55631 16.7335 7.50792 16.0391C7.4762 15.5839 7.54154 15.1096 7.67222 14.1608L8.24806 9.98046C8.33654 9.33812 8.8282 8.83854 9.44338 8.76589C10.2474 8.67094 10.9494 9.32937 10.9481 10.1772L10.9452 12.1108L15.4678 7.36989C15.9383 6.8767 16.7011 6.8767 17.1716 7.36989C17.6421 7.86309 17.6421 8.66271 17.1716 9.1559M17.1716 9.1559L18.3075 7.96523C18.778 7.47204 19.5408 7.47204 20.0113 7.96523C20.4818 8.45842 20.4818 9.25804 20.0113 9.75123L18.8754 10.9419M17.1716 9.1559L14.6159 11.8349M18.8754 10.9419C19.3459 10.4487 20.1087 10.4487 20.5792 10.9419C21.0497 11.4351 21.0497 12.2347 20.5792 12.7279L19.4433 13.9186M18.8754 10.9419L16.3197 13.6209M19.7273 17.1929L21.1471 15.7046C21.6176 15.2114 21.6176 14.4118 21.1471 13.9186C20.6766 13.4254 19.9138 13.4254 19.4433 13.9186M19.4433 13.9186L18.0235 15.4069',
  d2: 'M12.2738 4.19379C12.7492 3.69193 12.7492 2.87825 12.2738 2.37639C11.7983 1.87454 11.0274 1.87454 10.552 2.37639L5.9816 7.20059L5.98452 5.23302C5.9858 4.37031 5.27637 3.7003 4.4639 3.79692C3.84223 3.87085 3.34538 4.37921 3.25596 5.03284L2.67404 9.2867C2.54198 10.2521 2.47595 10.7348 2.508 11.198C2.5569 11.9046 2.77143 12.5868 3.1323 13.1832C3.36884 13.5741 3.69489 13.9183 4.34701 14.6066C4.47803 14.7449 4.60216 14.8759 4.72018 15M12.2738 4.19379L13.4216 2.98219C13.8971 2.48033 14.668 2.48033 15.1434 2.98219C15.6189 3.48405 15.6189 4.29773 15.1434 4.79959M12.2738 4.19379L10.5114 6.054',
  d3: 'M7.67222 14.1608L8.24806 9.98046C8.33654 9.33812 8.8282 8.83854 9.44338 8.76589C10.2474 8.67094 10.9494 9.32937 10.9481 10.1772L10.9452 12.1108L15.4678 7.36989C15.9383 6.8767 16.7011 6.8767 17.1716 7.36989C17.6421 7.86309 17.6421 8.66271 17.1716 9.1559L18.3075 7.96523C18.778 7.47204 19.5408 7.47204 20.0113 7.96523C20.4818 8.45842 20.4818 9.25804 20.0113 9.75123L18.8754 10.9419C19.3459 10.4487 20.1087 10.4487 20.5792 10.9419C21.0497 11.4351 21.0497 12.2347 20.5792 12.7279L19.4433 13.9186C19.9138 13.4254 20.6766 13.4254 21.1471 13.9186C21.6176 14.4118 21.6176 15.2114 21.1471 15.7046L20.2946 16.5969L17.6443 19.3752C16.41 20.669 15.7928 21.316 15.1135 21.6339C14.0746 22.1201 12.8892 22.1221 11.8518 21.6393C11.1734 21.3236 10.5581 20.6787 9.32771 19.3888C8.68241 18.7124 8.35976 18.3742 8.12569 17.99C7.7686 17.4039 7.55631 16.7335 7.50792 16.0391C7.4762 15.5839 7.54154 15.1096 7.67222 14.1608Z',
  d4: 'M17.3079 6.5438C16.9304 6.15207 16.3272 6.15207 15.9496 6.5438L10.6591 12.0332C10.5352 12.1617 10.3448 12.2026 10.1783 12.1365C10.0117 12.0703 9.90271 11.9105 9.90298 11.7329L9.90636 9.49398C9.90749 8.74963 9.29314 8.21493 8.63625 8.29171C8.1278 8.35115 7.69914 8.76526 7.62109 9.3261L6.94747 14.1665C6.79205 15.2834 6.72511 15.7803 6.75831 16.2519C6.81011 16.9877 7.03731 17.6967 7.41799 18.3152C7.66147 18.7107 7.99882 19.0641 8.7669 19.8611C9.49049 20.6118 10.0191 21.16 10.4654 21.5674C10.9093 21.9727 11.2492 22.2172 11.5872 22.3729C12.6828 22.8776 13.9337 22.8758 15.0317 22.3671C15.3707 22.21 15.7117 21.9642 16.157 21.5573C16.6047 21.1483 17.1569 20.5771 17.8828 19.824L20.9831 16.6071L21.9585 15.5951C22.3472 15.1918 22.3472 14.5298 21.9585 14.1265C21.5809 13.7348 20.9778 13.7348 20.6002 14.1265L18.9393 15.8498C18.7721 16.0233 18.4944 16.0298 18.3191 15.8643C18.1438 15.6988 18.1372 15.4239 18.3045 15.2504L21.2941 12.1484C21.6828 11.7451 21.6828 11.0831 21.2941 10.6798C20.9166 10.2881 20.3134 10.2881 19.9358 10.6798L16.9462 13.7818C16.779 13.9553 16.5013 13.9618 16.326 13.7963C16.1507 13.6308 16.1441 13.3559 16.3114 13.1824L19.301 10.0804L20.6297 8.70171C21.0184 8.29841 21.0184 7.63644 20.6297 7.23314C20.2522 6.8414 19.649 6.8414 19.2715 7.23314L17.9433 8.61119L14.9531 11.7138C14.7859 11.8873 14.5082 11.8938 14.3329 11.7283C14.1576 11.5628 14.151 11.2879 14.3183 11.1144L17.3079 8.01238L17.3088 8.01145C17.6966 7.60807 17.6963 6.9468 17.3079 6.5438Z',
  d5: 'M11.7291 2.89221C11.5495 2.7026 11.2759 2.7026 11.0963 2.89221L6.52587 7.7164C6.31457 7.93944 5.9886 8.01105 5.70327 7.8971C5.41794 7.78316 5.23096 7.50671 5.23142 7.19947L5.23434 5.23191C5.23502 4.77337 4.87404 4.50341 4.55228 4.54167C4.29484 4.57229 4.0455 4.79357 3.99886 5.13449L3.41694 9.38835C3.28058 10.3852 3.23056 10.7781 3.25603 11.1462C3.29683 11.7358 3.47573 12.3023 3.7738 12.7949C3.95884 13.1007 4.21677 13.3788 4.89128 14.0908C5.02242 14.2292 5.14604 14.3597 5.26348 14.4832C5.54892 14.7833 5.537 15.258 5.23684 15.5435C4.93668 15.8289 4.46196 15.817 4.17651 15.5168C4.058 15.3922 3.87339 15.1974 3.74257 15.0593L3.74256 15.0593C3.1475 14.4313 2.76923 14.0322 2.49044 13.5714C2.06677 12.8712 1.81661 12.0734 1.75961 11.2497C1.72217 10.7087 1.79808 10.1542 1.91912 9.27026L2.5127 4.93119C2.64489 3.96485 3.38926 3.16941 4.37515 3.05217C5.67833 2.8972 6.73622 3.96725 6.73434 5.23414L6.73422 5.31547L10.0073 1.86058C10.7786 1.04647 12.0468 1.04647 12.818 1.86058C12.9332 1.98216 13.0307 2.11497 13.1105 2.25556C13.8858 1.65968 14.99 1.72996 15.6877 2.46638C16.4372 3.25751 16.4372 4.52427 15.6877 5.3154C15.4028 5.6161 14.9281 5.62892 14.6274 5.34404C14.3267 5.05917 14.3139 4.58447 14.5988 4.28377C14.8002 4.07119 14.8002 3.71059 14.5988 3.49801C14.4191 3.30839 14.1455 3.30839 13.9659 3.49801L11.0557 6.56981C10.7708 6.87051 10.2961 6.88333 9.99543 6.59846C9.69473 6.31358 9.68191 5.83888 9.96679 5.53818L11.7291 3.67797C11.9305 3.46539 11.9305 3.10479 11.7291 2.89221Z',
  d6: 'M17.3184 6.55171C16.9308 6.14943 16.3107 6.14943 15.9231 6.55171L9.94786 12.7532L9.95276 9.51153C9.95391 8.75401 9.32813 8.20605 8.65487 8.28477C8.13431 8.34564 7.69753 8.76922 7.61808 9.34025L6.947 14.1638C6.79233 15.2755 6.725 15.7742 6.75834 16.2478C6.81027 16.9856 7.03801 17.6965 7.41973 18.3168C7.6643 18.7143 8.00305 19.069 8.76736 19.8622C9.48797 20.6101 10.0153 21.1571 10.4608 21.5639C10.9041 21.9687 11.2452 22.2145 11.5859 22.3715C12.6852 22.878 13.9404 22.8762 15.0421 22.3657C15.3837 22.2074 15.7259 21.9602 16.1705 21.5538C16.6173 21.1455 17.1464 20.5966 17.8693 19.8464L21.9515 15.6112C22.3495 15.1981 22.3495 14.5209 21.9515 14.1079C21.5639 13.7056 20.9438 13.7056 20.5562 14.1079L18.9015 15.8252L18.3112 15.2677L21.2897 12.1765C21.6876 11.7635 21.6876 11.0863 21.2897 10.6733C20.902 10.271 20.2819 10.271 19.8943 10.6733L16.9159 13.7644L16.3256 13.2069L20.6278 8.7419C21.0258 8.32886 21.0258 7.65167 20.6278 7.23864C20.2402 6.83635 19.6201 6.83635 19.2325 7.23864L14.9303 11.7036L14.34 11.1461L17.3184 8.05497C17.7164 7.64194 17.7164 6.96475 17.3184 6.55171Z',
  d7: 'M11.7291 2.89221C11.5495 2.7026 11.2759 2.7026 11.0963 2.89221L5.22861 9.0857L5.23434 5.23191C5.23502 4.77337 4.87404 4.50341 4.55228 4.54167C4.29484 4.57229 4.0455 4.79357 3.99886 5.13449L3.41694 9.38835C3.28058 10.3852 3.23056 10.7781 3.25603 11.1462C3.29683 11.7358 3.47573 12.3023 3.7738 12.7949C3.95884 13.1007 4.21677 13.3788 4.89128 14.0908C5.02242 14.2292 5.14604 14.3597 5.26348 14.4832L4.17651 15.5168C4.058 15.3922 3.93346 15.2608 3.80264 15.1227C3.78247 15.1014 3.76226 15.0801 3.74257 15.0593C3.14751 14.4314 2.76924 14.0322 2.49044 13.5714C2.06677 12.8712 1.81661 12.0734 1.75961 11.2497C1.72217 10.7087 1.79808 10.1542 1.91912 9.27026C1.92296 9.24219 1.92685 9.21379 1.93078 9.18504L2.5127 4.93119C2.64489 3.96485 3.38926 3.16941 4.37515 3.05217C5.67833 2.8972 6.73622 3.96725 6.73434 5.23414L6.73422 5.31547L10.0073 1.86058C10.7786 1.04647 12.0468 1.04647 12.818 1.86058C12.9332 1.98216 13.0307 2.11497 13.1105 2.25556C13.8858 1.65968 14.99 1.72996 15.6877 2.46638C16.4372 3.25751 16.4372 4.52427 15.6877 5.3154L14.5988 4.28377C14.8002 4.07119 14.8002 3.71059 14.5988 3.49801C14.4191 3.30839 14.1455 3.30839 13.9659 3.49801L11.0557 6.56981L9.96679 5.53818L11.7291 3.67797C11.9305 3.46539 11.9305 3.10479 11.7291 2.89221Z',
} as const;

export const IconClapping02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clapping-02-stroke-rounded IconClapping02StrokeRounded"
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

export const IconClapping02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clapping-02-duotone-rounded IconClapping02DuotoneRounded"
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

export const IconClapping02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clapping-02-twotone-rounded IconClapping02TwotoneRounded"
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

export const IconClapping02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clapping-02-solid-rounded IconClapping02SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconClapping02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clapping-02-bulk-rounded IconClapping02BulkRounded"
    >
      <path 
        opacity="0.5" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconClapping02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clapping-02-stroke-sharp IconClapping02StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconClapping02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clapping-02-solid-sharp IconClapping02SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfClapping02: TheIconSelfPack = {
  name: 'Clapping02',
  StrokeRounded: IconClapping02StrokeRounded,
  DuotoneRounded: IconClapping02DuotoneRounded,
  TwotoneRounded: IconClapping02TwotoneRounded,
  SolidRounded: IconClapping02SolidRounded,
  BulkRounded: IconClapping02BulkRounded,
  StrokeSharp: IconClapping02StrokeSharp,
  SolidSharp: IconClapping02SolidSharp,
};