import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 2C14.8969 2 8.46512 4.37761 4.77105 5.85372C3.07942 6.52968 2 8.17832 2 10C2 11.8217 3.07942 13.4703 4.77105 14.1463C8.46512 15.6224 14.8969 18 18 18',
  d2: 'M11 22L9.05674 20.9303C6.94097 19.7657 5.74654 17.4134 6.04547 15',
  d3: 'M4.77105 5.85372C8.46512 4.37761 14.8969 2 18 2C15.1667 4.83333 11.2 12 18 18C14.8969 18 8.46512 15.6224 4.77105 14.1463C3.07942 13.4703 2 11.8217 2 10C2 8.17832 3.07942 6.52968 4.77105 5.85372Z',
  d4: 'M16.1627 4.93495C15.5539 6.18095 15.15 7.97031 15.15 9.99988C15.15 12.0294 15.5539 13.8188 16.1627 15.0648C16.7999 16.369 17.5043 16.8054 18 16.8054C18.4957 16.8054 19.2001 16.369 19.8373 15.0648C20.4461 13.8188 20.85 12.0294 20.85 9.99988C20.85 7.97031 20.4461 6.18095 19.8373 4.93495C19.2001 3.6308 18.4957 3.19432 18 3.19432C17.5043 3.19432 16.7999 3.6308 16.1627 4.93495ZM14.4633 4.06537C15.2014 2.55451 16.397 1.24988 18 1.24988C19.603 1.24988 20.7986 2.55451 21.5367 4.06537C22.3033 5.63437 22.75 7.7339 22.75 9.99988C22.75 12.2659 22.3033 14.3654 21.5367 15.9344C20.7986 17.4452 19.603 18.7499 18 18.7499C16.397 18.7499 15.2014 17.4452 14.4633 15.9344C13.6967 14.3654 13.25 12.2659 13.25 9.99988C13.25 7.7339 13.6967 5.63437 14.4633 4.06537Z',
  d5: 'M11.3805 2.65825C13.8327 1.88104 16.3184 1.24988 18 1.24988C18.4142 1.24988 18.75 1.58566 18.75 1.99988C18.75 2.41409 18.4142 2.74988 18 2.74988C17.3326 2.74988 16.5264 3.31045 15.8424 4.67843C15.1808 6.00156 14.75 7.88193 14.75 9.99988C14.75 12.1178 15.1808 13.9982 15.8424 15.3213C16.5264 16.6893 17.3326 17.2499 18 17.2499C18.4142 17.2499 18.75 17.5857 18.75 17.9999C18.75 18.4141 18.4142 18.7499 18 18.7499C16.3184 18.7499 13.8327 18.1187 11.3805 17.3415C8.89814 16.5547 6.34768 15.5838 4.49275 14.8426C2.50639 14.0489 1.25 12.1176 1.25 9.99988C1.25 7.88218 2.50639 5.95087 4.49275 5.15714C6.34768 4.41593 8.89814 3.44502 11.3805 2.65825Z',
  d6: 'M6.1684 13.7576C6.7165 13.8255 7.10578 14.3248 7.03789 14.8729C6.78879 16.884 7.78488 18.8387 9.53898 19.8043L11.4822 20.8739C11.9661 21.1403 12.1424 21.7484 11.8761 22.2322C11.6097 22.716 11.0016 22.8924 10.5178 22.626L8.57452 21.5563C6.09707 20.1926 4.7043 17.4427 5.05306 14.6271C5.12095 14.079 5.6203 13.6897 6.1684 13.7576Z',
  d7: 'M18 1.24988C16.3184 1.24988 13.8327 1.88104 11.3805 2.65825C8.89814 3.44502 6.34768 4.41593 4.49275 5.15714C2.50639 5.95087 1.25 7.88218 1.25 9.99988C1.25 12.1176 2.50639 14.0489 4.49275 14.8426C6.34768 15.5838 8.89814 16.5547 11.3805 17.3415C13.8327 18.1187 16.3184 18.7499 18 18.7499C16.397 18.7499 15.2014 17.4452 14.4633 15.9344C13.6967 14.3654 13.25 12.2659 13.25 9.99988C13.25 7.7339 13.6967 5.63437 14.4633 4.06537C15.2014 2.55451 16.397 1.24988 18 1.24988Z',
  d8: 'M5.01367 15.0507C5.62676 15.2926 6.30021 15.5532 7.01118 15.8198C7.12265 17.4784 8.06216 18.9924 9.53898 19.8053L11.4822 20.875C11.9661 21.1414 12.1424 21.7495 11.8761 22.2333C11.6097 22.7171 11.0016 22.8935 10.5178 22.6271L8.57452 21.5574C6.22118 20.262 4.84657 17.7159 5.01367 15.0507Z',
  d9: 'M8.6878 21.4303C6.21035 20.0665 4.81759 17.3166 5.16634 14.501L7.15117 14.7468C6.90207 16.7579 7.89817 18.7126 9.65226 19.6782L11.5955 20.7479L10.6311 22.4999L8.6878 21.4303Z',
  d10: 'M11.3805 2.90837C13.8327 2.13117 16.3184 1.5 18 1.5C19.603 1.5 20.7986 2.80464 21.5367 4.31549C22.3033 5.88449 22.75 7.98402 22.75 10.25C22.75 12.516 22.3033 14.6155 21.5367 16.1845C20.7986 17.6954 19.603 19 18 19C16.3184 19 13.8327 18.3688 11.3805 17.5916C8.89814 16.8049 6.34768 15.8339 4.49275 15.0927C2.50639 14.299 1.25 12.3677 1.25 10.25C1.25 8.1323 2.50639 6.20099 4.49275 5.40726C6.34768 4.66605 8.89814 3.69515 11.3805 2.90837ZM16.1611 5.18509C15.5524 6.43108 15.1484 8.22045 15.1484 10.25C15.1484 12.2796 15.5524 14.0689 16.1611 15.3149C16.7983 16.6191 17.5028 17.0556 17.9984 17.0556C18.4941 17.0556 19.1986 16.6191 19.8357 15.3149C20.4445 14.0689 20.8484 12.2796 20.8484 10.25C20.8484 8.22045 20.4445 6.43108 19.8357 5.18509C19.1986 3.88094 18.4941 3.44446 17.9984 3.44446C17.5028 3.44446 16.7983 3.88094 16.1611 5.18509Z',
} as const;

