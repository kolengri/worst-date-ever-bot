interface Language {
  [key: string]: string;
}
type LanguageItem = {
  text: string;
  callback_data: string;
};

type LanguageArray = LanguageItem[][];

export const createLanguageArray = (languages: Language): LanguageArray => {
  const languageArray: LanguageArray = [];
  const languageNames = Object.values(languages)
    .sort((a, b) => a.localeCompare(b))
    .map(
      (language): LanguageItem => ({
        text: language,
        callback_data: `setting:${language}`,
      })
    );

  // Split the language names into chunks of 3
  for (let i = 0; i < languageNames.length; i += 3) {
    languageArray.push(languageNames.slice(i, i + 3));
  }

  return languageArray;
};
