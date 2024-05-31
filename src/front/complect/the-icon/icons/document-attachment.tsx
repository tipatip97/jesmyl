import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 11V10C21 6.22876 21 4.34315 19.7595 3.17157C18.519 2 16.5225 2 12.5294 2L11.4706 2C7.47752 2 5.48098 2 4.24049 3.17157C3 4.34315 3 6.22876 3 10L3 14C3 17.7712 3 19.6569 4.24049 20.8284C5.48098 22 7.47751 22 11.4706 22H12',
  d2: 'M8 7H16',
  d3: 'M8 12H13',
  d4: 'M21 20.6471L21 17C21 15.5706 19.6569 14 18 14C16.3431 14 15 15.5706 15 17L15 20.5C15 21.2797 15.7326 22 16.6364 22C17.5401 22 18.2727 21.2797 18.2727 20.5L18.2727 17.7647',
  d5: 'M3 9C3 5.70017 3 4.05025 4.31802 3.02513C5.63604 2 7.75736 2 12 2C16.2426 2 18.364 2 19.682 3.02513C21 4.05025 21 5.70017 21 9V15C21 18.2998 21 19.9497 19.682 20.9749C18.364 22 16.2426 22 12 22C7.75736 22 5.63604 22 4.31802 20.9749C3 19.9497 3 18.2998 3 15V9Z',
  d6: 'M17.875 14.875C18.9796 14.875 19.875 15.7704 19.875 16.875L19.875 20.522C19.875 21.0742 20.3227 21.522 20.875 21.522C21.4273 21.522 21.875 21.0742 21.875 20.522L21.875 16.875C21.875 14.6659 20.0841 12.875 17.875 12.875C15.6659 12.875 13.875 14.6659 13.875 16.875L13.875 20.3749C13.875 21.7556 14.9943 22.8749 16.375 22.8749C17.7557 22.8749 18.875 21.7556 18.875 20.3749L18.875 17.875C18.875 17.3227 18.4273 16.875 17.875 16.875C17.3227 16.875 16.875 17.3227 16.875 17.875L16.875 20.3749C16.875 20.651 16.6511 20.8749 16.375 20.8749C16.0989 20.8749 15.875 20.651 15.875 20.3749L15.875 16.875C15.875 15.7704 16.7704 14.875 17.875 14.875Z',
  d7: 'M17.0451 1.2759C15.8591 1.12496 14.3481 1.12498 12.4595 1.125H12.4595H11.2905H11.2905C9.40188 1.12498 7.89089 1.12496 6.70492 1.2759C5.48209 1.43154 4.4578 1.76258 3.64002 2.53673C2.81437 3.31833 2.454 4.30995 2.28592 5.49339C2.12495 6.62681 2.12497 8.06642 2.125 9.84534V9.84536V13.9046V13.9046C2.12497 15.6836 2.12495 17.1232 2.28592 18.2566C2.454 19.4401 2.81437 20.4317 3.64002 21.2133C4.4578 21.9874 5.48208 22.3185 6.70492 22.4741C7.89089 22.625 9.40189 22.625 11.2905 22.625H12.4595C12.5206 22.625 12.5511 22.625 12.562 22.6242C12.7814 22.6082 12.8997 22.4205 12.8195 22.2156C12.8155 22.2054 12.7985 22.1698 12.7644 22.0985C12.5148 21.5766 12.375 20.9921 12.375 20.3749V16.875C12.375 13.8374 14.8374 11.375 17.875 11.375C18.8294 11.375 19.727 11.6181 20.5093 12.0457C21.0571 12.3452 21.331 12.4949 21.478 12.4078C21.625 12.3206 21.625 12.0377 21.625 11.4718V9.84541C21.625 8.06646 21.6251 6.62682 21.4641 5.49339C21.296 4.30995 20.9356 3.31833 20.11 2.53673C19.2922 1.76258 18.2679 1.43154 17.0451 1.2759ZM6.875 6.875C6.875 6.32272 7.32272 5.875 7.875 5.875H15.875C16.4273 5.875 16.875 6.32272 16.875 6.875C16.875 7.42728 16.4273 7.875 15.875 7.875H7.875C7.32272 7.875 6.875 7.42728 6.875 6.875ZM7.875 10.875C7.32272 10.875 6.875 11.3227 6.875 11.875C6.875 12.4273 7.32272 12.875 7.875 12.875H10.875C11.4273 12.875 11.875 12.4273 11.875 11.875C11.875 11.3227 11.4273 10.875 10.875 10.875H7.875Z',
  d8: 'M17.0451 1.2759C15.8591 1.12496 14.3481 1.12498 12.4595 1.125H11.2905C9.40189 1.12498 7.89089 1.12496 6.70492 1.2759C5.48209 1.43154 4.4578 1.76258 3.64002 2.53673C2.81437 3.31833 2.454 4.30995 2.28592 5.49339C2.12495 6.62681 2.12497 8.06643 2.125 9.84536V13.9046C2.12497 15.6835 2.12495 17.1232 2.28592 18.2566C2.454 19.4401 2.81437 20.4317 3.64002 21.2133C4.4578 21.9874 5.48208 22.3185 6.70492 22.4741C7.89089 22.625 9.40189 22.625 11.2905 22.625H12.4595C12.5206 22.625 12.5511 22.625 12.562 22.6242C12.7814 22.6082 12.8997 22.4205 12.8195 22.2156C12.8155 22.2054 12.7985 22.1698 12.7644 22.0985C12.5148 21.5766 12.375 20.9921 12.375 20.3749V16.875C12.375 13.8374 14.8374 11.375 17.875 11.375C18.8294 11.375 19.727 11.6181 20.5093 12.0457C21.0571 12.3452 21.331 12.4949 21.478 12.4078C21.625 12.3206 21.625 12.0377 21.625 11.4718V9.84541C21.625 8.06646 21.6251 6.62682 21.4641 5.49339C21.296 4.30995 20.9356 3.31833 20.11 2.53673C19.2922 1.76258 18.2679 1.43154 17.0451 1.2759Z',
  d9: 'M6.875 6.875C6.875 6.32272 7.32272 5.875 7.875 5.875H15.875C16.4273 5.875 16.875 6.32272 16.875 6.875C16.875 7.42728 16.4273 7.875 15.875 7.875H7.875C7.32272 7.875 6.875 7.42728 6.875 6.875Z',
  d10: 'M6.875 11.875C6.875 11.3227 7.32272 10.875 7.875 10.875H10.875C11.4273 10.875 11.875 11.3227 11.875 11.875C11.875 12.4273 11.4273 12.875 10.875 12.875H7.875C7.32272 12.875 6.875 12.4273 6.875 11.875Z',
  d11: 'M12 22H3L3.00017 2H21V11',
  d12: 'M21 20L21 17C21 15.5706 19.6569 14 18 14C16.3431 14 15 15.5706 15 17L15 20.5C15 21.3284 15.6716 22 16.5 22C17.3284 22 18 21.3284 18 20.5V17',
  d13: 'M2.25017 1.99999C2.25018 1.58578 2.58596 1.25 3.00017 1.25H21C21.4142 1.25 21.75 1.58579 21.75 2V13.0629C21.728 13.039 21.7059 13.0153 21.6836 12.9919C20.7631 12.0232 19.3895 11.25 17.75 11.25C16.1105 11.25 14.7369 12.0232 13.8164 12.9919C12.9126 13.943 12.25 15.2861 12.25 16.75V20.25C12.25 21.1959 12.5784 22.0652 13.1273 22.75H3C2.80109 22.75 2.61032 22.671 2.46967 22.5303C2.32902 22.3897 2.25 22.1989 2.25 22L2.25017 1.99999ZM16 7H8V5H16V7ZM8 12H12V10H8V12Z',
  d14: 'M14.9038 14.0251C15.598 13.2945 16.5976 12.75 17.75 12.75C18.9024 12.75 19.902 13.2945 20.5962 14.0251C21.2838 14.7486 21.75 15.7359 21.75 16.75V19.75H19.75L19.75 16.75C19.75 16.3346 19.5447 15.8219 19.1464 15.4028C18.7549 14.9908 18.2544 14.75 17.75 14.75C17.2456 14.75 16.7451 14.9908 16.3536 15.4028C15.9553 15.8219 15.75 16.3346 15.75 16.75V20.25C15.75 20.5261 15.9739 20.75 16.25 20.75C16.5261 20.75 16.75 20.5261 16.75 20.25V16.75H18.75V20.25C18.75 21.6307 17.6307 22.75 16.25 22.75C14.8693 22.75 13.75 21.6307 13.75 20.25L13.75 16.75C13.75 15.7359 14.2162 14.7486 14.9038 14.0251Z',
} as const;

