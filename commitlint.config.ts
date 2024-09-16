import { RuleConfigSeverity, type UserConfig } from '@commitlint/types';

const commitlintConfiguration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [RuleConfigSeverity.Error, 'always', 'kebab-case'],
  },
};

export default commitlintConfiguration;
