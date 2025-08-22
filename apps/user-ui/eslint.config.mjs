import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nx from '@nx/eslint-plugin';
import tailwind from 'eslint-plugin-tailwindcss';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import baseConfig from '../../eslint.config.mjs';

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...fixupConfigRules(compat.extends('next')),
  ...fixupConfigRules(compat.extends('next/core-web-vitals')),
  ...tailwind.configs['flat/recommended'],
  ...baseConfig,
  ...nx.configs['flat/react-typescript'],
  {
    settings: {
      tailwindcss: {
        config: './tailwind.config.js',
        callees: ['classnames', 'clsx', 'ctl', 'cn', 'tw'],
        removeDuplicates: true,
      },
    },
  },
  {
    ignores: ['.next/**/*'],
  },
];
export default eslintConfig;
