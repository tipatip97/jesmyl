import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.2505 10.5H19.6403C21.4918 10.5 22.0421 10.7655 21.9975 12.0838C21.9237 14.2674 20.939 16.8047 17 17.5',
  d2: 'M5.94627 20.6145C2.57185 18.02 2.07468 14.3401 2.00143 10.5001C1.96979 8.8413 2.45126 8.5 4.65919 8.5H15.3408C17.5487 8.5 18.0302 8.8413 17.9986 10.5001C17.9253 14.3401 17.4281 18.02 14.0537 20.6145C13.0934 21.3528 12.2831 21.5 10.9194 21.5H9.08064C7.71686 21.5 6.90658 21.3528 5.94627 20.6145Z',
  d3: 'M11.3089 2.5C10.7622 2.83861 10.0012 4 10.0012 5.5M7.53971 4C7.53971 4 7 4.5 7 5.5M14.0012 4C13.7279 4.1693 13.5 5 13.5 5.5',
  d4: 'M17.1257 10.6251C17.1257 10.0728 17.5734 9.62512 18.1257 9.62512H19.5154C19.9938 9.62512 20.4324 9.6417 20.8157 9.69772C21.1943 9.75305 21.592 9.85641 21.9418 10.0789C22.7681 10.6044 22.8979 11.4812 22.8721 12.2427C22.831 13.461 22.5338 14.8647 21.6226 16.0762C20.6965 17.3074 19.222 18.2263 17.049 18.6099C16.5051 18.7059 15.9864 18.3428 15.8904 17.799C15.7944 17.2551 16.1575 16.7364 16.7013 16.6403C18.4674 16.3286 19.4547 15.6312 20.0242 14.874C20.6085 14.0972 20.8407 13.1404 20.8733 12.1751C20.8815 11.9312 20.8608 11.8081 20.8458 11.7548C20.8061 11.7369 20.7129 11.7039 20.5265 11.6767C20.2873 11.6417 19.9628 11.6251 19.5154 11.6251H18.1257C17.5734 11.6251 17.1257 11.1774 17.1257 10.6251Z',
  d5: 'M3.06236 7.96415C3.47824 7.89633 3.97062 7.87512 4.53427 7.87512H15.2159C15.7795 7.87512 16.2719 7.89632 16.6878 7.96415C17.1019 8.03168 17.5013 8.15449 17.833 8.40193C18.5518 8.93805 18.6395 9.80382 18.6235 10.6395C18.5497 14.5074 18.0553 18.513 14.386 21.3342C13.8372 21.7561 13.3052 22.0271 12.7029 22.1848C12.1158 22.3385 11.4956 22.3751 10.7944 22.3751H8.95573C8.25456 22.3751 7.63442 22.3385 7.04728 22.1848C6.44492 22.0271 5.91299 21.7561 5.36421 21.3342C1.69487 18.513 1.20044 14.5074 1.12665 10.6395C1.11071 9.80382 1.19836 8.93805 1.91715 8.40193C2.24891 8.15449 2.64827 8.03168 3.06236 7.96415Z',
  d6: 'M12.0341 2.09865C12.3249 2.56819 12.18 3.18454 11.7104 3.47532C11.6488 3.51346 11.4296 3.71418 11.2205 4.13475C11.0243 4.52947 10.8762 5.04335 10.8762 5.62514C10.8762 6.17742 10.4285 6.62514 9.87625 6.62514C9.32396 6.62514 8.87625 6.17742 8.87625 5.62514C8.87625 4.70693 9.10865 3.89011 9.42958 3.24449C9.73767 2.62471 10.1723 2.07542 10.6574 1.77496C11.127 1.48418 11.7433 1.6291 12.0341 2.09865Z',
  d7: 'M14.7264 3.59864C14.9851 4.01638 14.899 4.55031 14.5462 4.8678C14.5276 4.90708 14.5031 4.9678 14.4775 5.04968C14.4095 5.26712 14.375 5.49773 14.375 5.62514C14.375 6.17742 13.9273 6.62514 13.375 6.62514C12.8227 6.62514 12.375 6.17742 12.375 5.62514C12.375 5.25254 12.4545 4.81781 12.5687 4.45257C12.6271 4.26593 12.7044 4.06536 12.805 3.88128C12.8903 3.72512 13.058 3.45566 13.3498 3.27496C13.8193 2.98418 14.4357 3.1291 14.7264 3.59864Z',
  d8: 'M8.14828 3.44553C8.51673 3.84323 8.50021 4.46021 8.11626 4.83777L8.10761 4.8481C8.09096 4.86867 8.05936 4.91117 8.02487 4.97509C7.95783 5.0993 7.875 5.31242 7.875 5.62514C7.875 6.17742 7.42728 6.62514 6.875 6.62514C6.32272 6.62514 5.875 6.17742 5.875 5.62514C5.875 4.93786 6.06203 4.40098 6.26484 4.02519C6.36527 3.8391 6.56893 3.54551 6.7351 3.39156C7.14025 3.01622 7.77295 3.04039 8.14828 3.44553Z',
  d9: 'M17.8639 16.3468C17.6129 17.1342 17.2799 17.8978 16.8379 18.6246C16.9074 18.6271 16.9782 18.6224 17.0494 18.6099C19.2224 18.2263 20.697 17.3073 21.623 16.0762C22.5343 14.8646 22.8314 13.461 22.8725 12.2426C22.8983 11.4811 22.7685 10.6044 21.9422 10.0788C21.5924 9.85636 21.1948 9.753 20.8161 9.69767C20.4328 9.64165 19.9943 9.62508 19.5159 9.62508H18.5557C18.6197 9.9519 18.6304 10.2982 18.6239 10.6395C18.6177 10.9673 18.6084 11.2961 18.5944 11.6251H19.5159C19.9632 11.6251 20.2877 11.6417 20.5269 11.6767C20.7133 11.7039 20.8065 11.7368 20.8462 11.7547C20.8612 11.8081 20.8819 11.9312 20.8737 12.1751C20.8411 13.1403 20.6089 14.0971 20.0246 14.874C19.5945 15.4458 18.9261 15.9836 17.8639 16.3468Z',
  d10: 'M18.2512 11H22C22 17 17 17 17 17',
  d11: 'M5.94554 21C2.57053 17.9219 2.07326 13.5558 2 9H18C17.9267 13.5558 17.4295 17.9219 14.0545 21H5.94554Z',
  d12: 'M11.3082 3C10.7615 3.45148 10.0007 5 10.0007 7M7.53961 5C7.53961 5 7 5.66667 7 7M14 5C13.7267 5.22574 13.4988 6.33333 13.4988 7',
  d13: 'M2 8.25C1.799 8.25 1.60641 8.33068 1.46542 8.47395C1.32444 8.61722 1.24687 8.81108 1.2501 9.01206C1.32341 13.5708 1.80867 18.2421 5.44015 21.5541C5.57831 21.6801 5.75855 21.75 5.94554 21.75H14.0545C14.2414 21.75 14.4217 21.6801 14.5599 21.5541C15.8029 20.4205 16.6773 19.1275 17.2927 17.7343C17.4522 17.7202 17.6702 17.6932 17.9279 17.6417C18.4562 17.536 19.1678 17.3237 19.8855 16.8931C21.3693 16.0028 22.7496 14.2541 22.7496 11C22.7496 10.5858 22.4138 10.25 21.9996 10.25H18.7179C18.7333 9.83716 18.7433 9.42415 18.7499 9.01206C18.7531 8.81108 18.6756 8.61722 18.5346 8.47395C18.3936 8.33068 18.201 8.25 18 8.25H2ZM18.6345 11.75H21.2197C21.0356 13.9802 20.0324 15.0557 19.1137 15.6069C18.6848 15.8642 18.252 16.0198 17.8859 16.1134C18.3031 14.7132 18.5205 13.2414 18.6345 11.75Z',
  d14: 'M9.74667 3.98564C10.0247 3.2397 10.41 2.59736 10.8306 2.25L11.7857 3.40658C11.6597 3.5107 11.3912 3.86836 11.1522 4.50955C10.9235 5.12297 10.7507 5.92155 10.7507 6.82829H9.25071C9.25071 5.73504 9.45826 4.75935 9.74667 3.98564ZM13.1123 4.85801C13.1788 4.6958 13.3014 4.43255 13.5224 4.25L14.4776 5.40658C14.5219 5.36997 14.5406 5.34151 14.5407 5.34157C14.5408 5.34162 14.5257 5.36493 14.5004 5.42653C14.4605 5.52412 14.4171 5.6638 14.3771 5.83423C14.2964 6.17841 14.2488 6.56366 14.2488 6.82829H12.7488C12.7488 6.42625 12.8152 5.92437 12.9167 5.49166C12.9679 5.27364 13.0327 5.05243 13.1123 4.85801ZM6.95619 4.35699C6.95642 4.35671 6.95665 4.35643 7.53961 4.82829C8.12258 5.30015 8.1228 5.29988 8.12302 5.2996L8.12345 5.29907L8.12428 5.29804L8.1258 5.29614L8.12826 5.29303L8.13101 5.28947C8.13191 5.28829 8.13098 5.28947 8.12847 5.29302C8.12344 5.30011 8.11212 5.31661 8.09641 5.34249C8.06499 5.39425 8.01616 5.4833 7.96503 5.60965C7.86343 5.86069 7.75 6.26544 7.75 6.82829H6.25C6.25 6.05781 6.40638 5.46255 6.57458 5.04693C6.65835 4.83994 6.74443 4.679 6.81418 4.56409C6.84906 4.50664 6.8799 4.46063 6.90438 4.42607C6.91662 4.40878 6.92729 4.39433 6.93609 4.38273L6.94787 4.36746L6.95265 4.36141L6.95475 4.35879L6.95572 4.35758L6.95619 4.35699Z',
};

export const IconCoffee02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coffee-02-stroke-rounded IconCoffee02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconCoffee02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coffee-02-duotone-rounded IconCoffee02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconCoffee02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coffee-02-twotone-rounded IconCoffee02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoffee02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coffee-02-solid-rounded IconCoffee02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCoffee02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coffee-02-bulk-rounded IconCoffee02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCoffee02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coffee-02-stroke-sharp IconCoffee02StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoffee02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="coffee-02-solid-sharp IconCoffee02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCoffee02: TheIconSelfPack = {
  name: 'Coffee02',
  StrokeRounded: IconCoffee02StrokeRounded,
  DuotoneRounded: IconCoffee02DuotoneRounded,
  TwotoneRounded: IconCoffee02TwotoneRounded,
  SolidRounded: IconCoffee02SolidRounded,
  BulkRounded: IconCoffee02BulkRounded,
  StrokeSharp: IconCoffee02StrokeSharp,
  SolidSharp: IconCoffee02SolidSharp,
};