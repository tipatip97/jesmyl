import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21.9987 11.9922C22.0044 12.4917 21.9915 12.9931 21.9598 13.4842C21.6856 17.7299 18.3536 21.1118 14.1706 21.3901C12.7435 21.485 11.2536 21.4848 9.8294 21.3901C9.33896 21.3574 8.8044 21.2403 8.34401 21.0505C7.83177 20.8394 7.5756 20.7338 7.44544 20.7498C7.31527 20.7659 7.1264 20.9052 6.74868 21.184C6.08268 21.6755 5.24367 22.0285 3.99943 21.9982C3.37026 21.9829 3.05568 21.9752 2.91484 21.7349C2.77401 21.4946 2.94941 21.1619 3.30021 20.4966C3.78674 19.5739 4.09501 18.5176 3.62791 17.6712C2.82343 16.4623 2.1401 15.0305 2.04024 13.4842C1.98659 12.6533 1.98659 11.7929 2.04024 10.9621C2.31441 6.71638 5.64639 3.33448 9.8294 3.05621C10.2156 3.03051 10.6067 3.01177 11 3',
  d2: 'M17.9992 2C16.7328 2 15.9117 2.8076 14.9405 3.10196C14.5456 3.22165 14.3482 3.2815 14.2683 3.36586C14.1884 3.45022 14.165 3.5735 14.1182 3.82005C13.6174 6.4584 14.712 8.89759 17.3222 9.84699C17.6027 9.949 17.7429 10 18.0006 10C18.2583 10 18.3986 9.94899 18.679 9.84698C21.2891 8.89758 22.3826 6.45839 21.8817 3.82005C21.8349 3.57346 21.8114 3.45016 21.7315 3.36579C21.6516 3.28143 21.4542 3.22162 21.0593 3.10199C20.0878 2.80766 19.2657 2 17.9992 2Z',
  d3: 'M11.9953 12.5H12.0042M15.9908 12.5H15.9998M7.99976 12.5H8.00873',
  d4: 'M14.8171 3.13946C14.5036 3.23514 14.3394 3.29079 14.2683 3.36586C14.1884 3.45022 14.165 3.5735 14.1182 3.82005C13.6174 6.4584 14.712 8.89759 17.3222 9.84699C17.6027 9.949 17.7429 10 18.0006 10C18.2583 10 18.3986 9.94899 18.679 9.84698C19.7921 9.44208 20.6294 8.76621 21.1849 7.91949C21.6189 8.85495 21.8896 9.88454 21.9598 10.9707C22.0134 11.8009 22.0134 12.6607 21.9598 13.4909C21.6856 17.7332 18.3536 21.1125 14.1706 21.3905C12.7435 21.4854 11.2536 21.4852 9.8294 21.3905C9.33896 21.3579 8.8044 21.2409 8.34401 21.0513C7.83182 20.8403 7.5756 20.7348 7.44544 20.7508C7.31527 20.7668 7.1264 20.9061 6.74868 21.1846C6.08268 21.6757 5.24367 22.0285 3.99943 21.9982C3.37027 21.9829 3.05567 21.9752 2.91484 21.7351C2.77401 21.495 2.94941 21.1626 3.30021 20.4978C3.78674 19.5758 4.09501 18.5203 3.62791 17.6746C2.82343 16.4666 2.1401 15.036 2.04024 13.4909C1.98659 12.6607 1.98659 11.8009 2.04024 10.9707C2.31441 6.72838 5.64639 3.34913 9.8294 3.07107C11.2536 2.97641 12.7435 2.97621 14.1706 3.07107C14.3885 3.08556 14.6041 3.10846 14.8171 3.13946Z',
  d5: 'M16.027 1.76768C16.5525 1.50907 17.1965 1.25 17.9983 1.25C18.8001 1.25 19.4444 1.50906 19.97 1.76764C20.1484 1.8554 20.3028 1.93633 20.4432 2.00989C20.7534 2.17248 20.995 2.29912 21.2759 2.38421C21.4557 2.43867 21.6433 2.4955 21.7742 2.54421C21.8865 2.58599 22.105 2.67049 22.2751 2.85C22.4251 3.0083 22.4959 3.1817 22.5364 3.31625C22.5697 3.42717 22.5978 3.57579 22.6176 3.68016C23.1751 6.61675 21.9472 9.45596 18.9345 10.5518C18.6613 10.6513 18.3902 10.75 17.9997 10.75C17.6092 10.75 17.3381 10.6513 17.065 10.5518C14.0523 9.45606 12.823 6.61704 13.3804 3.6802C13.4002 3.57585 13.4283 3.42725 13.4616 3.31634C13.5021 3.18179 13.5729 3.00842 13.7229 2.85012C13.8929 2.6706 14.1115 2.58607 14.2237 2.54428C14.3546 2.49555 14.5422 2.43869 14.722 2.38421C15.0027 2.29913 15.2441 2.17256 15.554 2.01001C15.6943 1.93644 15.8486 1.85549 16.027 1.76768Z',
  d6: 'M12.1145 2.5419C12.1149 2.58752 12.0853 2.68613 12.026 2.88334C11.9691 3.07289 11.9283 3.28997 11.9106 3.38357L11.9077 3.3991C11.2381 6.92881 12.7328 10.5702 16.5527 11.9599L16.577 11.9688C16.866 12.0742 17.344 12.2486 18.0007 12.2486C18.6574 12.2486 19.1354 12.0742 19.4244 11.9687L19.4487 11.9599C20.364 11.6269 21.1457 11.1646 21.796 10.6057C22.121 10.3264 22.2835 10.1868 22.4127 10.2007C22.4721 10.2071 22.5251 10.2294 22.5713 10.2674C22.6715 10.35 22.6838 10.5391 22.7082 10.9174C22.7639 11.7798 22.7639 12.6718 22.7082 13.5342C22.4103 18.144 18.787 21.8303 14.2204 22.1339C12.7601 22.2309 11.2369 22.2307 9.77965 22.1339C9.21472 22.0963 8.59978 21.9627 8.05839 21.7398C7.97233 21.7043 7.89626 21.673 7.82861 21.6454C7.69203 21.5898 7.62373 21.5619 7.54604 21.5716C7.46835 21.5812 7.40859 21.6252 7.28907 21.7131L7.1938 21.7833C6.40136 22.3676 5.40092 22.7775 3.98117 22.743L3.93544 22.7419C3.66155 22.7353 3.36961 22.7283 3.13152 22.6823C2.84475 22.6268 2.48996 22.4881 2.26791 22.1095C2.02623 21.6975 2.12313 21.2808 2.21688 21.0184C2.30536 20.7707 2.45874 20.4802 2.61542 20.1835L2.6369 20.1428C3.10323 19.2591 3.23314 18.5369 2.98381 18.0554C2.15148 16.799 1.40272 15.2506 1.2918 13.5342C1.23607 12.6718 1.23607 11.7798 1.2918 10.9174C1.58972 6.30757 5.213 2.62128 9.77965 2.31772C10.3812 2.27774 10.994 2.25422 11.609 2.24722C11.7741 2.24534 11.8567 2.2444 11.9004 2.25747C12.0435 2.30024 12.113 2.39259 12.1145 2.5419ZM8 11.4961C7.44772 11.4961 7 11.9438 7 12.4961C7 13.0484 7.44772 13.4961 8 13.4961H8.00897C8.56126 13.4961 9.00897 13.0484 9.00897 12.4961C9.00897 11.9438 8.56126 11.4961 8.00897 11.4961H8ZM11.9955 11.4961C11.4432 11.4961 10.9955 11.9438 10.9955 12.4961C10.9955 13.0484 11.4432 13.4961 11.9955 13.4961H12.0045C12.5568 13.4961 13.0045 13.0484 13.0045 12.4961C13.0045 11.9438 12.5568 11.4961 12.0045 11.4961H11.9955Z',
  d7: 'M12.026 2.8833C12.0853 2.68609 12.1149 2.58748 12.1145 2.54186C12.113 2.39255 12.0435 2.3002 11.9004 2.25743C11.8567 2.24436 11.7741 2.2453 11.609 2.24718C10.994 2.25418 10.3812 2.2777 9.77965 2.31768C5.213 2.62124 1.58972 6.30753 1.2918 10.9173C1.23607 11.7797 1.23607 12.6718 1.2918 13.5342C1.40272 15.2506 2.15148 16.799 2.98381 18.0554C3.23314 18.5369 3.10323 19.259 2.6369 20.1427L2.61542 20.1834C2.45874 20.4802 2.30536 20.7707 2.21688 21.0183C2.12313 21.2808 2.02623 21.6974 2.26791 22.1095C2.48996 22.4881 2.84475 22.6267 3.13152 22.6822C3.36961 22.7283 3.66155 22.7353 3.93544 22.7418L3.98117 22.7429C5.40092 22.7775 6.40136 22.3676 7.1938 21.7832C7.22778 21.7582 7.25946 21.7348 7.28907 21.713C7.40859 21.6251 7.46835 21.5812 7.54604 21.5716C7.62373 21.5619 7.69203 21.5897 7.82861 21.6454C7.89626 21.673 7.97233 21.7043 8.05839 21.7397C8.59978 21.9627 9.21472 22.0963 9.77965 22.1338C11.2369 22.2307 12.7601 22.2309 14.2204 22.1338C18.787 21.8303 22.4103 18.144 22.7082 13.5342C22.7639 12.6718 22.7639 11.7797 22.7082 10.9173C22.6838 10.5391 22.6715 10.3499 22.5713 10.2674C22.5251 10.2294 22.4721 10.2071 22.4127 10.2007C22.2835 10.1867 22.121 10.3264 21.796 10.6057C21.1457 11.1646 20.364 11.6268 19.4487 11.9598L19.4244 11.9687C19.1354 12.0742 18.6574 12.2486 18.0007 12.2486C17.344 12.2486 16.866 12.0742 16.577 11.9687L16.5527 11.9598C12.7328 10.5702 11.2381 6.92877 11.9077 3.39906L11.9106 3.38353C11.9283 3.28993 11.9691 3.07285 12.026 2.8833Z',
  d8: 'M7 12.4961C7 11.9438 7.44772 11.4961 8 11.4961H8.00897C8.56126 11.4961 9.00897 11.9438 9.00897 12.4961C9.00897 13.0484 8.56126 13.4961 8.00897 13.4961H8C7.44772 13.4961 7 13.0484 7 12.4961ZM10.9955 12.4961C10.9955 11.9438 11.4432 11.4961 11.9955 11.4961H12.0045C12.5568 11.4961 13.0045 11.9438 13.0045 12.4961C13.0045 13.0484 12.5568 13.4961 12.0045 13.4961H11.9955C11.4432 13.4961 10.9955 13.0484 10.9955 12.4961Z',
  d9: 'M9.61767 3.00882C1.67552 4.00174 0.243315 13.2171 3.6362 17.9659L2.06865 21.8857C2.03642 21.9656 1.98962 21.9953 2.06865 21.9656L6.46711 20.4852C8.73684 21.9174 14.9391 21.8114 17.1559 20.6384C19.3728 19.4654 22.157 17.1295 21.8932 12.2316M9.61767 3.00882C9.77431 2.99973 9.93267 2.99512 10.0927 2.99512M9.61767 3.00882L11.2207 2.99512',
  d10: 'M14.1678 3.23113C15.4846 3.32682 16.2741 2.08489 17.8496 1.97461C19.2328 1.97433 20.2323 3.1902 21.687 3.1902C22.5409 7.2008 20.6011 9.29803 17.9395 10.0022C15.4241 9.40175 13.2773 7.29416 14.1678 3.23113Z',
  d11: 'M15.8021 1.91299C16.3588 1.62386 17.0786 1.25 17.9999 1.25C18.9251 1.25 19.6456 1.62454 20.203 1.91424L20.2418 1.9344C20.8366 2.24329 21.2583 2.44999 21.7835 2.44999H22.3706L22.5115 3.01996C22.9716 4.88056 22.7532 6.63193 21.9624 8.02102C21.1693 9.4143 19.8272 10.3929 18.1497 10.7349L17.9999 10.7654L17.8501 10.7349C16.1725 10.3929 14.8305 9.4143 14.0374 8.02101C13.2467 6.63193 13.0282 4.88055 13.4883 3.01996L13.6292 2.44999H14.2163C14.7427 2.44999 15.1662 2.24295 15.7611 1.93427L15.8021 1.91299Z',
  d12: 'M22.75 12.2105C22.75 11.5514 22.75 11.1796 22.7278 10.8595C22.6941 10.3738 22.6232 9.89861 22.5178 9.43668C21.523 10.7236 20.0902 11.615 18.3994 11.9597L17.9999 12.0412L17.6004 11.9597C15.5797 11.5478 13.9276 10.3549 12.951 8.63942C11.9808 6.93498 11.7486 4.84793 12.2748 2.71994L12.391 2.25H11.2105H11.2105H11.2105C10.5514 2.24999 10.1796 2.24999 9.85949 2.2722C5.25571 2.59176 1.59176 6.25571 1.2722 10.8595C1.24999 11.1796 1.24999 11.5514 1.25 12.2105V12.2105V12.2105V12.2895V12.2895V12.2895C1.24999 12.9486 1.24999 13.3205 1.2722 13.6405C1.38603 15.2804 1.92471 16.8022 2.77921 18.0954L1.47483 22.75L6.43709 21.3113C7.48219 21.8226 8.63831 22.143 9.85949 22.2278C10.1796 22.25 10.5514 22.25 11.2105 22.25H12.7895C13.4486 22.25 13.8204 22.25 14.1405 22.2278C18.7443 21.9082 22.4082 18.2443 22.7278 13.6405C22.75 13.3204 22.75 12.9486 22.75 12.2895V12.2105ZM9.00897 11.5H7V13.5H9.00897V11.5ZM13.0045 11.5H10.9955V13.5H13.0045V11.5Z',
};

