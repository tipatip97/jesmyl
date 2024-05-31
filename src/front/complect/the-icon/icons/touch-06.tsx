import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.59994 13.5449V8.97139M7.59994 8.97139V3.42696C7.59994 2.60533 8.3156 2.0022 9.15447 2.0022C9.99333 2.0022 10.6654 2.60533 10.6654 3.42696L10.7334 8.49961M7.59994 8.97139C6.25491 10.1652 4.78332 11.5471 4.58842 11.9334C3.6815 13.2856 3.75284 14.4973 5.29653 16.5677C6.28078 17.8878 7.44758 19.233 7.52002 19.3029C8.32084 20.076 8.10384 21.1215 8.10384 21.9982M10.7334 8.49961V11.0294M10.7334 8.49961C11.4499 7.65763 13.3751 7.95679 13.7788 9.67699M13.8153 11.0254V10.0226C13.8153 9.94349 13.8113 9.86418 13.7999 9.78597M13.7788 9.67699C13.7805 9.68423 13.7822 9.69149 13.7838 9.69878C13.7903 9.72764 13.7956 9.75673 13.7999 9.78597M13.7788 9.67699C13.783 9.71204 13.79 9.74837 13.7999 9.78597M13.7788 9.67699C14.0069 8.49961 16.7373 8.77029 16.8636 10.8789V12.0249M17.8438 21.9936V20.9545C17.8829 19.728 18.9212 19.3569 19.5379 18.017C20.1616 16.7848 19.9729 13.6552 19.9729 12.1566C19.9998 11.8013 19.7571 10.7668 18.6312 10.3755C18.2774 10.2077 17.4819 9.96666 16.797 10.4491',
  d2: 'M7.67744 19.4764L5.61785 16.9792C4.57607 15.4928 4.05518 14.7495 4.00535 13.9372C3.98971 13.6821 4.00839 13.4262 4.06095 13.1756C4.41587 11.4833 6.39199 10.1265 7.61291 9V3.5C7.61291 2.67157 8.30614 2 9.16129 2C10.0164 2 10.7097 2.67157 10.7097 3.5V8.5C11.1611 8.28132 11.6739 7.93462 12.1975 8.04885C13.1185 8.24978 13.8065 9.04706 13.8065 10C13.8065 9.42969 14.2821 9 14.8387 9C15.9789 9 16.9032 9.89543 16.9032 11C16.9032 10.4756 17.3727 10.0758 17.8904 10.1594C18.9799 10.3353 19.9988 10.944 20 12.1923V13.8347C20 15.8506 20 16.8586 19.6989 17.668C19.4655 18.2953 19.1063 18.8637 18.6493 19.3462C18.2019 19.8188 17.8636 20.4036 17.8636 21.0449V22H8.12903V20.7248C8.12903 20.2711 7.96978 19.8309 7.67744 19.4764Z',
  d3: 'M7.59994 13.5447V8.97114M7.59994 8.97114V3.42671C7.59994 2.60508 8.3156 2.00195 9.15447 2.00195C9.99333 2.00195 10.6654 2.60508 10.6654 3.42671L10.7334 8.49936M7.59994 8.97114C6.25491 10.165 4.78332 11.5469 4.58842 11.9332C3.6815 13.2854 3.75284 14.4971 5.29653 16.5675C6.28078 17.8876 7.44758 19.2328 7.52002 19.3027C8.32084 20.0758 8.10384 21.1213 8.10384 21.998M10.7334 8.49936V11.0292M10.7334 8.49936C11.4499 7.65738 13.3751 7.95654 13.7788 9.67674M13.7788 9.67674C13.7805 9.68398 13.7822 9.69124 13.7838 9.69853C13.7903 9.72739 13.7956 9.75648 13.7999 9.78572M13.7788 9.67674C13.783 9.71179 13.79 9.74812 13.7999 9.78572M13.7788 9.67674C14.0069 8.49936 16.7373 8.77004 16.8636 10.8787V12.0247M13.8153 11.0252V10.0224C13.8153 9.94324 13.8113 9.86393 13.7999 9.78572M17.8438 21.9934V20.9543C17.8829 19.7278 18.9212 19.3567 19.5379 18.0168C20.1616 16.7846 19.9729 13.655 19.9729 12.1564C19.9998 11.8011 19.7571 10.7666 18.6312 10.3753C18.2774 10.2075 17.4819 9.96641 16.797 10.4489',
  d4: 'M5.61785 16.9792L5.00367 17.4096C5.01492 17.4257 5.02678 17.4413 5.03925 17.4564L5.61785 16.9792ZM7.67744 19.4764L8.25604 18.9992H8.25604L7.67744 19.4764ZM8.09844 9.55121C8.40287 9.27033 8.42195 8.79584 8.14107 8.49141C7.86018 8.18698 7.38569 8.1679 7.08126 8.44879L8.09844 9.55121ZM4.00535 13.9372L3.25676 13.9831L4.00535 13.9372ZM4.06095 13.1756L4.79498 13.3295L4.06095 13.1756ZM19.6989 17.668L20.4018 17.9295V17.9295L19.6989 17.668ZM6.86291 13.5C6.86291 13.9142 7.19869 14.25 7.61291 14.25C8.02712 14.25 8.36291 13.9142 8.36291 13.5H6.86291ZM13.0565 11C13.0565 11.4142 13.3922 11.75 13.8065 11.75C14.2207 11.75 14.5565 11.4142 14.5565 11H13.0565ZM12.1975 8.04885L12.3573 7.31608L12.1975 8.04885ZM16.1532 12C16.1532 12.4142 16.489 12.75 16.9032 12.75C17.3174 12.75 17.6532 12.4142 17.6532 12H16.1532ZM17.8904 10.1594L17.7709 10.8998L17.7709 10.8998L17.8904 10.1594ZM20 12.1923H20.75V12.1915L20 12.1923ZM9.95968 11C9.95968 11.4142 10.2955 11.75 10.7097 11.75C11.1239 11.75 11.4597 11.4142 11.4597 11H9.95968ZM7.37903 22C7.37903 22.4142 7.71482 22.75 8.12903 22.75C8.54325 22.75 8.87903 22.4142 8.87903 22H7.37903ZM18.6493 19.3462L18.1048 18.8305H18.1048L18.6493 19.3462ZM17.1136 22C17.1136 22.4142 17.4494 22.75 17.8636 22.75C18.2778 22.75 18.6136 22.4142 18.6136 22H17.1136ZM5.03925 17.4564L7.09883 19.9536L8.25604 18.9992L6.19645 16.502L5.03925 17.4564ZM6.23202 16.5487C5.7026 15.7934 5.33736 15.2708 5.09299 14.8372C4.85546 14.4157 4.76922 14.1404 4.75395 13.8913L3.25676 13.9831C3.29131 14.5464 3.49043 15.0488 3.78625 15.5737C4.07522 16.0864 4.49131 16.6786 5.00367 17.4096L6.23202 16.5487ZM4.75395 13.8913C4.74242 13.7033 4.75617 13.5146 4.79498 13.3295L3.32692 13.0216C3.26061 13.3377 3.237 13.6609 3.25676 13.9831L4.75395 13.8913ZM19.25 13.8347C19.25 14.852 19.2497 15.5808 19.2138 16.1572C19.1783 16.7276 19.1101 17.0996 18.996 17.4065L20.4018 17.9295C20.5888 17.427 20.6711 16.8903 20.7109 16.2504C20.7503 15.6165 20.75 14.8334 20.75 13.8347H19.25ZM8.36291 13.5V3.5H6.86291V13.5H8.36291ZM9.95968 3.5V8.5H11.4597V3.5H9.95968ZM9.16129 2.75C9.62485 2.75 9.95968 3.10805 9.95968 3.5H11.4597C11.4597 2.23509 10.408 1.25 9.16129 1.25V2.75ZM8.36291 3.5C8.36291 3.10805 8.69773 2.75 9.16129 2.75V1.25C7.91455 1.25 6.86291 2.23509 6.86291 3.5H8.36291ZM13.0565 10V11H14.5565V10H13.0565ZM12.0376 8.78161C12.6371 8.91241 13.0565 9.42272 13.0565 10H14.5565C14.5565 8.6714 13.5998 7.58715 12.3573 7.31608L12.0376 8.78161ZM16.1532 11V12H17.6532V11H16.1532ZM14.8387 9.75C15.5873 9.75 16.1532 10.3319 16.1532 11H17.6532C17.6532 9.45895 16.3705 8.25 14.8387 8.25V9.75ZM9.95968 8.5V11H11.4597V8.5H9.95968ZM7.37903 20.7248V22H8.87903V20.7248H7.37903ZM18.996 17.4065C18.7988 17.9365 18.4944 18.419 18.1048 18.8305L19.1939 19.8619C19.7181 19.3083 20.1322 18.6541 20.4018 17.9295L18.996 17.4065ZM17.1136 21.0449V22H18.6136V21.0449H17.1136ZM18.1048 18.8305C17.589 19.3752 17.1136 20.1359 17.1136 21.0449H18.6136C18.6136 20.6714 18.8147 20.2623 19.1939 19.8619L18.1048 18.8305ZM7.09883 19.9536C7.28192 20.1756 7.37903 20.4477 7.37903 20.7248H8.87903C8.87903 20.0946 8.65765 19.4862 8.25604 18.9992L7.09883 19.9536ZM19.25 12.1923V13.8347H20.75V12.1923H19.25ZM17.6532 11C17.6532 10.9375 17.7092 10.8898 17.7709 10.8998L18.01 9.41898C17.0363 9.26177 16.1532 10.0137 16.1532 11H17.6532ZM14.5565 10C14.5565 9.88105 14.6582 9.75 14.8387 9.75V8.25C13.9061 8.25 13.0565 8.97833 13.0565 10H14.5565ZM17.7709 10.8998C18.2298 10.9739 18.6144 11.1314 18.8694 11.3467C19.1016 11.5427 19.2496 11.8018 19.25 12.193L20.75 12.1915C20.7491 11.3344 20.3871 10.665 19.8372 10.2006C19.3101 9.75557 18.6406 9.5208 18.01 9.41898L17.7709 10.8998ZM11.0366 9.17499C11.1594 9.11553 11.2994 9.0408 11.4015 8.9884C11.5154 8.92991 11.613 8.88267 11.7044 8.84622C11.8919 8.77142 11.9859 8.77033 12.0376 8.78161L12.3573 7.31608C11.8855 7.21314 11.4613 7.32828 11.1487 7.45294C10.8724 7.56315 10.5277 7.7548 10.3827 7.82501L11.0366 9.17499ZM4.79498 13.3295C4.92668 12.7016 5.37518 12.0678 6.0334 11.4035C6.35503 11.0789 6.70689 10.7662 7.06429 10.4567C7.41361 10.1541 7.78165 9.84351 8.09844 9.55121L7.08126 8.44879C6.7876 8.71975 6.45367 9.00116 6.08231 9.32275C5.71904 9.63735 5.33153 9.98076 4.9679 10.3477C4.25563 11.0665 3.55014 11.9573 3.32692 13.0216L4.79498 13.3295Z',
  d5: 'M5.55028 9.80108C5.32155 10.0078 5.10889 10.2053 4.9679 10.3476C4.25563 11.0664 3.55014 11.9571 3.32692 13.0214C3.26061 13.3376 3.237 13.6608 3.25676 13.983C3.29131 14.5462 3.49043 15.0486 3.78625 15.5735C4.07108 16.0789 4.47953 16.6616 4.98183 17.3783L7.09883 19.9535C7.28192 20.1754 7.37903 20.4475 7.37903 20.7247C7.3787 20.9249 7.3783 21.1863 7.41974 21.3751C7.56614 22.0419 8.08695 22.5627 8.75377 22.7091C8.94252 22.7506 9.15102 22.7502 9.35126 22.7499L16.9085 22.7498C17.8502 22.7498 18.6136 21.9864 18.6136 21.0447C18.6136 20.6713 18.8147 20.2622 19.1939 19.8617C19.7181 19.3081 20.1322 18.654 20.4018 17.9293C20.5888 17.4268 20.6711 16.8902 20.7109 16.2502C20.75 15.6218 20.75 14.8465 20.75 13.86V12.1921C20.7491 11.335 20.3871 10.6648 19.8372 10.2005C19.5133 9.92698 19.1356 9.73289 18.7462 9.60027C18.4538 9.50068 18.3076 9.45089 18.1822 9.54064C18.0568 9.63039 18.0568 9.79968 18.0568 10.1383V11.9999C18.0568 12.2313 17.8642 12.4188 17.6265 12.4188C17.3888 12.4188 17.1962 12.2313 17.1962 11.9999V9.67831C17.1962 9.5849 17.1962 9.53819 17.18 9.491C17.1639 9.4438 17.1391 9.41174 17.0894 9.34764C16.6609 8.79439 16.0195 8.42498 15.1019 8.31541C14.8372 8.2838 14.7048 8.26799 14.604 8.35751C14.5032 8.44702 14.5032 8.59183 14.5032 8.88144V10.8831C14.5032 11.1144 14.3105 11.3019 14.0728 11.3019C13.8352 11.3019 13.6425 11.1144 13.6425 10.8831V8.24032C13.6425 8.10427 13.6425 8.03625 13.6102 7.97241C13.5779 7.90856 13.53 7.8733 13.4342 7.80278C13.1185 7.57048 12.7524 7.4021 12.3573 7.31592C12.0276 7.24398 11.7211 7.27855 11.4597 7.34845L11.3708 7.3762C11.1677 7.43957 11.0661 7.47125 11.0078 7.55056C10.9495 7.62986 10.9495 7.73623 10.9495 7.94896V10.8831C10.9495 11.1144 10.7568 11.3019 10.5192 11.3019C10.2815 11.3019 10.0888 11.1144 10.0888 10.8831V2.59651C10.0888 1.85282 9.48593 1.24995 8.74224 1.25C7.99861 1.25005 7.39581 1.85289 7.39581 2.59651V13.6753C7.39581 13.9066 7.20315 14.0941 6.96548 14.0941C6.72782 14.0941 6.53516 13.9066 6.53516 13.6753V10.2455C6.53516 9.67606 6.53516 9.39134 6.35691 9.31219C6.17866 9.23303 5.9692 9.42238 5.55028 9.80108Z',
  d6: 'M10.7015 8.01185V11.0095M10.7015 8.01185H12.3891M10.7015 8.01185V4.83966C10.7015 4.56766 10.7587 3.43905 10.6222 2.99819C10.1972 1.99943 8.98704 1.69335 8.18591 2.33496C7.84593 2.60723 7.60435 3.13245 7.60435 3.51726V14.1267M12.3891 8.01185C13.1524 8.01185 13.6124 8.59605 13.8601 9.45168L15.4524 9.51069M12.3891 8.01185C13.1716 8.06839 13.7775 8.72003 13.7775 9.50496V12.0186M8.12667 22.0015V19.9973C6.68912 18.2262 5.7947 17.34 4.71728 15.6674C3.14615 13.4604 4.20128 11.666 7.42224 9.17227M15.4524 9.51069C16.1415 9.48186 16.8908 10.3422 17.0033 10.9527L18.716 11.0241C19.7026 11.11 20.0584 12.1484 19.9935 12.9627L19.9463 16.0785C19.9935 18.1202 18.5781 19.0938 17.8527 19.9849V21.9853M15.4524 9.51069L15.6502 9.54667C16.3621 9.67619 16.8796 10.2966 16.8796 11.0206V12.9923',
  d7: 'M8.75311 1.25C7.98402 1.25 7.38241 1.83514 7.38241 2.53109V13.671H6.58175V9.50164C6.17117 9.84794 5.23115 10.6477 4.85047 11.0219C4.08112 11.7781 3.48974 12.5604 3.31119 13.3896C3.25841 13.6347 3.23967 13.8849 3.25537 14.1342C3.27872 14.505 3.41179 14.8792 3.70125 15.3794C3.99283 15.8832 4.42309 16.4824 5.01853 17.3099L7.97275 20.771V22.75H18.3064V20.7566C18.5671 20.4885 19.1277 19.9082 19.5455 19.423C19.7544 19.1802 19.9515 18.9372 20.1109 18.7156C20.2742 18.4884 20.3822 18.3051 20.4307 18.1781C20.5835 17.7782 20.6658 17.3148 20.7077 16.6588C20.7498 15.9996 20.75 15.1716 20.75 14.0439V12.557C20.75 11.8495 20.1611 11.2759 19.4346 11.2759H18.0086V13.114H17.2079V10.886C17.2079 10.1785 16.619 9.60492 15.8926 9.60492H14.4665V12H13.6659V9.21503C13.6659 8.5075 13.077 7.93394 12.3505 7.93394H10.9245V10.886H10.1238V2.53109C10.1238 1.83514 9.52221 1.25 8.75311 1.25Z',
} as const;

export const IconTouch06StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-06-stroke-rounded IconTouch06StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch06DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-06-duotone-rounded IconTouch06DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch06TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-06-twotone-rounded IconTouch06TwotoneRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch06SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-06-solid-rounded IconTouch06SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch06BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-06-bulk-rounded IconTouch06BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch06StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-06-stroke-sharp IconTouch06StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTouch06SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-06-solid-sharp IconTouch06SolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTouch06: TheIconSelfPack = {
  name: 'Touch06',
  StrokeRounded: IconTouch06StrokeRounded,
  DuotoneRounded: IconTouch06DuotoneRounded,
  TwotoneRounded: IconTouch06TwotoneRounded,
  SolidRounded: IconTouch06SolidRounded,
  BulkRounded: IconTouch06BulkRounded,
  StrokeSharp: IconTouch06StrokeSharp,
  SolidSharp: IconTouch06SolidSharp,
};