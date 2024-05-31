import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.5 3.00372C11.6049 2.99039 10.7047 3.01289 9.8294 3.07107C5.64639 3.34913 2.31441 6.72838 2.04024 10.9707C1.98659 11.8009 1.98659 12.6607 2.04024 13.4909C2.1401 15.036 2.82343 16.4666 3.62791 17.6746C4.09501 18.5203 3.78674 19.5758 3.30021 20.4978C2.94941 21.1626 2.77401 21.495 2.91484 21.7351C3.05568 21.9752 3.37026 21.9829 3.99943 21.9982C5.24367 22.0285 6.08268 21.6757 6.74868 21.1846C7.1264 20.9061 7.31527 20.7668 7.44544 20.7508C7.5756 20.7348 7.83177 20.8403 8.34401 21.0513C8.8044 21.2409 9.33896 21.3579 9.8294 21.3905C11.2536 21.4852 12.7435 21.4854 14.1706 21.3905C18.3536 21.1125 21.6856 17.7332 21.9598 13.4909C22.0021 12.836 22.011 12.1627 21.9866 11.5',
  d2: 'M16 2L22.0001 8M16 8L22.0001 2',
  d3: 'M8.5 15H15.5M8.5 10H12',
  d4: 'M14.1706 21.3905C18.3536 21.1125 21.6856 17.7332 21.9598 13.4909C22.0134 12.6607 22.0134 11.8009 21.9598 10.9707C21.6856 6.72838 18.3536 3.34913 14.1706 3.07107C12.7435 2.97621 11.2536 2.97641 9.8294 3.07107C5.64639 3.34913 2.31441 6.72838 2.04024 10.9707C1.98659 11.8009 1.98659 12.6607 2.04024 13.4909C2.1401 15.036 2.82343 16.4666 3.62791 17.6746C4.09501 18.5203 3.78674 19.5758 3.30021 20.4978C2.94941 21.1626 2.77401 21.495 2.91484 21.7351C3.05568 21.9752 3.37026 21.9829 3.99943 21.9982C5.24367 22.0285 6.08268 21.6757 6.74868 21.1846C7.1264 20.9061 7.31527 20.7668 7.44544 20.7508C7.5756 20.7348 7.83177 20.8403 8.34401 21.0513C8.8044 21.2409 9.33896 21.3579 9.8294 21.3905C11.2536 21.4852 12.7435 21.4854 14.1706 21.3905Z',
  d5: 'M15.168 1.41789C15.5585 1.02737 16.1916 1.02737 16.5822 1.41789L18.8751 3.71079L21.168 1.41789C21.5585 1.02737 22.1916 1.02737 22.5822 1.41789C22.9727 1.80842 22.9727 2.44158 22.5822 2.83211L20.2893 5.125L22.5822 7.41789C22.9727 7.80842 22.9727 8.44158 22.5822 8.83211C22.1916 9.22263 21.5585 9.22263 21.168 8.83211L18.8751 6.53921L16.5822 8.83211C16.1916 9.22263 15.5585 9.22263 15.168 8.83211C14.7774 8.44158 14.7774 7.80842 15.168 7.41789L17.4608 5.125L15.168 2.83211C14.7774 2.44158 14.7774 1.80842 15.168 1.41789Z',
  d6: 'M13.5002 2.90808L13.5002 2.90809C13.6186 3.26808 13.821 3.6065 14.1072 3.89277L14.9152 4.70074C15.1152 4.90074 15.2152 5.00074 15.2152 5.125C15.2152 5.24926 15.1152 5.34926 14.9152 5.54926L14.1072 6.35723C13.1309 7.33354 13.1309 8.91646 14.1072 9.89277C15.0835 10.8691 16.6665 10.8691 17.6428 9.89277L18.4507 9.0848C18.6507 8.8848 18.7507 8.7848 18.875 8.7848C18.9993 8.7848 19.0993 8.8848 19.2993 9.0848L20.1072 9.89277C20.635 10.4206 21.3401 10.663 22.0308 10.6202L22.0309 10.6202C22.2178 10.6086 22.3112 10.6028 22.365 10.62C22.4525 10.6481 22.5064 10.6956 22.5453 10.7788C22.5692 10.83 22.5738 10.9024 22.5832 11.0474C22.6389 11.9098 22.6389 12.8018 22.5832 13.6642C22.2853 18.274 18.662 21.9603 14.0954 22.2639C12.6351 22.3609 11.1119 22.3607 9.65465 22.2639C9.08972 22.2263 8.47478 22.0927 7.93339 21.8698C7.84733 21.8343 7.77126 21.803 7.70361 21.7755C7.56703 21.7198 7.49873 21.692 7.42104 21.7016C7.34335 21.7112 7.28359 21.7552 7.16407 21.8431L7.0688 21.9133C6.27636 22.4976 5.27592 22.9075 3.85617 22.873L3.81044 22.8719C3.53655 22.8653 3.24461 22.8584 3.00652 22.8123C2.71975 22.7568 2.36496 22.6181 2.14291 22.2395C1.90123 21.8275 1.99813 21.4108 2.09188 21.1484C2.18036 20.9007 2.33374 20.6102 2.49042 20.3135L2.5119 20.2728C2.97823 19.3891 3.10814 18.6669 2.85881 18.1854C2.02648 16.929 1.27772 15.3806 1.1668 13.6642C1.11107 12.8018 1.11107 11.9098 1.1668 11.0474C1.46472 6.43758 5.088 2.75129 9.65465 2.44773C10.7112 2.37749 11.8025 2.35808 12.8793 2.38971C13.1054 2.39635 13.2185 2.39967 13.2944 2.45635C13.3703 2.51303 13.4136 2.64471 13.5002 2.90808ZM8.37502 15.875C7.96081 15.875 7.62502 15.5392 7.62502 15.125C7.62502 14.7108 7.96081 14.375 8.37502 14.375H15.375C15.7892 14.375 16.125 14.7108 16.125 15.125C16.125 15.5392 15.7892 15.875 15.375 15.875H8.37502ZM8.37502 10.875C7.96081 10.875 7.62502 10.5392 7.62502 10.125C7.62502 9.71078 7.96081 9.375 8.37502 9.375H11.875C12.2892 9.375 12.625 9.71078 12.625 10.125C12.625 10.5392 12.2892 10.875 11.875 10.875H8.37502Z',
  d7: 'M13.5002 2.90809C13.4136 2.64471 13.3703 2.51303 13.2944 2.45635C13.2185 2.39967 13.1054 2.39635 12.8793 2.38971C11.8025 2.35808 10.7112 2.37749 9.65465 2.44773C5.088 2.75129 1.46472 6.43758 1.1668 11.0474C1.11107 11.9098 1.11107 12.8018 1.1668 13.6642C1.27772 15.3806 2.02648 16.929 2.85881 18.1854C3.10814 18.6669 2.97823 19.3891 2.5119 20.2728L2.49042 20.3135C2.33374 20.6102 2.18036 20.9007 2.09188 21.1484C1.99813 21.4108 1.90123 21.8275 2.14291 22.2395C2.36496 22.6181 2.71975 22.7568 3.00652 22.8123C3.24461 22.8584 3.53655 22.8653 3.81044 22.8719L3.85617 22.873C5.27592 22.9075 6.27636 22.4976 7.0688 21.9133C7.10278 21.8882 7.13446 21.8649 7.16407 21.8431C7.28359 21.7552 7.34335 21.7112 7.42104 21.7016C7.49873 21.692 7.56703 21.7198 7.70361 21.7755C7.77126 21.803 7.84733 21.8343 7.93339 21.8698C8.47478 22.0927 9.08972 22.2263 9.65465 22.2639C11.1119 22.3607 12.6351 22.3609 14.0954 22.2639C18.662 21.9603 22.2853 18.274 22.5832 13.6642C22.6389 12.8018 22.6389 11.9098 22.5832 11.0474C22.5738 10.9024 22.5692 10.83 22.5453 10.7788C22.5064 10.6956 22.4525 10.6481 22.365 10.62C22.3112 10.6028 22.2178 10.6086 22.0308 10.6202C21.3401 10.663 20.635 10.4206 20.1072 9.89277L19.2993 9.0848C19.0993 8.8848 18.9993 8.7848 18.875 8.7848C18.7507 8.7848 18.6507 8.8848 18.4507 9.0848L17.6428 9.89277C16.6665 10.8691 15.0835 10.8691 14.1072 9.89277C13.1309 8.91646 13.1309 7.33354 14.1072 6.35723L14.9152 5.54926C15.1152 5.34926 15.2152 5.24926 15.2152 5.125C15.2152 5.00074 15.1152 4.90074 14.9152 4.70074L14.1072 3.89277C13.821 3.6065 13.6186 3.26808 13.5002 2.90809Z',
  d8: 'M7.625 15.125C7.625 15.5392 7.96079 15.875 8.375 15.875H15.375C15.7892 15.875 16.125 15.5392 16.125 15.125C16.125 14.7108 15.7892 14.375 15.375 14.375H8.375C7.96079 14.375 7.625 14.7108 7.625 15.125ZM7.625 10.125C7.625 10.5392 7.96079 10.875 8.375 10.875H11.875C12.2892 10.875 12.625 10.5392 12.625 10.125C12.625 9.71079 12.2892 9.375 11.875 9.375H8.375C7.96079 9.375 7.625 9.71079 7.625 10.125Z',
  d9: 'M15.8262 2L21.7525 8.0115M15.8262 8.0115L21.7525 2',
  d10: 'M7.43079 15.0252H16.3201M7.43079 10.0156H12.8631',
  d11: 'M9.85626 3.01552C3.07324 3.2225 -0.487062 12.0413 3.62071 18.0343L2.15763 21.7998C2.12704 21.8786 2.20178 21.9574 2.28202 21.9311L6.48465 20.5518C8.10795 21.9215 14.8977 22.1288 17.2011 20.5518C19.7813 19.2307 22.4856 16.3919 21.749 10.9579M9.85626 3.01552C10.0177 3.00635 10.181 3.00171 10.3459 3.00171M9.85626 3.01552L11.2848 3.01048L12.6044 3.00171',
  d12: 'M17.6288 4.95711L15.3359 2.66421L16.7502 1.25L19.043 3.54289L21.3359 1.25L22.7502 2.66421L20.4573 4.95711L22.7502 7.25L21.3359 8.66421L19.043 6.37132L16.7502 8.66421L15.3359 7.25L17.6288 4.95711Z',
  d13: 'M12.7896 2.25C13.3355 2.24999 13.6843 2.24999 13.9699 2.26261L13.5684 2.66416L15.8613 4.95705L13.5684 7.24995L16.7503 10.4319L19.0432 8.13903L21.3361 10.4319L22.4821 9.28593C22.6072 9.79502 22.6904 10.3208 22.7278 10.8595C22.75 11.1796 22.75 11.5514 22.75 12.2105V12.2895C22.75 12.9486 22.75 13.3204 22.7278 13.6405C22.4082 18.2443 18.7443 21.9082 14.1405 22.2278C13.8204 22.25 13.4486 22.25 12.7895 22.25H11.2105C10.5514 22.25 10.1796 22.25 9.85949 22.2278C8.63831 22.143 7.48219 21.8226 6.43709 21.3113L1.47483 22.75L2.77921 18.0954C1.92471 16.8022 1.38603 15.2804 1.2722 13.6405C1.24999 13.3205 1.24999 12.9486 1.25 12.2895V12.2895V12.2105V12.2104C1.24999 11.5514 1.24999 11.1795 1.2722 10.8595C1.59176 6.25571 5.25571 2.59176 9.85949 2.2722C10.1795 2.24999 10.5514 2.24999 11.2105 2.25H11.2105H12.7895H12.7896ZM7.5 14.25H16.5V15.75H7.5V14.25ZM7.5 9.25H13V10.75H7.5V9.25Z',
} as const;

