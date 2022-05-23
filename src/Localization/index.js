import { en } from './en';

const languages = { en };

const currentLanguage = languages[navigator.language];
const constants = currentLanguage ? currentLanguage : en; // en by default

export default constants;