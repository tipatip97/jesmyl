import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.9263 4.41103L8.27352 7.60452C7.76151 7.85029 7.21443 7.91187 6.65675 7.78693C6.29177 7.70517 6.10926 7.66429 5.9623 7.64751C4.13743 7.43912 3 8.88342 3 10.5443V11.4557C3 13.1166 4.13743 14.5609 5.9623 14.3525C6.10926 14.3357 6.29178 14.2948 6.65675 14.2131C7.21443 14.0881 7.76151 14.1497 8.27352 14.3955L14.9263 17.589C16.4534 18.3221 17.217 18.6886 18.0684 18.4029C18.9197 18.1172 19.2119 17.5041 19.7964 16.278C21.4012 12.9112 21.4012 9.08885 19.7964 5.72196C19.2119 4.49586 18.9197 3.88281 18.0684 3.5971C17.217 3.3114 16.4534 3.67794 14.9263 4.41103Z',
  d2: 'M13 17V17.5C13 18.7841 13 19.4261 12.776 19.7886C12.4773 20.2719 11.9312 20.545 11.3653 20.4939C10.9409 20.4557 10.4273 20.0704 9.4 19.3L8.2 18.4C7.22253 17.6669 7 17.2218 7 16V14.5',
  d3: 'M7.5 14V8',
  d4: 'M14.9263 4.41103L8.27352 7.60452C8.02311 7.72472 7.76432 7.80086 7.5 7.83267V14.1673C7.76432 14.1991 8.02312 14.2753 8.27352 14.3955L14.9263 17.589C16.4534 18.3221 17.217 18.6886 18.0684 18.4029C18.9197 18.1172 19.2119 17.5041 19.7964 16.278C21.4012 12.9112 21.4012 9.08885 19.7964 5.72196C19.2119 4.49586 18.9197 3.88281 18.0684 3.5971C17.217 3.3114 16.4534 3.67794 14.9263 4.41103Z',
  d5: 'M7.96298 7.26497L15.1701 3.75213C16.8246 2.94574 17.6518 2.54254 18.5741 2.85681C19.4964 3.17109 19.8129 3.84544 20.4461 5.19416C22.1846 8.89773 22.1846 13.1023 20.4461 16.8058C19.8129 18.1546 19.4964 18.8289 18.5741 19.1432C17.6518 19.4575 16.8246 19.0543 15.1701 18.2479L14.2865 17.8172C14.158 17.7545 14.0937 17.7232 14.0468 17.7522C14 17.7811 13.9993 17.8529 13.9978 17.9964C13.9947 18.305 13.9872 18.5792 13.9691 18.8161C13.9385 19.2157 13.8705 19.6697 13.6266 20.0643C13.1288 20.8698 12.2186 21.3249 11.2755 21.2399C10.8134 21.1982 10.4095 20.9803 10.0714 20.7649C9.72908 20.5468 9.31831 20.2388 8.83186 19.8739L7.6 18.95C7.07877 18.5591 6.62386 18.1502 6.33902 17.5805C6.05418 17.0108 6 16.4015 6 15.75V14.8324C6 14.7176 6 14.6603 5.96303 14.6302C5.92606 14.6002 5.86927 14.6121 5.75568 14.636C5.63245 14.6619 5.54075 14.6783 5.45916 14.6877C3.48222 14.917 2.25 13.3282 2.25 11.5013V10.4987C2.25 8.67177 3.48222 7.08303 5.45916 7.31226C5.61835 7.33071 5.81605 7.37568 6.21137 7.4656C6.81553 7.60303 7.4083 7.53532 7.96298 7.26497ZM8.28763 14.8933C8.15854 14.8303 8.09399 14.7989 8.047 14.8283C8 14.8576 8 14.9294 8 15.073V15.75C8 16.3203 8.05709 16.5445 8.12788 16.6861C8.19867 16.8276 8.34376 17.0078 8.8 17.35L10 18.25C10.5269 18.6451 10.8761 18.9062 11.146 19.0781C11.358 19.2132 11.4473 19.2431 11.4624 19.2482L11.4658 19.2488C11.647 19.2613 11.8208 19.1744 11.9196 19.0219L11.9211 19.0189C11.9261 19.0037 11.9557 18.9143 11.9749 18.6637C11.9993 18.3446 12 17.9086 12 17.25C12 17.031 12 16.9215 11.9661 16.8342C11.9423 16.7731 11.9114 16.7237 11.867 16.6756C11.8033 16.6069 11.7054 16.5591 11.5095 16.4637L8.28763 14.8933Z',
  d6: 'M6 14.7755V15.7498C6 16.4013 6.05418 17.0106 6.33902 17.5803C6.62386 18.1499 7.07877 18.5588 7.6 18.9498L8.83186 19.8737C9.3183 20.2385 9.72909 20.5466 10.0714 20.7647C10.4095 20.98 10.8134 21.198 11.2755 21.2397C12.2186 21.3247 13.1288 20.8696 13.6266 20.0641C13.8705 19.6695 13.9385 19.2155 13.9691 18.8159C13.9862 18.5922 13.9938 18.3353 13.9972 18.0476L11.9985 17.0734C11.9985 17.0744 11.9985 17.0753 11.9985 17.0763C11.9993 17.1342 12 17.192 12 17.2498C12 17.9083 11.9993 18.3443 11.9749 18.6634C11.9557 18.9141 11.9261 19.0034 11.9211 19.0186L11.9205 19.0202C11.8216 19.1741 11.6465 19.2616 11.4641 19.2485L11.4624 19.2479C11.4473 19.2428 11.358 19.2129 11.146 19.0779C10.8761 18.9059 10.5269 18.6449 10 18.2498L8.8 17.3498C8.34376 17.0076 8.19867 16.8274 8.12788 16.6858C8.05709 16.5442 8 16.3201 8 15.7498V15.1245L7.71298 14.9846C7.17013 14.72 6.59079 14.6495 6 14.7755Z',
  d7: 'M7.71298 7.51497L14.9201 4.00213C16.5746 3.19574 17.4018 2.79254 18.3241 3.10681C19.2464 3.42109 19.5629 4.09544 20.1961 5.44416C21.0654 7.29594 21.5 9.27297 21.5 11.25C21.5 13.227 21.0654 15.2041 20.1961 17.0558C19.5629 18.4046 19.2464 19.0789 18.3241 19.3932C17.4018 19.7075 16.5746 19.3043 14.9201 18.4979L7.71298 14.985C7.1583 14.7147 6.56553 14.647 5.96137 14.7844L5.96135 14.7844C5.56604 14.8743 5.36835 14.9193 5.20916 14.9377C3.23222 15.167 2 13.5782 2 11.7513V10.7487C2 8.92177 3.23222 7.33303 5.20916 7.56226C5.36835 7.58071 5.56605 7.62568 5.96137 7.7156C6.56553 7.85303 7.1583 7.78532 7.71298 7.51497Z',
  d8: 'M13.4613 16.494V20.9921L7.4834 17.4936V13.9951',
  d9: 'M7.4834 13.4954V7.49805',
  d10: 'M3.00098 13.4843H7.40583L17.871 17.9951C17.9102 18.012 17.9567 18.001 17.9852 17.9691C20.0752 15.6252 20.5268 14.2661 20.8696 12.1366C21.0225 11.1866 21.0481 10.2165 20.9298 9.26152C20.6648 7.12099 20.1871 5.64482 17.9851 3.02735C17.9568 2.99379 17.9092 2.98177 17.869 2.9991L7.40583 7.509H3.00098V13.4843Z',
  d11: 'M8.25 17.0692V14H6.75V17.5C6.75 17.7668 6.89168 18.0134 7.1221 18.1478L13.1221 21.6478C13.3541 21.7831 13.6407 21.7841 13.8735 21.6504C14.1064 21.5166 14.25 21.2685 14.25 21V16.5H12.75V19.6942L8.25 17.0692Z',
  d12: 'M17.7046 2.31066C17.9785 2.19324 18.296 2.24921 18.5133 2.45323C20.5019 4.32012 21.75 7.24884 21.75 10.5C21.75 13.7512 20.5019 16.6799 18.5133 18.5468C18.296 18.7508 17.9785 18.8068 17.7046 18.6894L7.34606 14.25H2.25V6.75002H7.34606L17.7046 2.31066Z',
};

export const IconMegaphone02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="megaphone-02-stroke-rounded IconMegaphone02StrokeRounded"
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

export const IconMegaphone02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="megaphone-02-duotone-rounded IconMegaphone02DuotoneRounded"
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

export const IconMegaphone02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="megaphone-02-twotone-rounded IconMegaphone02TwotoneRounded"
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

export const IconMegaphone02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="megaphone-02-solid-rounded IconMegaphone02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMegaphone02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="megaphone-02-bulk-rounded IconMegaphone02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMegaphone02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="megaphone-02-stroke-sharp IconMegaphone02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMegaphone02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="megaphone-02-solid-sharp IconMegaphone02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMegaphone02: TheIconSelfPack = {
  name: 'Megaphone02',
  StrokeRounded: IconMegaphone02StrokeRounded,
  DuotoneRounded: IconMegaphone02DuotoneRounded,
  TwotoneRounded: IconMegaphone02TwotoneRounded,
  SolidRounded: IconMegaphone02SolidRounded,
  BulkRounded: IconMegaphone02BulkRounded,
  StrokeSharp: IconMegaphone02StrokeSharp,
  SolidSharp: IconMegaphone02SolidSharp,
};