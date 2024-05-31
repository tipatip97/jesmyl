import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.6399 8.72783L14.1368 11.351L6.02167 6.72193C5.21723 6.26306 4.1886 6.53537 3.72415 7.33015C3.25971 8.12494 3.53533 9.14123 4.33977 9.6001L8.70947 12.0927L7.67116 14.7764C6.98516 16.4998 6.64216 17.3614 6.65445 18.1132C6.67474 19.355 7.1243 20.5026 8.35082 21.2022C9.20511 21.6896 9.90014 21.8079 11.7364 22.1791C12.9015 22.4147 13.4841 22.5325 14.0242 22.4907C14.9133 22.4219 15.7506 22.0498 16.3926 21.4382C16.7825 21.0667 17.0798 20.5579 17.6745 19.5403L18.1786 18.6777C18.9691 17.3248 19.3644 16.6484 19.4651 15.9029C19.4831 15.7692 19.494 15.6346 19.4975 15.4998C19.5174 14.7479 19.2353 14.0183 18.6711 12.5589L16.8445 7.83464C16.5638 7.10866 15.8089 6.67423 15.0313 6.79124C14.0966 6.93188 13.4659 7.8097 13.6399 8.72783Z',
  d2: 'M8.86336 4.46514C9.26026 4.86079 10.9869 4.74664 11.6238 4.6672M8.86336 4.46514C8.46647 4.0695 8.45511 2.13746 8.5348 1.50257M8.86336 4.46514C9.88443 2.69691 13.944 -0.123637 17.9724 2.69691C19.919 4.05991 20.1937 4.91887 20.5016 5.4943',
  d3: 'M13.6399 8.72783L14.1368 11.351L6.02167 6.72193C5.21723 6.26306 4.1886 6.53537 3.72415 7.33015C3.25971 8.12494 3.53533 9.14123 4.33977 9.6001L8.70947 12.0927L7.67116 14.7764C6.98516 16.4998 6.64216 17.3614 6.65445 18.1132C6.67474 19.355 7.1243 20.5026 8.35082 21.2022C9.20511 21.6896 9.90015 21.8079 11.7364 22.1791C12.9015 22.4147 13.4841 22.5325 14.0242 22.4907C14.9133 22.4219 15.7506 22.0498 16.3926 21.4382C16.7825 21.0667 17.0798 20.5579 17.6745 19.5403L18.1786 18.6777C18.9691 17.3248 19.3644 16.6484 19.4651 15.9029C19.4831 15.7692 19.494 15.6346 19.4975 15.4998C19.5174 14.7479 19.2353 14.0183 18.6711 12.5589L16.8445 7.83464C16.5638 7.10866 15.8089 6.67423 15.0313 6.79124C14.0966 6.93188 13.4659 7.8097 13.6399 8.72783Z',
  d4: 'M8.86337 4.46563C9.26026 4.86128 10.9869 4.74714 11.6238 4.66769M8.86337 4.46563C8.46648 4.06999 8.45511 2.13795 8.53481 1.50306M8.86337 4.46563C9.88447 2.6974 13.944 -0.123147 17.9724 2.6974C19.9191 4.0604 20.1938 4.91936 20.5016 5.49479',
  d5: 'M8.86336 4.46563C9.26026 4.86128 10.9869 4.74713 11.6238 4.66769M8.86336 4.46563C8.46647 4.06999 8.45511 2.13795 8.5348 1.50306M8.86336 4.46563C9.88443 2.6974 13.944 -0.123148 17.9724 2.6974C19.919 4.0604 20.1937 4.91936 20.5016 5.49479',
  d6: 'M21.2679 5.30531C21.5156 5.79895 21.3162 6.3999 20.8225 6.64756C20.3289 6.89523 19.728 6.69584 19.4803 6.2022C17.7983 2.84975 13.9209 1.84135 11.2016 3.63209L11.7996 4.23009C11.8739 4.25378 12.1883 4.63287 12.2117 4.79901C12.2693 5.20919 11.9835 5.58843 11.5733 5.64606C11.2588 5.69025 10.6522 5.73765 10.3201 5.74588C9.99278 5.754 9.62095 5.74672 9.28156 5.69696C8.98604 5.65363 8.53892 5.55662 8.22672 5.2547C8.05316 5.08686 7.94947 4.88323 7.88416 4.71713C7.81596 4.5437 7.7691 4.35772 7.73537 4.17964C7.66799 3.82388 7.63979 3.42698 7.62928 3.0728C7.6188 2.71993 7.64672 1.98333 7.65655 1.72389L7.65703 1.71126C7.68808 1.29821 8.04797 0.988547 8.46102 1.0196C8.65118 1.0196 8.8739 1.25378 9.12392 1.55441L9.75806 2.18855C13.518 -0.637827 19.0359 0.856709 21.2679 5.30531Z',
  d7: 'M2.9553 6.95662C3.6293 5.80323 5.11405 5.41483 6.27197 6.07533L12.9763 9.89963L12.7817 8.8723C12.527 7.5279 13.4516 6.25712 14.7984 6.05446C15.9181 5.88597 17.0136 6.51054 17.4228 7.56905L19.3061 12.4402C19.8159 13.7573 20.1499 14.6204 20.126 15.5245C20.1217 15.6863 20.1087 15.8477 20.0871 16.0081C19.9661 16.9043 19.4984 17.7039 18.7843 18.925L18.14 20.0277C17.604 20.9453 17.2564 21.5405 16.7886 21.9861C16.0208 22.7176 15.021 23.1613 13.9607 23.2434C13.3151 23.2933 12.6361 23.1559 11.584 22.9429C10.0585 22.6366 8.76623 22.3767 7.8579 21.8586C6.33952 20.9925 5.80656 19.5574 5.78324 18.1304C5.77514 17.6347 5.8855 17.1407 6.06612 16.583C6.24371 16.0346 6.50851 15.3694 6.84312 14.5288L6.8517 14.5073L7.65572 12.4291L3.84685 10.2564C2.68372 9.59296 2.27814 8.11542 2.9553 6.95662Z',
  d8: 'M13.1491 8.22996L13.6463 10.8545L5.52652 6.22302C4.72162 5.76391 3.69241 6.03637 3.22769 6.83157C2.76299 7.62677 3.03876 8.64358 3.84366 9.10269L8.21585 11.5966L7.17696 14.2817C6.49056 16.006 6.14737 16.8681 6.15966 17.6202C6.17996 18.8626 6.62978 20.0109 7.857 20.7109C8.71178 21.1984 9.40721 21.3168 11.2445 21.6883L14.0082 22L19.0111 15.5049L16.3556 7.33631C16.0748 6.60996 15.3194 6.1753 14.5413 6.29237C13.6061 6.43309 12.975 7.31136 13.1491 8.22996Z',
  d9: 'M20.9983 5.99974C20.0947 4.22268 18.7572 3.05509 16.9247 2.36892C15.6491 1.89126 14.2293 1.90653 12.934 2.32791C11.9329 2.61135 10.6352 3.45994 9.83534 4.49251M9.49121 2.00049V5.00366H12.0013',
  d10: 'M8.10619 0.75V5.74054H12.6062V3.74432H11.4126C12.4999 2.96281 13.7646 2.6699 14.9937 2.79653C16.8557 2.98836 18.6885 4.15119 19.7124 6.18809L21.5 5.29289C20.1755 2.65791 17.7528 1.07397 15.1991 0.810868C13.4275 0.628346 11.6178 1.08539 10.1062 2.22562V0.75H8.10619Z',
  d11: 'M2.82825 6.94126C3.50215 5.78963 4.98701 5.40153 6.14515 6.06126L12.8494 9.88027L12.6547 8.85382C12.4002 7.51189 13.3243 6.24282 14.6714 6.04039C15.7914 5.87208 16.8868 6.496 17.2959 7.55276L17.3033 7.57184L20.0857 16.1197L14.5865 23.2497L11.3715 22.8876L11.3394 22.8811C11.205 22.854 11.0759 22.8281 10.9518 22.8032L10.9472 22.8023C9.42168 22.4964 8.63916 22.3394 7.7308 21.822C6.21242 20.9571 5.67959 19.5241 5.65628 18.0993C5.64818 17.6044 5.75851 17.1112 5.93913 16.5543C6.1167 16.0067 6.3815 15.3424 6.7161 14.503L6.71612 14.503L6.72469 14.4815L7.52891 12.4056L3.71974 10.2358C2.55661 9.57321 2.15134 8.09805 2.82825 6.94126Z',
} as const;

export const IconRotateLeft02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-left-02-stroke-rounded IconRotateLeft02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconRotateLeft02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-left-02-duotone-rounded IconRotateLeft02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRotateLeft02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-left-02-twotone-rounded IconRotateLeft02TwotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRotateLeft02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-left-02-solid-rounded IconRotateLeft02SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRotateLeft02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-left-02-bulk-rounded IconRotateLeft02BulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRotateLeft02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-left-02-stroke-sharp IconRotateLeft02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRotateLeft02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-left-02-solid-sharp IconRotateLeft02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRotateLeft02: TheIconSelfPack = {
  name: 'RotateLeft02',
  StrokeRounded: IconRotateLeft02StrokeRounded,
  DuotoneRounded: IconRotateLeft02DuotoneRounded,
  TwotoneRounded: IconRotateLeft02TwotoneRounded,
  SolidRounded: IconRotateLeft02SolidRounded,
  BulkRounded: IconRotateLeft02BulkRounded,
  StrokeSharp: IconRotateLeft02StrokeSharp,
  SolidSharp: IconRotateLeft02SolidSharp,
};