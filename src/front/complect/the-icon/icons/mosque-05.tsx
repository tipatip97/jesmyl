import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.5125 6C15.9698 4 18.3389 3 19 2C19.6611 3 22.0302 4 20.4875 6H17.5125Z',
  d2: 'M13 11.5V14H7L7 11.5',
  d3: 'M7.02497 11.5C3.93968 7.5 8.67782 5.5 9.99996 3.5C11.3222 5.5 16.0603 7.5 12.975 11.5H9.99998H7.02497Z',
  d4: 'M17 22H3V17C3 15.5858 3 14.8787 3.43934 14.4393C3.87868 14 4.58579 14 6 14H14C15.4142 14 16.1213 14 16.5607 14.4393C17 14.8787 17 15.5858 17 17V22Z',
  d5: 'M8 22V21C8 20.0218 8 19.5326 8.14218 19.0874C8.23639 18.7924 8.37572 18.5137 8.55523 18.2613C8.8261 17.8804 9.2174 17.5869 10 17C10.7826 17.5869 11.1739 17.8804 11.4448 18.2613C11.6243 18.5137 11.7636 18.7924 11.8578 19.0874C12 19.5326 12 20.0218 12 21V22',
  d6: 'M17.5 6L17 15M17 22H21L20.5 6',
  d7: 'M21 22H17V15L17.5 6H20.5L21 22Z',
  d8: 'M12 22H17V17C17 15.5858 17 14.8787 16.5607 14.4393C16.1213 14 15.4142 14 14 14H6C4.58579 14 3.87868 14 3.43934 14.4393C3 14.8787 3 15.5858 3 17V22H8V21C8 20.0218 8 19.5326 8.14218 19.0874C8.23639 18.7924 8.37572 18.5137 8.55523 18.2613C8.8261 17.8804 9.2174 17.5869 10 17C10.7826 17.5869 11.1739 17.8804 11.4448 18.2613C11.6243 18.5137 11.7636 18.7924 11.8578 19.0874C12 19.5326 12 20.0218 12 21V22Z',
  d9: 'M17 22H21L20.5 6M17.5 6L17 15M19 2C18.3389 3 15.9698 4 17.5125 6H20.4875C22.0302 4 19.6611 3 19 2Z',
  d10: 'M19 1.25C19.2518 1.24999 19.4868 1.37633 19.6256 1.58637C19.7289 1.74256 19.9533 1.95553 20.2657 2.24073C20.5406 2.49151 20.8864 2.80699 21.1641 3.16694C21.4584 3.54857 21.7244 4.0395 21.7483 4.64216C21.7725 5.25375 21.5432 5.8593 21.0814 6.45807C20.9394 6.64217 20.72 6.75 20.4875 6.75H17.5125C17.28 6.75 17.0606 6.64217 16.9186 6.45806C16.4568 5.85929 16.2275 5.25374 16.2517 4.64215C16.2756 4.0395 16.5416 3.54856 16.836 3.16694C17.1136 2.80701 17.4594 2.49154 17.7343 2.24077L17.7343 2.24077C18.0467 1.95556 18.2711 1.74258 18.3743 1.5864C18.5132 1.37636 18.7482 1.25001 19 1.25Z',
  d11: 'M9.99996 2.75C10.2517 2.74999 10.4867 2.87633 10.6256 3.08637C10.8942 3.49256 11.4081 3.97146 12.0114 4.52229L12.0114 4.52229C12.5712 5.03308 13.2199 5.62512 13.7342 6.29194C14.2696 6.98607 14.7078 7.82075 14.7471 8.81403C14.7869 9.81625 14.4164 10.8593 13.5689 11.9581C13.4269 12.1422 13.2075 12.25 12.975 12.25H7.02498C6.79248 12.25 6.57312 12.1422 6.43112 11.9581C5.58361 10.8593 5.21313 9.81624 5.25288 8.81402C5.29228 7.82075 5.73043 6.98606 6.26582 6.29194C6.78013 5.62515 7.42883 5.03314 7.9885 4.52236L7.98851 4.52236C8.59188 3.97153 9.10581 3.49258 9.37433 3.0864C9.51318 2.87636 9.74817 2.75001 9.99996 2.75Z',
  d12: 'M10.4501 16.4C10.1834 16.2 9.81673 16.2 9.55006 16.4C8.85609 16.9201 8.2838 17.349 7.94409 17.8266C7.71972 18.1421 7.54555 18.4905 7.42778 18.8593C7.24947 19.4176 7.2497 20.0179 7.25003 20.8851L7.25005 22.35C7.25005 22.5386 7.25006 22.6328 7.19148 22.6914C7.1329 22.75 7.03862 22.75 6.85005 22.75H3.00001C2.58579 22.75 2.25001 22.4142 2.25001 22L2.25 16.9506C2.24997 16.2858 2.24994 15.7129 2.31161 15.2542C2.37771 14.7625 2.52677 14.2913 2.90902 13.909C3.29126 13.5268 3.76253 13.3777 4.25416 13.3116C4.7129 13.2499 5.28574 13.25 5.95058 13.25H14.0494C14.7142 13.25 15.2871 13.2499 15.7459 13.3116C16.2375 13.3777 16.7088 13.5268 17.091 13.909C17.4732 14.2913 17.6223 14.7625 17.6884 15.2542C17.7501 15.7129 17.75 16.2858 17.75 16.9506L17.75 22C17.75 22.4142 17.4142 22.75 17 22.75H13.1501C12.9615 22.75 12.8672 22.75 12.8086 22.6914C12.7501 22.6328 12.7501 22.5386 12.7501 22.35L12.7501 20.8852C12.7504 20.0179 12.7506 19.4176 12.5723 18.8593C12.4546 18.4905 12.2804 18.1421 12.056 17.8266C11.7163 17.349 11.144 16.9201 10.4501 16.4Z',
  d13: 'M10.8501 22.75C11.0386 22.75 11.1329 22.75 11.1915 22.6914C11.2501 22.6328 11.2501 22.5386 11.2501 22.35V21C11.2501 19.9732 11.2417 19.6233 11.1434 19.3156C11.0728 19.0943 10.9683 18.8853 10.8336 18.696C10.7132 18.5267 10.5566 18.3767 10.2417 18.1274C10.127 18.0365 10.0697 17.9911 10.0001 17.9911C9.93047 17.9911 9.87312 18.0365 9.75843 18.1274C9.44353 18.3767 9.28688 18.5267 9.16648 18.696C9.03185 18.8853 8.92735 19.0943 8.85669 19.3156C8.75841 19.6233 8.75006 19.9732 8.75006 21V22.35C8.75006 22.5386 8.75006 22.6328 8.80864 22.6914C8.86722 22.75 8.9615 22.75 9.15006 22.75H10.8501Z',
  d14: 'M17.5416 5.25118C17.9552 5.27415 18.2718 5.62805 18.2489 6.04162L17.7489 15.0416C17.7259 15.4552 17.372 15.7718 16.9584 15.7489C16.5448 15.7259 16.2282 15.372 16.2512 14.9584L16.7512 5.95842C16.7742 5.54484 17.128 5.2282 17.5416 5.25118Z',
  d15: 'M20.4766 5.25039C20.8906 5.23745 21.2367 5.56258 21.2497 5.97659L21.7497 21.9766C21.756 22.1795 21.6798 22.3763 21.5386 22.522C21.3973 22.6678 21.203 22.75 21 22.75H17C16.5858 22.75 16.25 22.4142 16.25 22C16.25 21.5858 16.5858 21.25 17 21.25H20.2262L19.7504 6.02345C19.7374 5.60944 20.0626 5.26332 20.4766 5.25039Z',
  d16: 'M14.0494 13.25C14.7143 13.25 15.2871 13.2499 15.7458 13.3116C16.2375 13.3777 16.7087 13.5268 17.091 13.909C17.4732 14.2913 17.6223 14.7625 17.6884 15.2542C17.7501 15.7129 17.75 16.2858 17.75 16.9506V16.9506L17.75 22C17.75 22.4142 17.4142 22.75 17 22.75H3C2.58579 22.75 2.25 22.4142 2.25 22L2.25 16.9506V16.9506C2.24996 16.2857 2.24993 15.7129 2.31161 15.2542C2.37771 14.7625 2.52677 14.2913 2.90901 13.909C3.29126 13.5268 3.76252 13.3777 4.25416 13.3116C4.71289 13.2499 5.28574 13.25 5.95058 13.25H5.95063H14.0494H14.0494Z',
  d17: 'M21.2503 5.9766C21.2374 5.56258 20.8913 5.23745 20.4773 5.25039C20.0633 5.26333 19.7381 5.60944 19.7511 6.02345L20.2269 21.25H17.7507L17.7507 22C17.7507 22.4142 17.4149 22.75 17.0007 22.75H16.9956C16.9973 22.75 16.999 22.75 17.0007 22.75L21.0007 22.75C21.2037 22.75 21.398 22.6678 21.5393 22.522C21.6805 22.3763 21.7567 22.1795 21.7503 21.9766L21.2503 5.9766Z',
  d18: 'M16.3359 13.445L16.7519 5.95842C16.7748 5.54484 17.1287 5.2282 17.5423 5.25118C17.9559 5.27415 18.2725 5.62805 18.2495 6.04162L17.7495 15.0416C17.7447 15.1288 17.7252 15.2116 17.6935 15.2879C17.692 15.2766 17.6906 15.2653 17.6891 15.2542C17.623 14.7625 17.4739 14.2913 17.0917 13.909C16.8661 13.6834 16.6095 13.539 16.3359 13.445Z',
  d19: 'M10.4501 16.4C10.1834 16.2 9.81672 16.2 9.55006 16.4C8.85608 16.9201 8.2838 17.349 7.94409 17.8266C7.71971 18.1421 7.54555 18.4905 7.42778 18.8593C7.24947 19.4176 7.2497 20.0179 7.25003 20.8851L7.25005 22.75H8.75006V21C8.75006 19.9732 8.75841 19.6233 8.85669 19.3156C8.92735 19.0943 9.03185 18.8853 9.16648 18.696C9.31434 18.4881 9.51687 18.3093 10.0001 17.9398C10.4832 18.3093 10.6858 18.4881 10.8336 18.696C10.9683 18.8853 11.0728 19.0943 11.1434 19.3156C11.2417 19.6233 11.2501 19.9732 11.2501 21V22.75H12.7501L12.7501 20.8851C12.7504 20.0179 12.7506 19.4176 12.5723 18.8593C12.4546 18.4905 12.2804 18.1421 12.056 17.8266C11.7163 17.349 11.144 16.9201 10.4501 16.4Z',
  d20: 'M17.5197 6C15.9807 4 18.3441 3 19.0036 2C19.6632 3 22.0266 4 20.4876 6H17.5197Z',
  d21: 'M13.0421 11.5V14H7.04211V11.5',
  d22: 'M7.0573 11.5C3.97941 7.5 8.70619 5.5 10.0252 3.5C11.3442 5.5 16.071 7.5 12.9931 11.5H10.0252H7.0573Z',
  d23: 'M8.02991 22V21C8.02991 20.0218 8.02991 19.5326 8.17175 19.0874C8.26573 18.7924 8.40473 18.5137 8.58381 18.2613C8.85403 17.8804 9.24439 17.5869 10.0251 17C10.8058 17.5869 11.1962 17.8804 11.4665 18.2613C11.6455 18.5137 11.7845 18.7924 11.8785 19.0874C12.0203 19.5326 12.0203 20.0218 12.0203 21V22',
  d24: 'M17.5072 6L17.0084 14M17.0084 22H20.9988L20.5 6',
  d25: 'M17.0085 13.957H3.01107C3.00557 13.957 3.0011 13.9615 3.0011 13.967V22H17.0085V13.957Z',
  d26: 'M9.99051 2.75C10.242 2.74999 10.4767 2.87633 10.6154 3.08637C10.8836 3.49256 11.3477 3.92652 11.9504 4.47735L11.9995 4.52229C12.5586 5.03308 13.2065 5.62512 13.7202 6.29194C14.255 6.98607 14.6926 7.82075 14.7319 8.81403C14.7716 9.81625 14.4016 10.8593 13.5551 11.9581C13.4132 12.1422 13.1942 12.25 12.9619 12.25H7.01916C6.78694 12.25 6.56785 12.1422 6.42602 11.9581C5.57954 10.8593 5.20951 9.81624 5.24922 8.81402C5.28857 7.82075 5.72619 6.98606 6.26092 6.29194C6.7746 5.62515 7.42251 5.03314 7.9815 4.52236L7.98151 4.52236L8.03076 4.47735C8.63339 3.92652 9.09745 3.49258 9.36564 3.0864C9.50432 2.87636 9.73902 2.75001 9.99051 2.75Z',
  d27: 'M18.9795 1.25C19.231 1.24999 19.4657 1.37634 19.6044 1.58637C19.7076 1.74257 19.9317 1.95554 20.2438 2.24074C20.5183 2.49152 20.8637 2.807 21.141 3.16694C21.435 3.54857 21.7006 4.0395 21.7245 4.64216C21.7454 5.17048 21.5774 5.69429 21.2339 6.21312L21.75 22.75H12.7373L12.7373 21.6351C12.7376 20.7679 12.7378 20.1676 12.5598 19.6093C12.4421 19.2405 12.2682 18.8921 12.0441 18.5766C11.7048 18.099 11.225 17.739 10.5318 17.2189L10.4401 17.15C10.1737 16.95 9.8075 16.95 9.54116 17.15L9.44937 17.2189C8.75624 17.739 8.27644 18.099 7.93715 18.5766C7.71304 18.8921 7.53909 19.2405 7.42146 19.6093C7.24337 20.1676 7.2436 20.7679 7.24393 21.6351L7.24396 22.75H2.25V14C2.25 13.5858 2.58538 13.25 2.99909 13.25H16.2783L16.7182 6.20241C16.3795 5.68708 16.2139 5.16684 16.2347 4.64215C16.2585 4.0395 16.5242 3.54856 16.8182 3.16694C17.0955 2.80701 17.4408 2.49154 17.7154 2.24076C18.0274 1.95555 18.2516 1.74258 18.3547 1.5864C18.4934 1.37636 18.7281 1.25001 18.9795 1.25ZM18.1851 6.75L17.7311 14.0234V21.25H20.2043L19.7517 6.75H18.1851Z',
  d28: 'M8.74213 22.75V21.75C8.74213 20.7232 8.75047 20.3733 8.84863 20.0655C8.91921 19.8443 9.02358 19.6353 9.15804 19.446C9.30573 19.2381 9.50801 19.0593 9.99061 18.6898C10.4732 19.0593 10.6755 19.2381 10.8232 19.446C10.9576 19.6353 11.062 19.8443 11.1326 20.0655C11.2307 20.3733 11.2391 20.7232 11.2391 21.75V22.75H8.74213Z',
};

export const IconMosque05StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-05-stroke-rounded IconMosque05StrokeRounded"
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMosque05DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-05-duotone-rounded IconMosque05DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMosque05TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-05-twotone-rounded IconMosque05TwotoneRounded"
    >
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMosque05SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-05-solid-rounded IconMosque05SolidRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMosque05BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-05-bulk-rounded IconMosque05BulkRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMosque05StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-05-stroke-sharp IconMosque05StrokeSharp"
    >
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMosque05SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-05-solid-sharp IconMosque05SolidSharp"
    >
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMosque05: TheIconSelfPack = {
  name: 'Mosque05',
  StrokeRounded: IconMosque05StrokeRounded,
  DuotoneRounded: IconMosque05DuotoneRounded,
  TwotoneRounded: IconMosque05TwotoneRounded,
  SolidRounded: IconMosque05SolidRounded,
  BulkRounded: IconMosque05BulkRounded,
  StrokeSharp: IconMosque05StrokeSharp,
  SolidSharp: IconMosque05SolidSharp,
};