const dns = 'jesmyl.ru' as const;

export const environment = {
  dns,
  host: `https://${dns}` as const,
};