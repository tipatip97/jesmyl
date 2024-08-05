const dns = 'jesmyl.ru' as const;

const environment = {
  dns,
  host: `https://${dns}` as const,
};

export default environment;
