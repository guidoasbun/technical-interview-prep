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

/**
   * let assert = require("chai").assert;
describe('Markdown Headers', function() {
  it('basic_valid_cases', function() {
    assert.deepEqual(markdownParser("# header"), "<h1>header</h1>");
    assert.deepEqual(markdownParser("## smaller header"), "<h2>smaller header</h2>");
  });
  it('basic_invalid_cases', function() {
    assert.deepEqual(markdownParser("#Invalid"), "#Invalid");
  });
});
   *  
   * */
