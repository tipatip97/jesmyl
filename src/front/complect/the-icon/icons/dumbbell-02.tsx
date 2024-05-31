import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 7.99963C15.7562 8.731 15.2546 9.2924 14.5446 9.60716C12.2642 10.6181 10.6185 12.2638 9.60753 14.5442C9.29277 15.2542 8.73137 15.7558 8 15.9996',
  d2: 'M3.2 20.7996L2 21.9996M20.8 3.19963L22 1.99963',
  d3: 'M17.7882 2.42078L16.276 3.87393L20.1166 7.7504L21.5942 6.31567C22.0377 5.79327 22.1735 5.39976 21.6214 4.67498L20.5156 3.51207L19.3946 2.40627C18.678 1.76351 18.1136 2.10936 17.7882 2.42078Z',
  d4: 'M14.0115 3.75639C15.1221 2.58257 15.8827 3.41799 16.2733 3.88318L20.081 7.70615C20.5549 8.08609 21.4219 8.81505 20.276 9.95013C20.0911 10.1333 19.9098 10.3251 19.7089 10.4904C18.967 11.1007 18.255 10.5947 17.8777 10.1299L14.002 6.25421C13.5939 5.88765 12.8888 5.2235 13.4843 4.33572C13.6448 4.13083 13.8326 3.94544 14.0115 3.75639Z',
  d5: 'M4.58743 21.6195L3.44609 20.4914L2.36213 19.3493C1.71891 18.706 2.09 18.0628 2.40765 17.7435L3.88972 16.2596L7.74631 20.1329L6.22834 21.624C5.69748 22.0572 5.33348 22.19 4.6195 21.624M6.22333 13.9237C5.83272 13.4585 5.07209 12.623 3.96149 13.7969C3.78262 13.9859 3.59481 14.1713 3.43432 14.3762C2.83883 15.264 3.54386 15.9281 3.95194 16.2947L7.82772 20.1704C8.20497 20.6352 8.91698 21.1412 9.65885 20.5309C9.85984 20.3655 10.0411 20.1738 10.226 19.9906C11.3719 18.8555 10.5049 18.1266 10.031 17.7466L6.22333 13.9237Z',
  d6: 'M16 8C15.7562 8.73137 15.2546 9.29277 14.5446 9.60753C12.2642 10.6185 10.6185 12.2642 9.60753 14.5446C9.29277 15.2546 8.73137 15.7562 8 16',
  d7: 'M3.2 20.8L2 22M20.8 3.2L22 2',
  d8: 'M10.0641 17.8076L6.19245 13.9359C5.83165 13.5751 5.65125 13.3947 5.45 13.3113C5.18168 13.2002 4.88019 13.2002 4.61186 13.3113C4.41062 13.3947 4.23022 13.5751 3.86942 13.9359C3.50863 14.2966 3.32823 14.477 3.24487 14.6783C3.13372 14.9466 3.13372 15.2481 3.24487 15.5164C3.32823 15.7177 3.50863 15.8981 3.86942 16.2589L7.74113 20.1306C8.10192 20.4914 8.28232 20.6718 8.48357 20.7551C8.75189 20.8663 9.05338 20.8663 9.32171 20.7551C9.52295 20.6718 9.70335 20.4914 10.0641 20.1306C10.4249 19.7698 10.6053 19.5894 10.6887 19.3881C10.7998 19.1198 10.7998 18.8183 10.6887 18.55C10.6053 18.3488 10.4249 18.1684 10.0641 17.8076Z',
  d9: 'M3.86942 16.2589L3.09508 17.0332C2.36503 17.7633 2 18.1283 2 18.5819C2 19.0355 2.36503 19.4005 3.09508 20.1306L3.86942 20.9049C4.59948 21.635 4.96451 22 5.4181 22C5.8717 22 6.23673 21.635 6.96679 20.9049L7.74113 20.1306L3.86942 16.2589Z',
  d10: 'M17.8076 10.0641L13.9359 6.19245C13.5751 5.83165 13.3947 5.65125 13.3113 5.45C13.2002 5.18168 13.2002 4.88019 13.3113 4.61186C13.3947 4.41062 13.5751 4.23022 13.9359 3.86942C14.2966 3.50863 14.477 3.32823 14.6783 3.24487C14.9466 3.13372 15.2481 3.13372 15.5164 3.24487C15.7177 3.32823 15.8981 3.50863 16.2589 3.86942L20.1306 7.74113C20.4914 8.10192 20.6718 8.28232 20.7551 8.48357C20.8663 8.75189 20.8663 9.05338 20.7551 9.32171C20.6718 9.52295 20.4914 9.70335 20.1306 10.0641C19.7698 10.4249 19.5894 10.6053 19.3881 10.6887C19.1198 10.7998 18.8183 10.7998 18.55 10.6887C18.3488 10.6053 18.1684 10.4249 17.8076 10.0641Z',
  d11: 'M16.2589 3.86942L17.0332 3.09508C17.7633 2.36503 18.1283 2 18.5819 2C19.0355 2 19.4005 2.36503 20.1306 3.09508L20.9049 3.86942C21.635 4.59948 22 4.96451 22 5.4181C22 5.8717 21.635 6.23673 20.9049 6.96679L20.1306 7.74113L16.2589 3.86942Z',
  d12: 'M6.19245 13.9359L6.72278 13.4055L6.19245 13.9359ZM10.0641 17.8076L9.53382 18.3379L10.0641 17.8076ZM7.74113 20.1306L8.27146 19.6002L7.74113 20.1306ZM9.32171 20.7551L9.60872 21.448L9.32171 20.7551ZM8.48357 20.7551L8.19655 21.448L8.48357 20.7551ZM10.6887 18.55L11.3816 18.263H11.3816L10.6887 18.55ZM10.6887 19.3881L11.3816 19.6751L10.6887 19.3881ZM4.61186 13.3113L4.32485 12.6184H4.32485L4.61186 13.3113ZM5.45 13.3113L5.73702 12.6184L5.73702 12.6184L5.45 13.3113ZM3.24487 14.6783L2.55196 14.3913V14.3913L3.24487 14.6783ZM3.24487 15.5164L2.55196 15.8034V15.8034L3.24487 15.5164ZM6.96679 20.9049L7.49712 21.4352L6.96679 20.9049ZM3.86942 20.9049L3.33909 21.4352H3.33909L3.86942 20.9049ZM3.09508 20.1306L3.62541 19.6002H3.62541L3.09508 20.1306ZM5.4181 22L5.4181 21.25H5.4181L5.4181 22ZM13.9359 6.19245L13.4055 6.72278L13.9359 6.19245ZM17.8076 10.0641L18.3379 9.53382L17.8076 10.0641ZM20.1306 7.74113L19.6002 8.27146L20.1306 7.74113ZM20.7551 9.32171L21.448 9.60872L20.7551 9.32171ZM20.7551 8.48357L21.448 8.19655L20.7551 8.48357ZM18.55 10.6887L18.263 11.3816V11.3816L18.55 10.6887ZM19.3881 10.6887L19.6751 11.3816L19.3881 10.6887ZM13.3113 4.61186L12.6184 4.32485V4.32485L13.3113 4.61186ZM13.3113 5.45L12.6184 5.73702L12.6184 5.73702L13.3113 5.45ZM14.6783 3.24487L14.3913 2.55196H14.3913L14.6783 3.24487ZM15.5164 3.24487L15.8034 2.55196H15.8034L15.5164 3.24487ZM20.9049 6.96679L21.4352 7.49712L20.9049 6.96679ZM20.9049 3.86942L21.4352 3.33909V3.33909L20.9049 3.86942ZM20.1306 3.09508L19.6002 3.62541V3.62541L20.1306 3.09508ZM22 5.4181L21.25 5.4181V5.4181L22 5.4181ZM5.66212 14.4662L9.53382 18.3379L10.5945 17.2772L6.72278 13.4055L5.66212 14.4662ZM8.27146 19.6002L4.39975 15.7285L3.33909 16.7892L7.2108 20.6609L8.27146 19.6002ZM9.53382 19.6002C9.34616 19.7879 9.23169 19.9018 9.14009 19.9817C9.05358 20.0572 9.0287 20.0647 9.03469 20.0622L9.60872 21.448C9.81596 21.3622 9.9819 21.2379 10.1261 21.1121C10.2652 20.9908 10.4213 20.834 10.5945 20.6609L9.53382 19.6002ZM7.2108 20.6609C7.38394 20.834 7.54007 20.9908 7.67918 21.1121C7.82338 21.2379 7.98931 21.3622 8.19655 21.448L8.77058 20.0622C8.77658 20.0647 8.75169 20.0572 8.66518 19.9817C8.57358 19.9018 8.45911 19.7879 8.27146 19.6002L7.2108 20.6609ZM9.03469 20.0622C8.95014 20.0972 8.85513 20.0972 8.77058 20.0622L8.19655 21.448C8.64865 21.6353 9.15662 21.6353 9.60872 21.448L9.03469 20.0622ZM9.53382 18.3379C9.72147 18.5255 9.83537 18.64 9.91527 18.7316C9.99072 18.8181 9.99828 18.843 9.99579 18.837L11.3816 18.263C11.2958 18.0557 11.1714 17.8898 11.0457 17.7456C10.9243 17.6065 10.7676 17.4504 10.5945 17.2772L9.53382 18.3379ZM10.5945 20.6609C10.7676 20.4878 10.9243 20.3316 11.0457 20.1925C11.1714 20.0483 11.2958 19.8824 11.3816 19.6751L9.99579 19.1011C9.99828 19.0951 9.99073 19.12 9.91527 19.2065C9.83537 19.2981 9.72147 19.4126 9.53382 19.6002L10.5945 20.6609ZM9.99579 18.837C10.0308 18.9216 10.0308 19.0166 9.99579 19.1011L11.3816 19.6751C11.5689 19.2231 11.5689 18.7151 11.3816 18.263L9.99579 18.837ZM4.39975 14.4662C4.58741 14.2785 4.70188 14.1646 4.79348 14.0847C4.87999 14.0093 4.90487 14.0017 4.89888 14.0042L4.32485 12.6184C4.11761 12.7042 3.95167 12.8286 3.80748 12.9543C3.66837 13.0757 3.51224 13.2324 3.33909 13.4055L4.39975 14.4662ZM6.72278 13.4055C6.54963 13.2324 6.3935 13.0757 6.25439 12.9543C6.11019 12.8286 5.94426 12.7042 5.73702 12.6184L5.16299 14.0042C5.157 14.0017 5.18188 14.0093 5.26839 14.0847C5.35999 14.1646 5.47446 14.2785 5.66212 14.4662L6.72278 13.4055ZM4.89888 14.0042C4.98343 13.9692 5.07844 13.9692 5.16299 14.0042L5.73702 12.6184C5.28492 12.4311 4.77695 12.4311 4.32485 12.6184L4.89888 14.0042ZM3.33909 13.4055C3.16595 13.5787 3.00925 13.7348 2.88791 13.8739C2.76213 14.0181 2.6378 14.184 2.55196 14.3913L3.93778 14.9653C3.9353 14.9713 3.94285 14.9464 4.01831 14.8599C4.0982 14.7683 4.2121 14.6538 4.39975 14.4662L3.33909 13.4055ZM4.39975 15.7285C4.2121 15.5409 4.0982 15.4264 4.01831 15.3348C3.94285 15.2483 3.9353 15.2234 3.93778 15.2294L2.55196 15.8034C2.6378 16.0107 2.76213 16.1766 2.88791 16.3208C3.00925 16.4599 3.16595 16.6161 3.33909 16.7892L4.39975 15.7285ZM2.55196 14.3913C2.36469 14.8434 2.36469 15.3513 2.55196 15.8034L3.93778 15.2294C3.90275 15.1449 3.90275 15.0499 3.93778 14.9653L2.55196 14.3913ZM3.62541 17.5635L4.39975 16.7892L3.33909 15.7285L2.56475 16.5029L3.62541 17.5635ZM7.2108 19.6002L6.43646 20.3746L7.49712 21.4352L8.27146 20.6609L7.2108 19.6002ZM4.39975 20.3746L3.62541 19.6002L2.56475 20.6609L3.33909 21.4352L4.39975 20.3746ZM6.43646 20.3746C6.05644 20.7546 5.82364 20.9851 5.63384 21.13C5.546 21.197 5.49135 21.2263 5.46011 21.2393C5.43485 21.2499 5.42479 21.25 5.4181 21.25L5.4181 22.75C5.87482 22.75 6.23778 22.5559 6.54371 22.3225C6.83233 22.1023 7.14708 21.7853 7.49712 21.4352L6.43646 20.3746ZM3.33909 21.4352C3.68913 21.7853 4.00388 22.1023 4.2925 22.3225C4.59843 22.5559 4.96139 22.75 5.41811 22.75L5.4181 21.25C5.41142 21.25 5.40136 21.2499 5.3761 21.2393C5.34486 21.2263 5.29021 21.197 5.20237 21.13C5.01256 20.9851 4.77977 20.7546 4.39975 20.3746L3.33909 21.4352ZM2.56475 16.5029C2.21472 16.8529 1.89771 17.1677 1.6775 17.4563C1.44409 17.7622 1.25 18.1252 1.25 18.5819H2.75C2.75 18.5752 2.75013 18.5651 2.76066 18.5399C2.77369 18.5086 2.80302 18.454 2.87004 18.3662C3.01485 18.1764 3.24539 17.9436 3.62541 17.5635L2.56475 16.5029ZM3.62541 19.6002C3.24539 19.2202 3.01485 18.9874 2.87004 18.7976C2.80302 18.7098 2.77369 18.6551 2.76066 18.6239C2.75013 18.5986 2.75 18.5886 2.75 18.5819H1.25C1.25 19.0386 1.44409 19.4016 1.6775 19.7075C1.89771 19.9961 2.21472 20.3109 2.56475 20.6609L3.62541 19.6002ZM13.4055 6.72278L17.2772 10.5945L18.3379 9.53382L14.4662 5.66212L13.4055 6.72278ZM20.6609 7.2108L16.7892 3.33909L15.7285 4.39975L19.6002 8.27146L20.6609 7.2108ZM20.6609 10.5945C20.834 10.4213 20.9908 10.2652 21.1121 10.1261C21.2379 9.9819 21.3622 9.81596 21.448 9.60872L20.0622 9.03469C20.0647 9.0287 20.0572 9.05358 19.9817 9.14009C19.9018 9.23169 19.7879 9.34616 19.6002 9.53382L20.6609 10.5945ZM19.6002 8.27146C19.7879 8.45911 19.9018 8.57358 19.9817 8.66518C20.0572 8.75169 20.0647 8.77658 20.0622 8.77058L21.448 8.19655C21.3622 7.98931 21.2379 7.82338 21.1121 7.67918C20.9908 7.54007 20.834 7.38394 20.6609 7.2108L19.6002 8.27146ZM21.448 9.60872C21.6353 9.15662 21.6353 8.64865 21.448 8.19655L20.0622 8.77058C20.0972 8.85513 20.0972 8.95014 20.0622 9.03469L21.448 9.60872ZM17.2772 10.5945C17.4504 10.7676 17.6065 10.9243 17.7456 11.0457C17.8898 11.1714 18.0557 11.2958 18.263 11.3816L18.837 9.99579C18.843 9.99828 18.8181 9.99072 18.7316 9.91527C18.64 9.83537 18.5255 9.72147 18.3379 9.53382L17.2772 10.5945ZM19.6002 9.53382C19.4126 9.72147 19.2981 9.83537 19.2065 9.91527C19.12 9.99073 19.0951 9.99828 19.1011 9.99579L19.6751 11.3816C19.8824 11.2958 20.0483 11.1714 20.1925 11.0457C20.3316 10.9243 20.4878 10.7676 20.6609 10.5945L19.6002 9.53382ZM18.263 11.3816C18.7151 11.5689 19.2231 11.5689 19.6751 11.3816L19.1011 9.99579C19.0166 10.0308 18.9216 10.0308 18.837 9.99579L18.263 11.3816ZM13.4055 3.33909C13.2324 3.51224 13.0757 3.66837 12.9543 3.80748C12.8286 3.95167 12.7042 4.11761 12.6184 4.32485L14.0042 4.89888C14.0017 4.90487 14.0093 4.87999 14.0847 4.79348C14.1646 4.70188 14.2785 4.58741 14.4662 4.39975L13.4055 3.33909ZM14.4662 5.66212C14.2785 5.47446 14.1646 5.35999 14.0847 5.26839C14.0093 5.18188 14.0017 5.157 14.0042 5.16299L12.6184 5.73702C12.7042 5.94426 12.8286 6.11019 12.9543 6.25439C13.0757 6.3935 13.2324 6.54963 13.4055 6.72278L14.4662 5.66212ZM12.6184 4.32485C12.4311 4.77695 12.4311 5.28492 12.6184 5.73702L14.0042 5.16299C13.9692 5.07844 13.9692 4.98343 14.0042 4.89888L12.6184 4.32485ZM14.4662 4.39975C14.6538 4.2121 14.7683 4.0982 14.8599 4.01831C14.9464 3.94285 14.9713 3.9353 14.9653 3.93778L14.3913 2.55196C14.184 2.6378 14.0181 2.76213 13.8739 2.88791C13.7348 3.00925 13.5787 3.16595 13.4055 3.33909L14.4662 4.39975ZM16.7892 3.33909C16.6161 3.16595 16.4599 3.00925 16.3208 2.88791C16.1766 2.76213 16.0107 2.6378 15.8034 2.55196L15.2294 3.93778C15.2234 3.9353 15.2483 3.94285 15.3348 4.01831C15.4264 4.0982 15.5409 4.2121 15.7285 4.39975L16.7892 3.33909ZM14.9653 3.93778C15.0499 3.90275 15.1449 3.90275 15.2294 3.93778L15.8034 2.55196C15.3513 2.36469 14.8434 2.36469 14.3913 2.55196L14.9653 3.93778ZM16.5029 2.56475L15.7285 3.33909L16.7892 4.39975L17.5635 3.62541L16.5029 2.56475ZM20.6609 8.27146L21.4352 7.49712L20.3746 6.43646L19.6002 7.2108L20.6609 8.27146ZM21.4352 3.33909L20.6609 2.56475L19.6002 3.62541L20.3746 4.39975L21.4352 3.33909ZM21.4352 7.49712C21.7853 7.14708 22.1023 6.83233 22.3225 6.54371C22.5559 6.23778 22.75 5.87482 22.75 5.4181L21.25 5.4181C21.25 5.42479 21.2499 5.43485 21.2393 5.46011C21.2263 5.49135 21.197 5.546 21.13 5.63384C20.9851 5.82364 20.7546 6.05644 20.3746 6.43646L21.4352 7.49712ZM20.3746 4.39975C20.7546 4.77977 20.9851 5.01256 21.13 5.20237C21.197 5.29021 21.2263 5.34486 21.2393 5.3761C21.2499 5.40136 21.25 5.41142 21.25 5.4181L22.75 5.41811C22.75 4.96139 22.5559 4.59843 22.3225 4.2925C22.1023 4.00388 21.7853 3.68913 21.4352 3.33909L20.3746 4.39975ZM17.5635 3.62541C17.9436 3.24539 18.1764 3.01485 18.3662 2.87004C18.454 2.80302 18.5086 2.77369 18.5399 2.76066C18.5651 2.75013 18.5752 2.75 18.5819 2.75V1.25C18.1252 1.25 17.7622 1.44409 17.4563 1.6775C17.1677 1.89771 16.8529 2.21472 16.5029 2.56475L17.5635 3.62541ZM20.6609 2.56475C20.3109 2.21472 19.9961 1.89771 19.7075 1.6775C19.4016 1.44409 19.0386 1.25 18.5819 1.25V2.75C18.5886 2.75 18.5986 2.75013 18.6239 2.76066C18.6551 2.77369 18.7098 2.80302 18.7976 2.87004C18.9874 3.01485 19.2202 3.24539 19.6002 3.62541L20.6609 2.56475Z',
  d13: 'M4.57864 21.6192L3.4373 20.4911L2.35334 19.3489C1.71012 18.7057 2.08121 18.0625 2.39886 17.7432L3.88093 16.2593L7.73752 20.1325L6.21955 21.6236C5.68869 22.0569 5.32469 22.1896 4.61071 21.6237M16.2924 3.83023L17.8046 2.37708C18.13 2.06565 18.6944 1.71981 19.4109 2.36257L20.532 3.46837L21.6378 4.63128C22.1899 5.35606 22.054 5.74957 21.6106 6.27197L20.133 7.7067L16.2924 3.83023ZM16.2897 3.83948C15.8991 3.37429 15.1385 2.53887 14.0279 3.71268C13.849 3.90173 13.6612 4.08713 13.5007 4.29202C12.9052 5.17979 13.6102 5.84395 14.0183 6.21051L17.8941 10.0862C18.2714 10.551 18.9834 11.057 19.7252 10.4467C19.9262 10.2814 20.1075 10.0896 20.2924 9.90643C21.4383 8.77135 20.5713 8.04239 20.0974 7.66245L16.2897 3.83948ZM6.21455 13.9233C5.82393 13.4581 5.06331 12.6227 3.9527 13.7965C3.77383 13.9856 3.58602 14.171 3.42553 14.3759C2.83004 15.2636 3.53507 15.9278 3.94315 16.2944L7.81893 20.1701C8.19618 20.6349 8.90819 21.1408 9.65006 20.5306C9.85105 20.3652 10.0323 20.1734 10.2172 19.9903C11.3631 18.8552 10.4961 18.1262 10.0222 17.7463L6.21455 13.9233Z',
  d14: 'M14.9497 10.5215C12.8962 11.4319 11.4319 12.8962 10.5215 14.9497C10.2238 15.6213 9.7588 16.161 9.17213 16.5397L7.68359 15.0511C8.15303 14.8947 8.49451 14.5873 8.69315 14.1392C9.80468 11.6318 11.6318 9.80468 14.1392 8.69315C14.5873 8.4945 14.8947 8.15303 15.0511 7.68359L16.5397 9.17213C16.161 9.7588 15.6213 10.2238 14.9497 10.5215Z',
  d15: 'M9.29053 21.545C8.92724 21.6228 8.54604 21.5896 8.19793 21.4454C7.99069 21.3596 7.82476 21.2353 7.68056 21.1095L2.88929 16.3182C2.76351 16.174 2.63918 16.0081 2.55334 15.8008C2.40915 15.4527 2.37599 15.0715 2.45382 14.7082C2.52469 14.3774 2.71702 14.1443 2.85657 14.0047L3.94226 12.919C4.0818 12.7795 4.31499 12.5871 4.6458 12.5163C5.00908 12.4384 5.39029 12.4716 5.7384 12.6158C5.94564 12.7016 6.25577 12.9517 6.25577 12.9517L11.047 17.743C11.1728 17.8872 11.2971 18.0531 11.383 18.2604C11.5272 18.6085 11.5603 18.9897 11.4825 19.353C11.4116 19.6838 11.2193 19.917 11.0798 20.0565L9.99407 21.1422C9.85452 21.2818 9.62134 21.4741 9.29053 21.545ZM5.41841 22.75C5.87513 22.75 6.23809 22.5559 6.54402 22.3224C6.5578 22.3119 6.57165 22.3012 6.58556 22.2902C6.80158 22.1201 6.90958 22.035 6.91755 21.9005C6.92551 21.7659 6.82046 21.6609 6.61037 21.4508L2.54949 17.3899C2.33939 17.1798 2.23434 17.0747 2.09979 17.0827C1.96525 17.0907 1.88017 17.1987 1.71003 17.4147C1.69907 17.4286 1.68833 17.4425 1.67781 17.4562C1.4444 17.7622 1.25031 18.1251 1.25031 18.5818C1.25031 19.0386 1.4444 19.4015 1.67781 19.7075C1.83201 19.9096 2.03367 20.1245 2.2609 20.3553L1.53624 21.08C1.15459 21.4617 1.15459 22.0804 1.53624 22.4621C1.91788 22.8437 2.53666 22.8437 2.91831 22.4621L3.64296 21.7374C3.87457 21.9654 4.09014 22.1678 4.29281 22.3224C4.59873 22.5559 4.96169 22.75 5.41841 22.75Z',
  d16: 'M17.456 1.6775C17.7619 1.44409 18.1249 1.25 18.5816 1.25C19.0383 1.25 19.4013 1.44409 19.7072 1.6775C19.9097 1.83199 20.125 2.03412 20.3564 2.26187L21.082 1.53624C21.4636 1.15459 22.0824 1.15459 22.4641 1.53624C22.8457 1.91789 22.8457 2.53666 22.4641 2.91831L21.7384 3.64395C21.9659 3.87507 22.1678 4.0902 22.3222 4.2925C22.5556 4.59843 22.7497 4.96139 22.7497 5.41811C22.7497 5.87482 22.5556 6.23778 22.3222 6.54371C22.3117 6.5575 22.3009 6.57135 22.29 6.58526C22.1198 6.80127 22.0347 6.90928 21.9002 6.91724C21.7656 6.92521 21.6606 6.82016 21.4505 6.61006L17.3896 2.54917C17.1795 2.33908 17.0745 2.23403 17.0824 2.09948C17.0904 1.96493 17.1984 1.87986 17.4144 1.70972C17.4283 1.69876 17.4422 1.68802 17.456 1.6775ZM14.7095 2.45499C15.0727 2.37717 15.4539 2.41032 15.8021 2.55451C16.0093 2.64035 16.1752 2.76468 16.3194 2.89046L21.1107 7.68173C21.2365 7.82593 21.3608 7.99186 21.4466 8.1991C21.5908 8.54721 21.624 8.92841 21.5462 9.2917C21.4753 9.62251 21.283 9.85569 21.1434 9.99524L20.0577 11.0809C19.9182 11.2205 19.685 11.4128 19.3542 11.4837C18.9909 11.5615 18.6097 11.5284 18.2616 11.3842C18.0544 11.2983 17.7442 11.0482 17.7442 11.0482L12.9529 6.25694C12.8272 6.11274 12.7028 5.94681 12.617 5.73957C12.4728 5.39146 12.4397 5.01026 12.5175 4.64697C12.5884 4.31616 12.7807 4.08298 12.9202 3.94343L14.0059 2.85774C14.1455 2.7182 14.3786 2.52586 14.7095 2.45499Z',
  d17: 'M22.4641 2.91831C22.8457 2.53666 22.8457 1.91789 22.4641 1.53624C22.0824 1.15459 21.4636 1.15459 21.082 1.53624L19.9093 2.70896C19.5276 3.09061 19.5276 3.70939 19.9093 4.09104C20.2909 4.47268 20.9097 4.47268 21.2913 4.09104L22.4641 2.91831ZM14.9497 10.5215C12.8962 11.4319 11.4319 12.8962 10.5215 14.9497C10.2238 15.6213 9.75879 16.161 9.17212 16.5397L7.68358 15.0511C8.15302 14.8947 8.49449 14.5873 8.69314 14.1392C9.80467 11.6318 11.6318 9.80468 14.1392 8.69315C14.5873 8.4945 14.8946 8.15303 15.0511 7.68359L16.5397 9.17213C16.161 9.7588 15.6213 10.2238 14.9497 10.5215ZM4.09102 19.9112C4.47267 20.2929 4.47267 20.9117 4.09102 21.2933L2.91829 22.466C2.53665 22.8477 1.91787 22.8477 1.53622 22.466C1.15458 22.0844 1.15458 21.4656 1.53622 21.084L2.70895 19.9112C3.0906 19.5296 3.70937 19.5296 4.09102 19.9112Z',
  d18: 'M8.19793 21.4454C8.54604 21.5896 8.92724 21.6228 9.29053 21.545C9.62134 21.4741 9.85452 21.2818 9.99407 21.1422L11.0798 20.0565C11.2193 19.917 11.4116 19.6838 11.4825 19.353C11.5603 18.9897 11.5272 18.6085 11.383 18.2604C11.2971 18.0531 11.1728 17.8872 11.047 17.743L6.25577 12.9517C6.25577 12.9517 5.94564 12.7016 5.7384 12.6158C5.39029 12.4716 5.00908 12.4384 4.6458 12.5163C4.31499 12.5871 4.0818 12.7795 3.94226 12.919L2.85657 14.0047C2.71702 14.1443 2.52469 14.3774 2.45382 14.7082C2.37599 15.0715 2.40915 15.4527 2.55334 15.8008C2.63918 16.0081 2.76351 16.174 2.88929 16.3182L7.68056 21.1095C7.82476 21.2353 7.99069 21.3596 8.19793 21.4454ZM6.54402 22.3224C6.23809 22.5559 5.87513 22.75 5.41841 22.75C4.96169 22.75 4.59873 22.5559 4.29281 22.3224C4.01314 22.1091 3.70891 21.8048 3.37185 21.4676L2.53262 20.6284C2.19547 20.2913 1.8912 19.9871 1.67781 19.7075C1.4444 19.4015 1.25031 19.0386 1.25031 18.5818C1.25031 18.1251 1.4444 17.7622 1.67781 17.4562C1.68833 17.4425 1.69907 17.4286 1.71003 17.4147C1.88017 17.1987 1.96525 17.0907 2.09979 17.0827C2.23434 17.0747 2.33939 17.1798 2.54949 17.3899L6.61037 21.4508C6.82046 21.6609 6.92551 21.7659 6.91755 21.9005C6.90958 22.035 6.80158 22.1201 6.58556 22.2902C6.57165 22.3012 6.5578 22.3119 6.54402 22.3224Z',
  d19: 'M17.456 1.6775C17.7619 1.44409 18.1248 1.25 18.5816 1.25C19.0383 1.25 19.4012 1.44409 19.7072 1.6775C19.9868 1.89088 20.2911 2.19518 20.6281 2.53231L21.4674 3.37153C21.8045 3.70861 22.1088 4.01282 22.3222 4.2925C22.5556 4.59843 22.7497 4.96139 22.7497 5.41811C22.7497 5.87482 22.5556 6.23778 22.3222 6.54371C22.3116 6.5575 22.3009 6.57135 22.2899 6.58526C22.1198 6.80127 22.0347 6.90928 21.9002 6.91724C21.7656 6.92521 21.6606 6.82016 21.4505 6.61006L17.3896 2.54917C17.1795 2.33908 17.0745 2.23403 17.0824 2.09948C17.0904 1.96493 17.1984 1.87986 17.4144 1.70972C17.4283 1.69876 17.4422 1.68802 17.456 1.6775ZM15.804 2.55451C15.4559 2.41032 15.0747 2.37717 14.7114 2.45499C14.3806 2.52586 14.1474 2.7182 14.0079 2.85774L12.9222 3.94343C12.7826 4.08298 12.5903 4.31616 12.5194 4.64697C12.4416 5.01026 12.4747 5.39146 12.6189 5.73957C12.7048 5.94681 12.8291 6.11274 12.9549 6.25694L17.7462 11.0482C17.7462 11.0482 18.0563 11.2983 18.2635 11.3842C18.6116 11.5284 18.9928 11.5615 19.3561 11.4837C19.6869 11.4128 19.9201 11.2205 20.0597 11.0809L21.1454 9.99524C21.2849 9.85569 21.4772 9.62251 21.5481 9.2917C21.6259 8.92841 21.5928 8.54721 21.4486 8.1991C21.3627 7.99186 21.2384 7.82593 21.1126 7.68173L16.3214 2.89046C16.1772 2.76468 16.0112 2.64035 15.804 2.55451Z',
  d20: 'M4 20L2 22M20 4L22 2M15.5 8.5L8.5 15.5',
  d21: 'M16 4L15 3L12.5 5.5L18.5 11.5L21 9L20 8M16 4L18 2L22 6L20 8M16 4L20 8',
  d22: 'M8 20L9 21L11.5 18.5L5.5 12.5L3 15L4 16M8 20L6 22L2 18L4 16M8 20L4 16',
  d23: 'M22.2509 3.16409L20.8367 1.74988L18.3173 4.26926L19.7315 5.68347L22.2509 3.16409Z',
  d24: 'M1.75087 20.8357L3.16508 22.2499L6.20646 19.2085L4.79224 17.7943L1.75087 20.8357Z',
  d25: 'M16.1431 9.27184L14.7289 7.85762L7.83362 14.7529L9.24783 16.1671L16.1431 9.27184Z',
  d26: 'M6.78224 11.2191C6.48934 10.9262 6.01447 10.9262 5.72158 11.2191L3.75142 13.1892L10.8121 20.2499L12.7822 18.2797C13.0751 17.9868 13.0751 17.512 12.7822 17.2191L6.78224 11.2191Z',
  d27: 'M8.75142 20.3105L3.69076 15.2499L2.22158 16.7191C1.92868 17.012 1.92868 17.4868 2.22158 17.7797L6.22158 21.7797C6.51447 22.0726 6.98934 22.0726 7.28224 21.7797L8.75142 20.3105Z',
  d28: 'M17.2197 12.7807C17.5126 13.0736 17.9874 13.0736 18.2803 12.7807L20.2505 10.8105L13.1898 3.74988L11.2197 5.72004C10.9268 6.01293 10.9268 6.4878 11.2197 6.7807L17.2197 12.7807Z',
  d29: 'M15.2505 3.68922L20.3111 8.74988L21.7803 7.2807C22.0732 6.9878 22.0732 6.51293 21.7803 6.22004L17.7803 2.22004C17.4874 1.92714 17.0126 1.92714 16.7197 2.22004L15.2505 3.68922Z',
} as const;

export const IconDumbbell02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dumbbell-02-stroke-rounded IconDumbbell02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconDumbbell02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dumbbell-02-duotone-rounded IconDumbbell02DuotoneRounded"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDumbbell02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dumbbell-02-twotone-rounded IconDumbbell02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDumbbell02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dumbbell-02-solid-rounded IconDumbbell02SolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDumbbell02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dumbbell-02-bulk-rounded IconDumbbell02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDumbbell02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dumbbell-02-stroke-sharp IconDumbbell02StrokeSharp"
    >
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDumbbell02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dumbbell-02-solid-sharp IconDumbbell02SolidSharp"
    >
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDumbbell02: TheIconSelfPack = {
  name: 'Dumbbell02',
  StrokeRounded: IconDumbbell02StrokeRounded,
  DuotoneRounded: IconDumbbell02DuotoneRounded,
  TwotoneRounded: IconDumbbell02TwotoneRounded,
  SolidRounded: IconDumbbell02SolidRounded,
  BulkRounded: IconDumbbell02BulkRounded,
  StrokeSharp: IconDumbbell02StrokeSharp,
  SolidSharp: IconDumbbell02SolidSharp,
};