import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.5 3.00372C11.6049 2.99039 10.7047 3.01289 9.8294 3.07107C5.64639 3.34913 2.31441 6.72838 2.04024 10.9707C1.98659 11.8009 1.98659 12.6607 2.04024 13.4909C2.1401 15.036 2.82343 16.4666 3.62791 17.6746C4.09501 18.5203 3.78674 19.5758 3.30021 20.4978C2.94941 21.1626 2.77401 21.495 2.91484 21.7351C3.05568 21.9752 3.37026 21.9829 3.99943 21.9982C5.24367 22.0285 6.08268 21.6757 6.74868 21.1846C7.1264 20.9061 7.31527 20.7668 7.44544 20.7508C7.5756 20.7348 7.83177 20.8403 8.34401 21.0513C8.8044 21.2409 9.33896 21.3579 9.8294 21.3905C11.2536 21.4852 12.7435 21.4854 14.1706 21.3905C18.3536 21.1125 21.6856 17.7332 21.9598 13.4909C22.0021 12.836 22.011 12.1627 21.9866 11.5',
  d2: 'M8.5 15H15.5M8.5 10H12',
  d3: 'M15 5.5H22M18.5 2L18.5 9',
  d4: 'M14.1706 21.3905C18.3536 21.1125 21.6856 17.7332 21.9598 13.4909C22.0134 12.6607 22.0134 11.8009 21.9598 10.9707C21.6856 6.72838 18.3536 3.34913 14.1706 3.07107C12.7435 2.97621 11.2536 2.97641 9.8294 3.07107C5.64639 3.34913 2.31441 6.72838 2.04024 10.9707C1.98659 11.8009 1.98659 12.6607 2.04024 13.4909C2.1401 15.036 2.82343 16.4666 3.62791 17.6746C4.09501 18.5203 3.78674 19.5758 3.30021 20.4978C2.94941 21.1626 2.77401 21.495 2.91484 21.7351C3.05568 21.9752 3.37026 21.9829 3.99943 21.9982C5.24367 22.0285 6.08268 21.6757 6.74868 21.1846C7.1264 20.9061 7.31527 20.7668 7.44544 20.7508C7.5756 20.7348 7.83177 20.8403 8.34401 21.0513C8.8044 21.2409 9.33896 21.3579 9.8294 21.3905C11.2536 21.4852 12.7435 21.4854 14.1706 21.3905Z',
  d5: 'M15.7164 2.70442C15.8103 2.72821 15.875 2.81335 15.875 2.91019C15.875 3.02883 15.7788 3.125 15.6602 3.125H14.875C13.4943 3.125 12.375 4.24429 12.375 5.625C12.375 7.00571 13.4943 8.125 14.875 8.125H15.275C15.5578 8.125 15.6993 8.125 15.7871 8.21287C15.875 8.30074 15.875 8.44216 15.875 8.725V9.125C15.875 10.5057 16.9943 11.625 18.375 11.625C19.7557 11.625 20.875 10.5057 20.875 9.125V8.72484C20.875 8.44207 20.875 8.30068 20.9628 8.21282C21.0507 8.12495 21.1921 8.12492 21.4748 8.12484L21.5095 8.12483C21.707 8.12478 21.8058 8.12475 21.8835 8.17943C21.9612 8.23411 21.9931 8.32312 22.0569 8.50115C22.3446 9.30379 22.5257 10.1584 22.5832 11.0474C22.6389 11.9098 22.6389 12.8018 22.5832 13.6642C22.2853 18.274 18.662 21.9603 14.0954 22.2639C12.6351 22.3609 11.1119 22.3607 9.65465 22.2639C9.08972 22.2263 8.47478 22.0927 7.93339 21.8698C7.84733 21.8343 7.77126 21.803 7.70361 21.7755C7.56703 21.7198 7.49873 21.692 7.42104 21.7016C7.34335 21.7112 7.28359 21.7552 7.16407 21.8431L7.0688 21.9133C6.27636 22.4976 5.27592 22.9075 3.85617 22.873L3.81044 22.8719C3.53655 22.8653 3.24461 22.8584 3.00652 22.8123C2.71975 22.7568 2.36496 22.6181 2.14291 22.2395C1.90123 21.8275 1.99813 21.4108 2.09188 21.1484C2.18036 20.9007 2.33374 20.6102 2.49042 20.3135L2.5119 20.2728C2.97823 19.3891 3.10814 18.6669 2.85881 18.1854C2.02648 16.929 1.27772 15.3806 1.1668 13.6642C1.11107 12.8018 1.11107 11.9098 1.1668 11.0474C1.46472 6.43758 5.088 2.75129 9.65465 2.44773C11.1119 2.35086 12.6351 2.35066 14.0954 2.44773C14.6511 2.48467 15.1929 2.57171 15.7164 2.70442ZM8.375 15.875C7.96079 15.875 7.625 15.5392 7.625 15.125C7.625 14.7108 7.96079 14.375 8.375 14.375H15.375C15.7892 14.375 16.125 14.7108 16.125 15.125C16.125 15.5392 15.7892 15.875 15.375 15.875H8.375ZM8.375 10.875C7.96079 10.875 7.625 10.5392 7.625 10.125C7.625 9.71078 7.96079 9.375 8.375 9.375H11.875C12.2892 9.375 12.625 9.71078 12.625 10.125C12.625 10.5392 12.2892 10.875 11.875 10.875H8.375Z',
  d6: 'M18.375 1.125C18.9273 1.125 19.375 1.57272 19.375 2.125V4.625H21.875C22.4273 4.625 22.875 5.07272 22.875 5.625C22.875 6.17728 22.4273 6.625 21.875 6.625H19.375V9.125C19.375 9.67728 18.9273 10.125 18.375 10.125C17.8227 10.125 17.375 9.67728 17.375 9.125V6.625H14.875C14.3227 6.625 13.875 6.17728 13.875 5.625C13.875 5.07272 14.3227 4.625 14.875 4.625H17.375V2.125C17.375 1.57272 17.8227 1.125 18.375 1.125Z',
  d7: 'M15.875 2.91019C15.875 2.81335 15.8103 2.72821 15.7164 2.70442C15.1929 2.57171 14.6511 2.48467 14.0954 2.44773C12.6351 2.35066 11.1119 2.35086 9.65465 2.44773C5.088 2.75129 1.46472 6.43758 1.1668 11.0474C1.11107 11.9098 1.11107 12.8018 1.1668 13.6642C1.27772 15.3806 2.02648 16.929 2.85881 18.1854C3.10814 18.6669 2.97823 19.3891 2.5119 20.2728L2.49042 20.3135C2.33374 20.6102 2.18036 20.9007 2.09188 21.1484C1.99813 21.4108 1.90123 21.8275 2.14291 22.2395C2.36496 22.6181 2.71975 22.7568 3.00652 22.8123C3.24461 22.8584 3.53655 22.8653 3.81044 22.8719L3.85617 22.873C5.27592 22.9075 6.27636 22.4976 7.0688 21.9133C7.10278 21.8882 7.13446 21.8649 7.16407 21.8431C7.28359 21.7552 7.34335 21.7112 7.42104 21.7016C7.49873 21.692 7.56703 21.7198 7.70361 21.7755C7.77126 21.803 7.84733 21.8343 7.93339 21.8698C8.47478 22.0927 9.08972 22.2263 9.65465 22.2639C11.1119 22.3607 12.6351 22.3609 14.0954 22.2639C18.662 21.9603 22.2853 18.274 22.5832 13.6642C22.6389 12.8018 22.6389 11.9098 22.5832 11.0474C22.5257 10.1584 22.3446 9.30379 22.0569 8.50115C21.9931 8.32312 21.9612 8.23411 21.8835 8.17943C21.8058 8.12475 21.707 8.12478 21.5095 8.12483L21.4748 8.12484C21.1921 8.12492 21.0507 8.12495 20.9628 8.21282C20.875 8.30068 20.875 8.44207 20.875 8.72484V9.125C20.875 10.5057 19.7557 11.625 18.375 11.625C16.9943 11.625 15.875 10.5057 15.875 9.125V8.725C15.875 8.44216 15.875 8.30074 15.7871 8.21287C15.6993 8.125 15.5578 8.125 15.275 8.125H14.875C13.4943 8.125 12.375 7.00571 12.375 5.625C12.375 4.24429 13.4943 3.125 14.875 3.125H15.6602C15.7788 3.125 15.875 3.02883 15.875 2.91019Z',
  d8: 'M7.625 15.125C7.625 15.5392 7.96079 15.875 8.375 15.875H15.375C15.7892 15.875 16.125 15.5392 16.125 15.125C16.125 14.7108 15.7892 14.375 15.375 14.375H8.375C7.96079 14.375 7.625 14.7108 7.625 15.125ZM7.625 10.125C7.625 10.5392 7.96079 10.875 8.375 10.875H11.875C12.2892 10.875 12.625 10.5392 12.625 10.125C12.625 9.71079 12.2892 9.375 11.875 9.375H8.375C7.96079 9.375 7.625 9.71079 7.625 10.125Z',
  d9: 'M7.49323 15H16.4822M7.49323 10H12.9865',
  d10: 'M13.9853 6H21.9755M17.9804 2V10',
  d11: 'M12.7548 3.01949C12.388 3.0134 11.9566 3.00106 11.5628 3.01946C4.29927 3.14871 2.00098 7.58758 2.00098 12.5716C2.00098 14.276 2.34788 16.3625 3.60047 18.0018L2.01481 21.9788C2.01168 21.9866 2.01911 21.9946 2.02716 21.992L6.57696 20.5305C8.07648 21.3607 9.7765 21.5434 11.6598 21.5434C18.1523 21.9985 21.9702 17.794 21.9702 12.81C21.9836 12.1907 22.036 11.5515 21.9702 10.9353',
  d12: 'M11.2105 2.25H12.7895H12.7896H12.7897C13.0735 2.25 13.304 2.25 13.5 2.25177V7.5H16.5V10.5H21V7.5H21.8419C22.3353 8.52803 22.6447 9.66196 22.7278 10.8595C22.75 11.1796 22.75 11.5514 22.75 12.2105V12.2895C22.75 12.9486 22.75 13.3204 22.7278 13.6405C22.4082 18.2443 18.7443 21.9082 14.1405 22.2278C13.8204 22.25 13.4486 22.25 12.7895 22.25H11.2105C10.5514 22.25 10.1796 22.25 9.85949 22.2278C8.63831 22.143 7.48219 21.8226 6.43709 21.3113L1.47483 22.75L2.77921 18.0954C1.92471 16.8022 1.38603 15.2804 1.2722 13.6405C1.24999 13.3205 1.24999 12.9486 1.25 12.2895V12.2895V12.2895V12.2105V12.2105V12.2104C1.24999 11.5514 1.24999 11.1795 1.2722 10.8595C1.59176 6.25572 5.25571 2.59176 9.85949 2.2722C10.1795 2.24999 10.5514 2.24999 11.2105 2.25H11.2105H11.2105ZM7.5 14.25H16.5V15.75H7.5V14.25ZM7.5 9.25H13V10.75H7.5V9.25Z',
  d13: 'M17.75 4.25V1.25H19.75V4.25H22.75V6.25H19.75V9.25H17.75V6.25H14.75V4.25H17.75Z',
} as const;

export const IconMessageAdd01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-add-01-stroke-rounded IconMessageAdd01StrokeRounded"
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

export const IconMessageAdd01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-add-01-duotone-rounded IconMessageAdd01DuotoneRounded"
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

export const IconMessageAdd01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-add-01-twotone-rounded IconMessageAdd01TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageAdd01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-add-01-solid-rounded IconMessageAdd01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconMessageAdd01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-add-01-bulk-rounded IconMessageAdd01BulkRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageAdd01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-add-01-stroke-sharp IconMessageAdd01StrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageAdd01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-add-01-solid-sharp IconMessageAdd01SolidSharp"
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

export const iconPackOfMessageAdd01: TheIconSelfPack = {
  name: 'MessageAdd01',
  StrokeRounded: IconMessageAdd01StrokeRounded,
  DuotoneRounded: IconMessageAdd01DuotoneRounded,
  TwotoneRounded: IconMessageAdd01TwotoneRounded,
  SolidRounded: IconMessageAdd01SolidRounded,
  BulkRounded: IconMessageAdd01BulkRounded,
  StrokeSharp: IconMessageAdd01StrokeSharp,
  SolidSharp: IconMessageAdd01SolidSharp,
};