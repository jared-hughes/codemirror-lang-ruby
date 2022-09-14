import { parser } from "./syntax.grammar";
import {
  LRLanguage,
  LanguageSupport,
  bracketMatching,
} from "@codemirror/language";
import { styleTags, tags as t } from "@lezer/highlight";

export const rubyLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        Identifier: t.definition(t.variableName),
      }),
    ],
  }),
  languageData: {
    commentTokens: { line: "#" },
  },
});

export function ruby() {
  return new LanguageSupport(
    rubyLanguage,
    // limit bracket matching to just the delimeters specified in syntax.grammar
    bracketMatching({ brackets: "{}" })
  );
}
