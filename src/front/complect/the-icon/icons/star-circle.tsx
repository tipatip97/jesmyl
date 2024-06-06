import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z',
  d2: 'M12.8638 7.72209L13.7437 9.49644C13.8637 9.74344 14.1837 9.98035 14.4536 10.0257L16.0485 10.2929C17.0684 10.4643 17.3083 11.2103 16.5734 11.9462L15.3335 13.1964C15.1236 13.4081 15.0086 13.8164 15.0736 14.1087L15.4285 15.6562C15.7085 16.8812 15.0636 17.355 13.9887 16.7148L12.4939 15.8226C12.2239 15.6613 11.7789 15.6613 11.504 15.8226L10.0091 16.7148C8.93925 17.355 8.28932 16.8761 8.56929 15.6562L8.92425 14.1087C8.98925 13.8164 8.87426 13.4081 8.66428 13.1964L7.42442 11.9462C6.6945 11.2103 6.92947 10.4643 7.94936 10.2929L9.54419 10.0257C9.80916 9.98035 10.1291 9.74344 10.2491 9.49644L11.129 7.72209C11.609 6.7593 12.3889 6.7593 12.8638 7.72209Z',
  d3: 'M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.7437 9.49644L12.8638 7.72209C12.3889 6.7593 11.609 6.7593 11.129 7.72209L10.2491 9.49644C10.1291 9.74343 9.80916 9.98035 9.54419 10.0257L7.94936 10.2929C6.92947 10.4643 6.6945 11.2103 7.42442 11.9462L8.66428 13.1964C8.87426 13.4081 8.98925 13.8164 8.92425 14.1087L8.56929 15.6562C8.28932 16.8761 8.93925 17.355 10.0091 16.7148L11.504 15.8226C11.7789 15.6613 12.2239 15.6613 12.4939 15.8226L13.9887 16.7148C15.0636 17.355 15.7085 16.8812 15.4285 15.6562L15.0736 14.1087C15.0086 13.8164 15.1236 13.4081 15.3335 13.1964L16.5734 11.9462C17.3083 11.2103 17.0684 10.4643 16.0485 10.2929L14.4536 10.0257C14.1837 9.98035 13.8637 9.74343 13.7437 9.49644Z',
  d4: 'M12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75ZM13.2841 7.24584C13.0018 6.67388 12.5598 6.25 11.9986 6.25C11.438 6.25 10.9946 6.67311 10.7097 7.24459L10.7093 7.24534L9.76811 9.14336L9.76667 9.14629C9.73804 9.20523 9.67012 9.28823 9.56843 9.36426C9.46693 9.44014 9.36877 9.48142 9.30628 9.49226L9.30574 9.49236L7.60118 9.7779C6.98455 9.88152 6.46905 10.1839 6.30236 10.7102C6.13616 11.235 6.38082 11.7807 6.82111 12.2246L8.14739 13.5618C8.19992 13.6148 8.25876 13.7146 8.29566 13.8446C8.33232 13.9737 8.33557 14.0912 8.31895 14.1672L8.31872 14.1683L7.93962 15.821C7.78186 16.5084 7.8366 17.1894 8.3215 17.5461C8.80845 17.9044 9.473 17.7485 10.0768 17.3873L11.6728 16.4346L11.6738 16.4341C11.7453 16.3924 11.8631 16.3604 12.0013 16.3604C12.1405 16.3604 12.2558 16.3929 12.3229 16.433L13.9221 17.3875C14.5266 17.7475 15.192 17.9061 15.6789 17.5482C16.1641 17.1916 16.2162 16.5093 16.059 15.8213L15.6798 14.1683L15.6796 14.1672C15.6629 14.0912 15.6662 13.9737 15.7028 13.8446C15.7397 13.7146 15.7986 13.6148 15.8511 13.5618L17.1764 12.2256L17.1769 12.2251C17.62 11.7812 17.8655 11.2351 17.6979 10.7095C17.5302 10.1835 17.0137 9.88148 16.3975 9.77793L14.6915 9.49215C14.626 9.48114 14.5264 9.43938 14.4246 9.3637C14.3228 9.28793 14.2551 9.20511 14.2265 9.14629L13.2841 7.24584Z',
  d5: 'M1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12Z',
  d6: 'M11.9986 6.25C12.5598 6.25 13.0018 6.67388 13.2841 7.24584L14.2265 9.14629C14.2551 9.20511 14.3228 9.28793 14.4246 9.3637C14.5264 9.43938 14.626 9.48114 14.6915 9.49215L16.3975 9.77793C17.0137 9.88148 17.5302 10.1835 17.6979 10.7095C17.8655 11.2351 17.62 11.7812 17.1769 12.2251L17.1764 12.2256L15.8511 13.5618C15.7986 13.6148 15.7397 13.7146 15.7028 13.8446C15.6662 13.9737 15.6629 14.0912 15.6796 14.1672L15.6798 14.1683L16.059 15.8213C16.2162 16.5093 16.1641 17.1916 15.6789 17.5482C15.192 17.9061 14.5266 17.7475 13.9221 17.3875L12.3229 16.433C12.2558 16.3929 12.1405 16.3604 12.0013 16.3604C11.8631 16.3604 11.7453 16.3924 11.6738 16.4341L11.6728 16.4346L10.0768 17.3873C9.473 17.7485 8.80845 17.9044 8.3215 17.5461C7.8366 17.1894 7.78186 16.5084 7.93962 15.821L8.31872 14.1683L8.31895 14.1672C8.33557 14.0912 8.33232 13.9737 8.29566 13.8446C8.25876 13.7146 8.19992 13.6148 8.14739 13.5618L6.82111 12.2246C6.38082 11.7807 6.13616 11.235 6.30236 10.7102C6.46905 10.1839 6.98455 9.88152 7.60118 9.7779L9.30574 9.49236L9.30628 9.49226C9.36877 9.48142 9.46693 9.44014 9.56843 9.36426C9.67012 9.28823 9.73804 9.20523 9.76667 9.14629L9.76811 9.14336L10.7093 7.24534L10.7097 7.24459C10.9946 6.67311 11.438 6.25 11.9986 6.25Z',
  d7: 'M12.0085 7.11802C12.0493 7.05581 12.1364 7.05569 12.1773 7.11779L13.8702 10.0231L17.0191 10.8094C17.0903 10.83 17.1183 10.9209 17.0721 10.9817L14.8872 13.3133L15.7315 17.0046C15.7327 17.0101 15.7336 17.0156 15.7337 17.0212C15.7352 17.0898 15.7001 17.076 15.6332 17.05L12.0968 15.5788L8.55426 17.0503C8.48769 17.0763 8.4681 17.0208 8.4701 16.9473C8.47026 16.9415 8.47107 16.9357 8.47234 16.9301L9.28945 13.3079L7.11733 10.9844C7.07121 10.9236 7.09905 10.8329 7.17017 10.8122L10.3115 10.029L12.0085 7.11802Z',
  d8: 'M12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75ZM12.6478 6.6221C12.5134 6.39168 12.2668 6.25 12 6.25C11.7333 6.25 11.4866 6.39168 11.3522 6.6221L9.76099 9.34985L6.81661 10.0924C6.55988 10.1572 6.35631 10.3525 6.281 10.6063C6.20568 10.8602 6.26979 11.1349 6.44966 11.3292L8.43203 13.4704L7.67799 16.836C7.61669 17.1096 7.71312 17.3946 7.92799 17.5747C8.14286 17.7549 8.44026 17.8001 8.69898 17.692L12 16.3128L15.3011 17.692C15.5598 17.8001 15.8572 17.7549 16.072 17.5747C16.2869 17.3946 16.3833 17.1096 16.322 16.836L15.568 13.4704L17.5504 11.3292C17.7302 11.1349 17.7943 10.8602 17.719 10.6063C17.6437 10.3525 17.4402 10.1572 17.1834 10.0924L14.239 9.34985L12.6478 6.6221Z',
} as const;

export const IconStarCircleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-circle-stroke-rounded IconStarCircleStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStarCircleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-circle-duotone-rounded IconStarCircleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStarCircleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-circle-twotone-rounded IconStarCircleTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStarCircleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-circle-solid-rounded IconStarCircleSolidRounded"
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

export const IconStarCircleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-circle-bulk-rounded IconStarCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStarCircleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-circle-stroke-sharp IconStarCircleStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStarCircleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-circle-solid-sharp IconStarCircleSolidSharp"
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

export const iconPackOfStarCircle: TheIconSelfPack = {
  name: 'StarCircle',
  StrokeRounded: IconStarCircleStrokeRounded,
  DuotoneRounded: IconStarCircleDuotoneRounded,
  TwotoneRounded: IconStarCircleTwotoneRounded,
  SolidRounded: IconStarCircleSolidRounded,
  BulkRounded: IconStarCircleBulkRounded,
  StrokeSharp: IconStarCircleStrokeSharp,
  SolidSharp: IconStarCircleSolidSharp,
};