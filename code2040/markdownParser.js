function markdownParser(markdown) {
  let tagCount = 0;
  let start = 0;
  let header;

  markdown = markdown.trim();

  while (markdown[tagCount] === "#") {
    tagCount++;
  }

  if (markdown[tagCount] != " ") return markdown;
  if (tagCount >= 7) return markdown;

  header = markdown.substring(tagCount + 1).trim();

  return `<h${tagCount}>${header}</h${tagCount}>`;
}
