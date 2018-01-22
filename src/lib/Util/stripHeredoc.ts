export default function stripHeredoc(str) {
  str = str.trim();
  let margins = (str.match(/^ +/gm) || []).map(s => s.length);
  let margin = Math.min(...margins);

  return str.replace(new RegExp(`^ {${margin}}`, "gm"), "");
}
