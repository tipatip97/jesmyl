import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.5 8.00159V2.00159M18.5 8.00159C17.7998 8.00159 16.4915 6.00729 16 5.50159M18.5 8.00159C19.2002 8.00159 20.5085 6.00729 21 5.50159',
  d2: 'M15.3917 21.9976C15.34 20.0836 15.4689 19.8531 15.6056 19.4274C15.7424 19.0016 16.6987 17.4661 17.0371 16.3691C18.1318 12.8198 17.1115 12.0649 15.7512 11.0584C14.2426 9.9422 11.3973 9.37692 9.98622 9.4993V3.74584C9.98622 2.78251 9.2053 2.00159 8.24197 2.00159C7.27865 2.00159 6.49772 2.78251 6.49772 3.74584V9.9657M6.49823 21.9984V20.985C6.43377 20.0406 5.49578 18.9231 4.32721 17.3163C3.12558 15.5756 2.86737 14.6969 3.0564 13.8845C3.15377 13.4691 3.40643 12.7828 4.64696 11.61L6.49772 9.9657M6.49772 14.032V9.9657',
  d3: 'M16.4983 17.6892C17.2055 16.2125 18.1731 13.3226 16.8209 11.9618C14.6893 9.81667 11.7081 9.42404 9.99986 9.5V3.75C9.99986 2.7835 9.21635 2 8.24986 2C7.28336 2 6.49986 2.7835 6.49986 3.75V10.0001C6.47655 10.0177 3.62164 12.1753 3.12367 13.6086C2.67793 14.8916 3.53229 16.0336 4.17457 17.0914C4.6719 17.9105 6.5 19.9316 6.5 21.0049V22H15.3917V20.382C15.3917 19.4564 16.1158 18.488 16.4983 17.6892Z',
  d4: 'M18.5 8V2M18.5 8C17.7998 8 16.4915 6.0057 16 5.5M18.5 8C19.2002 8 20.5085 6.0057 21 5.5',
  d5: 'M15.3912 21.996C15.3395 20.082 15.4684 19.8515 15.6051 19.4258C15.7419 19 16.6982 17.4645 17.0366 16.3675C18.1313 12.8182 17.111 12.0633 15.7507 11.0568C14.2421 9.94061 11.3968 9.37533 9.98573 9.49771V3.74425C9.98573 2.78092 9.20481 2 8.24148 2C7.27816 2 6.49723 2.78092 6.49723 3.74425V9.96411M6.49723 9.96411L4.64647 11.6084C3.40594 12.7812 3.15328 13.4675 3.05591 13.8829C2.86688 14.6953 3.12509 15.574 4.32672 17.3147C5.49529 18.9215 6.43328 20.039 6.49774 20.9834V21.9968M6.49723 9.96411V14.0304',
  d6: 'M18.5 8.00085V2.00085M18.5 8.00085C17.7998 8.00085 16.4915 6.00655 16 5.50085M18.5 8.00085C19.2002 8.00085 20.5085 6.00655 21 5.50085',
  d7: 'M15.3912 21.9983C15.3395 20.0843 15.4684 19.8538 15.6051 19.4281C15.7419 19.0023 16.6982 17.4668 17.0366 16.3698C18.1313 12.8205 17.111 12.0656 15.7507 11.0591C14.2421 9.94293 11.3968 9.37765 9.98573 9.50003V3.74657C9.98573 2.78324 9.20481 2.00232 8.24148 2.00232C7.27816 2.00232 6.49723 2.78324 6.49723 3.74657V9.96643M6.49723 9.96643L4.64647 11.6107C3.40594 12.7835 3.15328 13.4698 3.05591 13.8852C2.86688 14.6976 3.12509 15.5763 4.32672 17.317C5.49529 18.9238 6.43328 20.0413 6.49774 20.9857V21.9991M6.49723 9.96643V14.0327',
  d8: 'M4.4805 10.723C4.98068 10.2601 5.45642 9.86839 5.74999 9.6343V3.75C5.74999 2.36929 6.86928 1.25 8.24999 1.25C9.6307 1.25 10.75 2.36929 10.75 3.75V8.74751C12.6139 8.81064 15.319 9.38616 17.3531 11.4332C18.289 12.3751 18.3444 13.7529 18.1737 14.8931C17.9975 16.0699 17.5471 17.2359 17.1749 18.0131C17.0673 18.2378 16.5923 19.1093 16.4725 19.3235C16.2561 19.7563 16.1419 20.1001 16.1419 20.382V20.382C16.1419 20.6473 16.1419 20.918 16.1248 21.1214C16.1063 21.3409 16.064 21.5809 15.9397 21.8165C15.7752 22.1284 15.5203 22.3833 15.2083 22.5479C14.9727 22.6721 14.7328 22.7145 14.5133 22.7329C14.3098 22.75 14.0662 22.75 13.8009 22.75H7.49523C6.53144 22.75 5.75013 21.9687 5.75013 21.0049C5.75013 20.919 5.70361 20.7219 5.53784 20.395C5.3821 20.088 5.16113 19.7424 4.90946 19.3828C4.68559 19.063 4.44944 18.7488 4.22727 18.4532L4.22721 18.4531C3.99315 18.1414 3.49831 17.428 3.35072 17.185C3.08233 16.7547 2.76332 16.2433 2.54778 15.7201C2.26704 15.0386 2.11239 14.2344 2.41534 13.3624C2.58511 12.8738 2.92741 12.3863 3.28287 11.9613C3.64883 11.5239 4.0781 11.0953 4.4805 10.723Z',
  d9: 'M19.5059 2.25C19.5059 1.69772 19.0581 1.25 18.5059 1.25C17.9536 1.25 17.5059 1.69772 17.5059 2.25L17.5059 4.75004L16.9116 4.75002C16.736 4.74989 16.5203 4.74974 16.3439 4.77181L16.3405 4.77223C16.2141 4.788 15.638 4.85983 15.3637 5.42543C15.0887 5.99225 15.3907 6.49239 15.456 6.6006L15.7951 7.06908C16.0897 7.44491 16.4954 7.95937 16.8759 8.35038C17.0657 8.54549 17.283 8.74672 17.5139 8.90557C17.7191 9.04677 18.0693 9.25004 18.5 9.25004C18.9307 9.25004 19.2809 9.04677 19.4861 8.90557C19.717 8.74672 19.9343 8.54549 20.1241 8.35038C20.5046 7.95937 20.9102 7.44492 21.2049 7.06909L21.544 6.60059C21.6093 6.49239 21.9113 5.99225 21.6363 5.42543C21.362 4.85983 20.7859 4.78799 20.6595 4.77223L20.6561 4.77181C20.4797 4.74974 20.264 4.74989 20.0884 4.75002L19.5059 4.75004L19.5059 2.25Z',
  d10: 'M15.3917 22V20C15.3917 20 16.1158 18.488 16.4983 17.6892C17.2055 16.2125 18.1731 13.3226 16.8209 11.9618C14.6893 9.81667 11.7081 9.42404 9.99986 9.5V3.75C9.99986 2.7835 9.21635 2 8.24986 2C7.28336 2 6.49986 2.7835 6.49986 3.75L6.49986 14M6.5 22L6.5 20.382C6.5 20.382 4.6719 17.9105 4.17457 17.0914C3.53229 16.0336 2.67793 14.8916 3.12367 13.6086C3.62368 12.1694 6.5 10 6.5 10',
  d11: 'M18.5 2L18.5 7.41928M16 5.5L18.5 8L21 5.5',
  d12: 'M6.00111 20.7374L5.84357 20.513C5.66386 20.2566 5.41895 19.9061 5.1583 19.5297C4.64346 18.7862 4.04749 17.9135 3.7846 17.4806C3.72802 17.3874 3.66636 17.2885 3.60176 17.185L3.6017 17.1849C3.33331 16.7546 3.0143 16.2432 2.79876 15.72C2.51802 15.0385 2.36337 14.2343 2.66632 13.3623C2.83674 12.8718 3.18109 12.3822 3.53838 11.9558C3.90629 11.5167 4.33771 11.0867 4.74144 10.7136C5.14689 10.339 5.5346 10.0123 5.82039 9.77968C5.88615 9.72615 5.94668 9.67747 6.00096 9.63418L6.00096 3.74988C6.00096 2.36917 7.12025 1.24988 8.50097 1.24988C9.88168 1.24988 11.001 2.36917 11.001 3.74988L11.001 8.74739C12.8648 8.81052 15.57 9.38603 17.604 11.433C18.54 12.375 18.5954 13.7528 18.4247 14.893C18.2485 16.0697 17.7981 17.2358 17.4259 18.013L16.3928 20.1702V22.7499H6.00111L6.00111 20.7374Z',
  d13: 'M18.295 8.66409L21.5021 5.45698L20.0879 4.04277L19.295 4.83566L19.295 1.24988H17.295L17.295 4.83566L16.5021 4.04277L15.0879 5.45699L18.295 8.66409Z',
};

export const IconSwipeDown02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-02-stroke-rounded IconSwipeDown02StrokeRounded"
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

export const IconSwipeDown02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-02-duotone-rounded IconSwipeDown02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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
    </TheIconWrapper>
  );
};

export const IconSwipeDown02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-02-twotone-rounded IconSwipeDown02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeDown02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-02-solid-rounded IconSwipeDown02SolidRounded"
    >
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

export const IconSwipeDown02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-02-bulk-rounded IconSwipeDown02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSwipeDown02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-02-stroke-sharp IconSwipeDown02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeDown02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-02-solid-sharp IconSwipeDown02SolidSharp"
    >
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

export const iconPackOfSwipeDown02: TheIconSelfPack = {
  name: 'SwipeDown02',
  StrokeRounded: IconSwipeDown02StrokeRounded,
  DuotoneRounded: IconSwipeDown02DuotoneRounded,
  TwotoneRounded: IconSwipeDown02TwotoneRounded,
  SolidRounded: IconSwipeDown02SolidRounded,
  BulkRounded: IconSwipeDown02BulkRounded,
  StrokeSharp: IconSwipeDown02StrokeSharp,
  SolidSharp: IconSwipeDown02SolidSharp,
};