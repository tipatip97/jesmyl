import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.5 3.03368C12.2812 2.97856 11.0318 2.99114 9.8294 3.07107C5.64639 3.34913 2.31441 6.72838 2.04024 10.9707C1.98659 11.8009 1.98659 12.6607 2.04024 13.4909C2.1401 15.036 2.82343 16.4666 3.62791 17.6746C4.09501 18.5203 3.78674 19.5758 3.30021 20.4978C2.94941 21.1626 2.77401 21.495 2.91484 21.7351C3.05568 21.9752 3.37026 21.9829 3.99943 21.9982C5.24367 22.0285 6.08268 21.6757 6.74868 21.1846C7.1264 20.9061 7.31527 20.7668 7.44544 20.7508C7.5756 20.7348 7.83177 20.8403 8.34401 21.0513C8.8044 21.2409 9.33896 21.3579 9.8294 21.3905C11.2536 21.4852 12.7435 21.4854 14.1706 21.3905C18.3536 21.1125 21.6856 17.7332 21.9598 13.4909C21.9809 13.164 21.9937 12.8325 21.9982 12.5',
  d2: 'M8.5 15H15.5M8.5 10H12',
  d3: 'M17 4.5C17.4915 3.9943 18.7998 2 19.5 2M22 4.5C21.5085 3.9943 20.2002 2 19.5 2M19.5 2V10',
  d4: 'M14.1706 21.3905C18.3536 21.1125 21.6856 17.7332 21.9598 13.4909C22.0134 12.6607 22.0134 11.8009 21.9598 10.9707C21.6856 6.72838 18.3536 3.34913 14.1706 3.07107C12.7435 2.97621 11.2536 2.97641 9.8294 3.07107C5.64639 3.34913 2.31441 6.72838 2.04024 10.9707C1.98659 11.8009 1.98659 12.6607 2.04024 13.4909C2.1401 15.036 2.82343 16.4666 3.62791 17.6746C4.09501 18.5203 3.78674 19.5758 3.30021 20.4978C2.94941 21.1626 2.77401 21.495 2.91484 21.7351C3.05568 21.9752 3.37026 21.9829 3.99943 21.9982C5.24367 22.0285 6.08268 21.6757 6.74868 21.1846C7.1264 20.9061 7.31527 20.7668 7.44544 20.7508C7.5756 20.7348 7.83177 20.8403 8.34401 21.0513C8.8044 21.2409 9.33896 21.3579 9.8294 21.3905C11.2536 21.4852 12.7435 21.4854 14.1706 21.3905Z',
  d5: 'M15.0139 5.60424C15.4002 6.40056 16.036 6.76955 16.5168 6.9415C16.7697 7.03194 16.8962 7.07716 16.9509 7.15487C17.0057 7.23258 17.0057 7.34722 17.0057 7.57648L17.0057 10.125C17.0057 11.5057 18.1249 12.625 19.5057 12.625C20.8864 12.625 22.0057 11.5057 22.0057 10.125C22.0057 10.0917 22.0057 10.0751 22.0551 9.99998C22.1526 9.85205 22.4026 9.83039 22.5241 9.95936C22.5857 10.0248 22.5864 10.029 22.5879 10.0372C22.6457 10.3682 22.6861 10.7052 22.7082 11.0474C22.7639 11.9098 22.7639 12.8018 22.7082 13.6642C22.4103 18.274 18.787 21.9603 14.2204 22.2639C12.7601 22.3609 11.2369 22.3607 9.77965 22.2639C9.21472 22.2263 8.59978 22.0927 8.05839 21.8698C7.97233 21.8343 7.89626 21.803 7.82861 21.7755C7.69203 21.7198 7.62373 21.692 7.54604 21.7016C7.46835 21.7112 7.40859 21.7552 7.28907 21.8431L7.1938 21.9133C6.40136 22.4976 5.40092 22.9075 3.98117 22.873L3.93544 22.8719C3.66155 22.8653 3.36961 22.8584 3.13152 22.8123C2.84475 22.7568 2.48996 22.6181 2.26791 22.2395C2.02623 21.8275 2.12313 21.4108 2.21688 21.1484C2.30536 20.9007 2.45874 20.6102 2.61542 20.3135L2.6369 20.2728C3.10323 19.3891 3.23314 18.6669 2.98381 18.1854C2.15148 16.929 1.40272 15.3806 1.2918 13.6642C1.23607 12.8018 1.23607 11.9098 1.2918 11.0474C1.58972 6.43758 5.213 2.75129 9.77965 2.44773C11.2369 2.35086 12.7601 2.35066 14.2204 2.44773C14.338 2.45555 14.455 2.46561 14.5714 2.47789C14.9321 2.51592 15.1125 2.53494 15.1901 2.65761C15.2678 2.78028 15.1958 2.98555 15.052 3.3961C14.7151 4.35734 14.8622 5.22655 15.0139 5.60424ZM8.5 15.875C8.08579 15.875 7.75 15.5392 7.75 15.125C7.75 14.7108 8.08579 14.375 8.5 14.375H15.5C15.9142 14.375 16.25 14.7108 16.25 15.125C16.25 15.5392 15.9142 15.875 15.5 15.875H8.5ZM8.5 10.875C8.08579 10.875 7.75 10.5392 7.75 10.125C7.75 9.71078 8.08579 9.375 8.5 9.375H12C12.4142 9.375 12.75 9.71078 12.75 10.125C12.75 10.5392 12.4142 10.875 12 10.875H8.5Z',
  d6: 'M20.5059 10.125C20.5059 10.6773 20.0581 11.125 19.5059 11.125C18.9536 11.125 18.5059 10.6773 18.5059 10.125L18.5059 5.62496L17.9116 5.62498C17.736 5.62511 17.5203 5.62526 17.3439 5.60319L17.3405 5.60277C17.2141 5.587 16.638 5.51517 16.3637 4.94957C16.0887 4.38275 16.3907 3.88261 16.456 3.7744L16.4584 3.77037C16.5506 3.61735 16.6848 3.44647 16.7951 3.30592L16.8188 3.27567C17.1135 2.89985 17.4954 2.41563 17.8759 2.02462C18.0657 1.82951 18.283 1.62828 18.5139 1.46943C18.7191 1.32823 19.0693 1.12496 19.5 1.12496C19.9307 1.12496 20.2809 1.32823 20.4861 1.46943C20.717 1.62828 20.9343 1.82951 21.1241 2.02462C21.5046 2.41563 21.8865 2.89985 22.1812 3.27567L22.2049 3.30591C22.3152 3.44647 22.4494 3.61735 22.5416 3.77037L22.544 3.77441C22.6093 3.88261 22.9113 4.38275 22.6363 4.94957C22.362 5.51517 21.7859 5.58701 21.6595 5.60277L21.6561 5.60319C21.4797 5.62526 21.264 5.62511 21.0884 5.62498L20.5059 5.62496L20.5059 10.125Z',
  d7: 'M16.5168 6.9415C16.036 6.76955 15.4002 6.40056 15.0139 5.60424C14.8622 5.22655 14.7151 4.35734 15.052 3.3961C15.1958 2.98555 15.2678 2.78028 15.1901 2.65761C15.1125 2.53494 14.9321 2.51592 14.5714 2.47789C14.455 2.46561 14.338 2.45555 14.2204 2.44773C12.7601 2.35066 11.2369 2.35086 9.77965 2.44773C5.213 2.75129 1.58972 6.43758 1.2918 11.0474C1.23607 11.9098 1.23607 12.8018 1.2918 13.6642C1.40272 15.3806 2.15148 16.929 2.98381 18.1854C3.23314 18.6669 3.10323 19.3891 2.6369 20.2728L2.61542 20.3135C2.45874 20.6102 2.30536 20.9007 2.21688 21.1484C2.12313 21.4108 2.02623 21.8275 2.26791 22.2395C2.48996 22.6181 2.84475 22.7568 3.13152 22.8123C3.36961 22.8584 3.66155 22.8653 3.93544 22.8719L3.98117 22.873C5.40092 22.9075 6.40136 22.4976 7.1938 21.9133L7.28907 21.8431C7.40859 21.7552 7.46835 21.7112 7.54604 21.7016C7.62373 21.692 7.69203 21.7198 7.82861 21.7755C7.89626 21.803 7.97233 21.8343 8.05839 21.8698C8.59978 22.0927 9.21472 22.2263 9.77965 22.2639C11.2369 22.3607 12.7601 22.3609 14.2204 22.2639C18.787 21.9603 22.4103 18.274 22.7082 13.6642C22.7639 12.8018 22.7639 11.9098 22.7082 11.0474C22.6861 10.7052 22.6457 10.3682 22.5879 10.0372C22.5864 10.029 22.5857 10.0248 22.5241 9.95936C22.4026 9.83039 22.1526 9.85205 22.0551 9.99998C22.0057 10.0751 22.0057 10.0917 22.0057 10.125C22.0057 11.5057 20.8864 12.625 19.5057 12.625C18.1249 12.625 17.0057 11.5057 17.0057 10.125L17.0057 7.57648C17.0057 7.34722 17.0057 7.23258 16.9509 7.15487C16.8962 7.07716 16.7697 7.03194 16.5168 6.9415Z',
  d8: 'M7.75 15.125C7.75 15.5392 8.08579 15.875 8.5 15.875H15.5C15.9142 15.875 16.25 15.5392 16.25 15.125C16.25 14.7108 15.9142 14.375 15.5 14.375H8.5C8.08579 14.375 7.75 14.7108 7.75 15.125ZM7.75 10.125C7.75 10.5392 8.08579 10.875 8.5 10.875H12C12.4142 10.875 12.75 10.5392 12.75 10.125C12.75 9.71079 12.4142 9.375 12 9.375H8.5C8.08579 9.375 7.75 9.71079 7.75 10.125Z',
  d9: 'M7.45935 15H17.3871M7.45935 10H13.416',
  d10: 'M15.8979 5L18.8762 2L21.8545 5M18.8762 10V2.49346',
  d11: 'M21.8774 12.2473C21.9924 17.5617 18.9984 19.6689 17.0225 20.7362C14.8519 21.9088 8.76862 22.0182 6.45806 20.5296L2.05988 21.9914C1.98445 22.0204 1.99352 21.9975 2.02325 21.9224L3.63751 18.0501C0.309282 13.4472 1.4151 4.34378 9.38923 2.99524H13.6551',
  d12: 'M14.14 2.2722C14.7612 2.31533 15.3654 2.41935 15.9465 2.57837L13.5678 4.95705L16.7927 8.09614V11.9142H21.2927L21.3356 8.13903L21.8841 7.59046C22.3526 8.5944 22.6466 9.69698 22.7272 10.8595C22.7495 11.1796 22.7495 11.5514 22.7494 12.2105V12.2895C22.7495 12.9486 22.7495 13.3204 22.7272 13.6405C22.4077 18.2443 18.7437 21.9082 14.14 22.2278C13.8199 22.25 13.4481 22.25 12.789 22.25H11.2099C10.5508 22.25 10.179 22.25 9.85894 22.2278C8.63776 22.143 7.48164 21.8226 6.43654 21.3113L1.47428 22.75L2.77866 18.0954C1.92416 16.8022 1.38548 15.2804 1.27166 13.6405C1.24944 13.3205 1.24944 12.9486 1.24945 12.2895V12.2895V12.2895V12.2105V12.2105V12.2104C1.24944 11.5514 1.24944 11.1795 1.27166 10.8595C1.59121 6.25572 5.25517 2.59176 9.85894 2.2722C10.179 2.24999 10.5509 2.24999 11.2099 2.25H11.2099H11.2099H12.789H12.789H12.789C13.4481 2.24999 13.8199 2.24999 14.14 2.2722ZM7.49945 14.25H16.4995V15.75H7.49945V14.25ZM7.49945 9.25H12.9995V10.75H7.49945V9.25Z',
  d13: 'M19.0434 1.25L22.7505 4.95711L21.3363 6.37132L20.0434 5.07843V10.6642H18.0434V5.07843L16.7505 6.37132L15.3363 4.95711L19.0434 1.25Z',
} as const;

