function markdownParser(markdown) {
  let hTagCount = 0;
  let start = 0;

  // Clean up the markdown by removing space in front
  markdown = markdown.trim();

  // Count the number of '#' tags in markdown
  hTagCount = countTag(markdown, "#");

  // if markdown begins with '#', run the header functions,
  // else run the emphasis functions
  if (markdown[0] === "#") {
    return headerFunction(markdown, hTagCount);
  } else {
    return emphasisFunction(markdown, hTagCount);
  }
}

// Function to count how many tags in markdown
const countTag = (markdown, tag) => {
  let count = 0;
  while (markdown[count] === tag) {
    count++;
  }
  return count;
};

// Function to return the header HTML
const headerFunction = (markdown, hTagCount) => {
  let containsEmphasized = false;
  let header;

  // Invalid Cases Filter
  if (markdown[hTagCount] != " ") return markdown;
  if (hTagCount >= 7) return markdown;

  // Checks to see if there is an emphasized componenet
  for (let i = 0; i < markdown.length; i++) {
    if (markdown[i] === "*") containsEmphasized = true;
  }

  // If there is an emphasized component
  if (containsEmphasized) {
    let emphasized = "";
    let closing = false;
    for (let i = hTagCount + 1; i < markdown.length; i++) {
      if (markdown[i] === "*" && !closing) {
        emphasized += "<em>";
        closing = true;
      } else if (markdown[i] === "*" && closing) {
        emphasized += "</em>";
        closing = false;
      } else {
        emphasized += markdown[i];
      }
    }
    return `<h${hTagCount}>${emphasized}</h${hTagCount}>`;
  }

  // If there is no emphasized component
  header = markdown.substring(hTagCount + 1).trim();

  return `<h${hTagCount}>${header}</h${hTagCount}>`;
};

// Function to retrun Emphasis HTML
const emphasisFunction = (markdown, hTagCount) => {
  let emphasized = "";
  let closing = false;
  let empasisCount = 0;

  // Check for invalid cases
  for (let i = 0; i < markdown.length; i++) {
    if (markdown[i] === "*") empasisCount++;
  }
  if (empasisCount % 2 !== 0) {
    return markdown;
  }
  if (markdown[hTagCount] === " " || markdown[markdown.length - 2] === " ")
    return markdown;

  // Creates the parsed emphasis return
  for (let i = 0; i < markdown.length; i++) {
    if (markdown[i] === "*" && !closing) {
      emphasized += "<em>";
      closing = true;
    } else if (markdown[i] === "*" && closing) {
      emphasized += "</em>";
      closing = false;
    } else {
      emphasized += markdown[i];
    }
  }

  return emphasized;
};
