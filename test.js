function processHtmlContent(htmlContent) {
    // Split the HTML content into segments based on <a href> tags
    const segments = htmlContent.split(/<a href|<\/a>/);

    // Process each segment
    const processedSegments = segments.map((segment, index) => {
        // If the segment is outside of an <a href> tag, remove parentheses and colons along with the text in between
        if (index % 2 === 0) {
            return segment.replace(/\([^)]*\)|:/g, '');
        }
        // If the segment is inside an <a href> tag, keep the content as is
        return segment;
    });

    // Reconstruct the HTML content
    const processedHtmlContent = processedSegments.join('');

    return processedHtmlContent;
}

// Example usage
const htmlContent = `
    This is some text (with parentheses) and a <a href="https://example.com">link (with parentheses)</a> and more text.
`;

const processedHtmlContent = processHtmlContent(htmlContent);
console.log(processedHtmlContent);