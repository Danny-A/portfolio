export const getParagraphs = (text: string | null | undefined) => {
  return text
    ?.replace(/<p>/g, '')
    ?.split(/<\/p>|\n/)
    ?.filter(text => text.trim().length > 0)
    ?.map(text => text.trim());
};
