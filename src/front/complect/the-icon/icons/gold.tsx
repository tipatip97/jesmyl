import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.2645 18.3717C14.5807 17.407 14.7388 16.9247 15.0617 16.593C15.2151 16.4354 15.3932 16.3048 15.5888 16.2066C16.0004 16 16.5003 16 17.5002 16C18.5002 16 19.0001 16 19.4117 16.2066C19.6073 16.3048 19.7854 16.4354 19.9388 16.593C20.2617 16.9247 20.4198 17.407 20.736 18.3717L21.0625 19.3675C21.4562 20.5688 21.6531 21.1694 21.3587 21.5847C21.0644 22 20.4418 22 19.1967 22H15.8038C14.5587 22 13.9361 22 13.6417 21.5847C13.3474 21.1694 13.5443 20.5688 13.938 19.3675L14.2645 18.3717Z',
  d2: 'M8.76421 10.3717C9.08041 9.40705 9.23851 8.92471 9.56143 8.59298C9.71485 8.43537 9.89299 8.3048 10.0885 8.20663C10.5001 8 11.0001 8 12 8C12.9999 8 13.4999 8 13.9115 8.20663C14.107 8.3048 14.2851 8.43537 14.4386 8.59298C14.7615 8.92471 14.9196 9.40705 15.2358 10.3717L15.5622 11.3675C15.956 12.5688 16.1528 13.1694 15.8585 13.5847C15.5642 14 14.9416 14 13.6964 14H10.3036C9.05842 14 8.43585 14 8.1415 13.5847C7.84716 13.1694 8.04404 12.5688 8.43779 11.3675L8.76421 10.3717Z',
  d3: 'M3.26445 18.3717C3.58065 17.407 3.73876 16.9247 4.06168 16.593C4.2151 16.4354 4.39323 16.3048 4.58878 16.2066C5.00037 16 5.50033 16 6.50024 16C7.50016 16 8.00012 16 8.41171 16.2066C8.60726 16.3048 8.78539 16.4354 8.93881 16.593C9.26173 16.9247 9.41983 17.407 9.73604 18.3717L10.0625 19.3675C10.4562 20.5688 10.6531 21.1694 10.3587 21.5847C10.0644 22 9.44182 22 8.19667 22H4.80382C3.55866 22 2.93609 22 2.64175 21.5847C2.34741 21.1694 2.54428 20.5688 2.93803 19.3675L3.26445 18.3717Z',
  d4: 'M12 2V4M7.5 3.5L9 5M16.5 3.5L15 5',
  d5: 'M17.7801 15C18.2541 15 18.6563 15 18.99 15.0286C19.3433 15.0588 19.6751 15.1245 19.9976 15.2864C20.2682 15.4222 20.5142 15.6026 20.7256 15.8198C20.9767 16.0778 21.1413 16.3743 21.2802 16.7031C21.4118 17.0147 21.5386 17.4016 21.6888 17.8597L22.0245 18.8839L22.041 18.9343C22.2238 19.4916 22.3857 19.9855 22.4568 20.3916C22.5328 20.826 22.5363 21.3222 22.22 21.7684C21.9014 22.2179 21.4302 22.3749 20.9943 22.4399C20.5904 22.5001 20.0762 22.5001 19.5001 22.5H19.5001L19.446 22.5H16.0532L15.9991 22.5H15.9991C15.423 22.5001 14.9088 22.5001 14.505 22.4399C14.069 22.3749 13.5978 22.2179 13.2792 21.7684C12.9629 21.3222 12.9664 20.826 13.0424 20.3916C13.1135 19.9855 13.2755 19.4916 13.4582 18.9343L13.4582 18.9343L13.4747 18.8839L13.8104 17.8597L13.8104 17.8597C13.9606 17.4015 14.0874 17.0147 14.219 16.7031C14.358 16.3743 14.5225 16.0778 14.7736 15.8198C14.985 15.6026 15.231 15.4222 15.5016 15.2864C15.8241 15.1245 16.1559 15.0588 16.5092 15.0286C16.8429 15 17.2451 15 17.7191 15H17.7191H17.7801H17.7801Z',
  d6: 'M12.2799 7C12.7539 6.99999 13.1561 6.99998 13.4897 7.02857C13.8431 7.05885 14.1749 7.12449 14.4973 7.28636C14.768 7.42224 15.0139 7.60265 15.2254 7.81984C15.4764 8.07778 15.641 8.3743 15.7799 8.7031C15.9116 9.01467 16.0384 9.40155 16.1885 9.85971L16.5243 10.8839L16.5408 10.9343C16.7235 11.4916 16.8855 11.9855 16.9565 12.3916C17.0326 12.826 17.036 13.3222 16.7198 13.7684C16.4012 14.2179 15.93 14.3749 15.494 14.4399C15.0902 14.5001 14.5759 14.5001 13.9999 14.5H13.9999L13.9458 14.5H10.5529L10.4989 14.5H10.4988C9.9228 14.5001 9.40856 14.5001 9.00472 14.4399C8.56872 14.3749 8.09757 14.2179 7.77897 13.7684C7.4627 13.3222 7.46617 12.826 7.5422 12.3916C7.61326 11.9855 7.77522 11.4916 7.95796 10.9343L7.95796 10.9343L7.97446 10.8839L8.31019 9.8597L8.31019 9.8597C8.46035 9.40154 8.58716 9.01467 8.7188 8.7031C8.85772 8.3743 9.02229 8.07778 9.27337 7.81984C9.48479 7.60265 9.73074 7.42224 10.0014 7.28636C10.3238 7.12449 10.6556 7.05885 11.009 7.02857C11.3426 6.99998 11.7449 6.99999 12.2188 7H12.2189H12.2799H12.2799Z',
  d7: 'M6.78012 15C7.2541 15 7.65633 15 7.98999 15.0286C8.34333 15.0588 8.67514 15.1245 8.99757 15.2864C9.26822 15.4222 9.51418 15.6026 9.72559 15.8198C9.97668 16.0778 10.1413 16.3743 10.2802 16.7031C10.4118 17.0147 10.5386 17.4016 10.6888 17.8597L11.0245 18.8839L11.041 18.9343C11.2238 19.4916 11.3857 19.9855 11.4568 20.3916C11.5328 20.826 11.5363 21.3222 11.22 21.7684C10.9014 22.2179 10.4302 22.3749 9.99425 22.4399C9.5904 22.5001 9.07617 22.5001 8.50014 22.5H8.50011L8.44604 22.5H5.05318L4.9991 22.5H4.99908C4.42305 22.5001 3.90881 22.5001 3.50496 22.4399C3.06897 22.3749 2.59781 22.2179 2.27922 21.7684C1.96295 21.3222 1.96641 20.826 2.04245 20.3916C2.11351 19.9855 2.27546 19.4916 2.45821 18.9343L2.45821 18.9343L2.47471 18.8839L2.81043 17.8597L2.81044 17.8597C2.9606 17.4015 3.0874 17.0147 3.21904 16.7031C3.35796 16.3743 3.52253 16.0778 3.77362 15.8198C3.98503 15.6026 4.23099 15.4222 4.50164 15.2864C4.82408 15.1245 5.15588 15.0588 5.50922 15.0286C5.84289 15 6.24511 15 6.71909 15H6.71912H6.7801H6.78012Z',
  d8: 'M12.2498 2C12.664 2 12.9998 2.33579 12.9998 2.75V4.75C12.9998 5.16421 12.664 5.5 12.2498 5.5C11.8355 5.5 11.4998 5.16421 11.4998 4.75V2.75C11.4998 2.33579 11.8355 2 12.2498 2ZM7.21943 3.71967C7.51232 3.42678 7.98719 3.42678 8.28009 3.71967L9.78009 5.21967C10.073 5.51256 10.073 5.98744 9.78009 6.28033C9.48719 6.57322 9.01232 6.57322 8.71943 6.28033L7.21943 4.78033C6.92653 4.48744 6.92653 4.01256 7.21943 3.71967ZM17.2801 3.71967C17.573 4.01256 17.573 4.48744 17.2801 4.78033L15.7801 6.28033C15.4872 6.57322 15.0123 6.57322 14.7194 6.28033C14.4265 5.98744 14.4265 5.51256 14.7194 5.21967L16.2194 3.71967C16.5123 3.42678 16.9872 3.42678 17.2801 3.71967Z',
  d9: 'M11.0002 22L8.99993 16H4.00024L2.00024 22H11.0002Z',
  d10: 'M22.0002 22L19.9999 16H15.0002L13.0002 22H22.0002Z',
  d11: 'M16.5002 13.5L14.4999 7.5H9.50024L7.50024 13.5H16.5002Z',
  d12: 'M3.28849 15.2628C3.39058 14.9566 3.67718 14.75 4.00001 14.75H8.99969C9.3225 14.75 9.6091 14.9566 9.71119 15.2628L11.7115 21.2628C11.7878 21.4915 11.7494 21.7429 11.6084 21.9385C11.4675 22.1341 11.2411 22.25 11 22.25H2.00001C1.75892 22.25 1.53254 22.1341 1.39157 21.9385C1.25061 21.743 1.21226 21.4915 1.28849 21.2628L3.28849 15.2628Z',
  d13: 'M14.2885 15.2628C14.3906 14.9566 14.6772 14.75 15 14.75H19.9997C20.3225 14.75 20.6091 14.9566 20.7112 15.2628L22.7115 21.2628C22.7878 21.4915 22.7494 21.7429 22.6084 21.9385C22.4675 22.1341 22.2411 22.25 22 22.25H13C12.7589 22.25 12.5325 22.1341 12.3916 21.9385C12.2506 21.743 12.2123 21.4915 12.2885 21.2628L14.2885 15.2628Z',
  d14: 'M8.78849 6.76283C8.89058 6.45657 9.17718 6.25 9.50001 6.25H14.4997C14.8225 6.25 15.1091 6.45656 15.2112 6.7628L17.2115 12.7628C17.2878 12.9915 17.2494 13.2429 17.1084 13.4385C16.9675 13.6341 16.7411 13.75 16.5 13.75H7.50001C7.25892 13.75 7.03254 13.6341 6.89157 13.4385C6.75061 13.243 6.71226 12.9915 6.78849 12.7628L8.78849 6.76283Z',
  d15: 'M10.9998 3.75V1.75H12.9998V3.75H10.9998ZM8.29272 5.45711L6.79272 3.95711L8.20694 2.54289L9.70694 4.04289L8.29272 5.45711ZM14.2927 4.04289L15.7927 2.54289L17.2069 3.95711L15.7069 5.45711L14.2927 4.04289Z',
} as const;

export const IconGoldStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gold-stroke-rounded IconGoldStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconGoldDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gold-duotone-rounded IconGoldDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconGoldTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gold-twotone-rounded IconGoldTwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconGoldSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gold-solid-rounded IconGoldSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconGoldBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gold-bulk-rounded IconGoldBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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

export const IconGoldStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gold-stroke-sharp IconGoldStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGoldSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gold-solid-sharp IconGoldSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGold: TheIconSelfPack = {
  name: 'Gold',
  StrokeRounded: IconGoldStrokeRounded,
  DuotoneRounded: IconGoldDuotoneRounded,
  TwotoneRounded: IconGoldTwotoneRounded,
  SolidRounded: IconGoldSolidRounded,
  BulkRounded: IconGoldBulkRounded,
  StrokeSharp: IconGoldStrokeSharp,
  SolidSharp: IconGoldSolidSharp,
};