export const IconMessageSecure02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-secure-02-stroke-rounded IconMessageSecure02StrokeRounded"
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

export const IconMessageSecure02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-secure-02-duotone-rounded IconMessageSecure02DuotoneRounded"
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

export const IconMessageSecure02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-secure-02-twotone-rounded IconMessageSecure02TwotoneRounded"
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

export const IconMessageSecure02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-secure-02-solid-rounded IconMessageSecure02SolidRounded"
    >
      <path 
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

export const IconMessageSecure02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-secure-02-bulk-rounded IconMessageSecure02BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMessageSecure02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-secure-02-stroke-sharp IconMessageSecure02StrokeSharp"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageSecure02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-secure-02-solid-sharp IconMessageSecure02SolidSharp"
    >
      <path 
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

export const iconPackOfMessageSecure02: TheIconSelfPack = {
  name: 'MessageSecure02',
  StrokeRounded: IconMessageSecure02StrokeRounded,
  DuotoneRounded: IconMessageSecure02DuotoneRounded,
  TwotoneRounded: IconMessageSecure02TwotoneRounded,
  SolidRounded: IconMessageSecure02SolidRounded,
  BulkRounded: IconMessageSecure02BulkRounded,
  StrokeSharp: IconMessageSecure02StrokeSharp,
  SolidSharp: IconMessageSecure02SolidSharp,
};