export const IconDocumentAttachmentStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="document-attachment-stroke-rounded IconDocumentAttachmentStrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDocumentAttachmentDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="document-attachment-duotone-rounded IconDocumentAttachmentDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDocumentAttachmentTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="document-attachment-twotone-rounded IconDocumentAttachmentTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDocumentAttachmentSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="document-attachment-solid-rounded IconDocumentAttachmentSolidRounded"
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

export const IconDocumentAttachmentBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="document-attachment-bulk-rounded IconDocumentAttachmentBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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

export const IconDocumentAttachmentStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="document-attachment-stroke-sharp IconDocumentAttachmentStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconDocumentAttachmentSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="document-attachment-solid-sharp IconDocumentAttachmentSolidSharp"
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

export const iconPackOfDocumentAttachment: TheIconSelfPack = {
  name: 'DocumentAttachment',
  StrokeRounded: IconDocumentAttachmentStrokeRounded,
  DuotoneRounded: IconDocumentAttachmentDuotoneRounded,
  TwotoneRounded: IconDocumentAttachmentTwotoneRounded,
  SolidRounded: IconDocumentAttachmentSolidRounded,
  BulkRounded: IconDocumentAttachmentBulkRounded,
  StrokeSharp: IconDocumentAttachmentStrokeSharp,
  SolidSharp: IconDocumentAttachmentSolidSharp,
};