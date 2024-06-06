import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13 3.01491C11.9414 2.98324 10.8679 3.00204 9.8294 3.07107C5.64639 3.34913 2.31441 6.72838 2.04024 10.9707C1.98659 11.8009 1.98659 12.6607 2.04024 13.4909C2.1401 15.036 2.82343 16.4666 3.62791 17.6746C4.09501 18.5203 3.78674 19.5758 3.30021 20.4978C2.94941 21.1626 2.77401 21.495 2.91484 21.7351C3.05568 21.9752 3.37026 21.9829 3.99943 21.9982C5.24367 22.0285 6.08268 21.6757 6.74868 21.1846C7.1264 20.9061 7.31527 20.7668 7.44544 20.7508C7.5756 20.7348 7.83177 20.8403 8.34401 21.0513C8.8044 21.2409 9.33896 21.3579 9.8294 21.3905C11.2536 21.4852 12.7435 21.4854 14.1706 21.3905C18.3536 21.1125 21.6856 17.7332 21.9598 13.4909C22.0021 12.836 22.011 12.1627 21.9866 11.5',
  d2: 'M16 2L22 8M16 8L22 2',
  d3: 'M11.9953 12.5H12.0042M15.9908 12.5H15.9998M7.99976 12.5H8.00873',
  d4: 'M14.1706 21.3905C18.3536 21.1125 21.6856 17.7332 21.9598 13.4909C22.0134 12.6607 22.0134 11.8009 21.9598 10.9707C21.6856 6.72838 18.3536 3.34913 14.1706 3.07107C12.7435 2.97621 11.2536 2.97641 9.8294 3.07107C5.64639 3.34913 2.31441 6.72838 2.04024 10.9707C1.98659 11.8009 1.98659 12.6607 2.04024 13.4909C2.1401 15.036 2.82343 16.4666 3.62791 17.6746C4.09501 18.5203 3.78674 19.5758 3.30021 20.4978C2.94941 21.1626 2.77401 21.495 2.91484 21.7351C3.05568 21.9752 3.37026 21.9829 3.99943 21.9982C5.24367 22.0285 6.08268 21.6757 6.74868 21.1846C7.1264 20.9061 7.31527 20.7668 7.44544 20.7508C7.5756 20.7348 7.83177 20.8403 8.34401 21.0513C8.8044 21.2409 9.33896 21.3579 9.8294 21.3905C11.2536 21.4852 12.7435 21.4854 14.1706 21.3905Z',
  d5: 'M15.1679 1.41789C15.5584 1.02737 16.1916 1.02737 16.5821 1.41789L18.875 3.71079L21.1679 1.41789C21.5584 1.02737 22.1916 1.02737 22.5821 1.41789C22.9726 1.80842 22.9726 2.44158 22.5821 2.83211L20.2892 5.125L22.5821 7.41789C22.9726 7.80842 22.9726 8.44158 22.5821 8.83211C22.1916 9.22263 21.5584 9.22263 21.1679 8.83211L18.875 6.53921L16.5821 8.83211C16.1916 9.22263 15.5584 9.22263 15.1679 8.83211C14.7774 8.44158 14.7774 7.80842 15.1679 7.41789L17.4608 5.125L15.1679 2.83211C14.7774 2.44158 14.7774 1.80842 15.1679 1.41789Z',
  d6: 'M13.5002 2.90807L13.5002 2.90807C13.6186 3.26806 13.821 3.60649 14.1072 3.89275L14.9152 4.70072C15.1152 4.90072 15.2152 5.00072 15.2152 5.12499C15.2152 5.24925 15.1152 5.34925 14.9152 5.54925L14.1072 6.35722C13.1309 7.33353 13.1309 8.91644 14.1072 9.89276C15.0835 10.8691 16.6665 10.8691 17.6428 9.89275L18.4507 9.08479C18.6507 8.88479 18.7507 8.78479 18.875 8.78479C18.9993 8.78479 19.0993 8.88479 19.2993 9.08479L20.1072 9.89275C20.635 10.4206 21.3401 10.663 22.0308 10.6202L22.0309 10.6202C22.2178 10.6086 22.3112 10.6028 22.365 10.62C22.4525 10.648 22.5064 10.6956 22.5453 10.7788C22.5692 10.83 22.5738 10.9024 22.5832 11.0473C22.6389 11.9098 22.6389 12.8018 22.5832 13.6642C22.2853 18.274 18.662 21.9603 14.0954 22.2639C12.6351 22.3609 11.1119 22.3607 9.65465 22.2639C9.08972 22.2263 8.47478 22.0927 7.93339 21.8698C7.84733 21.8343 7.77126 21.803 7.70361 21.7754C7.56703 21.7198 7.49873 21.6919 7.42104 21.7016C7.34335 21.7112 7.28359 21.7552 7.16407 21.8431L7.0688 21.9132C6.27636 22.4976 5.27592 22.9075 3.85617 22.873L3.81044 22.8719C3.53655 22.8653 3.24461 22.8583 3.00652 22.8123C2.71975 22.7568 2.36496 22.6181 2.14291 22.2395C1.90123 21.8275 1.99813 21.4108 2.09188 21.1484C2.18036 20.9007 2.33374 20.6102 2.49042 20.3135L2.5119 20.2728C2.97823 19.3891 3.10814 18.6669 2.85881 18.1854C2.02648 16.929 1.27772 15.3806 1.1668 13.6642C1.11107 12.8018 1.11107 11.9098 1.1668 11.0473C1.46472 6.43756 5.088 2.75127 9.65465 2.44771C10.7112 2.37748 11.8025 2.35806 12.8793 2.3897C13.1054 2.39634 13.2185 2.39966 13.2944 2.45634C13.3703 2.51301 13.4136 2.6447 13.5002 2.90807ZM7.875 11.625C7.32272 11.625 6.875 12.0727 6.875 12.625C6.875 13.1773 7.32272 13.625 7.875 13.625H7.88397C8.43626 13.625 8.88397 13.1773 8.88397 12.625C8.88397 12.0727 8.43626 11.625 7.88397 11.625H7.875ZM11.8705 11.625C11.3182 11.625 10.8705 12.0727 10.8705 12.625C10.8705 13.1773 11.3182 13.625 11.8705 13.625H11.8795C12.4318 13.625 12.8795 13.1773 12.8795 12.625C12.8795 12.0727 12.4318 11.625 11.8795 11.625H11.8705ZM15.866 11.625C15.3137 11.625 14.866 12.0727 14.866 12.625C14.866 13.1773 15.3137 13.625 15.866 13.625H15.875C16.4273 13.625 16.875 13.1773 16.875 12.625C16.875 12.0727 16.4273 11.625 15.875 11.625H15.866Z',
  d7: 'M13.5002 2.90809C13.4136 2.64471 13.3703 2.51303 13.2944 2.45635C13.2185 2.39967 13.1054 2.39635 12.8793 2.38971C11.8025 2.35808 10.7112 2.37749 9.65465 2.44773C5.088 2.75129 1.46472 6.43758 1.1668 11.0474C1.11107 11.9098 1.11107 12.8018 1.1668 13.6642C1.27772 15.3806 2.02648 16.929 2.85881 18.1854C3.10814 18.6669 2.97823 19.3891 2.5119 20.2728L2.49042 20.3135C2.33374 20.6102 2.18036 20.9007 2.09188 21.1484C1.99813 21.4108 1.90123 21.8275 2.14291 22.2395C2.36496 22.6181 2.71975 22.7568 3.00652 22.8123C3.24461 22.8584 3.53655 22.8653 3.81044 22.8719L3.85617 22.873C5.27592 22.9075 6.27636 22.4976 7.0688 21.9133C7.10278 21.8882 7.13446 21.8649 7.16407 21.8431C7.28359 21.7552 7.34335 21.7112 7.42104 21.7016C7.49873 21.692 7.56703 21.7198 7.70361 21.7755C7.77126 21.803 7.84733 21.8343 7.93339 21.8698C8.47478 22.0927 9.08972 22.2263 9.65465 22.2639C11.1119 22.3607 12.6351 22.3609 14.0954 22.2639C18.662 21.9603 22.2853 18.274 22.5832 13.6642C22.6389 12.8018 22.6389 11.9098 22.5832 11.0474C22.5738 10.9024 22.5692 10.83 22.5453 10.7788C22.5064 10.6956 22.4525 10.6481 22.365 10.62C22.3112 10.6028 22.2178 10.6086 22.0308 10.6202C21.3401 10.663 20.635 10.4206 20.1072 9.89277L19.2993 9.0848C19.0993 8.8848 18.9993 8.7848 18.875 8.7848C18.7507 8.7848 18.6507 8.8848 18.4507 9.0848L17.6428 9.89277C16.6665 10.8691 15.0835 10.8691 14.1072 9.89277C13.1309 8.91646 13.1309 7.33354 14.1072 6.35723L14.9152 5.54926C15.1152 5.34926 15.2152 5.24926 15.2152 5.125C15.2152 5.00074 15.1152 4.90074 14.9152 4.70074L14.1072 3.89277C13.821 3.6065 13.6186 3.26808 13.5002 2.90809Z',
  d8: 'M6.875 12.625C6.875 12.0727 7.32272 11.625 7.875 11.625H7.88397C8.43626 11.625 8.88397 12.0727 8.88397 12.625C8.88397 13.1773 8.43626 13.625 7.88397 13.625H7.875C7.32272 13.625 6.875 13.1773 6.875 12.625ZM10.8705 12.625C10.8705 12.0727 11.3182 11.625 11.8705 11.625H11.8795C12.4318 11.625 12.8795 12.0727 12.8795 12.625C12.8795 13.1773 12.4318 13.625 11.8795 13.625H11.8705C11.3182 13.625 10.8705 13.1773 10.8705 12.625ZM14.866 12.625C14.866 12.0727 15.3137 11.625 15.866 11.625H15.875C16.4273 11.625 16.875 12.0727 16.875 12.625C16.875 13.1773 16.4273 13.625 15.875 13.625H15.866C15.3137 13.625 14.866 13.1773 14.866 12.625Z',
  d9: 'M15.9102 2L21.872 8M15.9102 8L21.872 2',
  d10: 'M11.9309 12.5H11.9397M15.901 12.5H15.9099M7.96069 12.5H7.96961',
  d11: 'M9.80555 3.01576C3.06561 3.22274 -0.472069 12.0415 3.6096 18.0345L2.15586 21.8C2.12545 21.8788 2.20033 21.9574 2.28051 21.931L6.45535 20.5521C8.06834 21.9217 14.815 22.129 17.1038 20.5521C19.6675 19.231 22.3546 16.3921 21.6228 10.9581M9.80555 3.01576C9.96599 3.0066 10.1282 3.00195 10.2921 3.00195M9.80555 3.01576L11.2251 3.01073L12.5362 3.00195',
  d12: 'M17.6288 4.95711L15.3359 2.66421L16.7502 1.25L19.043 3.54289L21.3359 1.25L22.7502 2.66421L20.4573 4.95711L22.7502 7.25L21.3359 8.66421L19.043 6.37132L16.7502 8.66421L15.3359 7.25L17.6288 4.95711Z',
  d13: 'M12.7896 2.25C13.3355 2.24999 13.6844 2.24999 13.97 2.26262L13.5684 2.66422L15.8613 4.95711L13.5684 7.25001L16.7503 10.432L19.0432 8.13909L21.3361 10.432L22.4821 9.28598C22.6072 9.79505 22.6904 10.3208 22.7278 10.8595C22.75 11.1796 22.75 11.5514 22.75 12.2105V12.2895C22.75 12.9486 22.75 13.3204 22.7278 13.6405C22.4082 18.2443 18.7443 21.9082 14.1405 22.2278C13.8204 22.25 13.4486 22.25 12.7895 22.25H11.2105C10.5514 22.25 10.1796 22.25 9.85949 22.2278C8.63831 22.143 7.48219 21.8226 6.43709 21.3113L1.47483 22.75L2.77921 18.0954C1.92471 16.8022 1.38603 15.2804 1.2722 13.6405C1.24999 13.3205 1.24999 12.9486 1.25 12.2895V12.2895V12.2105V12.2104C1.24999 11.5514 1.24999 11.1795 1.2722 10.8595C1.59176 6.25571 5.25571 2.59176 9.85949 2.2722C10.1796 2.24999 10.5514 2.24999 11.2105 2.25H11.2105H12.7895H12.7896ZM9.00897 11.5001H7V13.5001H9.00897V11.5001ZM13.0045 11.5001H10.9955V13.5001H13.0045V11.5001ZM17 11.5001H14.991V13.5001H17V11.5001Z',
};

