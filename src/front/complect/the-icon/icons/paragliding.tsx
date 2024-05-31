import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.7586 11.213C12.2725 11.0137 11.7275 11.0137 11.2413 11.213L2.00402 15C2.00402 14.0305 1.92087 13.0354 2.51085 12.1986C4.55645 9.29747 8.40267 5.19677 11.0772 3.29756C11.636 2.90081 12.364 2.90081 12.9228 3.29756C15.5973 5.19677 19.4436 9.29747 21.4892 12.1986C22.0791 13.0354 21.996 14.0305 21.996 15L12.7586 11.213Z',
  d2: 'M10.028 12C9.60981 13.1195 7.27437 17.1832 8.22598 18.2889C8.94881 19.1288 14.8699 19.3394 15.774 18.2889C16.7256 17.1832 14.3902 13.1195 13.972 12',
  d3: 'M12 19V21',
  d4: 'M8 17L4.5 14M16 17L19.5 14',
  d5: 'M12.7596 11.213C12.2735 11.0137 11.7285 11.0137 11.2423 11.213L2.005 15C2.005 14.0305 1.92185 13.0354 2.51183 12.1986C4.55743 9.29747 8.40365 5.19677 11.0782 3.29756C11.637 2.90081 12.365 2.90081 12.9238 3.29756C15.5983 5.19677 19.4446 9.29747 21.4902 12.1986C22.0801 13.0354 21.997 14.0305 21.997 15L12.7596 11.213Z',
  d6: 'M10.029 12C9.61078 13.1195 7.27534 17.1832 8.22695 18.2889C8.94978 19.1288 14.8709 19.3394 15.775 18.2889C16.7266 17.1832 14.3912 13.1195 13.973 12',
  d7: 'M12.001 19V21',
  d8: 'M8.00098 17L4.50098 14M16.001 17L19.501 14',
  d9: 'M10.6434 2.56105C11.4622 1.97965 12.5387 1.97965 13.3574 2.56105C16.118 4.52132 20.0213 8.68977 22.1025 11.6414C22.7778 12.5991 22.7615 13.7303 22.7494 14.5716C22.7479 14.6776 22.7464 14.7791 22.7464 14.875C22.7464 15.125 22.6218 15.3586 22.4142 15.4978C22.2066 15.6371 21.9432 15.6638 21.7119 15.5689L12.4746 11.782C12.1708 11.6574 11.8301 11.6574 11.5263 11.782L2.28895 15.5689C2.05763 15.6638 1.79426 15.6371 1.58665 15.4978C1.37903 15.3586 1.25446 15.125 1.25446 14.875C1.25446 14.7791 1.253 14.6776 1.25147 14.5716C1.23936 13.7303 1.22308 12.5991 1.89833 11.6414C3.97955 8.68977 7.88289 4.52132 10.6434 2.56105Z',
  d10: 'M11.4379 11.4855C11.3362 11.756 10.6256 13.2767 10.4231 13.7007C10.174 14.2242 9.89871 14.8129 9.66482 15.3947C9.42745 15.9852 9.25245 16.5211 9.18219 16.9433C9.14445 17.17 9.14723 17.3015 9.15387 17.3689C9.16928 17.3751 9.18706 17.3819 9.20742 17.3892C9.36099 17.4443 9.58422 17.5018 9.87324 17.5539C10.4479 17.6573 11.1889 17.7224 11.9503 17.7342C12.7128 17.7461 13.4579 17.7039 14.0439 17.6074C14.338 17.559 14.5664 17.501 14.7269 17.4415C14.7797 17.4219 14.8175 17.405 14.8434 17.3922C14.8513 17.3343 14.8605 17.1997 14.8178 16.9433C14.7475 16.5211 14.5726 15.9852 14.3352 15.3947C14.1013 14.8129 13.826 14.2242 13.5769 13.7007C13.3744 13.2767 12.7403 11.756 12.6387 11.4855L13.541 11.185C14.0325 11.0025 14.5798 11.2506 14.7634 11.7392C14.834 11.9271 15.082 12.4474 15.2944 12.893C15.5447 13.4191 15.8421 14.0534 16.0995 14.6937C16.3534 15.3254 16.5884 16.0108 16.6923 16.6349C16.7847 17.1901 16.8314 18.0174 16.3053 18.6251C16.0433 18.9278 15.6841 19.1025 15.3906 19.2113C15.0764 19.3278 14.7191 19.4108 14.3543 19.4708C13.6227 19.5913 12.7575 19.6358 11.9206 19.6228C11.0825 19.6098 10.2348 19.5385 9.53481 19.4125C9.1865 19.3498 8.85091 19.2694 8.56207 19.1657C8.30983 19.0752 7.9484 18.9182 7.69465 18.6251C7.16857 18.0174 7.21529 17.1901 7.30769 16.6349C7.41158 16.0108 7.64657 15.3254 7.90051 14.6937C8.15794 14.0534 8.45525 13.4191 8.70564 12.893C8.91804 12.4474 9.16604 11.9271 9.23664 11.7392C9.42022 11.2506 9.96749 11.0025 10.459 11.185L11.4379 11.4855Z',
  d11: 'M12 17.875C12.5523 17.875 13 18.3227 13 18.875V20.875C13 21.4273 12.5523 21.875 12 21.875C11.4477 21.875 11 21.4273 11 20.875V18.875C11 18.3227 11.4477 17.875 12 17.875Z',
  d12: 'M3.74076 13.2242C4.10018 12.8049 4.73148 12.7563 5.15081 13.1158L8.65081 16.1158C9.07014 16.4752 9.1187 17.1065 8.75927 17.5258C8.39985 17.9451 7.76855 17.9937 7.34923 17.6343L3.84923 14.6343C3.4299 14.2749 3.38134 13.6436 3.74076 13.2242ZM20.2593 13.2242C20.6187 13.6436 20.5701 14.2749 20.1508 14.6343L16.6508 17.6343C16.2315 17.9937 15.6002 17.9451 15.2408 17.5258C14.8813 17.1065 14.9299 16.4752 15.3492 16.1158L18.8492 13.1158C19.2686 12.7563 19.8999 12.8049 20.2593 13.2242Z',
  d13: 'M4.08203 14.8339L7.26376 17.5611C7.30088 17.9289 7.41932 18.3071 7.69463 18.6251C7.94838 18.9183 8.30981 19.0752 8.56205 19.1658C8.85089 19.2695 9.18648 19.3499 9.53479 19.4126C9.97739 19.4922 10.479 19.55 11 19.5851V20.8751C11 21.4274 11.4477 21.8751 12 21.8751C12.5523 21.8751 13 21.4274 13 20.8751V19.6065C13.4749 19.5838 13.9364 19.5397 14.3543 19.4709C14.7191 19.4109 15.0764 19.3278 15.3906 19.2114C15.6841 19.1026 16.0433 18.9279 16.3053 18.6251C16.5806 18.3071 16.6991 17.929 16.7362 17.5612L19.9182 14.8337L17.8394 13.9814L16.3226 15.2815C16.2521 15.0828 16.1767 14.8858 16.0995 14.6938C15.8511 14.076 15.5656 13.4638 15.3209 12.949L12.814 11.9212C13.0464 12.486 13.4281 13.3893 13.5769 13.7008C13.8259 14.2242 14.1013 14.813 14.3352 15.3948C14.5725 15.9852 14.7475 16.5212 14.8178 16.9434C14.8605 17.1998 14.8513 17.3344 14.8434 17.3922C14.8175 17.4051 14.7797 17.422 14.7269 17.4416C14.5664 17.501 14.338 17.5591 14.0439 17.6075C13.4579 17.704 12.7128 17.7462 11.9503 17.7343C11.1889 17.7225 10.4479 17.6574 9.87322 17.5539C9.5842 17.5019 9.36096 17.4444 9.2074 17.3893C9.18704 17.382 9.16926 17.3752 9.15385 17.369C9.14721 17.3016 9.14442 17.1701 9.18217 16.9434C9.25243 16.5212 9.42742 15.9852 9.6648 15.3948C9.89868 14.813 10.174 14.2242 10.4231 13.7008C10.5746 13.3835 11.0107 12.452 11.2632 11.8899L8.67883 12.9494C8.43421 13.4642 8.1488 14.0761 7.90049 14.6938C7.82331 14.8858 7.74787 15.0828 7.67733 15.2815L6.16091 13.9817L4.08203 14.8339Z',
  d14: 'M12 10.902L2.00402 15C2.00402 14.0305 1.92087 13.0354 2.51085 12.1986C4.55645 9.29747 9.32543 4.89922 12 3C14.6746 4.89922 19.4436 9.29747 21.4892 12.1986C22.0791 13.0354 21.996 14.0305 21.996 15L12 10.902Z',
  d15: 'M10 12L8 18H16L14 12',
  d16: 'M12 18V21',
  d17: 'M11.9999 2.5L12.4342 2.80835C15.1555 4.74075 19.9937 9.27625 22.1021 12.2664C22.7773 13.224 22.761 14.3552 22.7489 15.1965C22.7474 15.3026 22.7459 15.404 22.7459 15.4999V16.618L11.9999 12.2125L1.25397 16.618V15.4999C1.25397 15.404 1.25251 15.3026 1.25098 15.1965C1.23887 14.3552 1.2226 13.224 1.89784 12.2664C4.00617 9.27625 8.84441 4.74075 11.5657 2.80835L11.9999 2.5Z',
  d18: 'M9.03923 17.7499L10.7102 12.737L9.28715 12.2627L7.89903 16.4271L4.98656 13.9307L4.01038 15.0695L7.38683 17.9637L7.28715 18.2627C7.21091 18.4914 7.24927 18.7428 7.39023 18.9384C7.53119 19.134 7.75758 19.2499 7.99866 19.2499H11.2487V21.5H12.7487V19.2499H15.9987C16.2397 19.2499 16.4661 19.134 16.6071 18.9384C16.7481 18.7428 16.7864 18.4914 16.7102 18.2627L16.6104 17.9634L19.9866 15.0695L19.0104 13.9307L16.0982 16.4268L14.7102 12.2627L13.2872 12.737L14.9581 17.7499H9.03923Z',
} as const;

export const IconParaglidingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="paragliding-stroke-rounded IconParaglidingStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconParaglidingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="paragliding-duotone-rounded IconParaglidingDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconParaglidingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="paragliding-twotone-rounded IconParaglidingTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconParaglidingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="paragliding-solid-rounded IconParaglidingSolidRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconParaglidingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="paragliding-bulk-rounded IconParaglidingBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconParaglidingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="paragliding-stroke-sharp IconParaglidingStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconParaglidingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="paragliding-solid-sharp IconParaglidingSolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfParagliding: TheIconSelfPack = {
  name: 'Paragliding',
  StrokeRounded: IconParaglidingStrokeRounded,
  DuotoneRounded: IconParaglidingDuotoneRounded,
  TwotoneRounded: IconParaglidingTwotoneRounded,
  SolidRounded: IconParaglidingSolidRounded,
  BulkRounded: IconParaglidingBulkRounded,
  StrokeSharp: IconParaglidingStrokeSharp,
  SolidSharp: IconParaglidingSolidSharp,
};