export const IconMessageUpload01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-upload-01-stroke-rounded IconMessageUpload01StrokeRounded"
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

export const IconMessageUpload01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-upload-01-duotone-rounded IconMessageUpload01DuotoneRounded"
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

export const IconMessageUpload01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-upload-01-twotone-rounded IconMessageUpload01TwotoneRounded"
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

export const IconMessageUpload01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-upload-01-solid-rounded IconMessageUpload01SolidRounded"
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

export const IconMessageUpload01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-upload-01-bulk-rounded IconMessageUpload01BulkRounded"
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

export const IconMessageUpload01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-upload-01-stroke-sharp IconMessageUpload01StrokeSharp"
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
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageUpload01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="message-upload-01-solid-sharp IconMessageUpload01SolidSharp"
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

export const iconPackOfMessageUpload01: TheIconSelfPack = {
  name: 'MessageUpload01',
  StrokeRounded: IconMessageUpload01StrokeRounded,
  DuotoneRounded: IconMessageUpload01DuotoneRounded,
  TwotoneRounded: IconMessageUpload01TwotoneRounded,
  SolidRounded: IconMessageUpload01SolidRounded,
  BulkRounded: IconMessageUpload01BulkRounded,
  StrokeSharp: IconMessageUpload01StrokeSharp,
  SolidSharp: IconMessageUpload01SolidSharp,
};