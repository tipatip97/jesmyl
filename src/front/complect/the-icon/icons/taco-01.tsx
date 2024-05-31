import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 9C7.67909 9 3.98995 11.9368 2.53353 16.0723C2.00628 17.5695 1.74265 18.318 2.34852 19.159C2.95439 20 3.94331 20 5.92117 20H18.0788C20.0567 20 21.0456 20 21.6515 19.159C22.2573 18.318 21.9937 17.5695 21.4665 16.0723C20.0101 11.9368 16.3209 9 12 9Z',
  d2: 'M21.3292 15C22.2972 13.7279 22.2176 11.9699 21.0901 10.7778C20.5725 10.2305 20.2571 9.53455 20.1924 8.80334C20.0438 7.12573 18.626 5.78671 16.8478 5.65884L16.6438 5.64417C15.8567 5.58757 15.1028 5.30226 14.4905 4.83203C13.0458 3.72266 10.9542 3.72266 9.50953 4.83203C8.89717 5.30226 8.14332 5.58757 7.35624 5.64417L7.15218 5.65884C5.37401 5.78671 3.95622 7.12573 3.80765 8.80334C3.74289 9.53455 3.42752 10.2305 2.90986 10.7778C1.78245 11.9699 1.70277 13.7279 2.67083 15',
  d3: 'M16.0078 14L15.9988 14',
  d4: 'M13.0078 16L12.9988 16',
  d5: 'M18.0078 17L17.9988 17',
  d6: 'M8.97092 4.24894C10.7338 2.91702 13.2662 2.91702 15.0291 4.24894C15.4733 4.58453 16.0267 4.79225 16.6083 4.8334L16.8077 4.84751C18.986 5.00162 20.7889 6.62597 20.9796 8.74529C21.0231 9.228 21.2355 9.69547 21.5936 10.068C23.0245 11.5566 23.1305 13.7732 21.8948 15.3707C21.568 15.7933 20.9548 15.8752 20.5253 15.5536C20.0958 15.232 20.0126 14.6287 20.3394 14.2061C20.9959 13.3573 20.9461 12.1931 20.1735 11.3893C19.5198 10.7092 19.1158 9.8384 19.0327 8.91493C18.9331 7.80809 17.9648 6.8574 16.6676 6.76563L16.4681 6.75152C15.5113 6.68382 14.5914 6.34288 13.8387 5.77418C12.7779 4.9727 11.2221 4.9727 10.1613 5.77418C9.40864 6.34288 8.48866 6.68382 7.53187 6.75152L7.33245 6.76563C6.03524 6.8574 5.06693 7.80809 4.9673 8.91493C4.88418 9.8384 4.48024 10.7092 3.82648 11.3893C3.05387 12.1931 3.00406 13.3573 3.66055 14.2061C3.98741 14.6287 3.9042 15.232 3.47469 15.5536C3.04518 15.8752 2.43203 15.7933 2.10517 15.3707C0.869545 13.7732 0.975465 11.5566 2.40642 10.068C2.76446 9.69547 2.97693 9.228 3.02038 8.74529C3.21114 6.62597 5.01397 5.00162 7.19226 4.84751L7.39169 4.8334C7.97329 4.79225 8.52675 4.58453 8.97092 4.24894Z',
  d7: 'M11.9999 8.25C7.3198 8.25 3.37382 11.4282 1.82601 15.8232L1.80249 15.89C1.55902 16.5809 1.33701 17.211 1.27108 17.7746C1.19477 18.427 1.31997 19.0146 1.73989 19.5974C2.18489 20.2151 2.77906 20.5024 3.48426 20.6324C4.12257 20.7501 4.92247 20.7501 5.85379 20.75H5.85383H18.146H18.146C19.0773 20.7501 19.8772 20.7501 20.5155 20.6324C21.2207 20.5024 21.8149 20.2151 22.2599 19.5974C22.6798 19.0146 22.805 18.427 22.7287 17.7746C22.6628 17.211 22.4408 16.5809 22.1973 15.8899L22.1738 15.8232C20.626 11.4282 16.68 8.25 11.9999 8.25ZM16.0078 15C16.5601 15 17.0078 14.5523 17.0078 14C17.0078 13.4477 16.5601 13 16.0078 13H15.9988C15.4465 13 14.9988 13.4477 14.9988 14C14.9988 14.5523 15.4465 15 15.9988 15H16.0078ZM14.0078 16C14.0078 16.5523 13.5601 17 13.0078 17H12.9988C12.4465 17 11.9988 16.5523 11.9988 16C11.9988 15.4477 12.4465 15 12.9988 15H13.0078C13.5601 15 14.0078 15.4477 14.0078 16ZM18.0078 18C18.5601 18 19.0078 17.5523 19.0078 17C19.0078 16.4477 18.5601 16 18.0078 16H17.9988C17.4465 16 16.9988 16.4477 16.9988 17C16.9988 17.5523 17.4465 18 17.9988 18H18.0078Z',
  d8: 'M1.82601 15.8232C3.37382 11.4282 7.3198 8.25 11.9999 8.25C16.68 8.25 20.626 11.4282 22.1738 15.8232L22.1973 15.8899C22.4408 16.5809 22.6628 17.211 22.7287 17.7746C22.805 18.427 22.6798 19.0146 22.2599 19.5974C21.8149 20.2151 21.2207 20.5024 20.5155 20.6324C19.8772 20.7501 19.0773 20.7501 18.146 20.75H18.146H5.85383H5.85379C4.92247 20.7501 4.12257 20.7501 3.48426 20.6324C2.77906 20.5024 2.18489 20.2151 1.73989 19.5974C1.31997 19.0146 1.19477 18.427 1.27108 17.7746C1.33701 17.211 1.55902 16.5809 1.80249 15.89L1.82601 15.8232Z',
  d9: 'M15.0291 4.24894C13.2662 2.91702 10.7338 2.91702 8.97092 4.24894C8.52675 4.58453 7.97329 4.79225 7.39169 4.8334L7.19226 4.84751C5.01397 5.00162 3.21114 6.62597 3.02038 8.74529C2.97693 9.228 2.76446 9.69547 2.40642 10.068C1.00364 11.5273 0.874229 13.6862 2.03376 15.2757C2.35238 14.4931 2.74849 13.7538 3.212 13.0697C3.16178 12.477 3.36544 11.869 3.82648 11.3893C4.48024 10.7092 4.88418 9.8384 4.9673 8.91493C5.06693 7.80809 6.03524 6.8574 7.33245 6.76563L7.53187 6.75152C8.48866 6.68382 9.40864 6.34288 10.1613 5.77418C11.2221 4.9727 12.7779 4.9727 13.8387 5.77418C14.5914 6.34288 15.5113 6.68382 16.4681 6.75152L16.6676 6.76563C17.9648 6.8574 18.9331 7.80809 19.0327 8.91493C19.1158 9.8384 19.5198 10.7092 20.1735 11.3893C20.6346 11.8691 20.8383 12.4772 20.788 13.07C21.2514 13.7541 21.6475 14.4933 21.9661 15.2758C23.1258 13.6864 22.9964 11.5274 21.5936 10.068C21.2355 9.69547 21.0231 9.228 20.9796 8.74529C20.7889 6.62597 18.986 5.00162 16.8077 4.84751L16.6083 4.8334C16.0267 4.79225 15.4733 4.58453 15.0291 4.24894Z',
  d10: 'M17.008 14C17.008 14.5523 16.5603 15 16.008 15H15.999C15.4467 15 14.999 14.5523 14.999 14C14.999 13.4477 15.4467 13 15.999 13H16.008C16.5603 13 17.008 13.4477 17.008 14ZM14.008 16C14.008 16.5523 13.5603 17 13.008 17H12.999C12.4467 17 11.999 16.5523 11.999 16C11.999 15.4477 12.4467 15 12.999 15H13.008C13.5603 15 14.008 15.4477 14.008 16ZM18.008 18C18.5603 18 19.008 17.5523 19.008 17C19.008 16.4477 18.5603 16 18.008 16H17.999C17.4467 16 16.999 16.4477 16.999 17C16.999 17.5523 17.4467 18 17.999 18H18.008Z',
  d11: 'M12 9C17.5228 9 22 13.9249 22 20H2C2 13.9249 6.47715 9 12 9Z',
  d12: 'M9.05274 4.23718C10.7668 2.92094 13.2332 2.92094 14.9473 4.23718C15.4412 4.6165 16.0544 4.84985 16.6976 4.8961L16.9016 4.91077C19.0179 5.06295 20.7559 6.6647 20.9394 8.73717C20.989 9.29649 21.2309 9.8351 21.6351 10.2625C23.0151 11.7217 23.1163 13.8901 21.926 15.4542L20.7323 14.5458C21.4782 13.5657 21.42 12.2181 20.5452 11.2932C19.9141 10.6258 19.5253 9.77261 19.4453 8.8695C19.3317 7.58676 18.2341 6.51046 16.794 6.40691L16.59 6.39224C15.6589 6.32529 14.7644 5.98802 14.0337 5.42688C12.8584 4.52437 11.1416 4.52437 9.96632 5.42688C9.23558 5.98802 8.34108 6.32529 7.41003 6.39224L7.20597 6.40691C5.76589 6.51046 4.66833 7.58676 4.55473 8.8695C4.47475 9.77261 4.0859 10.6258 3.45477 11.2932C2.57998 12.2181 2.52183 13.5657 3.26767 14.5458L2.074 15.4542C0.883716 13.8901 0.984922 11.7217 2.36495 10.2625C2.76914 9.8351 3.01104 9.29649 3.06058 8.73717C3.24411 6.6647 4.98213 5.06295 7.09839 4.91077L7.30245 4.8961C7.94557 4.84985 8.55878 4.6165 9.05274 4.23718Z',
  d13: 'M12 8.25C18.0027 8.25 22.75 13.5795 22.75 20V20.75H1.25V20C1.25 13.5795 5.99727 8.25 12 8.25ZM16.0078 15C16.5601 15 17.0078 14.5523 17.0078 14C17.0078 13.4477 16.5601 13 16.0078 13H15.9988C15.4465 13 14.9988 13.4477 14.9988 14C14.9988 14.5523 15.4465 15 15.9988 15H16.0078ZM14.0078 16C14.0078 16.5523 13.5601 17 13.0078 17H12.9988C12.4465 17 11.9988 16.5523 11.9988 16C11.9988 15.4477 12.4465 15 12.9988 15H13.0078C13.5601 15 14.0078 15.4477 14.0078 16ZM18.0078 18C18.5601 18 19.0078 17.5523 19.0078 17C19.0078 16.4477 18.5601 16 18.0078 16H17.9988C17.4465 16 16.9988 16.4477 16.9988 17C16.9988 17.5523 17.4465 18 17.9988 18H18.0078Z',
} as const;

export const IconTaco01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="taco-01-stroke-rounded IconTaco01StrokeRounded"
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
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconTaco01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="taco-01-duotone-rounded IconTaco01DuotoneRounded"
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

export const IconTaco01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="taco-01-twotone-rounded IconTaco01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTaco01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="taco-01-solid-rounded IconTaco01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTaco01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="taco-01-bulk-rounded IconTaco01BulkRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTaco01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="taco-01-stroke-sharp IconTaco01StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconTaco01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="taco-01-solid-sharp IconTaco01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfTaco01: TheIconSelfPack = {
  name: 'Taco01',
  StrokeRounded: IconTaco01StrokeRounded,
  DuotoneRounded: IconTaco01DuotoneRounded,
  TwotoneRounded: IconTaco01TwotoneRounded,
  SolidRounded: IconTaco01SolidRounded,
  BulkRounded: IconTaco01BulkRounded,
  StrokeSharp: IconTaco01StrokeSharp,
  SolidSharp: IconTaco01SolidSharp,
};