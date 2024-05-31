import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.5 15H15.5M8.5 10H12',
  d2: 'M21.9598 10.9707C21.9711 11.146 21.98 11.3226 21.9866 11.4999C22.011 12.1626 22.0021 12.8359 21.9598 13.4908C21.6856 17.7332 18.3536 21.1124 14.1706 21.3905C12.7435 21.4853 11.2536 21.4851 9.8294 21.3905C9.33896 21.3579 8.8044 21.2408 8.34401 21.0512C7.83177 20.8403 7.5756 20.7347 7.44544 20.7508C7.31527 20.7668 7.1264 20.906 6.74868 21.1846C6.08268 21.6757 5.24367 22.0284 3.99943 21.9981C3.37026 21.9828 3.05568 21.9752 2.91484 21.735C2.77401 21.4949 2.94941 21.1625 3.30021 20.4978C3.78674 19.5758 4.09501 18.5203 3.62791 17.6746C2.82343 16.4665 2.1401 15.0359 2.04024 13.4908C1.98659 12.6606 1.98659 11.8009 2.04024 10.9707C2.31441 6.72832 5.64639 3.34908 9.8294 3.07102C10.3789 3.03449 10.4383 3.01203 11 3.00366',
  d3: 'M15.015 2.38661C16.0876 1.74692 17.0238 2.00471 17.5863 2.41534C17.8169 2.58371 17.9322 2.66789 18 2.66789C18.0678 2.66789 18.1831 2.58371 18.4137 2.41534C18.9762 2.00471 19.9124 1.74692 20.985 2.38661C22.3928 3.22614 22.7113 5.99577 19.4642 8.33241C18.8457 8.77747 18.5365 9 18 9C17.4635 9 17.1543 8.77747 16.5358 8.33241C13.2887 5.99577 13.6072 3.22614 15.015 2.38661Z',
  d4: 'M14.3323 3.0834C14.2785 3.07878 14.2246 3.07467 14.1706 3.07107C12.7435 2.97621 11.2536 2.97641 9.8294 3.07107C5.64639 3.34913 2.31441 6.72838 2.04024 10.9707C1.98659 11.8009 1.98659 12.6607 2.04024 13.4909C2.1401 15.036 2.82343 16.4666 3.62791 17.6746C4.09501 18.5203 3.78674 19.5758 3.30021 20.4978C2.94941 21.1626 2.77401 21.495 2.91484 21.7351C3.05567 21.9752 3.37025 21.9829 3.99941 21.9982C5.24365 22.0285 6.08268 21.6757 6.74868 21.1846C7.1264 20.9061 7.31527 20.7668 7.44544 20.7508C7.5756 20.7348 7.83174 20.8403 8.34392 21.0512C8.80432 21.2409 9.33896 21.3579 9.8294 21.3905C11.2536 21.4852 12.7435 21.4854 14.1706 21.3905C18.3536 21.1125 21.6856 17.7332 21.9598 13.4909C22.0134 12.6607 22.0134 11.8009 21.9598 10.9707C21.87 9.58146 21.4523 8.28476 20.7842 7.15922C20.4326 7.55498 19.9963 7.94951 19.4642 8.33241C18.8457 8.77747 18.5365 9 18 9C17.4635 9 17.1543 8.77747 16.5358 8.33241C13.924 6.45298 13.6191 4.29341 14.3323 3.0834Z',
  d5: 'M21.9598 10.967C21.9711 11.1423 21.98 11.3189 21.9866 11.4963C22.011 12.159 22.0021 12.8323 21.9598 13.4872C21.6856 17.7295 18.3536 21.1087 14.1706 21.3868C12.7435 21.4817 11.2536 21.4815 9.8294 21.3868C9.33896 21.3542 8.8044 21.2372 8.34401 21.0476C7.83177 20.8366 7.5756 20.7311 7.44544 20.7471C7.31527 20.7631 7.1264 20.9024 6.74868 21.1809C6.08268 21.672 5.24367 22.0248 3.99943 21.9945C3.37026 21.9792 3.05568 21.9715 2.91484 21.7314C2.77401 21.4913 2.94941 21.1589 3.30021 20.4941C3.78674 19.5721 4.09501 18.5166 3.62791 17.6709C2.82343 16.4629 2.1401 15.0323 2.04024 13.4872C1.98659 12.657 1.98659 11.7972 2.04024 10.967C2.31441 6.72466 5.64639 3.34541 9.8294 3.06736C10.3789 3.03083 10.4383 3.00836 11 3',
  d6: 'M11.2775 2.25384C10.774 2.26445 10.2731 2.28616 9.77965 2.31896C5.213 2.62252 1.58972 6.30881 1.2918 10.9186C1.23607 11.781 1.23607 12.6731 1.2918 13.5355C1.40272 15.2519 2.15148 16.8002 2.98381 18.0567C3.23314 18.5382 3.10323 19.2603 2.6369 20.144L2.61542 20.1847C2.45874 20.4815 2.30536 20.772 2.21688 21.0196C2.12313 21.282 2.02623 21.6987 2.26791 22.1108C2.48996 22.4894 2.84475 22.628 3.13152 22.6835C3.36961 22.7296 3.66155 22.7366 3.93544 22.7431L3.98117 22.7442C5.40092 22.7788 6.40136 22.3688 7.1938 21.7845L7.28907 21.7143C7.40859 21.6264 7.46835 21.5825 7.54604 21.5728C7.62373 21.5632 7.69203 21.591 7.82861 21.6467C7.89626 21.6743 7.97233 21.7056 8.05839 21.741C8.59978 21.964 9.21472 22.0976 9.77965 22.1351C11.2369 22.232 12.7601 22.2322 14.2204 22.1351C18.787 21.8316 22.4103 18.1453 22.7082 13.5355C22.7639 12.6731 22.7639 11.781 22.7082 10.9186C22.6841 10.5458 22.6383 10.1791 22.5719 9.81966C22.4919 9.38616 22.4519 9.16941 22.2877 9.11187C22.1234 9.05434 21.9406 9.21288 21.5751 9.52996C21.326 9.74594 21.0605 9.95566 20.7789 10.1584L20.7109 10.2076C20.1905 10.5852 19.2741 11.2501 17.9999 11.2501C16.7256 11.2501 15.7402 10.5352 15.2199 10.1577C13.2391 8.73189 12.0564 6.95873 11.8008 5.10567C11.7092 4.44144 11.7441 3.77035 11.9041 3.13912C12.0165 2.69548 12.0728 2.47366 11.9802 2.35732C11.8877 2.24098 11.6843 2.24527 11.2775 2.25384ZM8.5 15.7499C8.08579 15.7499 7.75 15.4141 7.75 14.9999C7.75 14.5857 8.08579 14.2499 8.5 14.2499H15.5C15.9142 14.2499 16.25 14.5857 16.25 14.9999C16.25 15.4141 15.9142 15.7499 15.5 15.7499H8.5ZM8.5 10.7499C8.08579 10.7499 7.75 10.4141 7.75 9.99988C7.75 9.58567 8.08579 9.24988 8.5 9.24988H12C12.4142 9.24988 12.75 9.58567 12.75 9.99988C12.75 10.4141 12.4142 10.7499 12 10.7499H8.5Z',
  d7: 'M17.9996 1.78934C18.7725 1.23972 20.0195 0.938062 21.3688 1.74274C22.3751 2.34288 22.8968 3.56706 22.7128 4.90087C22.5274 6.24475 21.645 7.68711 19.9019 8.94146C19.348 9.34117 18.7809 9.75028 17.9996 9.75028C17.2183 9.75028 16.6513 9.34117 16.0974 8.94146C14.3543 7.68711 13.4719 6.24475 13.2865 4.90087C13.1025 3.56706 13.6241 2.34288 14.6305 1.74274C15.9798 0.938062 17.2268 1.23972 17.9996 1.78934Z',
  d8: 'M9.77965 2.31895C10.2731 2.28615 10.774 2.26443 11.2775 2.25382C11.6843 2.24525 11.8877 2.24097 11.9802 2.3573C12.0728 2.47364 12.0165 2.69546 11.9041 3.13911C11.7441 3.77034 11.7092 4.44143 11.8008 5.10566C12.0564 6.95872 13.2391 8.73187 15.2199 10.1577C15.7402 10.5352 16.7256 11.2501 17.9999 11.2501C19.2741 11.2501 20.1905 10.5851 20.7109 10.2076L20.7789 10.1583C21.0605 9.95565 21.326 9.74592 21.5751 9.52994C21.9406 9.21286 22.1234 9.05432 22.2877 9.11186C22.4519 9.16939 22.4919 9.38614 22.5719 9.81965C22.6383 10.179 22.6841 10.5458 22.7082 10.9186C22.7639 11.781 22.7639 12.6731 22.7082 13.5355C22.4103 18.1452 18.787 21.8315 14.2204 22.1351C12.7601 22.2322 11.2369 22.232 9.77965 22.1351C9.21472 22.0975 8.59978 21.964 8.05839 21.741C7.97233 21.7055 7.89626 21.6742 7.82861 21.6467C7.69203 21.591 7.62373 21.5632 7.54604 21.5728C7.46835 21.5825 7.40859 21.6264 7.28907 21.7143L7.1938 21.7845C6.40136 22.3688 5.40092 22.7787 3.98117 22.7442L3.93544 22.7431C3.66155 22.7365 3.36961 22.7296 3.13152 22.6835C2.84475 22.628 2.48996 22.4894 2.26791 22.1108C2.02623 21.6987 2.12313 21.282 2.21688 21.0196C2.30536 20.7719 2.45874 20.4815 2.61542 20.1847L2.6369 20.144C3.10323 19.2603 3.23314 18.5382 2.98381 18.0566C2.15148 16.8002 1.40272 15.2518 1.2918 13.5355C1.23607 12.6731 1.23607 11.781 1.2918 10.9186C1.58972 6.3088 5.213 2.62251 9.77965 2.31895Z',
  d9: 'M7.75 15C7.75 15.4142 8.08579 15.75 8.5 15.75H15.5C15.9142 15.75 16.25 15.4142 16.25 15C16.25 14.5858 15.9142 14.25 15.5 14.25H8.5C8.08579 14.25 7.75 14.5858 7.75 15ZM7.75 10C7.75 10.4142 8.08579 10.75 8.5 10.75H12C12.4142 10.75 12.75 10.4142 12.75 10C12.75 9.58579 12.4142 9.25 12 9.25H8.5C8.08579 9.25 7.75 9.58579 7.75 10Z',
  d10: 'M7.4646 14.9224H16.408M7.4646 9.95215H12.93',
  d11: 'M20.6245 2.28788C19.038 1.46027 17.8987 2.68026 17.8987 2.68026C17.8987 2.68026 16.7594 1.46027 15.1727 2.28788C13.2511 3.29028 13.113 7.21572 17.8987 8.95841C22.6844 7.21572 22.5463 3.29028 20.6245 2.28788Z',
  d12: 'M9.87146 2.98902C2.31108 3.60102 -0.155521 12.5237 3.64209 17.949L2.0325 21.7886C1.99894 21.8686 2.07633 21.9505 2.15815 21.9215L6.43083 20.4063C8.88729 21.7715 14.4054 22.0089 17.2528 20.5179C19.2374 19.2917 22.2534 17.4231 21.8448 10.8052M9.87146 2.98902C10.0266 2.9801 10.1834 2.97559 10.3419 2.97559M9.87146 2.98902L11.2746 2.97559',
  d13: 'M11.2105 2.25H12.5784C11.9994 3.31782 11.8575 4.62148 12.1552 5.84022C12.6776 7.97835 14.4493 9.83553 17.3167 10.8794L18.0009 11.1284L18.685 10.8794C20.2011 10.3274 21.4109 9.54813 22.2917 8.62013C22.5246 9.3321 22.6739 10.0824 22.7278 10.8595C22.75 11.1796 22.75 11.5514 22.75 12.2105V12.2895C22.75 12.9486 22.75 13.3204 22.7278 13.6405C22.4082 18.2443 18.7443 21.9082 14.1405 22.2278C13.8204 22.25 13.4486 22.25 12.7895 22.25H11.2105C10.5514 22.25 10.1796 22.25 9.85949 22.2278C8.63831 22.143 7.48219 21.8226 6.43709 21.3113L1.47483 22.75L2.77921 18.0954C1.92471 16.8022 1.38603 15.2804 1.2722 13.6405C1.24999 13.3205 1.24999 12.9486 1.25 12.2895V12.2895V12.2105V12.2104C1.24999 11.5514 1.24999 11.1795 1.2722 10.8595C1.59176 6.25571 5.25571 2.59176 9.85949 2.2722C10.1796 2.24999 10.5514 2.24999 11.2105 2.25H11.2105ZM7.5 15.75V14.25H16.5V15.75H7.5ZM7.5 9.25H12V10.75H7.5V9.25Z',
  d14: 'M17.5169 1.48252C17.7021 1.55972 17.8642 1.64803 18.0011 1.73439C18.138 1.64803 18.3001 1.55973 18.4852 1.48252C19.1379 1.21033 20.0608 1.08742 21.091 1.62457C22.4232 2.31925 23.0229 3.94522 22.6324 5.54352C22.2332 7.17771 20.8384 8.7653 18.2576 9.70475L18.0011 9.79814L17.7446 9.70475C15.1638 8.7653 13.769 7.17771 13.3698 5.54353C12.9793 3.94522 13.5789 2.31925 14.9112 1.62457C15.9413 1.08742 16.8642 1.21033 17.5169 1.48252Z',
} as const;

export const IconMessageFavourite01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-favourite-01-stroke-rounded IconMessageFavourite01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconMessageFavourite01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-favourite-01-duotone-rounded IconMessageFavourite01DuotoneRounded"
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
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconMessageFavourite01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-favourite-01-twotone-rounded IconMessageFavourite01TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconMessageFavourite01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-favourite-01-solid-rounded IconMessageFavourite01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconMessageFavourite01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-favourite-01-bulk-rounded IconMessageFavourite01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageFavourite01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-favourite-01-stroke-sharp IconMessageFavourite01StrokeSharp"
    >
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageFavourite01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-favourite-01-solid-sharp IconMessageFavourite01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfMessageFavourite01: TheIconSelfPack = {
  name: 'MessageFavourite01',
  StrokeRounded: IconMessageFavourite01StrokeRounded,
  DuotoneRounded: IconMessageFavourite01DuotoneRounded,
  TwotoneRounded: IconMessageFavourite01TwotoneRounded,
  SolidRounded: IconMessageFavourite01SolidRounded,
  BulkRounded: IconMessageFavourite01BulkRounded,
  StrokeSharp: IconMessageFavourite01StrokeSharp,
  SolidSharp: IconMessageFavourite01SolidSharp,
};