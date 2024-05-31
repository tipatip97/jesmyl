import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 9C12 4.5 14 4 16 4C16 7 14.5 9 12 9ZM12 9C12 4.5 10 4 8 4C8 7 9.5 9 12 9Z',
  d2: 'M10 4C10 4 10.5 2.5 12 2C13.5 2.5 14 4 14 4',
  d3: 'M12 9V15',
  d4: 'M12 13C12.25 12.3333 13.2 11 15 11',
  d5: 'M13.1509 15H10.8491C8.79675 15 7.77055 15 7.2641 15.5967C6.75765 16.1934 7.03957 17.0703 7.6034 18.8242L7.69704 19.1154C8.14071 20.4955 8.36255 21.1855 8.95349 21.5878L8.97997 21.6055C9.57752 22 10.385 22 12 22C13.615 22 14.4225 22 15.02 21.6055L15.0465 21.5878C15.6375 21.1855 15.8593 20.4955 16.303 19.1154L16.3966 18.8242C16.9604 17.0703 17.2423 16.1934 16.7359 15.5967C16.2294 15 15.2033 15 13.1509 15Z',
  d6: 'M10.0046 4C10.0046 4 10.5046 2.5 12.0046 2C13.5046 2.5 14.0046 4 14.0046 4L14.115 4.28178L14.0618 4.30317C12.8851 4.78937 12.0046 6.01418 12.0046 9C12.0046 6.01418 11.124 4.78937 9.94726 4.30317L9.88281 4.27739L10.0046 4Z',
  d7: 'M12 9C14.5 9 16 7 16 4C15.3469 4 14.6939 4.05331 14.1105 4.28178M12 9C9.5 9 8 7 8 4C8.63683 4 9.27365 4.05069 9.84592 4.26507M12 9C12 6.01418 12.8805 4.78937 14.0573 4.30317M12 9C12 6.01418 11.1195 4.78937 9.94271 4.30317M14.1105 4.28178L14 4C14 4 13.5 2.5 12 2C10.5 2.5 10 4 10 4L9.87826 4.27739M14.1105 4.28178C14.0927 4.28875 14.0749 4.29588 14.0573 4.30317M14.1105 4.28178L14.0573 4.30317M9.84592 4.26507L9.87826 4.27739M9.84592 4.26507C9.87839 4.27724 9.91066 4.28993 9.94271 4.30317M9.87826 4.27739L9.94271 4.30317',
  d8: 'M14.115 4.28178L14.0046 4C14.0046 4 13.5046 2.5 12.0046 2C10.5046 2.5 10.0046 4 10.0046 4L9.88281 4.27739L9.94726 4.30317C11.124 4.78937 12.0046 6.01418 12.0046 9C12.0046 6.01418 12.8851 4.78937 14.0618 4.30317M14.115 4.28178C14.0972 4.28875 14.0795 4.29588 14.0618 4.30317M14.115 4.28178L14.0618 4.30317',
  d9: 'M11.6838 1.17632C11.889 1.10789 12.111 1.10789 12.3162 1.17632C13.3276 1.51345 13.9844 2.18264 14.3762 2.73126C14.5013 2.90642 14.6027 3.07363 14.6832 3.22118C15.1399 3.14375 15.5897 3.125 16 3.125C16.5523 3.125 17 3.57272 17 4.125C17 5.77949 16.5873 7.26879 15.7238 8.36782C14.8395 9.49335 13.5449 10.125 12 10.125C10.4551 10.125 9.16053 9.49335 8.27618 8.36782C7.41265 7.26879 7 5.77949 7 4.125C7 3.57272 7.44772 3.125 8 3.125C8.41071 3.125 8.86048 3.14382 9.31681 3.22118C9.39728 3.07363 9.49865 2.90642 9.62377 2.73126C10.0156 2.18264 10.6724 1.51345 11.6838 1.17632ZM9.4928 5.32566C9.36487 5.27789 9.22783 5.24022 9.08122 5.21105C9.21043 6.02675 9.48575 6.67009 9.84882 7.13218C10.1369 7.49878 10.4989 7.77712 10.9421 7.94447C10.8615 7.19374 10.704 6.66102 10.5168 6.28365C10.2606 5.76717 9.93312 5.50725 9.56555 5.35434L9.51456 5.33394L9.4928 5.32566ZM12 4.8661C11.7607 4.51569 11.485 4.22825 11.1818 3.99566C11.2034 3.96243 11.2265 3.92835 11.2512 3.89374C11.4304 3.64287 11.6747 3.38939 12 3.21156C12.3253 3.38939 12.5696 3.64287 12.7488 3.89374C12.7735 3.92835 12.7966 3.96243 12.8182 3.99566C12.515 4.22825 12.2393 4.51569 12 4.8661ZM13.0579 7.94447C13.5011 7.77711 13.8631 7.49878 14.1512 7.13218C14.5142 6.67009 14.7896 6.02674 14.9188 5.21105C14.7612 5.24239 14.6148 5.28353 14.479 5.33641L14.4353 5.354C14.0674 5.50687 13.7396 5.76678 13.4832 6.28365C13.296 6.66102 13.1385 7.19374 13.0579 7.94447Z',
  d10: 'M12.0003 8.125C12.5526 8.125 13.0003 8.57272 13.0003 9.125V10.6142C13.5469 10.3204 14.2108 10.125 15.0003 10.125C15.5526 10.125 16.0003 10.5727 16.0003 11.125C16.0003 11.6773 15.5526 12.125 15.0003 12.125C13.8846 12.125 13.2365 12.8706 13.0003 13.3334V15.125C13.0003 15.6773 12.5526 16.125 12.0003 16.125C11.448 16.125 11.0003 15.6773 11.0003 15.125V13.148C10.9999 13.1326 10.9999 13.1172 11.0003 13.1017V9.125C11.0003 8.57272 11.448 8.125 12.0003 8.125Z',
  d11: 'M13.2038 14.375C14.1847 14.375 14.9944 14.375 15.6191 14.4558C16.2611 14.5389 16.8732 14.7248 17.3074 15.2364C17.7602 15.7698 17.8021 16.3975 17.7089 17.0138C17.6221 17.5872 17.3951 18.2931 17.1297 19.1184L17.1297 19.1184L17.1103 19.1787L17.0028 19.5131L17.0028 19.5131C16.7928 20.1663 16.6141 20.7223 16.4091 21.1609C16.1888 21.6323 15.9107 22.0316 15.4683 22.3328L15.4639 22.3358L15.4329 22.3565C14.9936 22.6465 14.5082 22.7661 13.9682 22.8217C13.4511 22.875 12.8131 22.875 12.039 22.875H12.039H11.9604H11.9604C11.1863 22.875 10.5483 22.875 10.0313 22.8217C9.49122 22.7661 9.00578 22.6465 8.56648 22.3564L8.56205 22.3535L8.53115 22.3328C8.08868 22.0316 7.81066 21.6323 7.59032 21.1609C7.38527 20.7223 7.20658 20.1663 6.99659 19.5131L6.99659 19.513L6.8891 19.1787L6.86973 19.1185C6.60434 18.2931 6.37735 17.5872 6.29055 17.0138C6.19728 16.3975 6.23925 15.7698 6.692 15.2364C7.1262 14.7248 7.73827 14.5389 8.38035 14.4558C9.00505 14.375 9.81474 14.375 10.7957 14.375H10.7957H13.2037H13.2038Z',
  d12: 'M11.0003 10.0313C9.89513 9.81688 8.96222 9.24096 8.27618 8.36782C7.41265 7.26879 7 5.77949 7 4.125C7 3.57272 7.44772 3.125 8 3.125C8.41071 3.125 8.86048 3.14382 9.31681 3.22118C9.39728 3.07364 9.49865 2.90642 9.62377 2.73126C10.0156 2.18264 10.6724 1.51345 11.6838 1.17632C11.889 1.10789 12.111 1.10789 12.3162 1.17632C13.3276 1.51345 13.9844 2.18264 14.3762 2.73126C14.5013 2.90642 14.6027 3.07363 14.6832 3.22118C15.1399 3.14375 15.5897 3.125 16 3.125C16.5523 3.125 17 3.57271 17 4.125C17 5.77949 16.5873 7.26879 15.7238 8.36782C15.0379 9.24082 14.1052 9.8167 13.0003 10.0312V10.6142C13.5469 10.3204 14.2108 10.125 15.0003 10.125C15.5526 10.125 16.0003 10.5727 16.0003 11.125C16.0003 11.6773 15.5526 12.125 15.0003 12.125C13.8846 12.125 13.2365 12.8706 13.0003 13.3334L13.0003 15.125C13.0003 15.6773 12.5526 16.125 12.0003 16.125C11.448 16.125 11.0003 15.6773 11.0003 15.125V13.148C10.9999 13.1326 10.9999 13.1172 11.0003 13.1017V10.0313ZM9.08122 5.21105C9.22783 5.24022 9.36487 5.27789 9.4928 5.32566L9.51456 5.33394L9.56555 5.35434C9.93312 5.50725 10.2606 5.76717 10.5168 6.28365C10.704 6.66102 10.8615 7.19374 10.9421 7.94447C10.4989 7.77712 10.1369 7.49878 9.84882 7.13218C9.48575 6.6701 9.21043 6.02675 9.08122 5.21105ZM11.1818 3.99566C11.485 4.22825 11.7607 4.51569 12 4.8661C12.2393 4.51569 12.515 4.22825 12.8182 3.99566C12.7966 3.96243 12.7735 3.92835 12.7488 3.89374C12.5696 3.64287 12.3253 3.38939 12 3.21156C11.6747 3.38939 11.4304 3.64287 11.2512 3.89374C11.2265 3.92835 11.2034 3.96243 11.1818 3.99566ZM14.1512 7.13218C13.8631 7.49878 13.5011 7.77711 13.0579 7.94447C13.1385 7.19374 13.296 6.66102 13.4832 6.28365C13.7396 5.76678 14.0674 5.50687 14.4353 5.354L14.479 5.33641C14.6148 5.28353 14.7612 5.24239 14.9188 5.21105C14.7896 6.02674 14.5142 6.67009 14.1512 7.13218Z',
  d13: 'M11.9852 9.00208C11.9852 4.50208 13.9945 4.00208 16.0037 4.00208C16.0037 7.00208 14.4968 9.00208 11.9852 9.00208ZM11.9852 9.00208C11.9852 4.50208 9.97601 4.00208 7.9668 4.00208C7.9668 7.00208 9.47371 9.00208 11.9852 9.00208Z',
  d14: 'M9.97559 4.00208C9.97559 4.00208 10.4779 2.50208 11.9848 2.00208C13.4917 2.50208 13.994 4.00208 13.994 4.00208',
  d15: 'M11.9844 9.00208V15.0021',
  d16: 'M11.9844 13.0021C12.2355 12.3354 13.1899 11.0021 14.9982 11.0021',
  d17: 'M16.901 15.0176L7.09897 15.0168C7.03199 15.0168 6.98362 15.0804 7.00197 15.1442L8.9712 21.9973L15.0232 21.998L16.998 15.145C17.0164 15.0812 16.968 15.0176 16.901 15.0176Z',
  d18: 'M11.25 15.0146V9.72006C10.1126 9.55065 9.16148 8.99083 8.47276 8.11594C7.65324 7.07488 7.25 5.6481 7.25 4.03527V3.28668H8C8.45548 3.28668 8.95454 3.30987 9.45356 3.41241C9.53859 3.2404 9.66083 3.02225 9.82759 2.78924C10.1996 2.26938 10.8172 1.64366 11.7632 1.32891L12.0004 1.25L12.2376 1.32891C13.1836 1.64366 13.8012 2.26938 14.1732 2.78924C14.3399 3.02219 14.4621 3.24028 14.5471 3.41227C15.0459 3.30985 15.5447 3.28668 16 3.28668H16.75V4.03527C16.75 5.6481 16.3468 7.07488 15.5272 8.11594C14.8385 8.99083 13.8874 9.55065 12.75 9.72006V10.9569C13.3249 10.5609 14.0696 10.2735 14.9991 10.2735V11.7707C13.7192 11.7707 12.9947 12.6499 12.75 13.1671V15.0146H11.25ZM11.0476 3.65925C10.9662 3.77299 10.9007 3.88147 10.8496 3.97545C10.9894 4.06881 11.1254 4.17453 11.2562 4.29422C11.5446 4.55813 11.7928 4.87521 11.9994 5.25092C12.206 4.87521 12.4541 4.55813 12.7426 4.29422C12.8736 4.17437 13.0097 4.06852 13.1497 3.97508C13.0987 3.88118 13.0333 3.77284 12.952 3.65925C12.7368 3.35863 12.4281 3.04432 11.9998 2.84367C11.5715 3.04432 11.2627 3.35863 11.0476 3.65925Z',
  d19: 'M6.40124 14.5638C6.54297 14.3763 6.76466 14.266 7.00001 14.266H17C17.2353 14.266 17.457 14.3763 17.5988 14.5638C17.7405 14.7513 17.7858 14.9944 17.7211 15.2202L15.5657 22.75H8.43428L6.27886 15.2202C6.21421 14.9944 6.25952 14.7513 6.40124 14.5638Z',
} as const;

export const IconFlowerPotStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flower-pot-stroke-rounded IconFlowerPotStrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFlowerPotDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flower-pot-duotone-rounded IconFlowerPotDuotoneRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFlowerPotTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flower-pot-twotone-rounded IconFlowerPotTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFlowerPotSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flower-pot-solid-rounded IconFlowerPotSolidRounded"
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlowerPotBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flower-pot-bulk-rounded IconFlowerPotBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlowerPotStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flower-pot-stroke-sharp IconFlowerPotStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlowerPotSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="flower-pot-solid-sharp IconFlowerPotSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFlowerPot: TheIconSelfPack = {
  name: 'FlowerPot',
  StrokeRounded: IconFlowerPotStrokeRounded,
  DuotoneRounded: IconFlowerPotDuotoneRounded,
  TwotoneRounded: IconFlowerPotTwotoneRounded,
  SolidRounded: IconFlowerPotSolidRounded,
  BulkRounded: IconFlowerPotBulkRounded,
  StrokeSharp: IconFlowerPotStrokeSharp,
  SolidSharp: IconFlowerPotSolidSharp,
};