export const tokenFromProcess = (envVar: keyof typeof process.env) => {
  const apiKey = process.env[envVar];
  if (!apiKey) throw new Error(`${envVar} is not defined in process.env.`);
  return apiKey;
};
