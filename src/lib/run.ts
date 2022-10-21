import assertValidUserOptions from './helpers/assert-valid-user-options';
import suggestEmail from './suggest-email';
import getOptions from './helpers/get-options';
import { MailSuggestion, Options, UserOptions } from './types';

function run(userOptions: UserOptions): MailSuggestion | undefined {
  const options: Options = getOptions(userOptions);
  assertValidUserOptions(options || {});

  const email = suggestEmail(options);
  if (!email && userOptions.empty) {
    userOptions.empty();
  }
  if (email && userOptions.suggested) {
    userOptions.suggested(email);
  }
  return email;
}

export default run;