export const IconMessageCancel02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-cancel-02-stroke-rounded IconMessageCancel02StrokeRounded"
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

export const IconMessageCancel02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-cancel-02-duotone-rounded IconMessageCancel02DuotoneRounded"
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

export const IconMessageCancel02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-cancel-02-twotone-rounded IconMessageCancel02TwotoneRounded"
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

export const IconMessageCancel02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-cancel-02-solid-rounded IconMessageCancel02SolidRounded"
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

export const IconMessageCancel02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-cancel-02-bulk-rounded IconMessageCancel02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconMessageCancel02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-cancel-02-stroke-sharp IconMessageCancel02StrokeSharp"
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
        strokeLinecap="square" 
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

export const IconMessageCancel02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-cancel-02-solid-sharp IconMessageCancel02SolidSharp"
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

export const iconPackOfMessageCancel02: TheIconSelfPack = {
  name: 'MessageCancel02',
  StrokeRounded: IconMessageCancel02StrokeRounded,
  DuotoneRounded: IconMessageCancel02DuotoneRounded,
  TwotoneRounded: IconMessageCancel02TwotoneRounded,
  SolidRounded: IconMessageCancel02SolidRounded,
  BulkRounded: IconMessageCancel02BulkRounded,
  StrokeSharp: IconMessageCancel02StrokeSharp,
  SolidSharp: IconMessageCancel02SolidSharp,
};