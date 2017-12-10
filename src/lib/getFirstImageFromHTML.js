const IMG_SRC_REGEX = /src=["'](.+?)["']/g;

/**
 * getSrcFromImageHTML - Searches a string to find the src attr on an HTML img tag
 * @param  {String} str [A string, possibly containing HTML markup]
 * @return {String}     [The value for the src attr of an img tag]
 * @return {String}     [Empty fallback string]
 */
export default html => html.match(IMG_SRC_REGEX) ? IMG_SRC_REGEX.exec(html)[1] : ``;