export const IconMarketingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="marketing-stroke-rounded IconMarketingStrokeRounded"
    >
      <ellipse 
        cx="18" 
        cy="10" 
        rx="4" 
        ry="8" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
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

export const IconMarketingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="marketing-duotone-rounded IconMarketingDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <ellipse 
        cx="18" 
        cy="10" 
        rx="4" 
        ry="8" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
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

export const IconMarketingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="marketing-twotone-rounded IconMarketingTwotoneRounded"
    >
      <ellipse 
        cx="18" 
        cy="10" 
        rx="4" 
        ry="8" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
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

export const IconMarketingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="marketing-solid-rounded IconMarketingSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconMarketingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="marketing-bulk-rounded IconMarketingBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMarketingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="marketing-stroke-sharp IconMarketingStrokeSharp"
    >
      <ellipse 
        cx="18" 
        cy="10" 
        rx="4" 
        ry="8" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMarketingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="marketing-solid-sharp IconMarketingSolidSharp"
    >
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

export const iconPackOfMarketing: TheIconSelfPack = {
  name: 'Marketing',
  StrokeRounded: IconMarketingStrokeRounded,
  DuotoneRounded: IconMarketingDuotoneRounded,
  TwotoneRounded: IconMarketingTwotoneRounded,
  SolidRounded: IconMarketingSolidRounded,
  BulkRounded: IconMarketingBulkRounded,
  StrokeSharp: IconMarketingStrokeSharp,
  SolidSharp: IconMarketingSolidSharp,
};