export const IconMessageCancel01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-cancel-01-stroke-rounded IconMessageCancel01StrokeRounded"
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

export const IconMessageCancel01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-cancel-01-duotone-rounded IconMessageCancel01DuotoneRounded"
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

export const IconMessageCancel01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-cancel-01-twotone-rounded IconMessageCancel01TwotoneRounded"
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

export const IconMessageCancel01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-cancel-01-solid-rounded IconMessageCancel01SolidRounded"
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

export const IconMessageCancel01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-cancel-01-bulk-rounded IconMessageCancel01BulkRounded"
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

export const IconMessageCancel01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-cancel-01-stroke-sharp IconMessageCancel01StrokeSharp"
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

export const IconMessageCancel01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-cancel-01-solid-sharp IconMessageCancel01SolidSharp"
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

export const iconPackOfMessageCancel01: TheIconSelfPack = {
  name: 'MessageCancel01',
  StrokeRounded: IconMessageCancel01StrokeRounded,
  DuotoneRounded: IconMessageCancel01DuotoneRounded,
  TwotoneRounded: IconMessageCancel01TwotoneRounded,
  SolidRounded: IconMessageCancel01SolidRounded,
  BulkRounded: IconMessageCancel01BulkRounded,
  StrokeSharp: IconMessageCancel01StrokeSharp,
  SolidSharp: IconMessageCancel01SolidSharp,
};