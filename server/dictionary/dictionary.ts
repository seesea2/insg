import Axios from 'axios';
import { Response } from 'express';

import {
  CheckEntriesResult,
  OxfordEntries,
  OxfordLemmas,
  IdText,
  YcLexicalEntry
} from './oxford-interface';

import { oxford_app_id, oxford_app_key } from '../../account-keys';

const config = {
  headers: {
    app_id: oxford_app_id,
    app_key: oxford_app_key
  }
};

async function CheckOxfordEntries(word: string, res: Response) {
  if (!word || !word.trim()) {
    return res.status(400).send({ message: 'Invalid word.' });
  }
  word = word.trim().toLowerCase();

  const url =
    'https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/' +
    word +
    '?fields=definitions%2Cpronunciations';

  try {
    let resp = await Axios(url, config);
    let entries: OxfordEntries = resp.data;
    let return_result: CheckEntriesResult = { lexicalEntries: [] };
    for (let result of entries.results || []) {
      for (let lexicalEntry of result.lexicalEntries || []) {
        let new_lexicalEntry: YcLexicalEntry = {
          entries: [],
          lexicalCategory: '',
          pronunciations: []
        };
        return_result.lexicalEntries.push(new_lexicalEntry);

        if (lexicalEntry.lexicalCategory) {
          new_lexicalEntry.lexicalCategory = lexicalEntry.lexicalCategory.text;
        }
        for (let entry of lexicalEntry.entries || []) {
          for (let sense of entry.senses || []) {
            for (let definition of sense.definitions || []) {
              new_lexicalEntry.entries.push(definition);
            }

            for (let subsense of sense.subsenses || []) {
              for (let definition of subsense.definitions || []) {
                new_lexicalEntry.entries.push(definition);
              }
            }
          }
        }

        for (let pronunciation of lexicalEntry.pronunciations || []) {
          new_lexicalEntry.pronunciations.push({
            audioFile: pronunciation.audioFile,
            phoneticSpelling: pronunciation.phoneticSpelling
          });
        }
      }
    }
    return res.status(200).send(return_result);
  } catch (e) {
    return res.status(400).send(e);
  }
}

async function CheckOxfordLemmas(word: string) {
  if (!word || !word.trim()) {
    return 'Invalid word.';
  }
  const url =
    'https://od-api.oxforddictionaries.com/api/v2/lemmas/en-gb/' + word;

  try {
    let resp = await Axios(url, config);
    const lemmas: OxfordLemmas = resp.data;
    let return_result: IdText[] = [];
    lemmas.results.forEach(result => {
      result.lexicalEntries.forEach(lexicalEntry => {
        lexicalEntry.inflectionOf.forEach(inflection => {
          return_result.push(inflection);
        });
      });
    });
    return return_result;
  } catch (e) {
    return e.message;
  }
}

export default CheckOxfordEntries;
