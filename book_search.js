/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for.
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */

const findSearchTermInBooks = (searchTerm, scannedTextObj) => {
  if (typeof searchTerm === "string" || searchTerm instanceof String) {
    let results = {
      SearchTerm: searchTerm,
      Results: [],
    };

    for (let i = 0; i < scannedTextObj.length; i++) {
      let book = scannedTextObj[i];

      for (let j = 0; j < book.Content.length; j++) {
        let content = book.Content[j];

        if (content.Text.includes(searchTerm)) {
          results.Results.push({
            ISBN: book.ISBN,
            Page: content.Page,
            Line: content.Line,
          });
        }
      }
    }
    return results;
  } else {
    let results = {
      SearchTerm: searchTerm,
      Results: `${searchTerm} is not a valid search term.`,
    };
    return results;
  }
};

/** Example input object. */
const twentyLeaguesIn = [
  {
    Title: "Twenty Thousand Leagues Under the Sea",
    ISBN: "9780000528531",
    Content: [
      {
        Page: 31,
        Line: 8,
        Text: "now simply went on by her own momentum.  The dark-",
      },
      {
        Page: 31,
        Line: 9,
        Text: "ness was then profound; and however good the Canadian's",
      },
      {
        Page: 31,
        Line: 10,
        Text: "eyes were, I asked myself how he had managed to see, and",
      },
    ],
  },
];

/** Example output object */
const twentyLeaguesOut = {
  SearchTerm: "the",
  Results: [
    {
      ISBN: "9780000528531",
      Page: 31,
      Line: 9,
    },
  ],
};

const darkPositiveResult = {
  SearchTerm: "dark",
  Results: [
    {
      ISBN: "9780000528531",
      Page: 31,
      Line: 8,
    },
  ],
};

const caseSensitiveResult = {
  SearchTerm: "The",
  Results: [
    {
      ISBN: "9780000528531",
      Page: 31,
      Line: 8,
    },
  ],
};

const whiteNegativeResult = {
  SearchTerm: "white",
  Results: [],
};

const intNegativeResult = {
  SearchTerm: 808,
  Results: "808 is not a valid search term.",
};

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that
 * output to the console. We've provided two tests as examples, and
 * they should pass with a correct implementation of `findSearchTermInBooks`.
 *
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
  console.log("PASS: Test 1");
} else {
  console.log("FAIL: Test 1");
  console.log("Expected:", twentyLeaguesOut);
  console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn);
if (test2result.Results.length == 1) {
  console.log("PASS: Test 2");
} else {
  console.log("FAIL: Test 2");
  console.log("Expected:", twentyLeaguesOut.Results.length);
  console.log("Received:", test2result.Results.length);
}

/** Positive test results */
const test3result = findSearchTermInBooks("dark", twentyLeaguesIn);
if (JSON.stringify(darkPositiveResult) === JSON.stringify(test3result)) {
  console.log("PASS: Test 3");
  console.log(darkPositiveResult);
} else {
  console.log("FAIL: Test 3");
  console.log("Expected:", darkPositiveResult);
  console.log("Received:", test3result);
}

/** Case Sensitive test results */
const test4result = findSearchTermInBooks("The", twentyLeaguesIn);
if (JSON.stringify(caseSensitiveResult) === JSON.stringify(test4result)) {
  console.log("PASS: Test 4");
  console.log(caseSensitiveResult);
} else {
  console.log("FAIL: Test 4");
  console.log("Expected:", caseSensitiveResult);
  console.log("Received:", test4result);
}

/** Negative test results */
const test5result = findSearchTermInBooks("white", twentyLeaguesIn);
if (JSON.stringify(whiteNegativeResult) === JSON.stringify(test5result)) {
  console.log("PASS: Test 5");
  console.log(whiteNegativeResult);
} else {
  console.log("FAIL: Test 5");
  console.log("Expected:", whiteNegativeResult);
  console.log("Received:", test5result);
}

const test6result = findSearchTermInBooks(808, twentyLeaguesIn);
if (
  typeof intNegativeResult.SearchTerm === "string" ||
  intNegativeResult.SearchTerm instanceof String
) {
  console.log("PASS: Test 6");
  console.log(intNegativeResult);
} else {
  console.log("FAIL: Test 6");
  console.log("Expected:", intNegativeResult);
  console.log("Received:", test6result);
}
