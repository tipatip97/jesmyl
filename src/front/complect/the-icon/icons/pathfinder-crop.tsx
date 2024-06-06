import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.76082 10.3157C9.92442 10.1105 10.1105 9.92442 10.3157 9.76082C11.0862 9.14637 12.1482 9.02577 13.9994 9.0021C14.4721 8.99606 14.7084 8.99303 14.8577 9.14231C15.007 9.29159 15.0039 9.52792 14.9979 10.0006C14.9743 11.8517 14.8538 12.9135 14.2393 13.684C14.0757 13.8892 13.8896 14.0753 13.6845 14.2389C12.914 14.8534 11.8519 14.9742 10.0006 14.9979C9.52793 15.004 9.29161 15.007 9.14232 14.8577C8.99303 14.7084 8.99606 14.4721 9.0021 13.9994C9.02577 12.1482 9.14637 11.0862 9.76082 10.3157Z',
  d2: 'M9 17.4947C9.04098 19.0437 9.19209 19.982 9.74923 20.6807C9.91282 20.8858 10.0989 21.0719 10.3041 21.2355C11.2627 22 12.6726 22 15.4924 22C18.3121 22 19.722 22 20.6807 21.2355C20.8858 21.0719 21.0719 20.8858 21.2355 20.6807C22 19.722 22 18.3121 22 15.4924C22 12.6726 22 11.2627 21.2355 10.3041C21.0719 10.0989 20.8858 9.91283 20.6807 9.74923C19.982 9.19209 19.0437 9.04098 17.4947 9',
  d3: 'M2 12C2.06547 12.8804 2.22182 13.4751 2.59527 13.9421C2.73274 14.114 2.88914 14.27 3.06153 14.4071C3.52821 14.7782 4.12216 14.9343 5 15H5.5M2 5C2.06568 4.12216 2.22181 3.52821 2.59294 3.06153C2.73003 2.88914 2.88599 2.73274 3.0579 2.59527C3.52488 2.22182 4.11965 2.06547 5 2M12 2C12.8778 2.06568 13.4718 2.22181 13.9385 2.59294C14.1109 2.73003 14.2673 2.88599 14.4047 3.0579C14.7782 3.52488 14.9345 4.11965 15 5V5.5M2 7.5L2 9.5M9.5 2L7.5 2',
  d4: 'M9.00216 14.3868C9 14.7315 9 15.1016 9 15.5C9 18.3165 9 19.7247 9.76359 20.6822C9.92699 20.8871 10.1129 21.073 10.3178 21.2364C11.2753 22 12.6835 22 15.5 22C18.3165 22 19.7247 22 20.6822 21.2364C20.8871 21.073 21.073 20.8871 21.2364 20.6822C22 19.7247 22 18.3165 22 15.5C22 12.6835 22 11.2753 21.2364 10.3178C21.073 10.1129 20.8871 9.92699 20.6822 9.76359C19.7247 9 18.3165 9 15.5 9C15.1016 9 14.7315 9 14.3867 9.00216C14.6149 9.00983 14.7564 9.04099 14.8577 9.14231C15.007 9.29159 15.0039 9.52792 14.9979 10.0006C14.9743 11.8517 14.8538 12.9135 14.2393 13.684C14.0757 13.8892 13.8896 14.0753 13.6845 14.2389C12.914 14.8534 11.8519 14.9742 10.0006 14.9979C9.52793 15.004 9.29161 15.007 9.14232 14.8577C9.04099 14.7564 9.00983 14.615 9.00216 14.3868Z',
  d5: 'M2.76359 3.31779C2 4.2753 2 5.68353 2 8.5C2 11.3165 2 12.7247 2.76359 13.6822C2.92699 13.8871 3.11289 14.073 3.31779 14.2364C4.2753 15 5.68353 15 8.5 15C8.89831 15 9.26846 15 9.61315 14.9978C9.38502 14.9902 9.24363 14.959 9.14232 14.8577C8.99303 14.7084 8.99606 14.4721 9.0021 13.9994C9.02577 12.1482 9.14637 11.0862 9.76082 10.3157C9.92442 10.1105 10.1105 9.92442 10.3157 9.76082C11.0862 9.14637 12.1482 9.02577 13.9994 9.0021C14.4721 8.99606 14.7084 8.99303 14.8577 9.14231C14.959 9.24364 14.9902 9.38508 14.9978 9.61332C15 9.26858 15 8.89838 15 8.5C15 5.68353 15 4.2753 14.2364 3.31779C14.073 3.11289 13.8871 2.92699 13.6822 2.76359C12.7247 2 11.3165 2 8.5 2C5.68353 2 4.2753 2 3.31779 2.76359C3.11289 2.92699 2.92699 3.11289 2.76359 3.31779Z',
  d6: 'M14.6743 8.02185C14.9277 8.0536 15.2723 8.14275 15.5649 8.43532C15.8575 8.72789 15.9466 9.07253 15.9784 9.32592C16.0044 9.53333 16.0012 9.77363 15.9985 9.97359L15.9979 10.0135C15.975 11.8101 15.8814 13.2291 15.0213 14.3077C14.811 14.5713 14.5718 14.8106 14.3081 15.0209C13.2296 15.8809 11.8104 15.9749 10.0135 15.9979L9.97365 15.9985C9.77369 16.0012 9.53338 16.0044 9.32597 15.9784C9.07256 15.9467 8.72792 15.8575 8.43534 15.5649C8.14276 15.2724 8.05361 14.9277 8.02185 14.6743C7.99585 14.4669 7.99908 14.2266 8.00178 14.0266L8.0023 13.9868C8.02528 12.19 8.11899 10.7709 8.97911 9.69232C9.18939 9.42863 9.42863 9.1894 9.69231 8.97912C10.7709 8.11899 12.19 8.02528 13.9868 8.0023L14.0266 8.00178L14.0266 8.00177C14.2266 7.99908 14.4669 7.99585 14.6743 8.02185Z',
  d7: 'M15.3035 22.75L15.1813 22.75C13.8233 22.75 12.7177 22.75 11.8352 22.6478C10.9183 22.5416 10.1157 22.3137 9.43059 21.7673C9.16691 21.5571 8.92768 21.3178 8.7174 21.0542C8.01807 20.1772 7.83533 19.098 7.77083 17.8179C7.74304 17.2663 8.16766 16.7966 8.71924 16.7688C9.27083 16.741 9.7405 17.1657 9.7683 17.7172C9.82916 18.9252 9.99744 19.4515 10.2811 19.8072C10.398 19.9538 10.531 20.0868 10.6776 20.2037C10.9511 20.4218 11.3328 20.5762 12.0654 20.6611C12.8192 20.7484 13.8085 20.75 15.2424 20.75C16.6762 20.75 17.6655 20.7484 18.4194 20.6611C19.152 20.5762 19.5337 20.4218 19.8072 20.2037C19.9538 20.0868 20.0868 19.9538 20.2037 19.8072C20.4218 19.5337 20.5762 19.152 20.6611 18.4194C20.7484 17.6655 20.75 16.6762 20.75 15.2424C20.75 13.8085 20.7484 12.8192 20.6611 12.0654C20.5762 11.3328 20.4218 10.9511 20.2037 10.6776C20.0868 10.531 19.9538 10.398 19.8072 10.2811C19.4655 10.0086 18.9635 9.84081 17.8417 9.77507C17.2903 9.74275 16.8696 9.26961 16.9019 8.71827C16.9342 8.16694 17.4073 7.74618 17.9587 7.77849C19.1747 7.84976 20.2076 8.04227 21.0542 8.7174C21.3178 8.92768 21.5571 9.16691 21.7673 9.43059C22.3137 10.1157 22.5416 10.9183 22.6478 11.8352C22.75 12.7177 22.75 13.8233 22.75 15.1813L22.75 15.3035C22.75 16.6614 22.75 17.7671 22.6478 18.6495C22.5416 19.5665 22.3137 20.369 21.7673 21.0542C21.5571 21.3178 21.3178 21.5571 21.0542 21.7673C20.369 22.3137 19.5665 22.5416 18.6495 22.6478C17.767 22.75 16.6614 22.75 15.3035 22.75Z',
  d8: 'M6.24729 2.17589C6.28825 2.72665 5.87497 3.20634 5.32421 3.24729C4.50813 3.30798 4.16112 3.44347 3.9325 3.6263C3.81911 3.71698 3.71618 3.82018 3.62566 3.934C3.44331 4.16331 3.30812 4.51119 3.24726 5.32466C3.20605 5.8754 2.72618 6.28847 2.17544 6.24726C1.62469 6.20605 1.21163 5.72618 1.25283 5.17543C1.32333 4.23322 1.5004 3.39321 2.06031 2.68915C2.24397 2.4582 2.45297 2.2486 2.68339 2.06433C3.38873 1.50028 4.23126 1.32305 5.17589 1.2528C5.72665 1.21184 6.20634 1.62512 6.24729 2.17589ZM11.2528 2.17544C11.294 1.62469 11.7739 1.21163 12.3247 1.25283C13.2669 1.32333 14.1069 1.5004 14.8109 2.06031C15.0419 2.24397 15.2515 2.45297 15.4358 2.68339C15.9998 3.38873 16.177 4.23126 16.2473 5.17589L16.25 5.21292V5.75005C16.25 6.30233 15.8023 6.75005 15.25 6.75005C14.6978 6.75005 14.25 6.30233 14.25 5.75005V5.28815C14.1881 4.49785 14.0539 4.15773 13.8738 3.9325C13.7831 3.81911 13.6799 3.71618 13.5661 3.62566C13.3368 3.44331 12.9889 3.30812 12.1754 3.24726C11.6247 3.20605 11.2116 2.72618 11.2528 2.17544ZM6.75005 2.25005C6.75005 1.69776 7.19776 1.25005 7.75005 1.25005L9.75005 1.25005C10.3023 1.25005 10.75 1.69776 10.75 2.25005C10.75 2.80233 10.3023 3.25005 9.75005 3.25005L7.75005 3.25005C7.19776 3.25005 6.75005 2.80233 6.75005 2.25005ZM1.25005 7.75005C1.25005 7.19776 1.69776 6.75005 2.25005 6.75005C2.80233 6.75005 3.25005 7.19776 3.25005 7.75005L3.25005 9.75005C3.25005 10.3023 2.80233 10.75 2.25005 10.75C1.69776 10.75 1.25005 10.3023 1.25005 9.75005L1.25005 7.75005ZM1.2528 12.3242C1.21184 11.7734 1.62512 11.2938 2.17589 11.2528C2.72665 11.2118 3.20634 11.6251 3.24729 12.1759C3.30798 12.992 3.44347 13.339 3.6263 13.5676C3.71698 13.681 3.82018 13.7839 3.934 13.8744C4.15987 14.0541 4.50079 14.1879 5.28838 14.25H5.75005C6.30233 14.25 6.75005 14.6978 6.75005 15.25C6.75005 15.8023 6.30233 16.25 5.75005 16.25H5.21269L5.17543 16.2473C4.23322 16.1768 3.39321 15.9997 2.68915 15.4398C2.4582 15.2561 2.2486 15.0471 2.06433 14.8167C1.50028 14.1114 1.32305 13.2688 1.2528 12.3242Z',
  d9: 'M14.9962 9.00195H9V14.9998L14.9962 14.9977V9.00195Z',
  d10: 'M1.99609 12L1.99609 15H5.99611M1.99609 5L1.99609 2L4.99609 2M11.9961 2L14.9961 2V6M1.99609 7L1.99609 10M9.99611 2L6.99611 2',
  d11: 'M8.99975 17.9999L8.99975 21.9999L21.9992 22L22 8.99991L18 8.99991',
  d12: 'M8.25 8.25195H15.7462V15.7475L8.25 15.7501V8.25195Z',
  d13: 'M6.99611 1.25L9.99611 1.25V2.75L6.99611 2.75L6.99611 1.25ZM1.24609 2C1.24609 1.58579 1.58188 1.25 1.99609 1.25L4.99609 1.25V2.75L2.74609 2.75L2.74609 5H1.24609L1.24609 2ZM14.2461 2.75L11.9961 2.75V1.25L14.9961 1.25C15.4103 1.25 15.7461 1.58579 15.7461 2V6H14.2461V2.75ZM1.24609 10L1.24609 7H2.74609L2.74609 10H1.24609ZM1.24609 15L1.24609 12H2.74609L2.74609 14.25H5.99611V15.75H1.99609C1.79718 15.75 1.60642 15.671 1.46576 15.5303C1.32511 15.3897 1.24609 15.1989 1.24609 15Z',
  d14: 'M22.7492 22C22.7492 22.4142 22.4134 22.75 21.9992 22.75L8.99975 22.7499C8.58553 22.7499 8.24975 22.4142 8.24975 21.9999L8.24975 17.9999L9.74975 17.9999L9.74975 21.2499L21.2492 21.25L21.25 9.74991L18 9.74991L18 8.24991L22 8.24991C22.1989 8.24991 22.3897 8.32894 22.5303 8.4696C22.671 8.61026 22.75 8.80104 22.75 8.99996L22.7492 22Z',
};

export const IconPathfinderCropStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-crop-stroke-rounded IconPathfinderCropStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderCropDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-crop-duotone-rounded IconPathfinderCropDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinejoin="round" 
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
    </TheIconWrapper>
  );
};

export const IconPathfinderCropTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-crop-twotone-rounded IconPathfinderCropTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPathfinderCropSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-crop-solid-rounded IconPathfinderCropSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconPathfinderCropBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-crop-bulk-rounded IconPathfinderCropBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconPathfinderCropStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-crop-stroke-sharp IconPathfinderCropStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconPathfinderCropSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pathfinder-crop-solid-sharp IconPathfinderCropSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfPathfinderCrop: TheIconSelfPack = {
  name: 'PathfinderCrop',
  StrokeRounded: IconPathfinderCropStrokeRounded,
  DuotoneRounded: IconPathfinderCropDuotoneRounded,
  TwotoneRounded: IconPathfinderCropTwotoneRounded,
  SolidRounded: IconPathfinderCropSolidRounded,
  BulkRounded: IconPathfinderCropBulkRounded,
  StrokeSharp: IconPathfinderCropStrokeSharp,
  SolidSharp: IconPathfinderCropSolidSharp,
};